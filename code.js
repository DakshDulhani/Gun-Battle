var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["0692b3be-7a2a-4193-ba88-a0ba2717c79f","37a36ac7-96c5-4449-a87b-4d156f2258c3","0800d5a1-a3fe-45da-8ed7-5a239ef26542","b39f75aa-e162-48a0-90d3-dd4c9e4f7baa","3d82f016-460d-4668-a0f9-0cfe34502d4e","6b8317d0-504a-4372-aeee-173bc8ddc381","d8c8e52b-6d97-4013-929e-55a2ec6be15f","01eaf5db-d116-491a-91b8-2241062a1eca","3ca0999a-8afc-482c-b896-9346a8f915e5","eaf90bc0-6725-4d7c-97eb-ab8fc4c5fa97","0a2879e6-7134-4f3b-b598-f1f042b21cf1","6c7a3059-3d2e-46fa-831f-06b158626d16","bbfd6c08-fb5e-42e6-a249-fd5e9d096676","dfe826ee-3b76-41da-aec8-7c7d07ffc45e","dacf1748-d1cb-49ad-a702-9421e6676f77","c2f469c0-52b2-45ab-8cbb-19838096ab84","ff791be7-0055-4245-a8b8-855c1aac7ab5","41dba1ea-3524-418b-bdd3-b1325e731123","91f3d1ca-cca3-4468-adcc-669e16788d14"],"propsByKey":{"0692b3be-7a2a-4193-ba88-a0ba2717c79f":{"name":"steve body","sourceUrl":null,"frameSize":{"x":55,"y":167},"frameCount":1,"looping":true,"frameDelay":12,"version":"HTwrxWEvCcQH2CvZhVdPRd_UpNkBwTit","loadedFromSource":true,"saved":true,"sourceSize":{"x":55,"y":167},"rootRelativePath":"assets/0692b3be-7a2a-4193-ba88-a0ba2717c79f.png"},"37a36ac7-96c5-4449-a87b-4d156f2258c3":{"name":"steve body_copy_1","sourceUrl":null,"frameSize":{"x":55,"y":167},"frameCount":1,"looping":true,"frameDelay":12,"version":"pM4Jcbu_.AgnB2Ze3IZo_iebNrznrMAu","loadedFromSource":true,"saved":true,"sourceSize":{"x":55,"y":167},"rootRelativePath":"assets/37a36ac7-96c5-4449-a87b-4d156f2258c3.png"},"0800d5a1-a3fe-45da-8ed7-5a239ef26542":{"name":"steve's arm","sourceUrl":null,"frameSize":{"x":65,"y":148},"frameCount":1,"looping":true,"frameDelay":12,"version":"b43mWB2VCS.rJLkBLSbZktlxzERKXp9o","loadedFromSource":true,"saved":true,"sourceSize":{"x":65,"y":148},"rootRelativePath":"assets/0800d5a1-a3fe-45da-8ed7-5a239ef26542.png"},"b39f75aa-e162-48a0-90d3-dd4c9e4f7baa":{"name":"steve's arm_copy_1","sourceUrl":null,"frameSize":{"x":65,"y":148},"frameCount":1,"looping":true,"frameDelay":12,"version":"FKqSwA2yCwDWlOf3rv3y7s8TVw0CbXWY","loadedFromSource":true,"saved":true,"sourceSize":{"x":65,"y":148},"rootRelativePath":"assets/b39f75aa-e162-48a0-90d3-dd4c9e4f7baa.png"},"3d82f016-460d-4668-a0f9-0cfe34502d4e":{"name":"explode","sourceUrl":null,"frameSize":{"x":39,"y":35},"frameCount":7,"looping":true,"frameDelay":1,"version":"NEP9wSD0Pql.RJRe_sihGxsKfoumZn5I","loadedFromSource":true,"saved":true,"sourceSize":{"x":117,"y":105},"rootRelativePath":"assets/3d82f016-460d-4668-a0f9-0cfe34502d4e.png"},"6b8317d0-504a-4372-aeee-173bc8ddc381":{"name":"bullet","sourceUrl":null,"frameSize":{"x":100,"y":2},"frameCount":1,"looping":true,"frameDelay":12,"version":"SfHPVOfU.4EE1q69.M6yLDUqB4bQaOu8","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":2},"rootRelativePath":"assets/6b8317d0-504a-4372-aeee-173bc8ddc381.png"},"d8c8e52b-6d97-4013-929e-55a2ec6be15f":{"name":"town.png_1","sourceUrl":"assets/v3/animations/_WeM6lZ4AgceF0_fL0GU8PVU5B2Zgdd8mkkvCJ18FPU/d8c8e52b-6d97-4013-929e-55a2ec6be15f.png","frameSize":{"x":714,"y":339},"frameCount":1,"looping":true,"frameDelay":4,"version":"AVzYOuDwxbZ9KZvq0LLEFOUDzPyPxewB","loadedFromSource":true,"saved":true,"sourceSize":{"x":714,"y":339},"rootRelativePath":"assets/v3/animations/_WeM6lZ4AgceF0_fL0GU8PVU5B2Zgdd8mkkvCJ18FPU/d8c8e52b-6d97-4013-929e-55a2ec6be15f.png"},"01eaf5db-d116-491a-91b8-2241062a1eca":{"name":"t.png_1","sourceUrl":"assets/v3/animations/_WeM6lZ4AgceF0_fL0GU8PVU5B2Zgdd8mkkvCJ18FPU/01eaf5db-d116-491a-91b8-2241062a1eca.png","frameSize":{"x":411,"y":318},"frameCount":1,"looping":true,"frameDelay":4,"version":"VefyfXCnlTn4zugtedWULn_ovCcbOlqQ","loadedFromSource":true,"saved":true,"sourceSize":{"x":411,"y":318},"rootRelativePath":"assets/v3/animations/_WeM6lZ4AgceF0_fL0GU8PVU5B2Zgdd8mkkvCJ18FPU/01eaf5db-d116-491a-91b8-2241062a1eca.png"},"3ca0999a-8afc-482c-b896-9346a8f915e5":{"name":"rifle","sourceUrl":null,"frameSize":{"x":70,"y":286},"frameCount":1,"looping":true,"frameDelay":12,"version":"yo4_beXDY6I07HVNL4CzifpPB9JGZza5","loadedFromSource":true,"saved":true,"sourceSize":{"x":70,"y":286},"rootRelativePath":"assets/3ca0999a-8afc-482c-b896-9346a8f915e5.png"},"eaf90bc0-6725-4d7c-97eb-ab8fc4c5fa97":{"name":"rifle_copy_1","sourceUrl":null,"frameSize":{"x":70,"y":286},"frameCount":1,"looping":true,"frameDelay":12,"version":"uVza90DbOuInDnvj8rDHFJh0RhATjL4w","loadedFromSource":true,"saved":true,"sourceSize":{"x":70,"y":286},"rootRelativePath":"assets/eaf90bc0-6725-4d7c-97eb-ab8fc4c5fa97.png"},"0a2879e6-7134-4f3b-b598-f1f042b21cf1":{"name":"p1 select","sourceUrl":null,"frameSize":{"x":60,"y":60},"frameCount":1,"looping":true,"frameDelay":12,"version":"TFnfp1pW2qZQiMJNlY.TzeMfZpYVK7ZD","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":60},"rootRelativePath":"assets/0a2879e6-7134-4f3b-b598-f1f042b21cf1.png"},"6c7a3059-3d2e-46fa-831f-06b158626d16":{"name":"p2 select","sourceUrl":null,"frameSize":{"x":60,"y":60},"frameCount":1,"looping":true,"frameDelay":12,"version":"IIba_kaiatRKdM.RPaQVzJI3dHSQSs3K","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":60},"rootRelativePath":"assets/6c7a3059-3d2e-46fa-831f-06b158626d16.png"},"bbfd6c08-fb5e-42e6-a249-fd5e9d096676":{"name":"gunz.png_1","sourceUrl":null,"frameSize":{"x":544,"y":543},"frameCount":1,"looping":true,"frameDelay":12,"version":"Zimr0M6C2wvz2rEFIGg3oypELoe5AJ5E","loadedFromSource":true,"saved":true,"sourceSize":{"x":544,"y":543},"rootRelativePath":"assets/bbfd6c08-fb5e-42e6-a249-fd5e9d096676.png"},"dfe826ee-3b76-41da-aec8-7c7d07ffc45e":{"name":"big gun","sourceUrl":null,"frameSize":{"x":79,"y":267},"frameCount":1,"looping":true,"frameDelay":12,"version":"nvrk4dZ6aIJddmgWFyE_Fa9FMyPc_yAX","loadedFromSource":true,"saved":true,"sourceSize":{"x":79,"y":267},"rootRelativePath":"assets/dfe826ee-3b76-41da-aec8-7c7d07ffc45e.png"},"dacf1748-d1cb-49ad-a702-9421e6676f77":{"name":"big gun_copy_1","sourceUrl":null,"frameSize":{"x":79,"y":267},"frameCount":1,"looping":true,"frameDelay":12,"version":"0XGcOPIw9GFJ9kBeEtAmM35RTKW.okNL","loadedFromSource":true,"saved":true,"sourceSize":{"x":79,"y":267},"rootRelativePath":"assets/dacf1748-d1cb-49ad-a702-9421e6676f77.png"},"c2f469c0-52b2-45ab-8cbb-19838096ab84":{"name":"shotgun","sourceUrl":null,"frameSize":{"x":69,"y":283},"frameCount":1,"looping":true,"frameDelay":12,"version":"iIjRfHoqGbLNKd4O6PMYm1hwNQtCyX4M","loadedFromSource":true,"saved":true,"sourceSize":{"x":69,"y":283},"rootRelativePath":"assets/c2f469c0-52b2-45ab-8cbb-19838096ab84.png"},"ff791be7-0055-4245-a8b8-855c1aac7ab5":{"name":"shotgun_copy_1","sourceUrl":null,"frameSize":{"x":69,"y":283},"frameCount":1,"looping":true,"frameDelay":12,"version":".WaMkHOzlVAdfRhJTzjx8a_iev25tDLJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":69,"y":283},"rootRelativePath":"assets/ff791be7-0055-4245-a8b8-855c1aac7ab5.png"},"41dba1ea-3524-418b-bdd3-b1325e731123":{"name":"up","sourceUrl":null,"frameSize":{"x":3,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"dcw4jInRWY6DqLMi0fCG0H0VIjT9yYNS","loadedFromSource":true,"saved":true,"sourceSize":{"x":3,"y":100},"rootRelativePath":"assets/41dba1ea-3524-418b-bdd3-b1325e731123.png"},"91f3d1ca-cca3-4468-adcc-669e16788d14":{"name":"left","sourceUrl":null,"frameSize":{"x":100,"y":3},"frameCount":1,"looping":true,"frameDelay":12,"version":"bPAjlpPuQauKj5KJt4TDnRC0IJ9EAoi2","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":3},"rootRelativePath":"assets/91f3d1ca-cca3-4468-adcc-669e16788d14.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

playSound("assets/mii-song.mp3", true);
var back = createSprite(200, 200);
back.setAnimation("town.png_1");
back.scale = 3;
var p1 = createSprite(50, 200);
p1.setAnimation("steve body");
p1.scale = 0.75;
var a1 = createSprite(48, 202);
a1.setAnimation("steve's arm");
a1.scale = 0.45;
var armr = 0;
var armr2 = 0;
var p2 = createSprite(350, 200);
p2.setAnimation("steve body_copy_1");
p2.scale = 0.75;
var a2 = createSprite(348, 202);
a2.setAnimation("steve's arm_copy_1");
a2.scale = 0.45;
var armr = 0;
var p2e = createSprite(200, 200);
p2e.setAnimation("explode");
p2e.visible = false;
var box = createSprite(200, 200);
box.setAnimation("gunz.png_1");
box.scale = 0.8;
box.visible = false;
var p1select = createSprite(200, 75);
p1select.setAnimation("p1 select");
p1select.visible = false;
var p2select = createSprite(200, 240);
p2select.setAnimation("p2 select");
p2select.visible = false;
var p1bullets = 6;
var p2bullets = 6;
var p1life = 200;
var p2life = 200;
var p1gun = 0;
var p2gun = 0;
var p1wait = 0;
var p2wait = 0;
var pause = 0;
var appear = 0;
var yoda = 0;
var p1lards = createGroup();
var p2lards = createGroup();
function setup(){
createCanvas (1000,800)  
}
function draw() {
  background("black");
  drawSprites();
  rotatingarmP1();
  armpositionP1();
  damage();
  guns();
  stroke("black");
  fill("white");
  strokeWeight(5);
  textSize(20);
  text("BULLETS", p1.x - 20, p1.y + 100);
  text(p1bullets, p1.x - 20, p1.y + 125);
  text("BULLETS", p2.x - 20, p2.y + 100);
  text(p2bullets, p2.x - 20, p2.y + 125);
  stroke("black");
  fill("darkred");
  strokeWeight(5);
  textSize(30);
  textFont("impact");
  text(p2life, p2.x - 20, p2.y - 100);
  text(p1life, p1.x - 20, p1.y - 100);
}
function guns() {
  for (var bigdoo = 0; bigdoo < p1lards.length; bigdoo++) {
    if (p1lards[bigdoo].isTouching(p2)) {
      playSound("assets/category_human/character_yury_grunt_2.mp3", false);
      p2.y = p2.y - 1;
      p2.velocityX = randomNumber(5, 8);
      p2.velocityY = randomNumber(-2, -15);
      p1lards[bigdoo].destroy();
      if (p1gun == 0) {
        p2life = p2life - randomNumber(33, 99);
      } else if ((p1gun == 1)) {
        p2life = p2life - randomNumber(50, 175);
      } else {
        p2life = p2life - randomNumber(40, 75);
      }
    }
  }
  for (var bigdoo2 = 0; bigdoo2 < p2lards.length; bigdoo2++) {
    if (p2lards[bigdoo2].isTouching(p1)) {
      playSound("assets/category_human/character_yury_grunt_2.mp3", false);
      p1.y = p1.y - 1;
      p1.velocityX = randomNumber(-8, -5);
      p1.velocityY = randomNumber(-2, -15);
      p2lards[bigdoo2].destroy();
      if (p2gun == 0) {
        p1life = p1life - randomNumber(33, 99);
      } else if ((p2gun == 1)) {
        p1life = p1life - randomNumber(50, 175);
      } else {
        p1life = p1life - randomNumber(40, 75);
      }
    }
  }
  if (keyWentDown("j")) {
    if (p2life > 0) {
      if (p2bullets > 0) {
        if (p2gun == 1) {
          if (p2wait == 0) {
            var hiha = createSprite(p2.x, p2.y);
            hiha.setAnimation("bullet");
            hiha.setSpeedAndDirection(-75, armr2 - 90);
            p2lards.add(hiha);
            p2bullets = p2bullets - 1;
            hiha.rotation = armr2 - 90;
            playSound("assets/category_explosion/8bit_explosion.mp3", false);
            var explode = createSprite(p2.x, p2.y);
            explode.setAnimation("explode");
            explode.lifetime = 7;
            p2wait = 35;
          }
        }
        if (p2gun == 0) {
          var hiha = createSprite(p2.x, p2.y);
          hiha.setAnimation("bullet");
          hiha.setSpeedAndDirection(-50, armr2 - 90);
          p2lards.add(hiha);
          p2bullets = p2bullets - 1;
          hiha.rotation = armr2 - 90;
          playSound("assets/category_explosion/8bit_explosion.mp3", false);
          var explode = createSprite(p2.x, p2.y);
          explode.setAnimation("explode");
          explode.lifetime = 7;
        }
        if (p2gun == 3) {
          if (p2wait == 0) {
            var hiha = createSprite(p2.x, p2.y);
            hiha.setAnimation("bullet");
            hiha.setSpeedAndDirection(-50, armr2 - randomNumber(75, 105));
            p2lards.add(hiha);
            hiha.rotation = armr2 - 90;
            var hiha2 = createSprite(p2.x, p2.y);
            hiha2.setAnimation("bullet");
            hiha2.setSpeedAndDirection(-50, armr2 - randomNumber(75, 105));
            p2lards.add(hiha2);
            hiha2.rotation = armr2 - 90;
            var hiha3 = createSprite(p2.x, p2.y);
            hiha3.rotation = armr2 - 90;
            hiha3.setAnimation("bullet");
            hiha3.setSpeedAndDirection(-50, armr2 - randomNumber(75, 105));
            p2lards.add(hiha3);
            hiha3.rotation = armr2 - 90;
            playSound("assets/category_explosion/8bit_explosion.mp3", false);
            var explode = createSprite(p2.x, p2.y);
            explode.setAnimation("explode");
            explode.lifetime = 7;
            p2wait = 25;
            p2bullets = p2bullets - 3;
          }
        }
      }
    }
  }
  
  
  if (keyWentDown("f")) {
    if (p1life > 0) {
      if (p1bullets > 0) {
        if (p1gun == 1) {
          if (p1wait == 0) {
            var ddd = createSprite(a1.x, a1.y);
            ddd.setAnimation("bullet");
            ddd.setSpeedAndDirection(-75, armr - 90);
            p1lards.add(ddd);
            p1bullets = p1bullets - 1;
            ddd.rotation = armr - 90;
            playSound("assets/category_explosion/8bit_explosion.mp3", false);
            var explode = createSprite(p1.x, p1.y);
            explode.setAnimation("explode");
            explode.lifetime = 7;
            p1wait = 35;
          }
        }
        if (p1gun == 0) {
          var ddd = createSprite(a1.x, a1.y);
          ddd.setAnimation("bullet");
          ddd.setSpeedAndDirection(-50, armr - 90);
          p1lards.add(ddd);
          p1bullets = p1bullets - 1;
          ddd.rotation = armr - 90;
          playSound("assets/category_explosion/8bit_explosion.mp3", false);
          var explode = createSprite(p1.x, p1.y);
          explode.setAnimation("explode");
          explode.lifetime = 7;
        }
        if (p1gun == 3) {
          if (p1wait == 0) {
            var ddd = createSprite(a1.x, a1.y);
            ddd.setAnimation("bullet");
            ddd.setSpeedAndDirection(-50, armr - randomNumber(75, 105));
            p1lards.add(ddd);
            ddd.rotation = armr - 90;
            var dd = createSprite(200, 200);
            dd.setAnimation("bullet");
            dd.setSpeedAndDirection(-50, armr - randomNumber(75, 105));
            p1lards.add(dd);
            dd.rotation = armr - 90;
            dd.x = a1.x;
            dd.y = a1.y;
            var d = createSprite(200, 200);
            d.setAnimation("bullet");
            d.setSpeedAndDirection(-50, armr - randomNumber(75, 105));
            p1lards.add(d);
            d.rotation = armr - 90;
            d.x = a1.x;
            d.y = a1.y;
            playSound("assets/category_explosion/8bit_explosion.mp3", false);
            var explode = createSprite(p1.x, p1.y);
            explode.setAnimation("explode");
            explode.lifetime = 7;
            
            
            
            p1wait = 25;
            p1bullets = p1bullets - 3;
          }
        }
      }
    }
  }
  if (p1gun == 2) {
    if (p1life > 0) {
      if (keyDown("f")) {
        if (p1wait == 0 && p1bullets > 0) {
          var ddd = createSprite(200, 200);
          ddd.setAnimation("bullet");
          ddd.setSpeedAndDirection(-65, armr - randomNumber(75, 105));
          p1lards.add(ddd);
          p1bullets = p1bullets - 1;
          ddd.rotation = armr - 90;
          playSound("assets/category_explosion/8bit_explosion.mp3", false);
          ddd.x = a1.x;
          ddd.y = a1.y;
          var explode = createSprite(p1.x, p1.y);
          explode.setAnimation("explode");
          explode.lifetime = 7;
          p1wait = 5;
          playSound("assets/category_explosion/8bit_explosion.mp3", false);
        }
      }
    }
  }
  if (p2gun == 2) {
    if (p2life > 0) {
      if (keyDown("j")) {
        if (p2wait == 0 && p2bullets > 0) {
          var hiha = createSprite(p2.x, p2.y);
          hiha.setAnimation("bullet");
          hiha.setSpeedAndDirection(-65, armr2 - randomNumber(75, 105));
          p2lards.add(hiha);
          hiha.rotation = armr2 - 90;
          playSound("assets/category_explosion/8bit_explosion.mp3", false);
          p2bullets = p2bullets - 1;
          p2wait = 5;
        }
      }
    }
  }
  if (p2gun == 3) {
    if (p2wait < 15) {
      p2e.visible = false;
    }
  }
  if (p2gun == 2) {
    if (p2wait == 0) {
      p2e.visible = false;
    }
  }
  if (pause == 0) {
    if (appear == 10) {
      pause = 1;
      box.visible = true;
      
      p1life = 0;
      p2life = 0;
      p1.x = 50;
      p2.x = 350;
      back.tint = 0;
      p1.rotation = 0;
      p2.rotation = 0;
      p1select.visible = true;
      p2select.visible = true;
    }
    if (keyDown("b")) {
      if (appear < 10) {
        appear = appear + 1;
      }
    }
  }
  if (pause == 1) {
    yoda = 0;
    if (keyWentDown("f")) {
      if (p1gun == 3) {
        p1gun = -1;
      }
      p1gun = p1gun + 1;
    }
    if (keyWentDown("j")) {
      if (p2gun == 3) {
        p2gun = -1;
      }
      p2gun = p2gun + 1;
    }
    if (p1gun == 0) {
      p1bullets = 6;
      a1.setAnimation("steve's arm");
      p1select.x = 120;
    }
    if (p1gun == 1) {
      p1bullets = 7;
      a1.setAnimation("rifle");
      p1select.x = 40;
    }
    if (p1gun == 2) {
      a1.setAnimation("big gun");
      p1select.x = 200;
      p1bullets = 20;
    }
    if (p1gun == 3) {
      a1.setAnimation("shotgun");
      p1select.x = 315;
      p1bullets = 15;
    }
    if (p2gun == 0) {
      p2bullets = 6;
      a2.setAnimation("steve's arm_copy_1");
      p2select.x = 120;
    }
    if (p2gun == 1) {
      p2bullets = 7;
      a2.setAnimation("rifle_copy_1");
      p2select.x = 40;
    }
    if (p2gun == 2) {
      p2bullets = 20;
      a2.setAnimation("big gun_copy_1");
      p2select.x = 200;
    }
    if (p2gun == 3) {
      p2bullets = 15;
      a2.setAnimation("shotgun_copy_1");
      p2select.x = 315;
    }
    if (appear == 0) {
      p1select.visible = false;
      p2select.visible = false;
      pause = 0;
      box.visible = false;
      p1life = 200;
      p2life = 200;
      p1.x = 50;
      p2.x = 350;
      back.tint = 0;
      p1.rotation = 0;
      p2.rotation = 0;
    }
    if (keyDown("b")) {
      if (appear > 0) {
        appear = appear - 1;
      }
    }
  }
}
function damage() {
  if (yoda == 1) {
    playSound("assets/yoda-dying.mp3", false);
  }
  if (p1bullets == 0 && p2bullets == 0) {
    if (p1life > 0 && p2life > 0) {
    
      
      
      if (keyWentDown("t")) {
        if (p1gun == 0) {
          p1bullets = 6;
        }
        if (p1gun == 1) {
          p1bullets = 7;
        }
        if (p1gun == 2) {
          p1bullets = 20;
        }
        if (p1gun == 3) {
          p1bullets = 15;
        }
        if (p2gun == 0) {
          p2bullets = 6;
        }
        if (p2gun == 1) {
          p2bullets = 7;
        }
        if (p2gun == 2) {
          p2bullets = 20;
        }
        if (p2gun == 3) {
          p2bullets = 15;
        }
        
        p1life = 200;
        p2life = 200;
        p1.x = 50;
        p2.x = 350;
      }
    }
  }
  camera.zoom = 350 / (Math.abs(p1.x) + Math.abs(p2.x));
  camera.x = 0.5 * (p1.x + p2.x);
  camera.y = 0.5 * (p1.y + p2.y);
  if (p2life <= 1) {
    yoda = yoda + 1;
    p2life = 0;
    p2.rotation = 90;
    back.tint = 1.6;
    if (keyWentDown("t")) {
      yoda = 0;
      if (p1gun == 0) {
        p1bullets = 6;
      }
      if (p1gun == 1) {
        p1bullets = 7;
      }
      if (p1gun == 2) {
        p1bullets = 20;
      }
      if (p1gun == 3) {
        p1bullets = 15;
      }
      if (p2gun == 0) {
        p2bullets = 6;
      }
      if (p2gun == 1) {
        p2bullets = 7;
      }
      if (p2gun == 2) {
        p2bullets = 20;
      }
      if (p2gun == 3) {
        p2bullets = 15;
      }
      
      p1life = 200;
      p2life = 200;
      p1.x = 50;
      p2.x = 350;
      back.tint = 0;
      p1.rotation = 0;
      p2.rotation = 0;
    }
  }
  if (p1life <= 0) {
    yoda = yoda + 1;
    p1life = 0;
    p1.rotation = 90;
    back.tint = 1.6;
    if (keyWentDown("t")) {
      yoda = 0;
      if (p1gun == 0) {
        p1bullets = 6;
      }
      if (p1gun == 1) {
        p1bullets = 7;
      }
      if (p1gun == 2) {
        p1bullets = 20;
      }
      if (p1gun == 3) {
        p1bullets = 15;
      }
      
      if (p2gun == 0) {
        p2bullets = 6;
      }
      if (p2gun == 1) {
        p2bullets = 7;
      }
      if (p2gun == 2) {
        p2bullets = 20;
      }
      if (p2gun == 3) {
        p2bullets = 15;
      }
      p1life = 200;
      p2life = 200;
      p1.x = 50;
      p2.x = 350;
      back.tint = 0;
      p2.rotation = 0;
      p1.rotation = 0;
    }
  }
  if (p2.velocityX > 0) {
    p2.velocityX = p2.velocityX - 0.5;
  }
  if (p1.velocityX > 0) {
    p1.velocityX = p1.velocityX + 0.5;
  }
  if (p2.y >= 200) {
    p2.velocityY = 0;
    p2.velocityX = 0;
  }
  if (p1.y >= 200) {
    p1.velocityY = 0;
    p1.velocityX = 0;
  }
  if (p2.y < 200) {
    p2.velocityY = p2.velocityY + 0.5;
  }
  if (p1.y < 200) {
    p1.velocityY = p1.velocityY + 0.5;
  }
  a2.x = p2.x - 2;
  a2.y = p2.y + 2;
  a1.x = p1.x - 2;
  a1.y = p1.y + 2;
  //a
  //a
  // 
  //aa
  //aa
  //aa
  // 
  // 
}
function armpositionP1() {
  if (p1wait > 0) {
    p1wait = p1wait - 1;
  }
  if (p2wait > 0) {
    p2wait = p2wait - 1;
  }
  p2e.setAnimation("explode");
  p2e.x = a2.x;
  p2e.y = a2.y;
}
// 
// 
function rotatingarmP1() {
  armr = a1.rotation;
  armr2 = a2.rotation;
  if (keyWentUp("w")) {
    a1.rotationSpeed = 0;
  }
  if (keyWentUp("s")) {
    a1.rotationSpeed = 0;
  }
  if (keyWentUp("o")) {
    a2.rotationSpeed = 0;
  }
  if (keyWentUp("l")) {
    a2.rotationSpeed = 0;
  }
  if (armr >= -220) {
    a1.rotationSpeed = 0;
  }
  if (armr <= 40) {
    a1.rotationSpeed = 0;
  }
  if (armr2 >= 220) {
    a2.rotationSpeed = 0;
  }
  if (armr2 <= -40) {
    a2.rotationSpeed = 0;
  }
  if (keyDown("w")) {
    if (armr > -220) {
      if (p1gun == 0) {
        a1.rotationSpeed = -10;
      }
      if (p1gun == 1) {
        a1.rotationSpeed = -5;
      }
      if (p1gun == 3) {
        //shotgun
        a1.rotationSpeed = -7;
      }
      if (p1gun == 2) {
        a1.rotationSpeed = -3;
      }
    }
  }
  if (keyDown("s")) {
    if (armr < 40) {
      if (p1gun == 0) {
        a1.rotationSpeed = 10;
      }
      if (p1gun == 1) {
        a1.rotationSpeed = 5;
      }
      if (p1gun == 2) {
        a1.rotationSpeed = 3;
      }
      if (p1gun == 3) {
        //shotgun
        a1.rotationSpeed = 7;
      }
    }
  }
  if (keyDown("o")) {
    if (armr2 < 220) {
      if (p2gun == 0) {
        a2.rotationSpeed = 10;
      }
      if (p2gun == 1) {
        a2.rotationSpeed = 5;
      }
      if (p2gun == 3) {
        //shotgun
        a2.rotationSpeed = 7;
      }
      if (p2gun == 2) {
        //shotgun
        a2.rotationSpeed = 3;
      }
    }
  }
  if (keyDown("l")) {
    if (armr2 > -40) {
      if (p2gun == 0) {
        a2.rotationSpeed = -10;
      }
      if (p2gun == 1) {
        a2.rotationSpeed = -5;
      }
      if (p2gun == 3) {
        //shotgun
        a2.rotationSpeed = -7;
      }
      if (p2gun == 2) {
        //shotgun
        a2.rotationSpeed = -3;
      }
    }
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
