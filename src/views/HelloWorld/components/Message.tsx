import { css } from "@emotion/css";

import { useHelloWorld } from "@/views/HelloWorld/hooks/useHelloWorld";

export const Message = () => {
	const { sentence } = useHelloWorld();
	return <div className={Styles.message}>{sentence}</div>;
};

const Styles = {
	message: css`
		font-size: 1.5rem;
		color: #ff5555;
	`,
};
