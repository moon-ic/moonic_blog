// next.config.mjs
import { createRequire } from "module";
const require = createRequire(import.meta.url);

export default {
	webpack(config, { defaultLoaders }) {
		config.module.rules.push({
			test: /\.less$/,
			use: [
				defaultLoaders.babel,
				{
					loader: require("styled-jsx/webpack").loader,
					options: {
						type: "scoped"
					}
				},
				"css-loader",
				"less-loader"
			]
		});

		return config;
	}
};
