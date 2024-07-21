#import "AppDelegate.h"

#import <React/RCTBridge.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import <RNScreens/UIScreenContainer.h> // Adicione esta linha
#import <ReactNativeGestureHandler/RNGestureHandlerEnabledRootView.h> // Adicione esta linha

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  RCTBridge *bridge = [[RCTBridge alloc] initWithDelegate:self launchOptions:launchOptions];
  RNGestureHandlerEnabledRootView *rootView = [[RNGestureHandlerEnabledRootView alloc] initWithBridge:bridge
                                                                                             moduleName:@"modal_dinamico"
                                                                                      initialProperties:nil];

  rootView.backgroundColor = [[UIColor alloc] initWithWhite:1.0 alpha:1.0];
  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  return YES;
}

@end
