"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBuildPhases = void 0;
const util_1 = __importDefault(require("util"));
function addBuildPhases(xcodeProject, { targetUuid, groupName, productFile, }) {
    const buildPath = `"$(CONTENTS_FOLDER_PATH)/Watch"`;
    const folderType = "watch2_app";
    const buildPhaseFiles = [
        "ContentView.swift",
        "SampleWatchApp.swift",
        "ViewModel.swift",
    ];
    // Sources build phase
    xcodeProject.addBuildPhase(buildPhaseFiles, "PBXSourcesBuildPhase", groupName, targetUuid, folderType, buildPath);
    // Copy files build phase
    xcodeProject.addBuildPhase([], "PBXCopyFilesBuildPhase", groupName, xcodeProject.getFirstTarget().uuid, folderType, buildPath);
    xcodeProject
        .buildPhaseObject("PBXCopyFilesBuildPhase", groupName, productFile.target)
        .files.push({
        value: productFile.uuid,
        comment: util_1.default.format("%s in %s", productFile.basename, productFile.group), // longComment(file);
    });
    xcodeProject.addToPbxBuildFileSection(productFile);
    // Frameworks build phase
    xcodeProject.addBuildPhase([], "PBXFrameworksBuildPhase", groupName, targetUuid, folderType, buildPath);
    // Resources build phase
    xcodeProject.addBuildPhase(["Assets.xcassets", "Preview Assets.xcassets"], "PBXResourcesBuildPhase", groupName, targetUuid, folderType, buildPath);
}
exports.addBuildPhases = addBuildPhases;
