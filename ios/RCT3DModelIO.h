//
//  RCT3DModelIO.h
//  rn-avr-model-view
//
//  Created by Le Nguyen Anh on 4/19/21.
//

#import <Foundation/Foundation.h>
#import <ModelIO/ModelIO.h>
#import <ModelIO/MDLAsset.h>
#import <SceneKit/ModelIO.h>
#import <UIKit/UIKit.h>

@interface RCT3DModelIO : NSObject

+ (instancetype)sharedInstance;

- (void)loadModel:(NSString *)modelSrc textureSrc:(NSString *)textureSrc completion:(void (^)(SCNNode * node))completion;
@end
