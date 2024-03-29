import { XcodeProject } from "@expo/config-plugins";

export function addXCConfigurationList(
  xcodeProject: XcodeProject,
  {
    name,
    targetName,
    currentProjectVersion,
    bundleIdentifier,
    deploymentTarget,
  }: {
    name: string;
    targetName: string;
    currentProjectVersion: string;
    bundleIdentifier: string;
    deploymentTarget: string;
  }
) {
  const commonBuildSettings: any = {
    ASSETCATALOG_COMPILER_APPICON_NAME: "AppIcon",
    ASSETCATALOG_COMPILER_GENERATE_SWIFT_ASSET_SYMBOL_EXTENSIONS: "YES",
    ASSETCATALOG_COMPILER_GLOBAL_ACCENT_COLOR_NAME: "AccentColor",
    CLANG_ANALYZER_NONNULL: "YES",
    CLANG_ANALYZER_NUMBER_OBJECT_CONVERSION: "YES_AGGRESSIVE",
    CLANG_CXX_LANGUAGE_STANDARD: '"gnu++20"',
    CLANG_ENABLE_OBJC_WEAK: "YES",
    CLANG_WARN_DOCUMENTATION_COMMENTS: "YES",
    CLANG_WARN_QUOTED_INCLUDE_IN_FRAMEWORK_HEADER: "YES",
    CLANG_WARN_UNGUARDED_AVAILABILITY: "YES_AGGRESSIVE",
    CODE_SIGN_IDENTITY: '"Apple Development"',
    CODE_SIGN_STYLE: "Automatic",
    CURRENT_PROJECT_VERSION: 1,
    DEBUG_INFORMATION_FORMAT: "dwarf",
    DEVELOPMENT_ASSET_PATHS: '"\\"../SampleWatch Watch App/Preview Content\\""',
    DEVELOPMENT_TEAM: "4L58M98Y42",
    ENABLE_PREVIEWS: "YES",
    ENABLE_USER_SCRIPT_SANDBOXING: "YES",
    GCC_C_LANGUAGE_STANDARD: "gnu17",
    GENERATE_INFOPLIST_FILE: "YES",
    INFOPLIST_KEY_CFBundleDisplayName: "SampleWatch",
    INFOPLIST_KEY_UISupportedInterfaceOrientations:
      '"UIInterfaceOrientationPortrait UIInterfaceOrientationPortraitUpsideDown"',
    INFOPLIST_KEY_WKCompanionAppBundleIdentifier:
      "com.wa2goose.RealtimeWatchApp",
    LD_RUNPATH_SEARCH_PATHS: '("$(inherited)","@executable_path/Frameworks")',
    LOCALIZATION_PREFERS_STRING_CATALOGS: "YES",
    MARKETING_VERSION: 1.0,
    MTL_ENABLE_DEBUG_INFO: "INCLUDE_SOURCE",
    MTL_FAST_MATH: "YES",
    OTHER_SWIFT_FLAGS: '"$(inherited) -D EXPO_CONFIGURATION_DEBUG"',
    PRODUCT_BUNDLE_IDENTIFIER: "com.wa2goose.RealtimeWatchApp.watchkitapp",
    PRODUCT_NAME: '"$(TARGET_NAME)"',
    SDKROOT: "watchos",
    SKIP_INSTALL: "YES",
    SWIFT_ACTIVE_COMPILATION_CONDITIONS: '"DEBUG $(inherited)"',
    SWIFT_EMIT_LOC_STRINGS: "YES",
    SWIFT_OPTIMIZATION_LEVEL: "-Onone",
    SWIFT_VERSION: 5.0,
    TARGETED_DEVICE_FAMILY: 4,
    WATCHOS_DEPLOYMENT_TARGET: 9.3,
  };

  const buildConfigurationsList = [
    {
      isa: "XCBuildConfiguration",
      buildSettings: {
        ...commonBuildSettings,
      },
      name: "Debug",
    },
    {
      isa: "XCBuildConfiguration",
      buildSettings: {
        ...commonBuildSettings,
      },
      name: "Release",
    },
  ];

  const xCConfigurationList = xcodeProject.addXCConfigurationList(
    buildConfigurationsList,
    "Release",
    `Build configuration list for PBXNativeTarget "${targetName}"`
  );

  return xCConfigurationList;
}
