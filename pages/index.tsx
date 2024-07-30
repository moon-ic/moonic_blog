import { FC, ReactElement } from "react";

export interface IProps {
	children?: ReactElement;
}

const Home: FC<IProps> = (props) => {
	const { children } = props;
	return <div>hello next</div>;
};
Home.displayName = "Home";

export default Home;
