"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_plugins_1 = require("@expo/config-plugins");
const withXcode_1 = require("./withXcode");
const withAppClip = (config) => {
    const bundleIdentifier = `${config.ios?.bundleIdentifier}.watchkitapp`;
    const targetName = `SampleWatch Watch App`;
    config = (0, config_plugins_1.withPlugins)(config, [
        [
            withXcode_1.withXcode,
            {
                name: "watchkitapp",
                targetName,
                bundleIdentifier,
                deploymentTarget: "9.3",
            },
        ],
    ]);
    return config;
};
exports.default = withAppClip;
