(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.currentSoundStreamInMovieclip;
	this.actionFrames = [];
	this.soundStreamDuration = new Map();
	this.streamSoundSymbolsList = [];

	this.gotoAndPlayForStreamSoundSync = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.gotoAndPlay = function(positionOrLabel){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(positionOrLabel);
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(this.currentFrame);
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		this.clearAllSoundStreams();
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
		this.clearAllSoundStreams();
	}
	this.startStreamSoundsForTargetedFrame = function(targetFrame){
		for(var index=0; index<this.streamSoundSymbolsList.length; index++){
			if(index <= targetFrame && this.streamSoundSymbolsList[index] != undefined){
				for(var i=0; i<this.streamSoundSymbolsList[index].length; i++){
					var sound = this.streamSoundSymbolsList[index][i];
					if(sound.endFrame > targetFrame){
						var targetPosition = Math.abs((((targetFrame - sound.startFrame)/lib.properties.fps) * 1000));
						var instance = playSound(sound.id);
						var remainingLoop = 0;
						if(sound.offset){
							targetPosition = targetPosition + sound.offset;
						}
						else if(sound.loop > 1){
							var loop = targetPosition /instance.duration;
							remainingLoop = Math.floor(sound.loop - loop);
							if(targetPosition == 0){ remainingLoop -= 1; }
							targetPosition = targetPosition % instance.duration;
						}
						instance.loop = remainingLoop;
						instance.position = Math.round(targetPosition);
						this.InsertIntoSoundStreamData(instance, sound.startFrame, sound.endFrame, sound.loop , sound.offset);
					}
				}
			}
		}
	}
	this.InsertIntoSoundStreamData = function(soundInstance, startIndex, endIndex, loopValue, offsetValue){ 
 		this.soundStreamDuration.set({instance:soundInstance}, {start: startIndex, end:endIndex, loop:loopValue, offset:offsetValue});
	}
	this.clearAllSoundStreams = function(){
		var keys = this.soundStreamDuration.keys();
		for(var i = 0;i<this.soundStreamDuration.size; i++){
			var key = keys.next().value;
			key.instance.stop();
		}
 		this.soundStreamDuration.clear();
		this.currentSoundStreamInMovieclip = undefined;
	}
	this.stopSoundStreams = function(currentFrame){
		if(this.soundStreamDuration.size > 0){
			var keys = this.soundStreamDuration.keys();
			for(var i = 0; i< this.soundStreamDuration.size ; i++){
				var key = keys.next().value; 
				var value = this.soundStreamDuration.get(key);
				if((value.end) == currentFrame){
					key.instance.stop();
					if(this.currentSoundStreamInMovieclip == key) { this.currentSoundStreamInMovieclip = undefined; }
					this.soundStreamDuration.delete(key);
				}
			}
		}
	}

	this.computeCurrentSoundStreamInstance = function(currentFrame){
		if(this.currentSoundStreamInMovieclip == undefined){
			if(this.soundStreamDuration.size > 0){
				var keys = this.soundStreamDuration.keys();
				var maxDuration = 0;
				for(var i=0;i<this.soundStreamDuration.size;i++){
					var key = keys.next().value;
					var value = this.soundStreamDuration.get(key);
					if(value.end > maxDuration){
						maxDuration = value.end;
						this.currentSoundStreamInMovieclip = key;
					}
				}
			}
		}
	}
	this.getDesiredFrame = function(currentFrame, calculatedDesiredFrame){
		for(var frameIndex in this.actionFrames){
			if((frameIndex > currentFrame) && (frameIndex < calculatedDesiredFrame)){
				return frameIndex;
			}
		}
		return calculatedDesiredFrame;
	}

	this.syncStreamSounds = function(){
		this.stopSoundStreams(this.currentFrame);
		this.computeCurrentSoundStreamInstance(this.currentFrame);
		if(this.currentSoundStreamInMovieclip != undefined){
			var soundInstance = this.currentSoundStreamInMovieclip.instance;
			if(soundInstance.position != 0){
				var soundValue = this.soundStreamDuration.get(this.currentSoundStreamInMovieclip);
				var soundPosition = (soundValue.offset?(soundInstance.position - soundValue.offset): soundInstance.position);
				var calculatedDesiredFrame = (soundValue.start)+((soundPosition/1000) * lib.properties.fps);
				if(soundValue.loop > 1){
					calculatedDesiredFrame +=(((((soundValue.loop - soundInstance.loop -1)*soundInstance.duration)) / 1000) * lib.properties.fps);
				}
				calculatedDesiredFrame = Math.floor(calculatedDesiredFrame);
				var deltaFrame = calculatedDesiredFrame - this.currentFrame;
				if(deltaFrame >= 2){
					this.gotoAndPlayForStreamSoundSync(this.getDesiredFrame(this.currentFrame,calculatedDesiredFrame));
				}
			}
		}
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Group = function() {
	this.initialize(img.Group);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,870,325);


(lib.Group_1 = function() {
	this.initialize(img.Group_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,870,325);


(lib.Group_1_1 = function() {
	this.initialize(img.Group_1_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1163,137);


(lib.Group_10 = function() {
	this.initialize(img.Group_10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,153,114);


(lib.Group_12 = function() {
	this.initialize(img.Group_12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,88);


(lib.Group_12_1 = function() {
	this.initialize(img.Group_12_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,16);


(lib.Group_13 = function() {
	this.initialize(img.Group_13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,157,139);


(lib.Group_13_1 = function() {
	this.initialize(img.Group_13_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,14,18);


(lib.Group_11 = function() {
	this.initialize(img.Group_11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,173,184);


(lib.Group_14 = function() {
	this.initialize(img.Group_14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,39);


(lib.Group_1_2 = function() {
	this.initialize(img.Group_1_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,145);


(lib.Group_10_1 = function() {
	this.initialize(img.Group_10_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,18,32);


(lib.Group_11_1 = function() {
	this.initialize(img.Group_11_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,38,53);


(lib.Group_17 = function() {
	this.initialize(img.Group_17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,44,23);


(lib.Group_15 = function() {
	this.initialize(img.Group_15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,68,94);


(lib.Group_18 = function() {
	this.initialize(img.Group_18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,17,48);


(lib.Group_17_1 = function() {
	this.initialize(img.Group_17_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,25,31);


(lib.Group_19 = function() {
	this.initialize(img.Group_19);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,19,52);


(lib.Group_18_1 = function() {
	this.initialize(img.Group_18_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,62);


(lib.Group_14_1 = function() {
	this.initialize(img.Group_14_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,41,24);


(lib.Group_2 = function() {
	this.initialize(img.Group_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,870,326);


(lib.Group_2_1 = function() {
	this.initialize(img.Group_2_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1380,490);


(lib.Group_2_2 = function() {
	this.initialize(img.Group_2_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,82);


(lib.Group_20 = function() {
	this.initialize(img.Group_20);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,43);


(lib.Group_20_1 = function() {
	this.initialize(img.Group_20_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,16);


(lib.Group_16 = function() {
	this.initialize(img.Group_16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,43,22);


(lib.Group_15_1 = function() {
	this.initialize(img.Group_15_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,56,51);


(lib.Group_19_1 = function() {
	this.initialize(img.Group_19_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,93,97);


(lib.Group_22 = function() {
	this.initialize(img.Group_22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,69,71);


(lib.Group_2_3 = function() {
	this.initialize(img.Group_2_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,77);


(lib.Group_23 = function() {
	this.initialize(img.Group_23);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,39,92);


(lib.Group_3 = function() {
	this.initialize(img.Group_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,825,943);


(lib.Group_3_1 = function() {
	this.initialize(img.Group_3_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,17,33);


(lib.Group_3_2 = function() {
	this.initialize(img.Group_3_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,734,366);


(lib.Group_4 = function() {
	this.initialize(img.Group_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1146,487);


(lib.Group_4_1 = function() {
	this.initialize(img.Group_4_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,734,367);


(lib.Group_5 = function() {
	this.initialize(img.Group_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,101);


(lib.Group_24 = function() {
	this.initialize(img.Group_24);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,77,51);


(lib.Group_5_1 = function() {
	this.initialize(img.Group_5_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,870,326);


(lib.Group_5_2 = function() {
	this.initialize(img.Group_5_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1130,1108);


(lib.Group_6 = function() {
	this.initialize(img.Group_6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1161,645);


(lib.Group_6_1 = function() {
	this.initialize(img.Group_6_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,76);


(lib.Group_7 = function() {
	this.initialize(img.Group_7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,104);


(lib.Group_8 = function() {
	this.initialize(img.Group_8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,167,92);


(lib.Group_8_1 = function() {
	this.initialize(img.Group_8_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,69,85);


(lib.Group_9 = function() {
	this.initialize(img.Group_9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,82,87);


(lib.Group_21 = function() {
	this.initialize(img.Group_21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,46);


(lib.Group_9_1 = function() {
	this.initialize(img.Group_9_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,138);


(lib.Path = function() {
	this.initialize(img.Path);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3126,1487);


(lib.Group_2_4 = function() {
	this.initialize(img.Group_2_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,50);


(lib.Group_21_1 = function() {
	this.initialize(img.Group_21_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,69,18);


(lib.Group_16_1 = function() {
	this.initialize(img.Group_16_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,24,24);


(lib.PathPath = function() {
	this.initialize(img.PathPath);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,547,163);


(lib.Group_1_3 = function() {
	this.initialize(img.Group_1_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,35,102);


(lib.Group_1_4 = function() {
	this.initialize(img.Group_1_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1563,243);


(lib.Path_1 = function() {
	this.initialize(img.Path_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1563,1034);


(lib.Group_25 = function() {
	this.initialize(img.Group_25);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,734,367);


(lib.PathPathPathPath = function() {
	this.initialize(img.PathPathPathPath);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1563,382);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Group_1();
	this.instance.setTransform(0,0,0.2978,0.2484);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,259.1,80.8), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Group_2_1();
	this.instance.setTransform(0,0,0.3824,0.3518);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,527.7,172.4), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Group_4_1();
	this.instance.setTransform(0,0,0.4552,0.2345);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,334.1,86.1), null);


(lib.startB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.start_t = new cjs.Text("start", "120px 'Tahoma'");
	this.start_t.name = "start_t";
	this.start_t.lineHeight = 147;
	this.start_t.lineWidth = 266;
	this.start_t.parent = this;
	this.start_t.setTransform(90.35,50.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#EF4335").ss(1,1,1).p("A75xvMA3zAAAQCRAABnBmQBmBnAACRIAAYkQAACRhmBmQhnBmiRAAMg3zAAAQiRAAhnhmQhmhmAAiRIAA4kQAAiRBmhnQBnhmCRAAg");
	this.shape.setTransform(214.1211,115.9984,0.8941,0.7809);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EF4335").s().p("A76RwQiQAAhnhmQhmhmAAiSIAA4kQAAiQBmhnQBnhmCQAAMA30AAAQCRAABnBmQBmBnAACQIAAYkQAACShmBmQhnBmiRAAg");
	this.shape_1.setTransform(214.1211,115.9984,0.8941,0.7809);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#EE2C1E").ss(1,1,1).p("A75xvMA3zAAAQCRAABnBmQBmBnAACRIAAYkQAACRhmBmQhnBmiRAAMg3zAAAQiRAAhnhmQhmhmAAiRIAA4kQAAiRBmhnQBnhmCRAAg");
	this.shape_2.setTransform(213.6,113.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EE2C1E").s().p("A76RwQiQAAhnhmQhmhmAAiSIAA4kQAAiQBmhnQBnhmCQAAMA30AAAQCRAABnBmQBmBnAACQIAAYkQAACShmBmQhnBmiRAAg");
	this.shape_3.setTransform(213.6,113.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#C44335").ss(1,1,1).p("A75xvMA3zAAAQCRAABnBmQBmBnAACRIAAYkQAACRhmBmQhnBmiRAAMg3zAAAQiRAAhnhmQhmhmAAiRIAA4kQAAiRBmhnQBnhmCRAAg");
	this.shape_4.setTransform(214.1211,115.9984,0.8941,0.7809);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C44335").s().p("A76RwQiQAAhnhmQhmhmAAiSIAA4kQAAiQBmhnQBnhmCQAAMA30AAAQCRAABnBmQBmBnAACQIAAYkQAACShmBmQhnBmiRAAg");
	this.shape_5.setTransform(214.1211,115.9984,0.8941,0.7809);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#C32C1E").ss(1,1,1).p("A75xvMA3zAAAQCRAABnBmQBmBnAACRIAAYkQAACRhmBmQhnBmiRAAMg3zAAAQiRAAhnhmQhmhmAAiRIAA4kQAAiRBmhnQBnhmCRAAg");
	this.shape_6.setTransform(213.6,113.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C32C1E").s().p("A76RwQiQAAhnhmQhmhmAAiSIAA4kQAAiQBmhnQBnhmCQAAMA30AAAQCRAABnBmQBmBnAACQIAAYkQAACShmBmQhnBmiRAAg");
	this.shape_7.setTransform(213.6,113.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#EF4335").ss(1,1,1).p("A75xvMA3zAAAQCRAABnBmQBmBnAACRIAAYkQAACRhmBmQhnBmiRAAMg3zAAAQiRAAhnhmQhmhmAAiRIAA4kQAAiRBmhnQBnhmCRAAg");
	this.shape_8.setTransform(213.6,113.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EF4335").s().p("A76RwQiQAAhnhmQhmhmAAiSIAA4kQAAiQBmhnQBnhmCQAAMA30AAAQCRAABnBmQBmBnAACQIAAYkQAACShmBmQhnBmiRAAg");
	this.shape_9.setTransform(213.6,113.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF3300").s().p("EgvUAZ3MAAAgztMBeqAAAMAAAAztg");
	this.shape_10.setTransform(223,112.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.start_t}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.start_t}]},1).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_1},{t:this.shape},{t:this.start_t}]},1).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_1},{t:this.shape},{t:this.start_t}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.9,-52.9,605.9,331);


(lib.Scene_1_sky_strip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sky_strip
	this.instance = new lib.Group_1_4();
	this.instance.setTransform(-2,430,0.8195,0.7245);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(377).to({_off:false},0).wait(216).to({scaleX:0.8216,x:1,y:426},0).wait(21));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_montain_r = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// montain_r
	this.instance = new lib.PathPath();
	this.instance.setTransform(831,484,0.8195,0.7245);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(377).to({_off:false},0).wait(237));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_montain_l = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// montain_l
	this.instance = new lib.Group_1_1();
	this.instance.setTransform(-2,503,0.8195,0.7245);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(377).to({_off:false},0).wait(237));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_middel_grass = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// middel_grass
	this.instance = new lib.PathPathPathPath();
	this.instance.setTransform(-2,602,0.8215,0.7244);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(377).to({_off:false},0).wait(216).to({scaleX:0.8216,scaleY:0.7245,x:1},0).wait(21));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_hill_r = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hill_r
	this.instance = new lib.PathPath();
	this.instance.setTransform(831,484,0.8195,0.7245);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(377).to({_off:false},0).wait(237));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_cloud_r = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cloud_r
	this.instance = new lib.Group_25();
	this.instance.setTransform(933,56,0.4066,0.4864);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},116).wait(28));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_cloud_l = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cloud_l
	this.instance = new lib.Group_2();
	this.instance.setTransform(70,330,0.4066,0.4864);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},116).wait(28));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_blue_backround = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// blue_backround
	this.instance = new lib.Path();
	this.instance.setTransform(0,0,0.4091,0.4864);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(386));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_all_green = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// all_green
	this.instance = new lib.Path_1();
	this.instance.setTransform(-2,0,0.8195,0.961);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(377).to({_off:false},0).wait(216).to({scaleX:0.8216,scaleY:0.6597,x:1,y:-10},0).wait(21));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1___trees_l = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// __trees_l
	this.instance = new lib.Group_2_2();
	this.instance.setTransform(345,500,0.8195,0.7245);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(377).to({_off:false},0).wait(237));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.replay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.replay_t = new cjs.Text("replay", "120px 'Tahoma'");
	this.replay_t.name = "replay_t";
	this.replay_t.lineHeight = 147;
	this.replay_t.lineWidth = 336;
	this.replay_t.parent = this;
	this.replay_t.setTransform(47.7,44.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#EF4335").ss(1,1,1).p("A75xvMA3zAAAQCRAABnBmQBmBnAACRIAAYkQAACRhmBmQhnBmiRAAMg3zAAAQiRAAhnhmQhmhmAAiRIAA4kQAAiRBmhnQBnhmCRAAg");
	this.shape.setTransform(214.1211,115.9984,0.8941,0.7809);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EF4335").s().p("A76RwQiQAAhnhmQhmhmAAiSIAA4kQAAiQBmhnQBnhmCQAAMA30AAAQCRAABnBmQBmBnAACQIAAYkQAACShmBmQhnBmiRAAg");
	this.shape_1.setTransform(214.1211,115.9984,0.8941,0.7809);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#EE2C1E").ss(1,1,1).p("A75xvMA3zAAAQCRAABnBmQBmBnAACRIAAYkQAACRhmBmQhnBmiRAAMg3zAAAQiRAAhnhmQhmhmAAiRIAA4kQAAiRBmhnQBnhmCRAAg");
	this.shape_2.setTransform(213.6,113.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EE2C1E").s().p("A76RwQiQAAhnhmQhmhmAAiSIAA4kQAAiQBmhnQBnhmCQAAMA30AAAQCRAABnBmQBmBnAACQIAAYkQAACShmBmQhnBmiRAAg");
	this.shape_3.setTransform(213.6,113.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#EE2C1E").ss(1,1,1).p("A75xvMA3zAAAQCRAABnBmQBmBnAACRIAAYkQAACRhmBmQhnBmiRAAMg3zAAAQiRAAhnhmQhmhmAAiRIAA4kQAAiRBmhnQBnhmCRAAg");
	this.shape_4.setTransform(213.6,113.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EE2C1E").s().p("A76RwQiQAAhnhmQhmhmAAiSIAA4kQAAiQBmhnQBnhmCQAAMA30AAAQCRAABnBmQBmBnAACQIAAYkQAACShmBmQhnBmiRAAg");
	this.shape_5.setTransform(213.6,113.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C44335").s().p("A76RwQiQAAhnhmQhmhmAAiSIAA4kQAAiQBmhnQBnhmCQAAMA30AAAQCRAABnBmQBmBnAACQIAAYkQAACShmBmQhnBmiRAAg");
	this.shape_6.setTransform(214.1211,115.9984,0.8941,0.7809);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C32C1E").s().p("A76RwQiQAAhnhmQhmhmAAiSIAA4kQAAiQBmhnQBnhmCQAAMA30AAAQCRAABnBmQBmBnAACQIAAYkQAACShmBmQhnBmiRAAg");
	this.shape_7.setTransform(213.6,113.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#EF4335").ss(1,1,1).p("A75xvMA3zAAAQCRAABnBmQBmBnAACRIAAYkQAACRhmBmQhnBmiRAAMg3zAAAQiRAAhnhmQhmhmAAiRIAA4kQAAiRBmhnQBnhmCRAAg");
	this.shape_8.setTransform(213.6,113.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EF4335").s().p("A76RwQiQAAhnhmQhmhmAAiSIAA4kQAAiQBmhnQBnhmCQAAMA30AAAQCRAABnBmQBmBnAACQIAAYkQAACShmBmQhnBmiRAAg");
	this.shape_9.setTransform(213.6,113.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FF6600").ss(1,1,1).p("Egz8gaUMBn5AAAMAAAA0pMhn5AAAg");
	this.shape_10.setTransform(203.525,97.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF3300").s().p("Egz8AaVMAAAg0pMBn5AAAMAAAA0pg");
	this.shape_11.setTransform(203.525,97.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.replay_t}]}).to({state:[{t:this.shape_3},{t:this.shape_4},{t:this.shape_7},{t:this.shape_2},{t:this.shape_6},{t:this.shape},{t:this.replay_t}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_9},{t:this.shape_8},{t:this.shape_1},{t:this.shape},{t:this.replay_t}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_3},{t:this.shape_2},{t:this.shape_9},{t:this.shape_8},{t:this.shape_1},{t:this.shape},{t:this.replay_t}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129.9,-71.9,666.9,339);


(lib.plane_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D5A347").s().p("Ah+AKIgDgsQgGgsgIgiQBCAIBqAeQBzAgAAAPQAAAYhqAzQhhAvhDASQABgwgBg3g");
	this.shape.setTransform(519.8,124.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E5D9BC").s().p("Ajbh1QgggcAfgfQAfgeAfAcIGFFbIAFAFQhGALgnAHg");
	this.shape_1.setTransform(428.4812,190.2049);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DEDC1C").s().p("ABeIEIkSvrQgLgrAqgOQAsgOALArIETPqQALArgrAOQgKAEgJAAQgbAAgJggg");
	this.shape_2.setTransform(385.6,102.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F7EC45").s().p("AAngqQFwhFAVBRIAAACQg7A2lCAbQjKARkRAFQC8hCEXgzg");
	this.shape_3.setTransform(355.45,7.463);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F8E12E").s().p("Ao5GQQgHiRASg0QDQpZAngWQAEgDASgGQEQgFDKgRQFCgbA8g3QADCHACB4QACDpgHAoQgMBAgPB3QgQCKAGATQAHAEgJAJQgQAShNAVQj0BFrtBOQgHg+gEhIg");
	this.shape_4.setTransform(341.646,58);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F8E12E").s().p("AmhBsQgFgIAJgMIBThzQAJgMASgKQARgKAPgCIHpg2QAQgBASAHQASAHAKALICECQQAKAMgDAIQgEAJgPAAIsdAiIgDAAQgNAAgEgIg");
	this.shape_5.setTransform(49.9204,169.367);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#AEADB3").s().p("Ai5hZIAfgQQAhgWAJgfIEoC1IACABQgkAvg1AdQhHAohcABIg0ASg");
	this.shape_6.setTransform(410.6,105.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EBEA77").s().p("A7wFTQgLgCgQg3QgSg5ALgWQAMgYAXgJQATgHA+gIQAxgGR2ivIRriuIBwgPQB+gQBDgLQDpgkDTgcQF2gxA0AKIAIApQAHAygFAuQgRCTiBA2Qh1AzhTAiQiYA8iaAsQnBB+o7AKQoPAKnggBIm0AAIj1AQQhFAFgzAAQhHAAgmgJg");
	this.shape_7.setTransform(325.8669,165.6165);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F7EC45").s().p("Egk+AH2Qh2hLgfgJQgfgJASgTIAXgRIAAgEQHOh0WQlKIJjiFICohBQDPhNDDg9QJtjDD6AnIFBDFIJ6ASIA4gCQA6AAAIARQAMAbAKBOIAECLQgDCSgdAmQg6BMhdAyQikBblCBDUgHcABjgluAA6QgXAAgVgUQgUgVgOABQmTAPlIAXQl1AbgxAVQg1gkg7gmg");
	this.shape_8.setTransform(253.5843,144.7576);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F2F1A4").s().p("AutllQgHgRAQgZQAigzB8gqQDahMARgEQBagXAUApQAWAsAvB7QAsB1AXBJQAWBHAPAYQAiA3BRAvQAlAWA+ALQATADB1ANQGEAqGwAyIAegGQ2PFKnOB0g");
	this.shape_9.setTransform(97.1828,123.5335);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5B5B5F").s().p("AgdAlQgRgLgEgSQgDgSAMgQQANgPAVgDQATgDASALQARALAEATQADARgMAQQgNAPgVADIgIABQgQAAgNgJg");
	this.shape_10.setTransform(94.925,224.725);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgKBtQgwgEgfgjQgfgiAEgtQAEgtAmgdQAlgdAvAEQAxAEAfAjQAfAigEAtQgEAtgmAdQggAagqAAIgLgBg");
	this.shape_11.setTransform(94.9053,225.2304);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhZB7Qg4gjgMg9QgMg7Amg0QAlgzBBgLQBBgLA3AjQA2AjAMA9QANA8gmAzQglAzhBALQgRADgOAAQgvAAgpgbg");
	this.shape_12.setTransform(94.9,224.7342);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#5B5B5F").s().p("AgLAQQgGgFgCgIQgCgHAFgHQAFgGAJgCQAHgBAHAFQAGAFACAIQABAHgFAHQgEAHgJABIgDAAQgGAAgFgEg");
	this.shape_13.setTransform(450.1,216.775);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgSA6QgYgIgLgWQgMgXAJgXQAHgYAWgLQAXgMAWAIQAYAIAMAWQALAXgHAXQgIAYgXALQgNAHgOAAQgIAAgKgDg");
	this.shape_14.setTransform(450.1,216.475);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ag8A9QgZgZAAgkQAAgiAZgaQAZgZAjAAQAjAAAaAZQAZAaAAAiQAAAkgZAZQgaAagjAAQgjAAgZgag");
	this.shape_15.setTransform(450.1,216.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#5B5B5F").s().p("AgLARQgGgGgCgIQgBgGAFgHQAFgIAIgBQAHgBAHAEQAHAFABAJQABAIgFAGQgFAHgIABIgDAAQgFAAgGgDg");
	this.shape_16.setTransform(429.875,221.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgSA6QgXgIgMgWQgLgWAHgXQAIgZAWgLQAXgMAXAIQAYAIALAXQALAWgHAXQgIAYgWAMQgOAGgNAAQgJAAgKgDg");
	this.shape_17.setTransform(429.879,221.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("Ag8A+QgZgaAAgkQAAgjAZgZQAagaAiAAQAkAAAZAaQAZAZAAAjQAAAkgZAaQgZAYgkAAQgiAAgagYg");
	this.shape_18.setTransform(429.875,221.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D5A347").s().p("AiOiGQgVgiAkgVQAkgUAWAiIDcFiIhWATg");
	this.shape_19.setTransform(417.7765,196.6895);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D5A347").s().p("AhxiUQgHgOACgNQACgOANgJQAMgHAPACQAQADAGANICoFlQAGALgBANIhCALg");
	this.shape_20.setTransform(82.3242,213.2938);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E5D9BC").s().p("Ah0hhQgHgKgBgLQAAgMAIgIQAIgIANgBQANgBAHAJIC/D7QALAOgDAOIgzAJg");
	this.shape_21.setTransform(90.5569,207.9487);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.plane_2, new cjs.Rectangle(0,0,534.2,239.8), null);


(lib.plane = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D5A347").s().p("Ah+AKIgDgsQgGgsgIgiQBCAIBqAeQBzAgAAAPQAAAYhqAzQhhAvhDASQABgwgBg3g");
	this.shape.setTransform(519.8,124.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E5D9BC").s().p("Ajbh1QgggcAfgfQAfgeAfAcIGFFbIAFAFQhGALgnAHg");
	this.shape_1.setTransform(428.4812,190.2049);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DEDC1C").s().p("ABeIEIkSvrQgLgrAqgOQAsgOALArIETPqQALArgrAOQgKAEgJAAQgbAAgJggg");
	this.shape_2.setTransform(385.6,102.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F7EC45").s().p("AAngqQFwhFAVBRIAAACQg7A2lCAbQjKARkRAFQC8hCEXgzg");
	this.shape_3.setTransform(355.45,7.463);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F8E12E").s().p("Ao5GQQgHiRASg0QDQpZAngWQAEgDASgGQEQgFDKgRQFCgbA8g3QADCHACB4QACDpgHAoQgMBAgPB3QgQCKAGATQAHAEgJAJQgQAShNAVQj0BFrtBOQgHg+gEhIg");
	this.shape_4.setTransform(341.646,58);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F8E12E").s().p("AmhBsQgFgIAJgMIBThzQAJgMASgKQARgKAPgCIHpg2QAQgBASAHQASAHAKALICECQQAKAMgDAIQgEAJgPAAIsdAiIgDAAQgNAAgEgIg");
	this.shape_5.setTransform(49.9204,169.367);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#AEADB3").s().p("Ai5hZIAfgQQAhgWAJgfIEoC1IACABQgkAvg1AdQhHAohcABIg0ASg");
	this.shape_6.setTransform(410.6,105.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EBEA77").s().p("A7wFTQgLgCgQg3QgSg5ALgWQAMgYAXgJQATgHA+gIQAxgGR2ivIRriuIBwgPQB+gQBDgLQDpgkDTgcQF2gxA0AKIAIApQAHAygFAuQgRCTiBA2Qh1AzhTAiQiYA8iaAsQnBB+o7AKQoPAKnggBIm0AAIj1AQQhFAFgzAAQhHAAgmgJg");
	this.shape_7.setTransform(325.8669,165.6165);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F7EC45").s().p("Egk+AH2Qh2hLgfgJQgfgJASgTIAXgRIAAgEQHOh0WQlKIJjiFICohBQDPhNDDg9QJtjDD6AnIFBDFIJ6ASIA4gCQA6AAAIARQAMAbAKBOIAECLQgDCSgdAmQg6BMhdAyQikBblCBDUgHcABjgluAA6QgXAAgVgUQgUgVgOABQmTAPlIAXQl1AbgxAVQg1gkg7gmg");
	this.shape_8.setTransform(253.5843,144.7576);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F2F1A4").s().p("AutllQgHgRAQgZQAigzB8gqQDahMARgEQBagXAUApQAWAsAvB7QAsB1AXBJQAWBHAPAYQAiA3BRAvQAlAWA+ALQATADB1ANQGEAqGwAyIAegGQ2PFKnOB0g");
	this.shape_9.setTransform(97.1828,123.5335);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5B5B5F").s().p("AgdAlQgRgLgEgSQgDgSAMgQQANgPAVgDQATgDASALQARALAEATQADARgMAQQgNAPgVADIgIABQgQAAgNgJg");
	this.shape_10.setTransform(94.925,224.725);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgKBtQgwgEgfgjQgfgiAEgtQAEgtAmgdQAlgdAvAEQAxAEAfAjQAfAigEAtQgEAtgmAdQggAagqAAIgLgBg");
	this.shape_11.setTransform(94.9053,225.2304);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhZB7Qg4gjgMg9QgMg7Amg0QAlgzBBgLQBBgLA3AjQA2AjAMA9QANA8gmAzQglAzhBALQgRADgOAAQgvAAgpgbg");
	this.shape_12.setTransform(94.9,224.7342);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#5B5B5F").s().p("AgLAQQgGgFgCgIQgCgHAFgHQAFgGAJgCQAHgBAHAFQAGAFACAIQABAHgFAHQgEAHgJABIgDAAQgGAAgFgEg");
	this.shape_13.setTransform(450.1,216.775);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgSA6QgYgIgLgWQgMgXAJgXQAHgYAWgLQAXgMAWAIQAYAIAMAWQALAXgHAXQgIAYgXALQgNAHgOAAQgIAAgKgDg");
	this.shape_14.setTransform(450.1,216.475);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ag8A9QgZgZAAgkQAAgiAZgaQAZgZAjAAQAjAAAaAZQAZAaAAAiQAAAkgZAZQgaAagjAAQgjAAgZgag");
	this.shape_15.setTransform(450.1,216.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#5B5B5F").s().p("AgLARQgGgGgCgIQgBgGAFgHQAFgIAIgBQAHgBAHAEQAHAFABAJQABAIgFAGQgFAHgIABIgDAAQgFAAgGgDg");
	this.shape_16.setTransform(429.875,221.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgSA6QgXgIgMgWQgLgWAHgXQAIgZAWgLQAXgMAXAIQAYAIALAXQALAWgHAXQgIAYgWAMQgOAGgNAAQgJAAgKgDg");
	this.shape_17.setTransform(429.879,221.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("Ag8A+QgZgaAAgkQAAgjAZgZQAagaAiAAQAkAAAZAaQAZAZAAAjQAAAkgZAaQgZAYgkAAQgiAAgagYg");
	this.shape_18.setTransform(429.875,221.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D5A347").s().p("AiOiGQgVgiAkgVQAkgUAWAiIDcFiIhWATg");
	this.shape_19.setTransform(417.7765,196.6895);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D5A347").s().p("AhxiUQgHgOACgNQACgOANgJQAMgHAPACQAQADAGANICoFlQAGALgBANIhCALg");
	this.shape_20.setTransform(82.3242,213.2938);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E5D9BC").s().p("Ah0hhQgHgKgBgLQAAgMAIgIQAIgIANgBQANgBAHAJIC/D7QALAOgDAOIgzAJg");
	this.shape_21.setTransform(90.5569,207.9487);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.plane, new cjs.Rectangle(0,0,534.2,239.8), null);


(lib.parachute_open = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Group_6();
	this.instance.setTransform(0,0,0.0337,0.0253);

	this.instance_1 = new lib.Group_5_2();
	this.instance_1.setTransform(1,7,0.0337,0.0253);

	this.instance_2 = new lib.Group_4();
	this.instance_2.setTransform(0,5,0.0337,0.0253);

	this.instance_3 = new lib.Group_3();
	this.instance_3.setTransform(11,12,0.0337,0.0253);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.parachute_open, new cjs.Rectangle(0,0,39.1,35.9), null);


(lib.diver15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Group_24();
	this.instance.setTransform(75.15,42.45,0.3636,0.4204,0,48.7022,41.2941);

	this.instance_1 = new lib.Group_24();
	this.instance_1.setTransform(88.8,43.1,0.276,0.2905,0,48.7034,41.2968);

	this.instance_2 = new lib.Group_23();
	this.instance_2.setTransform(91.3,57.95,0.276,0.2905,0,48.7034,41.2968);

	this.instance_3 = new lib.Group_22();
	this.instance_3.setTransform(80.85,31.8,0.276,0.2905,0,48.7034,41.2968);

	this.instance_4 = new lib.Group_21();
	this.instance_4.setTransform(109.8,37.45,0.276,0.2905,0,48.7034,41.2968);

	this.instance_5 = new lib.Group_20();
	this.instance_5.setTransform(109.8,37.45,0.276,0.2905,0,48.7034,41.2968);

	this.instance_6 = new lib.Group_19_1();
	this.instance_6.setTransform(116.2,28.95,0.276,0.2905,0,48.7034,41.2968);

	this.instance_7 = new lib.Group_18_1();
	this.instance_7.setTransform(96.9,41.7,0.276,0.2905,0,48.7034,41.2968);

	this.instance_8 = new lib.Group_17_1();
	this.instance_8.setTransform(81.6,0,0.276,0.2905,0,48.7034,41.2968);

	this.instance_9 = new lib.Group_16_1();
	this.instance_9.setTransform(125.1,76.35,0.276,0.2905,0,48.7034,41.2968);

	this.instance_10 = new lib.Group_15();
	this.instance_10.setTransform(113.05,34.65,0.276,0.2905,0,48.7034,41.2968);

	this.instance_11 = new lib.Group_14();
	this.instance_11.setTransform(30.9,7.75,0.276,0.2905,0,48.7034,41.2968);

	this.instance_12 = new lib.Group_13();
	this.instance_12.setTransform(80.85,5,0.276,0.2905,0,48.7034,41.2968);

	this.instance_13 = new lib.Group_12();
	this.instance_13.setTransform(93.75,53,0.276,0.2905,0,48.7034,41.2968);

	this.instance_14 = new lib.Group_11();
	this.instance_14.setTransform(70.35,25.45,0.276,0.2905,0,48.7034,41.2968);

	this.instance_15 = new lib.Group_10();
	this.instance_15.setTransform(26.1,43.1,0.276,0.2905,0,48.7034,41.2968);

	this.instance_16 = new lib.Group_9_1();
	this.instance_16.setTransform(30.1,15.55,0.276,0.2905,0,48.7034,41.2968);

	this.instance_17 = new lib.Group_8();
	this.instance_17.setTransform(22.8,27.55,0.276,0.2905,0,48.7034,41.2968);

	this.instance_18 = new lib.Group_2_4();
	this.instance_18.setTransform(38.95,28.95,0.276,0.2905,0,48.7034,41.2968);

	this.instance_19 = new lib.Group_1_2();
	this.instance_19.setTransform(32.5,36.05,0.276,0.2905,0,48.7034,41.2968);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.diver15, new cjs.Rectangle(0,0,135.5,97.2), null);


(lib.divdiv = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Group_21_1();
	this.instance.setTransform(26,48,0.4322,0.5481);

	this.instance_1 = new lib.Group_20_1();
	this.instance_1.setTransform(30,34,0.4322,0.5481);

	this.instance_2 = new lib.Group_19();
	this.instance_2.setTransform(49,32,0.4322,0.5481);

	this.instance_3 = new lib.Group_18();
	this.instance_3.setTransform(25,35,0.4322,0.5481);

	this.instance_4 = new lib.Group_17();
	this.instance_4.setTransform(30,11,0.4322,0.5481);

	this.instance_5 = new lib.Group_16();
	this.instance_5.setTransform(30,12,0.4322,0.5481);

	this.instance_6 = new lib.Group_15_1();
	this.instance_6.setTransform(27,0,0.4322,0.5481);

	this.instance_7 = new lib.Group_14_1();
	this.instance_7.setTransform(31,26,0.4322,0.5481);

	this.instance_8 = new lib.Group_13_1();
	this.instance_8.setTransform(0,4,0.4322,0.5481);

	this.instance_9 = new lib.Group_12_1();
	this.instance_9.setTransform(72,2,0.4322,0.5481);

	this.instance_10 = new lib.Group_11_1();
	this.instance_10.setTransform(31,6,0.4322,0.5481);

	this.instance_11 = new lib.Group_10_1();
	this.instance_11.setTransform(39,146,0.4322,0.5481);

	this.instance_12 = new lib.Group_9();
	this.instance_12.setTransform(2,9,0.4322,0.5481);

	this.instance_13 = new lib.Group_8_1();
	this.instance_13.setTransform(45,7,0.4322,0.5481);

	this.instance_14 = new lib.Group_7();
	this.instance_14.setTransform(24,32,0.4322,0.5481);

	this.instance_15 = new lib.Group_6_1();
	this.instance_15.setTransform(39,111,0.4322,0.5481);

	this.instance_16 = new lib.Group_5();
	this.instance_16.setTransform(40,75,0.4322,0.5481);

	this.instance_17 = new lib.Group_3_1();
	this.instance_17.setTransform(25,144,0.4322,0.5481);

	this.instance_18 = new lib.Group_2_3();
	this.instance_18.setTransform(25,110,0.4322,0.5481);

	this.instance_19 = new lib.Group_1_3();
	this.instance_19.setTransform(26,74,0.4322,0.5481);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.divdiv, new cjs.Rectangle(0,0,76.3,163.6), null);


(lib.cloud11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Group_5_1();
	this.instance.setTransform(0,0,0.2566,0.3829);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cloud11, new cjs.Rectangle(0,0,223.3,124.8), null);


(lib.cloud10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Group();
	this.instance.setTransform(0,0,0.4026,0.3664);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cloud10, new cjs.Rectangle(0,0,350.3,119.1), null);


(lib.cloud9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Group_2_1();
	this.instance.setTransform(0,0,0.3824,0.3518);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cloud9, new cjs.Rectangle(0,0,527.7,172.4), null);


(lib.cloud8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Group_1();
	this.instance.setTransform(0,0,0.2978,0.2484);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cloud8, new cjs.Rectangle(0,0,259.1,80.8), null);


(lib.cloud7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Group_1();
	this.instance.setTransform(0,0,0.2978,0.2484);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cloud7, new cjs.Rectangle(0,0,259.1,80.8), null);


(lib.cloud5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Group_3_2();
	this.instance.setTransform(0,0,0.6216,0.4235);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cloud5, new cjs.Rectangle(0,0,456.3,155), null);


(lib.cloud2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Group_5_1();
	this.instance.setTransform(0,0,0.5229,0.3829);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cloud2, new cjs.Rectangle(0,0,455,124.8), null);


(lib.___Camera___ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_plane_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// plane_2
	this.instance = new lib.plane_2();
	this.instance.setTransform(211.35,563,0.5006,0.5257,0,0,180,267.1,120);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(377).to({_off:false},0).wait(237));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_plane = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// plane
	this.instance = new lib.plane();
	this.instance.setTransform(1575.35,152.8,1,1,0,0,180,267,119.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:267.1,regY:119.9,x:1557.85,y:152.9},0).wait(1).to({x:1540.45},0).wait(1).to({x:1523.1},0).wait(1).to({x:1505.7},0).wait(1).to({x:1488.35},0).wait(1).to({x:1470.95},0).wait(1).to({x:1453.55},0).wait(1).to({x:1436.2},0).wait(1).to({x:1418.8},0).wait(1).to({x:1401.45},0).wait(1).to({x:1384.05},0).wait(1).to({x:1366.65},0).wait(1).to({x:1349.3},0).wait(1).to({x:1331.9},0).wait(1).to({x:1314.55},0).wait(1).to({x:1297.15},0).wait(1).to({x:1279.75},0).wait(1).to({x:1262.4},0).wait(1).to({x:1245},0).wait(1).to({x:1227.65},0).wait(1).to({x:1210.25},0).wait(1).to({x:1192.85},0).wait(1).to({x:1175.5},0).wait(1).to({x:1158.1},0).wait(1).to({x:1140.75},0).wait(1).to({x:1123.35},0).wait(1).to({x:1105.95},0).wait(1).to({x:1088.6},0).wait(1).to({x:1071.2},0).wait(1).to({x:1053.85},0).wait(1).to({x:1036.45},0).wait(1).to({x:1019.05},0).wait(1).to({x:1001.7},0).wait(1).to({x:984.3},0).wait(1).to({x:966.95},0).wait(1).to({x:949.55},0).wait(1).to({x:932.15},0).wait(1).to({x:914.8},0).wait(1).to({x:897.4},0).wait(1).to({x:880.05},0).wait(1).to({x:862.65},0).wait(1).to({x:845.25},0).wait(1).to({x:827.9},0).wait(1).to({x:810.5},0).wait(1).to({x:793.15},0).wait(1).to({x:775.75},0).wait(1).to({x:758.35},0).wait(1).to({x:741},0).wait(1).to({x:723.6},0).wait(1).to({x:706.25},0).wait(1).to({x:688.85},0).wait(1).to({x:671.45},0).wait(1).to({x:654.1},0).wait(1).to({x:636.7},0).wait(1).to({x:619.35},0).wait(1).to({x:601.95},0).wait(1).to({x:584.55},0).wait(1).to({x:567.2},0).wait(1).to({x:549.8},0).wait(1).to({x:532.45},0).wait(1).to({x:515.05},0).wait(1).to({x:497.65},0).wait(1).to({x:480.3},0).wait(1).to({x:462.9},0).wait(1).to({x:445.55},0).wait(1).to({x:428.15},0).wait(1).to({x:410.75},0).wait(1).to({x:393.4},0).wait(1).to({x:376},0).wait(1).to({x:358.65},0).wait(1).to({x:341.25},0).wait(1).to({x:323.85},0).wait(1).to({x:306.5},0).wait(1).to({x:289.1},0).wait(1).to({x:271.75},0).wait(1).to({x:254.35},0).wait(1).to({x:236.95},0).wait(1).to({x:219.6},0).wait(1).to({x:202.2},0).wait(1).to({x:184.85},0).wait(1).to({x:167.45},0).wait(1).to({x:150.05},0).wait(1).to({x:132.7},0).wait(1).to({x:115.3},0).wait(1).to({x:97.95},0).wait(1).to({x:80.55},0).wait(1).to({x:63.15},0).wait(1).to({x:45.8},0).wait(1).to({x:28.4},0).wait(1).to({x:11.05},0).wait(1).to({x:-6.35},0).wait(1).to({x:-23.75},0).wait(1).to({x:-41.1},0).wait(1).to({x:-58.5},0).wait(1).to({x:-75.85},0).wait(1).to({x:-93.25},0).wait(1).to({x:-110.65},0).wait(1).to({x:-128},0).wait(1).to({x:-145.4},0).wait(1).to({x:-162.75},0).wait(1).to({x:-180.15},0).wait(1).to({x:-197.55},0).wait(1).to({x:-214.9},0).wait(1).to({x:-232.3},0).wait(1).to({x:-249.65},0).wait(1).to({x:-267.05},0).wait(1).to({x:-284.4},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_parachute_open = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// parachute_open
	this.instance = new lib.parachute_open();
	this.instance.setTransform(651.6,455.9,1,1,0,0,0,19.6,17.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(268).to({_off:false},0).wait(1).to({regX:19.5,regY:18,scaleX:1.3605,scaleY:1.5243,x:651,y:433.75},0).wait(1).to({scaleX:1.721,scaleY:2.0485,x:650.5,y:411.45},0).wait(1).to({scaleX:2.0816,scaleY:2.5728,x:650.05,y:389.2},0).wait(1).to({scaleX:2.4421,scaleY:3.0971,x:649.55,y:367},0).wait(1).to({scaleX:2.8026,scaleY:3.6214,x:649.05,y:344.75},0).wait(1).to({scaleX:3.1631,scaleY:4.1456,x:647.35,y:330.6},0).wait(1).to({scaleX:3.5236,scaleY:4.6699,x:645.6,y:316.45},0).wait(1).to({scaleX:3.8842,scaleY:5.1942,x:643.9,y:302.35},0).wait(1).to({scaleX:4.2447,scaleY:5.7185,x:642.15,y:288.2},0).wait(1).to({scaleX:4.6052,scaleY:6.2427,x:637,y:279.05},0).wait(1).to({scaleX:4.9657,scaleY:6.767,x:631.85,y:270},0).wait(1).to({scaleX:5.3262,scaleY:7.2913,x:626.65,y:260.9},0).wait(1).to({scaleX:5.6868,scaleY:7.8156,x:621.5,y:251.8},0).wait(1).to({scaleX:6.0473,scaleY:8.3398,x:622.25,y:255.6},0).wait(1).to({scaleX:6.4078,scaleY:8.8641,x:623,y:259.5},0).wait(1).to({scaleX:6.7683,scaleY:9.3884,x:623.75,y:263.4},0).wait(1).to({scaleX:7.1288,scaleY:9.9127,x:624.85,y:290.25},0).wait(1).to({scaleX:7.4894,scaleY:10.4369,x:626,y:317.55},0).wait(1).to({scaleX:7.8499,scaleY:10.9612,x:628.25,y:239.35},0).wait(1).to({regX:24.9,regY:21.1,scaleX:7.8495,scaleY:10.9607,x:679.25,y:307.8},0).wait(1).to({regX:19.5,regY:18,scaleX:7.8494,scaleY:10.9604,x:629.65,y:278.4},0).wait(1).to({scaleX:7.8493,scaleY:10.9602,x:622.5,y:282.95},0).wait(1).to({scaleX:7.8491,scaleY:10.9599,x:615.35,y:287.5},0).wait(1).to({x:614.55,y:292.1},0).wait(1).to({x:613.8,y:296.65},0).wait(1).to({x:613,y:301.2},0).wait(1).to({x:612.2,y:305.75},0).wait(1).to({x:611.45,y:310.3},0).wait(1).to({x:610.65,y:314.85},0).wait(1).to({x:609.9,y:319.45},0).wait(1).to({x:609.1,y:324},0).wait(1).to({x:608.3,y:328.55},0).wait(1).to({x:608.25,y:335.3},0).wait(1).to({x:608.15,y:342.05},0).wait(1).to({x:608.1,y:348.8},0).wait(1).to({x:608.05,y:355.55},0).wait(1).to({x:607.95,y:362.25},0).wait(1).to({x:607.9,y:369},0).wait(1).to({x:607.8,y:375.75},0).wait(1).to({x:607.75,y:382.5},0).wait(1).to({x:607.7,y:389.25},0).wait(1).to({x:607.6,y:396},0).wait(1).to({x:607.55,y:402.75},0).wait(1).to({x:607.45,y:409.5},0).wait(1).to({x:607.4,y:416.2},0).wait(1).to({x:607.35,y:422.95},0).wait(1).to({x:607.25,y:429.7},0).wait(1).to({x:607.2,y:436.45},0).wait(1).to({x:607.1,y:443.2},0).wait(1).to({x:607.05,y:449.95},0).wait(1).to({x:607,y:456.7},0).wait(1).to({x:606.9,y:463.45},0).wait(1).to({x:606.85,y:470.65},0).wait(1).to({x:606.8,y:477.9},0).wait(1).to({x:606.75,y:485.15},0).wait(1).to({x:606.65,y:492.35},0).wait(1).to({x:606.6,y:499.6},0).wait(1).to({x:606.55,y:506.85},0).wait(1).to({x:606.5,y:514.05},0).wait(1).to({x:606.4,y:521.3},0).wait(1).to({x:606.35,y:528.55},0).wait(1).to({x:606.3,y:535.75},0).wait(1).to({x:606.25,y:543},0).wait(1).to({x:606.15,y:550.25},0).wait(1).to({x:606.1,y:557.45},0).wait(1).to({x:606.05,y:564.7},0).wait(1).to({x:606,y:571.95},0).wait(1).to({x:605.9,y:579.15},0).wait(1).to({x:605.85,y:586.4},0).wait(1).to({x:605.8,y:593.65},0).wait(1).to({x:605.75,y:600.85},0).wait(1).to({x:605.7,y:608.1},0).wait(1).to({x:605.6,y:615.35},0).wait(1).to({x:605.55,y:622.55},0).wait(1).to({x:605.5,y:629.8},0).wait(1).to({x:605.45,y:637.05},0).wait(1).to({x:605.35,y:644.3},0).wait(1).to({x:605.3,y:651.5},0).wait(1).to({x:605.25,y:658.75},0).wait(1).to({x:605.2,y:666},0).wait(1).to({x:605.1,y:673.2},0).wait(1).to({x:605.05,y:680.45},0).wait(1).to({x:605,y:687.7},0).wait(1).to({x:604.95,y:694.9},0).wait(1).to({x:604.9,y:702.15},0).wait(1).to({x:604.8,y:709.4},0).wait(1).to({x:604.75,y:716.6},0).wait(1).to({x:604.7,y:723.85},0).wait(1).to({x:604.65,y:731.1},0).wait(1).to({x:604.55,y:738.3},0).wait(1).to({x:604.5,y:745.55},0).wait(1).to({x:604.45,y:752.8},0).wait(1).to({x:604.4,y:760},0).wait(1).to({x:604.3,y:767.25},0).wait(1).to({x:604.25,y:774.5},0).wait(1).to({x:604.2,y:781.7},0).wait(1).to({x:604.15,y:788.95},0).wait(1).to({x:604.05,y:796.2},0).wait(1).to({x:604,y:803.4},0).wait(1).to({x:603.95,y:810.65},0).wait(1).to({x:603.9,y:817.9},0).wait(1).to({x:603.85,y:825.1},0).wait(1).to({x:603.75,y:832.35},0).wait(1).to({x:603.7,y:839.6},0).wait(1).to({x:603.65,y:846.8},0).wait(1).to({x:603.6,y:854.05},0).wait(1).to({x:603.5,y:861.3},0).wait(1).to({x:603.45,y:868.5},0).wait(1).to({x:603.4,y:875.75},0).wait(1).to({x:603.35,y:883},0).wait(1).to({y:894.25},0).wait(1).to({y:905.5},0).wait(1).to({y:916.75},0).wait(1).to({y:917.05},0).wait(1).to({y:917.35},0).wait(1).to({y:917.6},0).wait(1).to({y:917.9},0).wait(1).to({y:918.2},0).wait(1).to({y:918.5},0).wait(1).to({y:918.75},0).wait(1).to({y:919.05},0).wait(1).to({y:919.35},0).wait(1).to({y:919.65},0).wait(1).to({y:919.9},0).wait(1).to({y:920.2},0).wait(1).to({y:920.5},0).wait(1).to({y:920.8},0).wait(1).to({y:921.05},0).wait(1).to({y:921.35},0).wait(1).to({y:921.65},0).wait(1).to({y:921.95},0).wait(1).to({y:922.2},0).wait(1).to({y:922.5},0).wait(1).to({y:922.8},0).wait(1).to({y:923.1},0).wait(1).to({y:923.35},0).wait(1).to({y:923.65},0).wait(1).to({y:923.95},0).wait(1).to({y:924.25},0).wait(1).to({y:924.5},0).wait(1).to({y:924.8},0).wait(1).to({y:925.1},0).wait(1).to({y:925.4},0).wait(1).to({y:925.65},0).wait(1).to({y:925.95},0).wait(1).to({y:926.25},0).wait(1).to({y:926.55},0).wait(1).to({y:926.8},0).wait(1).to({y:927.1},0).wait(1).to({y:927.4},0).wait(1).to({y:927.7},0).wait(1).to({y:927.95},0).wait(1).to({y:928.25},0).wait(1).to({y:928.55},0).wait(1).to({y:928.85},0).wait(1).to({y:929.1},0).wait(1).to({y:929.4},0).wait(1).to({y:929.7},0).wait(1).to({y:930},0).wait(1).to({y:930.25},0).wait(1).to({y:930.55},0).wait(1).to({y:930.85},0).wait(1).to({y:931.15},0).wait(1).to({y:931.4},0).wait(1).to({y:931.7},0).wait(1).to({y:932},0).wait(1).to({y:932.3},0).wait(1).to({y:932.55},0).wait(1).to({y:932.85},0).wait(1).to({y:933.15},0).wait(1).to({y:933.45},0).wait(1).to({y:933.7},0).wait(1).to({y:934},0).wait(1).to({y:934.3},0).wait(1).to({y:934.6},0).wait(1).to({y:934.85},0).wait(1).to({y:935.15},0).wait(1).to({y:935.45},0).wait(1).to({regX:31.2,regY:6.5,scaleX:7.8499,scaleY:10.9612,x:710.05,y:-265.25},0).wait(1).to({regX:19.5,regY:18,scaleX:7.8498,x:618.15,y:-134.95},0).wait(1).to({scaleY:10.9611,x:618.1,y:-130.75},0).wait(1).to({y:-126.5},0).wait(1).to({scaleY:10.961,x:618.05,y:-122.3},0).wait(1).to({y:-118.05},0).wait(1).to({scaleX:7.8497,scaleY:10.9609,x:618,y:-113.85},0).wait(1).to({y:-109.6},0).wait(1).to({scaleY:10.9608,x:617.95,y:-105.4},0).wait(1).to({y:-101.15},0).wait(1).to({scaleX:7.8496,scaleY:10.9607,x:617.9,y:-96.95},0).wait(1).to({y:-92.7},0).wait(1).to({scaleY:10.9606,x:617.85,y:-88.5},0).wait(1).to({y:-84.3},0).wait(1).to({scaleY:10.9605,x:617.8,y:-80.05},0).wait(1).to({scaleX:7.8495,y:-75.85},0).wait(1).to({scaleY:10.9604,x:617.75,y:-71.6},0).wait(1).to({y:-67.4},0).wait(1).to({x:617.7,y:-63.15},0).wait(1).to({scaleX:7.8494,scaleY:10.9603,y:-58.95},0).wait(1).to({x:617.65,y:-54.7},0).wait(1).to({scaleY:10.9602,x:617.6,y:-50.5},0).wait(1).to({y:-46.25},0).wait(1).to({scaleY:10.9601,x:617.55,y:-42.05},0).wait(1).to({scaleX:7.8493,y:-37.8},0).wait(1).to({scaleY:10.96,x:617.5,y:-33.6},0).wait(1).to({y:-29.4},0).wait(1).to({scaleY:10.9599,x:617.45,y:-25.15},0).wait(1).to({y:-20.95},0).wait(1).to({scaleX:7.8492,scaleY:10.9598,x:617.4,y:-16.7},0).wait(1).to({y:-12.5},0).wait(1).to({scaleY:10.9597,x:617.35,y:-8.25},0).wait(1).to({y:-4.1},0).wait(1).to({scaleX:7.8491,x:617.3,y:0.15},0).wait(1).to({scaleY:10.9596,y:4.35},0).wait(1).to({x:617.25,y:8.6},0).wait(1).to({scaleY:10.9595,y:12.8},0).wait(1).to({x:617.2,y:17},0).wait(1).to({scaleX:7.849,scaleY:10.9594,y:21.25},0).wait(1).to({x:617.15,y:25.45},0).wait(1).to({scaleY:10.9593,y:29.7},0).wait(1).to({x:617.1,y:33.9},0).wait(1).to({scaleX:7.8489,scaleY:10.9592,x:617.05,y:38.15},0).wait(1).to({y:42.35},0).wait(1).to({scaleY:10.9591,x:617,y:46.6},0).wait(1).to({y:50.8},0).wait(1).to({scaleY:10.959,x:616.95,y:55.05},0).wait(1).to({scaleX:7.8488,y:59.25},0).wait(1).to({scaleY:10.9589,x:616.9,y:63.5},0).wait(1).to({y:67.7},0).wait(1).to({x:616.85,y:71.9},0).wait(1).to({scaleX:7.8487,scaleY:10.9588,y:76.15},0).wait(1).to({x:616.8,y:80.35},0).wait(1).to({scaleY:10.9587,y:84.6},0).wait(1).to({x:616.75,y:88.8},0).wait(1).to({scaleY:10.9586,y:93.05},0).wait(1).to({scaleX:7.8486,x:616.7,y:97.25},0).wait(1).to({scaleY:10.9585,y:101.5},0).wait(1).to({x:616.65,y:105.7},0).wait(1).to({scaleY:10.9584,y:109.95},0).wait(1).to({scaleX:7.8485,x:616.6,y:114.15},0).wait(1).to({scaleY:10.9583,x:616.55,y:118.4},0).wait(1).to({y:122.6},0).wait(1).to({scaleY:10.9582,x:616.5,y:126.8},0).wait(1).to({y:131.05},0).wait(1).to({scaleX:7.8484,scaleY:10.9581,x:616.45,y:135.25},0).wait(1).to({y:139.5},0).wait(1).to({x:616.4,y:143.7},0).wait(1).to({scaleY:10.958,y:147.95},0).wait(1).to({scaleX:7.8483,x:616.35,y:152.15},0).wait(1).to({scaleY:10.9579,y:156.4},0).wait(1).to({x:616.3,y:160.6},0).wait(1).to({scaleY:10.9578,y:164.85},0).wait(1).to({x:616.25,y:169.05},0).wait(1).to({scaleX:7.8482,scaleY:10.9577,y:173.25},0).wait(1).to({x:616.2,y:177.5},0).wait(1).to({scaleY:10.9576,y:181.7},0).wait(1).to({x:616.15,y:185.95},0).wait(1).to({scaleX:7.8481,scaleY:10.9575,y:190.15},0).wait(1).to({x:616.1,y:194.4},0).wait(1).to({scaleY:10.9574,y:198.55},0).wait(1).to({x:616.05,y:202.8},0).wait(1).to({x:616,y:207},0).wait(1).to({scaleX:7.848,scaleY:10.9573,y:211.25},0).wait(1).to({x:615.95,y:215.45},0).wait(1).to({scaleY:10.9572,y:219.7},0).wait(1).to({x:615.9,y:223.9},0).wait(1).to({scaleX:7.8479,scaleY:10.9571,y:228.1},0).wait(1).to({x:615.85,y:232.35},0).wait(1).to({scaleY:10.957,y:236.55},0).wait(1).to({x:615.8,y:240.8},0).wait(1).to({scaleY:10.9569,y:244.95},0).wait(1).to({scaleX:7.8478,x:615.75,y:249.2},0).wait(1).to({scaleY:10.9568,y:253.4},0).wait(1).to({x:615.7,y:257.65},0).wait(1).to({scaleY:10.9567,y:261.85},0).wait(1).to({scaleX:7.8477,x:615.65,y:266.1},0).wait(1).to({scaleY:10.9566,y:270.3},0).wait(1).to({x:615.6,y:274.5},0).wait(1).to({y:278.75},0).wait(1).to({scaleY:10.9565,x:615.55,y:282.95},0).wait(1).to({scaleX:7.8476,y:287.2},0).wait(1).to({scaleY:10.9564,x:615.5,y:291.4},0).wait(1).to({x:615.45,y:295.65},0).wait(1).to({scaleY:10.9563,y:299.85},0).wait(1).to({scaleX:7.8475,x:615.4,y:304.1},0).wait(1).to({scaleY:10.9562,y:308.3},0).wait(1).to({x:615.35,y:312.55},0).wait(1).to({scaleY:10.9561,y:316.75},0).wait(1).to({x:615.3,y:321},0).wait(1).to({scaleX:7.8474,scaleY:10.956,x:615.25,y:325.2},0).wait(1).to({x:615.2,y:329.4},0).wait(1).to({scaleY:10.9559,y:333.65},0).wait(1).to({x:615.15,y:337.85},0).wait(1).to({scaleX:7.8473,scaleY:10.9558,y:342.1},0).wait(1).to({x:615.1,y:346.3},0).wait(1).to({y:350.55},0).wait(1).to({scaleY:10.9557,x:615.05,y:354.75},0).wait(1).to({y:359},0).wait(1).to({scaleX:7.8472,scaleY:10.9556,x:615,y:363.2},0).wait(1).to({y:367.45},0).wait(1).to({scaleY:10.9555,x:614.95,y:371.65},0).wait(1).to({x:614.9,y:375.9},0).wait(1).to({scaleY:10.9554,y:380.1},0).wait(1).to({scaleX:7.8471,x:614.85,y:384.3},0).wait(1).to({scaleY:10.9553,y:388.55},0).wait(1).to({x:614.8,y:392.75},0).wait(1).to({scaleY:10.9552,y:397},0).wait(1).to({scaleX:7.847,x:614.75,y:401.2},0).wait(1).to({scaleY:10.9551,y:405.45},0).wait(1).to({x:614.7,y:409.65},0).wait(1).to({y:413.9},0).wait(1).to({scaleY:10.955,x:614.65,y:418.1},0).wait(1).to({scaleX:7.8469,y:422.35},0).wait(1).to({scaleY:10.9549,x:614.6,y:426.55},0).wait(1).to({y:430.75},0).wait(1).to({scaleY:10.9548,x:614.55,y:435},0).wait(1).to({scaleX:7.8468,y:439.2},0).wait(1).to({scaleY:10.9547,x:614.5,y:443.45},0).wait(1).to({x:614.45,y:448.7},0).wait(1).to({scaleY:10.9546,x:614.4,y:453.9},0).wait(1).to({x:614.35,y:459.15},0).wait(1).to({scaleX:7.8467,scaleY:10.9545,x:614.3,y:464.4},0).wait(1).to({x:614.25,y:469.6},0).wait(1).to({scaleY:10.9544,x:614.2,y:474.85},0).wait(1).to({x:614.15,y:480.1},0).wait(1).to({scaleX:7.8466,scaleY:10.9543,x:614.1,y:485.35},0).wait(1).to({x:614.05,y:490.55},0).wait(1).to({regX:31.2,regY:6.5,x:705.85,y:364.5},0).wait(1).to({regX:19.5,regY:18,x:614,y:490.45},0).wait(8));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_diver_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// diver_2
	this.instance = new lib.divdiv();
	this.instance.setTransform(632,456.05,1,1,0,0,0,38.3,81.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(285).to({_off:false},0).wait(1).to({regX:38.2,regY:81.8,x:636.6,y:460.6},0).wait(1).to({x:638.15,y:466.1},0).wait(1).to({x:637.45,y:472.15},0).wait(1).to({x:635.35,y:478.55},0).wait(1).to({x:632.85,y:485.15},0).wait(1).to({x:630.1,y:491.85},0).wait(1).to({x:627.4,y:498.65},0).wait(1).to({x:624.8,y:505.5},0).wait(1).to({x:622.35,y:512.4},0).wait(1).to({x:620.15,y:519.3},0).wait(1).to({x:618.2,y:526.25},0).wait(1).to({x:616.6,y:533.15},0).wait(1).to({x:615.3,y:540.1},0).wait(1).to({x:614.3,y:547.05},0).wait(1).to({x:613.75,y:554},0).wait(1).to({x:613.35,y:560.95},0).wait(1).to({x:612.95,y:567.9},0).wait(1).to({x:612.6,y:574.85},0).wait(1).to({x:612.25,y:581.8},0).wait(1).to({x:611.9,y:588.8},0).wait(1).to({x:611.6,y:595.8},0).wait(1).to({x:611.25,y:602.8},0).wait(1).to({x:610.95,y:609.8},0).wait(1).to({x:610.65,y:616.85},0).wait(1).to({x:610.35,y:623.85},0).wait(1).to({x:610.1,y:630.9},0).wait(1).to({x:609.8,y:637.95},0).wait(1).to({x:609.55,y:645},0).wait(1).to({x:609.3,y:652.1},0).wait(1).to({x:609.05,y:659.15},0).wait(1).to({x:608.8,y:666.25},0).wait(1).to({x:608.55,y:673.35},0).wait(1).to({x:608.35,y:680.45},0).wait(1).to({x:608.1,y:687.55},0).wait(1).to({x:607.9,y:694.7},0).wait(1).to({x:607.7,y:701.8},0).wait(1).to({x:607.5,y:708.95},0).wait(1).to({x:607.3,y:716.1},0).wait(1).to({x:607.1,y:723.25},0).wait(1).to({x:606.9,y:730.4},0).wait(1).to({x:606.75,y:737.6},0).wait(1).to({x:606.55,y:744.8},0).wait(1).to({x:606.4,y:752},0).wait(1).to({x:606.25,y:759.2},0).wait(1).to({x:606.1,y:766.4},0).wait(1).to({x:605.95,y:773.65},0).wait(1).to({x:605.8,y:780.85},0).wait(1).to({x:605.65,y:788.1},0).wait(1).to({x:605.5,y:795.4},0).wait(1).to({x:605.4,y:802.65},0).wait(1).to({x:605.3,y:809.95},0).wait(1).to({x:605.15,y:817.25},0).wait(1).to({x:605.05,y:824.55},0).wait(1).to({x:604.95,y:831.85},0).wait(1).to({x:604.85,y:839.2},0).wait(1).to({x:604.75,y:846.55},0).wait(1).to({x:604.7,y:853.9},0).wait(1).to({x:604.6,y:861.3},0).wait(1).to({x:604.55,y:868.7},0).wait(1).to({x:604.45,y:876.1},0).wait(1).to({x:604.4,y:883.5},0).wait(1).to({x:604.35,y:890.95},0).wait(1).to({x:604.3,y:898.45},0).wait(1).to({x:604.25,y:905.9},0).wait(1).to({y:913.4},0).wait(1).to({x:604.2,y:920.95},0).wait(1).to({y:928.5},0).wait(1).to({y:936.05},0).wait(1).to({y:943.65},0).wait(1).to({y:951.25},0).wait(1).to({x:604.25,y:958.9},0).wait(1).to({x:604.3,y:966.55},0).wait(1).to({x:604.35,y:974.3},0).wait(1).to({x:604.4,y:982},0).wait(1).to({x:604.45,y:989.8},0).wait(1).to({x:604.55,y:997.6},0).wait(1).to({x:604.65,y:1005.45},0).wait(1).to({x:604.75,y:1013.4},0).wait(1).to({x:604.9,y:1021.35},0).wait(1).to({x:605.05,y:1029.35},0).wait(1).to({x:605.2,y:1037.45},0).wait(1).to({x:605.4,y:1045.6},0).wait(1).to({x:605.6,y:1053.85},0).wait(1).to({x:605.9,y:1062.2},0).wait(1).to({x:606.15,y:1070.7},0).wait(1).to({x:606.5,y:1079.3},0).wait(1).to({x:606.9,y:1088.1},0).wait(1).to({x:607.35,y:1097.1},0).wait(1).to({x:607.95,y:1106.5},0).wait(1).to({x:608.65,y:1116.35},0).wait(1).to({x:609.7,y:1127.2},0).to({_off:true},1).wait(51).to({_off:false,regX:38.1,x:625.6,y:6.05},0).wait(1).to({regX:38.2,x:625.65,y:10.25},0).wait(1).to({x:625.6,y:14.4},0).wait(1).to({y:18.55},0).wait(1).to({x:625.55,y:22.7},0).wait(1).to({y:26.85},0).wait(1).to({x:625.5,y:31},0).wait(1).to({y:35.15},0).wait(1).to({x:625.45,y:39.35},0).wait(1).to({y:43.5},0).wait(1).to({x:625.4,y:47.65},0).wait(1).to({y:51.8},0).wait(1).to({x:625.35,y:55.95},0).wait(1).to({y:60.1},0).wait(1).to({x:625.3,y:64.25},0).wait(1).to({y:68.45},0).wait(1).to({x:625.25,y:72.6},0).wait(1).to({y:76.75},0).wait(1).to({x:625.2,y:80.9},0).wait(1).to({x:625.15,y:85},0).wait(1).to({y:89.15},0).wait(1).to({x:625.1,y:93.3},0).wait(1).to({y:97.45},0).wait(1).to({x:625.05,y:101.65},0).wait(1).to({y:105.8},0).wait(1).to({x:625,y:109.95},0).wait(1).to({y:114.1},0).wait(1).to({x:624.95,y:118.25},0).wait(1).to({y:122.4},0).wait(1).to({x:624.9,y:126.55},0).wait(1).to({y:130.75},0).wait(1).to({x:624.85,y:134.9},0).wait(1).to({y:139.05},0).wait(1).to({x:624.8,y:143.2},0).wait(1).to({y:147.35},0).wait(1).to({x:624.75,y:151.5},0).wait(1).to({y:155.65},0).wait(1).to({x:624.7,y:159.85},0).wait(1).to({x:624.65,y:164},0).wait(1).to({y:168.15},0).wait(1).to({x:624.6,y:172.3},0).wait(1).to({y:176.45},0).wait(1).to({x:624.55,y:180.6},0).wait(1).to({y:184.75},0).wait(1).to({x:624.5,y:188.9},0).wait(1).to({y:193.1},0).wait(1).to({x:624.45,y:197.25},0).wait(1).to({y:201.4},0).wait(1).to({x:624.4,y:205.55},0).wait(1).to({y:209.7},0).wait(1).to({x:624.35,y:213.85},0).wait(1).to({y:218},0).wait(1).to({x:624.3,y:222.2},0).wait(1).to({y:226.35},0).wait(1).to({x:624.25,y:230.5},0).wait(1).to({y:234.65},0).wait(1).to({x:624.2,y:238.8},0).wait(1).to({x:624.15,y:242.95},0).wait(1).to({y:247.1},0).wait(1).to({x:624.1,y:251.25},0).wait(1).to({y:255.45},0).wait(1).to({x:624.05,y:259.6},0).wait(1).to({y:263.75},0).wait(1).to({x:624,y:267.9},0).wait(1).to({y:272.05},0).wait(1).to({x:623.95,y:276.2},0).wait(1).to({y:280.35},0).wait(1).to({x:623.9,y:284.55},0).wait(1).to({y:288.7},0).wait(1).to({x:623.85,y:292.85},0).wait(1).to({y:297},0).wait(1).to({x:623.8,y:301.15},0).wait(1).to({y:305.3},0).wait(1).to({x:623.75,y:309.45},0).wait(1).to({y:313.65},0).wait(1).to({x:623.7,y:317.8},0).wait(1).to({x:623.65,y:321.95},0).wait(1).to({y:326.1},0).wait(1).to({x:623.6,y:330.25},0).wait(1).to({y:334.4},0).wait(1).to({x:623.55,y:338.55},0).wait(1).to({y:342.7},0).wait(1).to({x:623.5,y:346.9},0).wait(1).to({y:351.05},0).wait(1).to({x:623.45,y:355.2},0).wait(1).to({y:359.35},0).wait(1).to({x:623.4,y:363.5},0).wait(1).to({y:367.65},0).wait(1).to({x:623.35,y:371.8},0).wait(1).to({y:376},0).wait(1).to({x:623.3,y:380.15},0).wait(1).to({y:384.3},0).wait(1).to({x:623.25,y:388.45},0).wait(1).to({y:392.6},0).wait(1).to({x:623.2,y:396.75},0).wait(1).to({x:623.15,y:400.9},0).wait(1).to({y:405.1},0).wait(1).to({x:623.1,y:409.25},0).wait(1).to({y:413.4},0).wait(1).to({x:623.05,y:417.55},0).wait(1).to({y:421.7},0).wait(1).to({x:623,y:425.85},0).wait(1).to({y:430},0).wait(1).to({x:622.95,y:434.15},0).wait(1).to({y:438.35},0).wait(1).to({x:622.9,y:442.5},0).wait(1).to({y:446.65},0).wait(1).to({x:622.85,y:450.8},0).wait(1).to({y:454.95},0).wait(1).to({x:622.8,y:459.1},0).wait(1).to({y:463.25},0).wait(1).to({x:622.75,y:467.45},0).wait(1).to({y:471.6},0).wait(1).to({x:622.7,y:475.75},0).wait(1).to({x:622.65,y:479.9},0).wait(1).to({y:484.05},0).wait(1).to({x:622.6,y:488.2},0).wait(1).to({y:492.35},0).wait(1).to({x:622.55,y:496.5},0).wait(1).to({y:500.7},0).wait(1).to({x:622.5,y:504.85},0).wait(1).to({y:509},0).wait(1).to({x:622.45,y:513.15},0).wait(1).to({y:517.3},0).wait(1).to({x:622.4,y:521.45},0).wait(1).to({y:525.6},0).wait(1).to({x:622.35,y:529.8},0).wait(1).to({y:533.95},0).wait(1).to({x:622.3,y:538.1},0).wait(1).to({y:542.25},0).wait(1).to({x:622.25,y:546.4},0).wait(1).to({y:550.55},0).wait(1).to({x:622.2,y:554.7},0).wait(1).to({x:622.15,y:558.9},0).wait(1).to({y:563.05},0).wait(1).to({x:622.1,y:567.2},0).wait(1).to({y:571.35},0).wait(1).to({x:622.05,y:575.5},0).wait(1).to({y:579.65},0).wait(1).to({x:622,y:583.8},0).wait(1).to({y:587.95},0).wait(1).to({x:621.95,y:592.15},0).wait(1).to({y:596.3},0).wait(1).to({x:621.9,y:600.45},0).wait(1).to({y:604.6},0).wait(1).to({x:621.85,y:608.75},0).wait(1).to({y:612.9},0).wait(1).to({x:621.8,y:617.05},0).wait(1).to({y:621.25},0).wait(1).to({x:621.75,y:625.4},0).wait(1).to({y:629.55},0).wait(1).to({x:621.7,y:633.7},0).wait(1).to({x:621.65,y:637.85},0).wait(1).to({y:642},0).wait(1).to({x:621.6,y:646.15},0).wait(1).to({y:650.35},0).wait(1).to({x:621.55,y:654.5},0).wait(1).to({y:658.65},0).wait(1).to({x:621.5,y:662.8},0).wait(1).to({y:666.95},0).wait(1).to({x:621.45,y:671.1},0).wait(1).to({y:675.25},0).wait(1).to({x:621.4,y:679.4},0).wait(1).to({y:683.6},0).wait(1).to({x:621.35,y:687.75},0).wait(3).to({regX:38.1,x:621.3},0).wait(1).to({regX:38.2,x:621.4},0).wait(8));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_diver_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// diver_1
	this.instance = new lib.diver15();
	this.instance.setTransform(679.2,165.7,1,1.1788,-44.9995,0,0,65.3,49.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(47).to({_off:false},0).wait(1).to({regX:67.7,regY:48.6,rotation:-44.9996,x:678.85,y:172.55},0).wait(1).to({x:678,y:182.05},0).wait(1).to({x:677.3,y:191.55},0).wait(1).to({scaleY:1.1787,x:676.7,y:201},0).wait(1).to({x:676.2,y:210.45},0).wait(1).to({scaleX:0.9999,x:675.85,y:219.85},0).wait(1).to({x:675.55,y:229.25},0).wait(1).to({x:675.4,y:238.6},0).wait(1).to({x:675.35,y:247.9},0).wait(1).to({x:675.4,y:257.2},0).wait(1).to({x:675.5,y:266.5},0).wait(1).to({x:675.7,y:275.75},0).wait(1).to({x:676,y:284.95},0).wait(1).to({scaleY:1.1786,x:676.35,y:294.1},0).wait(1).to({x:676.75,y:303.3},0).wait(1).to({x:677.25,y:312.4},0).wait(1).to({scaleX:0.9998,x:677.75,y:321.5},0).wait(1).to({x:678.3,y:330.6},0).wait(1).to({x:678.95,y:339.65},0).wait(1).to({x:679.6,y:348.65},0).wait(1).to({x:680.25,y:357.65},0).wait(1).to({x:681,y:366.6},0).wait(1).to({x:681.7,y:375.55},0).wait(1).to({scaleY:1.1785,x:682.45,y:384.45},0).wait(1).to({x:683.2,y:393.3},0).wait(1).to({x:683.95,y:402.15},0).wait(1).to({x:684.7,y:411},0).wait(1).to({scaleX:0.9997,x:685.45,y:419.8},0).wait(1).to({x:686.15,y:428.55},0).wait(1).to({x:686.85,y:437.3},0).wait(1).to({x:687.55,y:446},0).wait(1).to({x:688.2,y:454.7},0).wait(1).to({x:688.8,y:463.35},0).wait(1).to({scaleY:1.1784,x:689.4,y:472},0).wait(1).to({x:689.9,y:480.6},0).wait(1).to({x:690.4,y:489.15},0).wait(1).to({x:690.8,y:497.7},0).wait(1).to({x:691.15,y:506.25},0).wait(1).to({x:691.45,y:514.7},0).wait(1).to({scaleX:0.9996,x:691.6,y:523.35},0).wait(1).to({x:691.65,y:532.2},0).wait(1).to({x:691.55,y:541.25},0).wait(1).to({x:691.35,y:550.55},0).wait(1).to({scaleY:1.1783,x:691,y:560},0).wait(1).to({x:690.6,y:569.65},0).wait(1).to({x:690.15,y:579.4},0).wait(1).to({x:689.6,y:589.3},0).wait(1).to({x:689,y:599.35},0).wait(1).to({x:688.4,y:609.45},0).wait(1).to({x:687.7,y:619.6},0).wait(1).to({scaleX:0.9995,x:687.05,y:629.85},0).wait(1).to({x:686.35,y:640.1},0).wait(1).to({x:685.7,y:650.35},0).wait(1).to({scaleY:1.1782,x:685.05,y:660.65},0).wait(1).to({x:684.45,y:670.85},0).wait(1).to({x:683.85,y:681.05},0).wait(1).to({x:683.35,y:691.2},0).wait(1).to({x:682.9,y:701.2},0).wait(1).to({x:682.55,y:711.15},0).wait(1).to({x:682.3,y:720.95},0).wait(1).to({x:682.15,y:730.6},0).wait(1).to({scaleX:0.9994,x:682.1,y:740.15},0).wait(1).to({x:682.2,y:749.45},0).wait(1).to({scaleY:1.1781,x:682.45,y:758.55},0).wait(1).to({x:682.85,y:767.45},0).wait(1).to({x:683.4,y:776.15},0).wait(1).to({x:684.15,y:784.55},0).wait(1).to({x:685.1,y:792.65},0).wait(1).to({x:686.25,y:800.45},0).wait(1).to({regX:65.2,regY:50.2,scaleY:1.1779,rotation:-44.9995,x:621.2,y:-72.8},0).wait(1).to({regX:67.7,regY:48.6,scaleY:1.178,rotation:-44.3658,x:624.75,y:-63.7},0).wait(1).to({rotation:-43.732,x:627.85,y:-51.6},0).wait(1).to({rotation:-43.0982,x:630.9,y:-39.5},0).wait(1).to({rotation:-42.4644,x:634,y:-27.35},0).wait(1).to({rotation:-41.8306,x:637.1,y:-15.2},0).wait(1).to({rotation:-41.1968,x:640.2,y:-3.05},0).wait(1).to({rotation:-40.563,x:639.2,y:3.55},0).wait(1).to({rotation:-39.9292,x:638.15,y:10.15},0).wait(1).to({rotation:-39.2954,x:637.1,y:16.85},0).wait(1).to({rotation:-38.6616,x:636.05,y:23.5},0).wait(1).to({rotation:-38.0278,x:635.05,y:30.15},0).wait(1).to({rotation:-37.394,x:634,y:36.85},0).wait(1).to({rotation:-36.7602,x:632.95,y:43.45},0).wait(1).to({rotation:-36.1264,x:631.95,y:50.15},0).wait(1).to({rotation:-35.4926,x:630.95,y:56.75},0).wait(1).to({rotation:-34.8588,x:629.85,y:63.5},0).wait(1).to({rotation:-34.225,x:628.85,y:70.15},0).wait(1).to({rotation:-33.5913,x:627.8,y:76.75},0).wait(1).to({rotation:-32.9575,x:626.75,y:83.45},0).wait(1).to({rotation:-32.3237,x:625.7,y:90.1},0).wait(1).to({rotation:-31.6899,x:624.65,y:96.75},0).wait(1).to({rotation:-31.0561,x:623.7,y:103.45},0).wait(1).to({rotation:-30.4223,x:622.65,y:110.1},0).wait(1).to({rotation:-29.7885,x:621.75,y:116.8},0).wait(1).to({rotation:-29.1547,x:620.95,y:123.45},0).wait(1).to({rotation:-28.5209,x:620.05,y:130.1},0).wait(1).to({rotation:-27.8871,x:619.2,y:136.75},0).wait(1).to({rotation:-27.2533,x:618.3,y:143.4},0).wait(1).to({rotation:-26.6195,x:617.45,y:150.1},0).wait(1).to({rotation:-25.9857,x:616.6,y:156.7},0).wait(1).to({rotation:-25.3519,x:615.7,y:163.45},0).wait(1).to({rotation:-24.7181,x:614.85,y:170.05},0).wait(1).to({rotation:-24.0843,x:613.95,y:176.75},0).wait(1).to({rotation:-23.4505,x:613.1,y:183.4},0).wait(1).to({rotation:-22.8167,x:612.25,y:190.05},0).wait(1).to({rotation:-22.1829,x:611.35,y:196.7},0).wait(1).to({rotation:-21.5491,x:610.55,y:203.4},0).wait(1).to({rotation:-20.9153,x:609.65,y:210.1},0).wait(1).to({rotation:-20.2815,x:608.8,y:216.75},0).wait(1).to({rotation:-19.6477,x:607.9,y:223.4},0).wait(1).to({rotation:-19.0139,x:607.05,y:230.1},0).wait(1).to({rotation:-18.3801,x:606.15,y:236.75},0).wait(1).to({rotation:-17.7463,x:605.3,y:243.45},0).wait(1).to({rotation:-17.1125,x:604.45,y:250.05},0).wait(1).to({rotation:-16.4787,x:605.4,y:256.75},0).wait(1).to({rotation:-15.8449,x:606.35,y:263.4},0).wait(1).to({rotation:-15.2111,x:607.25,y:270.1},0).wait(1).to({rotation:-14.5773,x:608.2,y:276.75},0).wait(1).to({rotation:-13.9435,x:609.1,y:283.4},0).wait(1).to({rotation:-13.3097,x:610.1,y:290.05},0).wait(1).to({rotation:-12.6759,x:610.95,y:296.75},0).wait(1).to({rotation:-12.0421,x:611.9,y:303.45},0).wait(1).to({rotation:-11.4083,x:612.8,y:310.1},0).wait(1).to({rotation:-10.7746,x:613.75,y:316.8},0).wait(1).to({rotation:-10.1408,x:614.75,y:323.45},0).wait(1).to({rotation:-9.507,x:615.65,y:330.15},0).wait(1).to({rotation:-8.8732,x:616.6,y:336.8},0).wait(1).to({rotation:-8.2394,x:617.5,y:343.45},0).wait(1).to({rotation:-7.6056,x:618.45,y:350.15},0).wait(1).to({rotation:-6.9718,x:619.35,y:356.85},0).wait(1).to({rotation:-6.338,x:620.3,y:363.55},0).wait(1).to({rotation:-5.7042,x:621.2,y:370.2},0).wait(1).to({rotation:-5.0704,x:622.15,y:376.85},0).wait(1).to({rotation:-4.4366,x:623.1,y:383.55},0).wait(1).to({rotation:-3.8028,x:624,y:390.15},0).wait(1).to({rotation:-3.169,x:624.9,y:396.85},0).wait(1).to({rotation:-2.5352,x:625.9,y:403.55},0).wait(1).to({rotation:-1.9014,x:626.75,y:410.2},0).wait(1).to({rotation:-1.2676,x:627.7,y:416.9},0).wait(1).to({rotation:-0.6338,x:628.65,y:423.6},0).wait(1).to({rotation:0,x:629.55,y:430.25},0).wait(1).to({regX:67.8,regY:48.5,scaleX:1,scaleY:1.179,x:627.3,y:426.8},0).wait(1).to({regX:67.7,regY:48.6,x:627.05,y:426.85},0).wait(1).to({x:626.9},0).wait(1).to({x:626.8},0).wait(1).to({x:626.65},0).wait(1).to({x:626.55},0).wait(1).to({x:626.4},0).wait(1).to({x:626.25},0).wait(1).to({x:626.15},0).wait(1).to({x:626},0).wait(1).to({x:625.9},0).wait(1).to({x:625.75},0).wait(1).to({x:625.65},0).wait(1).to({x:625.5},0).wait(1).to({x:625.35},0).wait(1).to({x:625.25},0).wait(1).to({x:625.1},0).wait(1).to({x:625},0).wait(1).to({x:624.85},0).wait(1).to({x:624.75},0).wait(1).to({x:624.6},0).wait(1).to({x:624.45},0).wait(1).to({x:624.35},0).wait(1).to({x:624.2},0).wait(1).to({x:624.1},0).wait(1).to({x:623.95},0).wait(1).to({x:623.85},0).wait(1).to({x:623.7},0).wait(1).to({x:623.55},0).wait(1).to({x:623.45},0).wait(1).to({x:623.3},0).wait(1).to({x:623.2},0).wait(1).to({x:623.05},0).wait(1).to({x:622.95},0).wait(45).to({regX:67.8,scaleY:1,x:635.1,y:417.6},0).wait(1).to({regX:67.7,rotation:-2.9143,x:632.95,y:412.1},0).wait(1).to({rotation:-5.8286,x:631,y:406.6},0).wait(1).to({rotation:-8.7428,x:628.95,y:401.05},0).wait(1).to({rotation:-11.6571,x:630.45,y:393.75},0).wait(1).to({rotation:-14.5714,x:631.95,y:386.5},0).wait(1).to({rotation:-17.4857,x:633.45,y:379.2},0).wait(1).to({rotation:-20.4,x:635,y:371.9},0).wait(1).to({rotation:-23.3143,x:636.5,y:364.65},0).wait(1).to({rotation:-26.2285,x:638.05,y:357.35},0).wait(1).to({rotation:-29.1428,x:635.8,y:358.3},0).wait(1).to({rotation:-32.0571,x:633.6,y:359.25},0).wait(1).to({rotation:-34.9714,x:631.4,y:360.2},0).wait(1).to({rotation:-37.8857,x:629.2,y:361.25},0).wait(1).to({rotation:-40.8,x:627.8,y:378.95},0).wait(1).to({rotation:-43.7142,x:626.45,y:396.7},0).wait(1).to({rotation:-46.6285,x:625.05,y:414.45},0).wait(1).to({rotation:-49.5428,x:623.65,y:432.25},0).wait(1).to({regX:67.2,rotation:-72.8571,x:638.4,y:457.3},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_cloud11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cloud11
	this.instance = new lib.cloud11();
	this.instance.setTransform(169.6,948.4,1,1,0,0,0,111.6,62.4);
	this.instance._off = true;

	this.instance_1 = new lib.Group_5_1();
	this.instance_1.setTransform(58,886,0.2566,0.3829);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},117).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},98).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(117).to({_off:false},0).wait(1).to({x:169.55,y:936.4},0).wait(1).to({x:169.5,y:924.45},0).wait(1).to({x:169.45,y:912.45},0).wait(1).to({x:169.4,y:900.5},0).wait(1).to({y:888.55},0).wait(1).to({x:169.35,y:876.55},0).wait(1).to({x:169.3,y:864.6},0).wait(1).to({x:169.25,y:852.6},0).wait(1).to({y:840.65},0).wait(1).to({x:169.2,y:828.7},0).wait(1).to({x:169.15,y:816.7},0).wait(1).to({x:169.1,y:804.75},0).wait(1).to({y:792.75},0).wait(1).to({x:169.05,y:780.8},0).wait(1).to({x:169,y:768.85},0).wait(1).to({x:168.95,y:756.85},0).wait(1).to({y:744.9},0).wait(1).to({x:168.9,y:732.9},0).wait(1).to({x:168.85,y:720.95},0).wait(1).to({x:168.8,y:709},0).wait(1).to({y:697},0).wait(1).to({x:168.75,y:685.05},0).wait(1).to({x:168.7,y:673.05},0).wait(1).to({x:168.65,y:661.1},0).wait(1).to({y:649.15},0).wait(1).to({x:168.6,y:637.15},0).wait(1).to({x:168.55,y:625.2},0).wait(1).to({x:168.5,y:613.2},0).wait(1).to({y:601.25},0).wait(1).to({x:168.45,y:589.3},0).wait(1).to({x:168.4,y:577.3},0).wait(1).to({x:168.35,y:565.35},0).wait(1).to({y:553.35},0).wait(1).to({x:168.3,y:541.4},0).wait(1).to({x:168.25,y:529.45},0).wait(1).to({x:168.2,y:517.45},0).wait(1).to({y:505.5},0).wait(1).to({x:168.15,y:493.5},0).wait(1).to({x:168.1,y:481.55},0).wait(1).to({x:168.05,y:469.6},0).wait(1).to({y:457.6},0).wait(1).to({x:168,y:445.65},0).wait(1).to({x:167.95,y:433.7},0).wait(1).to({x:167.9,y:421.7},0).wait(1).to({x:167.85,y:409.75},0).wait(1).to({y:397.75},0).wait(1).to({x:167.8,y:385.8},0).wait(1).to({x:167.75,y:373.85},0).wait(1).to({x:167.7,y:361.85},0).wait(1).to({y:349.9},0).wait(1).to({x:167.65,y:337.9},0).wait(1).to({x:167.6,y:325.95},0).wait(1).to({x:167.55,y:314},0).wait(1).to({y:302},0).wait(1).to({x:167.5,y:290.05},0).wait(1).to({x:167.45,y:278.05},0).wait(1).to({x:167.4,y:266.1},0).wait(1).to({y:254.15},0).wait(1).to({x:167.35,y:242.15},0).wait(1).to({x:167.3,y:230.2},0).wait(1).to({x:167.25,y:218.2},0).wait(1).to({y:206.25},0).wait(1).to({x:167.2,y:194.3},0).wait(1).to({x:167.15,y:182.3},0).wait(1).to({x:167.1,y:170.35},0).wait(1).to({y:158.35},0).wait(1).to({x:167.05,y:146.4},0).wait(1).to({x:167,y:134.45},0).wait(1).to({x:166.95,y:122.45},0).wait(1).to({y:110.5},0).wait(1).to({x:166.9,y:98.5},0).wait(1).to({x:166.85,y:86.55},0).wait(1).to({x:166.8,y:74.6},0).wait(1).to({y:62.6},0).wait(1).to({x:166.75,y:50.7},0).wait(1).to({x:166.7,y:38.7},0).wait(1).to({x:166.65,y:26.75},0).wait(1).to({y:14.8},0).wait(1).to({x:166.6,y:2.8},0).wait(1).to({x:166.55,y:-9.15},0).wait(1).to({x:166.5,y:-21.15},0).wait(1).to({y:-33.1},0).wait(1).to({x:166.45,y:-45.05},0).wait(1).to({x:166.4,y:-57.05},0).wait(1).to({x:166.35,y:-69},0).wait(1).to({y:-81},0).to({_off:true},1).wait(98).to({_off:false,x:169.6,y:948.4},0).wait(1).to({y:928.15},0).wait(1).to({y:907.95},0).wait(1).to({y:887.75},0).wait(1).to({y:867.5},0).wait(1).to({y:847.3},0).wait(1).to({y:827.1},0).wait(1).to({y:806.85},0).wait(1).to({y:786.65},0).wait(1).to({y:766.45},0).wait(1).to({y:746.2},0).wait(1).to({y:726},0).wait(1).to({y:705.8},0).wait(1).to({y:685.55},0).wait(1).to({y:665.35},0).wait(1).to({y:645.15},0).wait(1).to({y:624.9},0).wait(1).to({y:604.7},0).wait(1).to({y:584.5},0).wait(1).to({y:564.25},0).wait(1).to({y:544.05},0).wait(1).to({y:523.85},0).wait(1).to({y:503.6},0).wait(1).to({y:483.4},0).wait(1).to({y:463.2},0).wait(1).to({y:443},0).wait(1).to({y:422.75},0).wait(1).to({y:402.55},0).wait(1).to({y:382.35},0).wait(1).to({y:362.1},0).wait(1).to({y:341.9},0).wait(1).to({y:321.7},0).wait(1).to({y:301.45},0).wait(1).to({y:281.25},0).wait(1).to({y:261.05},0).wait(1).to({y:240.8},0).wait(1).to({y:220.6},0).wait(1).to({y:200.4},0).wait(1).to({y:180.15},0).wait(1).to({y:159.95},0).wait(1).to({y:139.75},0).wait(1).to({y:119.5},0).wait(1).to({y:99.3},0).wait(1).to({y:79.1},0).wait(1).to({y:58.9},0).wait(1).to({y:38.7},0).wait(1).to({y:18.5},0).wait(1).to({y:-1.75},0).wait(1).to({y:-21.95},0).wait(1).to({y:-42.15},0).wait(1).to({y:-62.4},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_cloud10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cloud10
	this.instance = new lib.cloud10();
	this.instance.setTransform(1086.2,971.6,1,1,0,0,0,175.2,59.6);
	this.instance._off = true;

	this.instance_1 = new lib.Group();
	this.instance_1.setTransform(911,912,0.4026,0.3664);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},117).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[]},101).to({state:[{t:this.instance}]},25).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(117).to({_off:false},0).wait(1).to({regX:175.1,regY:59.5,x:1086.1,y:957.9},0).wait(1).to({y:944.35},0).wait(1).to({y:930.75},0).wait(1).to({y:917.2},0).wait(1).to({y:903.6},0).wait(1).to({y:890.05},0).wait(1).to({y:876.5},0).wait(1).to({y:862.9},0).wait(1).to({y:849.35},0).wait(1).to({y:835.75},0).wait(1).to({y:822.2},0).wait(1).to({y:808.6},0).wait(1).to({y:795.05},0).wait(1).to({y:781.5},0).wait(1).to({y:767.9},0).wait(1).to({y:754.35},0).wait(1).to({y:740.75},0).wait(1).to({y:727.2},0).wait(1).to({y:713.65},0).wait(1).to({y:700.05},0).wait(1).to({y:686.5},0).wait(1).to({y:672.9},0).wait(1).to({y:659.35},0).wait(1).to({y:645.75},0).wait(1).to({y:632.2},0).wait(1).to({y:618.65},0).wait(1).to({y:605.05},0).wait(1).to({y:591.5},0).wait(1).to({y:577.9},0).wait(1).to({y:564.35},0).wait(1).to({y:550.8},0).wait(1).to({y:537.2},0).wait(1).to({y:523.65},0).wait(1).to({y:510.05},0).wait(1).to({y:496.5},0).wait(1).to({y:482.9},0).wait(1).to({y:469.35},0).wait(1).to({y:455.8},0).wait(1).to({y:442.2},0).wait(1).to({y:428.65},0).wait(1).to({y:415.05},0).wait(1).to({y:401.5},0).wait(1).to({y:387.95},0).wait(1).to({y:374.35},0).wait(1).to({y:360.8},0).wait(1).to({y:347.2},0).wait(1).to({y:333.65},0).wait(1).to({y:320.05},0).wait(1).to({y:306.5},0).wait(1).to({y:292.95},0).wait(1).to({y:279.35},0).wait(1).to({y:265.8},0).wait(1).to({y:252.2},0).wait(1).to({y:238.65},0).wait(1).to({y:225.1},0).wait(1).to({y:211.5},0).wait(1).to({y:197.95},0).wait(1).to({y:184.35},0).wait(1).to({y:170.8},0).wait(1).to({y:157.2},0).wait(1).to({y:143.65},0).wait(1).to({y:130.1},0).wait(1).to({y:116.5},0).wait(1).to({y:102.95},0).wait(1).to({y:89.35},0).wait(1).to({y:75.8},0).wait(1).to({y:62.25},0).wait(1).to({y:48.7},0).wait(1).to({y:35.15},0).wait(1).to({y:21.55},0).wait(1).to({y:8},0).wait(1).to({y:-5.6},0).wait(1).to({y:-19.15},0).wait(1).to({y:-32.7},0).wait(1).to({y:-46.3},0).wait(1).to({y:-59.85},0).wait(1).to({y:-73.45},0).wait(1).to({y:-87},0).wait(1).to({y:-100.6},0).to({_off:true},1).wait(126).to({_off:false,regX:175.2,regY:59.6,x:1086.2,y:971.6},0).wait(1).to({regX:175.1,regY:59.5,x:1086.45,y:949.3},0).wait(1).to({x:1086.8,y:927.15},0).wait(1).to({x:1087.15,y:904.95},0).wait(1).to({x:1087.5,y:882.8},0).wait(1).to({x:1087.85,y:860.6},0).wait(1).to({x:1088.2,y:838.45},0).wait(1).to({x:1088.55,y:816.25},0).wait(1).to({x:1088.9,y:794.1},0).wait(1).to({x:1089.25,y:771.95},0).wait(1).to({x:1089.6,y:749.75},0).wait(1).to({x:1089.95,y:727.6},0).wait(1).to({x:1090.3,y:705.4},0).wait(1).to({x:1090.7,y:683.25},0).wait(1).to({x:1091.05,y:661.05},0).wait(1).to({x:1091.4,y:638.9},0).wait(1).to({x:1091.75,y:616.7},0).wait(1).to({x:1092.1,y:594.55},0).wait(1).to({x:1092.45,y:572.4},0).wait(1).to({x:1092.8,y:550.2},0).wait(1).to({x:1093.15,y:528.05},0).wait(1).to({x:1093.5,y:505.85},0).wait(1).to({x:1093.85,y:483.7},0).wait(1).to({x:1094.2,y:461.5},0).wait(1).to({x:1094.55,y:439.35},0).wait(1).to({x:1094.95,y:417.2},0).wait(1).to({x:1095.3,y:395},0).wait(1).to({x:1095.65,y:372.85},0).wait(1).to({x:1096,y:350.65},0).wait(1).to({x:1096.35,y:328.5},0).wait(1).to({x:1096.7,y:306.3},0).wait(1).to({x:1097.05,y:284.15},0).wait(1).to({x:1097.4,y:261.95},0).wait(1).to({x:1097.75,y:239.8},0).wait(1).to({x:1098.1,y:217.65},0).wait(1).to({x:1098.45,y:195.45},0).wait(1).to({x:1098.8,y:173.3},0).wait(1).to({x:1099.15,y:151.1},0).wait(1).to({x:1099.55,y:128.95},0).wait(1).to({x:1099.9,y:106.75},0).wait(1).to({x:1100.25,y:84.6},0).wait(1).to({x:1100.6,y:62.4},0).wait(1).to({x:1100.95,y:40.3},0).wait(1).to({x:1101.3,y:18.15},0).wait(1).to({x:1101.65,y:-4.05},0).wait(1).to({x:1102,y:-26.2},0).wait(1).to({x:1102.35,y:-48.4},0).wait(1).to({x:1102.7,y:-70.55},0).wait(1).to({x:1103.05,y:-92.75},0).wait(1).to({x:1103.4,y:-114.9},0).wait(1).to({x:1103.8,y:-137.1},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_cloud9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cloud9
	this.instance = new lib.cloud9();
	this.instance.setTransform(541.9,1195.2,1,1,0,0,0,263.9,86.2);
	this.instance._off = true;

	this.instance_1 = new lib.Group_2_1();
	this.instance_1.setTransform(278,1109,0.3824,0.3518);

	this.instance_2 = new lib.Symbol3();
	this.instance_2.setTransform(354.9,895.2,1,1,0,0,0,263.9,86.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},117).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[]},43).to({state:[{t:this.instance_2}]},8).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(117).to({_off:false},0).wait(1).to({regX:263.8,x:541.8,y:1184.15},0).wait(1).to({x:541.85,y:1173.15},0).wait(1).to({y:1162.15},0).wait(1).to({x:541.9,y:1151.15},0).wait(1).to({y:1140.15},0).wait(1).to({x:541.95,y:1129.15},0).wait(1).to({y:1118.15},0).wait(1).to({x:542,y:1107.1},0).wait(1).to({y:1096.1},0).wait(1).to({x:542.05,y:1085.1},0).wait(1).to({y:1074.1},0).wait(1).to({x:542.1,y:1063.1},0).wait(1).to({y:1052.1},0).wait(1).to({x:542.15,y:1041.1},0).wait(1).to({y:1030.1},0).wait(1).to({x:542.2,y:1019.05},0).wait(1).to({y:1008.05},0).wait(1).to({x:542.25,y:997.05},0).wait(1).to({y:986.05},0).wait(1).to({x:542.3,y:975.05},0).wait(1).to({y:964.05},0).wait(1).to({x:542.35,y:953.05},0).wait(1).to({y:942.05},0).wait(1).to({x:542.4,y:931},0).wait(1).to({y:920},0).wait(1).to({x:542.45,y:909},0).wait(1).to({y:898},0).wait(1).to({x:542.5,y:887},0).wait(1).to({y:876},0).wait(1).to({x:542.55,y:865},0).wait(1).to({y:853.95},0).wait(1).to({x:542.6,y:842.95},0).wait(1).to({y:831.95},0).wait(1).to({x:542.65,y:820.95},0).wait(1).to({y:809.95},0).wait(1).to({x:542.7,y:798.95},0).wait(1).to({y:787.95},0).wait(1).to({x:542.75,y:776.95},0).wait(1).to({y:765.9},0).wait(1).to({x:542.8,y:754.9},0).wait(1).to({y:743.9},0).wait(1).to({x:542.85,y:732.9},0).wait(1).to({y:721.9},0).wait(1).to({x:542.9,y:710.9},0).wait(1).to({y:699.9},0).wait(1).to({x:542.95,y:688.9},0).wait(1).to({y:677.85},0).wait(1).to({x:543,y:666.85},0).wait(1).to({y:655.85},0).wait(1).to({x:543.05,y:644.85},0).wait(1).to({y:633.85},0).wait(1).to({x:543.1,y:622.85},0).wait(1).to({y:611.85},0).wait(1).to({x:543.15,y:600.8},0).wait(1).to({y:589.8},0).wait(1).to({x:543.2,y:578.8},0).wait(1).to({y:567.8},0).wait(1).to({x:543.25,y:556.8},0).wait(1).to({y:545.8},0).wait(1).to({x:543.3,y:534.8},0).wait(1).to({y:523.8},0).wait(1).to({x:543.35,y:512.75},0).wait(1).to({y:501.75},0).wait(1).to({x:543.4,y:490.75},0).wait(1).to({y:479.75},0).wait(1).to({x:543.45,y:468.75},0).wait(1).to({y:457.75},0).wait(1).to({x:543.5,y:446.75},0).wait(1).to({y:435.75},0).wait(1).to({x:543.55,y:424.7},0).wait(1).to({y:413.7},0).wait(1).to({x:543.6,y:402.7},0).wait(1).to({y:391.7},0).wait(1).to({x:543.65,y:380.7},0).wait(1).to({y:369.7},0).wait(1).to({x:543.7,y:358.7},0).wait(1).to({y:347.65},0).wait(1).to({x:543.75,y:336.65},0).wait(1).to({y:325.65},0).wait(1).to({x:543.8,y:314.65},0).wait(1).to({y:303.65},0).wait(1).to({x:543.85,y:292.65},0).wait(1).to({y:281.65},0).wait(1).to({x:543.9,y:270.65},0).wait(1).to({y:259.6},0).wait(1).to({x:543.95,y:248.6},0).wait(1).to({y:237.6},0).wait(1).to({x:544,y:226.6},0).wait(1).to({y:215.6},0).wait(1).to({x:544.05,y:204.6},0).wait(1).to({y:193.6},0).wait(1).to({x:544.1,y:182.6},0).wait(1).to({y:171.55},0).wait(1).to({x:544.15,y:160.55},0).wait(1).to({y:149.55},0).wait(1).to({x:544.2,y:138.55},0).wait(1).to({y:127.55},0).wait(1).to({x:544.25,y:116.55},0).wait(1).to({y:105.55},0).wait(1).to({x:544.3,y:94.5},0).wait(1).to({y:83.55},0).wait(1).to({x:544.35,y:72.55},0).wait(1).to({y:61.55},0).wait(1).to({x:544.4,y:50.55},0).wait(1).to({y:39.55},0).wait(1).to({x:544.45,y:28.55},0).wait(1).to({y:17.55},0).wait(1).to({x:544.5,y:6.5},0).wait(1).to({y:-4.5},0).wait(1).to({x:544.55,y:-15.5},0).wait(1).to({y:-26.5},0).wait(1).to({x:544.6,y:-37.5},0).wait(1).to({y:-48.5},0).wait(1).to({x:544.65,y:-59.5},0).wait(1).to({y:-70.5},0).wait(1).to({x:544.7,y:-81.55},0).wait(1).to({y:-92.55},0).wait(1).to({x:544.75,y:-103.55},0).wait(1).to({y:-114.55},0).wait(1).to({x:544.8,y:-125.55},0).wait(1).to({y:-136.55},0).wait(1).to({x:544.85,y:-147.55},0).wait(1).to({x:544.9,y:-158.6},0).to({_off:true},1).wait(78));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(292).to({_off:false},0).wait(1).to({regX:263.8,x:355.1,y:856.7},0).wait(1).to({x:355.4,y:818.25},0).wait(1).to({x:355.7,y:779.8},0).wait(1).to({x:356,y:741.3},0).wait(1).to({x:356.3,y:702.85},0).wait(1).to({x:356.6,y:664.4},0).wait(1).to({x:356.9,y:625.9},0).wait(1).to({x:357.2,y:587.45},0).wait(1).to({x:357.5,y:549},0).wait(1).to({x:357.8,y:510.5},0).wait(1).to({x:358.1,y:472.05},0).wait(1).to({x:358.4,y:433.6},0).wait(1).to({x:358.7,y:395.15},0).wait(1).to({x:359,y:356.65},0).wait(1).to({x:359.3,y:318.2},0).wait(1).to({x:359.6,y:279.75},0).wait(1).to({x:359.9,y:241.25},0).wait(1).to({x:360.2,y:202.8},0).wait(1).to({x:360.5,y:164.35},0).wait(1).to({x:360.8,y:125.85},0).wait(1).to({x:361.1,y:87.4},0).wait(1).to({x:361.4,y:49},0).wait(1).to({x:361.7,y:10.5},0).wait(1).to({x:362,y:-27.95},0).wait(1).to({x:362.3,y:-66.4},0).wait(1).to({x:362.6,y:-104.9},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_cloud4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cloud4
	this.instance = new lib.Symbol1();
	this.instance.setTransform(918.05,1713.75,1,1,0,0,0,167.1,43);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(164).to({_off:false},0).wait(1).to({y:1697.1},0).wait(1).to({x:918.1,y:1680.5},0).wait(1).to({x:918.15,y:1663.85},0).wait(1).to({x:918.2,y:1647.25},0).wait(1).to({x:918.25,y:1630.65},0).wait(1).to({x:918.3,y:1614},0).wait(1).to({x:918.35,y:1597.4},0).wait(1).to({x:918.4,y:1580.8},0).wait(1).to({y:1564.15},0).wait(1).to({x:918.45,y:1547.55},0).wait(1).to({x:918.5,y:1530.9},0).wait(1).to({x:918.55,y:1514.3},0).wait(1).to({x:918.6,y:1497.7},0).wait(1).to({x:918.65,y:1481.05},0).wait(1).to({x:918.7,y:1464.45},0).wait(1).to({x:918.75,y:1447.85},0).wait(1).to({x:918.8,y:1431.2},0).wait(1).to({y:1414.6},0).wait(1).to({x:918.85,y:1397.95},0).wait(1).to({x:918.9,y:1381.35},0).wait(1).to({x:918.95,y:1364.75},0).wait(1).to({x:919,y:1348.1},0).wait(1).to({x:919.05,y:1331.5},0).wait(1).to({x:919.1,y:1314.9},0).wait(1).to({x:919.15,y:1298.25},0).wait(1).to({x:919.2,y:1281.65},0).wait(1).to({y:1265},0).wait(1).to({x:919.25,y:1248.4},0).wait(1).to({x:919.3,y:1231.8},0).wait(1).to({x:919.35,y:1215.15},0).wait(1).to({x:919.4,y:1198.55},0).wait(1).to({x:919.45,y:1181.95},0).wait(1).to({x:919.5,y:1165.3},0).wait(1).to({x:919.55,y:1148.7},0).wait(1).to({x:919.6,y:1132.05},0).wait(1).to({y:1115.45},0).wait(1).to({x:919.65,y:1098.85},0).wait(1).to({x:919.7,y:1082.2},0).wait(1).to({x:919.75,y:1065.6},0).wait(1).to({x:919.8,y:1049},0).wait(1).to({x:919.85,y:1032.35},0).wait(1).to({x:919.9,y:1015.75},0).wait(1).to({x:919.95,y:999.1},0).wait(1).to({x:920,y:982.5},0).wait(1).to({y:965.9},0).wait(1).to({x:920.05,y:949.25},0).wait(1).to({x:920.1,y:932.65},0).wait(1).to({x:920.15,y:916.05},0).wait(1).to({x:920.2,y:899.4},0).wait(1).to({x:920.25,y:882.8},0).wait(1).to({x:920.3,y:866.15},0).wait(1).to({x:920.35,y:849.55},0).wait(1).to({x:920.4,y:832.95},0).wait(1).to({y:816.3},0).wait(1).to({x:920.45,y:799.7},0).wait(1).to({x:920.5,y:783.1},0).wait(1).to({x:920.55,y:766.45},0).wait(1).to({x:920.6,y:749.85},0).wait(1).to({x:920.65,y:733.2},0).wait(1).to({x:920.7,y:716.6},0).wait(1).to({x:920.75,y:700},0).wait(1).to({x:920.8,y:683.35},0).wait(1).to({y:666.75},0).wait(1).to({x:920.85,y:650.15},0).wait(1).to({x:920.9,y:633.5},0).wait(1).to({x:920.95,y:616.9},0).wait(1).to({x:921,y:600.25},0).wait(1).to({x:921.05,y:583.65},0).wait(1).to({x:921.1,y:567.05},0).wait(1).to({x:921.15,y:550.4},0).wait(1).to({x:921.2,y:533.8},0).wait(1).to({y:517.2},0).wait(1).to({x:921.25,y:500.55},0).wait(1).to({x:921.3,y:483.95},0).wait(1).to({x:921.35,y:467.3},0).wait(1).to({x:921.4,y:450.7},0).wait(1).to({x:921.45,y:434.1},0).wait(1).to({x:921.5,y:417.45},0).wait(1).to({x:921.55,y:400.85},0).wait(1).to({x:921.6,y:384.25},0).wait(1).to({y:367.6},0).wait(1).to({x:921.65,y:351},0).wait(1).to({x:921.7,y:334.35},0).wait(1).to({x:921.75,y:317.75},0).wait(1).to({x:921.8,y:301.15},0).wait(1).to({x:921.85,y:284.5},0).wait(1).to({x:921.9,y:267.9},0).wait(1).to({x:921.95,y:251.3},0).wait(1).to({x:922,y:234.65},0).wait(1).to({y:218.05},0).wait(1).to({x:922.05,y:201.4},0).wait(1).to({x:922.1,y:184.8},0).wait(1).to({x:922.15,y:168.2},0).wait(1).to({x:922.2,y:151.55},0).wait(1).to({x:922.25,y:134.95},0).wait(1).to({x:922.3,y:118.35},0).wait(1).to({x:922.35,y:101.7},0).wait(1).to({x:922.4,y:85.1},0).wait(1).to({y:68.45},0).wait(1).to({x:922.45,y:51.85},0).wait(1).to({x:922.5,y:35.3},0).wait(1).to({x:922.55,y:18.65},0).wait(1).to({x:922.6,y:2.05},0).wait(1).to({x:922.65,y:-14.55},0).wait(1).to({x:922.7,y:-31.2},0).wait(1).to({x:922.75,y:-47.8},0).wait(1).to({x:922.8,y:-64.45},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_cloud2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cloud2
	this.instance = new lib.cloud2();
	this.instance.setTransform(-21.6,-302.25);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(166).to({_off:false},0).wait(1).to({regX:227.5,regY:62.4,x:205.5,y:-256.7},0).wait(1).to({x:205.05,y:-244.25},0).wait(1).to({x:204.6,y:-231.8},0).wait(1).to({x:204.15,y:-219.35},0).wait(1).to({x:203.7,y:-206.9},0).wait(1).to({x:203.25,y:-194.45},0).wait(1).to({x:202.85,y:-182},0).wait(1).to({x:202.4,y:-177.7},0).wait(1).to({x:201.95,y:-173.35},0).wait(1).to({x:201.5,y:-169},0).wait(1).to({x:201.05,y:-164.65},0).wait(1).to({x:200.6,y:-160.3},0).wait(1).to({x:200.2,y:-155.95},0).wait(1).to({x:199.75,y:-151.65},0).wait(1).to({x:199.3,y:-147.3},0).wait(1).to({x:198.85,y:-142.95},0).wait(1).to({x:198.4,y:-138.6},0).wait(1).to({x:197.95,y:-134.25},0).wait(1).to({x:197.55,y:-129.9},0).wait(1).to({x:197.1,y:-125.6},0).wait(1).to({x:196.65,y:-121.25},0).wait(1).to({x:196.2,y:-116.9},0).wait(1).to({x:195.75,y:-112.55},0).wait(1).to({regX:0,regY:0,x:-51.5,y:1882.95},0).wait(1).to({regX:227.5,regY:62.4,x:177,y:1923.75},0).wait(1).to({x:178,y:1902.2},0).wait(1).to({x:179,y:1880.6},0).wait(1).to({x:180,y:1859.05},0).wait(1).to({x:181,y:1837.45},0).wait(1).to({x:181.95,y:1815.9},0).wait(1).to({x:182.95,y:1794.3},0).wait(1).to({x:183.95,y:1772.75},0).wait(1).to({x:184.95,y:1751.15},0).wait(1).to({x:185.95,y:1729.6},0).wait(1).to({x:186.9,y:1708},0).wait(1).to({x:187.9,y:1686.45},0).wait(1).to({x:188.9,y:1664.9},0).wait(1).to({x:189.9,y:1643.3},0).wait(1).to({x:190.9,y:1621.75},0).wait(1).to({x:191.85,y:1600.15},0).wait(1).to({x:192.85,y:1578.6},0).wait(1).to({x:193.85,y:1557},0).wait(1).to({x:194.85,y:1535.45},0).wait(1).to({x:195.85,y:1513.85},0).wait(1).to({x:196.8,y:1492.3},0).wait(1).to({x:197.8,y:1470.7},0).wait(1).to({x:198.8,y:1449.15},0).wait(1).to({x:199.8,y:1427.6},0).wait(1).to({x:200.8,y:1406},0).wait(1).to({x:201.8,y:1384.45},0).wait(1).to({x:202.75,y:1362.85},0).wait(1).to({x:203.75,y:1341.3},0).wait(1).to({x:204.75,y:1319.7},0).wait(1).to({x:205.75,y:1298.15},0).wait(1).to({x:206.75,y:1276.55},0).wait(1).to({x:207.7,y:1255},0).wait(1).to({x:208.7,y:1233.4},0).wait(1).to({x:209.7,y:1211.85},0).wait(1).to({x:210.7,y:1190.25},0).wait(1).to({x:211.7,y:1168.7},0).wait(1).to({x:212.65,y:1147.15},0).wait(1).to({x:213.65,y:1125.55},0).wait(1).to({x:214.65,y:1104},0).wait(1).to({x:215.65,y:1082.4},0).wait(1).to({x:216.65,y:1060.85},0).wait(1).to({x:217.6,y:1039.25},0).wait(1).to({x:218.6,y:1017.7},0).wait(1).to({x:219.6,y:996.1},0).wait(1).to({x:220.6,y:974.55},0).wait(1).to({x:221.6,y:952.95},0).wait(1).to({x:222.6,y:931.4},0).wait(1).to({x:223.55,y:909.85},0).wait(1).to({x:224.55,y:888.25},0).wait(1).to({x:225.55,y:866.7},0).wait(1).to({x:226.55,y:845.1},0).wait(1).to({x:227.5,y:823.55},0).wait(1).to({y:801.25},0).wait(1).to({y:778.95},0).wait(1).to({y:756.65},0).wait(1).to({y:734.4},0).wait(1).to({y:712.1},0).wait(1).to({y:689.8},0).wait(1).to({y:667.5},0).wait(1).to({y:645.2},0).wait(1).to({y:622.95},0).wait(1).to({y:600.65},0).wait(1).to({y:578.35},0).wait(1).to({y:556.05},0).wait(1).to({y:533.75},0).wait(1).to({y:511.5},0).wait(1).to({y:489.2},0).wait(1).to({y:466.9},0).wait(1).to({y:444.6},0).wait(1).to({y:422.3},0).wait(1).to({y:400.05},0).wait(1).to({y:377.75},0).wait(1).to({y:355.45},0).wait(1).to({y:333.15},0).wait(1).to({y:310.9},0).wait(1).to({y:288.6},0).wait(1).to({y:266.3},0).wait(1).to({y:244},0).wait(1).to({y:221.7},0).wait(1).to({y:199.45},0).wait(1).to({y:177.15},0).wait(1).to({y:154.85},0).wait(1).to({y:132.55},0).wait(1).to({y:110.25},0).wait(1).to({y:88},0).wait(1).to({y:65.7},0).wait(1).to({y:43.45},0).wait(1).to({y:21.15},0).wait(1).to({y:-1.15},0).wait(1).to({y:-23.4},0).wait(1).to({y:-45.7},0).wait(1).to({y:-68},0).wait(1).to({y:-90.3},0).wait(1).to({y:-112.6},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_cloud_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cloud_8
	this.instance = new lib.cloud8();
	this.instance.setTransform(1115.6,1438.4,1,1,0,0,0,129.6,40.4);
	this.instance._off = true;

	this.instance_1 = new lib.Symbol5();
	this.instance_1.setTransform(1115.6,1438.4,1,1,0,0,0,129.6,40.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(119).to({_off:false},0).wait(1).to({regX:129.5,x:1115.5,y:1425.4},0).wait(1).to({y:1412.4},0).wait(1).to({y:1399.4},0).wait(1).to({y:1386.4},0).wait(1).to({y:1373.4},0).wait(1).to({y:1360.45},0).wait(1).to({y:1347.45},0).wait(1).to({y:1334.45},0).wait(1).to({y:1321.45},0).wait(1).to({y:1308.45},0).wait(1).to({y:1295.5},0).wait(1).to({y:1282.5},0).wait(1).to({y:1269.5},0).wait(1).to({y:1256.5},0).wait(1).to({y:1243.5},0).wait(1).to({y:1230.55},0).wait(1).to({y:1217.55},0).wait(1).to({y:1204.55},0).wait(1).to({y:1191.55},0).wait(1).to({y:1178.55},0).wait(1).to({y:1165.6},0).wait(1).to({y:1152.6},0).wait(1).to({y:1139.6},0).wait(1).to({y:1126.6},0).wait(1).to({y:1113.6},0).wait(1).to({y:1100.65},0).wait(1).to({y:1087.65},0).wait(1).to({y:1074.65},0).wait(1).to({y:1061.65},0).wait(1).to({y:1048.65},0).wait(1).to({y:1035.7},0).wait(1).to({y:1022.7},0).wait(1).to({y:1009.7},0).wait(1).to({y:996.7},0).wait(1).to({y:983.7},0).wait(1).to({y:970.75},0).wait(1).to({y:957.75},0).wait(1).to({y:944.75},0).wait(1).to({y:931.75},0).wait(1).to({y:918.75},0).wait(1).to({y:905.75},0).wait(1).to({y:892.8},0).wait(1).to({y:879.8},0).wait(1).to({y:866.8},0).wait(1).to({y:853.8},0).wait(1).to({y:840.8},0).wait(1).to({y:827.85},0).wait(1).to({y:814.85},0).wait(1).to({y:801.85},0).wait(1).to({y:788.85},0).wait(1).to({y:775.85},0).wait(1).to({y:762.9},0).wait(1).to({y:749.9},0).wait(1).to({y:736.9},0).wait(1).to({y:723.9},0).wait(1).to({y:710.9},0).wait(1).to({y:697.95},0).wait(1).to({y:684.95},0).wait(1).to({y:671.95},0).wait(1).to({y:658.95},0).wait(1).to({y:645.95},0).wait(1).to({y:633},0).wait(1).to({y:620},0).wait(1).to({y:607},0).wait(1).to({y:594},0).wait(1).to({y:581},0).wait(1).to({y:568.05},0).wait(1).to({y:555.05},0).wait(1).to({y:542.05},0).wait(1).to({y:529.05},0).wait(1).to({y:516.05},0).wait(1).to({y:503.1},0).wait(1).to({y:490.1},0).wait(1).to({y:477.1},0).wait(1).to({y:464.1},0).wait(1).to({y:451.1},0).wait(1).to({y:438.15},0).wait(1).to({y:425.15},0).wait(1).to({y:412.15},0).wait(1).to({y:399.15},0).wait(1).to({y:386.15},0).wait(1).to({y:373.15},0).wait(1).to({y:360.2},0).wait(1).to({y:347.2},0).wait(1).to({y:334.2},0).wait(1).to({y:321.2},0).wait(1).to({y:308.2},0).wait(1).to({y:295.25},0).wait(1).to({y:282.25},0).wait(1).to({y:269.25},0).wait(1).to({y:256.25},0).wait(1).to({y:243.25},0).wait(1).to({y:230.3},0).wait(1).to({y:217.3},0).wait(1).to({y:204.3},0).wait(1).to({y:191.3},0).wait(1).to({y:178.3},0).wait(1).to({y:165.35},0).wait(1).to({y:152.35},0).wait(1).to({y:139.35},0).wait(1).to({y:126.35},0).wait(1).to({y:113.35},0).wait(1).to({y:100.4},0).wait(1).to({y:87.4},0).wait(1).to({y:74.4},0).wait(1).to({y:61.4},0).wait(1).to({y:48.4},0).wait(1).to({y:35.5},0).wait(1).to({y:22.5},0).wait(1).to({y:9.5},0).wait(1).to({y:-3.5},0).wait(1).to({y:-16.5},0).wait(1).to({y:-29.45},0).wait(1).to({y:-42.45},0).wait(1).to({y:-55.45},0).wait(1).to({y:-68.45},0).wait(1).to({y:-81.45},0).to({_off:true},1).wait(107));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(237).to({_off:false},0).wait(1).to({regX:129.5,x:1115.1,y:1429.3},0).wait(1).to({x:1114.7,y:1420.2},0).wait(1).to({x:1114.3,y:1411.1},0).wait(1).to({x:1113.95,y:1402},0).wait(1).to({x:1113.55,y:1392.9},0).wait(1).to({x:1113.15,y:1383.8},0).wait(1).to({x:1112.8,y:1374.7},0).wait(1).to({x:1112.4,y:1365.65},0).wait(1).to({x:1112,y:1356.55},0).wait(1).to({x:1111.65,y:1347.45},0).wait(1).to({x:1111.25,y:1338.35},0).wait(1).to({x:1110.85,y:1329.25},0).wait(1).to({x:1110.5,y:1320.15},0).wait(1).to({x:1110.1,y:1311.05},0).wait(1).to({x:1109.7,y:1302},0).wait(1).to({x:1109.35,y:1292.9},0).wait(1).to({x:1108.95,y:1283.8},0).wait(1).to({x:1108.55,y:1274.7},0).wait(1).to({x:1108.15,y:1265.6},0).wait(1).to({x:1107.8,y:1256.5},0).wait(1).to({x:1107.4,y:1247.4},0).wait(1).to({x:1107,y:1238.35},0).wait(1).to({x:1106.65,y:1229.25},0).wait(1).to({x:1106.25,y:1220.15},0).wait(1).to({x:1105.85,y:1211.05},0).wait(1).to({x:1105.5,y:1201.95},0).wait(1).to({x:1105.1,y:1192.85},0).wait(1).to({x:1104.7,y:1183.75},0).wait(1).to({x:1104.35,y:1174.7},0).wait(1).to({x:1103.95,y:1165.6},0).wait(1).to({x:1103.55,y:1156.5},0).wait(1).to({x:1103.2,y:1147.4},0).wait(1).to({x:1102.8,y:1138.3},0).wait(1).to({x:1102.4,y:1129.2},0).wait(1).to({x:1102,y:1120.1},0).wait(1).to({x:1101.65,y:1111.05},0).wait(1).to({x:1101.25,y:1101.95},0).wait(1).to({x:1100.85,y:1092.85},0).wait(1).to({x:1100.5,y:1083.75},0).wait(1).to({x:1100.1,y:1074.65},0).wait(1).to({x:1099.7,y:1065.55},0).wait(1).to({x:1099.35,y:1056.45},0).wait(1).to({x:1098.95,y:1047.4},0).wait(1).to({x:1098.55,y:1038.3},0).wait(1).to({x:1098.2,y:1029.2},0).wait(1).to({x:1097.8,y:1020.1},0).wait(1).to({x:1097.4,y:1011},0).wait(1).to({x:1097.05,y:1001.9},0).wait(1).to({x:1096.65,y:992.8},0).wait(1).to({x:1096.25,y:983.75},0).wait(1).to({x:1095.85,y:974.65},0).wait(1).to({x:1095.5,y:965.55},0).wait(1).to({x:1095.1,y:956.45},0).wait(1).to({x:1094.7,y:947.35},0).wait(1).to({x:1094.35,y:938.25},0).wait(1).to({x:1093.95,y:929.15},0).wait(1).to({x:1093.55,y:920.1},0).wait(1).to({x:1093.2,y:911},0).wait(1).to({x:1092.8,y:901.9},0).wait(1).to({x:1092.4,y:892.8},0).wait(1).to({x:1092.05,y:883.7},0).wait(1).to({x:1091.65,y:874.6},0).wait(1).to({x:1091.25,y:865.5},0).wait(1).to({x:1090.9,y:856.45},0).wait(1).to({x:1090.4,y:834},0).wait(1).to({x:1089.95,y:811.55},0).wait(1).to({x:1089.5,y:789.1},0).wait(1).to({x:1089.05,y:766.65},0).wait(1).to({x:1088.55,y:744.2},0).wait(1).to({x:1088.1,y:721.8},0).wait(1).to({x:1087.65,y:699.35},0).wait(1).to({x:1087.2,y:676.9},0).wait(1).to({x:1086.7,y:654.45},0).wait(1).to({x:1086.25,y:632},0).wait(1).to({x:1085.8,y:609.55},0).wait(1).to({x:1085.35,y:587.15},0).wait(1).to({x:1084.85,y:564.7},0).wait(1).to({x:1084.4,y:542.25},0).wait(1).to({x:1083.95,y:519.8},0).wait(1).to({x:1083.5,y:497.35},0).wait(1).to({x:1083,y:474.9},0).wait(1).to({x:1082.55,y:452.5},0).wait(1).to({x:1082.1,y:430.05},0).wait(1).to({x:1081.65,y:407.6},0).wait(1).to({x:1081.2,y:385.15},0).wait(1).to({x:1080.7,y:362.7},0).wait(1).to({x:1080.25,y:340.25},0).wait(1).to({x:1079.8,y:317.85},0).wait(1).to({x:1079.35,y:295.4},0).wait(1).to({x:1078.85,y:272.95},0).wait(1).to({x:1078.4,y:250.5},0).wait(1).to({x:1077.95,y:228.05},0).wait(1).to({x:1077.5,y:205.6},0).wait(1).to({x:1077,y:183.2},0).wait(1).to({x:1076.55,y:160.75},0).wait(1).to({x:1076.1,y:138.3},0).wait(1).to({x:1075.65,y:115.85},0).wait(1).to({x:1075.15,y:93.4},0).wait(1).to({x:1074.7,y:70.95},0).wait(1).to({x:1074.25,y:48.55},0).wait(1).to({x:1073.8,y:26.15},0).wait(1).to({x:1073.3,y:3.7},0).wait(1).to({x:1072.85,y:-18.75},0).wait(1).to({x:1072.4,y:-41.2},0).wait(1).to({x:1071.95,y:-63.65},0).wait(1).to({x:1071.5,y:-86.1},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_cloud_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cloud_7
	this.instance = new lib.cloud7();
	this.instance.setTransform(78.25,1644.35,1,1,0,0,0,129.6,40.4);
	this.instance._off = true;

	this.instance_1 = new lib.Group_2_1();
	this.instance_1.setTransform(278,1109,0.3824,0.3518);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},173).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},49).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(173).to({_off:false},0).wait(1).to({regX:129.5,x:78.15,y:1642.4},0).wait(1).to({y:1640.45},0).wait(1).to({y:1638.5},0).wait(1).to({y:1636.6},0).wait(1).to({y:1634.65},0).wait(1).to({y:1632.7},0).wait(1).to({x:78.1,y:1630.8},0).wait(1).to({y:1628.85},0).wait(1).to({y:1626.9},0).wait(1).to({y:1625},0).wait(1).to({y:1623.05},0).wait(1).to({y:1621.1},0).wait(1).to({x:78.05,y:1619.15},0).wait(1).to({y:1617.25},0).wait(1).to({y:1615.3},0).wait(1).to({y:1613.35},0).wait(1).to({y:1611.45},0).wait(1).to({y:1609.5},0).wait(1).to({y:1607.55},0).wait(1).to({x:78,y:1605.65},0).wait(1).to({y:1603.7},0).wait(1).to({y:1601.75},0).wait(1).to({y:1599.8},0).wait(1).to({y:1597.9},0).wait(1).to({y:1595.95},0).wait(1).to({x:77.95,y:1594},0).wait(1).to({y:1592.1},0).wait(1).to({y:1590.15},0).wait(1).to({y:1588.2},0).wait(1).to({y:1586.3},0).wait(1).to({y:1584.35},0).wait(1).to({x:77.9,y:1582.4},0).wait(1).to({y:1580.45},0).wait(1).to({y:1578.55},0).wait(1).to({y:1576.6},0).wait(1).to({y:1574.65},0).wait(1).to({y:1572.75},0).wait(1).to({y:1570.8},0).wait(1).to({x:77.85,y:1568.85},0).wait(1).to({y:1566.95},0).wait(1).to({y:1565},0).wait(1).to({y:1563.05},0).wait(1).to({y:1561.15},0).wait(1).to({y:1559.2},0).wait(1).to({x:77.8,y:1557.25},0).wait(1).to({y:1555.3},0).wait(1).to({y:1553.4},0).wait(1).to({y:1551.45},0).wait(1).to({y:1549.5},0).wait(1).to({y:1547.6},0).wait(1).to({x:77.75,y:1545.65},0).wait(1).to({y:1543.7},0).wait(1).to({y:1541.8},0).wait(1).to({y:1539.85},0).wait(1).to({y:1537.9},0).wait(1).to({y:1535.95},0).wait(1).to({y:1534.05},0).wait(1).to({x:77.7,y:1532.1},0).wait(1).to({y:1530.15},0).wait(1).to({y:1528.25},0).wait(1).to({y:1526.3},0).wait(1).to({y:1524.35},0).wait(1).to({y:1522.45},0).wait(1).to({x:77.65,y:1520.5},0).wait(1).to({y:1518.55},0).wait(1).to({y:1516.6},0).wait(1).to({y:1514.7},0).wait(1).to({y:1512.75},0).wait(1).to({y:1510.8},0).wait(1).to({y:1508.9},0).wait(1).to({x:77.6,y:1506.95},0).wait(1).to({y:1505},0).to({_off:true},1).wait(49).to({_off:false,regX:129.6,x:818.5,y:801.55},0).wait(1).to({regX:129.5,x:818.1,y:780.9},0).wait(1).to({x:817.85,y:760.3},0).wait(1).to({x:817.6,y:739.7},0).wait(1).to({x:817.35,y:719.1},0).wait(1).to({x:817.05,y:698.45},0).wait(1).to({x:816.8,y:677.85},0).wait(1).to({x:816.55,y:657.25},0).wait(1).to({x:816.3,y:636.65},0).wait(1).to({x:816,y:616},0).wait(1).to({x:815.75,y:595.4},0).wait(1).to({x:815.5,y:574.8},0).wait(1).to({x:815.25,y:554.2},0).wait(1).to({x:814.95,y:533.6},0).wait(1).to({x:814.7,y:512.95},0).wait(1).to({x:814.45,y:492.35},0).wait(1).to({x:814.2,y:471.75},0).wait(1).to({x:813.9,y:451.15},0).wait(1).to({x:813.65,y:430.5},0).wait(1).to({x:813.4,y:409.9},0).wait(1).to({x:813.15,y:389.3},0).wait(1).to({x:812.85,y:368.7},0).wait(1).to({x:812.6,y:348.1},0).wait(1).to({x:812.35,y:327.45},0).wait(1).to({x:812.1,y:306.85},0).wait(1).to({x:811.8,y:286.25},0).wait(1).to({x:811.55,y:265.65},0).wait(1).to({x:811.3,y:245},0).wait(1).to({x:811.05,y:224.4},0).wait(1).to({x:810.75,y:203.8},0).wait(1).to({x:810.5,y:183.2},0).wait(1).to({x:810.25,y:162.6},0).wait(1).to({x:810,y:141.95},0).wait(1).to({x:809.7,y:121.35},0).wait(1).to({x:809.45,y:100.75},0).wait(1).to({x:809.2,y:80.15},0).wait(1).to({x:808.95,y:59.5},0).wait(1).to({x:808.65,y:38.95},0).wait(1).to({x:808.4,y:18.35},0).wait(1).to({x:808.15,y:-2.25},0).wait(1).to({x:807.9,y:-22.9},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_cloud_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cloud_5
	this.instance = new lib.cloud5();
	this.instance.setTransform(85.2,1501.5,1,1,0,0,0,228.2,77.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(117).to({_off:false},0).wait(1).to({regX:228.1,x:84.9,y:1489.1},0).wait(1).to({x:84.65,y:1476.7},0).wait(1).to({x:84.4,y:1464.3},0).wait(1).to({x:84.15,y:1451.9},0).wait(1).to({x:83.9,y:1439.5},0).wait(1).to({x:83.65,y:1427.15},0).wait(1).to({x:83.4,y:1414.75},0).wait(1).to({x:83.15,y:1402.35},0).wait(1).to({x:82.9,y:1389.95},0).wait(1).to({x:82.65,y:1377.55},0).wait(1).to({x:82.4,y:1365.15},0).wait(1).to({x:82.2,y:1352.8},0).wait(1).to({x:81.95,y:1340.4},0).wait(1).to({x:81.7,y:1328},0).wait(1).to({x:81.45,y:1315.6},0).wait(1).to({x:81.2,y:1303.2},0).wait(1).to({x:80.95,y:1290.8},0).wait(1).to({x:80.7,y:1278.45},0).wait(1).to({x:80.45,y:1266.05},0).wait(1).to({x:80.2,y:1253.65},0).wait(1).to({x:79.95,y:1241.25},0).wait(1).to({x:79.7,y:1228.85},0).wait(1).to({x:79.45,y:1216.5},0).wait(1).to({x:79.25,y:1204.1},0).wait(1).to({x:79,y:1191.7},0).wait(1).to({x:78.75,y:1179.3},0).wait(1).to({x:78.5,y:1166.9},0).wait(1).to({x:78.25,y:1154.5},0).wait(1).to({x:78,y:1142.15},0).wait(1).to({x:77.75,y:1129.75},0).wait(1).to({x:77.5,y:1117.35},0).wait(1).to({x:77.25,y:1104.95},0).wait(1).to({x:77,y:1092.55},0).wait(1).to({x:76.75,y:1080.15},0).wait(1).to({x:76.5,y:1067.8},0).wait(1).to({x:76.3,y:1055.4},0).wait(1).to({x:76.05,y:1043},0).wait(1).to({x:75.8,y:1030.6},0).wait(1).to({x:75.55,y:1018.2},0).wait(1).to({x:75.3,y:1005.85},0).wait(1).to({x:75.05,y:993.45},0).wait(1).to({x:74.8,y:981.05},0).wait(1).to({x:74.55,y:968.65},0).wait(1).to({x:74.3,y:956.25},0).wait(1).to({x:74.05,y:943.85},0).wait(1).to({x:73.8,y:931.5},0).wait(1).to({x:73.55,y:919.1},0).wait(1).to({x:73.35,y:906.7},0).wait(1).to({x:73.1,y:894.3},0).wait(1).to({x:72.85,y:881.9},0).wait(1).to({x:72.6,y:869.5},0).wait(1).to({x:72.35,y:857.15},0).wait(1).to({x:72.1,y:844.75},0).wait(1).to({x:71.85,y:832.35},0).wait(1).to({x:71.6,y:819.95},0).wait(1).to({x:71.35,y:807.55},0).wait(1).to({x:71.1,y:795.2},0).wait(1).to({x:70.85,y:782.8},0).wait(1).to({x:70.6,y:770.4},0).wait(1).to({x:70.4,y:758},0).wait(1).to({x:70.15,y:745.6},0).wait(1).to({x:69.9,y:733.2},0).wait(1).to({x:69.65,y:720.85},0).wait(1).to({x:69.4,y:708.45},0).wait(1).to({x:69.15,y:696.05},0).wait(1).to({x:68.9,y:683.65},0).wait(1).to({x:68.65,y:671.25},0).wait(1).to({x:68.4,y:658.85},0).wait(1).to({x:68.15,y:646.5},0).wait(1).to({x:67.9,y:634.1},0).wait(1).to({x:67.65,y:621.7},0).wait(1).to({x:67.45,y:609.3},0).wait(1).to({x:67.2,y:596.9},0).wait(1).to({x:66.95,y:584.5},0).wait(1).to({x:66.7,y:572.15},0).wait(1).to({x:66.45,y:559.75},0).wait(1).to({x:66.2,y:547.35},0).wait(1).to({x:65.95,y:534.95},0).wait(1).to({x:65.7,y:522.55},0).wait(1).to({x:65.45,y:510.2},0).wait(1).to({x:65.2,y:497.8},0).wait(1).to({x:64.95,y:485.4},0).wait(1).to({x:64.7,y:473},0).wait(1).to({x:64.5,y:460.6},0).wait(1).to({x:64.25,y:448.2},0).wait(1).to({x:64,y:435.85},0).wait(1).to({x:63.75,y:423.45},0).wait(1).to({x:63.5,y:411.05},0).wait(1).to({x:63.25,y:398.65},0).wait(1).to({x:63,y:386.25},0).wait(1).to({x:62.75,y:373.85},0).wait(1).to({x:62.5,y:361.5},0).wait(1).to({x:62.25,y:349.1},0).wait(1).to({x:62,y:336.7},0).wait(1).to({x:61.75,y:324.3},0).wait(1).to({x:61.55,y:311.9},0).wait(1).to({x:61.3,y:299.55},0).wait(1).to({x:61.05,y:287.15},0).wait(1).to({x:60.8,y:274.75},0).wait(1).to({x:60.55,y:262.35},0).wait(1).to({x:60.3,y:249.95},0).wait(1).to({x:60.05,y:237.55},0).wait(1).to({x:59.8,y:225.2},0).wait(1).to({x:59.55,y:212.8},0).wait(1).to({x:59.3,y:200.4},0).wait(1).to({x:59.05,y:188},0).wait(1).to({x:58.8,y:175.6},0).wait(1).to({x:58.6,y:163.2},0).wait(1).to({x:58.35,y:150.85},0).wait(1).to({x:58.1,y:138.45},0).wait(1).to({x:57.85,y:126.05},0).wait(1).to({x:57.6,y:113.65},0).wait(1).to({x:57.35,y:101.25},0).wait(1).to({x:57.1,y:88.9},0).wait(1).to({x:56.85,y:76.55},0).wait(1).to({x:56.6,y:64.15},0).wait(1).to({x:56.35,y:51.75},0).wait(1).to({x:56.1,y:39.35},0).wait(1).to({x:55.85,y:26.95},0).wait(1).to({x:55.65,y:14.6},0).wait(1).to({x:55.4,y:2.2},0).wait(1).to({x:55.15,y:-10.2},0).wait(1).to({x:54.9,y:-22.6},0).wait(1).to({x:54.65,y:-35},0).wait(1).to({x:54.4,y:-47.4},0).wait(1).to({x:54.15,y:-59.75},0).wait(1).to({x:53.9,y:-72.15},0).wait(1).to({x:53.65,y:-84.55},0).wait(1).to({x:53.4,y:-96.95},0).wait(1).to({x:53.15,y:-109.35},0).wait(1).to({x:52.9,y:-121.75},0).wait(1).to({regX:0,regY:0,x:415.55,y:2580.9},0).wait(1).to({regX:228.1,regY:77.5,scaleY:1.0085,x:643.95,y:2607.6},0).wait(1).to({scaleY:1.0169,x:644.25,y:2556.8},0).wait(1).to({scaleY:1.0254,x:644.55,y:2506},0).wait(1).to({scaleY:1.0338,x:644.85,y:2455.25},0).wait(1).to({scaleY:1.0423,x:645.15,y:2404.5},0).wait(1).to({scaleY:1.0508,x:645.45,y:2353.7},0).wait(1).to({scaleY:1.0592,x:645.75,y:2302.9},0).wait(1).to({scaleY:1.0677,x:646.05,y:2252.15},0).wait(1).to({scaleY:1.0762,x:646.35,y:2201.35},0).wait(1).to({scaleY:1.0846,x:646.7,y:2150.55},0).wait(1).to({scaleY:1.0931,x:647,y:2099.75},0).wait(1).to({scaleY:1.1015,x:647.3,y:2049},0).wait(1).to({scaleY:1.11,x:647.6,y:1998.25},0).wait(1).to({scaleY:1.1185,x:647.9,y:1947.45},0).wait(1).to({scaleY:1.1269,x:648.2,y:1896.7},0).wait(1).to({scaleY:1.1354,x:648.5,y:1845.9},0).wait(1).to({scaleY:1.1439,x:648.8,y:1795.1},0).wait(1).to({scaleY:1.1523,x:649.1,y:1744.3},0).wait(1).to({scaleY:1.1608,x:649.45,y:1693.55},0).wait(1).to({scaleY:1.1692,x:649.75,y:1642.75},0).wait(1).to({scaleY:1.1777,x:650.05,y:1591.95},0).wait(1).to({scaleY:1.1862,x:650.35,y:1541.2},0).wait(1).to({scaleY:1.1946,x:650.65,y:1490.45},0).wait(1).to({scaleY:1.2031,x:650.95,y:1439.65},0).wait(1).to({scaleY:1.2116,x:651.25,y:1388.85},0).wait(1).to({scaleY:1.22,x:651.55,y:1338.05},0).wait(1).to({scaleY:1.2285,x:651.85,y:1287.3},0).wait(1).to({scaleY:1.2369,x:652.2,y:1236.5},0).wait(1).to({scaleY:1.2454,x:652.5,y:1185.7},0).wait(1).to({scaleY:1.2539,x:652.8,y:1134.95},0).wait(1).to({scaleY:1.2623,x:653.1,y:1084.2},0).wait(1).to({scaleY:1.2708,x:653.4,y:1033.4},0).wait(1).to({scaleY:1.2793,x:653.7,y:982.6},0).wait(1).to({scaleY:1.2877,x:654,y:931.85},0).wait(1).to({scaleY:1.2962,x:654.3,y:881.05},0).wait(1).to({scaleY:1.3046,x:654.6,y:830.25},0).wait(1).to({scaleY:1.3131,x:654.95,y:779.45},0).wait(1).to({scaleY:1.3216,x:655.25,y:728.7},0).wait(1).to({scaleY:1.33,x:655.55,y:677.95},0).wait(1).to({scaleY:1.3385,x:655.85,y:627.15},0).wait(1).to({scaleY:1.347,x:656.15,y:576.35},0).wait(1).to({scaleY:1.3554,x:656.45,y:525.6},0).wait(1).to({scaleY:1.3639,x:656.75,y:474.8},0).wait(1).to({x:657.05,y:423.35},0).wait(1).to({x:657.35,y:371.95},0).wait(1).to({x:657.7,y:320.5},0).wait(1).to({x:658,y:269.05},0).wait(1).to({x:658.3,y:217.6},0).wait(1).to({x:658.6,y:166.2},0).wait(1).to({x:658.9,y:114.75},0).wait(1).to({x:659.2,y:63.35},0).wait(1).to({x:659.5,y:11.9},0).wait(1).to({x:659.8,y:-39.5},0).wait(1).to({x:660.1,y:-90.95},0).wait(1).to({x:660.45,y:-142.4},0).wait(1).to({x:660.75,y:-193.85},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_buttons = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// buttons
	this.start_btn = new lib.startB();
	this.start_btn.name = "start_btn";
	this.start_btn.setTransform(427.3,251.35);
	new cjs.ButtonHelper(this.start_btn, 0, 1, 2, false, new lib.startB(), 3);

	this.replay_btn = new lib.replay();
	this.replay_btn.name = "replay_btn";
	this.replay_btn.setTransform(429.5,332.2);
	new cjs.ButtonHelper(this.replay_btn, 0, 1, 2, false, new lib.replay(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.start_btn}]}).to({state:[]},2).to({state:[{t:this.replay_btn}]},606).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.RECOVER_בואונצנח = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.actionFrames = [0,2,5,608,613];
	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.numChildren - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		this.clearAllSoundStreams();
		 
		this.start_btn = this.buttons.start_btn;
		var self=this;
		self.stop();
		self.start_btn.addEventListener("click",startPlaying);
		
		function startPlaying () {
			self.gotoAndPlay(1);
		}
	}
	this.frame_2 = function() {
		this.start_btn = undefined;
	}
	this.frame_5 = function() {
		playSound("music");
	}
	this.frame_608 = function() {
		this.replay_btn = this.buttons.replay_btn;
		var self=this;
		self.stop();
		self.replay_btn.addEventListener("click",playAgain);
		
		function playAgain()
		{
			self.gotoAndPlay(1);
		}
	}
	this.frame_613 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(3).call(this.frame_5).wait(603).call(this.frame_608).wait(5).call(this.frame_613).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.setTransform(640,360,0.9962,0.9962);
	this.___camera___instance.depth = 0;
	this.___camera___instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(1).to({scaleX:0.9767,scaleY:0.9767,x:647.577,y:352.9211},0).wait(1).to({scaleX:0.9572,scaleY:0.9572,x:655.1539,y:345.8423},0).wait(1).to({scaleX:0.9377,scaleY:0.9377,x:662.7309,y:338.7634},0).wait(1).to({scaleX:0.9183,scaleY:0.9183,x:670.3078,y:331.6846},0).wait(1).to({scaleX:0.8988,scaleY:0.8988,x:677.8848,y:324.6057},0).wait(1).to({scaleX:0.8793,scaleY:0.8793,x:685.4617,y:317.5269},0).wait(1).to({scaleX:0.8598,scaleY:0.8598,x:693.0387,y:310.448},0).wait(1).to({scaleX:0.8403,scaleY:0.8403,x:700.6156,y:303.3691},0).wait(1).to({scaleX:0.8208,scaleY:0.8208,x:708.1926,y:296.2903},0).wait(1).to({scaleX:0.8013,scaleY:0.8013,x:715.7695,y:289.2114},0).wait(1).to({scaleX:0.7818,scaleY:0.7818,x:723.3465,y:282.1326},0).wait(1).to({scaleX:0.7623,scaleY:0.7623,x:730.9234,y:275.0537},0).wait(1).to({scaleX:0.7429,scaleY:0.7429,x:738.5004,y:267.9749},0).wait(1).to({scaleX:0.7234,scaleY:0.7234,x:746.0773,y:260.896},0).wait(1).to({scaleX:0.7039,scaleY:0.7039,x:753.6543,y:253.8171},0).wait(1).to({scaleX:0.6844,scaleY:0.6844,x:761.2312,y:246.7383},0).wait(1).to({scaleX:0.6649,scaleY:0.6649,x:768.8082,y:239.6594},0).wait(1).to({scaleX:0.6454,scaleY:0.6454,x:776.3851,y:232.5806},0).wait(1).to({scaleX:0.6259,scaleY:0.6259,x:783.9621,y:225.5017},0).wait(1).to({scaleX:0.6064,scaleY:0.6064,x:791.5391,y:218.4229},0).wait(1).to({scaleX:0.5869,scaleY:0.5869,x:799.116,y:211.344},0).wait(1).to({scaleX:0.5865,scaleY:0.5865,x:784.4916,y:210.7593},0).wait(1).to({scaleX:0.5861,scaleY:0.5861,x:769.8672,y:210.1747},0).wait(1).to({scaleX:0.5857,scaleY:0.5857,x:755.2428,y:209.59},0).wait(1).to({scaleX:0.5853,scaleY:0.5853,x:740.6184,y:209.0053},0).wait(1).to({scaleX:0.5849,scaleY:0.5849,x:725.9941,y:208.4207},0).wait(1).to({scaleX:0.5845,scaleY:0.5845,x:711.3697,y:207.836},0).wait(1).to({scaleX:0.584,scaleY:0.584,x:696.7453,y:207.2513},0).wait(1).to({scaleX:0.5836,scaleY:0.5836,x:682.1209,y:206.6667},0).wait(1).to({scaleX:0.5832,scaleY:0.5832,x:667.4965,y:206.082},0).wait(1).to({scaleX:0.5843,scaleY:0.5843,x:661.0004,y:208.2854},0).wait(1).to({scaleX:0.5853,scaleY:0.5853,x:654.5043,y:210.4888},0).wait(1).to({scaleX:0.5864,scaleY:0.5864,x:648.0081,y:212.6921},0).wait(1).to({scaleX:0.5875,scaleY:0.5875,x:641.512,y:214.8955},0).wait(1).to({scaleX:0.5885,scaleY:0.5885,x:635.0159,y:217.0989},0).wait(1).to({scaleX:0.5896,scaleY:0.5896,x:628.5198,y:219.3023},0).wait(1).to({scaleX:0.5907,scaleY:0.5907,x:622.0236,y:221.5056},0).wait(1).to({scaleX:0.5917,scaleY:0.5917,x:615.5275,y:223.709},0).wait(1).to({scaleX:0.5928,scaleY:0.5928,x:616.8457,y:225.4749},0).wait(1).to({scaleX:0.5939,scaleY:0.5939,x:618.1639,y:227.2409},0).wait(1).to({scaleX:0.5949,scaleY:0.5949,x:619.4822,y:229.0068},0).wait(1).to({scaleX:0.596,scaleY:0.596,x:620.8004,y:230.7728},0).wait(1).to({scaleX:0.5971,scaleY:0.5971,x:622.1186,y:232.5387},0).wait(1).to({scaleX:0.5982,scaleY:0.5982,x:623.4368,y:234.3047},0).wait(1).to({scaleX:0.5992,scaleY:0.5992,x:624.755,y:236.0706},0).wait(1).to({scaleX:0.6003,scaleY:0.6003,x:626.0732,y:237.8365},0).wait(1).to({scaleX:0.6014,scaleY:0.6014,x:627.3915,y:239.6025},0).wait(1).to({scaleX:0.6024,scaleY:0.6024,x:628.7097,y:241.3684},0).wait(1).to({scaleX:0.6035,scaleY:0.6035,x:630.0279,y:243.1344},0).wait(1).to({scaleX:0.6046,scaleY:0.6046,x:631.3461,y:244.9003},0).wait(1).to({scaleX:0.6056,scaleY:0.6056,x:632.6643,y:246.6662},0).wait(1).to({scaleX:0.6067,scaleY:0.6067,x:633.9825,y:248.4322},0).wait(1).to({scaleX:0.6078,scaleY:0.6078,x:635.3008,y:250.1981},0).wait(1).to({scaleX:0.6088,scaleY:0.6088,x:636.619,y:251.9641},0).wait(1).to({scaleX:0.6099,scaleY:0.6099,x:637.9372,y:253.73},0).wait(1).to({scaleX:0.6102,scaleY:0.6102,x:638.4113,y:263.8581},0).wait(1).to({scaleX:0.6104,scaleY:0.6104,x:638.8854,y:273.9863},0).wait(1).to({scaleX:0.6107,scaleY:0.6107,x:639.3595,y:284.1144},0).wait(1).to({scaleX:0.6109,scaleY:0.6109,x:639.8336,y:294.2425},0).wait(1).to({scaleX:0.6112,scaleY:0.6112,x:640.3078,y:304.3707},0).wait(1).to({scaleX:0.6115,scaleY:0.6115,x:640.7819,y:314.4988},0).wait(1).to({scaleX:0.6117,scaleY:0.6117,x:641.256,y:324.6269},0).wait(1).to({scaleX:0.612,scaleY:0.612,x:641.7301,y:334.755},0).wait(1).to({scaleX:0.6122,scaleY:0.6122,x:642.2042,y:344.8832},0).wait(1).to({scaleX:0.6125,scaleY:0.6125,x:642.6783,y:355.0113},0).wait(1).to({scaleX:0.6128,scaleY:0.6128,x:643.1524,y:365.1394},0).wait(1).to({scaleX:0.613,scaleY:0.613,x:643.6265,y:375.2676},0).wait(1).to({scaleX:0.6133,scaleY:0.6133,x:644.1007,y:385.3957},0).wait(1).to({scaleX:0.6136,scaleY:0.6136,x:644.5748,y:395.5238},0).wait(1).to({scaleX:0.6138,scaleY:0.6138,x:645.0489,y:405.652},0).wait(1).to({scaleX:0.6141,scaleY:0.6141,x:645.523,y:415.7801},0).wait(1).to({scaleX:0.6143,scaleY:0.6143,x:645.9971,y:425.9082},0).wait(1).to({scaleX:0.6146,scaleY:0.6146,x:646.4712,y:436.0364},0).wait(1).to({scaleX:0.6149,scaleY:0.6149,x:646.9453,y:446.1645},0).wait(1).to({scaleX:0.6151,scaleY:0.6151,x:647.4194,y:456.2926},0).wait(1).to({scaleX:0.6154,scaleY:0.6154,x:647.8936,y:466.4207},0).wait(1).to({scaleX:0.6156,scaleY:0.6156,x:648.3677,y:476.5489},0).wait(1).to({scaleX:0.6159,scaleY:0.6159,x:648.8418,y:486.677},0).wait(1).to({scaleX:0.6162,scaleY:0.6162,x:648.5944,y:486.9025},0).wait(1).to({scaleX:0.6164,scaleY:0.6164,x:648.3471,y:487.128},0).wait(1).to({scaleX:0.6167,scaleY:0.6167,x:648.0997,y:487.3536},0).wait(1).to({scaleX:0.617,scaleY:0.617,x:647.8523,y:487.5791},0).wait(1).to({scaleX:0.6172,scaleY:0.6172,x:647.605,y:487.8046},0).wait(1).to({scaleX:0.6175,scaleY:0.6175,x:647.3576,y:488.0301},0).wait(1).to({scaleX:0.6177,scaleY:0.6177,x:647.1103,y:488.2556},0).wait(1).to({scaleX:0.618,scaleY:0.618,x:646.8629,y:488.4811},0).wait(1).to({scaleX:0.6183,scaleY:0.6183,x:646.6155,y:488.7066},0).wait(1).to({scaleX:0.6185,scaleY:0.6185,x:646.3682,y:488.9322},0).wait(1).to({scaleX:0.6188,scaleY:0.6188,x:646.1208,y:489.1577},0).wait(1).to({scaleX:0.619,scaleY:0.619,x:645.8735,y:489.3832},0).wait(1).to({scaleX:0.6193,scaleY:0.6193,x:645.6261,y:489.6087},0).wait(1).to({scaleX:0.6196,scaleY:0.6196,x:645.3787,y:489.8342},0).wait(1).to({scaleX:0.6198,scaleY:0.6198,x:645.1314,y:490.0597},0).wait(1).to({scaleX:0.6201,scaleY:0.6201,x:644.884,y:490.2852},0).wait(1).to({scaleX:0.6204,scaleY:0.6204,x:644.6367,y:490.5108},0).wait(1).to({scaleX:0.6206,scaleY:0.6206,x:644.3893,y:490.7363},0).wait(1).to({scaleX:0.6209,scaleY:0.6209,x:644.1419,y:490.9618},0).wait(1).to({scaleX:0.6211,scaleY:0.6211,x:643.8946,y:491.1873},0).wait(1).to({scaleX:0.6214,scaleY:0.6214,x:643.6472,y:491.4128},0).wait(1).to({scaleX:0.6217,scaleY:0.6217,x:643.3999,y:491.6383},0).wait(1).to({scaleX:0.6219,scaleY:0.6219,x:643.1525,y:491.8639},0).wait(1).to({scaleX:0.6222,scaleY:0.6222,x:642.9052,y:492.0894},0).wait(1).to({scaleX:0.6224,scaleY:0.6224,x:642.6578,y:492.3149},0).wait(1).to({scaleX:0.6227,scaleY:0.6227,x:642.4104,y:492.5404},0).wait(1).to({scaleX:0.623,scaleY:0.623,x:642.1631,y:492.7659},0).wait(1).to({scaleX:0.6232,scaleY:0.6232,x:641.9157,y:492.9914},0).wait(1).to({scaleX:0.6235,scaleY:0.6235,x:641.6684,y:493.2169},0).wait(1).to({scaleX:0.6238,scaleY:0.6238,x:641.421,y:493.4425},0).wait(1).to({scaleX:0.624,scaleY:0.624,x:641.1736,y:493.668},0).wait(1).to({scaleX:0.6243,scaleY:0.6243,x:640.9263,y:493.8935},0).wait(1).to({scaleX:0.6245,scaleY:0.6245,x:640.6789,y:494.119},0).wait(1).to({scaleX:0.6213,scaleY:0.6213,x:639.7427,y:495.4606},0).wait(1).to({scaleX:0.6181,scaleY:0.6181,x:638.8065,y:496.8022},0).wait(1).to({scaleX:0.6149,scaleY:0.6149,x:637.8702,y:498.1438},0).wait(1).to({scaleX:0.6117,scaleY:0.6117,x:636.934,y:499.4854},0).wait(1).to({scaleX:0.6085,scaleY:0.6085,x:635.9978,y:500.827},0).wait(1).to({scaleX:0.6083,scaleY:0.6083,x:620.0384,y:221.824},0).wait(1).to({scaleX:0.608,scaleY:0.608,x:620.974,y:223.2155},0).wait(1).to({scaleX:0.6078,scaleY:0.6078,x:621.9095,y:224.6071},0).wait(1).to({scaleX:0.6076,scaleY:0.6076,x:622.8451,y:225.9986},0).wait(1).to({scaleX:0.6074,scaleY:0.6074,x:623.7806,y:227.3901},0).wait(1).to({scaleX:0.6071,scaleY:0.6071,x:624.7162,y:228.7817},0).wait(1).to({scaleX:0.6069,scaleY:0.6069,x:625.6517,y:230.1732},0).wait(1).to({scaleX:0.6067,scaleY:0.6067,x:626.5873,y:231.5647},0).wait(1).to({scaleX:0.6065,scaleY:0.6065,x:627.5229,y:232.9563},0).wait(1).to({scaleX:0.6062,scaleY:0.6062,x:628.4584,y:234.3478},0).wait(1).to({scaleX:0.606,scaleY:0.606,x:629.394,y:235.7393},0).wait(1).to({scaleX:0.6058,scaleY:0.6058,x:630.3295,y:237.1309},0).wait(1).to({scaleX:0.6056,scaleY:0.6056,x:631.2651,y:238.5224},0).wait(1).to({scaleX:0.6053,scaleY:0.6053,x:632.2007,y:239.9139},0).wait(1).to({scaleX:0.6051,scaleY:0.6051,x:633.1362,y:241.3055},0).wait(1).to({scaleX:0.6049,scaleY:0.6049,x:634.0718,y:242.697},0).wait(1).to({scaleX:0.6047,scaleY:0.6047,x:635.0073,y:244.0885},0).wait(1).to({scaleX:0.6044,scaleY:0.6044,x:635.9429,y:245.4801},0).wait(1).to({scaleX:0.6042,scaleY:0.6042,x:636.8784,y:246.8716},0).wait(1).to({scaleX:0.604,scaleY:0.604,x:637.814,y:248.2631},0).wait(1).to({scaleX:0.6038,scaleY:0.6038,x:638.7496,y:249.6547},0).wait(1).to({scaleX:0.6035,scaleY:0.6035,x:639.6851,y:251.0462},0).wait(1).to({scaleX:0.6033,scaleY:0.6033,x:640.6207,y:252.4377},0).wait(1).to({scaleX:0.6031,scaleY:0.6031,x:641.5562,y:253.8293},0).wait(1).to({scaleX:0.6029,scaleY:0.6029,x:642.4918,y:255.2208},0).wait(1).to({scaleX:0.6026,scaleY:0.6026,x:643.4273,y:256.6123},0).wait(1).to({scaleX:0.6024,scaleY:0.6024,x:644.3629,y:258.0039},0).wait(1).to({scaleX:0.6022,scaleY:0.6022,x:645.2985,y:259.3954},0).wait(1).to({scaleX:0.602,scaleY:0.602,x:646.234,y:260.7869},0).wait(1).to({scaleX:0.6017,scaleY:0.6017,x:647.1696,y:262.1785},0).wait(1).to({scaleX:0.6015,scaleY:0.6015,x:648.1051,y:263.57},0).wait(1).to({scaleX:0.6093,scaleY:0.6093,x:647.7589,y:265.6256},0).wait(1).to({scaleX:0.6171,scaleY:0.6171,x:647.4126,y:267.6813},0).wait(1).to({scaleX:0.6249,scaleY:0.6249,x:647.0663,y:269.7369},0).wait(1).to({scaleX:0.6327,scaleY:0.6327,x:646.7201,y:271.7925},0).wait(1).to({scaleX:0.6405,scaleY:0.6405,x:646.3738,y:273.8482},0).wait(1).to({scaleX:0.6483,scaleY:0.6483,x:646.0276,y:275.9038},0).wait(1).to({scaleX:0.6561,scaleY:0.6561,x:645.6813,y:277.9594},0).wait(1).to({scaleX:0.6639,scaleY:0.6639,x:645.335,y:280.015},0).wait(1).to({scaleX:0.6717,scaleY:0.6717,x:644.9888,y:282.0707},0).wait(1).to({scaleX:0.6795,scaleY:0.6795,x:644.6425,y:284.1263},0).wait(1).to({scaleX:0.6873,scaleY:0.6873,x:644.2963,y:286.1819},0).wait(1).to({scaleX:0.6951,scaleY:0.6951,x:643.95,y:288.2376},0).wait(1).to({scaleX:0.7029,scaleY:0.7029,x:643.6038,y:290.2932},0).wait(1).to({scaleX:0.7107,scaleY:0.7107,x:643.2575,y:292.3488},0).wait(1).to({scaleX:0.7185,scaleY:0.7185,x:642.9112,y:294.4045},0).wait(1).to({scaleX:0.7263,scaleY:0.7263,x:642.565,y:296.4601},0).wait(1).to({scaleX:0.7341,scaleY:0.7341,x:642.2187,y:298.5157},0).wait(1).to({scaleX:0.7419,scaleY:0.7419,x:641.8725,y:300.5714},0).wait(1).to({scaleX:0.7497,scaleY:0.7497,x:641.5262,y:302.627},0).wait(1).to({scaleX:0.7575,scaleY:0.7575,x:641.1799,y:304.6826},0).wait(1).to({scaleX:0.7653,scaleY:0.7653,x:640.8337,y:306.7383},0).wait(1).to({scaleX:0.7731,scaleY:0.7731,x:640.4874,y:308.7939},0).wait(1).to({scaleX:0.7809,scaleY:0.7809,x:640.1412,y:310.8495},0).wait(1).to({scaleX:0.7887,scaleY:0.7887,x:639.7949,y:312.9051},0).wait(1).to({scaleX:0.7965,scaleY:0.7965,x:639.4486,y:314.9608},0).wait(1).to({scaleX:0.8043,scaleY:0.8043,x:639.1024,y:317.0164},0).wait(1).to({scaleX:0.8121,scaleY:0.8121,x:638.7561,y:319.072},0).wait(1).to({scaleX:0.8199,scaleY:0.8199,x:638.4099,y:321.1277},0).wait(1).to({scaleX:0.8277,scaleY:0.8277,x:638.0636,y:323.1833},0).wait(1).to({scaleX:0.8355,scaleY:0.8355,x:637.7173,y:325.2389},0).wait(1).to({scaleX:0.8433,scaleY:0.8433,x:637.3711,y:327.2946},0).wait(1).to({scaleX:0.8511,scaleY:0.8511,x:637.0248,y:329.3502},0).wait(1).to({scaleX:0.8589,scaleY:0.8589,x:636.6786,y:331.4058},0).wait(1).to({scaleX:0.8667,scaleY:0.8667,x:636.3323,y:333.4615},0).wait(1).to({scaleX:0.8745,scaleY:0.8745,x:635.986,y:335.5171},0).wait(1).to({scaleX:0.8823,scaleY:0.8823,x:635.6398,y:337.5727},0).wait(1).to({scaleX:0.8901,scaleY:0.8901,x:635.2935,y:339.6284},0).wait(1).to({scaleX:0.8979,scaleY:0.8979,x:634.9473,y:341.684},0).wait(1).to({scaleX:0.9057,scaleY:0.9057,x:634.601,y:343.7396},0).wait(1).to({scaleX:0.9135,scaleY:0.9135,x:634.2547,y:345.7952},0).wait(1).to({scaleX:0.9213,scaleY:0.9213,x:633.9085,y:347.8509},0).wait(1).to({scaleX:0.929,scaleY:0.929,x:633.5622,y:349.9065},0).wait(1).to({scaleX:0.9368,scaleY:0.9368,x:633.216,y:351.9621},0).wait(1).to({scaleX:0.9446,scaleY:0.9446,x:632.8697,y:354.0178},0).wait(1).to({scaleX:0.9524,scaleY:0.9524,x:632.5235,y:356.0734},0).wait(1).to({scaleX:0.9602,scaleY:0.9602,x:632.1772,y:358.129},0).wait(1).to({scaleX:0.968,scaleY:0.968,x:631.8309,y:360.1847},0).wait(1).to({scaleX:0.9758,scaleY:0.9758,x:631.4847,y:362.2403},0).wait(1).to({scaleX:0.9836,scaleY:0.9836,x:631.1384,y:364.2959},0).wait(1).to({scaleX:0.9914,scaleY:0.9914,x:630.7922,y:366.3515},0).wait(1).to({scaleX:0.9915,scaleY:0.9915,x:630.8383,y:366.3033},0).wait(1).to({x:630.8844,y:366.2551},0).wait(1).to({x:630.9305,y:366.2069},0).wait(1).to({scaleX:0.9916,scaleY:0.9916,x:630.9766,y:366.1587},0).wait(1).to({x:631.0227,y:366.1105},0).wait(1).to({x:631.0688,y:366.0623},0).wait(1).to({scaleX:0.9917,scaleY:0.9917,x:631.1149,y:366.0141},0).wait(1).to({x:631.1611,y:365.9659},0).wait(1).to({x:631.2072,y:365.9177},0).wait(1).to({x:631.2533,y:365.8695},0).wait(1).to({scaleX:0.9918,scaleY:0.9918,x:631.2994,y:365.8213},0).wait(1).to({x:631.3455,y:365.7731},0).wait(1).to({x:631.3916,y:365.7249},0).wait(1).to({scaleX:0.9919,scaleY:0.9919,x:631.4377,y:365.6767},0).wait(1).to({x:631.4838,y:365.6285},0).wait(1).to({x:631.53,y:365.5803},0).wait(1).to({scaleX:0.992,scaleY:0.992,x:631.5761,y:365.532},0).wait(1).to({x:631.6222,y:365.4838},0).wait(1).to({x:631.6683,y:365.4356},0).wait(1).to({x:631.7144,y:365.3874},0).wait(1).to({scaleX:0.9921,scaleY:0.9921,x:631.7605,y:365.3392},0).wait(1).to({x:631.8066,y:365.291},0).wait(1).to({x:631.8527,y:365.2428},0).wait(1).to({scaleX:0.9922,scaleY:0.9922,x:631.8989,y:365.1946},0).wait(1).to({x:631.945,y:365.1464},0).wait(1).to({x:631.9911,y:365.0982},0).wait(1).to({scaleX:0.9923,scaleY:0.9923,x:632.0372,y:365.05},0).wait(1).to({x:632.0833,y:365.0018},0).wait(1).to({x:632.1294,y:364.9536},0).wait(1).to({x:632.1755,y:364.9054},0).wait(1).to({scaleX:0.9924,scaleY:0.9924,x:632.2216,y:364.8572},0).wait(1).to({x:632.2678,y:364.8089},0).wait(1).to({x:632.3139,y:364.7607},0).wait(1).to({scaleX:0.9925,scaleY:0.9925,x:632.36,y:364.7125},0).wait(1).to({x:632.4061,y:364.6643},0).wait(1).to({x:632.4522,y:364.6161},0).wait(1).to({scaleX:0.9926,scaleY:0.9926,x:632.4983,y:364.5679},0).wait(1).to({x:632.5444,y:364.5197},0).wait(1).to({x:632.5906,y:364.4715},0).wait(1).to({scaleX:0.9927,scaleY:0.9927,x:632.6367,y:364.4233},0).wait(1).to({x:632.6828,y:364.3751},0).wait(1).to({x:632.7289,y:364.3269},0).wait(1).to({x:632.775,y:364.2787},0).wait(1).to({scaleX:0.9928,scaleY:0.9928,x:632.8211,y:364.2305},0).wait(1).to({x:632.8672,y:364.1823},0).wait(1).to({x:632.9133,y:364.1341},0).wait(1).to({scaleX:0.9929,scaleY:0.9929,x:632.9594,y:364.0858},0).wait(1).to({x:633.0056,y:364.0376},0).wait(1).to({x:633.0517,y:363.9894},0).wait(1).to({scaleX:0.993,scaleY:0.993,x:633.0978,y:363.9412},0).wait(1).to({x:633.1439,y:363.893},0).wait(1).to({x:633.19,y:363.8448},0).wait(1).to({x:633.2361,y:363.7966},0).wait(1).to({scaleX:0.9931,scaleY:0.9931,x:633.2822,y:363.7484},0).wait(1).to({x:633.3284,y:363.7002},0).wait(1).to({x:633.3745,y:363.652},0).wait(1).to({scaleX:0.9932,scaleY:0.9932,x:633.4206,y:363.6038},0).wait(1).to({x:633.4667,y:363.5556},0).wait(1).to({x:633.5128,y:363.5074},0).wait(1).to({scaleX:0.9933,scaleY:0.9933,x:633.5589,y:363.4592},0).wait(1).to({x:633.605,y:363.411},0).wait(1).to({x:633.6511,y:363.3628},0).wait(1).to({x:633.6973,y:363.3145},0).wait(1).to({scaleX:0.9934,scaleY:0.9934,x:633.7434,y:363.2663},0).wait(1).to({x:633.7895,y:363.2181},0).wait(1).to({x:633.8356,y:363.1699},0).wait(1).to({scaleX:0.9935,scaleY:0.9935,x:633.8817,y:363.1217},0).wait(1).to({x:633.9278,y:363.0735},0).wait(1).to({x:633.9739,y:363.0253},0).wait(1).to({scaleX:0.9936,scaleY:0.9936,x:634.02,y:362.9771},0).wait(1).to({x:634.0662,y:362.9289},0).wait(1).to({x:634.1123,y:362.8807},0).wait(1).to({x:634.1584,y:362.8325},0).wait(1).to({scaleX:0.9937,scaleY:0.9937,x:634.2045,y:362.7843},0).wait(1).to({x:634.2506,y:362.7361},0).wait(1).to({x:634.2967,y:362.6879},0).wait(1).to({scaleX:0.9938,scaleY:0.9938,x:634.3428,y:362.6397},0).wait(1).to({x:634.3889,y:362.5914},0).wait(1).to({x:634.4351,y:362.5432},0).wait(1).to({scaleX:0.9939,scaleY:0.9939,x:634.4812,y:362.495},0).wait(1).to({x:634.5273,y:362.4468},0).wait(1).to({x:634.5734,y:362.3986},0).wait(1).to({scaleX:0.994,scaleY:0.994,x:634.6195,y:362.3504},0).wait(1).to({x:634.6656,y:362.3022},0).wait(1).to({x:634.7117,y:362.254},0).wait(1).to({x:634.7578,y:362.2058},0).wait(1).to({scaleX:0.9941,scaleY:0.9941,x:634.804,y:362.1576},0).wait(1).to({x:634.8501,y:362.1094},0).wait(1).to({x:634.8962,y:362.0612},0).wait(1).to({scaleX:0.9942,scaleY:0.9942,x:634.9423,y:362.013},0).wait(1).to({x:634.9884,y:361.9648},0).wait(1).to({x:635.0345,y:361.9165},0).wait(1).to({scaleX:0.9943,scaleY:0.9943,x:635.0806,y:361.8683},0).wait(1).to({x:635.1268,y:361.8201},0).wait(1).to({x:635.1729,y:361.7719},0).wait(1).to({x:635.219,y:361.7237},0).wait(1).to({scaleX:0.9944,scaleY:0.9944,x:635.2651,y:361.6755},0).wait(1).to({x:635.3112,y:361.6273},0).wait(1).to({x:635.3573,y:361.5791},0).wait(1).to({scaleX:0.9945,scaleY:0.9945,x:635.4034,y:361.5309},0).wait(1).to({x:635.4495,y:361.4827},0).wait(1).to({x:635.4957,y:361.4345},0).wait(1).to({scaleX:0.9946,scaleY:0.9946,x:635.5418,y:361.3863},0).wait(1).to({x:635.5879,y:361.3381},0).wait(1).to({x:635.634,y:361.2899},0).wait(1).to({x:635.6801,y:361.2417},0).wait(1).to({scaleX:0.9947,scaleY:0.9947,x:635.7262,y:361.1935},0).wait(1).to({x:635.7723,y:361.1452},0).wait(1).to({x:635.8184,y:361.097},0).wait(1).to({scaleX:0.9948,scaleY:0.9948,x:635.8646,y:361.0488},0).wait(1).to({x:635.9107,y:361.0006},0).wait(1).to({x:635.9568,y:360.9524},0).wait(1).to({scaleX:0.9949,scaleY:0.9949,x:636.0029,y:360.9042},0).wait(1).to({x:636.049,y:360.856},0).wait(1).to({x:636.0951,y:360.8078},0).wait(1).to({x:636.1412,y:360.7596},0).wait(1).to({scaleX:0.995,scaleY:0.995,x:636.1873,y:360.7114},0).wait(1).to({x:636.2334,y:360.6632},0).wait(1).to({x:636.2796,y:360.615},0).wait(1).to({scaleX:0.9951,scaleY:0.9951,x:636.3257,y:360.5668},0).wait(1).to({x:636.3718,y:360.5186},0).wait(1).to({x:636.4179,y:360.4704},0).wait(1).to({scaleX:0.9952,scaleY:0.9952,x:636.464,y:360.4222},0).wait(1).to({x:636.5101,y:360.3739},0).wait(1).to({x:636.5562,y:360.3257},0).wait(1).to({scaleX:0.9953,scaleY:0.9953,x:636.6024,y:360.2775},0).wait(1).to({x:636.6485,y:360.2293},0).wait(1).to({x:636.6946,y:360.1811},0).wait(1).to({x:636.7407,y:360.1329},0).wait(1).to({scaleX:0.9954,scaleY:0.9954,x:636.7868,y:360.0847},0).wait(1).to({x:636.8329,y:360.0365},0).wait(1).to({x:636.879,y:359.9883},0).wait(1).to({scaleX:0.9955,scaleY:0.9955,x:636.9251,y:359.9401},0).wait(1).to({x:636.9713,y:359.8919},0).wait(1).to({x:637.0174,y:359.8437},0).wait(1).to({scaleX:0.9956,scaleY:0.9956,x:637.0635,y:359.7955},0).wait(1).to({x:637.1096,y:359.7473},0).wait(1).to({x:637.1557,y:359.6991},0).wait(1).to({x:637.2018,y:359.6508},0).wait(1).to({scaleX:0.9957,scaleY:0.9957,x:637.2479,y:359.6026},0).wait(1).to({x:637.2941,y:359.5544},0).wait(1).to({x:637.3402,y:359.5062},0).wait(1).to({scaleX:0.9958,scaleY:0.9958,x:637.3863,y:359.458},0).wait(1).to({x:637.4324,y:359.4098},0).wait(1).to({x:637.4785,y:359.3616},0).wait(1).to({scaleX:0.9959,scaleY:0.9959,x:637.5246,y:359.3134},0).wait(1).to({x:637.5707,y:359.2652},0).wait(1).to({x:637.6168,y:359.217},0).wait(1).to({x:637.663,y:359.1688},0).wait(1).to({scaleX:0.996,scaleY:0.996,x:637.7091,y:359.1206},0).wait(1).to({x:637.7552,y:359.0724},0).wait(1).to({x:637.8013,y:359.0242},0).wait(1).to({scaleX:0.9961,scaleY:0.9961,x:637.8474,y:358.976},0).wait(1).to({x:637.8935,y:358.9278},0).wait(1).to({x:637.9396,y:358.8795},0).wait(1).to({scaleX:0.9962,scaleY:0.9962,x:637.9857,y:358.8313},0).wait(1).to({x:638.0319,y:358.7831},0).wait(1).to({x:638.078,y:358.7349},0).wait(1).to({x:638.1241,y:358.6867},0).wait(1).to({scaleX:0.9963,scaleY:0.9963,x:638.1702,y:358.6385},0).wait(1).to({x:638.2163,y:358.5903},0).wait(1).to({x:638.2624,y:358.5421},0).wait(1).to({scaleX:0.9964,scaleY:0.9964,x:638.3085,y:358.4939},0).wait(1).to({x:638.3546,y:358.4457},0).wait(1).to({x:638.4008,y:358.3975},0).wait(1).to({scaleX:0.9965,scaleY:0.9965,x:638.4469,y:358.3493},0).wait(1).to({x:638.493,y:358.3011},0).wait(1).to({x:638.5391,y:358.2529},0).wait(1).to({scaleX:0.9966,scaleY:0.9966,x:638.5852,y:358.2047},0).wait(1).to({x:638.6313,y:358.1564},0).wait(1).to({x:638.6774,y:358.1082},0).wait(1).to({x:638.7235,y:358.06},0).wait(1).to({scaleX:0.9526,scaleY:0.9526,x:640.0758,y:347.2682},0).wait(1).to({scaleX:0.9085,scaleY:0.9085,x:641.428,y:336.4763},0).wait(1).to({scaleX:0.9086,scaleY:0.9086,x:641.4847,y:336.4367},0).wait(1).to({x:641.5415,y:336.3972},0).wait(1).to({scaleX:0.9087,scaleY:0.9087,x:641.5983,y:336.3576},0).wait(1).to({x:641.655,y:336.318},0).wait(1).to({scaleX:0.9088,scaleY:0.9088,x:641.7118,y:336.2785},0).wait(1).to({x:641.7686,y:336.2389},0).wait(1).to({scaleX:0.9089,scaleY:0.9089,x:641.8253,y:336.1993},0).wait(1).to({x:641.8821,y:336.1597},0).wait(1).to({scaleX:0.909,scaleY:0.909,x:641.9389,y:336.1202},0).wait(1).to({x:641.9956,y:336.0806},0).wait(1).to({scaleX:0.9091,scaleY:0.9091,x:642.0524,y:336.041},0).wait(1).to({x:642.1092,y:336.0015},0).wait(1).to({scaleX:0.9092,scaleY:0.9092,x:642.1659,y:335.9619},0).wait(1).to({x:642.2227,y:335.9223},0).wait(1).to({scaleX:0.9093,scaleY:0.9093,x:642.2794,y:335.8828},0).wait(1).to({x:642.3362,y:335.8432},0).wait(1).to({scaleX:0.9094,scaleY:0.9094,x:642.393,y:335.8036},0).wait(1).to({x:642.4497,y:335.7641},0).wait(1).to({scaleX:0.9095,scaleY:0.9095,x:642.5065,y:335.7245},0).wait(1).to({x:642.5633,y:335.6849},0).wait(1).to({scaleX:0.9096,scaleY:0.9096,x:642.62,y:335.6454},0).wait(1).to({x:642.6768,y:335.6058},0).wait(1).to({scaleX:0.9097,scaleY:0.9097,x:642.7336,y:335.5662},0).wait(1).to({x:642.7903,y:335.5266},0).wait(1).to({scaleX:0.9098,scaleY:0.9098,x:642.8471,y:335.4871},0).wait(1).to({x:642.9038,y:335.4475},0).wait(1).to({scaleX:0.9099,scaleY:0.9099,x:642.9606,y:335.4079},0).wait(1).to({x:643.0174,y:335.3684},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:643.0741,y:335.3288},0).wait(1).to({x:643.1309,y:335.2892},0).wait(1).to({scaleX:0.9101,scaleY:0.9101,x:643.1877,y:335.2497},0).wait(1).to({x:643.2444,y:335.2101},0).wait(1).to({scaleX:0.9102,scaleY:0.9102,x:643.3012,y:335.1705},0).wait(1).to({x:643.358,y:335.131},0).wait(1).to({scaleX:0.9103,scaleY:0.9103,x:643.4147,y:335.0914},0).wait(1).to({x:643.4715,y:335.0518},0).wait(1).to({scaleX:0.9104,scaleY:0.9104,x:643.5283,y:335.0122},0).wait(1).to({x:643.585,y:334.9727},0).wait(1).to({scaleX:0.9105,scaleY:0.9105,x:643.6418,y:334.9331},0).wait(1).to({x:643.6985,y:334.8935},0).wait(1).to({scaleX:0.9106,scaleY:0.9106,x:643.7553,y:334.854},0).wait(1).to({x:643.8121,y:334.8144},0).wait(1).to({scaleX:0.9107,scaleY:0.9107,x:643.8688,y:334.7748},0).wait(1).to({x:643.9256,y:334.7353},0).wait(1).to({scaleX:0.9108,scaleY:0.9108,x:643.9824,y:334.6957},0).wait(1).to({x:644.0391,y:334.6561},0).wait(1).to({scaleX:0.9109,scaleY:0.9109,x:644.0959,y:334.6166},0).wait(1).to({x:644.1527,y:334.577},0).wait(1).to({scaleX:0.911,scaleY:0.911,x:644.2094,y:334.5374},0).wait(1).to({x:644.2662,y:334.4979},0).wait(1).to({scaleX:0.9111,scaleY:0.9111,x:644.3229,y:334.4583},0).wait(1).to({x:644.3797,y:334.4187},0).wait(1).to({scaleX:0.9112,scaleY:0.9112,x:644.4365,y:334.3791},0).wait(1).to({x:644.4932,y:334.3396},0).wait(1).to({scaleX:0.9113,scaleY:0.9113,x:644.55,y:334.3},0).wait(1).to({x:644.5588,y:336.0823},0).wait(1).to({x:644.5675,y:337.8646},0).wait(1).to({x:644.5763,y:339.647},0).wait(1).to({x:644.5851,y:341.4293},0).wait(1).to({x:644.5938,y:343.2116},0).wait(1).to({x:644.5923,y:344.4374},0).wait(1).to({x:644.5908,y:345.6631},0).wait(1).to({x:644.5892,y:346.8889},0).wait(1).to({x:644.5877,y:348.1147},0).wait(1).to({x:644.5862,y:349.3404},0).wait(1).to({x:644.5846,y:350.5662},0).wait(1).to({x:644.5831,y:351.7919},0).wait(1).to({x:644.5815,y:353.0177},0).wait(1).to({x:644.58,y:354.2435},0).wait(1).to({x:644.5785,y:355.4692},0).wait(1).to({x:644.5769,y:356.695},0).wait(1).to({x:644.5754,y:357.9208},0).wait(1).to({x:644.5738,y:359.1465},0).wait(1).to({x:644.5723,y:360.3723},0).wait(1).to({x:644.5708,y:361.5981},0).wait(1).to({x:644.5692,y:362.8238},0).wait(1).to({x:644.5677,y:364.0496},0).wait(1).to({x:644.5661,y:365.2753},0).wait(1).to({x:644.5646,y:366.5011},0).wait(1).to({x:644.5631,y:367.7269},0).wait(1).to({x:644.5615,y:368.9526},0).wait(1).to({x:644.56,y:370.1784},0).wait(1).to({x:644.5585,y:371.4042},0).wait(1).to({x:644.5569,y:372.6299},0).wait(1).to({x:644.5554,y:373.8557},0).wait(1).to({x:644.5538,y:375.0814},0).wait(1).to({x:644.5523,y:376.3072},0).wait(1).to({x:644.5508,y:377.533},0).wait(1).to({x:644.5492,y:378.7587},0).wait(1).to({x:644.5477,y:379.9845},0).wait(1).to({x:644.5461,y:381.2103},0).wait(1).to({x:644.5446,y:382.436},0).wait(1).to({x:644.5431,y:383.6618},0).wait(1).to({x:644.5415,y:384.8875},0).wait(1).to({x:644.54,y:386.1133},0).wait(1).to({x:644.5384,y:387.3391},0).wait(1).to({x:644.5369,y:388.5648},0).wait(1).to({x:644.5354,y:389.7906},0).wait(1).to({x:644.5338,y:391.0164},0).wait(1).to({x:644.5323,y:392.2421},0).wait(1).to({x:644.5308,y:393.4679},0).wait(1).to({x:644.5292,y:394.6937},0).wait(1).to({x:644.5277,y:395.9194},0).wait(1).to({x:644.5261,y:397.1452},0).wait(1).to({x:644.5246,y:398.3709},0).wait(1).to({x:644.5231,y:399.5967},0).wait(1).to({x:644.5215,y:400.8225},0).wait(1).to({x:644.52,y:402.0482},0).wait(1).to({x:644.5184,y:403.274},0).wait(1).to({x:644.5169,y:404.4998},0).wait(1).to({x:644.5154,y:405.7255},0).wait(1).to({x:644.5138,y:406.9513},0).wait(1).to({x:644.5123,y:408.1771},0).wait(1).to({x:644.5107,y:409.4028},0).wait(1).to({x:644.5092,y:410.6286},0).wait(1).to({x:644.5077,y:411.8543},0).wait(1).to({x:644.5061,y:413.0801},0).wait(1).to({x:644.5046,y:414.3059},0).wait(1).to({x:644.5031,y:415.5316},0).wait(1).to({x:644.5015,y:416.7574},0).wait(1).to({x:644.5,y:417.9832},0).wait(1).to({x:644.4984,y:419.2089},0).wait(1).to({x:644.4969,y:420.4347},0).wait(1).to({x:644.4954,y:421.6604},0).wait(1).to({x:644.4938,y:422.8862},0).wait(1).to({x:644.4923,y:424.112},0).wait(1).to({x:644.4907,y:425.3377},0).wait(1).to({x:644.4892,y:426.5635},0).wait(1).to({x:644.4877,y:427.7893},0).wait(1).to({x:644.4861,y:429.015},0).wait(1).to({x:644.4846,y:430.2408},0).wait(1).to({x:644.483,y:431.4666},0).wait(1).to({x:644.4815,y:432.6923},0).wait(1).to({x:644.48,y:433.9181},0).wait(1).to({x:644.4784,y:435.1438},0).wait(1).to({x:644.4769,y:436.3696},0).wait(1).to({x:644.4754,y:437.5954},0).wait(1).to({x:644.4738,y:438.8211},0).wait(1).to({x:644.4723,y:440.0469},0).wait(1).to({x:644.4707,y:441.2727},0).wait(1).to({x:644.4692,y:442.4984},0).wait(1).to({x:644.4677,y:443.7242},0).wait(1).to({x:644.4661,y:444.9499},0).wait(1).to({x:644.4646,y:446.1757},0).wait(1).to({x:644.463,y:447.4015},0).wait(1).to({x:644.4615,y:448.6272},0).wait(1).to({x:644.46,y:449.853},0).wait(1).to({x:644.4584,y:451.0788},0).wait(1).to({x:644.4569,y:452.3045},0).wait(1).to({x:644.4553,y:453.5303},0).wait(1).to({x:644.4538,y:454.7561},0).wait(1).to({x:644.4523,y:455.9818},0).wait(1).to({x:644.4507,y:457.2076},0).wait(1).to({x:644.4492,y:458.4333},0).wait(1).to({x:644.4476,y:459.6591},0).wait(1).to({x:644.4461,y:460.8849},0).wait(1).to({x:644.4446,y:462.1106},0).wait(1).to({x:644.443,y:463.3364},0).wait(1).to({x:644.4415,y:464.5622},0).wait(1).to({x:644.44,y:465.7879},0).wait(1).to({x:644.4384,y:467.0137},0).wait(1).to({x:644.4369,y:468.2395},0).wait(1).to({x:644.4353,y:469.4652},0).wait(1).to({x:644.4338,y:470.691},0).wait(1).to({x:644.4323,y:471.9167},0).wait(1).to({x:644.4307,y:473.1425},0).wait(1).to({x:644.4292,y:474.3683},0).wait(1).to({x:644.4276,y:475.594},0).wait(1).to({x:644.4261,y:476.8198},0).wait(1).to({x:644.4246,y:478.0456},0).wait(1).to({x:644.423,y:479.2713},0).wait(1).to({x:644.4215,y:480.4971},0).wait(1).to({x:644.4199,y:481.7228},0).wait(1).to({x:644.4184,y:482.9486},0).wait(1).to({x:644.4169,y:484.1744},0).wait(1).to({x:644.4153,y:485.4001},0).wait(1).to({x:644.4138,y:486.6259},0).wait(1).to({x:644.4123,y:487.8517},0).wait(1).to({x:644.4107,y:489.0774},0).wait(1).to({x:644.4092,y:490.3032},0).wait(1).to({x:644.4076,y:491.529},0).wait(1).to({x:644.4061,y:492.7547},0).wait(1).to({x:644.4046,y:493.9805},0).wait(1).to({x:644.403,y:495.2062},0).wait(1).to({x:644.4015,y:496.432},0).wait(1).to({x:644.3999,y:497.6578},0).wait(1).to({x:644.3984,y:498.8835},0).wait(1).to({x:644.3969,y:500.1093},0).wait(1).to({x:644.3953,y:501.3351},0).wait(1).to({x:644.3938,y:502.5608},0).wait(1).to({x:644.3922,y:503.7866},0).wait(1).to({x:644.3907,y:505.0123},0).wait(1).to({x:644.3892,y:506.2381},0).wait(1).to({x:644.3876,y:507.4639},0).wait(1).to({x:644.3861,y:508.6896},0).wait(1).to({x:644.3846,y:509.9154},0).wait(1).to({x:644.383,y:511.1412},0).wait(1).to({x:644.3815,y:512.3669},0).wait(1).to({x:644.3799,y:513.5927},0).wait(1).to({x:644.3784,y:514.8185},0).wait(1).to({x:644.3769,y:516.0442},0).wait(1).to({x:644.3753,y:517.27},0).wait(1).to({x:644.3738,y:518.4957},0).wait(1).to({x:644.3722,y:519.7215},0).wait(1).to({x:644.3707,y:520.9473},0).wait(1).to({x:644.3692,y:522.173},0).wait(1).to({x:644.3676,y:523.3988},0).wait(1).to({x:644.3661,y:524.6246},0).wait(1).to({x:644.3645,y:525.8503},0).wait(1).to({x:644.363,y:527.0761},0).wait(1).to({x:644.3615,y:528.3018},0).wait(1).to({x:644.3599,y:529.5276},0).wait(1).to({x:644.3584,y:530.7534},0).wait(1).to({x:644.3569,y:531.9791},0).wait(1).to({x:644.3553,y:533.2049},0).wait(1).to({x:644.3538,y:534.4307},0).wait(1).to({x:644.3522,y:535.6564},0).wait(1).to({x:644.3507,y:536.8822},0).wait(1).to({x:644.3492,y:538.108},0).wait(1).to({x:644.3476,y:539.3337},0).wait(1).to({x:644.3461,y:540.5595},0).wait(1).to({x:644.3445,y:541.7852},0).wait(1).to({x:644.343,y:543.011},0).to({_off:true},1).wait(19));

	// buttons_obj_
	this.buttons = new lib.Scene_1_buttons();
	this.buttons.name = "buttons";
	this.buttons.setTransform(640.95,364.95,1.0038,1.0038,0,0,0,640.9,364.9);
	this.buttons.depth = 0;
	this.buttons.isAttachedToCamera = 0
	this.buttons.isAttachedToMask = 0
	this.buttons.layerDepth = 0
	this.buttons.layerIndex = 0
	this.buttons.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.buttons).wait(2).to({regX:656,regY:350.6,scaleX:1.0447,scaleY:1.0447,x:640.85},0).wait(606).to({regX:640.9,regY:364.9,scaleX:1,scaleY:1,x:640.9,y:364.9},0).to({_off:true},2).wait(4));

	// cloud10_obj_
	this.cloud10 = new lib.Scene_1_cloud10();
	this.cloud10.name = "cloud10";
	this.cloud10.setTransform(0,0.05,1.0038,1.0038,0,0,0,2.4,1.4);
	this.cloud10.depth = 0;
	this.cloud10.isAttachedToCamera = 0
	this.cloud10.isAttachedToMask = 0
	this.cloud10.layerDepth = 0
	this.cloud10.layerIndex = 1
	this.cloud10.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.cloud10).wait(117).to({regX:230.8,regY:2.9,scaleX:1.6441,scaleY:1.6441,y:0},0).wait(1).to({regX:1095,regY:417.2,scaleX:1,scaleY:1,x:864.25,y:414.35},0).wait(79).to({regX:-3.6,regY:9.3,scaleX:1.0087,scaleY:1.0087,x:0.05,y:-0.05},0).wait(101).to({regX:-1,regY:3.4,scaleX:1.0056,scaleY:1.0056,x:0,y:0},0).wait(25).to({regX:-0.2,regY:1.9,scaleX:1.0048,scaleY:1.0048,x:0.05,y:-0.05},0).wait(1).to({regX:1095,regY:417.2,scaleX:1,scaleY:1,x:1095.2,y:415.3},0).wait(49).to({_off:true},1).wait(240));

	// cloud2_obj_
	this.cloud2 = new lib.Scene_1_cloud2();
	this.cloud2.name = "cloud2";
	this.cloud2.setTransform(0,0.05,1.0038,1.0038,0,0,0,2.4,1.4);
	this.cloud2.depth = 0;
	this.cloud2.isAttachedToCamera = 0
	this.cloud2.isAttachedToMask = 0
	this.cloud2.layerDepth = 0
	this.cloud2.layerIndex = 2
	this.cloud2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.cloud2).wait(166).to({regX:161.8,regY:32.8,scaleX:1.334,scaleY:1.334,x:0.1,y:0},0).wait(1).to({regX:201.7,regY:844.3,scaleX:1,scaleY:1,x:40,y:811.55},0).wait(23).to({regX:33.7,regY:14.7,scaleX:1.0674,scaleY:1.0674,x:0,y:0},0).wait(1).to({regX:201.7,regY:844.3,scaleX:1,scaleY:1,x:168.05,y:829.6},0).wait(93).to({_off:true},1).wait(329));

	// cloud11_obj_
	this.cloud11 = new lib.Scene_1_cloud11();
	this.cloud11.name = "cloud11";
	this.cloud11.setTransform(0,0.05,1.0038,1.0038,0,0,0,2.4,1.4);
	this.cloud11.depth = 0;
	this.cloud11.isAttachedToCamera = 0
	this.cloud11.isAttachedToMask = 0
	this.cloud11.layerDepth = 0
	this.cloud11.layerIndex = 3
	this.cloud11.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.cloud11).wait(117).to({regX:230.8,regY:2.9,scaleX:1.6441,scaleY:1.6441,y:0},0).wait(1).to({regX:168,regY:433.7,scaleX:1,scaleY:1,x:-62.75,y:430.85},0).wait(86).to({regX:-3.4,regY:9,scaleX:1.0085,scaleY:1.0085,x:0,y:0.05},0).wait(98).to({regX:-0.8,regY:3.1,scaleX:1.0054,scaleY:1.0054,x:0.05,y:-0.05},0).wait(1).to({regX:168,regY:433.7,scaleX:1,scaleY:1,x:168.8,y:430.6},0).wait(49).to({_off:true},1).wait(261));

	// cloud4_obj_
	this.cloud4 = new lib.Scene_1_cloud4();
	this.cloud4.name = "cloud4";
	this.cloud4.setTransform(0,0.05,1.0038,1.0038,0,0,0,2.4,1.4);
	this.cloud4.depth = 0;
	this.cloud4.isAttachedToCamera = 0
	this.cloud4.isAttachedToMask = 0
	this.cloud4.layerDepth = 0
	this.cloud4.layerIndex = 4
	this.cloud4.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.cloud4).wait(164).to({regX:172.4,regY:34.2,scaleX:1.3623,scaleY:1.3623,y:-0.05},0).wait(1).to({regX:920.4,regY:824.7,scaleX:1,scaleY:1,x:748.05,y:790.5},0).wait(106).to({_off:true},1).wait(342));

	// cloud_5_obj_
	this.cloud_5 = new lib.Scene_1_cloud_5();
	this.cloud_5.name = "cloud_5";
	this.cloud_5.setTransform(0,0.05,1.0038,1.0038,0,0,0,2.4,1.4);
	this.cloud_5.depth = 0;
	this.cloud_5.isAttachedToCamera = 0
	this.cloud_5.isAttachedToMask = 0
	this.cloud_5.layerDepth = 0
	this.cloud_5.layerIndex = 5
	this.cloud_5.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.cloud_5).wait(117).to({regX:230.8,regY:2.9,scaleX:1.6441,scaleY:1.6441,y:0},0).wait(1).to({regX:356.9,regY:1218.2,scaleX:1,scaleY:1,x:126.15,y:1215.35},0).wait(131).to({regX:-2.3,regY:6.2,scaleX:1.0071,scaleY:1.0071,x:0,y:-0.05},0).wait(1).to({regX:356.9,regY:1218.2,scaleX:1,scaleY:1,x:359.15,y:1211.95},0).wait(55).to({_off:true},1).wait(308));

	// cloud_7_obj_
	this.cloud_7 = new lib.Scene_1_cloud_7();
	this.cloud_7.name = "cloud_7";
	this.cloud_7.setTransform(0,0.05,1.0038,1.0038,0,0,0,2.4,1.4);
	this.cloud_7.depth = 0;
	this.cloud_7.isAttachedToCamera = 0
	this.cloud_7.isAttachedToMask = 0
	this.cloud_7.layerDepth = 0
	this.cloud_7.layerIndex = 6
	this.cloud_7.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.cloud_7).wait(173).to({regX:124.4,regY:27.4,scaleX:1.2434,scaleY:1.2434,x:0.05,y:-0.1},0).wait(1).to({regX:448,regY:810.7,scaleX:1,scaleY:1,x:323.65,y:783.25},0).wait(72).to({regX:-2.4,regY:6.5,scaleX:1.0072,scaleY:1.0072,x:-0.05,y:0.05},0).wait(49).to({regX:-1.1,regY:3.6,scaleX:1.0057,scaleY:1.0057,y:0},0).wait(1).to({regX:448,regY:810.7,scaleX:1,scaleY:1,x:449,y:807.15},0).wait(39).to({_off:true},1).wait(278));

	// cloud_8_obj_
	this.cloud_8 = new lib.Scene_1_cloud_8();
	this.cloud_8.name = "cloud_8";
	this.cloud_8.setTransform(0,0.05,1.0038,1.0038,0,0,0,2.4,1.4);
	this.cloud_8.depth = 0;
	this.cloud_8.isAttachedToCamera = 0
	this.cloud_8.isAttachedToMask = 0
	this.cloud_8.layerDepth = 0
	this.cloud_8.layerIndex = 7
	this.cloud_8.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.cloud_8).wait(119).to({regX:233,regY:5.9,scaleX:1.6454,scaleY:1.6454,y:0.1},0).wait(1).to({regX:1093.5,regY:676.1,scaleX:1,scaleY:1,x:860.55,y:670.3},0).wait(117).to({regX:-2.6,regY:7,scaleX:1.0074,scaleY:1.0074,x:0,y:-0.05},0).wait(1).to({regX:1093.5,regY:676.1,scaleX:1,scaleY:1,x:1096.05,y:669.1},0).wait(105).to({_off:true},1).wait(270));

	// plane_obj_
	this.plane = new lib.Scene_1_plane();
	this.plane.name = "plane";
	this.plane.setTransform(1575.25,152.85,1.0038,1.0038,0,0,0,1571.7,153.6);
	this.plane.depth = 0;
	this.plane.isAttachedToCamera = 0
	this.plane.isAttachedToMask = 0
	this.plane.layerDepth = 0
	this.plane.layerIndex = 8
	this.plane.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.plane).wait(1).to({regX:645.4,regY:152.9,scaleX:1,scaleY:1,x:648.9,y:152.15},0).wait(106).to({_off:true},1).wait(506));

	// diver_2_obj_
	this.diver_2 = new lib.Scene_1_diver_2();
	this.diver_2.name = "diver_2";
	this.diver_2.setTransform(0,0.05,1.0038,1.0038,0,0,0,2.4,1.4);
	this.diver_2.depth = 0;
	this.diver_2.isAttachedToCamera = 0
	this.diver_2.isAttachedToMask = 0
	this.diver_2.layerDepth = 0
	this.diver_2.layerIndex = 9
	this.diver_2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.diver_2).wait(285).to({regX:-1.3,regY:4.2,scaleX:1.006,scaleY:1.006},0).wait(1).to({regX:621.2,regY:566.6,scaleX:1,scaleY:1,x:622.45,y:562.45},0).wait(91).to({regX:60.1,regY:9.1,scaleX:1.1003,scaleY:1.1003,x:0.05,y:0.05},0).wait(51).to({regX:61.4,regY:9.8,scaleX:1.0974,scaleY:1.0974,x:0.1,y:-0.05},0).wait(1).to({regX:621.2,regY:566.6,scaleX:1,scaleY:1,x:559.9,y:556.8},0).wait(166).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:621.2,regY:566.6,x:621.2,y:566.6},0).wait(7).to({_off:true},1).wait(10));

	// diver_1_obj_
	this.diver_1 = new lib.Scene_1_diver_1();
	this.diver_1.name = "diver_1";
	this.diver_1.setTransform(0,0.05,1.0038,1.0038,0,0,0,2.4,1.4);
	this.diver_1.depth = 0;
	this.diver_1.isAttachedToCamera = 0
	this.diver_1.isAttachedToMask = 0
	this.diver_1.layerDepth = 0
	this.diver_1.layerIndex = 10
	this.diver_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.diver_1).wait(47).to({regX:242.5,regY:23.2,scaleX:1.663,scaleY:1.663},0).wait(1).to({regX:651.5,regY:362.3,scaleX:1,scaleY:1,x:409.05,y:339.15},0).wait(69).to({regX:230.8,regY:2.9,scaleX:1.6441,scaleY:1.6441,x:0,y:0},0).wait(1).to({regX:651.5,regY:362.3,scaleX:1,scaleY:1,x:420.75,y:359.45},0).wait(71).to({regX:39,regY:15.5,scaleX:1.0764,scaleY:1.0764,x:0.05,y:0.05},0).wait(1).to({regX:651.5,regY:362.3,scaleX:1,scaleY:1,x:612.55,y:346.85},0).wait(77).to({regX:-1.8,regY:5.2,scaleX:1.0065,scaleY:1.0065,x:0,y:0},0).wait(1).to({regX:651.5,regY:362.3,scaleX:1,scaleY:1,x:653.25,y:357.1},0).wait(17).to({regX:-1.3,regY:4.2,scaleX:1.006,scaleY:1.006,x:0,y:0.05},0).to({_off:true},1).wait(328));

	// parachute_open_obj_
	this.parachute_open = new lib.Scene_1_parachute_open();
	this.parachute_open.name = "parachute_open";
	this.parachute_open.setTransform(0,0.05,1.0038,1.0038,0,0,0,2.4,1.4);
	this.parachute_open.depth = 0;
	this.parachute_open.isAttachedToCamera = 0
	this.parachute_open.isAttachedToMask = 0
	this.parachute_open.layerDepth = 0
	this.parachute_open.layerIndex = 11
	this.parachute_open.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.parachute_open).wait(268).to({regX:-1.8,regY:5.2,scaleX:1.0065,scaleY:1.0065,x:-0.05},0).wait(1).to({regX:620.5,regY:397.6,scaleX:1,scaleY:1,x:622.2,y:392.45},0).wait(19).to({regX:-1.2,regY:4,scaleX:1.0059,scaleY:1.0059,x:0.05,y:-0.05},0).wait(1).to({regX:620.5,regY:397.6,scaleX:1,scaleY:1,x:621.7,y:393.6},0).wait(158).to({regX:61.4,regY:34.7,scaleX:1.0974,scaleY:1.0974,x:0.1,y:0},0).wait(1).to({regX:620.5,regY:397.6,scaleX:1,scaleY:1,x:559.2,y:362.9},0).wait(147).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:620.5,regY:397.6,x:620.5,y:397.6},0).wait(7).to({_off:true},1).wait(10));

	// cloud9_obj_
	this.cloud9 = new lib.Scene_1_cloud9();
	this.cloud9.name = "cloud9";
	this.cloud9.setTransform(0,0.05,1.0038,1.0038,0,0,0,2.4,1.4);
	this.cloud9.depth = 0;
	this.cloud9.isAttachedToCamera = 0
	this.cloud9.isAttachedToMask = 0
	this.cloud9.layerDepth = 0
	this.cloud9.layerIndex = 12
	this.cloud9.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.cloud9).wait(117).to({regX:230.8,regY:2.9,scaleX:1.6441,scaleY:1.6441,y:0},0).wait(1).to({regX:449.9,regY:518.3,scaleX:1,scaleY:1,x:219.15,y:515.45},0).wait(123).to({regX:-2.5,regY:6.8,scaleX:1.0073,scaleY:1.0073,x:0,y:0.05},0).wait(43).to({regX:-1.3,regY:4.2,scaleX:1.006,scaleY:1.006,y:0},0).wait(8).to({regX:-1.1,regY:3.8,scaleX:1.0058,scaleY:1.0058},0).wait(1).to({regX:449.9,regY:518.3,scaleX:1,scaleY:1,x:450.95,y:514.55},0).wait(25).to({_off:true},1).wait(295));

	// plane_2_obj_
	this.plane_2 = new lib.Scene_1_plane_2();
	this.plane_2.name = "plane_2";
	this.plane_2.setTransform(0,0.05,1.0038,1.0038,0,0,0,2.4,1.4);
	this.plane_2.depth = 0;
	this.plane_2.isAttachedToCamera = 0
	this.plane_2.isAttachedToMask = 0
	this.plane_2.layerDepth = 0
	this.plane_2.layerIndex = 13
	this.plane_2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.plane_2).wait(377).to({regX:60.1,regY:9.1,scaleX:1.1003,scaleY:1.1003,x:0.05},0).wait(237));

	// montain_r_obj_
	this.montain_r = new lib.Scene_1_montain_r();
	this.montain_r.name = "montain_r";
	this.montain_r.setTransform(0,0.05,1.0038,1.0038,0,0,0,2.4,1.4);
	this.montain_r.depth = 0;
	this.montain_r.isAttachedToCamera = 0
	this.montain_r.isAttachedToMask = 0
	this.montain_r.layerDepth = 0
	this.montain_r.layerIndex = 14
	this.montain_r.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.montain_r).wait(377).to({regX:60.1,regY:9.1,scaleX:1.1003,scaleY:1.1003,x:0.05},0).wait(216).to({regX:61.1,regY:213.7,scaleX:1.0974,scaleY:1.0974,x:0,y:0},0).wait(21));

	// montain_l_obj_
	this.montain_l = new lib.Scene_1_montain_l();
	this.montain_l.name = "montain_l";
	this.montain_l.setTransform(0,0.05,1.0038,1.0038,0,0,0,2.4,1.4);
	this.montain_l.depth = 0;
	this.montain_l.isAttachedToCamera = 0
	this.montain_l.isAttachedToMask = 0
	this.montain_l.layerDepth = 0
	this.montain_l.layerIndex = 15
	this.montain_l.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.montain_l).wait(377).to({regX:60.1,regY:9.1,scaleX:1.1003,scaleY:1.1003,x:0.05},0).wait(216).to({regX:61.1,regY:213.7,scaleX:1.0974,scaleY:1.0974,x:0,y:0},0).wait(21));

	// middel_grass_obj_
	this.middel_grass = new lib.Scene_1_middel_grass();
	this.middel_grass.name = "middel_grass";
	this.middel_grass.setTransform(0,0.05,1.0038,1.0038,0,0,0,2.4,1.4);
	this.middel_grass.depth = 0;
	this.middel_grass.isAttachedToCamera = 0
	this.middel_grass.isAttachedToMask = 0
	this.middel_grass.layerDepth = 0
	this.middel_grass.layerIndex = 16
	this.middel_grass.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.middel_grass).wait(377).to({regX:60.1,regY:9.1,scaleX:1.1003,scaleY:1.1003,x:0.05},0).wait(216).to({regX:61.1,regY:213.7,scaleX:1.0974,scaleY:1.0974,x:0,y:0},0).wait(21));

	// hill_r_obj_
	this.hill_r = new lib.Scene_1_hill_r();
	this.hill_r.name = "hill_r";
	this.hill_r.setTransform(0,0.05,1.0038,1.0038,0,0,0,2.4,1.4);
	this.hill_r.depth = 0;
	this.hill_r.isAttachedToCamera = 0
	this.hill_r.isAttachedToMask = 0
	this.hill_r.layerDepth = 0
	this.hill_r.layerIndex = 17
	this.hill_r.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.hill_r).wait(377).to({regX:60.1,regY:9.1,scaleX:1.1003,scaleY:1.1003,x:0.05},0).wait(216).to({regX:61.1,regY:213.7,scaleX:1.0974,scaleY:1.0974,x:0,y:0},0).wait(21));

	// __trees_l_obj_
	this.__trees_l = new lib.Scene_1___trees_l();
	this.__trees_l.name = "__trees_l";
	this.__trees_l.setTransform(0,0.05,1.0038,1.0038,0,0,0,2.4,1.4);
	this.__trees_l.depth = 0;
	this.__trees_l.isAttachedToCamera = 0
	this.__trees_l.isAttachedToMask = 0
	this.__trees_l.layerDepth = 0
	this.__trees_l.layerIndex = 18
	this.__trees_l.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.__trees_l).wait(377).to({regX:60.1,regY:9.1,scaleX:1.1003,scaleY:1.1003,x:0.05},0).wait(216).to({regX:61.1,regY:213.7,scaleX:1.0974,scaleY:1.0974,x:0,y:0},0).wait(21));

	// sky_strip_obj_
	this.sky_strip = new lib.Scene_1_sky_strip();
	this.sky_strip.name = "sky_strip";
	this.sky_strip.setTransform(0,0.05,1.0038,1.0038,0,0,0,2.4,1.4);
	this.sky_strip.depth = 0;
	this.sky_strip.isAttachedToCamera = 0
	this.sky_strip.isAttachedToMask = 0
	this.sky_strip.layerDepth = 0
	this.sky_strip.layerIndex = 19
	this.sky_strip.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.sky_strip).wait(377).to({regX:60.1,regY:9.1,scaleX:1.1003,scaleY:1.1003,x:0.05},0).wait(216).to({regX:61.1,regY:213.7,scaleX:1.0974,scaleY:1.0974,x:0,y:0},0).wait(21));

	// all_green_obj_
	this.all_green = new lib.Scene_1_all_green();
	this.all_green.name = "all_green";
	this.all_green.setTransform(0,0.05,1.0038,1.0038,0,0,0,2.4,1.4);
	this.all_green.depth = 0;
	this.all_green.isAttachedToCamera = 0
	this.all_green.isAttachedToMask = 0
	this.all_green.layerDepth = 0
	this.all_green.layerIndex = 20
	this.all_green.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.all_green).wait(377).to({regX:60.1,regY:9.1,scaleX:1.1003,scaleY:1.1003,x:0.05},0).wait(216).to({regX:61.1,regY:213.7,scaleX:1.0974,scaleY:1.0974,x:0,y:0},0).wait(21));

	// cloud_r_obj_
	this.cloud_r = new lib.Scene_1_cloud_r();
	this.cloud_r.name = "cloud_r";
	this.cloud_r.setTransform(1082.2,145.3,1.0038,1.0038,0,0,0,1080.5,146.1);
	this.cloud_r.depth = 0;
	this.cloud_r.isAttachedToCamera = 0
	this.cloud_r.isAttachedToMask = 0
	this.cloud_r.layerDepth = 0
	this.cloud_r.layerIndex = 21
	this.cloud_r.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.cloud_r).wait(116).to({regX:905.1,regY:370.1,scaleX:1.6435,scaleY:1.6435,x:1082.3,y:145.2},0).to({_off:true},28).wait(470));

	// cloud_l_obj_
	this.cloud_l = new lib.Scene_1_cloud_l();
	this.cloud_l.name = "cloud_l";
	this.cloud_l.setTransform(246.85,409.3,1.0038,1.0038,0,0,0,248.3,409.1);
	this.cloud_l.depth = 0;
	this.cloud_l.isAttachedToCamera = 0
	this.cloud_l.isAttachedToMask = 0
	this.cloud_l.layerDepth = 0
	this.cloud_l.layerIndex = 22
	this.cloud_l.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.cloud_l).wait(116).to({regX:396.8,regY:530.8,scaleX:1.6435,scaleY:1.6435,x:246.9,y:409.35},0).to({_off:true},28).wait(470));

	// blue_backround_obj_
	this.blue_backround = new lib.Scene_1_blue_backround();
	this.blue_backround.name = "blue_backround";
	this.blue_backround.setTransform(639.5,361.7,1.0038,1.0038,0,0,0,639.5,361.7);
	this.blue_backround.depth = 0;
	this.blue_backround.isAttachedToCamera = 0
	this.blue_backround.isAttachedToMask = 0
	this.blue_backround.layerDepth = 0
	this.blue_backround.layerIndex = 23
	this.blue_backround.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.blue_backround).to({_off:true},386).wait(228));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(88.5,23.4,1753.9,2712.5);
// library properties:
lib.properties = {
	id: 'BB26D7308087DF40A3DE97C6A34F29EA',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Group.png?1619179010831", id:"Group"},
		{src:"images/Group_1.png?1619179010831", id:"Group_1"},
		{src:"images/Group_1_1.png?1619179010831", id:"Group_1_1"},
		{src:"images/Group_10.png?1619179010831", id:"Group_10"},
		{src:"images/Group_12.png?1619179010831", id:"Group_12"},
		{src:"images/Group_12_1.png?1619179010831", id:"Group_12_1"},
		{src:"images/Group_13.png?1619179010831", id:"Group_13"},
		{src:"images/Group_13_1.png?1619179010831", id:"Group_13_1"},
		{src:"images/Group_11.png?1619179010831", id:"Group_11"},
		{src:"images/Group_14.png?1619179010831", id:"Group_14"},
		{src:"images/Group_1_2.png?1619179010831", id:"Group_1_2"},
		{src:"images/Group_10_1.png?1619179010831", id:"Group_10_1"},
		{src:"images/Group_11_1.png?1619179010831", id:"Group_11_1"},
		{src:"images/Group_17.png?1619179010831", id:"Group_17"},
		{src:"images/Group_15.png?1619179010831", id:"Group_15"},
		{src:"images/Group_18.png?1619179010831", id:"Group_18"},
		{src:"images/Group_17_1.png?1619179010831", id:"Group_17_1"},
		{src:"images/Group_19.png?1619179010831", id:"Group_19"},
		{src:"images/Group_18_1.png?1619179010831", id:"Group_18_1"},
		{src:"images/Group_14_1.png?1619179010831", id:"Group_14_1"},
		{src:"images/Group_2.png?1619179010831", id:"Group_2"},
		{src:"images/Group_2_1.png?1619179010831", id:"Group_2_1"},
		{src:"images/Group_2_2.png?1619179010831", id:"Group_2_2"},
		{src:"images/Group_20.png?1619179010831", id:"Group_20"},
		{src:"images/Group_20_1.png?1619179010831", id:"Group_20_1"},
		{src:"images/Group_16.png?1619179010831", id:"Group_16"},
		{src:"images/Group_15_1.png?1619179010831", id:"Group_15_1"},
		{src:"images/Group_19_1.png?1619179010831", id:"Group_19_1"},
		{src:"images/Group_22.png?1619179010831", id:"Group_22"},
		{src:"images/Group_2_3.png?1619179010831", id:"Group_2_3"},
		{src:"images/Group_23.png?1619179010831", id:"Group_23"},
		{src:"images/Group_3.png?1619179010831", id:"Group_3"},
		{src:"images/Group_3_1.png?1619179010831", id:"Group_3_1"},
		{src:"images/Group_3_2.png?1619179010831", id:"Group_3_2"},
		{src:"images/Group_4.png?1619179010831", id:"Group_4"},
		{src:"images/Group_4_1.png?1619179010831", id:"Group_4_1"},
		{src:"images/Group_5.png?1619179010831", id:"Group_5"},
		{src:"images/Group_24.png?1619179010831", id:"Group_24"},
		{src:"images/Group_5_1.png?1619179010831", id:"Group_5_1"},
		{src:"images/Group_5_2.png?1619179010831", id:"Group_5_2"},
		{src:"images/Group_6.png?1619179010831", id:"Group_6"},
		{src:"images/Group_6_1.png?1619179010831", id:"Group_6_1"},
		{src:"images/Group_7.png?1619179010831", id:"Group_7"},
		{src:"images/Group_8.png?1619179010831", id:"Group_8"},
		{src:"images/Group_8_1.png?1619179010831", id:"Group_8_1"},
		{src:"images/Group_9.png?1619179010831", id:"Group_9"},
		{src:"images/Group_21.png?1619179010831", id:"Group_21"},
		{src:"images/Group_9_1.png?1619179010831", id:"Group_9_1"},
		{src:"images/Path.png?1619179010831", id:"Path"},
		{src:"images/Group_2_4.png?1619179010831", id:"Group_2_4"},
		{src:"images/Group_21_1.png?1619179010831", id:"Group_21_1"},
		{src:"images/Group_16_1.png?1619179010831", id:"Group_16_1"},
		{src:"images/PathPath.png?1619179010831", id:"PathPath"},
		{src:"images/Group_1_3.png?1619179010831", id:"Group_1_3"},
		{src:"images/Group_1_4.png?1619179010831", id:"Group_1_4"},
		{src:"images/Path_1.png?1619179010831", id:"Path_1"},
		{src:"images/Group_25.png?1619179010831", id:"Group_25"},
		{src:"images/PathPathPathPath.png?1619179010831", id:"PathPathPathPath"},
		{src:"sounds/music.mp3?1619179010831", id:"music"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['BB26D7308087DF40A3DE97C6A34F29EA'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}

p._getProjectionMatrix = function(container, totalDepth) {	var focalLength = 528.25;
	var projectionCenter = { x : lib.properties.width/2, y : lib.properties.height/2 };
	var scale = (totalDepth + focalLength)/focalLength;
	var scaleMat = new createjs.Matrix2D;
	scaleMat.a = 1/scale;
	scaleMat.d = 1/scale;
	var projMat = new createjs.Matrix2D;
	projMat.tx = -projectionCenter.x;
	projMat.ty = -projectionCenter.y;
	projMat = projMat.prependMatrix(scaleMat);
	projMat.tx += projectionCenter.x;
	projMat.ty += projectionCenter.y;
	return projMat;
}
p._handleTick = function(event) {
	var cameraInstance = exportRoot.___camera___instance;
	if(cameraInstance !== undefined && cameraInstance.pinToObject !== undefined)
	{
		cameraInstance.x = cameraInstance.pinToObject.x + cameraInstance.pinToObject.pinOffsetX;
		cameraInstance.y = cameraInstance.pinToObject.y + cameraInstance.pinToObject.pinOffsetY;
		if(cameraInstance.pinToObject.parent !== undefined && cameraInstance.pinToObject.parent.depth !== undefined)
		cameraInstance.depth = cameraInstance.pinToObject.parent.depth + cameraInstance.pinToObject.pinOffsetZ;
	}
	stage._applyLayerZDepth(exportRoot);
}
p._applyLayerZDepth = function(parent)
{
	var cameraInstance = parent.___camera___instance;
	var focalLength = 528.25;
	var projectionCenter = { 'x' : 0, 'y' : 0};
	if(parent === exportRoot)
	{
		var stageCenter = { 'x' : lib.properties.width/2, 'y' : lib.properties.height/2 };
		projectionCenter.x = stageCenter.x;
		projectionCenter.y = stageCenter.y;
	}
	for(child in parent.children)
	{
		var layerObj = parent.children[child];
		if(layerObj == cameraInstance)
			continue;
		stage._applyLayerZDepth(layerObj, cameraInstance);
		if(layerObj.layerDepth === undefined)
			continue;
		if(layerObj.currentFrame != layerObj.parent.currentFrame)
		{
			layerObj.gotoAndPlay(layerObj.parent.currentFrame);
		}
		var matToApply = new createjs.Matrix2D;
		var cameraMat = new createjs.Matrix2D;
		var totalDepth = layerObj.layerDepth ? layerObj.layerDepth : 0;
		var cameraDepth = 0;
		if(cameraInstance && !layerObj.isAttachedToCamera)
		{
			var mat = cameraInstance.getMatrix();
			mat.tx -= projectionCenter.x;
			mat.ty -= projectionCenter.y;
			cameraMat = mat.invert();
			cameraMat.prependTransform(projectionCenter.x, projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			cameraMat.appendTransform(-projectionCenter.x, -projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			if(cameraInstance.depth)
				cameraDepth = cameraInstance.depth;
		}
		if(layerObj.depth)
		{
			totalDepth = layerObj.depth;
		}
		//Offset by camera depth
		totalDepth -= cameraDepth;
		if(totalDepth < -focalLength)
		{
			matToApply.a = 0;
			matToApply.d = 0;
		}
		else
		{
			if(layerObj.layerDepth)
			{
				var sizeLockedMat = stage._getProjectionMatrix(parent, layerObj.layerDepth);
				if(sizeLockedMat)
				{
					sizeLockedMat.invert();
					matToApply.prependMatrix(sizeLockedMat);
				}
			}
			matToApply.prependMatrix(cameraMat);
			var projMat = stage._getProjectionMatrix(parent, totalDepth);
			if(projMat)
			{
				matToApply.prependMatrix(projMat);
			}
		}
		layerObj.transformMatrix = matToApply;
	}
}
an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}

// Virtual camera API : 

an.VirtualCamera = new function() {
var _camera = new Object();
function VC(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined ) {
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VC.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VC.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VC.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VC.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VC.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VC.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VC.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VC.prototype.resetZoom = function() {
	this.setZoom(100);
};

VC.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VC.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VC.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VC.prototype.resetRotation = function() {
	this.setRotation(0);
};

VC.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VC.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VC.prototype.getZDepth = function() {
	return this.camera.depth;
}
VC.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VC.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VC.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
	if(this.camera.pinToObject != undefined) {
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
	}
};

VC.prototype.unpinCamera = function() {
	this.camera.pinToObject = undefined;
};
VC.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VC(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
}


// Layer depth API : 

an.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;