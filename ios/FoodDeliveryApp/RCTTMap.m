#import "RCTTMap.h"
#import "TMapTapi.h"

@implementation RCTTMap
- (instancetype)init
{
    self = [super init];
    [TMapTapi setSKTMapAuthenticationWithDelegate:self apiKey:@"1Y5eY1WUkx4HI5Vn0NvxX4iGIRKHN87A6URnGmiA"];
    return self;
}
- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}
RCT_EXPORT_MODULE(TMap);

RCT_EXPORT_METHOD(openNavi: (NSString *)name longitude:(NSString *)longitude latitude:(NSString *)latitude vehicle:(NSString *)vehicle resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject) {
    NSLog(@"y,x %@, %@", latitude, longitude);
    BOOL installed = [TMapTapi isTmapApplicationInstalled];
    if (installed) {
        CLLocationCoordinate2D centerCoordinate = {[latitude doubleValue], [longitude doubleValue]};
        BOOL flag = [TMapTapi invokeRoute:name coordinate: centerCoordinate];
        NSLog(flag ? @"Yes" : @"No");
        if (flag) {
            resolve(@(YES));
        } else {
            resolve(@(NO));
        }
    } else {
        resolve(@(NO));
    }
}

@end
