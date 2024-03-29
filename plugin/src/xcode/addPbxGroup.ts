import { XcodeProject } from "@expo/config-plugins";

export function addPbxGroup(
  xcodeProject: XcodeProject,
  { targetName }: { targetName: string }
) {
  // Add PBX group
  const { uuid: pbxGroupUuid } = xcodeProject.addPbxGroup(
    [
      "ContentView.swift",
      "SampleWatchApp.swift",
      "ViewModel.swift",
      "Assets.xcassets",
      "Preview Assets.xcassets",
    ],
    `"${targetName}"`,
    `"../${targetName}"`
  );

  // Add PBXGroup to top level group
  const groups = xcodeProject.hash.project.objects["PBXGroup"];
  if (pbxGroupUuid) {
    Object.keys(groups).forEach(function (key) {
      if (groups[key].name === undefined && groups[key].path === undefined) {
        xcodeProject.addToPbxGroup(pbxGroupUuid, key);
      }
    });
  }
}
