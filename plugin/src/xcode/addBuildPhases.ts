import { XcodeProject } from "@expo/config-plugins";
import util from "util";

export function addBuildPhases(
  xcodeProject: XcodeProject,
  {
    targetUuid,
    groupName,
    productFile,
  }: {
    targetUuid: string;
    groupName: string;
    productFile: {
      uuid: string;
      target: string;
      basename: string;
      group: string;
    };
  }
) {
  const buildPath = `"$(CONTENTS_FOLDER_PATH)/Watch"`;
  const folderType = "watch2_app";

  const buildPhaseFiles = [
    "ContentView.swift",
    "SampleWatchApp.swift",
    "ViewModel.swift",
  ];

  // Sources build phase
  xcodeProject.addBuildPhase(
    buildPhaseFiles,
    "PBXSourcesBuildPhase",
    groupName,
    targetUuid,
    folderType,
    buildPath
  );

  // Copy files build phase
  xcodeProject.addBuildPhase(
    [],
    "PBXCopyFilesBuildPhase",
    groupName,
    xcodeProject.getFirstTarget().uuid,
    folderType,
    buildPath
  );

  xcodeProject
    .buildPhaseObject("PBXCopyFilesBuildPhase", groupName, productFile.target)
    .files.push({
      value: productFile.uuid,
      comment: util.format("%s in %s", productFile.basename, productFile.group), // longComment(file);
    });
  xcodeProject.addToPbxBuildFileSection(productFile);

  // Frameworks build phase
  xcodeProject.addBuildPhase(
    [],
    "PBXFrameworksBuildPhase",
    groupName,
    targetUuid,
    folderType,
    buildPath
  );

  // Resources build phase
  xcodeProject.addBuildPhase(
    ["Assets.xcassets", "Preview Assets.xcassets"],
    "PBXResourcesBuildPhase",
    groupName,
    targetUuid,
    folderType,
    buildPath
  );
}
