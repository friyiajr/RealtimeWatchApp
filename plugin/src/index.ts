import { ConfigPlugin, withPlugins, IOSConfig } from "@expo/config-plugins";

import { withXcode } from "./withXcode";

const withAppClip: ConfigPlugin = (config) => {
  const bundleIdentifier = `${config.ios?.bundleIdentifier}.watchkitapp`;
  const targetName = `SampleWatch Watch App`;

  config = withPlugins(config, [
    [
      withXcode,
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

export default withAppClip;
