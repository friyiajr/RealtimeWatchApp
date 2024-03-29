"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addToPbxNativeTargetSection = void 0;
function addToPbxNativeTargetSection(xcodeProject, { targetName, targetUuid, productFile, xCConfigurationList, }) {
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
            productReference: productFile.fileRef, // TODO: FIND THIS THIS VALUE IS WRONG
            productType: `"com.apple.product-type.application"`,
        },
    };
    xcodeProject.addToPbxNativeTargetSection(target);
    return target;
}
exports.addToPbxNativeTargetSection = addToPbxNativeTargetSection;
