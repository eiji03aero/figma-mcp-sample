import { css } from "@emotion/css";
import { Message } from "@/views/HelloWorld/components/Message";
import { GreatCounter } from "@/views/HelloWorld/standalone/GreatCounter";

export const HelloWorld = () => {
	return (
		<>
			<div className={Styles.container}>
				<Message />
			</div>
			<div>
				<GreatCounter />
			</div>
		</>
	);
};

const Styles = {
	container: css`
		padding: 1rem;
		background: #fafafa;
	`,
};
