const CACHE_NAME = 'ai-dd-projects-cache-v1';
const PROJECT_CACHE_KEY = 'projects-data';

// サービスワーカーのインストール
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Service Worker: Cache opened');
      return cache;
    })
  );
});

// サービスワーカーのアクティベート
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Service Worker: Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// ネットワークリクエストの補足
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  // http://ai-dd.com/apis/projects のリクエストを補足
  if (url.hostname === 'ai-dd.com' && url.pathname === '/apis/projects') {
    if (event.request.method === 'POST') {
      // POST リクエストの処理
      event.respondWith(handleProjectPost(event.request));
    } else if (event.request.method === 'GET') {
      // GET リクエストの処理
      event.respondWith(handleProjectGet(event.request));
    }
  }
});

// POST リクエストの処理：プロジェクトデータをキャッシュに保存し、レスポンスを返す
async function handleProjectPost(request) {
  try {
    console.log('Service Worker: Handling POST request to /apis/projects');
    
    // リクエストボディを取得
    const requestData = await request.json();
    
    // キャッシュを開く
    const cache = await caches.open(CACHE_NAME);
    
    // 既存のプロジェクトデータを取得
    let existingProjects = [];
    const cachedResponse = await cache.match(PROJECT_CACHE_KEY);
    if (cachedResponse) {
      const cachedData = await cachedResponse.json();
      existingProjects = cachedData.projects || [];
    }
    
    // 新しいプロジェクトを追加（IDが存在する場合は更新）
    const newProject = {
      id: requestData.id || Date.now().toString(),
      ...requestData,
      createdAt: requestData.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    const projectIndex = existingProjects.findIndex(p => p.id === newProject.id);
    if (projectIndex >= 0) {
      existingProjects[projectIndex] = newProject;
    } else {
      existingProjects.push(newProject);
    }
    
    // 更新されたプロジェクトリストをキャッシュに保存
    const updatedData = {
      projects: existingProjects,
      lastUpdated: new Date().toISOString()
    };
    
    const cacheResponse = new Response(JSON.stringify(updatedData), {
      headers: { 'Content-Type': 'application/json' }
    });
    
    await cache.put(PROJECT_CACHE_KEY, cacheResponse.clone());
    
    // 成功レスポンスを返す
    const successResponse = {
      success: true,
      message: 'Project saved successfully',
      project: newProject
    };
    
    console.log('Service Worker: Project saved to cache:', newProject);
    
    return new Response(JSON.stringify(successResponse), {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
      }
    });
  } catch (error) {
    console.error('Service Worker: Error handling POST request:', error);
    
    const errorResponse = {
      success: false,
      message: 'Failed to save project',
      error: error.message
    };
    
    return new Response(JSON.stringify(errorResponse), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
}

// GET リクエストの処理：キャッシュに保存されたプロジェクトを返す
async function handleProjectGet(request) {
  try {
    console.log('Service Worker: Handling GET request to /apis/projects');
    
    const cache = await caches.open(CACHE_NAME);
    const cachedResponse = await cache.match(PROJECT_CACHE_KEY);
    
    if (cachedResponse) {
      const cachedData = await cachedResponse.json();
      console.log('Service Worker: Returning cached projects:', cachedData.projects);
      
      const response = {
        success: true,
        projects: cachedData.projects || [],
        lastUpdated: cachedData.lastUpdated
      };
      
      return new Response(JSON.stringify(response), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        }
      });
    } else {
      console.log('Service Worker: No cached projects found');
      
      const response = {
        success: true,
        projects: [],
        message: 'No projects found'
      };
      
      return new Response(JSON.stringify(response), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        }
      });
    }
  } catch (error) {
    console.error('Service Worker: Error handling GET request:', error);
    
    const errorResponse = {
      success: false,
      message: 'Failed to retrieve projects',
      error: error.message
    };
    
    return new Response(JSON.stringify(errorResponse), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
} 