import { XcodeProject } from "@expo/config-plugins";

export function addToPbxNativeTargetSection(
  xcodeProject: XcodeProject,
  {
    targetName,
    targetUuid,
    productFile,
    xCConfigurationList,
  }: {
    targetName: string;
    targetUuid: string;
    productFile: { fileRef: string };
    xCConfigurationList: { uuid: string };
  }
) {
  const target = {
    uuid: targetUuid,
    pbxNativeTarget: {
      isa: "PBXNativeTarget",
      buildConfigurationList: xCConfigurationList.uuid,
      buildPhases: [],
      buildRules: [],
      dependencies: [],
      name: `"${targetName}"`,
      productName: `"${targetName}"`,
      productReference: productFile.fileRef,
      productType: `"com.apple.product-type.application"`,
    },
  };

  xcodeProject.addToPbxNativeTargetSection(target);

  return target;
}
