import { getHello } from "@/views/HelloWorld/services/hello";

export const useHelloWorld = () => {
	const sentence = getHello();
	return { sentence };
};
