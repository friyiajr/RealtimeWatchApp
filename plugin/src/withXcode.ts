import { ConfigPlugin, withXcodeProject } from "@expo/config-plugins";

import { addXCConfigurationList } from "./xcode/addXCConfigurationList";
import { addProductFile } from "./xcode/addProductFile";
import { addToPbxNativeTargetSection } from "./xcode/addToPbxNativeTargetSection";
import { addToPbxProjectSection } from "./xcode/addToPbxProjectSection";
import { addTargetDependency } from "./xcode/addTargetDependency";
import { addPbxGroup } from "./xcode/addPbxGroup";
import { addBuildPhases } from "./xcode/addBuildPhases";
import { XcodeProject } from "@expo/config-plugins";

export const withXcode: ConfigPlugin<{
  name: string;
  targetName: string;
  bundleIdentifier: string;
  deploymentTarget: string;
}> = (config, { name, targetName, bundleIdentifier, deploymentTarget }) => {
  return withXcodeProject(config, (config) => {
    const xcodeProject = config.modResults as XcodeProject;

    const targetUuid = xcodeProject.generateUuid();
    const groupName = "Embed Watch Content";

    const xCConfigurationList = addXCConfigurationList(xcodeProject, {
      name,
      targetName,
      currentProjectVersion: config.ios!.buildNumber || "1",
      bundleIdentifier,
      deploymentTarget,
    });

    const productFile = addProductFile(xcodeProject, {
      targetName,
      groupName,
    });

    const target = addToPbxNativeTargetSection(xcodeProject, {
      targetName,
      targetUuid,
      productFile,
      xCConfigurationList,
    });

    addTargetDependency(xcodeProject, target);
    addToPbxProjectSection(xcodeProject, target);

    addPbxGroup(xcodeProject, {
      targetName,
    });

    addBuildPhases(xcodeProject, {
      targetUuid,
      groupName,
      productFile,
    });

    return config;
  });
};
