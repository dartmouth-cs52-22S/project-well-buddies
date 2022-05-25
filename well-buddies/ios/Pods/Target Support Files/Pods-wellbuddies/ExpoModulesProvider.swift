/**
 * Automatically generated by expo-modules-autolinking.
 *
 * This autogenerated class provides a list of classes of native Expo modules,
 * but only these that are written in Swift and use the new API for creating Expo modules.
 */

import ExpoModulesCore
import ExpoAdapterGoogleSignIn
import EASClient
import ExpoKeepAwake
import EXUpdates

@objc(ExpoModulesProvider)
public class ExpoModulesProvider: ModulesProvider {
  public override func getModuleClasses() -> [AnyModule.Type] {
    return [
      EASClientModule.self,
      KeepAwakeModule.self
    ]
  }

  public override func getAppDelegateSubscribers() -> [ExpoAppDelegateSubscriber.Type] {
    return [
      GoogleSignInAppDelegate.self,
      ExpoUpdatesAppDelegateSubscriber.self
    ]
  }

  public override func getReactDelegateHandlers() -> [ExpoReactDelegateHandlerTupleType] {
    return [
      (packageName: "expo-updates", handler: ExpoUpdatesReactDelegateHandler.self)
    ]
  }
}
