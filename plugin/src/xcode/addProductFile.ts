import { XcodeProject } from "@expo/config-plugins";

export function addProductFile(
  xcodeProject: XcodeProject,
  { targetName, groupName }: { targetName: string; groupName: string }
) {
  const options = {
    basename: `${targetName}`,
    group: groupName,
    explicitFileType: "wrapper.application",
    settings: {
      ATTRIBUTES: ["RemoveHeadersOnCopy"],
    },
    includeInIndex: 0,
    path: `${targetName}`,
    sourceTree: "BUILT_PRODUCTS_DIR",
  };

  const productFile = xcodeProject.addProductFile(targetName, options);

  return productFile;
}
