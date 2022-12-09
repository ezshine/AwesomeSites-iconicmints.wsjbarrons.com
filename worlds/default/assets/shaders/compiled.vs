{@}8x8.fs{@}#require(luma.fs)

float dither8x8(vec2 position, float brightness) {
  int x = int(mod(position.x, 8.0));
  int y = int(mod(position.y, 8.0));
  int index = x + y * 8;
  float limit = 0.0;

  if (x < 8) {
    if (index == 0) limit = 0.015625;
    if (index == 1) limit = 0.515625;
    if (index == 2) limit = 0.140625;
    if (index == 3) limit = 0.640625;
    if (index == 4) limit = 0.046875;
    if (index == 5) limit = 0.546875;
    if (index == 6) limit = 0.171875;
    if (index == 7) limit = 0.671875;
    if (index == 8) limit = 0.765625;
    if (index == 9) limit = 0.265625;
    if (index == 10) limit = 0.890625;
    if (index == 11) limit = 0.390625;
    if (index == 12) limit = 0.796875;
    if (index == 13) limit = 0.296875;
    if (index == 14) limit = 0.921875;
    if (index == 15) limit = 0.421875;
    if (index == 16) limit = 0.203125;
    if (index == 17) limit = 0.703125;
    if (index == 18) limit = 0.078125;
    if (index == 19) limit = 0.578125;
    if (index == 20) limit = 0.234375;
    if (index == 21) limit = 0.734375;
    if (index == 22) limit = 0.109375;
    if (index == 23) limit = 0.609375;
    if (index == 24) limit = 0.953125;
    if (index == 25) limit = 0.453125;
    if (index == 26) limit = 0.828125;
    if (index == 27) limit = 0.328125;
    if (index == 28) limit = 0.984375;
    if (index == 29) limit = 0.484375;
    if (index == 30) limit = 0.859375;
    if (index == 31) limit = 0.359375;
    if (index == 32) limit = 0.0625;
    if (index == 33) limit = 0.5625;
    if (index == 34) limit = 0.1875;
    if (index == 35) limit = 0.6875;
    if (index == 36) limit = 0.03125;
    if (index == 37) limit = 0.53125;
    if (index == 38) limit = 0.15625;
    if (index == 39) limit = 0.65625;
    if (index == 40) limit = 0.8125;
    if (index == 41) limit = 0.3125;
    if (index == 42) limit = 0.9375;
    if (index == 43) limit = 0.4375;
    if (index == 44) limit = 0.78125;
    if (index == 45) limit = 0.28125;
    if (index == 46) limit = 0.90625;
    if (index == 47) limit = 0.40625;
    if (index == 48) limit = 0.25;
    if (index == 49) limit = 0.75;
    if (index == 50) limit = 0.125;
    if (index == 51) limit = 0.625;
    if (index == 52) limit = 0.21875;
    if (index == 53) limit = 0.71875;
    if (index == 54) limit = 0.09375;
    if (index == 55) limit = 0.59375;
    if (index == 56) limit = 1.0;
    if (index == 57) limit = 0.5;
    if (index == 58) limit = 0.875;
    if (index == 59) limit = 0.375;
    if (index == 60) limit = 0.96875;
    if (index == 61) limit = 0.46875;
    if (index == 62) limit = 0.84375;
    if (index == 63) limit = 0.34375;
  }

  return brightness < limit ? 0.0 : 1.0;
}

vec3 dither8x8(vec2 position, vec3 color) {
  return color * dither8x8(position, luma(color));
}

vec4 dither8x8(vec2 position, vec4 color) {
  return vec4(color.rgb * dither8x8(position, luma(color)), 1.0);
}
{@}EndPortal.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;

#!VARYINGS
varying vec2 vUv;
varying vec3 vPos;
varying vec3 vViewDir;
varying vec3 vNormal;
varying vec3 vWorldPos;

#!SHADER: Vertex
void main() {
    vPos = position;
    vUv = uv;
    vNormal = normalize(normalMatrix * normal);
    vViewDir = -vec3(modelViewMatrix * vec4(position, 1.0));
    vec4 worldPos = modelMatrix * vec4(position, 1.0);
    vWorldPos = worldPos.xyz;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: Fragment
#require(fresnel.glsl)
#require(range.glsl)
#require(simplenoise.glsl)
#require(rgb2hsv.fs)
#require(transformUV.glsl)

void main() {
    float fresnel = getFresnel(vNormal, vViewDir, 1.0);

    float waves = 0.5+sin(fresnel*10.0+time*0.5)*0.5;
    waves = mix(waves, fresnel, smoothstep(0.1, 1.0, fresnel));
    waves += cnoise(vPos*1.5+time*0.25) * 0.2;

    
    vec3 color = rgb2hsv(vec3(1.0));
    color.x = 0.6 + waves*0.1 + fresnel*0.1;
    color.y = 0.6;
    color.z = 1.0;
    color = hsv2rgb(color);


    vec2 fieldUV = scaleUV(vUv, vec2(0.5));
    fieldUV.x = 1.0 - fieldUV.x;
    fieldUV -= cnoise(vPos*5.5+time*0.2) * 0.005;
    vec3 field = texture2D(tMap, fieldUV).rgb;
    color = field + color * 0.5;

    color = mix(color, vec3(1.0), smoothstep(0.3+sin(time*1.5) * 0.3, 1.0, fresnel));

    color = pow(color, vec3(1.7));

    float alpha = 1.0;
    alpha = mix(alpha, waves, smoothstep(-0.2, 0.2, fresnel));
    alpha = mix(alpha, 1.0, smoothstep(0.2, 1.0, fresnel));
    alpha *= smoothstep(-3.0, 0.0, vWorldPos.y);

    gl_FragColor = vec4(color, alpha);
}{@}AvatarNameLabelsCustom.glsl{@}#!ATTRIBUTES
attribute float tIndex;

#!UNIFORMS
uniform float uSize;
uniform sampler2D tData;
uniform vec4 uQuaternion;
uniform vec3 uColor;
uniform float uAlpha;
uniform sampler2D tMap;
uniform vec2 uDistanceFade;

#!VARYINGS
varying vec3 vWorldPos;
varying vec2 vUv;
varying float vAlpha;

#!SHADER: Vertex

#require(instance.vs)
#require(range.glsl)

vec2 getPackedUV(float index) {
    float pixel = index;

    float size = uSize;
    float p0 = pixel / size;
    float y = floor(p0);
    float x = p0 - y;

    vec2 uv = vec2(0.0);
    uv.x = x;
    uv.y = y / size;
    return uv;
}

vec4 getPackedData(float offset) {
    return texture2D(tData, getPackedUV(offset));
}

vec4 extractXAxis(vec4 quat) {
    float angle = atan(quat.y, quat.w) + 3.14159265359;
    return vec4(0., sin(angle), 0., cos(angle));
}

void main() {
    vUv = uv;
    vec3 offset = getPackedData(tIndex).xyz;
    vec4 quat = uQuaternion;

    #test Platform.usingVR()
    quat = extractXAxis(quat);
    #endtest

    vec3 pos = transformPosition(position, offset, vec3(1.0), quat);
    vAlpha = uAlpha * crange(length(cameraPosition - offset), uDistanceFade.x, uDistanceFade.y, 1.0, 0.0);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);

    vWorldPos = vec3(modelMatrix * vec4(pos, 1.0));
}

#!SHADER: Fragment

#require(msdf.glsl)

void main() {
    float alpha = msdf(tMap, vUv);
    float falpha = vAlpha * alpha;

    float stayVisible = step(0.01, falpha);

    #drawbuffer Color gl_FragColor = vec4(uColor, vAlpha * alpha);
    #drawbuffer WorldPos gl_FragColor = vec4(vWorldPos, vAlpha * alpha);
    #drawbuffer Persist gl_FragColor = vec4(stayVisible);
}{@}avatarParticles.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tPos;
uniform sampler2D tLife;
uniform sampler2D tColor;

#!VARYINGS
varying float vLife;
varying vec3 vColor;

#!SHADER: Vertex

void main() {

    vec3 pos = texture2D(tPos, position.xy).xyz;
    vLife = texture2D(tLife, position.xy).x;
    vColor = texture2D(tColor, position.xy).xyz;

    gl_PointSize = 3.;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);

}

#!SHADER: Fragment

void main() {
  
    gl_FragColor = vec4(vColor, vLife);

}{@}instancedPeelTriangles.glsl{@}#!ATTRIBUTES
attribute vec3 lookup;
attribute vec4 random;

#!UNIFORMS
uniform sampler2D tPos;
uniform sampler2D tLife;
uniform float uScale;
uniform vec2 uScaleRange;
uniform vec3 color;

#!VARYINGS
varying vec2 vUv;
varying vec3 vPos;
varying vec4 vRandom;
varying float vLife;

#require(instance.vs)
#require(range.glsl)

#!SHADER: Vertex
void main() {
  vUv = uv;
  vRandom = random;
	
  float scale = uScale * crange(random.x, 0.0, 1.0, uScaleRange.x, uScaleRange.y) / 20.;

  vec3 offset = texture2D(tPos, lookup.xy).xyz;
  vLife = texture2D(tLife, lookup.xy).x;


  vec3 pos = position;
  
  float ang = time * vRandom.w * 8.;
  float c = cos(ang);
  float s = sin(ang);
  mat2 rot = mat2(c, s, -s, c);
  pos.xy = rot * pos.xy;


  ang = time * vRandom.y;
  c = cos(ang);
  s = sin(ang);
  rot = mat2(c, s, -s, c);
  pos.xz = rot * pos.xz;

  pos = transformPosition(pos, offset, scale * clamp(vLife, 0., 1.));

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);

  vPos = pos;
}


#!SHADER: Fragment
#require(rgb2hsv.fs)

void main() {   
    
    gl_FragColor.rgb = color;

    gl_FragColor.rgb = rgb2hsv(gl_FragColor.rgb);
    gl_FragColor.y = 0.95 * gl_FragColor.y + vRandom.x * 0.05;
    gl_FragColor.rgb = hsv2rgb(gl_FragColor.rgb);

    
}
{@}InfiniteSkyShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform float uHue;
uniform float uHueSpread;
uniform vec2 uBrightness;

uniform sampler2D tClouds;
uniform sampler2D tFlow;
uniform vec3 uColor0;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform vec4 uParams;

#!VARYINGS
varying vec2 vUv;
varying vec3 vPos;
varying vec3 vWorldPos;
varying float vSunGradient;
varying vec3 vColor;

#!SHADER: Vertex
void main() {
    // set camera translation to zero in the view matrix to fake an infinite skybox
    mat4 newViewMatrix = viewMatrix;
    newViewMatrix[3][0] = 0.0;
    newViewMatrix[3][1] = 0.0;
    newViewMatrix[3][2] = 0.0;
    
    gl_Position = projectionMatrix * newViewMatrix * modelMatrix * vec4(position, 1.0);
    vPos = position;
    vUv = uv * vec2(8.0, 4.0);
    vSunGradient = position.y * 0.5 - position.x - position.z * 1.2;

    vec4 worldPos = modelMatrix * vec4(position, 1.0);

    vWorldPos = worldPos.xyz;


}

#!SHADER: Fragment
#require(rotation.glsl)
#require(range.glsl)
#require(simplenoise.glsl)
#require(rgb2hsv.fs)

vec3 getFlow(sampler2D tMap, sampler2D tFlow, vec2 uv, float speed, float strength, float time, float tile, float multiplier) {
    float t = time * speed;
    float mask = fract(t);
    mask = (mask- 0.5) * 2.0;
    mask = abs(mask);
    
    vec2 flow = texture2D(tFlow, uv * tile).rg;
    flow = flow * 2.0 - 1.0;
    flow *= multiplier;

    vec3 color = texture2D(tMap, uv + flow * strength * fract(t + 0.5)).rgb;
    vec3 color2 = texture2D(tMap, uv + flow * strength * fract(t + 0.0)).rgb; 
    color = mix(color2, color, mask);
    return color;
}

void main() {
    // vec3 color = texture2D(tMap, vUv*1.5).rgb;
    // color = min(texture2D(tMap, vUv * 1.3 * 2.2 + vec2(time * 0.005, time * 0.001)).rgb, pow(color, vec3(1.2)));
    // color += pow(color, vec3(1.7)) * 5.0;
    // color *= smoothstep(-300.0, 0.0, vWorldPos.y);
    // color *= smoothstep(300.0, 0.0, vWorldPos.y);
    // color = rgb2hsv(color);

    // vec3 pos = vWorldPos.xyz * vec3(0.1,0.02,0.05) * 0.02;
    // pos += cnoise(pos * 10.0 + time * 0.0006) * 0.3;
    // color.x += uHue + sin(pos.x - pos.y * 2.0 - pos.z * 2.0 + time * 0.1) * uHueSpread;
    // color = hsv2rgb(color);
    // color *= crange(sin(-time * 2.0 + vUv.y * 14.0), -1.0, 1.0, 0.7, 1.0);
    // color = pow(color, vec3(uBrightness.x)) * uBrightness.y;

    vec2 uv = vec2(0.0, vSunGradient);
    uv.y -= 0.5;
    uv.y *= uParams.x;
    uv.y += 0.5;
    uv = rotationMatrix(sin(time) * 0.75) * uv;


    vec3 color = uColor0;
    color = mix(color, uColor1, smoothstep(-0.1, 0.1, vPos.y));
    //vColor = mix(vColor, uColor3, smoothstep(0.6, -1.5, position.z));
    //vColor = mix(vColor, uColor2, smoothstep(0.0, -2.0, position.z));
    color = mix(color, uColor2, smoothstep(-1.0, 1.5, vPos.z));
    color = mix(color, uColor3, smoothstep(0.0, -1.5, vPos.z) * 0.4);

    color = mix(color, uColor3, smoothstep(-0.7, -1.0, vPos.z));
    color = mix(color, uColor0, smoothstep(0.05, -0.4, vPos.y));
    color = mix(color, uColor0, smoothstep(0.5, -0.5, vPos.y));

    vec2 cloudsUv = vUv;
    cloudsUv.y *= 1.6;
    cloudsUv.y -= 0.0;
    cloudsUv.x += time * 0.01;
    cloudsUv.x *= 0.7;
    float clouds = getFlow(tClouds, tFlow, cloudsUv, uParams.y, uParams.z, time, uParams.w, smoothstep(0.1, 0.9, vUv.y)).r;
    //clouds *= step(0.5, vUv.y);

    color = pow(color, vec3(2.2)) * 0.85;
    clouds = pow(clouds, 2.2);
    color += clouds * 0.35 * smoothstep(0.4, 0.3, vPos.y) * smoothstep(-0.3, 0.03, vPos.y);
    color = pow(color, vec3(0.4545));

    gl_FragColor = vec4(color, 1.0);
}{@}SkyDomeShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform float uHue;
uniform float uHueSpread;
uniform vec2 uBrightness;

#!VARYINGS
varying vec2 vUv;
varying float vHole;
varying vec3 vWorldPos;

#!SHADER: Vertex
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vUv = uv;
    vHole = clamp(distance(position, vec3(0.0, 1.0, 0.0)), 0.0, 1.0);

    vec4 worldPos = modelMatrix * vec4(position, 1.0);

    vWorldPos = worldPos.xyz;
}

#!SHADER: Fragment
#require(range.glsl)
#require(transformUV.glsl)
#require(rgb2hsv.fs)
#require(simplenoise.glsl)

void main() {
    #test !Tests.isVR()
        vec2 tc = gl_FragCoord.xy / resolution;
        vec3 color = texture2D(tMap, tc).rgb;
    #endtest

    #test Tests.isVR()
        vec3 color = vec3(175.0 / 255.0, 203.0 / 255.0, 226.0 / 255.0);
    #endtest

    #drawbuffer Color gl_FragColor = vec4(color.rgb, 1.0);
    #drawbuffer WorldPos gl_FragColor = vec4(vWorldPos, 1.0);
}{@}WaterfallShader.glsl{@}#!ATTRIBUTES
attribute vec4 random;

#!UNIFORMS
uniform sampler2D tNormal;
uniform sampler2D tEnv;

uniform vec2 uTiling;
uniform float uSpeed;
uniform vec3 uScrollDirection;

uniform vec3 uColor;
uniform vec3 uSpecColor;
uniform float uAlpha;
uniform vec3 uParams;
uniform float uNormalIntensity;
uniform vec3 uEnv;

#!VARYINGS
varying vec2 vUv;
varying vec2 vUv2;
varying float vTest;
varying vec3 vN;
varying vec3 vV;
varying vec3 vWorldNormal;
varying vec3 vColor;
varying vec3 vWorldPos;
varying vec3 vPos;
varying vec4 vRandom;

#!SHADER: Vertex
void main() {
    float t = time * uSpeed * 8.0 * modelMatrix[1].z;
    vec3 pos = position * 1.0;
    vPos = pos;

    vec4 worldPos = modelMatrix * vec4(pos, 1.0);
    vec4 modelViewPos = viewMatrix * worldPos;
    gl_Position = projectionMatrix * modelViewPos;

    vec3 worldNormal = mat3(modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz) * normal;

    vN = normal;
    vWorldNormal = worldNormal;
    vV = worldPos.xyz - cameraPosition;
    vUv = uv * uTiling + uScrollDirection.xy * time;
    vUv2 = uv;
    vRandom = random;

    vWorldPos = worldPos.xyz;
}

#!SHADER: Fragment
const float LOG2 = 1.442695;
const vec2 INV_ATAN = vec2(0.1591, 0.3183);

#require(range.glsl)
#require(simplenoise.glsl)
#require(normalmap.glsl)

vec3 fresnelSphericalGaussianRoughness(float cosTheta, vec3 F0, float roughness) {
	return F0 + (max(vec3(1.0 - roughness), F0) - F0) * pow(2.0, (-5.55473 * cosTheta - 6.98316) * cosTheta);
}

vec4 RGBMToLinear(vec4 value) {
    float maxRange = 6.0;
    return vec4(value.xyz * value.w * maxRange, 1.0);
}

vec2 sampleSphericalMap(vec3 v, float rotation)
{
    vec2 uv = vec2(atan(v.z, v.x), asin(v.y));
    uv *= INV_ATAN;
    uv += 0.5;

    // match default C4D baked HDRI
    uv.x = fract(uv.x + 0.25 + rotation);

    return uv;
}

mat2 rotate2d(float angle){
    return mat2(cos(angle),-sin(angle),
                sin(angle),cos(angle));
}

void main() {
    vec2 uv0 = vUv * uTiling + vec2(0.0, time * uSpeed);
    vec2 uv1 = vUv * uTiling * 0.8 + vec2(0.0, -time * uSpeed * 0.5);
    vec3 N = vWorldNormal;
    vec3 V = normalize(vV);
    vec3 worldNormal = unpackNormal(V, N, tNormal, uNormalIntensity, 1.0, uv0).xyz;
    worldNormal = mix(worldNormal, unpackNormal(V, N, tNormal, uNormalIntensity, 1.0, uv1).xyz, 0.5);
    vec3 R = reflect(V, worldNormal);
    float NdV = abs(dot(worldNormal, V));

    float roughness = 0.01;
    vec3 F0 = vec3(0.04);
    vec3 F = fresnelSphericalGaussianRoughness(NdV, F0, roughness);

    vec3 normal = crange(texture2D(tNormal, vUv * uTiling - (time * uSpeed * 0.01)).xyz, vec3(0.0), vec3(1.0), vec3(-1.0), vec3(1.0));

    vec2 specUV = sampleSphericalMap(R, uEnv.z);
    vec3 specular = texture2D(tEnv, specUV).rgb;
    specular *= F + 0.5;
    specular *= uParams.y;

    vec3 diffuseContrib = 1.0 - F;
    vec3 diffuse = uColor;
    diffuse = pow(diffuse, vec3(2.2));

    diffuse = mix(diffuse, vec3(1.0), vUv2.x * 0.5);

     vec3 color = specular * uSpecColor + diffuse * diffuseContrib * uParams.x;
    color = pow(color, vec3(0.454545));

    float alpha = uAlpha;

    // float alpha = 1.0;//uAlpha;
    alpha *= smoothstep(1.0, 0.5, vUv2.x);
    alpha *= smoothstep(0.05, 0.2, vUv2.x);

    vec2 sideUV = vUv2;
    sideUV.y += -0.05 + sin(time * 4.0 + vWorldPos.y * 0.5 + vRandom.x * 10.0) * 0.03;
    alpha *= smoothstep(0.1, 0.2, sideUV.y);
    alpha *= smoothstep(0.9, 0.8, sideUV.y);
    alpha *= specular.r + 0.4;

    // float ripple = fract(vPos.y*0.1+time*0.3);
    // ripple = smoothstep(0.0, 0.8, ripple) * smoothstep(1.0, 0.8, ripple);
    // //wave *= ripple;

    // alpha *= mix(1.0, ripple, 0.4);

    #test !Tests.renderWaterfall()
        alpha = 0.0;
    #endtest

    #drawbuffer Color gl_FragColor = vec4(color, alpha);
    #drawbuffer WorldPos gl_FragColor = vec4(vWorldPos, alpha);
}{@}BuildingTransitionShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform sampler2D uScene;
uniform sampler2D uScene2;
uniform vec3 uFresnel;
uniform float uMixShadow;
uniform float uRenderReticle;
uniform vec3 uIrridFreq;
uniform vec3 uIrridOffset;
uniform vec2 v1;
uniform vec2 v2;
uniform vec2 center;

#!VARYINGS
varying vec2 vUv;
varying vec3 vViewDir;
varying vec3 vNormal;
varying vec2 vScreenAvatar;
varying vec3 vPos;
varying vec3 vWorldPos;

#!SHADER: Vertex
void main() {
    vec3 pos = position;


    vUv = uv;
    vNormal = normalize(normalMatrix * normal);
    vViewDir = -vec3(modelViewMatrix * vec4(pos, 1.0));
    vPos = pos;
    vWorldPos = vec3(modelMatrix * vec4(pos, 1.0));

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment
#require(GalaxyCommon.glsl)
#require(fresnel.glsl)
#require(blendmodes.glsl)
#require(pathreticle.fs)
#require(range.glsl)
#require(shadows.fs)
#require(dreamclipping.fs)
#require(rgb2hsv.fs)
#require(simplenoise.glsl)

float sdRoundedX( in vec2 p, in float w, in float r ) {
    p = abs(p);
    return length(p-min(p.x + p.y, w ) * 0.5) - r;
}

float getXReticle() {
    vec3 p = vWorldPos - uPathReticle;
    float dist = sdRoundedX(p.xz, 0.2, -0.05); 
    float size = dist / 0.35;
    float white = step(size, 0.2);
    return white;
}


vec3 iridescence(float orient, vec3 freqA, vec3 offsetA) {
    vec3 irid;

    irid.x = abs(cos(2.0*3.14*orient*freqA.x + 1.0 + offsetA.x));
    irid.y = abs(cos(2.0*3.14*orient*freqA.y + 2.0 + offsetA.y));
    irid.z = abs(cos(2.0*3.14*orient*freqA.z + 3.0 + offsetA.z));

    return irid;
}

void main() {
    #test Tests.complexTransitionShader()
        float reticle = getXReticle();
        bool renderReticle = reticle > 0. && uRenderReticle > 0.5 && dot(vNormal, vec3(0., 1., 0.)) > 0.1 ;
        
        vec4 color = texture2D(tMap, vUv);

        float fresnel = getFresnel(vNormal, vViewDir, 0.3);
        color.rgb = blendSoftLight(color.rgb, vec3(smoothstep(uFresnel.x, uFresnel.y, fresnel)), uFresnel.z);
        

        vec3 hexagons = getHexagons(vPos.xz + vPos.yy, 20.0);
        color.rgb = mix(color.rgb, vec3(uFresnel.z+smoothstep(uFresnel.x, uFresnel.y, fresnel) * 0.4), 1.0-uMixShadow);

        color.rgb += hexagons.z*0.004;


        //For the glass
        vec3 mvpos = normalize(-vViewDir);
        vec3 normal = vNormal;
        fresnel = 0.5 + 0.5 * max(0.0, dot(-mvpos, normal));
        vec4 glass = vec4(vec3(0.85), fresnel);


        vec2 scaler = mix(vec2(1.), normal.xz, vec2(0.5));
        vec2 st = gl_FragCoord.xy / resolution.xy;
        st += vec2(0.01, 0.01) * scaler;
        vec4 refract = texture2D(uScene, st);

        refract = max(refract, texture2D(uScene2, st));


        st = gl_FragCoord.xy / resolution.xy;
        st -= vec2(0.01, 0.01)* scaler;
        vec4 reflect = texture2D(uScene, st);

        reflect = max(reflect, texture2D(uScene2, st));

        vec4 scene = mix(reflect, refract, pow(fresnel, 2.));

        scene = mix(scene, vec4(1.), step(length(scene.rgb), 0.01));

        glass = vec4(vec3(214., 236., 239.) / 255. * scene.rgb * pow(fresnel, 0.2), .8);
        glass.rgb = pow(glass.rgb, vec3(0.4545));
        glass.a = .6;


        float fr = dot(vNormal, normalize(vViewDir));
        vec3 irridColor = iridescence(fr, uIrridFreq, uIrridOffset);

        glass.rgb = mix(irridColor, glass.rgb, pow(fresnel, 1.));

        //animated material
        float freq = 0.1;
        float amp = 1.;
        float noise = 0.;

        for (float i = 0.; i < 2.; i ++) {
            noise += amp * cnoise(vec3(vPos * freq + vec3(time * 0.007)));
            freq *= 2.;
            amp /= 2.;
        }

        noise = clamp(abs(noise / (4. * 0.3) ), 0., 1.);

        float minLength = length(v1 - center);
        float maxLength = length(v2 - center);
        float dist = length(vPos.xz - center);
        dist = (dist - minLength) / (maxLength - minLength);
        dist = clamp(dist, 0., 1.);
        dist = pow(dist, 2.);
        float noiseDist = 1. - abs(2. * dist - 1.);

        if(dist >= 0.5 + 0.1 * noise) color = noise > pow(noiseDist, 3.) ? glass : color;
        else color = noise > pow(noiseDist, 1.5) ? color : glass;


        //color = mix(color, glass, smoothstep(0.0, 0.1, noise));

        if(uRenderReticle > 0.5) color.rgb += getPathReticle();

        // nested test are broken, but shadows should be on if complexTransitionShader
        float shadow = 1.0;
        shadow = getShadow(vPos);
        color.rgb *= vec3(crange(shadow, 0.0, 1.0, 0.6, 1.0));
    #endtest

    #test !Tests.complexTransitionShader()
        vec4 color = texture2D(tMap, vUv);
    #endtest

    #drawbuffer Color gl_FragColor = color;
    #drawbuffer WorldPos gl_FragColor = vec4(vWorldPos, 1.0);
}{@}FrostedGlassShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform float uVR;


#!VARYINGS
varying vec2 vUv;
varying vec3 vViewDir;
varying vec3 vNormal;
varying vec2 vScreenAvatar;
varying vec3 vPos;
varying vec3 vWorldPos;


#!SHADER: Vertex.vs
void main() {

    vUv = uv;
    vec3 pos = position;
    vNormal = normalMatrix * normal;
    vViewDir = -vec3(modelViewMatrix * vec4(pos, 1.0));
    vWorldPos = vec3(modelMatrix * vec4(pos, 1.0));

    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: Fragment.fs

void main() {

    vec4 color = texture2D(tMap, vUv);
    float alpha = color.a;

    if(uVR > 0. ) {
        vec4 glassColor = vec4(229., 255., 249., 255.) / 255.;
        color = mix(glassColor, vec4(1.), color.aaaa);
        alpha = max(0.6, alpha);
    }

    color.a = alpha;

    vec3 mvpos = normalize(-vViewDir);
    vec3 normal = vNormal;
    float fresnel = 0.5 + 0.5 * abs(dot(-mvpos, normal));
        
    #drawbuffer FrostedGlass gl_FragColor = vec4(fresnel, color.a, 0., 1.);
    #drawbuffer Color gl_FragColor = color;
    #drawbuffer WorldPos gl_FragColor = vec4(vWorldPos, 1.);

}{@}FrostedGlassShaderPBR.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tLogo;
uniform float uVR;


#!VARYINGS
varying vec2 vUv;
varying vec3 vViewDir;
varying vec3 vNormal;
varying vec2 vScreenAvatar;
varying vec3 vPos;
varying vec3 vWorldPos;


#!SHADER: Vertex.vs

#require(pbr.vs)

void main() {

    setupPBR(position);

    vUv = uv;
    vec3 pos = position;
    vNormal =  normal;
    vViewDir = -vec3(modelViewMatrix * vec4(pos, 1.0));
    vWorldPos = vec3(modelMatrix * vec4(pos, 1.0));

    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: Fragment.fs

#require(pbr.fs)

void main() {

    vec4 color = texture2D(tLogo, vUv);
    float alpha = color.a;

    vec3 glassColor = getPBR(vec3(1.)).rgb;
    glassColor *= uTint;
    color.rgb = mix(glassColor, vec3(1.), color.aaa);
    color.a = max(.6, alpha);

    if(vNormal.z < -0.999) {
        color.rgb = glassColor;
        color.a = 0.6;
    }
     

    #drawbuffer Color gl_FragColor = color;
    #drawbuffer WorldPos gl_FragColor = vec4(vWorldPos, 1.);

}{@}GlassShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D uScene;
uniform vec3 uIrridFreq;
uniform vec3 uIrridOffset;

#!VARYINGS
varying vec2 vUv;
varying vec3 vViewDir;
varying vec3 vNormal;
varying vec2 vScreenAvatar;
varying vec3 vPos;
varying vec3 vWorldPos;


#!SHADER: Vertex.vs
void main() {

    vec3 pos = position;
    vNormal = normalMatrix * normal;
    vViewDir = -vec3(modelViewMatrix * vec4(pos, 1.0));
    vWorldPos = vec3(modelMatrix * vec4(pos, 1.0));

    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: Fragment.fs
vec2 hash2(vec2 p) {
  p = vec2(dot (p, vec2 (127.1, 311.7)), dot (p, vec2 (269.5, 183.3)));
  return fract(sin(p)*43758.5453123);
}

vec3 iridescence(float orient, vec3 freqA, vec3 offsetA) {
    vec3 irid;

    irid.x = abs(cos(2.0*3.14*orient*freqA.x + 1.0 + offsetA.x));
    irid.y = abs(cos(2.0*3.14*orient*freqA.y + 2.0 + offsetA.y));
    irid.z = abs(cos(2.0*3.14*orient*freqA.z + 3.0 + offsetA.z));

    return irid;
}


void main() {
    vec3 mvpos = normalize(-vViewDir);
    vec3 normal = vNormal;
    float fresnel = 0.5 + 0.5 * abs(dot(-mvpos, normal));
    vec4 glass = vec4(vec3(0.85), fresnel);


    glass = vec4(vec3(214., 236., 239.) / 255. * pow(fresnel, 0.2), .7);
    glass.rgb = pow(glass.rgb, vec3(0.4545));


    float fr = dot(vNormal, normalize(vViewDir));
    vec3 irridColor = iridescence(fr, uIrridFreq, uIrridOffset);

    glass.rgb = mix(irridColor, glass.rgb, pow(fresnel, 1.));
    

    // vec2 transitionV = hotSpotTransition();
    // float edgeDistance = crange(uHotspotTransition, 0.0, 1.0, 20.0, 2.0);
    // float edges = smoothstep(transitionV.x-edgeDistance, transitionV.x, transitionV.y);
    // edges *= smoothstep(transitionV.x+edgeDistance, transitionV.x, transitionV.y);
    // edges *= smoothstep(0.0, 0.2, uHotspotTransition);//crange(uHotspotTransition, 0.0, 1.0, 0.0, 1.0);

    // glass.rgb += pow(edges, 5.0) * 0.8;
    
    #drawbuffer Color gl_FragColor = glass;
    #drawbuffer WorldPos gl_FragColor = vec4(vWorldPos, 1.0);
}{@}GreyboxShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform vec3 uFresnel;
uniform float uMixShadow;
uniform float uRenderReticle;

#!VARYINGS
varying vec2 vUv;
varying vec3 vViewDir;
varying vec3 vNormal;
varying vec2 vScreenAvatar;
varying vec3 vPos;
varying vec3 vWorldPos;

#!SHADER: Vertex
void main() {
    vec3 pos = position;


    vUv = uv;
    vNormal = normalize(normalMatrix * normal);
    vViewDir = -vec3(modelViewMatrix * vec4(pos, 1.0));
    vPos = pos;
    vWorldPos = vec3(modelMatrix * vec4(pos, 1.0));

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment
#require(GalaxyCommon.glsl)
#require(fresnel.glsl)
#require(blendmodes.glsl)
#require(pathreticle.fs)
#require(range.glsl)
#require(shadows.fs)
#require(dreamclipping.fs)
#require(rgb2hsv.fs)

float sdRoundedX( in vec2 p, in float w, in float r ) {
    p = abs(p);
    return length(p-min(p.x + p.y, w ) * 0.5) - r;
}

float getXReticle() {
    vec3 p = vWorldPos - uPathReticle;
    float dist = sdRoundedX(p.xz, 0.2, -0.05); 
    float size = dist / 0.35;
    float white = step(size, 0.2);
    return white;
}

void main() {
   // if (isClipping(vViewDir.xy * 0.02, vWorldPos)) discard;

    float reticle = getXReticle();
    bool renderReticle = reticle > 0. && uRenderReticle > 0.5 && dot(vNormal, vec3(0., 1., 0.)) > 0.1 ;
    
    vec4 color = texture2D(tMap, vUv);


    // if (hotSpotDiscard()) {

    //     if(renderReticle) {
    //         color.rgb = vec3(1.);
    //     } else {
    //         discard;
    //     }

    // } 


    float fresnel = getFresnel(vNormal, vViewDir, 0.3);
    color.rgb = blendSoftLight(color.rgb, vec3(smoothstep(uFresnel.x, uFresnel.y, fresnel)), uFresnel.z);
    
    if(uRenderReticle > 0.5) color.rgb += getPathReticle();


    vec3 hexagons = getHexagons(vPos.xz + vPos.yy, 20.0);
    color.rgb = mix(color.rgb, vec3(uFresnel.z+smoothstep(uFresnel.x, uFresnel.y, fresnel) * 0.4), 1.0-uMixShadow);

    //color.rgb += hexagons.z*0.01;
    float shadow = 1.0;
    #test Tests.avatarShadow()
        shadow = getShadow(vPos);
    #endtest
    

    if(shadow < .1) {
        color.rgb *= vec3(crange(shadow, 0.0, 1.0, 0.6, 1.0));
    } else {
        color.rgb *= vec3(crange(pow(shadow, 2.5), 0.0, 1.0, 0.65, 1.0));
    }    


    // vec2 transitionV = hotSpotTransition();

    // float edgeDistance = crange(uHotspotTransition, 0.0, 1.0, 20.0, 2.0);
    // float edges = smoothstep(transitionV.x-edgeDistance, transitionV.x, transitionV.y);
    // edges *= smoothstep(transitionV.x+edgeDistance, transitionV.x, transitionV.y);
    // edges *= smoothstep(0.0, 0.2, uHotspotTransition);//crange(uHotspotTransition, 0.0, 1.0, 0.0, 1.0);

    // color.rgb += pow(edges, 5.0) * 0.8;

    // gl_FragColor = color;
    // gl_FragColor.rgb *= lightDecay;
    
    //gl_FragColor = hotSpotColor(gl_FragColor);
    // color.a = mix(1.0, 0.8, smoothstep(0.7, 1.0, uHotspotTransition));

    #drawbuffer Color gl_FragColor = color;
    #drawbuffer WorldPos gl_FragColor = vec4(vWorldPos, color.a);
}{@}MarbleShaderPBR.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform float uRenderReticle;
uniform float uFrequency;
uniform float uGamma;
uniform vec2 uColorMinMax;


#!VARYINGS
varying vec3 vWorldPos;
varying vec3 vPos;

#!SHADER: Vertex

#require(pbr.vs)

void main() {

    setupPBR(position);
    vPos = position;
    vWorldPos = vec3(modelMatrix * vec4(position, 1.0));
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

}

#!SHADER: Fragment

#require(range.glsl)
#require(shadows.fs)
#require(pbr.fs)
#require(pathreticle.fs)
#require(simplenoise.glsl)



void main() {
    float amp = 1.;
    float noise = 0.;
    float freq = uFrequency;

    #test Tests.complexMarbleShader()
        for (int i = 0; i < 7; i++) {
            noise += amp * cnoise(vec3(vPos * freq));
            freq *= 2.;
            amp /= 2.;
        }
    #endtest

    #test !Tests.complexMarbleShader()
        for (int i = 0; i < 3; i++) {
            noise += amp * cnoise(vec3(vPos * freq));
            freq *= 2.;
            amp /= 2.;
        }
    #endtest

    noise = crange(abs(noise), 0., 1., uColorMinMax.x, uColorMinMax.y);
    vec3 noiseColor = vec3(pow(noise, uGamma));

    vec4 color = getPBR(noiseColor);
    
    float shadow = 1.0;
    #test Tests.avatarShadow()
        shadow = getShadow(vPos);
    #endtest

    color.rgb *= vec3(crange(shadow, 0.0, 1.0, 0.6, 1.0));
    
    if(uRenderReticle > 0.5) color.rgb += getPathReticle();

    #drawbuffer Color gl_FragColor = color;
    #drawbuffer WorldPos gl_FragColor = vec4(vWorldPos, color.a);
    
}
{@}InsideWsjBg.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 uColorA;
uniform vec3 uColorB;

#!VARYINGS
varying vec3 vPos;

#!SHADER: Vertex
void main() {
  vPos = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: Fragment
#require(simplenoise.glsl)

void main() {

  float n = (cnoise(vPos * 0.3 + time * 0.05) + 1.0) / 2.0;
  vec3 color = mix(uColorA, uColorB, n);

  color += getRandom(vec2(time) + vPos.xz) * 0.01;

  gl_FragColor = vec4(color, 1.0);
}{@}InsideWsjProtonCustom.glsl{@}#!ATTRIBUTES
attribute float angle;
attribute vec2 tuv;
attribute float cIndex;
attribute float cNumber;

#!UNIFORMS
uniform sampler2D tPos;
uniform sampler2D tLife;
uniform float radialSegments;
uniform float thickness;
uniform float taper;

uniform vec3 uColorA;
uniform vec3 uColorB;
uniform vec3 uColorC;
uniform vec3 uColorD;

#!VARYINGS
varying float vLength;
varying vec3 vNormal;
varying vec3 vViewPosition;
varying vec3 vPos;
varying vec2 vUv;
varying vec2 vUv2;
varying float vIndex;
varying float vLife;
varying vec3 vDiscard;

varying vec3 vColor;

#!SHADER: Vertex

//neutrinoparams

#require(ProtonTubesUniforms.fs)
#require(range.glsl)
#require(conditionals.glsl)

void main() {
    float headIndex = getIndex(cNumber, 0.0, lineSegments);
    vec2 iuv = getUVFromIndex(headIndex, textureSize);
    vUv2 = iuv;
    float life = texture2D(tLife, iuv).x;
    vLife = life;

    float scale = 1.0;
    
    scale *= crange(life, 0.1, 0.3, 0.0, 1.0);
    scale *= crange(life, 0.7, 0.9, 1.0, 0.0);

    //neutrinovs
    vec2 volume = vec2(thickness * 0.065 * scale);

    vec3 transformed;
    vec3 objectNormal;

    //extrude tube
    float posIndex = getIndex(cNumber, cIndex, lineSegments);
    float nextIndex = getIndex(cNumber, cIndex + 1.0, lineSegments);

    vLength = cIndex / (lineSegments - 2.0);
    vIndex = cIndex;

    vec3 current = texture2D(tPos, getUVFromIndex(posIndex, textureSize)).xyz;
    vec3 next = texture2D(tPos, getUVFromIndex(nextIndex, textureSize)).xyz;

    vDiscard = next - current;
    vec3 T = normalize(next - current);
    vec3 B = normalize(cross(T, next + current));
    vec3 N = -normalize(cross(B, T));

    float tubeAngle = angle;
    float circX = cos(tubeAngle);
    float circY = sin(tubeAngle);

    volume *= mix(crange(vLength, 1.0 - taper, 1.0, 1.0, 0.0) * crange(vLength, 0.0, taper, 0.0, 1.0), 1.0, when_eq(taper, 0.0));

    objectNormal.xyz = normalize(B * circX + N * circY);
    transformed.xyz = current + B * volume.x * circX + N * volume.y * circY;
    //extrude tube

    vec3 transformedNormal = normalMatrix * objectNormal;
    vNormal = normalize(transformedNormal);
    vUv = tuv.yx;

    vec3 pos = transformed;
    vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.0);
    vViewPosition = -mvPosition.xyz;
    vPos = pos;
    gl_Position = projectionMatrix * mvPosition;

    //neutrinovspost

    vColor = uColorA;
    vColor = mix(vColor, uColorB, step(0.25, vUv2.x));
    vColor = mix(vColor, uColorC, step(0.50, vUv2.x));
    vColor = mix(vColor, uColorD, step(0.75, vUv2.x));
}

#!SHADER: Fragment
void main() {
    vec3 color = vColor;
    vec3 mvpos = normalize(-vViewPosition);
    float fresnel = 0.5 + 0.5 * max(0.0, dot(-mvpos, vNormal));
    color *= fresnel;

    gl_FragColor = vec4(color, 1.0);
}{@}InsideAxieCoinPBR.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 uLightColor;

#!VARYINGS

#!SHADER: Vertex

#require(pbr.vs)
#require(range.glsl)
#require(simplenoise.glsl)


void main() {
    vec3 pos = position;
    pos += cnoise(pos*0.05+time*0.1) * 0.3;
    setupPBR(position);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment

#require(pbr.fs)

void main() {
    // PBR Config
		// this is the default config that can be tweaked
    PBRConfig baseConfig;
    baseConfig.clearcoat = 0.0;
    baseConfig.reflection = 1.0;
    baseConfig.color = vec3(1.0);
    baseConfig.lightColor = uLightColor;

    vec4 baseColor = texture2D(tBaseColor, vUv);
    vec3 pbr = getPBR(baseColor.rgb, baseConfig).rgb;

    gl_FragColor = vec4(pbr, 1.0);
}{@}InsideAxieImagesShader.glsl{@}#!ATTRIBUTES
attribute vec4 random;

#!UNIFORMS
uniform sampler2D tMap;
uniform float uAppear;

#!VARYINGS
varying vec2 vUv;
varying vec4 vRandom;

#!SHADER: Vertex
#require(range.glsl)
#require(uvgrid.glsl)

void main() {
  vec3 pos = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);

  vUv = uv;
  vRandom = random;
}

#!SHADER: Fragment
#require(roundedBorder.glsl)
#require(uvgrid.glsl)

float luma(vec3 color) {
  return dot(color, vec3(0.299, 0.587, 0.114));
}

void main() {
  vec2 sprite = vec2(0.0);
  sprite = getUVForGrid(vUv, 3.0, 1.0, floor(vRandom.x * 3.0), floor(vRandom.y * 1.0));
  
  float inside = 0.0;
  float border = roundedBorder(0.05, 0.04, vUv, vec2(1.0), inside);
  vec3 color = texture2D(tMap, sprite).rgb;
  float alpha = inside;


  color = mix(color, vec3(luma(color)), .7);

  gl_FragColor = vec4(color, alpha);
}{@}InsideSushiBg.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 uColor;

#!VARYINGS
#!SHADER: Vertex
void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: Fragment
void main() {
  gl_FragColor = vec4(uColor, 1.0);
}{@}InsideSushiParticles.glsl{@}#!ATTRIBUTES
attribute vec4 random;

#!UNIFORMS
uniform sampler2D tPos;
uniform vec3 uColor;
uniform vec3 uColorFog;
uniform vec2 uFog;
uniform float DPR;
uniform float uSize;
uniform float uAlpha;

#!VARYINGS
varying float vFog;
varying float vNoise;
varying vec4 vRandom;
varying vec3 vPos;

#!SHADER: Vertex
#require(range.glsl)
#require(simplenoise.glsl)

void main() {
  vec3 pos = texture2D(tPos, position.xy).xyz;

  float n = cnoise(pos * 0.04 + time * 0.2); 
  pos.y += n * 0.05;
  vPos = pos;

  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);

  float s = (0.04 * uSize);

  s += random.x * 0.03;


  float size = s * DPR * (1000.0 / length(mvPosition.xyz));
  gl_PointSize = size;
  gl_Position = projectionMatrix * mvPosition;

  vec3 viewDir = -vec3(modelViewMatrix * vec4(pos, 1.0));
  float cdist = length(-viewDir);

  vFog = crange(cdist, uFog.x, uFog.y, 0.0, 1.0);
  vNoise = n;
  vRandom = random;
}


#!SHADER: Fragment
#require(uvgrid.glsl)
#require(rgb2hsv.fs)
#require(range.glsl)
#require(simplenoise.glsl)

void main() {
  vec2 uv = gl_PointCoord.xy;

  float circle = length(uv - 0.5);

  if (circle > 0.5) {
    discard;
  }

  vec3 color = vec3(0.0);
  
  color = uColor;
  color += vNoise * 0.1;

  float fog = vFog;
  fog += vRandom.y * 0.1;

  color = mix(color, uColorFog, fog);


  color *= mix(1.0, 0.4, length((uv+0.25)-0.5));

  color = rgb2hsv(color);
  color.x += -0.05 + vRandom.x * 0.1;
  color.x += cnoise(vPos * 0.05 +time*0.1) * 0.02;
  color.z += cnoise(vPos * 0.03 +time*0.1) * 0.1;
  color.z *= mix(0.7, 1.0, vRandom.z);

  color = hsv2rgb(color);

  float alpha = 1.0;
  alpha *= 0.7 + sin(time * 3.0 + vRandom.z * 20.0) * 0.3;



  gl_FragColor = vec4(color, alpha);
}{@}InsideTacoBudImagesShader.glsl{@}#!ATTRIBUTES
attribute vec4 random;
attribute float row;

#!UNIFORMS
uniform sampler2D tMap;
uniform float uAppear;
uniform vec2 uAspectRatio;

#!VARYINGS
varying vec2 vUv;
varying vec2 vSprite;
varying float vShow;

#!SHADER: Vertex
#require(rotation.glsl)
#require(simplenoise.glsl)
#require(range.glsl)
#require(uvgrid.glsl)

#define PI 3.1415926538

void main() {
  vec3 pos = position;

  float speed = 0.04;

  float a = uAspectRatio.x / uAspectRatio.y;
  // pos.x *= a;

  float angle = (time * speed);
  pos = (rotationMatrix(vec3(0.0, 1.0, 0.0), angle) * vec4(pos, 1.0)).xyz;

  // pos *= 0.5;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);

  vShow = rangeTransition(uAppear, random.z, 0.1);
  vShow *= 1.0 - crange(row, 0.8, 0.95, 0.0, 1.0);
  vShow *= 1.0 - crange(row, 0.1, 0.05, 0.0, 1.0);

  float imgWidth = 5.;
  float imgHeight = 2.;

  vSprite = getUVForGrid(uv, imgWidth, imgHeight, floor(random.x * 5.0), floor(random.y * 2.0));
  vUv = uv;
}

#!SHADER: Fragment
#require(roundedBorder.glsl)
#require(uvgrid.glsl)

void main() {
  float inside = 0.0;
  float border = roundedBorder(0.0, 0.1, vUv, vec2(1.0), inside);
  vec3 color = vec3(0.0);

  color = texture2D(tMap, vSprite).rgb;
  float alpha = inside;

  alpha *= vShow;

  gl_FragColor = vec4(color, alpha * 0.3);
  // gl_FragColor = vec4(1.);
}{@}InsideTacoImagesShader.glsl{@}#!ATTRIBUTES
attribute vec4 random;
attribute float row;

#!UNIFORMS
uniform sampler2D tMap;
uniform float uAppear;

#!VARYINGS
varying vec3 vLocal;
varying vec2 vUv;
varying vec4 vRandom;
varying float vShow;

#!SHADER: Vertex
#require(rotation.glsl)
#require(simplenoise.glsl)
#require(range.glsl)
#require(uvgrid.glsl)

void main() {
  vec3 pos = position;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);

  vShow = rangeTransition(uAppear, random.z, 0.1);
  vUv = uv;
  vRandom = random;
}

#!SHADER: Fragment
#require(roundedBorder.glsl)
#require(uvgrid.glsl)

void main() {
  vec2 sprite = vec2(0.0);


  sprite = getUVForGrid(vUv, 5.0, 1.0, floor(vRandom.x * 5.0), floor(vRandom.y * 1.0));

  float inside = 0.0;
  float border = roundedBorder(0.05, 0.04, vUv, vec2(1.0), inside);
  vec3 color = texture2D(tMap, sprite).rgb;
  float alpha = inside;

  alpha *= vShow;

  // color += vLocal.z * 0.03;

  gl_FragColor = vec4(color, alpha);
}{@}InsideDnaBg.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 uColorA;
uniform vec3 uColorB;

#!VARYINGS
varying vec3 vPos;

#!SHADER: Vertex

void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  vPos = position;
}

#!SHADER: Fragment
#require(simplenoise.glsl)

void main() {
  float noise = cnoise(vPos * 0.4 + time * 0.08);
  noise = (noise + 1.0) / 2.0;
  vec3 color = mix(uColorA, uColorB, noise);

  gl_FragColor = vec4(color, 1.0);
}{@}InsideDnaShader.glsl{@}#!ATTRIBUTES
attribute vec4 random;

#!UNIFORMS

#!VARYINGS
varying vec3 vNormal;
varying vec3 vViewDir;
varying float vFog;

#!SHADER: Vertex
#require(rotation.glsl)
#require(simplenoise.glsl)
#require(range.glsl)

void main() {
  vec3 pos = position;
  vec3 opos = position;

  opos = (rotationMatrix(vec3(0.0, 1.0, 0.0), time * 0.4) * vec4(opos, 1.0)).xyz;
  opos = (rotationMatrix(vec3(1.0, 0.0, 0.0), time * 0.1) * vec4(opos, 1.0)).xyz;
  opos = (rotationMatrix(vec3(0.0, 0.0, 1.0), time * 0.1) * vec4(opos, 1.0)).xyz;


  opos.y += cnoise(vec2(random.x, random.y + time * 0.08)) * 20.0;
  opos.x += cnoise(vec2(random.w, time * 0.03)) * 20.0;

  pos = transformPosition(opos, offset, scale, orientation);

  vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mvPos;

  vViewDir = vec3(mvPos);
  vNormal = normalize(normalMatrix * transformNormal(normal, orientation));

  vFog = crange(length(pos), 8.0, 25.0, 0.0, 1.0);
}

#!SHADER: Fragment
void main() {

  vec3 mvpos = normalize(vViewDir);
  float fresnel = 0.5 + 0.5 * max(0.0, dot(-mvpos, vNormal));

  vec3 color = vec3(0.0);
  color = vec3(fresnel);

  color *= 1.0 - vFog;

  gl_FragColor = vec4(color, 1.0);
}{@}InsideDaoProtonCustom.glsl{@}#!ATTRIBUTES
attribute float angle;
attribute vec2 tuv;
attribute float cIndex;
attribute float cNumber;

#!UNIFORMS
uniform sampler2D tPos;
uniform sampler2D tLife;
uniform float radialSegments;
uniform float thickness;
uniform float taper;

#!VARYINGS
varying float vLength;
varying vec3 vNormal;
varying vec3 vViewPosition;
varying vec3 vPos;
varying vec2 vUv;
varying vec2 vUv2;
varying float vIndex;
varying float vLife;
varying vec3 vDiscard;

#!SHADER: Vertex

//neutrinoparams

#require(ProtonTubesUniforms.fs)
#require(range.glsl)
#require(conditionals.glsl)
#require(fbr.vs)

void main() {
    float headIndex = getIndex(cNumber, 0.0, lineSegments);
    vec2 iuv = getUVFromIndex(headIndex, textureSize);
    vUv2 = iuv;
    float life = texture2D(tLife, iuv).x;
    vLife = life;

    float scale = 1.0;

    scale *= crange(life, 0.1, 0.3, 0.0, 1.0);
    scale *= crange(life, 0.7, 0.9, 1.0, 0.0);

    //neutrinovs
    vec2 volume = vec2(thickness * 0.065 * scale);

    vec3 transformed;
    vec3 objectNormal;

    //extrude tube
    float posIndex = getIndex(cNumber, cIndex, lineSegments);
    float nextIndex = getIndex(cNumber, cIndex + 1.0, lineSegments);

    vLength = cIndex / (lineSegments - 2.0);
    vIndex = cIndex;

    vec3 current = texture2D(tPos, getUVFromIndex(posIndex, textureSize)).xyz;
    vec3 next = texture2D(tPos, getUVFromIndex(nextIndex, textureSize)).xyz;

    vDiscard = next - current;
    vec3 T = normalize(next - current);
    vec3 B = normalize(cross(T, next + current));
    vec3 N = -normalize(cross(B, T));

    float tubeAngle = angle;
    float circX = cos(tubeAngle);
    float circY = sin(tubeAngle);

    volume *= mix(crange(vLength, 1.0 - taper, 1.0, 1.0, 0.0) * crange(vLength, 0.0, taper, 0.0, 1.0), 1.0, when_eq(taper, 0.0));

    objectNormal.xyz = normalize(B * circX + N * circY);
    transformed.xyz = current + B * volume.x * circX + N * volume.y * circY;
    //extrude tube

    vec3 transformedNormal = normalMatrix * objectNormal;
    vNormal = normalize(transformedNormal);
    vUv = tuv.yx;

    vec3 pos = transformed;
    vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.0);
    vViewPosition = -mvPosition.xyz;
    vPos = pos;
    gl_Position = projectionMatrix * mvPosition;

    // custom setup fbr
    // setupFBR(pos);
    vec4 mPos = modelMatrix * vec4(pos, 1.0);
    vMPos = mPos.xyz / mPos.w;
    vEyePos = vec3(mvPosition);
}

#!SHADER: Fragment
#require(fbr.fs)

void main() {
    vec3 color = getFBR(uColor, vUv, vUv);

    color += 0.15;
    color *= 1.1;

    if (vUv2.x > 0.5) {
        color *= vec3(0.1, 0.1, 1.0);
    }

    gl_FragColor = vec4(color, 1.0);
}{@}InsideOriginImagesShader.glsl{@}#!ATTRIBUTES
attribute vec4 random;
attribute float row;

#!UNIFORMS
uniform sampler2D tMap;
uniform sampler2D tMap2;
uniform float uAppear;
uniform float uTransition;
uniform vec2 uAspectRatio;

#!VARYINGS
varying vec2 vUv;
varying vec2 vSprite;
varying float vBright;
varying float vShow;

#!SHADER: Vertex
#require(rotation.glsl)
#require(simplenoise.glsl)
#require(range.glsl)
#require(uvgrid.glsl)

#define PI 3.1415926538

void main() {
  vec3 pos = position;
  vec3 opos = position;

  float a = uAspectRatio.x / uAspectRatio.y;

  opos.x *= a;

  float showingSecond = 0.0;

  showingSecond = rangeTransition(uTransition, random.x, 0.1);

  opos = (rotationMatrix(vec3(0.0, 1.0, 0.0), showingSecond * PI) * vec4(opos, 1.0)).xyz;
  pos = transformPosition(opos, offset, scale, orientation);

  float speed = 0.04;
  // speed = speed + cnoise(vec2(row * 20.0)) * 0.01;

  float angle = (time * speed);
  pos = (rotationMatrix(vec3(0.0, 1.0, 0.0), angle) * vec4(pos, 1.0)).xyz;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);

  vBright = 1.0;//cnoise(pos * 0.05 + time * 0.1);
  
  vShow = rangeTransition(uAppear, random.z, 0.1);
  vShow *= 1.0 - crange(row, 0.8, 0.95, 0.0, 1.0);
  vShow *= 1.0 - crange(row, 0.1, 0.05, 0.0, 1.0);

  float imgWidth = 5.;
  float imgHeight = 3.;

  vSprite = getUVForGrid(uv, imgWidth, imgHeight, floor(random.x * imgWidth), floor(random.y * imgHeight));
  vUv = uv;
}

#!SHADER: Fragment
#require(roundedBorder.glsl)
#require(uvgrid.glsl)

void main() {
  float inside = 0.0;
  float border = roundedBorder(0.0, 0.1, vUv, vec2(1.0), inside);
  vec3 color = vec3(0.0);

  if (gl_FrontFacing) {
    color = texture2D(tMap, vSprite).rgb;
  } else {
    color = texture2D(tMap2, vSprite).rgb;
  }

  float alpha = inside;

  alpha *= 0.6 + vBright * 0.2;
  alpha *= vShow;

  gl_FragColor = vec4(color, alpha);
}{@}InsideGenerativeProtonCustom.glsl{@}#!ATTRIBUTES
attribute float angle;
attribute vec2 tuv;
attribute float cIndex;
attribute float cNumber;

#!UNIFORMS
uniform sampler2D tPos;
uniform sampler2D tLife;
uniform float radialSegments;
uniform float thickness;
uniform float taper;

uniform sampler2D uHueMap;
uniform float uTransition;

#!VARYINGS
varying float vLength;
varying vec3 vNormal;
varying vec3 vViewPosition;
varying vec3 vPos;
varying vec2 vUv;
varying vec2 vUv2;
varying float vIndex;
varying float vLife;
varying vec3 vDiscard;

#!SHADER: Vertex

//neutrinoparams

#require(ProtonTubesUniforms.fs)
#require(range.glsl)
#require(conditionals.glsl)
#require(fbr.vs)

void main() {
    float headIndex = getIndex(cNumber, 0.0, lineSegments);
    vec2 iuv = getUVFromIndex(headIndex, textureSize);
    vUv2 = iuv;
    float life = texture2D(tLife, iuv).x;
    vLife = life;

    float scale = 1.0;
    scale *= crange(life, 0.1, 0.3, 0.0, 1.0);
    scale *= crange(life, 0.7, 0.9, 1.0, 0.0);

    //neutrinovs
    vec2 volume = vec2(thickness * 0.065 * scale);

    vec3 transformed;
    vec3 objectNormal;

    //extrude tube
    float posIndex = getIndex(cNumber, cIndex, lineSegments);
    float nextIndex = getIndex(cNumber, cIndex + 1.0, lineSegments);

    vLength = cIndex / (lineSegments - 2.0);
    vIndex = cIndex;

    vec3 current = texture2D(tPos, getUVFromIndex(posIndex, textureSize)).xyz;
    vec3 next = texture2D(tPos, getUVFromIndex(nextIndex, textureSize)).xyz;

    vDiscard = next - current;
    vec3 T = normalize(next - current);
    vec3 B = normalize(cross(T, next + current));
    vec3 N = -normalize(cross(B, T));

    float tubeAngle = angle;
    float circX = cos(tubeAngle);
    float circY = sin(tubeAngle);

    volume *= mix(crange(vLength, 1.0 - taper, 1.0, 1.0, 0.0) * crange(vLength, 0.0, taper, 0.0, 1.0), 1.0, when_eq(taper, 0.0));

    objectNormal.xyz = normalize(B * circX + N * circY);
    transformed.xyz = current + B * volume.x * circX + N * volume.y * circY;
    //extrude tube

    vec3 transformedNormal = normalMatrix * objectNormal;
    vNormal = normalize(transformedNormal);
    vUv = tuv.yx;

    vec3 pos = transformed;
    vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.0);
    vViewPosition = -mvPosition.xyz;
    vPos = pos;
    gl_Position = projectionMatrix * mvPosition;

    // custom setup fbr
    // setupFBR(pos);
    vec4 mPos = modelMatrix * vec4(pos, 1.0);
    vMPos = mPos.xyz / mPos.w;
    vEyePos = vec3(mvPosition);
}

#!SHADER: Fragment
#require(fbr.fs)
#require(range.glsl)

void main() {
    vec3 color = getFBR(uColor, vUv, vUv);
    color += 0.15;
    color *= 1.1;

    if (uTransition > 0.01) {
        vec3 rainbow = texture2D(uHueMap, vec2(vUv.x, 0.5)).rgb;
        vec3 mvpos = normalize(vEyePos);
        vec3 normal = vNormal;
        float fresnel = 0.5 + 0.5 * max(0.0, dot(-mvpos, normal));
        rainbow *= fresnel;

        float t = rangeTransition(uTransition, 1.0 - vLength, 0.0);
        color = mix(color, rainbow, t);
    }

    gl_FragColor = vec4(color, 1.0);
}{@}InsideScamBgShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 uColora; //js new Color("#ff0000");
uniform vec3 uColorb; //js new Color("#ff0000");

#!VARYINGS
varying vec3 vPos;

#!SHADER: Vertex
void main() {
  vPos = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: Fragment
#require(simplenoise.glsl)

void main() {
  float noise = (cnoise(vPos * 0.2 + time * 0.01) + 1.0) / 2.0;
  vec3 color = mix(uColora, uColorb, noise);


  color += getRandom(vPos.xy + time) * 0.005;
  color *= 0.4;

  gl_FragColor = vec4(color, 1.0);
}{@}InsideScamProtonCustom.glsl{@}#!ATTRIBUTES
attribute float angle;
attribute vec2 tuv;
attribute float cIndex;
attribute float cNumber;

#!UNIFORMS
uniform sampler2D tPos;
uniform sampler2D tLife;
uniform float radialSegments;
uniform float thickness;
uniform float taper;
uniform vec3 uColor;

#!VARYINGS
varying float vLength;
varying vec3 vNormal;
varying vec3 vViewPosition;
varying vec3 vPos;
varying vec2 vUv;
varying vec2 vUv2;
varying float vIndex;
varying float vLife;
varying vec3 vDiscard;

#!SHADER: Vertex

//neutrinoparams

#require(ProtonTubesUniforms.fs)
#require(range.glsl)
#require(conditionals.glsl)

void main() {
    float headIndex = getIndex(cNumber, 0.0, lineSegments);
    vec2 iuv = getUVFromIndex(headIndex, textureSize);
    vUv2 = iuv;
    float life = texture2D(tLife, iuv).x;
    vLife = life;

    float scale = 1.0;
    scale *= crange(life, 0.1, 0.3, 0.0, 1.0);
    scale *= crange(life, 0.7, 0.9, 1.0, 0.0);

    //neutrinovs
    vec2 volume = vec2(thickness * 0.065 * scale);

    vec3 transformed;
    vec3 objectNormal;

    //extrude tube
    float posIndex = getIndex(cNumber, cIndex, lineSegments);
    float nextIndex = getIndex(cNumber, cIndex + 1.0, lineSegments);

    vLength = cIndex / (lineSegments - 2.0);
    vIndex = cIndex;

    vec3 current = texture2D(tPos, getUVFromIndex(posIndex, textureSize)).xyz;
    vec3 next = texture2D(tPos, getUVFromIndex(nextIndex, textureSize)).xyz;

    vDiscard = next - current;
    vec3 T = normalize(next - current);
    vec3 B = normalize(cross(T, next + current));
    vec3 N = -normalize(cross(B, T));

    float tubeAngle = angle;
    float circX = cos(tubeAngle);
    float circY = sin(tubeAngle);

    volume *= mix(crange(vLength, 1.0 - taper, 1.0, 1.0, 0.0) * crange(vLength, 0.0, taper, 0.0, 1.0), 1.0, when_eq(taper, 0.0));

    objectNormal.xyz = normalize(B * circX + N * circY);
    transformed.xyz = current + B * volume.x * circX + N * volume.y * circY;
    //extrude tube

    vec3 transformedNormal = normalMatrix * objectNormal;
    vNormal = normalize(transformedNormal);
    vUv = tuv.yx;

    vec3 pos = transformed;
    vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.0);
    vViewPosition = -mvPosition.xyz;
    vPos = pos;
    gl_Position = projectionMatrix * mvPosition;

    //neutrinovspost
}

#!SHADER: Fragment
#require(simplenoise.glsl)

void main() {
    vec3 color = uColor;
    float n = (cnoise(vPos * 0.3 + time * 0.1) + 1.0) / 2.0;
    color = mix(color, vec3(0.0), n);

    gl_FragColor = vec4(color, 1.0);
}{@}InsideScamRain.glsl{@}#!ATTRIBUTES
attribute vec3 lookup;
attribute vec3 random;
attribute float aSplash;

#!UNIFORMS
uniform sampler2D tPos;
uniform vec2 uWidth;
uniform vec2 uHeight;
uniform float uRotation;
uniform float uAlpha;
uniform float uAlphaSplash;
uniform float uTransition;
uniform float uSplashDuration;
// uniform vec3 uColor;
uniform vec3 uSplashColor;

uniform vec3 uLightPosition;
uniform float uLightIntensity;
uniform vec2 uLightFalloff;

#!VARYINGS
varying vec2 vUv;
varying vec3 vPos;
varying vec3 vRandom;
varying float vSplash;
varying float vSplashProgress;

#!SHADER: Vertex
#require(fbr.vs)
#require(instance.vs)
#require(range.glsl)
#require(rotation.glsl)

float ifSplash(float t, float otherwise) {
  return mix(otherwise, t, aSplash);
}

void main() {
  vSplash = aSplash;
  vUv = uv;
  vRandom = random;

  vec3 nposition = position;
  vec3 offset = texture2D(tPos, lookup.xy).xyz;

  // offset local position
  nposition.y -= 0.5;

  // Add a variation of scaling
  float heightVariation = crange(random.x, 0.0, 1.0, uHeight.x, uHeight.y);
  nposition.y *= heightVariation;
  nposition.xz *= crange(random.y, 0.0, 1.0, uWidth.x, uWidth.y);

  float amountRotation = ifSplash(0.0, uRotation);
  nposition = (rotationMatrix(vec3(0.0, 0.0, 1.0), amountRotation) * vec4(nposition, 1.0)).xyz;

  // At which height from y needs to start the splashing effect
  float splashHeight = uSplashDuration;

  nposition.y -= splashHeight;

  float splashProgress = crange(offset.y, splashHeight, 0.0, 0.0, 1.0);
  vSplashProgress = splashProgress;

  // Make the splash stopping at terrain level
  nposition.y += ifSplash((splashProgress * splashHeight) + heightVariation, 0.0);

  vec3 pos = transformPosition(nposition, offset, 1.0);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  vPos = pos;

  setupFBR(pos);
}

#!SHADER: Fragment
#require(range.glsl)
#require(conditionals.glsl)
#require(fbr.fs)
#require(rotation.glsl)
#require(aastep.glsl)

float ifSplash(float t, float otherwise) {
  return mix(otherwise, t, vSplash);
}

float circle(float radius, float len) {
  return 1.0 - aastep(0.5 - crange(radius, 0.0, 1.0, 0.5, 0.0), len);
}

vec3 getFBRCustom() {
    vec2 uv = vUv;
    vec3 normal = unpackNormalFBR(vEyePos, vNormal, tNormal, 3.0, 1.0, uv);

    // gpu gems 42
    float dx = uv.x - 0.5;
    float dy = uv.y - 0.5;
    float freq = sqrt(dx*dx + dy*dy);
    float amp = 1.0;
    float angle = -time*20.0+freq*30.0;
    float v = -amp * freq * cos(angle);
    float roughness = v;

    vec2 aUV = reflectMatcapFBR(vPos, projectionMatrix, normal);
    vec2 bUV = reflectMatcapFBR(vPos, modelMatrix, normal);
    vec2 mUV = mix(aUV, bUV, roughness);

    return texture2D(tMatcap, mUV).rgb;
}

void main() {
  // vec4 color = vec4(mix(uColor, getFBRCustom(), vSplash), 1.0);
  vec4 color = vec4(mix(uColor, uSplashColor, vSplash), 1.0);

  if (vRandom.z > uTransition) {
    discard;
  }

  if (vSplash > 0.5 && vSplashProgress > 0.0) {
    color.rgb = getFBRCustom();
  }

  float len = length(vUv - 0.5);
  float mask = circle(vSplashProgress, len);

  // Base opacity
  color.a = crange(vSplash, 0.0, 1.0, uAlpha, uAlphaSplash + vRandom.y * 0.2);

  // Show splash only when hits the floor
  color.a *= ifSplash(step(0.01, vSplashProgress), 1.0);

  // Make it a circle expanding
  color.a *= ifSplash(mask, 1.0);

  // Inner random brightness spot
  color.a += ifSplash(aastep(vSplashProgress, length(vUv - 0.5) + vRandom.x * 0.3), 0.0) * mask;
  color.a = clamp(color.a, 0.0, 1.0);

  // Fade splash at the end
  color.a *= ifSplash(crange(vSplashProgress, 0.4, 1.0, color.a, 0.0), 1.0);

  // Light falloff
  float dist = distance(uLightPosition, vPos);
  color.rgb *= crange(dist, uLightFalloff.x, uLightFalloff.y, uLightIntensity, 0.0);



  // Hide everything above the floor
  color.a *= step(-0.01, vPos.y);

  gl_FragColor = color;
}{@}InsideHokusaiBgShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 uColor; //js new Color("#ff0000");

#!VARYINGS
varying vec3 vPos;

#!SHADER: Vertex
void main() {
  vPos = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: Fragment
#require(simplenoise.glsl)

void main() {
  vec3 color = uColor;

  color *= 1.0 + (cnoise(vPos * 0.2 + time * 0.01) * 0.15);
  color += getRandom(vPos.xy + time) * 0.005;

  gl_FragColor = vec4(color, 1.0);
}{@}InsideHokusaiLeaf.glsl{@}#!ATTRIBUTES
attribute vec4 random;

#!UNIFORMS
uniform float uSize;
uniform vec2 uSizeRand;
uniform sampler2D tMap;
uniform float DPR;
uniform float uRes;
uniform vec3 uColor;
uniform float uAlphaCutOff;
uniform vec2 uDistFade;

#!VARYINGS
varying vec2 vUv;
varying float vLife;
varying float vAlpha;
varying vec4 vRandom;
varying float vFog;
varying vec3 vWorldPos;

#!SHADER: Vertex

#require(range.glsl)

void main() {
    vec4 decodedPos = texture2D(tPos, position.xy);
    vec3 pos = decodedPos.xyz;
    float dist = length(pos - cameraPosition);

    vRandom = random;
    vAlpha = 1.0;
    vLife = crange(pos.y, 30.0, 10.0, 1.0, 0.0);

    vFog = crange(dist, uDistFade.x, uDistFade.y, 1.0, 0.0);
    vWorldPos = vec3(modelMatrix * vec4(pos, 1.0));

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = 0.02 * DPR * uRes * uSize * crange(random.x, 0.0, 1.0, uSizeRand.x, uSizeRand.y) * (1000.0 / length(mvPosition.xyz));
    gl_Position = projectionMatrix * mvPosition;
}

#!SHADER: Fragment

#require(range.glsl)
#require(transformUV.glsl)
#require(rgb2hsv.fs)

void main() {

    vec2 uv = vec2(gl_PointCoord.x, 1.0 - gl_PointCoord.y);
    uv = rotateUV(uv, radians(360.0 * vRandom.z)-time*0.6);

    float alpha = smoothstep(0.0, 0.5, texture2D(tMap, uv).r);
    alpha *= vAlpha;

    if (alpha < 0.5) discard;

    
    vec3 color = uColor;
    color.rgb += vRandom.y*0.22;

    alpha *= smoothstep(1.0, 0.0, vLife);
    alpha *= vFog;

    // alpha *= smoothstep(0.3, 1.5, vWorldPos.y);
    alpha *= crange(vWorldPos.y, 1.5, 1.0, 1.0, 0.0);

    gl_FragColor = vec4(color, alpha);
}{@}InsideHokusaiPool.glsl{@}#!ATTRIBUTES
attribute vec3 vdata;

#!UNIFORMS
uniform sampler2D tNormal;
uniform sampler2D tEnv;
uniform sampler2D tEnvDiffuse;
uniform vec2 uTiling;
uniform float uSpeed;
uniform vec3 uColor;
uniform vec3 uSpecColor;
uniform float uNormalIntensity;
uniform vec3 uParams;
uniform vec3 uScrollDirection;
uniform vec3 uEnv;

uniform mat4 uMirrorMatrix;
uniform float uMirrorStrength;
uniform float uMirrorRoughness;
uniform sampler2D tMirrorReflection;
uniform vec2 uRippleTile;
uniform float uRippleStrength;
uniform float uRippleSpeed;
uniform float uAlpha;

#!VARYINGS
varying vec2 vUv;
varying vec2 vUv2;
varying float vTest;
varying vec3 vN;
varying vec3 vV;
varying vec3 vWorldNormal;
varying vec3 vColor;
varying float vAlpha;
varying vec3 vWorldPos;
varying vec4 vMirrorCoord;
varying vec3 vPos;

#!SHADER: Vertex

void main() {
    float t = time * uSpeed * 8.0 * modelMatrix[1].z;
    vec3 pos = position;

    vec4 worldPos = modelMatrix * vec4(pos, 1.0);
    vec4 modelViewPos = viewMatrix * worldPos;
    gl_Position = projectionMatrix * modelViewPos;

    vec3 worldNormal = mat3(modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz) * normal;

    vN = normal;
    vWorldNormal = worldNormal;
    vV = worldPos.xyz - cameraPosition;
    vUv = uv * uTiling + uScrollDirection.xy * time;
    vUv2 = uv;
    vColor = vdata;
    // vAlpha = vdata.r * 1.5;
    vAlpha = 1.0;
    vMirrorCoord = uMirrorMatrix * worldPos;

    vWorldPos = worldPos.xyz;
    vPos = pos;
}

#!SHADER: Fragment
const float LOG2 = 1.442695;
const vec2 INV_ATAN = vec2(0.1591, 0.3183);

#require(normalmap.glsl)
#require(shadows.fs)
#require(range.glsl)

vec3 fresnelSphericalGaussianRoughness(float cosTheta, vec3 F0, float roughness) {
	return F0 + (max(vec3(1.0 - roughness), F0) - F0) * pow(2.0, (-5.55473 * cosTheta - 6.98316) * cosTheta);
}

vec4 RGBMToLinear(vec4 value) {
    float maxRange = 6.0;
    return vec4(value.xyz * value.w * maxRange, 1.0);
}

vec2 sampleSphericalMap(vec3 v, float rotation)
{
    vec2 uv = vec2(atan(v.z, v.x), asin(v.y));
    uv *= INV_ATAN;
    uv += 0.5;

    // match default C4D baked HDRI
    uv.x = fract(uv.x + 0.25 + rotation);

    return uv;
}

mat2 rotate2d(float angle){
    return mat2(cos(angle),-sin(angle),
                sin(angle),cos(angle));
}

void main() {
    vec2 uv0 = vUv * uTiling + vec2(0.0, time * uSpeed);
    vec2 uv1 = vUv * uTiling * 0.8 + vec2(0.0, -time * uSpeed * 0.5);
    vec3 N = vWorldNormal;
    vec3 V = normalize(vV);
    vec3 worldNormal = unpackNormal(V, N, tNormal, uNormalIntensity, 1.0, uv0).xyz;
    worldNormal = mix(worldNormal, unpackNormal(V, N, tNormal, uNormalIntensity, 1.0, uv1).xyz, 0.5);
    vec3 R = reflect(V, worldNormal);
    float NdV = abs(dot(worldNormal, V));

    vec3 normal = crange(texture2D(tNormal, vUv * uRippleTile - (time * uRippleSpeed * 0.01)).xyz, vec3(0.0), vec3(1.0), vec3(-1.0), vec3(1.0));

    float roughness = 0.01;
    vec3 F0 = vec3(0.04);
    vec3 F = fresnelSphericalGaussianRoughness(NdV, F0, roughness);

    vec2 specUV = sampleSphericalMap(R, uEnv.z);
    vec3 specular = texture2D(tEnv, specUV).rgb;
    specular *= F + 0.5;
    specular *= uParams.y;

    vec3 diffuseContrib = 1.0 - F;
    vec3 diffuse = uColor;

    #test Tests.renderMirror()
    vec2 mirrorCoords = vMirrorCoord.xy / vMirrorCoord.w;
    mirrorCoords += normal.xy * 0.1 * uMirrorRoughness;
    vec3 mirrorColor = texture2D(tMirrorReflection, mirrorCoords).rgb;
    diffuse = mix(diffuse, mirrorColor, uMirrorStrength);
    #endtest

    diffuse = pow(diffuse, vec3(2.2));

    vec3 finalColor = specular * uSpecColor + diffuse * diffuseContrib * uParams.x;
    finalColor = pow(finalColor, vec3(0.454545));


    float shadow = 1.0;
    #test Tests.avatarShadow()
        shadow = getShadow(vPos);
    #endtest

    finalColor *= vec3(crange(shadow, 0.0, 1.0, 0.7, 1.0));

    float alpha = specular.r + 0.6;
    alpha *= vAlpha;
    alpha *= uAlpha;
    alpha *= smoothstep(0.5, 0.3, length(vUv2-0.5));
    gl_FragColor = vec4(finalColor, alpha * uAlpha);
}
{@}InsideHokusaiWaveShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;

#!VARYINGS
varying vec2 vUv;
varying vec3 vPos;

#!SHADER: Vertex
#require(simplenoise.glsl)

void main() {
  vec3 pos = position;

  pos.x += (cnoise(pos * 0.4 + time * 0.8) * 1.0);
  pos.y += (cnoise(pos * 0.1 + time * 0.2) * 0.4);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  vPos = position;
  vUv = uv;
}

#!SHADER: Fragment
#require(range.glsl)

void main() {
  vec4 color = texture2D(tMap, vUv);

  gl_FragColor = color;
}{@}InsideMemoBgShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;

#!VARYINGS
varying vec2 vUv;
varying vec3 vPos;

#!SHADER: Vertex
void main() {
    vUv = uv;

    vec3 pos = position;
  vPos = pos;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);

}

#!SHADER: Fragment
#require(range.glsl)
#require(simplenoise.glsl)

vec2 kaleido(vec2 uv) {
  float th = atan(uv.y, uv.x);
  float r = pow(length(uv), .9);
  float f = 3.14159 / 5.5;

  th = abs(mod(th + f/4.0, f) - f/2.0) / (1.0 + r);

  return vec2(cos(th), sin(th)) * r * .1;
}

vec2 transform(vec2 at) {
  vec2 v;
  float th = .01 * time;
  v.x = at.x * cos(th) - at.y * sin(th) - .2 * sin(th) + th * 0.1;
  v.y = at.x * sin(th) + at.y * cos(th) + .2 * cos(th) + th * 0.1;
  return v;
}

void main() {
  vec2 uv = vUv;
  uv.x = mix(-1.0, 1.0, uv.x);
  uv.y = mix(-1.0, 1.0, uv.y);
  uv = kaleido(uv);

  float noise = cnoise(vPos*0.5+time * 0.1);
  vec3 color = texture2D(tMap, transform(uv) * 5.0).rgb;

  color *= 0.6 + noise * 0.2;


  // if (x < 1.0) {
  //   color = texture2D(tMap0, transform(uv) * 5.0).rgb;
  // } else if (x < 2.0) {
  //   color = texture2D(tMap1, transform(uv) * 2.0).rgb;
  // } else {
  //   color = texture2D(tMap2, transform(uv) * 3.0).rgb;
  // }

  // if (uTransition > 0.01) {
  //   // float noize = fbm(vec2(vUv * 20.0 + vec2(0.0, time * 0.1)));

  //   // vec2 t = vec2(
  //   //   fbm(vUv + noize - time),
  //   //   fbm(vUv - noize + time)
  //   // );

  //   // // noize = pow(noize, 20.0);
  //   // // noize = step(0.1, noize);

  //   color.rgb = mix(uColorA, uColorB, 0.4);
  // }

  // color = mix(color, color + 0.3, length(vUv - 0.5) * 2.5);

  gl_FragColor = vec4(color, 1.0);
  // gl_FragColor = vec4(vUv, 1.0, 1.0);
}{@}InsideDecentralandImagesShader.glsl{@}#!ATTRIBUTES
attribute vec4 random;

#!UNIFORMS
uniform sampler2D tMap;
uniform float uAppear;

#!VARYINGS
varying vec2 vUv;
varying vec4 vRandom;
varying float vShow;

#!SHADER: Vertex
#require(range.glsl)
#require(uvgrid.glsl)

void main() {
  vec3 pos = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);

  vShow = rangeTransition(uAppear, random.z, 0.1);
  vUv = uv;
  vRandom = random;
}

#!SHADER: Fragment
#require(roundedBorder.glsl)
#require(uvgrid.glsl)

void main() {
  vec2 sprite = vec2(0.0);
  sprite = getUVForGrid(vUv, 3.0, 4.0, floor(vRandom.x * 3.0), floor(vRandom.y * 4.0));
  
  float inside = 0.0;
  float border = roundedBorder(0.05, 0.04, vUv, vec2(1.0), inside);
  vec3 color = texture2D(tMap, sprite).rgb;
  float alpha = inside;

  alpha *= vShow;

  gl_FragColor = vec4(color, alpha);
}{@}InsideDecentralandParticles.glsl{@}#!ATTRIBUTES
attribute vec4 random;

#!UNIFORMS
uniform sampler2D tPos;
uniform sampler2D tMap;
uniform vec3 uColor;
uniform float DPR;
uniform float uSize;
uniform float uAlpha;

#!VARYINGS
varying float vAlpha;
varying float vType;
varying float vFog;

#!SHADER: Vertex
#require(range.glsl)
#require(simplenoise.glsl)

void main() {
  vec3 pos = texture2D(tPos, position.xy).xyz;

  pos.y += cnoise(pos * 0.04 + time * 0.3) * 0.05;

  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);

  float size = (0.04 * uSize) * DPR * (1000.0 / length(mvPosition.xyz));
  gl_PointSize = size;
  gl_Position = projectionMatrix * mvPosition;

  vec3 viewDir = -vec3(modelViewMatrix * vec4(pos, 1.0));
  vAlpha = 1.0;

  float cdist = length(-viewDir);

  vAlpha *= crange(cdist, 0.0, 8.0, 0.0, 1.0);

  vAlpha += cnoise(pos * 0.01 + time * 0.4) * 0.1;
  vAlpha += cnoise(pos * 1.3 + time * 0.3) * 0.4;

  vType = crange(cdist, 10.0, 50.0, 0.0, 1.0);
  vFog = crange(cdist, 10.0, 60.0, 0.0, 1.0);
}


#!SHADER: Fragment
#require(uvgrid.glsl)

void main() {
  vec2 uv = gl_PointCoord.xy;

  // float type = mix(0.0, 3.0, 0.0);

  vec2 uvparticle = getUVForGrid(uv, 4.0, 1.0, floor(mix(0.0, 3.0, vType)), 0.0);
  vec4 color = texture2D(tMap, uvparticle);

  color.rgb *= uColor;
  color.a = uAlpha * vAlpha;

  color.a *= 1.0 - (vFog * 0.7);

  // color.rgb = mix(vec3(0.0), vec3(1.0, 0.0, 0.0), vType);

  gl_FragColor = color;
}{@}InsideDualImagesShader.glsl{@}#!ATTRIBUTES
attribute vec4 random;
attribute float row;

#!UNIFORMS
uniform sampler2D tMap;
uniform float uAppear;

#!VARYINGS
varying vec3 vLocal;
varying vec2 vUv;
varying vec4 vRandom;
varying float vAppear;

#!SHADER: Vertex
#require(rotation.glsl)
#require(simplenoise.glsl)
#require(range.glsl)
#require(uvgrid.glsl)

void main() {
  vec3 pos = position;

  vec3 opos = position;

  float rotationSpeed = 0.5;

  float rotation = random.z * 10.32 + time * rotationSpeed;
  rotation += sin(time * rotationSpeed) * (uv.y * 1.0);
  rotation += uv.x * sin(time * rotationSpeed) *0.3;

  opos = (rotationMatrix(vec3(0.0, 1.0, 0.0), rotation) * vec4(opos, 1.0)).xyz;

  opos.y += random.x + random.y * 6.0;
  // opos.z += random.x * 0.3;
  // opos.x += sin(time * 0.3 + (random.w * 32.123)) * 0.2;
  vLocal = opos;

  pos = transformPosition(opos, offset, scale, orientation);


  float speed = 0.04;
  float angle = (time * speed);
  pos = (rotationMatrix(vec3(0.0, 1.0, 0.0), angle) * vec4(pos, 1.0)).xyz;

  // float life = mod(time + random.x * 15.0, 15.0);
  // pos.y += life;

  // vAppear = crange(life, 0.0, 3.0, 0.0, 1.0);
  // vAppear *= crange(life, 13.0, 15.0, 1.0, 0.0);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);

  vUv = uv;
  vRandom = random;
}

#!SHADER: Fragment
#require(roundedBorder.glsl)
#require(uvgrid.glsl)

void main() {
  vec2 sprite = vec2(0.0);

  if (gl_FrontFacing) {
    sprite = getUVForGrid(vUv, 3.0, 1.0, floor(vRandom.x * 3.0), floor(vRandom.y * 1.0));
  } else {
    sprite = getUVForGrid(vUv, 3.0, 1.0, floor(vRandom.w * 3.0), floor(vRandom.z * 1.0));
  }

  float inside = 0.0;
  float border = roundedBorder(0.05, 0.04, vUv, vec2(1.0), inside);
  vec3 color = texture2D(tMap, sprite).rgb;
  float alpha = inside;

  // color += vLocal.z * 0.03;

  alpha *= uAppear;
  // alpha *= vAppear;

  gl_FragColor = vec4(color, alpha);
}{@}InsideDualPizzaShader.glsl{@}#!ATTRIBUTES
attribute vec4 random;
attribute float row;

#!UNIFORMS
uniform sampler2D tMap;
uniform float uAppear;
uniform vec2 uAspectRatio;

#!VARYINGS
varying vec2 vUv;
varying vec2 vSprite;
varying float vShow;

#!SHADER: Vertex
#require(rotation.glsl)
#require(simplenoise.glsl)
#require(range.glsl)
#require(uvgrid.glsl)

#define PI 3.1415926538

void main() {
  vec3 pos = position;
  vec3 opos = position;

  float a = uAspectRatio.x / uAspectRatio.y;
  // pos.x *= a;

  float speed = 0.04;

  float angle = (time * speed);
  pos = (rotationMatrix(vec3(0.0, 1.0, 0.0), angle) * vec4(pos, 1.0)).xyz;
  //pos = transformPosition(opos, offset, scale, orientation);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);

  vShow = rangeTransition(uAppear, random.z, 0.1);
  vShow *= 1.0 - crange(row, 0.8, 0.95, 0.0, 1.0);
  vShow *= 1.0 - crange(row, 0.1, 0.05, 0.0, 1.0);

  // float imgWidth = 3.;
  // float imgHeight = 2.;
  float imgWidth = 5.;
  float imgHeight = 1.;

  vSprite = getUVForGrid(uv, imgWidth, imgHeight, floor(random.x * 3.), floor(random.y * 1.0));

  vUv = uv;
}

#!SHADER: Fragment
#require(roundedBorder.glsl)
#require(uvgrid.glsl)

void main() {
  float inside = 0.0;
  float border = roundedBorder(0.0, 0.1, vUv, vec2(1.0), inside);
  vec3 color = vec3(0.0);

  color = texture2D(tMap, vSprite).rgb;
  float alpha = inside;

  alpha *= vShow;
  alpha *= 0.7;

  gl_FragColor = vec4(color, alpha);
}{@}InsideVeeBgShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 uColor;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform float uTransition;

#!VARYINGS
varying vec3 vPos;
varying vec2 vUv;

#!SHADER: Vertex
void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  vPos = position;
  vUv = uv;
}

#!SHADER: Fragment
#require(simplenoise.glsl)
#require(range.glsl)

void main() {
  float r = pow(crange(vUv.y, 0.5, 0.6, 1.0, 0.0), 2.0);
  r *= pow(crange(vUv.y, 0.2, 0.5, 0.0, 1.0), 10.0);

  vec3 color = mix(uColorA, uColorB, r);


  if (uTransition > 0.001) {
    vec3 newColor = uColor;
    newColor *= 1.0 + (cnoise(vPos * 0.2 + time * 0.01) * 0.15);
    newColor += getRandom(vPos.xy + time) * 0.005;
    color = mix(color, newColor, uTransition);
  }

  gl_FragColor = vec4(color, 1.0);
}{@}InsideVeeImagesShader.glsl{@}#!ATTRIBUTES
attribute vec4 random;
attribute float row;

#!UNIFORMS
uniform sampler2D tMap;
uniform float uAppear;
uniform vec2 uAspectRatio;

#!VARYINGS
varying vec2 vUv;
varying vec2 vSprite;
varying float vShow;

#!SHADER: Vertex
#require(rotation.glsl)
#require(simplenoise.glsl)
#require(range.glsl)
#require(uvgrid.glsl)

#define PI 3.1415926538

void main() {
  vec3 pos = position;
  vec3 opos = position;

  float a = uAspectRatio.x / uAspectRatio.y;
  float speed = 0.04;

  float angle = (time * speed);
  pos = (rotationMatrix(vec3(0.0, 1.0, 0.0), angle) * vec4(pos, 1.0)).xyz;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);

  vShow = rangeTransition(uAppear, random.z, 0.1);
  vShow *= 1.0 - crange(row, 0.8, 0.95, 0.0, 1.0);
  vShow *= 1.0 - crange(row, 0.1, 0.05, 0.0, 1.0);

  float imgWidth = 5.;
  float imgHeight = 2.;
  vSprite = getUVForGrid(uv, imgWidth, imgHeight, floor(random.x * imgWidth), floor(random.y * imgHeight));
  vUv = uv;
}

#!SHADER: Fragment
#require(roundedBorder.glsl)
#require(uvgrid.glsl)

void main() {
  float inside = 0.0;
  float border = roundedBorder(0.0, 0.1, vUv, vec2(1.0), inside);
  vec3 color = vec3(0.0);

  color = texture2D(tMap, vSprite).rgb;
  float alpha = inside;

  alpha *= vShow;

  gl_FragColor = vec4(color, alpha);
  // gl_FragColor = vec4(1.);
}{@}InsideVeeUSShader.glsl{@}#!ATTRIBUTES
attribute vec4 random;

#!UNIFORMS
uniform sampler2D tMap;
uniform float uAppear;

#!VARYINGS
varying vec2 vUv;
varying vec2 vSprite;
varying float vShow;

#!SHADER: Vertex
#require(rotation.glsl)
#require(simplenoise.glsl)
#require(range.glsl)
#require(uvgrid.glsl)

#define PI 3.1415926538

void main() {
  vec3 pos = position;

  float speed = 0.04;

  float angle = (time * speed);
  pos = (rotationMatrix(vec3(0.0, 1.0, 0.0), angle) * vec4(pos, 1.0)).xyz;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);

  vShow = rangeTransition(uAppear, random.z, 0.1);

  vSprite = getUVForGrid(uv, 2.0, 2.0, floor(random.x * 2.0), floor(random.y * 2.0));
  vUv = uv;
}

#!SHADER: Fragment
#require(roundedBorder.glsl)
#require(uvgrid.glsl)

void main() {
  float inside = 0.0;
  float border = roundedBorder(0.0, 0.1, vUv, vec2(1.0), inside);
  vec3 color = vec3(0.0);

  color = texture2D(tMap, vSprite).rgb;
  float alpha = inside;

  alpha *= vShow;

  gl_FragColor = vec4(color, alpha);
  // gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
}{@}InsideGucciBgShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 uColor; //js new Color("#ff0000");

#!VARYINGS
varying vec3 vPos;

#!SHADER: Vertex
void main() {
  vPos = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: Fragment
#require(simplenoise.glsl)

void main() {
  vec3 color = uColor;

  color *= 1.0 + (cnoise(vPos * 0.2 + time * 0.01) * 0.15);
  color += getRandom(vPos.xy + time) * 0.005;

  gl_FragColor = vec4(color, 1.0);
}{@}InsideGucciLightShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 uColor;
uniform sampler2D tMap;
uniform sampler2D uScene;
uniform sampler2D tNoise;

#!VARYINGS
varying vec2 vUv;
varying vec3 vViewDir;
varying vec3 vNormal;
varying vec3 vWorldPos;

#!SHADER: Vertex
#require(simplenoise.glsl)

void main() {
  vec3 pos = position;

  pos.y += cnoise(pos * 200.0 + time * 0.1) * 0.3;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);

  vWorldPos = (modelMatrix * vec4(pos, 1.0)).xyz;
  vNormal = normalize(normalMatrix * normal);
  vViewDir = -vec3(modelViewMatrix * vec4(position, 1.0));
  vUv = uv;
}

#!SHADER: Fragment
#require(simplenoise.glsl)
#require(range.glsl)
#require(fresnel.glsl)
#require(rgbshift.fs)
#require(radialblur.fs)

#define saturate(a) clamp( a, 0.0, 1.0 )

vec3 hue(vec3 color, float hue) {
    const vec3 k = vec3(0.57735, 0.57735, 0.57735);
    float cosAngle = cos(hue);
    return vec3(color * cosAngle + cross(k, color) * sin(hue) + k * dot(k, color) * (1.0 - cosAngle));
}

void main() {
  vec2 uv = vUv + vWorldPos.yz;

  uv *= 0.2;

  uv.x += time * 0.06;
  uv.y += time * 0.03;

  vec3 color = vec3(1.0);//texture2D(tMap, uv).rgb;
  vec3 noisetex = texture2D(tNoise, vUv * 0.2 - time * 0.02).rgb;

  color = vec3(noisetex.r);

  float fresnel = getFresnel(vNormal, vViewDir, 5.0);
  // color = mix(color, getRGB(tMap, uv, time*0.6, sin(time * 0.4)*2.0).rgb, noisetex.g);


  vec2 suv = gl_FragCoord.xy / resolution.xy;
  // color = getRGB(uScene, suv * 1.0 + sin(time * 0.2) * 0.004, time * 0.02, sin(time) * 0.01).rgb;

  float alpha = 0.13;
  alpha *= 1.0 - fresnel;

  // vec3 texel = radialBlur(uScene, suv, 40.0 + (sin(time * 4.0) * 30.0), 3.0).rgb;
  // color.rgb *= 1.0 + texel * 0.8;
  // color.rgb = texel;

  color *= uColor;
  // alpha += pow(noisetex.b, 3.0) * 0.1;

  float noise = cnoise(vWorldPos * 0.2 + (vUv.y * 0.4) + time * 0.3);
  alpha *= crange(noise, -1.0, 1.0, 0.8, 1.0);

  alpha *= crange(vUv.y, 0.0, 0.2, 0.0, 1.0);
  alpha *= crange(vUv.x, 0.0, 0.2, 0.0, 1.0);

  alpha *= crange(vUv.y, 0.95, 1.0, 1.0, 0.0);
  alpha *= crange(vUv.x, 0.8, 1.0, 1.0, 0.0);

  // fade near camera
  alpha *= crange(length(-vViewDir), 0.0, 8.0, 0.0, 1.0);

  gl_FragColor = vec4(color, alpha);
}{@}InsideGucciParticles.glsl{@}#!ATTRIBUTES
attribute vec4 random;

#!UNIFORMS
uniform sampler2D tPos;
uniform sampler2D tMap;
uniform vec3 uColor;
uniform float DPR;
uniform float uSize;
uniform float uAlpha;

#!VARYINGS
varying float vAlpha;
varying float vType;
varying float vFog;
varying vec3 vPos;
varying vec4 vRandom;

#!SHADER: Vertex
#require(range.glsl)
#require(simplenoise.glsl)

void main() {
  vec3 pos = texture2D(tPos, position.xy).xyz;

  pos.y += cnoise(pos * 0.04 + time * 0.3) * 0.05;
  vPos = pos;

  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);

  float size = (0.04 * uSize) * DPR * (1000.0 / length(mvPosition.xyz));
  size *= mix(1.0, 2.0, random.y);

  gl_PointSize = size;
  gl_Position = projectionMatrix * mvPosition;

  vec3 viewDir = -vec3(modelViewMatrix * vec4(pos, 1.0));
  vAlpha = 1.0;

  float cdist = length(-viewDir);

  vAlpha *= crange(cdist, 0.0, 8.0, 0.0, 1.0);

  vAlpha += cnoise(pos * 0.01 + time * 0.4) * 0.1;
  vAlpha += cnoise(pos * 1.3 + time * 0.3) * 0.4;

  vType = crange(cdist, 10.0, 50.0, 0.0, 1.0);
  vFog = crange(cdist, 10.0, 60.0, 0.0, 1.0);
  vRandom = random;
}


#!SHADER: Fragment
#require(uvgrid.glsl)
#require(rgb2hsv.fs)
#require(range.glsl)
#require(simplenoise.glsl)

void main() {
  vec2 uv = gl_PointCoord.xy;

  // float type = mix(0.0, 3.0, 0.0);

  vec2 uvparticle = getUVForGrid(uv, 4.0, 1.0, floor(mix(0.0, 3.0, vType)), 0.0);
  vec4 color = texture2D(tMap, uvparticle);

  float alpha = smoothstep(0.0, 0.2, rgb2hsv(color.rgb).z);

  color.rgb *= uColor;


  vec3 hsv = rgb2hsv(color.rgb);
  hsv.x += cnoise(vPos * 0.005 +time*0.2) * 0.02;
  hsv.x += -0.05 + vRandom.x * 0.1;
  hsv.z += cnoise(vPos * 0.007 + time*0.15) * 0.1;
  hsv.z *= mix(0.5, 1.0, vRandom.z);
  color.rgb = hsv2rgb(hsv);


  color.a = alpha * uAlpha * vAlpha;
  //color.a *= 1.0 - (vFog * 0.7);


  if (color.a < 0.02) discard;

  // color.rgb = mix(vec3(0.0), vec3(1.0, 0.0, 0.0), vType);

  gl_FragColor = color;
}{@}CopyData.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    gl_Position = vec4(position, 1.0);
    vUv = uv;
}

    #!SHADER: Fragment
void main() {
    gl_FragColor = texture2D(tMap, vUv);
}
{@}ImageParticles.glsl{@}// InstancedMeshParticles.glsl
#!ATTRIBUTES
attribute vec3 lookup;
attribute vec4 random;

#!UNIFORMS
uniform sampler2D tPos;
uniform float uImageScale;
uniform vec2 uImageScaleRange;
uniform sampler2D tImageShiftState;

uniform float uMode;
uniform float uParticleCount;

//tunnel mode uniforms
uniform float uTunnelRadius;
uniform float uTunnelHeight;
//uniform float uTunnelDepth;
uniform float uHorizontal;
uniform float uImageTransitionMode;
uniform vec2 uTunnelFogParams;

//tornado mode uniforms
uniform vec2 uTornadoDistanceSmoothstep;
uniform vec2 uTornadoDistanceScale;
uniform float uTornadoHeight;
uniform vec2 uTornadoMinMaxSize;
uniform vec2 uTornadoFogParams;

//floating mode uniforms
uniform vec2 uFloatingDistanceSmoothstep;
uniform vec2 uFloatingDistanceScale;
uniform vec2 uFloatingMinMaxSize;
uniform vec2 uFloatingFogParams;

//sprite sheet
uniform sampler2D tMap;
uniform vec2 uGridCount;
uniform float uAspectRatio;

uniform sampler2D tBlueNoise;
uniform float uReveal;
uniform vec3 uFogColor;

#!VARYINGS
varying vec2 vUv;
varying vec2 vGridCurrent;
varying vec2 vGridNext;
varying vec4 vImageShiftState;
varying float vYPhase;
varying vec3 vRandom;
varying float vFog;

#require(instance.vs)
#require(range.glsl)
#require(uvgrid.glsl)

#define PI 3.14159265359
#define TAU 3.14159265359 * 2.0

mat3 orient(in vec3 offset, vec3 target) {

    vec3 forward = normalize(target-offset);
    vec3 tmp = vec3(0.0, 1.0, 0.0);

    vec3 side = normalize(cross(tmp, forward));
    vec3 up = normalize(cross(forward, side));

    return mat3(
        side.x, side.y, side.z,
        up.x, up.y, up.z,
        forward.x, forward.y, forward.z
    );
}

#!SHADER: Vertex
#require(simplenoise.glsl)

void main() {

    //positions are in domain -1.0 and 1.0 (in the case of tunnel mode)
    vec4 offset = texture2D(tPos, lookup.xy);
    vec3 localPos = position;

    localPos.y *= uAspectRatio;

    float scale = uImageScale;


    //x = current life
    //y = rate in which to reduce life
    //z = index offset for texture atlas sampling
    //w = smoothstep limits
    vec4 imageShiftState = texture2D(tImageShiftState, lookup.xy);
    vImageShiftState = imageShiftState;

    //TUNNEL MODE
    if(uMode < 0.5) {

        //get y position in 0 and 1 range and store in variable
        float tunnelPhase = mix(offset.y, offset.z, floor(uHorizontal)) * 0.5 + 0.5;

        float revealTimeOffset = mix(0.1, 1.0, random.x * mix(0.1, 1.0, tunnelPhase));
        float reveal = rangeTransition(uReveal, random.y, random.w); //random reveal

        //set radius based on parabola and and scale the height / depth!
        tunnelPhase = tunnelPhase * 4.0 * (1.0-tunnelPhase);

        float tapper = smoothstep(0.0, 3.0, tunnelPhase);
        float scalePhase = mix(tapper, 1.0, tunnelPhase);

//        if(uHorizontal > 0.0) {
//            offset.x *= uTunnelRadius * scalePhase;
//            offset.y *= uTunnelRadius * scalePhase;
//            offset.z *= uTunnelDepth;
//        } else {
//            offset.x *= uTunnelRadius * scalePhase;
//            offset.z *= uTunnelRadius * scalePhase;
//            offset.y *= uTunnelHeight * uAspectRatio;
//        }

        offset.x *= uTunnelRadius * scalePhase;
        offset.z *= uTunnelRadius * scalePhase;
        offset.y *= uTunnelHeight * uAspectRatio;

        //face towards platform
        localPos = orient(offset.xyz, vec3(0.0, offset.y, 0.0)) * localPos;

        //scale local positions of quad geometry
        scale *= smoothstep(0.0, 1.0, tunnelPhase) * reveal;

        vYPhase = tunnelPhase;
    }

    //TORNADO MODE
    if(uMode > 0.5 && uMode < 1.5) {

        localPos = orient(offset.xyz, vec3(0.0, offset.y, 0.0)) * localPos;

        float yPhase = (offset.y / uTornadoHeight) * 0.5 + 0.5;
        float heightScale = yPhase * 4.0 * (1.0-yPhase);

        float revealTimeOffset = mix(0.1, 1.0, random.x * mix(0.1, 1.0, yPhase));
        float reveal = rangeTransition(uReveal, random.x, random.y);

        float scalePhase = (1.0 - offset.w);
        scalePhase = smoothstep(uTornadoDistanceSmoothstep.x, uTornadoDistanceSmoothstep.y, scalePhase);
        float distanceScale = mix(uTornadoDistanceScale.x, uTornadoDistanceScale.y, scalePhase);
        scale = uImageScale * clamp(heightScale, 0.0, 1.0) * reveal * crange(random.x, 0.0, 1.0, uTornadoMinMaxSize.x, uTornadoMinMaxSize.y);
        vYPhase = 1.0;

    }

    //FLOATING MODE
    if(uMode > 1.5 && uMode < 2.5) {

        localPos = orient(offset.xyz, vec3(0.0, offset.y, 0.0)) * localPos;
        float reveal = rangeTransition(uReveal, (lookup.z/uParticleCount) + random.w*0.1, random.y);

        float scalePhase = (1.0 - offset.w);
        scalePhase = smoothstep(uFloatingDistanceSmoothstep.x, uFloatingDistanceSmoothstep.y, scalePhase);
        float distanceScale = mix(uFloatingDistanceScale.x, uFloatingDistanceScale.y, scalePhase);
        scale = uImageScale * distanceScale * reveal * crange(random.x, 0.0, 1.0, uFloatingMinMaxSize.x, uFloatingMinMaxSize.y);
        vYPhase = 1.0;
    }

    vec3 pos = transformPosition(localPos, offset.xyz, scale);

    vec3 hotspotPosition = vec3(0.0,0.0,0.0);

    float dist = length(pos);

    if(uMode < 0.5) {
        vFog = smoothstep(uTunnelFogParams.x, uTunnelFogParams.y, dist);
    }

    if(uMode > 0.5 && uMode < 1.5) {
        vFog = smoothstep(uTornadoFogParams.x, uTornadoFogParams.y, dist);
    }

    if(uMode > 1.5 && uMode < 2.5) {
        vFog = smoothstep(uFloatingFogParams.x, uFloatingFogParams.y, dist);
    }

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    vUv = uv;
    vRandom = random.xyz;

    if(uMode < 0.5) {

        float sheetOffsetX = floor(random.x * uGridCount.x) + imageShiftState.z;
        float sheetOffsetY = floor(random.y * uGridCount.y) + imageShiftState.z;

        vGridCurrent = getUVForGrid(uv, uGridCount.x, uGridCount.y, mod(sheetOffsetX, uGridCount.x), mod(sheetOffsetY, uGridCount.y));
        vGridNext = getUVForGrid(uv, uGridCount.x, uGridCount.y, mod(sheetOffsetX + 1.0, uGridCount.x), mod(sheetOffsetY + 1.0, uGridCount.y));

    } else {
        vGridCurrent = getUVForGrid(uv, uGridCount.x, uGridCount.y, floor(random.x * uGridCount.x), floor(random.y * uGridCount.y));
        vGridNext = getUVForGrid(uv, uGridCount.x, uGridCount.y, floor(random.x * uGridCount.x), floor(random.y * uGridCount.y));
    }

}

    #!SHADER: Fragment

void main() {

    vec3 currentCol = texture2D(tMap, vGridCurrent).xyz;
    vec3 nextCol = texture2D(tMap, vGridNext).xyz;
    float transition = 0.0;

    //good ol' fade
    if(uImageTransitionMode < 0.5) {
        transition = smoothstep(vImageShiftState.w, 1.0, 1.0 - vImageShiftState.x);
    }

    //vertical wipe
    if(uImageTransitionMode > 0.5 && uImageTransitionMode < 1.5) {
        transition = floor(rangeTransition(smoothstep(vImageShiftState.w, 1.0, 1.0 - vImageShiftState.x), vUv.y, vRandom.y + 0.1));
    }

    //blocky cyber reveal something
    if(uImageTransitionMode > 1.5 && uImageTransitionMode < 2.5) {
        float noise = texture2D(tBlueNoise, floor(vUv*32.0)/32.0).x;
        transition = rangeTransition(smoothstep(vImageShiftState.w, 1.0, 1.0 - vImageShiftState.x), noise, 0.01);
    }


    vec3 col = mix(currentCol, nextCol, transition);
    col = mix(col, uFogColor, vFog);

    gl_FragColor = vec4(col, 1.0);
}
{@}ImageShiftState.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tImageShift;
uniform sampler2D tPos;
uniform float uSpeed;
uniform vec2 uMinMaxLifeRate;
uniform vec2 uSmoothstepMinMax;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    gl_Position = vec4(position, 1.0);
    vUv = uv;
}

    #!SHADER: Fragment
    #require(simplenoise.glsl)
void main() {

    vec2 pos = texture2D(tPos, vUv).xy;
    float random = getNoise(pos, time);

    //x = current life
    //y = rate in which to reduce life
    //z = index offset for texture atlas sampling
    //w = smoothstep limits
    vec4 imageShiftState = texture2D(tImageShift, vUv);

    if(imageShiftState.x <= 0.0) {
        imageShiftState.x = 1.0;
        imageShiftState.y = mix(uMinMaxLifeRate.x, uMinMaxLifeRate.y, random) * 0.001;
        imageShiftState.z += 1.0;
        imageShiftState.w = mix(uSmoothstepMinMax.x, uSmoothstepMinMax.y, random);
    }

    imageShiftState.x -= imageShiftState.y * uSpeed;

    gl_FragColor = imageShiftState;
}
{@}ImageCloudBackground.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 uColor;

#!VARYINGS

#!SHADER: Vertex
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

    #!SHADER: Fragment
void main() {
    gl_FragColor = vec4(uColor, 1.0);
}
{@}FloatingImageParticles.glsl{@}// InstancedMeshParticles.glsl
#!ATTRIBUTES
// lookup tells you where the particle position is IN the system
attribute vec3 lookup;
// random is a vec4 with 4 random components for every
// instance you're rendering
attribute vec4 random;

#!UNIFORMS
// tPos is a texture with positions supplied through .addToShader
uniform sampler2D tPos;
uniform float uScale;
uniform vec2 uScaleRange;

uniform sampler2D tMap;
uniform vec2 uGridCount;

uniform float uApplyDistanceScale;
uniform vec2 uDistanceSmoothstep;
uniform vec2 uDistanceScale;
uniform float uApplyNoiseDisplacement;

#!VARYINGS
varying vec2 vUv;
varying vec2 vGridCoord;
varying vec3 vPos;
varying float vNoise;

// We need instance.vs for the transformPosition function
#require(instance.vs)
#require(range.glsl)
#require(uvgrid.glsl)


mat3 oritentToCenter(in vec3 offset) {

    vec3 forward = normalize(vec3(0.0, offset.y, 0.0) - offset);
    vec3 tmp = vec3(0.0, 1.0, 0.0);

    vec3 side = normalize(cross(tmp, forward));
    vec3 up = normalize(cross(forward, side));

    return mat3(
    side.x, side.y, side.z,
    up.x, up.y, up.z,
    forward.x, forward.y, forward.z
    );

}

    #!SHADER: Vertex
    #require(simplenoise.glsl)
void main() {
    vUv = uv;

    vec4 offset = texture2D(tPos, lookup.xy);
    vec3 localPos = position;
    localPos = oritentToCenter(offset.xyz) * localPos;

    float scale = uScale;

    float scalePhase = (1.0 - offset.w);
    scalePhase = smoothstep(uDistanceSmoothstep.x, uDistanceSmoothstep.y, scalePhase);
    float distanceScale = mix(uDistanceScale.x, uDistanceScale.y, scalePhase);
    scale = uScale * distanceScale;


    vec3 pos = transformPosition(localPos, offset.xyz, scale);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);

    vPos = pos;
    //vNoise = noise;
    vGridCoord = getUVForGrid(uv, uGridCount.x, uGridCount.y, floor(random.x * uGridCount.x), floor(random.y * uGridCount.y));
}

    #!SHADER: Fragment

void main() {

    vec3 col = texture2D(tMap, vGridCoord).xyz;
    gl_FragColor = vec4(col, 1.0);
}
{@}TornadoParticles.glsl{@}// InstancedMeshParticles.glsl
#!ATTRIBUTES
// lookup tells you where the particle position is IN the system
attribute vec3 lookup;
// random is a vec4 with 4 random components for every
// instance you're rendering
attribute vec4 random;

#!UNIFORMS
// tPos is a texture with positions supplied through .addToShader
uniform sampler2D tPos;
uniform float uScale;
uniform vec2 uScaleRange;

uniform sampler2D tMap;
uniform vec2 uGridCount;

uniform float uTornadoHeight;
uniform float uApplyDistanceScale;
uniform vec2 uDistanceSmoothstep;
uniform vec2 uDistanceScale;
uniform float uApplyNoiseDisplacement;

#!VARYINGS
varying vec2 vUv;
varying vec2 vGridCoord;
varying vec3 vPos;
varying float vNoise;

// We need instance.vs for the transformPosition function
#require(instance.vs)
#require(range.glsl)
#require(uvgrid.glsl)


mat3 oritentToCenter(in vec3 offset) {

    vec3 forward = normalize(vec3(0.0, offset.y, 0.0) - offset);
    vec3 tmp = vec3(0.0, 1.0, 0.0);

    vec3 side = normalize(cross(tmp, forward));
    vec3 up = normalize(cross(forward, side));

    return mat3(
        side.x, side.y, side.z,
        up.x, up.y, up.z,
        forward.x, forward.y, forward.z
    );

}

#!SHADER: Vertex
#require(simplenoise.glsl)
void main() {
    vUv = uv;

    vec4 offset = texture2D(tPos, lookup.xy);
    vec3 localPos = position;

    if(uApplyNoiseDisplacement > 0.0) {
        float noise = cnoise((offset.xyz * 0.025) + time * 0.025);
        noise = noise * noise;
        vec3 displacementDir = normalize(vec3(offset.x, 0.0, offset.z));
        offset.xyz -= displacementDir * noise * 0.5;
    }

    localPos = oritentToCenter(offset.xyz) * localPos;

    float yPhase = (offset.y / uTornadoHeight) * 0.5 + 0.5;
    float heightScale = yPhase * 4.0 * (1.0-yPhase);
    float scale = uScale * clamp(heightScale, 0.0, 1.0);
    if(uApplyDistanceScale > 0.0) {
        float scalePhase = (1.0 - offset.w);
        scalePhase = smoothstep(uDistanceSmoothstep.x, uDistanceSmoothstep.y, scalePhase);
        float distanceScale = mix(uDistanceScale.x, uDistanceScale.y, scalePhase);
        scale = uScale * distanceScale;
    }

    vec3 pos = transformPosition(localPos, offset.xyz, scale);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);

    vPos = pos;
    //vNoise = noise;
    vGridCoord = getUVForGrid(uv, uGridCount.x, uGridCount.y, floor(random.x * uGridCount.x), floor(random.y * uGridCount.y));
}

    #!SHADER: Fragment

void main() {

    vec3 col = texture2D(tMap, vGridCoord).xyz;
    gl_FragColor = vec4(col, 1.0);
}
{@}TunnelImages.glsl{@}// InstancedMeshParticles.glsl
#!ATTRIBUTES
attribute vec3 lookup;
attribute vec4 random;

#!UNIFORMS
uniform sampler2D tPos;
uniform float uImageScale;
uniform float uTunnelRadius;
uniform float uTunnelHeight;

uniform sampler2D tImageShiftState;

//sprite sheet
uniform sampler2D tMap;
uniform vec2 uGridCount;

uniform float uReveal;
uniform float uRevealOffsetScale;

uniform float uParabolaPow;

uniform float uShuffleAnimPhase;
uniform float uIndexOffset;

#!VARYINGS
varying vec2 vUv;
varying vec2 vGridCurrent;
varying vec2 vGridNext;
varying vec3 vPos;
varying float vNoise;
varying float vYPhase;
varying vec3 vRandom;

varying vec4 vImageShiftState;

// We need instance.vs for the transformPosition function
#require(instance.vs)
#require(range.glsl)
#require(uvgrid.glsl)
#require(8x8.fs)
#define PI 3.14159265359

mat3 orient(in vec3 offset, vec3 target) {

    vec3 forward = normalize(target - offset);
    vec3 tmp = vec3(0.0, 1.0, 0.0);

    vec3 side = normalize(cross(tmp, forward));
    vec3 up = normalize(cross(forward, side));

    return mat3(
    side.x, side.y, side.z,
    up.x, up.y, up.z,
    forward.x, forward.y, forward.z
    );

}

    #!SHADER: Vertex
    #require(simplenoise.glsl)
void main() {
    vUv = uv;

    //positions are in domain -1.0 and 1.0
    vec4 offset = texture2D(tPos, lookup.xy);

    //get y position in 0 and 1 range and store in variable
    float yPhase = (offset.y) * 0.5 + 0.5;

    float revealTimeOffset = mix(0.1, 1.0, random.x * mix(0.1, 1.0, yPhase));
    float reveal = smoothstep(yPhase, min(1.0, yPhase+(revealTimeOffset*uRevealOffsetScale)), uReveal);

    //...and now scale the height!
    offset.y *= uTunnelHeight;

    //set radius based on parabola
    float scalePhase = pow(yPhase * 4.0 * (1.0-yPhase), 1.0);
    vYPhase = scalePhase;
//    float scalePhase = 1.0 - (cos(yPhase * PI * 2.0)*0.5+0.5);
//    float scalePhase = 1.0 - abs(yPhase * 2.0 - 1.0);
//    offset.x *= uTunnelRadius * scalePhase;
//    offset.z *= uTunnelRadius * scalePhase;

    offset.x *= uTunnelRadius;
    offset.z *= uTunnelRadius;

    vec3 localPos = position;

    //face towards platform
    localPos = orient(offset.xyz, vec3(0.0, offset.y, 0.0)) * localPos;


    //scale local positions of quad geometry
    float scale = uImageScale;

    vec3 pos = transformPosition(localPos, offset.xyz, scale);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);

    vNoise = crange(cnoise((2.0*random.xyz-1.0) * 0.1 + (offset.xyz * 0.5) + time * 0.01), -1.0, 1.0, 0.0, 0.95);
    vPos = pos;

    //x = current life
    //y = rate in which to reduce life
    //z = index offset for texture atlas sampling
    //w = smoothstep limits
    vec4 imageShiftState = texture2D(tImageShiftState, lookup.xy);
    vImageShiftState = imageShiftState;

    float sheetOffsetX = floor(random.x * uGridCount.x) + imageShiftState.z;
    float sheetOffsetY = floor(random.y * uGridCount.y) + imageShiftState.z;

    vRandom = random.xyz;
    vGridCurrent = getUVForGrid(uv, uGridCount.x, uGridCount.y, mod(sheetOffsetX, uGridCount.x), mod(sheetOffsetY, uGridCount.y));
    vGridNext = getUVForGrid(uv, uGridCount.x, uGridCount.y, mod(sheetOffsetX + 1.0, uGridCount.x), mod(sheetOffsetY + 1.0, uGridCount.y));

}

    #!SHADER: Fragment

void main() {

//    float dither = dither8x8(gl_FragCoord.xy, smoothstep(0.0, 0.05, vYPhase));
//    if(dither <= 0.0) discard;

    vec3 currentCol = texture2D(tMap, vGridCurrent).xyz;
    vec3 nextCol = texture2D(tMap, vGridNext).xyz;

//    vec3 col = mix(currentCol, nextCol, uShuffleAnimPhase);
//    vec3 col = mix(currentCol, nextCol, step(vUv.y, uShuffleAnimPhase));
    float transition = rangeTransition(smoothstep(vImageShiftState.w, 1.0, 1.0 - vImageShiftState.x), vUv.y, vRandom.y + 0.1);
    vec3 col = mix(currentCol, nextCol, floor(transition));

    gl_FragColor = vec4(col, smoothstep(0.0, 0.05, vYPhase));
}
{@}LidarPointCloudShader.glsl{@}#!ATTRIBUTES
attribute vec4 random;

#!UNIFORMS
uniform sampler2D tPos;

uniform vec3 uColor;
uniform vec2 uRandomSize;
uniform float uSize;
uniform float uTransition;
uniform float DPR;
uniform float uOpacity;

uniform vec3 uHotSpotPosition;
uniform float uHotSpotRadius;

#!VARYINGS
varying vec3 debug;
varying float vAlpha;
varying vec4 vRandom;
varying float vSize;
varying float vFog;
varying float vAlphaRadial;

#!SHADER: Vertex
#require(range.glsl)

vec3 rotateVector( vec4 quat, vec3 vec) {
    return vec + 2.0 * cross( cross( vec, quat.xyz ) + quat.w * vec, quat.xyz );
}


void main() {
    vec3 pos = texture2D(tPos, position.xy).xyz;

    // pointshape

    // float r = fract(time) / 10.;
    float repeat = fract(time * 0.15);
    // float repeat = fract(time);
    float startPos = 0.;
    // End position for lidar 
    float endPos = 40.;
    float d = mix(startPos, endPos, repeat);
    float r = abs(length(pos) - d);
    float alphaStart = 0.5;
    float alphaEnd = 1.;
    // Ring size
    float rStart = 0.;
    // float rEnd = smoothstep(1., 2.1, 4.);
    float rEnd = 2.;
    vAlphaRadial = crange(r, rStart, rEnd, alphaStart, alphaEnd);

    pos += normal;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);

    float baseSize = 0.04;
    float size = baseSize * uSize * (crange(random.x, 0.0, 1.0, uRandomSize.x, uRandomSize.y));
    float finalSize = size * DPR * (1000.0 / length(mvPosition.xyz));

    gl_PointSize = finalSize;
    // gl_PointSize = 10.;
    gl_Position = projectionMatrix * mvPosition;

    vRandom = random;
    vSize = size;//lightPos.y;
    
    vAlpha = smoothstep(-0.5, -2.5, mvPosition.z);

    // Fog from eyes
    float dist = length(mvPosition);
    float fogFromEyeDistance = 15.;
    vFog = smoothstep(0., fogFromEyeDistance, dist);
}


#!SHADER: Fragment
#require(rgb2hsv.fs)

void main() {
    float d = length(gl_PointCoord.xy - 0.5);

    if (d > 0.5) {
        discard;
    }

    float alpha = uOpacity * vAlpha;
    alpha *= smoothstep(0.5, 0.1, d);
    
    // alpha *= 0.6 + sin(time*2.5+vRandom.y*10.0) * 0.4;
    

    vec3 color = uColor;
    color = rgb2hsv(color);
    // Hue
    color.x += -0.15 + (1.0-alpha) * 0.3 + sin(time*1.0+vRandom.x*20.0)*0.05;
    color.x += vSize;



    // Luminance
    // color.z += sin(time*1.0+vRandom.x*20.0)*0.05;
    color.z *= vAlphaRadial;
    color = hsv2rgb(color);

    // color *= vAlphaRadial;
    

    //vec2 uv = gl_PointCoord.xy;
    //color *= smoothstep(0.5, 1.5, uv.x) * smoothstep(0.5, 1.5, uv.y);


    // alpha *= sin(time);

    vec4 col = vec4(color, alpha) * uTransition;
    vec4 fogColor = vec4(0.);

    gl_FragColor = mix(fogColor, col, vFog);
    // gl_FragColor = col;
    // gl_FragColor = vec4(color, 1.);
}{@}InsideBg.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 uColor;
uniform vec3 uColorSecond;
uniform float uTransition;

#!VARYINGS
varying vec3 vPos;
varying vec2 vUv;

#!SHADER: Vertex
void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  vPos = position;
  vUv = uv;
}

#!SHADER: Fragment
#require(simplenoise.glsl)
#require(range.glsl)

void main() {
  vec3 color = uColor;

  if (uTransition > 0.01) {
    float transition = rangeTransition(uTransition, vUv.y, 0.04);
    color = mix(uColor, uColorSecond, transition);
  }

  color *= 1.0 + (cnoise(vPos * 0.2 + time * 0.01) * 0.15);
  color += getRandom(vPos.xy + time) * 0.005;

  gl_FragColor = vec4(color, 1.0);
}{@}InsideFogShader.glsl{@}#!ATTRIBUTES
attribute vec3 offset;
attribute vec4 orientation;
attribute vec4 random;

#!UNIFORMS
uniform sampler2D tMap;
uniform vec3 uColor;
uniform float uScale;
uniform float uAppear;
uniform float uCullDistance;
uniform float uSpeed;
uniform float uNoiseScale;
uniform float uNoiseStrength;
uniform float uNoiseTime;
uniform float uBillboard;
uniform vec2 uFadeDist;
uniform vec2 uFadeFloor;

#!VARYINGS
varying vec2 vUv;
varying float vAlpha;
varying vec3 vPos;

#!SHADER: Vertex

#require(instance.vs)
#require(range.glsl)
#require(rotation.glsl)

vec3 customTransformPosition(vec3 position, vec3 offset, vec3 scale, vec4 orientation) {
    vec3 _pos = position;
    _pos *= scale;

    _pos = _pos + 2.0 * cross(orientation.xyz, cross(orientation.xyz, _pos) + orientation.w * _pos);
    _pos += offset;
    return _pos;
}

void main() {
    vUv = uv;
    vAlpha = uAppear * crange(random.y, 0.0, 1.0, 0.5, 1.0) * 0.1;

    vec3 inPos = position;
    float rotation = radians((360.0 * random.z) + time*crange(random.w, 0.0, 1.0, -1.0, 1.0)*10.0*uSpeed);
    inPos = vec3(rotationMatrix(vec3(0.0, 0.0, 1.0), rotation) * vec4(inPos, 1.0));

    float scale = uScale * crange(random.x, 0.0, 1.0, 0.5, 1.5);
    vec3 pos = customTransformPosition(inPos, offset, vec3(scale), cameraQuaternion);
    float mDist = length(cameraPosition - vec3(modelMatrix * vec4(pos, 1.0)));

    vAlpha *= crange(mDist, uCullDistance*0.8, uCullDistance, 1.0, 0.0);
    vPos = pos;
    vAlpha *= crange(mDist, uFadeDist.x, uFadeDist.x + uFadeDist.y, 0.0, 1.0);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment

#require(range.glsl)
#require(transformUV.glsl)
#require(simplenoise.glsl)
#require(depthvalue.fs)

vec2 getUV() {
    float noise = cnoise((vPos * uNoiseScale) + time*uNoiseTime);
    float scale = 1.0 + (noise * uNoiseStrength * 0.1);

    return scaleUV(vUv, vec2(scale));
}


void main() {
    float opacity = vAlpha;
    float maskFloor = crange(vPos.y, uFadeFloor.x, uFadeFloor.y, 0.0, 1.0);

    if (opacity < 0.01 || maskFloor > 1.0) {
        discard;
        return;
    }

    vec3 color = uColor;

    opacity *= maskFloor;
    opacity *= crange(getNoise(vUv, time), -1.0, 1.0, 0.8, 1.0);

    vec2 uv = uNoiseStrength > 0.0 ? getUV() : vUv;
    float mask = texture2D(tMap, uv).r;
    float padding = 0.3;
    mask *= crange(vUv.x, 0.0, padding, 0.0, 1.0) * crange(vUv.x, 1.0 - padding, 1.0, 1.0, 0.0);
    mask *= crange(vUv.y, 0.0, padding, 0.0, 1.0) * crange(vUv.y, 1.0 - padding, 1.0, 1.0, 0.0);

    float alpha = mask * opacity;

    alpha *= 1.0 - (getNoise(vUv, time) * 0.4);

    gl_FragColor = vec4(color, alpha);
}
{@}SwirlShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tColor;
uniform float useGlowEffect;
uniform float uTransition;

#!VARYINGS
varying vec2 vUv;
varying float vLength;
varying vec3 vColor;
varying float vLife;
varying vec3 vDiscard;
varying vec2 vUv2;

#!SHADER: Vertex
void main() {
	//hydra does a bit of magic, so anything in here only goes at the end of the tube shader
	//most likely you just want to leave this blank

    vColor = texture2D(tColor, iuv).rgb;
    vLife = texture2D(tLife, iuv).r;
}

#!SHADER: Fragment

#require(range.glsl)

void main() {
    if (vUv.x < 0.8 || vLength < 0.01 || vLength > 0.99 || length(vDiscard) > 1000.) discard; //chop off the ends

    float s = vUv.y * 2.;
    if(s > 1.) s = 2. - s;

    float life = vLife;
    life = pow(life, .4);
    if(vLife > 0.5) life = 1. - vLife;
    life *= 2.;

    float alpha = 1. - abs(s - 0.5) * 2.;
    alpha = pow(alpha, 3.);

    vec3 coloredGradient = mix(vColor, vec3(1.), alpha);
    if(useGlowEffect > 0.5) life *= alpha;

    gl_FragColor = vec4(useGlowEffect > 0.5 ? coloredGradient : vColor, life * uTransition);
}{@}KineticShader.glsl{@}#!ATTRIBUTES
attribute float id;

#!UNIFORMS

#!VARYINGS
varying float vId;
varying vec3 vWorldPos;

#!SHADER: Vertex
#require(rotation.glsl)
#require(fbr.vs)

void main() {
  vec3 pos = position;

  float speed = 0.1;
  float offset = id * 2.0;
  float t = time * speed  + offset;

  pos.y += sin(t) * 4.0;

  float spring = sin(t * 0.3);
  float spring2 = cos(t * 0.2);
  float pid = id * 5.0;

  float rotationX = (pid * spring2 * spring) + t * 0.3 + offset;//(pid * 0.5) + ((pid * 0.3) * time) * 0.2;
  float rotationY = (pid * spring2 * spring) + t * 0.22 + offset * 0.8;
  float rotationZ = (pid * spring2 * spring) + t * 0.27 + offset * 0.3;//(pid * spring2) + time * 0.1;//time;
  
  mat4 rot = 
    rotationMatrix(vec3(1.0, 0.0, 0.0), rotationX) *
    rotationMatrix(vec3(1.0, 0.0, 0.0), rotationY) *
    rotationMatrix(vec3(0.0, 0.0, 1.0), rotationZ);

  pos = (rot * vec4(pos, 1.0)).xyz;
  pos.y += sin(t * 0.2 + offset) * 4.0;

  setupFBR(pos);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);

  vNormal = normalize(normalMatrix * normal);
  vNormal = (rot * vec4(vNormal, 1.0)).xyz;
  vId = id;
  vWorldPos = vec3(modelMatrix * vec4(pos, 1.0));
}

#!SHADER: Fragment
#require(fbr.fs)

void main() {
  vec3 color = uColor;
  vec3 fbr = getFBRSimplified();

  fbr *= mix(0.5, 1.0, vId);

  #drawbuffer Color gl_FragColor = vec4(fbr, 1.0);
  #drawbuffer WorldPos gl_FragColor = vec4(vWorldPos, 1.0);
}{@}LightShaftShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 uColor;
uniform sampler2D tMap;
uniform sampler2D uScene;
uniform sampler2D uScene2;
uniform sampler2D tNoise;

#!VARYINGS
varying vec2 vUv;
varying vec3 vViewDir;
varying vec3 vNormal;
varying vec3 vWorldPos;

#!SHADER: Vertex
#require(simplenoise.glsl)

void main() {
  vec3 pos = position;

  pos.y += cnoise(pos * 200.0 + time * 0.1) * 0.3;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);

  vWorldPos = (modelMatrix * vec4(pos, 1.0)).xyz;
  vNormal = normalize(normalMatrix * normal);
  vViewDir = -vec3(modelViewMatrix * vec4(position, 1.0));
  vUv = uv;
}

#!SHADER: Fragment
#require(fresnel.glsl)
#require(range.glsl)
#require(simplenoise.glsl)
#require(rgbshift.fs)
#require(radialblur.fs)

#define saturate(a) clamp( a, 0.0, 1.0 )

vec3 hue(vec3 color, float hue) {
    const vec3 k = vec3(0.57735, 0.57735, 0.57735);
    float cosAngle = cos(hue);
    return vec3(color * cosAngle + cross(k, color) * sin(hue) + k * dot(k, color) * (1.0 - cosAngle));
}

void main() {
  vec2 uv = vUv + vWorldPos.yz;

  uv *= 0.2;

  uv.x += time * 0.06;
  uv.y += time * 0.03;

  vec3 color = texture2D(tMap, uv).rgb;
  vec3 color2 = vec3(1.);

  vec3 noisetex = texture2D(tNoise, vUv * 2.0 - time * 0.02).rgb;

  float fresnel = getFresnel(vNormal, vViewDir, 5.0);
  color = mix(color, getRGB(tMap, uv, time*0.6, sin(time * 0.4)*2.0).rgb, noisetex.g);
  vec3 prevColor = color;

  float alpha = 0.07;

  #test !Tests.isVR()

    vec2 suv = gl_FragCoord.xy / resolution.xy;

    color = getRGB(uScene, suv + sin(time * 0.2) * 0.004, time * 0.02, sin(time) * 0.01).rgb;
    color2 = getRGB(uScene2, suv + sin(time * 0.2) * 0.004, time * 0.02, sin(time) * 0.01).rgb;

    color = max(color, color2);
    if(length(color) == 0.) color = prevColor;

    alpha *= 1.0 - fresnel;

    float h = 40.0 + (sin(time * 4.0) * 30.0);
    vec3 texel = radialBlur(uScene, suv, h, 3.0).rgb;
    vec3 texel2 = radialBlur(uScene2, suv, h, 3.0).rgb;

    color.rgb *= 1.0 + max(texel, texel2) * 0.8;

  #endtest

  color *= uColor;
  // alpha += pow(noisetex.b, 3.0) * 0.1;

  float noise = cnoise(vWorldPos * 0.2 + (vUv.y * 0.4) + time * 0.3);
  alpha *= crange(noise, -1.0, 1.0, 0.8, 1.0);

  alpha *= crange(vUv.y, 0.0, 0.2, 0.0, 1.0);
  alpha *= crange(vUv.x, 0.0, 0.2, 0.0, 1.0);

  alpha *= crange(vUv.y, 0.95, 1.0, 1.0, 0.0);
  alpha *= crange(vUv.x, 0.8, 1.0, 1.0, 0.0);

  // fade near camera
  alpha *= crange(length(-vViewDir), 0.0, 8.0, 0.0, 1.0);

  // alpha *= 1.0 - uHotspotTransition;
  // color = vec3(1.0, 0.0, 0.0);
  // alpha = 0.4;

  #drawbuffer Color gl_FragColor = vec4(color, alpha);
  #drawbuffer WorldPos gl_FragColor = vec4(vWorldPos, alpha);
}{@}PathShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 uColor;
uniform sampler2D tMap;
uniform float uSpeed;
uniform vec2 uTiling;
uniform vec3 uDistHSL;

#!VARYINGS
varying vec2 vUv;
varying float vProgress;
varying vec3 vWorldPos;

#!SHADER: Vertex
void main() {

    vec3 pos = position;

    vProgress = uv.y;
    vUv = uv * uTiling;
    vWorldPos = vec3(modelMatrix * vec4(pos, 1.0));

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment
#require(rgb2hsv.fs)
#require(range.glsl)

vec3 getDistanceHSL(vec3 inColor, vec3 worldPos, float extra) {
    vec3 color = rgb2hsv(inColor);
    float dist = crange(length(cameraPosition - worldPos), uDistHSL.y, uDistHSL.y + uDistHSL.z, 0.0, 1.0);
    color.x += uDistHSL.x * 0.1 * dist;
    color.x += extra;
    return hsv2rgb(color);
}

vec3 getDistanceHSL(vec3 inColor, vec3 worldPos) {
    return getDistanceHSL(inColor, worldPos, 0.0);
}

void main() {
    vec2 uv = vUv;

    float speedTime = time;

    uv.y += speedTime * 0.05;

    vec4 mask = texture2D(tMap, uv);

    float value = mask.b > 0.5 ? 1.0 : -1.0;
    float opacity = 1.0;

    opacity = crange(abs(sin(mask.r * uSpeed + speedTime) * value) - 0.5, 0.0, 1.0, 0.06, 1.0);

    vec3 color = getDistanceHSL(uColor, vWorldPos);

    color = rgb2hsv(color);
    color.x -= (1.0-opacity)*0.03;
    color.x += (abs(sin(mask.r * uSpeed + speedTime + 10.0) * value) - 0.5) * 0.1;
    color = hsv2rgb(color);

    vec4 final = vec4(color, opacity * mask.g);

    float alpha = smoothstep(0.0, 0.2, vUv.x) * smoothstep(1.0, 0.8, vUv.x);

    //alpha *= smoothstep(0.5, 0.4, vUv.x) * smoothstep(0.5, 0.6, vUv.x);
    //alpha *= smoothstep(0.0, 0.001, vUv.y) * smoothstep(1.0, 0.999, vUv.y);

    float wave = fract(vUv.y*2.5-(abs(vUv.x-0.5))*0.08+time*0.1);
    wave = smoothstep(0.0, 0.02, wave) * smoothstep(0.6, 0.02, wave);
    wave *= 0.8 + sin(vUv.y*40.0+time*1.0) * 0.2;
    alpha *= wave;

    alpha = mix(alpha, 0.0, (smoothstep(0.0, 0.5, vUv.x) * smoothstep(1.0, 0.5, vUv.x)) * smoothstep(1.0, 0.2, wave));



    //alpha = opacity * mask.g;

    final = vec4(vec3(1.0), alpha * 0.5);

    final.a *= smoothstep(0.0, 0.002, 1.0 - vProgress);
    final.a *= 1.0 - smoothstep(0.995, 1.0, 1.0 - vProgress);

    #drawbuffer Color gl_FragColor = final;
    #drawbuffer WorldPos gl_FragColor = vec4(vWorldPos, final.a);
}
{@}DreamPortalShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMask;
uniform sampler2D tMap;
uniform sampler2D tVideo;
uniform float uConnected;

uniform vec2 uStreamResolution;
uniform vec2 uSize;

#!VARYINGS
varying vec2 vUv;
varying vec3 vPos;
varying vec3 vWorldPos;

#!SHADER: Vertex
void main() {
    vUv = uv;
    vPos = position;
    vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: Fragment
#require(transformUV.glsl)
#require(rgb2hsv.fs)

vec4 coverTexture(sampler2D tex, vec2 imgSize, vec2 ouv) {
    vec2 s = uSize;
    vec2 i = imgSize;

    float rs = s.x / s.y;
    float ri = i.x / i.y;
    vec2 new = rs < ri ? vec2(i.x * s.y / i.y, s.y) : vec2(s.x, i.y * s.x / i.x);
    vec2 offset = (rs < ri ? vec2((new.x - s.x) / 2.0, 0.0) : vec2(0.0, (new.y - s.y) / 2.0)) / new;
    vec2 uv = ouv * s / new + offset;

    return texture2D(tex, uv);
}

void main() {
    float mask = texture2D(tMask, vUv).g;
    vec3 idle = texture2D(tMap, vUv).rgb;
    vec3 color = vec3(idle);

    vec2 uv = vUv;
    //uv += cnoise(vUv*5.0+time*0.2)*0.003;

    float edge = smoothstep(0.0, 0.5, mask) * smoothstep(1.0, 0.5, mask);
    float alpha = 0.9;//smoothstep(0.0, 0.6, 1.0-mask);

    // Border
    color = mix(color, vec3(1.0), smoothstep(1.0, 0.7, 1.0-mask));

    float rings = fract(edge*0.5+time*0.2);
    //rings = mix(rings, 1.0, smoothstep(0.1, 0.5, mask) * smoothstep(0.9, 0.5, mask));


    //alpha *= rings;

    //alpha = mix(mix(alpha, alpha*smoothstep(0.0, 0.4, 1.0-edge)*hsv2rgb(color).z, 0.7), alpha, uConnected);

    //color = mix(color, base, uConnected*smoothstep(0.2, 0.3, rgb2hsv(base).z)*step(0.7, uv.y));

    if (uConnected > 0.01) {
        // vec3 video = texture2D(tVideo, vUv).rgb;
        vec3 video = coverTexture(tVideo, uStreamResolution, vUv).rgb;
        color = mix(color, video, uConnected);
    }

    #drawbuffer Color gl_FragColor = vec4(color, alpha);
    #drawbuffer WorldPos gl_FragColor = vec4(vWorldPos, alpha);
}{@}BlossomLeafShader.glsl{@}#!ATTRIBUTES
attribute vec4 random;

#!UNIFORMS
uniform sampler2D tMap;
uniform float uBrightness;
uniform float uAlpha;
uniform vec2 uGradientRange;
uniform float uSaturation;
uniform float uHue;

uniform float uNoiseStrength;
uniform float uNoiseScale;
uniform float uNoiseSpeed;
uniform vec3 uTint1;
uniform vec3 uTint2;
uniform float uAlphaCutoff;

uniform vec3 uDistortStrength;
uniform float uDistortFrequency;
uniform float uDistortSpeed;
uniform vec3 uDistortStrength2;
uniform float uDistortFrequency2;
uniform float uDistortSpeed2;
uniform vec4 uAlphaClip;

uniform float uBakeMix;

#!VARYINGS
varying vec2 vUv;
varying vec3 vPos;
varying vec4 vColor;
varying vec3 vWorldPos;

#!SHADER: Vertex
#require(simplenoise.glsl)
#require(range.glsl)

void main() {
    vec3 pos = position;
    vPos = pos;
    vUv = uv;

    float noise = cnoise(pos.xyz * uDistortFrequency + time * 0.5 * uDistortSpeed);
    float noise2 = cnoise(pos.xyz * uDistortFrequency2 + time * 0.5 * uDistortSpeed2);
    pos += noise * uDistortStrength * 0.1;
    pos += noise2 * uDistortStrength2 * 0.1;
    
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;

    vColor = random;
    vWorldPos = vec3(modelMatrix * vec4(pos, 1.0));
}

#!SHADER: Fragment

#require(range.glsl)
#require(simplenoise.glsl)
#require(transformUV.glsl)

vec3 saturation(vec3 rgb, float adjustment) {
    const vec3 W = vec3(0.2125, 0.7154, 0.0721);
    vec3 intensity = vec3(dot(rgb, W));
    return mix(intensity, rgb, adjustment);
}
vec3 hue(vec3 color, float hue) {
    const vec3 k = vec3(0.57735, 0.57735, 0.57735);
    float cosAngle = cos(hue);
    return vec3(color * cosAngle + cross(k, color) * sin(hue) + k * dot(k, color) * (1.0 - cosAngle));
}

void main() {
    float speed = uNoiseSpeed;
    float gust = cnoise(vPos.xyz * 0.15 * uNoiseScale + vec3(-time * 0.5 * speed, time * 0.15 * speed, time * 0.6 * speed)) * 1.1;
    float noise = cnoise(vPos.xyz * 0.25 * uNoiseScale + vec3(-time * 0.5 * speed, time * 0.13 * speed, time * 1.3 * speed)) * 1.1;
    float vibrate = cnoise(vPos.xyz * 1.9 * uNoiseScale + vec3(-time * 1.5 * speed, time * 9.2 * speed, time * 4.3 * speed)) * 0.06;
    vibrate *= crange(gust, 0.2, 1.0, 0.0, 1.0);
    noise += gust;

    vec2 uv = vUv;
    vec3 tex = texture2D(tMap, uv).rgb;

    vec3 color = tex;
    if (color.r < 0.5) discard;
    
    color = mix(uTint1, uTint2, crange(vUv.y, 0.0, 1.0, uGradientRange.x, uGradientRange.y));
    color = mix(color, uTint2, noise * uNoiseStrength);

    color.rgb = mix(color.rgb, vColor.rgb, uBakeMix);

    color += noise * uNoiseStrength * 0.03;

    color = saturation(color, uSaturation);
    color = hue(color, uHue);
    color *= uBrightness;

    float alpha = crange(vUv.y, uAlphaClip.x, uAlphaClip.y, uAlphaClip.z, uAlphaClip.a);

    #drawbuffer Color gl_FragColor = vec4(color, alpha);
    #drawbuffer WorldPos gl_FragColor = vec4(vWorldPos, alpha);
}{@}BlossomMeshLeafShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform vec2 uTile;
uniform float uBrightness;
uniform float uAlpha;
uniform float uSaturation;
uniform float uHue;
uniform vec3 uFresnelColor;
uniform float uFresnelStrength;
uniform vec2 uClampFrom;
uniform vec2 uClampTo;

uniform float uNoiseStrength;
uniform float uNoiseScale;
uniform float uNoiseSpeed;

uniform vec3 uDistortStrength;
uniform float uDistortFrequency;
uniform float uDistortSpeed;
uniform vec3 uDistortStrength2;
uniform float uDistortFrequency2;
uniform float uDistortSpeed2;

uniform float uBakeMix;

#!VARYINGS
varying vec2 vUv;
varying vec3 vPos;
varying vec3 vNormal;
varying vec3 vViewDir;
varying vec3 vWorldPos;

#!SHADER: Vertex
#require(simplenoise.glsl)
#require(range.glsl)

void main() {
    vec3 pos = position;
    vPos = pos;
    vUv = uv;

    float noise = cnoise(pos.xyz * uDistortFrequency + time * 0.5 * uDistortSpeed);
    float noise2 = cnoise(pos.xyz * uDistortFrequency2 + time * 0.5 * uDistortSpeed2);
    pos += noise * uDistortStrength * 0.1;
    pos += noise2 * uDistortStrength2 * 0.1;
    
    vec4 mvPosition =modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;

    vViewDir = -mvPosition.xyz;
    vNormal = normalize(normalMatrix * normal);
    vWorldPos = vec3(modelMatrix * vec4(pos, 1.0));
}

#!SHADER: Fragment

#require(range.glsl)
#require(simplenoise.glsl)
#require(fresnel.glsl)
#require(transformUV.glsl)

vec3 saturation(vec3 rgb, float adjustment) {
    const vec3 W = vec3(0.2125, 0.7154, 0.0721);
    vec3 intensity = vec3(dot(rgb, W));
    return mix(intensity, rgb, adjustment);
}
vec3 hue(vec3 color, float hue) {
    const vec3 k = vec3(0.57735, 0.57735, 0.57735);
    float cosAngle = cos(hue);
    return vec3(color * cosAngle + cross(k, color) * sin(hue) + k * dot(k, color) * (1.0 - cosAngle));
}

void main() {
    float speed = uNoiseSpeed;
    float gust = cnoise(vPos.xyz * 0.15 * uNoiseScale + vec3(-time * 0.5 * speed, time * 0.15 * speed, time * 0.6 * speed)) * 1.1;
    float noise = cnoise(vPos.xyz * 0.25 * uNoiseScale + vec3(-time * 0.5 * speed, time * 0.13 * speed, time * 1.3 * speed)) * 1.1;
    float vibrate = cnoise(vPos.xyz * 1.9 * uNoiseScale + vec3(-time * 1.5 * speed, time * 9.2 * speed, time * 4.3 * speed)) * 0.06;
    vibrate *= crange(gust, 0.2, 1.0, 0.0, 1.0);
    noise += gust;

    vec2 uv = vUv;
    vec3 tex = texture2D(tMap, uv * uTile).rgb;

    vec3 color = tex;
    color += noise * uNoiseStrength * 0.03;

    color = saturation(color, uSaturation);
    color = hue(color, uHue);
    color *= uBrightness;

    float fresnel = getFresnel(vNormal, vViewDir, 1.0) * 1.0;
    color = mix(color, uFresnelColor, fresnel * color.g * uFresnelStrength);

    #drawbuffer Color gl_FragColor = vec4(color, 1.0);
    #drawbuffer WorldPos gl_FragColor = vec4(vWorldPos, 1.0);
}{@}FantasyPoolShader.glsl{@}#!ATTRIBUTES
attribute vec3 vdata;

#!UNIFORMS
uniform sampler2D tNormal;
uniform sampler2D tEnv;
uniform sampler2D tEnvDiffuse;
uniform vec2 uTiling;
uniform float uSpeed;
uniform vec3 uColor;
uniform vec3 uSpecColor;
uniform float uNormalIntensity;
uniform vec3 uParams;
uniform vec3 uScrollDirection;
uniform vec3 uEnv;

uniform mat4 uMirrorMatrix;
uniform float uMirrorStrength;
uniform float uMirrorRoughness;
uniform sampler2D tMirrorReflection;

#!VARYINGS
varying vec2 vUv;
varying vec2 vUv2;
varying float vTest;
varying vec3 vN;
varying vec3 vV;
varying vec3 vWorldNormal;
varying vec3 vColor;
varying float vAlpha;
varying vec3 vWorldPos;
varying vec4 vMirrorCoord;

#!SHADER: Vertex

void main() {
    float t = time * uSpeed * 8.0 * modelMatrix[1].z;
    vec3 pos = position * 1.0;

    vec4 worldPos = modelMatrix * vec4(pos, 1.0);
    vec4 modelViewPos = viewMatrix * worldPos;
    gl_Position = projectionMatrix * modelViewPos;

    vec3 worldNormal = mat3(modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz) * normal;

    vN = normal;
    vWorldNormal = worldNormal;
    vV = worldPos.xyz - cameraPosition;
    vUv = uv * uTiling + uScrollDirection.xy * time;
    vUv2 = uv;
    vColor = vdata;
    // vAlpha = vdata.r * 1.5;
    vAlpha = 1.0;

    vMirrorCoord = uMirrorMatrix * worldPos;

    vWorldPos = worldPos.xyz;
}

#!SHADER: Fragment
const float LOG2 = 1.442695;
const vec2 INV_ATAN = vec2(0.1591, 0.3183);

#require(normalmap.glsl)
#require(range.glsl)

vec3 fresnelSphericalGaussianRoughness(float cosTheta, vec3 F0, float roughness) {
	return F0 + (max(vec3(1.0 - roughness), F0) - F0) * pow(2.0, (-5.55473 * cosTheta - 6.98316) * cosTheta);
}

vec4 RGBMToLinear(vec4 value) {
    float maxRange = 6.0;
    return vec4(value.xyz * value.w * maxRange, 1.0);
}

vec2 sampleSphericalMap(vec3 v, float rotation)
{
    vec2 uv = vec2(atan(v.z, v.x), asin(v.y));
    uv *= INV_ATAN;
    uv += 0.5;

    // match default C4D baked HDRI
    uv.x = fract(uv.x + 0.25 + rotation);

    return uv;
}

mat2 rotate2d(float angle){
    return mat2(cos(angle),-sin(angle),
                sin(angle),cos(angle));
}

void main() {
    vec2 uv0 = vUv * uTiling + vec2(0.0, time * uSpeed);
    vec2 uv1 = vUv * uTiling * 0.8 + vec2(0.0, -time * uSpeed * 0.5);
    vec3 N = vWorldNormal;
    vec3 V = normalize(vV);
    vec3 worldNormal = unpackNormal(V, N, tNormal, uNormalIntensity, 1.0, uv0).xyz;
    worldNormal = mix(worldNormal, unpackNormal(V, N, tNormal, uNormalIntensity, 1.0, uv1).xyz, 0.5);
    vec3 R = reflect(V, worldNormal);
    float NdV = abs(dot(worldNormal, V));

    float roughness = 0.01;
    vec3 F0 = vec3(0.04);
    vec3 F = fresnelSphericalGaussianRoughness(NdV, F0, roughness);

    vec3 normal = crange(texture2D(tNormal, vUv * uTiling - (time * uSpeed * 0.01)).xyz, vec3(0.0), vec3(1.0), vec3(-1.0), vec3(1.0));

    vec2 specUV = sampleSphericalMap(R, uEnv.z);
    vec3 specular = texture2D(tEnv, specUV).rgb;
    specular *= F + 0.5;
    specular *= uParams.y;

    vec3 diffuseContrib = 1.0 - F;
    vec3 diffuse = uColor;
    diffuse = pow(diffuse, vec3(2.2));

    #test Tests.renderMirror()
    vec2 mirrorCoords = vMirrorCoord.xy / vMirrorCoord.w;
    mirrorCoords += normal.xy * 0.1 * uMirrorRoughness;
    vec3 mirrorColor = texture2D(tMirrorReflection, mirrorCoords).rgb;
    diffuse = mix(diffuse, mirrorColor, uMirrorStrength);
    #endtest

    vec3 finalColor = specular * uSpecColor + diffuse * diffuseContrib * uParams.x;
    finalColor = pow(finalColor, vec3(0.454545));

    float alpha = specular.r + 0.6;
    alpha *= vAlpha;

    //alpha *= smoothstep(0.5, 0.4, length(vUv2-0.5));

    #drawbuffer Color gl_FragColor = vec4(finalColor, alpha);
    #drawbuffer WorldPos gl_FragColor = vec4(vWorldPos, alpha);
}
{@}GalaxyCommon.glsl{@}const float LOG2 = 1.442695;
const vec2 INV_ATAN = vec2(0.1591, 0.3183);

uniform float uFogMultiplier;
uniform vec3 uFogColor;

uniform float uSaturation;

vec3 fresnelSphericalGaussianRoughness(float cosTheta, vec3 F0, float roughness) {
	return F0 + (max(vec3(1.0 - roughness), F0) - F0) * pow(2.0, (-5.55473 * cosTheta - 6.98316) * cosTheta);
}

vec3 applySaturation(vec3 color) {
  return color * uSaturation;
}

float exponentialFog(vec3 modelViewPos) {
    float fogDistance = -modelViewPos.z;
    float fogFactor = 0.004 * uFogMultiplier; // default 0.004
    float fogAmount = 1. - exp2(-fogFactor * fogFactor * fogDistance * fogDistance * LOG2);
    fogAmount = clamp(fogAmount, 0., 1.);
    return fogAmount;
}

vec4 RGBMToLinear(vec4 value) {
    float maxRange = 6.0;
    return vec4(value.xyz * value.w * maxRange, 1.0);
}

vec2 sampleSphericalMap(vec3 v, float rotation)
{
    vec2 uv = vec2(atan(v.z, v.x), asin(v.y));
    uv *= INV_ATAN;
    uv += 0.5;

    // match default C4D baked HDRI
    uv.x = fract(uv.x + 0.25 + rotation);

    return uv;
}

mat2 rotate2d(float angle){
    return mat2(cos(angle),-sin(angle),
                sin(angle),cos(angle));
}

#define S(r,v) smoothstep(9./resolution.y,0.,abs(v-(r)))
const vec2 s = vec2(1, 1.7320508);
const vec3 baseCol = vec3(1.0);
const float borderThickness = .03;

float calcHexDistance(vec2 p) {
    p = abs(p);
    return max(dot(p, s * .5), p.x);
}

float random(vec2 co) {
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

vec4 sround(vec4 i) {
    return floor(i + 0.5);
}

vec4 calcHexInfo(vec2 uv) {
    vec4 hexCenter = sround(vec4(uv, uv - vec2(.5, 1.)) / s.xyxy);
    vec4 offset = vec4(uv - hexCenter.xy * s, uv - (hexCenter.zw + .5) * s);
    return dot(offset.xy, offset.xy) < dot(offset.zw, offset.zw) ? vec4(offset.xy, hexCenter.xy) : vec4(offset.zw, hexCenter.zw);
}

vec3 getHexagons(vec2 uv, float hexScale) {
    vec2 hexUV = uv * hexScale;
    float distort = 0.2;
    float distortion2 = 1.0 + smoothstep(0.1, 1.1, length(uv - 0.5));
    vec4 hexInfo = calcHexInfo(hexUV);

    float totalDist = calcHexDistance(hexInfo.xy) + borderThickness;
    float rand = random(hexInfo.zw);
    float angle = atan(hexInfo.y, hexInfo.x) + rand * 5. + time;
    float sinOffset = sin(time * 0.5 + rand * 8.);
    float aa = 5. / resolution.y;

    vec3 hexagons = vec3(0.0);
    hexagons.x = 1.0-smoothstep(.51, .51 - aa, totalDist);
    hexagons.y = pow(1. - max(0., .5 - totalDist), 10.) * 1.5;
    hexagons.z = sinOffset;

    return hexagons;
}{@}GalaxyInfiniteSkyShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform float uHue;
uniform float uHueSpread;
uniform vec2 uBrightness;

#!VARYINGS
varying vec2 vUv;
varying vec3 vPos;
varying vec3 vWorldPos;

#!SHADER: Vertex
void main() {
    // set camera translation to zero in the view matrix to fake an infinite skybox
    mat4 newViewMatrix = viewMatrix;
    newViewMatrix[3][0] = 0.0;
    newViewMatrix[3][1] = 0.0;
    newViewMatrix[3][2] = 0.0;
    
    gl_Position = projectionMatrix * newViewMatrix * modelMatrix * vec4(position, 1.0);
    vPos = position;
    vUv = uv * vec2(8.0, 4.0);

    vec4 worldPos = modelMatrix * vec4(position, 1.0);

    vWorldPos = worldPos.xyz;
}

#!SHADER: Fragment
#require(range.glsl)
#require(simplenoise.glsl)
#require(rgb2hsv.fs)

void main() {
    vec3 color = texture2D(tMap, vUv*1.5).rgb;
    color = min(texture2D(tMap, vUv * 1.3 * 2.2 + vec2(time * 0.005, time * 0.001)).rgb, pow(color, vec3(1.2)));
    color += pow(color, vec3(1.7)) * 5.0;

    // vec3 shift = rgb2hsv(color.rgb);
    // shift.x += cnoise(vPos*1.0+time*0.05) * 0.05;
    // color.rgb = hsv2rgb(shift);


    //   color = mix(color, vec3(0.0), color.g * crange(sin(vUv.y * 15.0 - time * 1.3) + sin(vUv.y * 9.0 - time * 0.9 + 7.2), -2.0, 2.0, -0.9, 1.7));

    //   //color *= 0.7;

    color *= smoothstep(-300.0, 0.0, vWorldPos.y);
    color *= smoothstep(300.0, 0.0, vWorldPos.y);

    color = rgb2hsv(color);

    vec3 pos = vWorldPos.xyz * vec3(0.1,0.02,0.05) * 0.02;
    pos += cnoise(pos * 10.0 + time * 0.0006) * 0.3;
    color.x += uHue + sin(pos.x - pos.y * 2.0 - pos.z * 2.0 + time * 0.1) * uHueSpread;
    //color.x = crange(mod(color.x, 1.0), 0.0, 1.0, uHue-uHueSpread, uHue+uHueSpread);
    color = hsv2rgb(color);
    color *= crange(sin(-time * 2.0 + vUv.y * 14.0), -1.0, 1.0, 0.7, 1.0);

    color = pow(color, vec3(uBrightness.x)) * uBrightness.y;
    //   //color *= crange(vUv.y, 0.2, 0.3, 0.0, 1.0);


    //   // if (cameraPosition.z < 30.0) discard;
    //   // vec4 color = texture2D(tMap, vUv);


    gl_FragColor = vec4(color, 1.0);
}{@}GalaxySpaceShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform sampler2D tOutside;
uniform float uHue;
uniform float uHueSpread;
uniform vec2 uBrightness;

#!VARYINGS
varying vec2 vUv;
varying float vHole;
varying vec3 vWorldPos;
varying vec3 vNormal;

#!SHADER: Vertex
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vUv = uv;
    vNormal = normal;

    vec4 worldPos = modelMatrix * vec4(position, 1.0);

    vWorldPos = worldPos.xyz;
}

#!SHADER: Fragment
#require(range.glsl)
#require(transformUV.glsl)
#require(rgb2hsv.fs)
#require(simplenoise.glsl)

void main() {
    vec4 color = vec4(1.0);
    vec2 tc = gl_FragCoord.xy / resolution;

    if (gl_FrontFacing) {
        // from outside
        #test Tests.isVR()
            color.rgb = vec3(175.0 / 255.0, 203.0 / 255.0, 226.0 / 255.0);
        #endtest

        #test !Tests.isVR()
            color = texture2D(tOutside, tc);
        #endtest

        if (vNormal.y > 0.5 && vUv.x > 0.445) {
            discard;
        } 
    } else {
        // from inside
        #test Tests.isVR()
            color.rgb = vec3(0.0);
        #endtest

        #test !Tests.isVR()
            color = texture2D(tMap, tc);
        #endtest

        if (vNormal.y > 0.5 && vUv.x > 0.51) {
            discard;
        }
    }

    #drawbuffer Color gl_FragColor = color;
    #drawbuffer WorldPos gl_FragColor = vec4(vWorldPos, 1.0);
}{@}GardenCommon.glsl{@}const float LOG2 = 1.442695;
const vec2 INV_ATAN = vec2(0.1591, 0.3183);

uniform float uFogMultiplier;
uniform vec3 uFogColor;

uniform float uSaturation;

vec3 fresnelSphericalGaussianRoughness(float cosTheta, vec3 F0, float roughness) {
	return F0 + (max(vec3(1.0 - roughness), F0) - F0) * pow(2.0, (-5.55473 * cosTheta - 6.98316) * cosTheta);
}

vec3 applySaturation(vec3 color) {
  return color * uSaturation;
}

float exponentialFog(vec3 modelViewPos) {
    float fogDistance = -modelViewPos.z;
    float fogFactor = 0.004 * uFogMultiplier; // default 0.004
    float fogAmount = 1. - exp2(-fogFactor * fogFactor * fogDistance * fogDistance * LOG2);
    fogAmount = clamp(fogAmount, 0., 1.);
    return fogAmount;
}

vec4 RGBMToLinear(vec4 value) {
    float maxRange = 6.0;
    return vec4(value.xyz * value.w * maxRange, 1.0);
}

vec2 sampleSphericalMap(vec3 v, float rotation)
{
    vec2 uv = vec2(atan(v.z, v.x), asin(v.y));
    uv *= INV_ATAN;
    uv += 0.5;

    // match default C4D baked HDRI
    uv.x = fract(uv.x + 0.25 + rotation);

    return uv;
}

mat2 rotate2d(float angle){
    return mat2(cos(angle),-sin(angle),
                sin(angle),cos(angle));
}{@}GardenBirdsShader.glsl{@}#!ATTRIBUTES
attribute vec3 lookup;
attribute vec4 random;

#!UNIFORMS
uniform sampler2D tMap;
uniform sampler2D tPos;
uniform sampler2D tPrevPos;
uniform sampler2D tAnimation;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uAltColor1;
uniform vec3 uAltColor2;
uniform float uEnabled;

#!VARYINGS
varying vec2 vUv;
varying vec3 vPos;
varying vec3 vNormal;
varying vec3 vVel;
varying vec3 vWorldPos;
// varying vec3 vPrevPos;

#!SHADER: Vertex
#require(range.glsl)
#require(instance.vs)

vec3 getAnimationPos(sampler2D tAnimation, float frameCount, float speed, float offset) {
    float t = fract(time * speed + offset);

    vec2 frameOffset = vec2(1.0 / frameCount, 0.0) * floor(fract(t) * frameCount);
    vec2 nextFrameOffset = mod(frameOffset + vec2(1.0 / frameCount, 0.0), vec2(1.0, 0.0));

    vec3 frame = texture2D(tAnimation, vec2(uv.x / frameCount, uv.y) + frameOffset).rgb;
    vec3 nextFrame = texture2D(tAnimation, vec2(uv.x / frameCount, uv.y) + nextFrameOffset).rgb;

    frame = mix(frame, nextFrame, fract(t * frameCount));

    vec3 res = frame * 2.0 - 1.0;

    return res;
}

vec2 rotate(vec2 v, float a) {
    float s = sin(a);
    float c = cos(a);
    mat2 m = mat2(c, -s, s, c);
    return m * v;
}

vec3 transformTowardsVector(vec3 from, vec3 to) {
    vec3 pos = from;
    vec3 dir = normalize(to);

    // rotate up/down
    float a = dir.y;
    float s = sin(a);
	float c = cos(a);
	mat2 m = mat2(c, -s, s, c);
    pos.yz = m * pos.yz;

    // rotate around y axis
    float a2 = atan(dir.x, dir.z);
    float s2 = sin(a2);
	float c2 = cos(a2);
	mat2 m2 = mat2(c2, -s2, s2, c2);
    pos.xz = m2 * pos.xz;

    return pos;
}

void main() {
    float scale = 0.2 + random.y * 0.05;

    // Scale up to animate in
    scale *= clamp(time * 0.25 - 0.5, 0.0, 1.0);

    vec3 offset = texture2D(tPos, lookup.xy).xyz;
    vec3 prevpos = texture2D(tPrevPos, lookup.xy).xyz;
    vec3 velocity = offset - prevpos;

    // Flap wings
    float upwardDirection = dot(vec3(0.0, 1.0, 0.0), velocity);
    vec3 localpos = position;
    float speed = 2.6;
    float frameCount = 12.0;
    float animationOffset = random.x * 400.0;

    float flapStrength = pow((sin(time + animationOffset) + 1.0) / 2.0, 2.0);
    float glideStrength = 0.3;

    vec3 flapAnimation = getAnimationPos(tAnimation, frameCount, speed, animationOffset);
    vec3 glideAnimation = vec3(0.0, cos(position.x + time * speed + animationOffset) * (1.0 - flapStrength) * glideStrength + cos(offset.x + time * speed), 0.0);

    float flapFactor = clamp(pow(length(velocity), 2.0) * 2000.0, 0.0, 1.0);
    flapFactor = crange(flapFactor, 0.5, 1.0, 0.0, 1.0);

    vec3 flapOffset = mix(glideAnimation, flapAnimation, flapFactor);

    localpos = localpos + flapOffset;

    vec3 n = normal;
    n += flapOffset;

    // Rotate in direction of flight
    localpos.xyz = transformTowardsVector(localpos.xyz, velocity);

    // Rotate normals to match
    n.xyz = transformTowardsVector(n.xyz, velocity);

    vec3 pos = transformPosition(localpos, offset, scale);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);

    vUv = uv;
    vPos = pos;
    vNormal = mat3(modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz) * n;
    vVel = velocity;
    vWorldPos = vec3(modelMatrix * vec4(pos, 1.0));
}

#!SHADER: Fragment
void main() {
    vec3 lightDir = normalize(vec3(-0.1, 1.0, -1.0));
    float dp = dot(lightDir, normalize(vNormal)) * 0.5 + 0.5;

    vec3 color = vec3(1.0);
    color = mix(uColor1, uColor2, dp);

    #drawbuffer Color gl_FragColor = vec4(color.rgb, 1.0);
    #drawbuffer WorldPos gl_FragColor = vec4(vWorldPos, 1.0);
}
{@}GardenGrassShader.glsl{@}#!ATTRIBUTES
attribute vec4 random;
attribute float rand;

#!UNIFORMS
uniform sampler2D tATO;
uniform sampler2D tLightmap;
uniform float uThreshold;
uniform float uLightmapIntensity;
uniform vec3 uBaseColor;
uniform vec3 uBlendColor;
uniform vec3 uTranslucentColor;

uniform float uGrassScale;

uniform float uNoiseScale;
uniform float uNoiseSpeed;
uniform float uNoiseStrength;
uniform float uNoiseRotation;

uniform vec3 uLightPosition;
uniform float uTranslucentStrength;
uniform float uTranslucentPower;
uniform float uAlpha;
uniform float uDensity;

#!VARYINGS
varying vec2 vUv;
varying vec2 vLightmapUv;
varying vec3 vBaseColor;
varying vec3 vTranslucentColor;
varying vec3 vLightmap;
varying float vTranslucencyFactor;
varying vec3 vWind;
varying float vFog;
varying vec3 vPos;
varying vec3 vWorldPos;

varying float vRender;

#!SHADER: Vertex
#require(GardenCommon.glsl)

void main() {
    vRender = (rand >= (1.0 - uDensity)) ? 1.0 : 0.0;

    if (vRender > 0.5) {
        vec3 pos = position;
        float t = time * uNoiseSpeed;

        #ifdef INSTANCED
        // grass animation
        float largeScaleMotion = 0.0;
        float smallScaleMotion = 0.0;
        vec3 windPos = (offset.xyz - position.xyz * 0.5) * 2.0;
        float windRotation = uNoiseRotation;
        windPos.xz = rotate2d(windRotation) * windPos.xz;
        float offsetFactor = (cos(windPos.z * 0.025) * 25.0 + windPos.x + windPos.y * 2.0 + windPos.z) * uNoiseScale + t;

        // large scale motion
        largeScaleMotion = sin(offsetFactor) * uNoiseStrength;

        // small scale motion
        smallScaleMotion = sin(2.65 * (offsetFactor)) * 0.5 * uNoiseStrength;

        vWind = vec3(0.0);

        vWind.z += largeScaleMotion;
        vWind.z += smallScaleMotion;
        vWind.x += smallScaleMotion;

        // rotate wind normal distortion direction
        vWind.xz = rotate2d(windRotation) * vWind.xz;
        float noise = length(vWind);

        // move grass in wind
        // pos.x += noise * uv.y;
        // pos.z += noise * uv.y;
        pos.xz += vWind.xz * noise * uv.y;

        // scale grass
        pos -= offset;
        pos *= uGrassScale;
        pos += offset;

        vec3 n = normal;

        #ifdef INSTANCED
        n = transformPosition(normal, vec3(0.0), 1.0, orientation);
        #endif

        vec4 worldPos = modelMatrix * vec4(pos, 1.0);
        vec4 modelViewPos = viewMatrix * worldPos;
        vec3 worldNormal = n;

        gl_Position = projectionMatrix * modelViewPos;
        vUv = uv;

        // lighting calculations
        vec3 eye = normalize(worldPos.xyz - cameraPosition);
        vec3 light = normalize(worldPos.xyz - uLightPosition);

        // Sample lightmap at slightly different locations based on wind noise
        vLightmapUv = random.xy;
        // vLightmapUv.x += noise * 0.1 * pow(vUv.y, 2.0);

        vBaseColor = pow(uBaseColor, vec3(2.2));
        vTranslucentColor = pow(uTranslucentColor, vec3(2.2));
        vLightmap = texture2D(tLightmap, vLightmapUv).rgb;
        vLightmap = pow(vLightmap, vec3(2.2)) * uLightmapIntensity;
        vPos = pos;

        // Get noise that changes based on which direction camera is facing
        float dp = dot(eye, -light);
        float accum = 0.0;
        accum += clamp(dp, 0.0, 1.0);
        accum += clamp(-dp * 0.8, 0.0, 1.0);
        accum += noise * 0.35;
        accum = pow(accum, uTranslucentPower) * uTranslucentStrength;
        vTranslucencyFactor = 20.0 * smoothstep(0.2, 0.4, uv.y) * vLightmap.r * max(accum, 0.5);
        vFog = exponentialFog(modelViewPos.xyz);
        vWorldPos = worldPos.xyz;
        #endif
    } else {
        gl_Position = vec4(0.0);
    }
}

#!SHADER: Fragment
#require(shadows.fs)
#require(range.glsl)
#require(simplenoise.glsl)
#require(rgb2hsv.fs)

void main() {
    if (vRender < 0.5) {
        discard;
        return;
    }

    vec4 data = texture2D(tATO, vUv);
    float alpha = data.r;

    if (alpha < uThreshold) discard;
    if (uAlpha < 0.02) discard;

    float ao = data.b;
    float translucent = data.g;
    float blend = vUv.y;
    vec3 baseColor = vBaseColor;


    vec3 lightmap = vLightmap;

    float shadow = 1.0;
    #test Tests.avatarShadow()
        shadow = getShadow(vPos);
    #endtest
    
    lightmap = min(lightmap, vec3(crange(shadow, 0.0, 1.0, 0.1, 1.0) * vec3(0.9, 1.0, 1.0)));

    baseColor = mix(baseColor, uBlendColor, smoothstep(0.3, 0.0, vUv.y));
    baseColor *= lightmap;
    baseColor += translucent * vTranslucentColor * vTranslucencyFactor;
    baseColor *= mix(1.0, ao, vUv.y);
    baseColor = pow(baseColor, vec3(0.4545));
    baseColor.rgb = mix(clamp(baseColor.rgb, 0.0, 1.0), vec3(1.0, 0.9, 0.8), vFog);

    vec3 hueShift = rgb2hsv(baseColor.rgb);
    hueShift.x += cnoise(vPos*0.2+time*0.22) * 0.3 * smoothstep(0.2, 0.7, vUv.y);
    baseColor.rgb = hsv2rgb(hueShift);

    #drawbuffer Color gl_FragColor = vec4(baseColor, uAlpha);
    #drawbuffer WorldPos gl_FragColor = vec4(vWorldPos, uAlpha);
}
{@}GardenLeafParticles.glsl{@}#!ATTRIBUTES
attribute vec4 random;

#!UNIFORMS
uniform float uSize;
uniform vec2 uSizeRand;
uniform sampler2D tMap;
uniform float DPR;
uniform float uRes;
uniform vec3 uColor;
uniform vec3 uTranslucencyColor;
uniform float uAlphaCutOff;
uniform vec2 uDistFade;
uniform vec3 uLight;

#!VARYINGS
varying vec2 vUv;
varying float vLife;
varying float vAlpha;
varying vec4 vRandom;
varying float vFog;
varying float vTranslucency;
varying vec3 vEye;
varying vec3 vTranslucencyColor;

#!SHADER: Vertex

#require(range.glsl)

void main() {
    vec4 decodedPos = texture2D(tPos, position.xy);
    vec3 pos = decodedPos.xyz;
    float dist = length(pos - cameraPosition);

    vRandom = random;
    vAlpha = 1.0;
    vLife = crange(pos.y, 10.0, -20.0, 0.0, 1.0);
    
    // Translucency lighting effect
    vec3 eye = normalize(pos.xyz - cameraPosition);
    vec3 light = normalize(uLight);
    float dp = max(0.0, dot(eye, light));
    vTranslucency = dp;
    vTranslucencyColor = pow(uTranslucencyColor, vec3(2.2));

    vFog = crange(dist, uDistFade.x, uDistFade.y, 1.0, 0.0);

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);

    float scale = smoothstep(1.0, 0.8, vLife) * smoothstep(0.0, 0.2, vLife);

    gl_PointSize = 0.02 * DPR * uRes * uSize * scale * crange(random.x, 0.0, 1.0, uSizeRand.x, uSizeRand.y) * (1000.0 / length(mvPosition.xyz));
    gl_Position = projectionMatrix * mvPosition;
}

#!SHADER: Fragment

#require(range.glsl)
#require(transformUV.glsl)

void main() {

    vec2 uv = vec2(gl_PointCoord.x, 1.0 - gl_PointCoord.y);
    uv = rotateUV(uv, radians(360.0 * vRandom.z)-time*vRandom.w*2.0);

    vec3 tex = texture2D(tMap, uv).rgb;
    float alpha = tex.r;
    if (alpha < 0.5) discard;
    
    alpha *= vAlpha;

    // Translucency lighting effect
    float translucency = (tex.g) * vTranslucency;
    vec3 color = pow(uColor, vec3(2.2));
    color += translucency * vTranslucencyColor * 20.0;
    color += mix(vTranslucencyColor, vec3(1.0), tex.b) * vTranslucency * uv.y;
    color = pow(color, vec3(0.45));

    alpha *= smoothstep(1.0, 0.5, vLife) * smoothstep(0.1, 0.2, vLife);
    alpha *= vFog;

    //color = vec3(vLife);

    gl_FragColor = vec4(color, alpha);
}{@}GardenSkyShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform sampler2D tFlow;
uniform vec3 uColor0;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;

uniform vec4 uParams;

#!VARYINGS
varying vec2 vUv;
varying vec3 vPos;
varying vec3 vWorldPos;
varying float vSunGradient;
varying vec3 vColor;

#!SHADER: Vertex
#require(rotation.glsl)

void main() {
    vPos = position;
    vSunGradient = position.y * 0.5 - position.x - position.z * 1.2;
    vec4 worldPos = modelMatrix * vec4(position, 1.0);
    vWorldPos = worldPos.xyz;
    gl_Position = projectionMatrix * viewMatrix * worldPos;
    vUv = uv;

    vColor = mix(uColor1, uColor0, smoothstep(0.5, 1.0, position.z));
    vColor = mix(vColor, uColor0, smoothstep(0.3, -0.1, position.y));
    vColor = mix(vColor, uColor3, smoothstep(0.6, -1.5, position.z));
    vColor = mix(vColor, uColor2, smoothstep(0.0, -2.0, position.z));
}

#!SHADER: Fragment
#require(rotation.glsl)
#require(range.glsl)

vec3 getFlow(sampler2D tMap, sampler2D tFlow, vec2 uv, float speed, float strength, float time, float tile, float multiplier) {
    float t = time * speed;
    float mask = fract(t);
    mask = (mask- 0.5) * 2.0;
    mask = abs(mask);
    
    vec2 flow = texture2D(tFlow, uv * tile).rg;
    flow = flow * 2.0 - 1.0;
    flow *= multiplier;

    vec3 color = texture2D(tMap, uv + flow * strength * fract(t + 0.5)).rgb;
    vec3 color2 = texture2D(tMap, uv + flow * strength * fract(t + 0.0)).rgb; 
    color = mix(color2, color, mask);
    return color;
}

void main() {
    vec2 uv = vec2(0.0, vSunGradient);
    uv.y -= 0.5;
    uv.y *= uParams.x;
    uv.y += 0.5;
    uv = rotationMatrix(sin(time) * 0.75) * uv;

    vec3 color = vColor;

    vec2 cloudsUv = vUv;
    cloudsUv.y *= 2.0;
    float clouds = getFlow(tMap, tFlow, cloudsUv, uParams.y, uParams.z, time, uParams.w, smoothstep(0.5, 0.52, vUv.y)).r;
    clouds *= step(0.5, vUv.y);

    color = pow(color, vec3(2.2)) * 0.85;
    clouds = pow(clouds, 2.2);
    color += clouds * 0.35 * smoothstep(0.0, 0.03, vPos.y);
    color = pow(color, vec3(0.4545));

    
    gl_FragColor = vec4(1.0,0.0,0.0,1.0);//vec4(color, 1.0);
}{@}GardenTerrainShader.glsl{@}#!ATTRIBUTES
attribute vec3 vdata;
attribute vec2 uv2;

#!UNIFORMS
uniform sampler2D tMRO;
uniform sampler2D tCaustics;
uniform sampler2D tNormal;
uniform sampler2D tLightmap;

uniform vec3 uGrassColor;
uniform vec3 uRockColor;
uniform vec3 uSandColor;

uniform float uTiling;
uniform vec2 uOffset;
uniform vec2 uBlend;
uniform vec2 uAO;
uniform float uNormalIntensity;
uniform float uLightmapIntensity;
uniform vec3 uLight;
uniform vec3 uSunColor;
uniform vec3 uShadowColor;

uniform vec3 uEnv;
uniform vec4 uWind;
uniform vec2 uWindContrast;

uniform vec2 uFresnelContrast;
uniform float uFresnelAdd;

// Character shadow uniforms
// uniform sampler2D tShadowMap;
// uniform vec4 uBox;

#!VARYINGS
varying vec2 vUv;
varying vec2 vUv2;
varying vec2 vLightmapUv;
varying vec3 vN;
varying vec3 vV;
varying vec3 vColor;
varying float vFog;
varying float vDist;
varying vec3 vWind;
varying vec3 vPos;
varying vec3 vWorldPos;
varying vec3 vNoisePos;
varying vec3 vLight;
varying vec3 vSunColor;
varying vec3 vShadowColor;
varying vec3 vViewDir;
varying vec3 vNormal;

#!SHADER: Vertex
#require(rotation.glsl)
#require(GardenCommon.glsl)

void main() {
    vLightmapUv = uv;

    vec3 pos = position;

    // #ifdef INSTANCED
    // pos.y += sin(offset.x + offset.y + offset.z + time * 0.15 * uGlobalWind.y) * 5.0 * uFloat;
    // #endif

    vec4 worldPos = modelMatrix * vec4(pos, 1.0);
    vec4 modelViewPos = viewMatrix * worldPos;
    gl_Position = projectionMatrix * modelViewPos;

    vec3 n = normal;
    vec3 color = vdata;

    float t = time * uWind.z;

    // grass animation
    float largeScaleMotion = 0.0;
    float smallScaleMotion = 0.0;
    vec3 windPos = pos.xyz * 2.0;
    float windRotation = uWind.x;
    windPos.xz = rotate2d(windRotation) * windPos.xz;
    float offsetFactor = (cos(windPos.z * 0.2) * 4.0 + windPos.x + windPos.y * 2.0 + windPos.z) * uWind.y + t;

    // large scale motion
    largeScaleMotion = sin(offsetFactor);

    // small scale motion
    smallScaleMotion = sin(2.65 * (offsetFactor)) * 0.5;

    vWind.z += largeScaleMotion;
    vWind.z += smallScaleMotion;
    vWind.x += smallScaleMotion;

    // rotate wind normal distortion direction
    vWind.xz = rotate2d(windRotation) * vWind.xz;
    vWind = vWind;

    #ifdef INSTANCED
    n = transformPosition(normal, vec3(0.0), 1.0, orientation);
    #endif

    vec3 worldNormal = mat3(modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz) * n;

    vNormal = normalize(normalMatrix * normal);
    vViewDir = -vec3(modelViewMatrix * vec4(pos, 1.0));
    vN = worldNormal;
    vV = worldPos.xyz - cameraPosition;
    vUv = uv * uTiling + uOffset;
    vUv2 = uv2;
    vColor = color;
    vFog = exponentialFog(modelViewPos.xyz);
    vPos = position;
    vWorldPos = worldPos.xyz;
    vLight = normalize(uLight);
    vSunColor = pow(uSunColor, vec3(2.2));
    vShadowColor = pow(uShadowColor, vec3(2.2));
}

#!SHADER: Fragment
#require(range.glsl)
#require(normalmap.glsl)
#require(GardenCommon.glsl)
#require(fresnel.glsl)
#require(dreamclipping.fs)
#require(shadows.fs)
#require(rgb2hsv.fs)


void main() {
    if (isClipping(vUv*0.2, vWorldPos)) discard;

    float blend = vN.y - 0.05;
    vec2 uv = vUv;
    vec3 wind = vWind;
    vec3 windNoise = wind.xyz;
    vec3 N = vN;
    vec3 V = vV;

    float normalIntensity = mix(uNormalIntensity, 0.0, blend);
    vec3 normal = unpackNormal(V, N + windNoise * 0.15, tNormal, normalIntensity, 1.0, uv).xyz;
    float grassMask = smoothstep(uBlend.x, uBlend.y, normal.y);
    vec4 MRO = texture2D(tMRO, uv - (wind.zx * 0.5 + 0.5) * 0.01 * smoothstep(0.8, 0.9, blend));

    // ambient occlusion
    float ao = mix(MRO.z, 1.0, blend);

    // diffuse lighting
    float dp = dot(normalize(normal + windNoise * 3.0 * grassMask), vLight);
    vec3 diffuse = mix(uShadowColor, uSunColor, dp * 0.5 + 0.5);

    // baked lighting
    float shadow = 1.0;
    #test Tests.avatarShadow()
        shadow = getShadow(vPos);
    #endtest
    
    vec3 lightmap = texture2D(tLightmap, vLightmapUv).rgb;
    lightmap = min(lightmap, vec3(crange(shadow, 0.0, 1.0, 0.45, 1.0) * vec3(0.9, 1.0, 1.0)));

    lightmap = pow(lightmap, vec3(2.2));
    diffuse *= lightmap * uLightmapIntensity;

    // base color
    vec4 baseColor = vec4(1.0);
    baseColor.rgb = mix(uRockColor, mix(uGrassColor, uGrassColor * 0.7, MRO.x), grassMask);
    baseColor.rgb = mix(baseColor.rgb, uSandColor, smoothstep(0.3, 0.6, vColor.r + MRO.x * 0.5));
    baseColor.rgb = pow(baseColor.rgb, vec3(2.2));
    diffuse *= baseColor.rgb;


    // Wind
    float fresnel = getFresnel(vNormal, vViewDir, 1.0);
    diffuse += smoothstep(uFresnelContrast.x, uFresnelContrast.y, fresnel) * uFresnelAdd;


    diffuse *= 1.0 + smoothstep(uWindContrast.x, uWindContrast.y, wind.x) * fresnel * uWind.w * grassMask; 


    // caustics
    //vec3 caustics = vec3(0.0);
    // vec4 caustics0 = texture2D(tCaustics, vPos.xz * 0.2 + time * 0.05);
    // vec4 caustics1 = texture2D(tCaustics, vPos.xz * 0.2 + time * 0.05 * vec2(-1.81, -1.42));
    // caustics = pow(min(caustics0.rgb, caustics1.rgb), vec3(2.2));
    // caustics *= (1.0 - normal.y) * clamp(1.0 - vPos.y, 0.0, 1.0);
    
    vec4 color = vec4(diffuse * ao, 1.0);


    color.rgb = pow(color.rgb, vec3(0.45454545));

    #drawbuffer Color gl_FragColor = color;
    #drawbuffer WorldPos gl_FragColor = vec4(vWorldPos, color.a);
}{@}GardenPoolShader.glsl{@}#!ATTRIBUTES
attribute vec3 vdata;

#!UNIFORMS
uniform sampler2D tNormal;
uniform sampler2D tEnv;
uniform sampler2D tEnvDiffuse;
uniform vec2 uTiling;
uniform float uSpeed;
uniform vec3 uColor;
uniform vec3 uSpecColor;
uniform float uNormalIntensity;
uniform vec3 uParams;
uniform vec3 uScrollDirection;
uniform vec3 uEnv;

uniform mat4 uMirrorMatrix;
uniform float uMirrorStrength;
uniform float uMirrorRoughness;
uniform sampler2D tMirrorReflection;
uniform vec2 uRippleTile;
uniform float uRippleStrength;
uniform float uRippleSpeed;
uniform float uAlpha;

#!VARYINGS
varying vec2 vUv;
varying vec2 vUv2;
varying float vTest;
varying vec3 vN;
varying vec3 vV;
varying vec3 vWorldNormal;
varying vec3 vColor;
varying float vAlpha;
varying vec3 vWorldPos;
varying vec4 vMirrorCoord;
varying vec3 vPos;

#!SHADER: Vertex
void main() {
    float t = time * uSpeed * 8.0 * modelMatrix[1].z;
    vec3 pos = position;

    vec4 worldPos = modelMatrix * vec4(pos, 1.0);
    vec4 modelViewPos = viewMatrix * worldPos;
    gl_Position = projectionMatrix * modelViewPos;

    vec3 worldNormal = mat3(modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz) * normal;

    vN = normal;
    vWorldNormal = worldNormal;
    vV = worldPos.xyz - cameraPosition;
    vUv = uv * uTiling + uScrollDirection.xy * time;
    vUv2 = uv;
    vColor = vdata;
    // vAlpha = vdata.r * 1.5;
    vAlpha = 1.0;
    vMirrorCoord = uMirrorMatrix * worldPos;

    vWorldPos = worldPos.xyz;
    vPos = pos;
}

#!SHADER: Fragment
const float LOG2 = 1.442695;
const vec2 INV_ATAN = vec2(0.1591, 0.3183);
#require(normalmap.glsl)
#require(shadows.fs)

vec3 fresnelSphericalGaussianRoughness(float cosTheta, vec3 F0, float roughness) {
	return F0 + (max(vec3(1.0 - roughness), F0) - F0) * pow(2.0, (-5.55473 * cosTheta - 6.98316) * cosTheta);
}

vec4 RGBMToLinear(vec4 value) {
    float maxRange = 6.0;
    return vec4(value.xyz * value.w * maxRange, 1.0);
}

vec2 sampleSphericalMap(vec3 v, float rotation)
{
    vec2 uv = vec2(atan(v.z, v.x), asin(v.y));
    uv *= INV_ATAN;
    uv += 0.5;

    // match default C4D baked HDRI
    uv.x = fract(uv.x + 0.25 + rotation);

    return uv;
}

mat2 rotate2d(float angle){
    return mat2(cos(angle),-sin(angle),
                sin(angle),cos(angle));
}

void main() {
    vec2 uv0 = vUv * uTiling + vec2(0.0, time * uSpeed);
    vec2 uv1 = vUv * uTiling * 0.8 + vec2(0.0, -time * uSpeed * 0.5);
    vec3 N = vWorldNormal;
    vec3 V = normalize(vV);
    vec3 worldNormal = unpackNormal(V, N, tNormal, uNormalIntensity, 1.0, uv0).xyz;
    worldNormal = mix(worldNormal, unpackNormal(V, N, tNormal, uNormalIntensity, 1.0, uv1).xyz, 0.5);
    vec3 R = reflect(V, worldNormal);
    float NdV = abs(dot(worldNormal, V));

    vec3 normal = crange(texture2D(tNormal, vUv * uRippleTile - (time * uRippleSpeed * 0.01)).xyz, vec3(0.0), vec3(1.0), vec3(-1.0), vec3(1.0));

    float roughness = 0.01;
    vec3 F0 = vec3(0.04);
    vec3 F = fresnelSphericalGaussianRoughness(NdV, F0, roughness);

    vec2 specUV = sampleSphericalMap(R, uEnv.z);
    vec3 specular = texture2D(tEnv, specUV).rgb;
    specular *= F + 0.5;
    specular *= uParams.y;

    vec3 diffuseContrib = 1.0 - F;
    vec3 diffuse = uColor;

    #test Tests.renderMirror()
    vec2 mirrorCoords = vMirrorCoord.xy / vMirrorCoord.w;
    mirrorCoords += normal.xy * 0.1 * uMirrorRoughness;
    vec3 mirrorColor = texture2D(tMirrorReflection, mirrorCoords).rgb;
    diffuse = mix(diffuse, mirrorColor, uMirrorStrength);
    #endtest

    diffuse = pow(diffuse, vec3(2.2));

    vec3 finalColor = specular * uSpecColor + diffuse * diffuseContrib * uParams.x;
    finalColor = pow(finalColor, vec3(0.454545));

    float shadow = 1.0;
    #test Tests.avatarShadow()
        shadow = getShadow(vPos);
    #endtest

    finalColor *= vec3(crange(shadow, 0.0, 1.0, 0.7, 1.0));

    float alpha = specular.r + 0.4;
    alpha *= vAlpha;
    alpha *= uAlpha;
    alpha *= smoothstep(0.5, 0.45, length(vUv2-0.5));

    #drawbuffer Color gl_FragColor = vec4(finalColor, alpha * uAlpha);
    #drawbuffer WorldPos gl_FragColor = vec4(vWorldPos, alpha * uAlpha);
}
{@}GardenUnderwaterShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform sampler2D tCaustics;
uniform vec4 uCaustics;
uniform float uBrightness;

uniform sampler2D tNormal;
uniform mat4 uMirrorMatrix;
uniform float uMirrorStrength;
uniform float uMirrorRoughness;
uniform sampler2D tMirrorReflection;
uniform vec2 uRippleTile;
uniform float uRippleStrength;
uniform float uRippleSpeed;

#!VARYINGS
varying vec2 vUv;
varying vec3 vPos;
varying vec3 vWorldPos;
varying vec4 vMirrorCoord;
varying vec3 vWorldNormal;

#!SHADER: Vertex
void main() {
    vUv = uv;
    vPos = position;
    vec4 worldPos = modelMatrix * vec4(position, 1.0);
    vWorldPos = worldPos.xyz;
    vMirrorCoord = uMirrorMatrix * worldPos;

    vec3 worldNormal = mat3(modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz) * normal;
    vWorldNormal = worldNormal;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: Fragment

#require(range.glsl)
#require(dreamclipping.fs)
#require(shadows.fs)
#require(normalmap.glsl)

void main() {
    if (isClipping(vUv*0.5, vWorldPos)) discard;

    vec3 color = texture2D(tMap, vUv).rgb;

    float shadow = 1.0;
    #test Tests.avatarShadow()
        shadow = getShadow(vPos);
    #endtest
    
    color = min(color, vec3(crange(shadow, 0.0, 1.0, 0.45, 1.0) * vec3(0.9, 1.0, 1.0)));

    color = pow(color, vec3(2.2));
    color *= uBrightness;

    vec3 caustics = vec3(0.0);
    vec3 caustics0 = texture2D(tCaustics, vUv * uCaustics.x + time * uCaustics.z).rgb;
    vec3 caustics1 = texture2D(tCaustics, vUv * 0.9 * uCaustics.x - time * uCaustics.z).rgb;
    caustics = pow(min(caustics0, caustics1), vec3(2.2));

    color += caustics * 2.5;
    color = pow(color, vec3(0.4545));


    #test Tests.renderMirror()
    vec3 normal = crange(texture2D(tNormal, vUv * uRippleTile - (time * uRippleSpeed * 0.01)).xyz, vec3(0.0), vec3(1.0), vec3(-1.0), vec3(1.0));
    vec2 mirrorCoords = vMirrorCoord.xy / vMirrorCoord.w;
    //mirrorCoords += normal.xy * 0.1 * uMirrorRoughness;
    vec3 mirrorColor = texture2D(tMirrorReflection, mirrorCoords).rgb;
    color += mirrorColor * uMirrorStrength;
    #endtest


    float alpha = smoothstep(0.5, 0.1, length(vUv-0.5));

    gl_FragColor = vec4(color, alpha);
}{@}ArtworkShader.glsl{@}#!ATTRIBUTES
attribute vec2 uv2;

#!UNIFORMS
uniform sampler2D uScene;
uniform sampler2D uScene2;
uniform sampler2D tMap;
uniform sampler2D tMap2;
uniform float uEnter;
uniform float uHero;
uniform float uStatic;
uniform float uTransition;
uniform float uPersist;
uniform float uHotspotTransition;

#!VARYINGS
varying vec3 vNormal;
varying vec3 vWorldPos;
varying vec3 vViewDir;
varying vec2 vUvImages;
varying vec2 vUv2;

#!SHADER: Vertex
void main() {
  vec3 pos = position;

  if (uv2.y < 1.0 / 4.0) {
    pos.z -= 0.25;
  }

  pos.z *= 0.1;

  vViewDir = -vec3(modelViewMatrix * vec4(pos, 1.0));
  vWorldPos = vec3(modelMatrix * vec4(pos, 1.0));
  vNormal = normalMatrix * normal;
  vUv2 = uv2;
  vUvImages = uv;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment
#require(range.glsl)
#require(transformUV.glsl)
#require(rgbshift.fs)
#require(radialblur.fs)
#require(dreamclipping.fs)

void main() {
  if (isClipping(vViewDir.xy * 0.1, vWorldPos)) discard;

  float section = 1.0 / 4.0;
  vec3 color = vec3(0.0);
  float alpha = 1.0;

  if (vUv2.y < section) { // Texture
    vec4 second = vec4(0.0);

    if (uTransition > 0.01) {
      float scale = crange(uTransition, 0.0, 1.0, 1.1, 1.0);
      vec2 secondUV = scaleUV(vUvImages, vec2(scale));
      second = texture2D(tMap2, secondUV);
    }

    vec4 texture = texture2D(tMap, vUvImages);

    color = texture.rgb;

    if (uTransition > 0.01) {
      // float noize = (cnoise(vUvImages * 0.9) + 1.0) / 2.0;
      // float amix = rangeTransition(0.7, noize, 0.0);
      float amix = step(1.0 - uTransition, 1.0 - vUvImages.y);
      color = mix(texture.rgb, second.rgb, amix);
    }

    alpha = 1.;

  } else {

    // Glass
    vec3 mvpos = normalize(-vViewDir);
    vec3 normal = vNormal;
    float fresnel = 0.5 + 0.5 * max(0.0, dot(-mvpos, normal));
    alpha = fresnel;

    vec4 glass = vec4(.85);

    #test !Tests.isVR()
      vec2 scaler = mix(vec2(1.), normal.xz, vec2(0.5));
      vec2 st = gl_FragCoord.xy / resolution.xy;
      st += vec2(0.1, 0.01) * scaler;
      vec4 refract = getRGB(uScene, st, time*0.2, sin(time)*0.005) * 0.99;

      refract = max(refract, getRGB(uScene2, st, time*0.2, sin(time)*0.005) * 0.99 );

      st = gl_FragCoord.xy / resolution.xy;
      st -= vec2(0.1, 0.01)* scaler;

      vec4 reflect = getRGB(uScene, st, time*0.2, sin(time)*0.005);

      reflect = max(reflect, getRGB(uScene2, st, time*0.2, sin(time)*0.005) * 0.99 );


      vec4 scene = mix(reflect, refract, pow(fresnel, 2.));

      scene = mix(scene, vec4(1.), step(length(scene.rgb), 0.01));

      glass = vec4(vec3(214., 236., 239.) / 255.* scene.rgb * pow(fresnel, 0.2), .8);
      glass.rgb = pow(glass.rgb, vec3(0.4545));

      vec3 texel = radialBlur(uScene, st, 30.0, 3.0).rgb;

      if(length(texel.rgb) < 0.01) texel = vec3(1.);

      glass.rgb *= 1.0 + texel * 0.3;

      alpha = 1.;
    #endtest

    color = glass.rgb;

  }

  #test Renderer.type !== 'webgl1'
    gl_FragDepth = gl_FragCoord.z - (uEnter * 0.2);
  #endtest

  #test !Tests.useVFX()
    if (uHotspotTransition > 0.01 && uPersist < 0.5) {
      alpha *= 1.0 - uHotspotTransition;

      if (alpha < 0.01) {
        discard;
      }
    }
  #endtest

  #drawbuffer Color gl_FragColor = vec4(color, alpha);
  #drawbuffer WorldPos gl_FragColor = vec4(vWorldPos, alpha);
  #drawbuffer Persist gl_FragColor = vec4(uPersist);
}{@}HotSpotBubbleShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 uColor;
uniform float uAlpha;

#!VARYINGS
varying vec2 vUv;
varying vec3 vNormal;

#!SHADER: Vertex
void main() {
    vUv = uv;
    vNormal = normal;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: Fragment
void main() {
    if (vNormal.y > 0.99) discard;
    if (vNormal.y < -0.99) discard;
    gl_FragColor = vec4(vec3(1.0), 0.4 * (1.0 - vUv.y));
    gl_FragColor.a *= 2.0;
    gl_FragColor.rgb *= uColor;
    gl_FragColor.a *= uAlpha;
}{@}CompassShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform float uHide;

#!VARYINGS
varying vec3 vViewDir;
varying vec3 vWorldPos;

#!SHADER: Vertex
#require(fbr.vs)

void main() {
  vec3 pos = position;

  pos *= mix(1.0, 0.0, uHide);

  pos *= smoothstep(-1.0, 1.0, pos.y) * vec3(1.1, 2.0, 1.1);
  //pos.y += sin(time*6.0)*0.1;
  
  setupFBR(pos);

  vViewDir = -vec3(modelViewMatrix * vec4(pos, 1.0));
  vWorldPos = (modelMatrix * vec4(pos, 1.0)).xyz;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment
#require(fbr.fs)
#require(fresnel.glsl)

void main() {
  vec3 fbr = getFBRSimplified();
  fbr *= getFresnel(vNormal, vViewDir, 3.0);

  #drawbuffer Color gl_FragColor = vec4(fbr, 1.0);
  #drawbuffer WorldPos gl_FragColor = vec4(vWorldPos, 1.0);
}{@}HotSpotFloor.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 uColor;
uniform vec3 uHotspotPosition;
uniform float uHotspotTransition;

#!VARYINGS
varying vec2 vUv;
varying vec3 vWorldPos;

#!SHADER: Vertex
void main() {
  vec3 pos = position;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  vUv = uv;
  vWorldPos = (modelMatrix * vec4(pos, 1.0)).xyz;
}

#!SHADER: Fragment
#require(aastep.glsl)
#require(range.glsl)

void main() {
  float dist = length(vUv - 0.5);

  vec3 color = uColor;
  float alpha = aastep(dist, 0.5);
  alpha *= 1.0 - aastep(dist, 0.45);
  alpha *= 0.2;

  #test !Tests.useVFX()
    if (uHotspotTransition > 0.01) {
      float dist = length(uHotspotPosition.xyz - vWorldPos.xyz);
      alpha *= mix(1.0, 1.0 - uHotspotTransition, step(3.0, dist));

      if (alpha < 0.01) {
        discard;
      }
    }
  #endtest

  #drawbuffer Color gl_FragColor = vec4(color, alpha);
  #drawbuffer WorldPos gl_FragColor = vec4(vWorldPos, alpha * 0.4);
}{@}HotSpotGlowShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 uColor;
uniform float uAlpha;
uniform float uHotspotTransition;

#!VARYINGS
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vWorldPos;

#!SHADER: Vertex

void main() {

    vUv = uv;
    vNormal = normal;
    vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: Fragment
void main() {
    if (vNormal.y > 0.99) discard;
    if (vNormal.y < -0.99) discard;

    vec4 color = vec4(vec3(1.0), 0.4 * (1.0 - vUv.y));
    color.a *= 2.0;
    color.rgb *= uColor;
    color.a *= uAlpha;

    #test !Tests.useVFX()
        color.a *= 1.0 - uHotspotTransition;
    #endtest

    #drawbuffer Color gl_FragColor = color;
    #drawbuffer WorldPos gl_FragColor = vec4(vWorldPos, 0.0);
}{@}HotSpotSharedParticles.glsl{@}#!ATTRIBUTES
attribute vec4 random;

#!UNIFORMS
uniform sampler2D tPos;
uniform sampler2D tMap;
uniform float DPR;
uniform float uAlpha;
uniform vec3 uTint;

#!VARYINGS
varying vec4 vRandom;

#!SHADER: Vertex

void main() {
    vec3 pos = texture2D(tPos, position.xy).xyz;

    float size = 0.04;

    size += random.x * 0.02;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = size * DPR * (1000.0 / length(mvPosition.xyz));
    gl_Position = projectionMatrix * mvPosition;

    vRandom = random;
}

#!SHADER: Fragment
#require(aastep.glsl)

void main() {
    vec2 uv = gl_PointCoord.xy;
    vec4 color = texture2D(tMap, uv);

    color.rgb *= uTint;
    color.a *= uAlpha;
    color.a += vRandom.x * 0.2;

    gl_FragColor = color;
}{@}TeleportQuad.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform float uTransition;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}

#!SHADER: Fragment
void main() {
  vec3 color = vec3(0.0);
  float alpha = 0.0;

  alpha = uTransition;

  gl_FragColor = vec4(color, alpha);
}{@}DepthPanel.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform float uEnter;

#!VARYINGS
#!SHADER: Vertex
void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: Fragment
void main() {
  #test Renderer.type !== 'webgl1'
    gl_FragDepth = gl_FragCoord.z - (uEnter * 0.2);
  #endtest

  #drawbuffer Color gl_FragColor = vec4(1.0, 0.0, 0.0, 0.0);
  #drawbuffer UIDepth gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
}{@}HotSpotUIArrow.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tArrow;
uniform sampler2D tUIDepth;
uniform vec3 uFill;
uniform vec2 uFullRes;
uniform float uPersist;
uniform float uEnter;
uniform float uShow;
uniform float uAlpha;
uniform float uRight;
uniform float uHover;
uniform float uTeleporting;

#!VARYINGS
varying vec3 vWorldPos;
varying vec2 vUv;

#!SHADER: Vertex
void main() {
  vec3 pos = position;

  pos *= mix(1.0, 1.2, uHover);
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  vWorldPos = vec3(modelMatrix * vec4(position, 1.0));
  vUv = uv;

  if (uRight > 0.5) {
    vUv.x = 1.0 - vUv.x;
  }
}

#!SHADER: Fragment
void main() {
  vec4 arrow = texture2D(tArrow, vUv);

  vec3 color = vec3(uFill);
  float alpha = step(1.0 - arrow.a, 0.4);

  #test Tests.uiRetina()
    vec2 suv = gl_FragCoord.xy / uFullRes.xy;
    float depthTest = texture2D(tUIDepth, suv).r;
    alpha *= step(0.5, depthTest);
    alpha *= 1.0 - uTeleporting;
  #endtest
  
  alpha *= uAlpha;
  float persist = alpha * uPersist;

  #test Renderer.type !== 'webgl1'
    gl_FragDepth = gl_FragCoord.z - (uEnter * 0.2);
  #endtest

  #drawbuffer Color gl_FragColor = vec4(color, alpha);
  #drawbuffer WorldPos gl_FragColor = vec4(vWorldPos, alpha);
  #drawbuffer Persist gl_FragColor = vec4(persist);
}{@}HotSpotUIShadow.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform float uShow;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
  vec3 pos = position;

  pos.y -= 0.09;
  pos *= 1.2;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  vUv = uv;
}

#!SHADER: Fragment
#require(range.glsl)
#require(simplenoise.glsl)

void main() {
  vec3 color = vec3(0.0);
  // float alpha = 1.0 - length(vUv - 0.5);
  float alpha = 0.3;

  alpha *= crange(vUv.x, 0.0, 0.1, 0.0, 1.0);
  alpha *= crange(vUv.x, 0.9, 1.0, 1.0, 0.0);
  alpha *= crange(vUv.y, 0.0, 0.1, 0.0, 1.0);
  alpha *= crange(vUv.y, 0.9, 1.0, 1.0, 0.0);
  alpha *= uShow;


  gl_FragColor = vec4(color, alpha);
}{@}HotSpotUIText.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform float uAlpha;
uniform float uPersist;
uniform float uEnter;
uniform float uHotspotTransition;

#!VARYINGS
varying vec3 vWorldPos;
varying vec2 vUv;

#!SHADER: Vertex
void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  vWorldPos = vec3(modelMatrix * vec4(position, 1.0));
  vUv = uv;
}

#!SHADER: Fragment
#require(msdf.glsl)

void main() {
  float alpha = msdf(tMap, vUv);
  alpha *= uAlpha;

  vec3 color = vec3(0.0);

  float persist = alpha * uPersist;

  #test Renderer.type !== 'webgl1'
    gl_FragDepth = gl_FragCoord.z - (uEnter * 0.2);
  #endtest

  #test !Tests.useVFX()
    if (uHotspotTransition > 0.01 && uPersist < 0.5) {
      alpha *= 1.0 - uHotspotTransition;
    }
  #endtest

  #drawbuffer Color gl_FragColor = vec4(color, alpha);
  #drawbuffer WorldPos gl_FragColor = vec4(vWorldPos, alpha);
  #drawbuffer Persist gl_FragColor = vec4(persist);
}
{@}HotSpotUITextBatch.glsl{@}#!ATTRIBUTES
attribute vec3 offset;
attribute vec2 scale;
attribute float rotation;
//attributes

#!UNIFORMS
uniform sampler2D tMap;
uniform sampler2D tUIDepth;
uniform vec3 uFill;
uniform float uAlpha;
uniform float uPersist;
uniform float uEnter;
uniform float uShow;
uniform float uHotspotTransition;
uniform float uTeleporting;
uniform vec2 uFullRes;

#!VARYINGS
varying vec2 vUv;
varying vec3 vWorldPos;
//varyings

#!SHADER: Vertex

mat4 lrotationMatrix(vec3 axis, float angle) {
    axis = normalize(axis);
    float s = sin(angle);
    float c = cos(angle);
    float oc = 1.0 - c;

    return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
    oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
    oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
    0.0,                                0.0,                                0.0,                                1.0);
}

void main() {
    vUv = uv;
    //vdefines

    vec3 pos = vec3(lrotationMatrix(vec3(0.0, 0.0, 1.0), rotation) * vec4(position, 1.0));

    //custommain

    pos.xy *= scale;
    pos += offset;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);

    vWorldPos = (modelMatrix * vec4(pos, 1.0)).xyz;
}

#!SHADER: Fragment

#require(msdf.glsl)

void main() {

  float alpha = msdf(tMap, vUv);

  #test Tests.uiRetina()
    vec2 suv = gl_FragCoord.xy / uFullRes.xy;
    float depthTest = texture2D(tUIDepth, suv).r;
    alpha *= step(0.5, depthTest);
    alpha *= 1.0 - uTeleporting;
  #endtest

  alpha *= uAlpha;
  alpha *= uShow;

  vec3 color = vec3(uFill);
  float persist = alpha * uPersist;

  #test Renderer.type !== 'webgl1'
    gl_FragDepth = gl_FragCoord.z - (uEnter * 0.2);
  #endtest

  if (uHotspotTransition > 0.01 && uPersist < 0.5) {
    alpha *= 1.0 - uHotspotTransition;
  }


  #drawbuffer Color gl_FragColor = vec4(color, alpha);
  #drawbuffer WorldPos gl_FragColor = vec4(vWorldPos, alpha);
  #drawbuffer Persist gl_FragColor = vec4(persist);
}
{@}arc.glsl{@}float draw_circle(vec2 coord, float radius) {
    return aastep(length(coord), radius, 0.01);
}

float draw_circle_outline(vec2 coord, float radius, float stroke) {
    float circle = draw_circle(coord, radius);
    float circle_stroke = draw_circle(coord, radius + stroke);
    return circle_stroke - circle;
}

float arc_segment(vec2 coord, float startAngle, float endAngle) {
    const float kInvPi = 1.0 / 3.14159265;
    float angle = atan(coord.x, coord.y) * kInvPi * 0.5;
    angle = fract(angle - startAngle);
    float segment = step(angle, endAngle);
    segment *= step(0.0, angle);
    return mix(segment, 1.0, step(1.0, endAngle));
}

float draw_arc_outline(vec2 coord, float radius, float stroke, float startAngle, float endAngle) {
    float circle_outline = draw_circle_outline(coord, radius, stroke);
    circle_outline *= arc_segment(coord, startAngle, endAngle);
    return circle_outline;
}{@}HotSpotUIAudioShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS

uniform vec3 uColor;
uniform float uOwnAlpha;
uniform float uProgress;
uniform float uTransition;
uniform float uLoadingTransition;
uniform vec3 uColor1;
uniform vec3 uColor2;

uniform float uHover;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vUv = uv;
}

#!SHADER: Fragment
#require(aastep.glsl)
#require(range.glsl)
#require(arc.glsl)

void main() {
    // float r = 0.5; 
    // float d = length(vUv - r);

    // if (d > 0.5) {
    //     discard;
    // }

    
    // color.a *= uOwnAlpha;

    vec2 uv = vUv;
    uv.x -= 0.5;
    uv.y -= 0.5;
    
    float d2 = draw_circle(uv, uTransition);
    vec3 color = mix(uColor1, uColor2, d2);

    vec3 line = vec3(0.);
    float stroke = 0.04;

    float arc = draw_arc_outline(uv, 0.5 - stroke, stroke, 0., uProgress);

    line = vec3(arc);

    // vec3 loader = uColor;
    
    float t = fract(time * 0.45);
    float loaderStroke = crange(uLoadingTransition, 0., 1.0, 0., stroke);
    // float loaderStroke = stroke;
    
    // Gradually go to current fractional of time, but only on enter transition
    // we can also fix this with another uniform if its buggy
    if(uTransition < 0.1) {
        t = crange(uLoadingTransition, 0., 1.0, 0., t);
    }
    float start = 0. + t;
    float end = 0.5 + t;
    float loaderArc = draw_arc_outline(uv, 0.5 - loaderStroke, loaderStroke, 
        end,
        start
    );
    // loader *= loaderArc;
    // loader.rgb *= uColor1;

    // vec4 final = color + line + loader;
    color = mix(color, uColor, loaderArc);
    color = mix(color, line, arc);
    vec3 final = color;

    // float s = 0.0;
    // if(uHover > 0.001) {
    //     s = 0.02;
    // }

    // float c = mix(0., draw_circle_outline(uv, uHover, 0.02), crange(uHover, 0., 0.3, 0., 1.));

    // final += c;

    float r = 0.48;
    float d = length(vUv - 0.5) - r;

    float offset = 0.1;
    if(uColor1.r == 1.) {
        offset = -0.3;
    }

    final = mix(final, final + offset, uHover);

    gl_FragColor.rgb = final;

    
    gl_FragColor.a = 1. * uOwnAlpha;
    gl_FragColor.a = 1. - aastep(0.01, d, 0.01);
}{@}HotSpotUICaptionsShader.glsl{@}#!ATTRIBUTES
attribute vec3 animation;

#!UNIFORMS
uniform sampler2D tMap;
uniform float uAlpha;
uniform float uOwnAlpha;
uniform vec3 uColor;

uniform float uCaptionProgress;
uniform float uOverflows;
uniform vec2 uDimensions;

uniform float uTransition;
uniform float uWordCount;
uniform float uLineCount;
uniform float uLetterCount;
uniform float uByWord;
uniform float uByLine;
uniform float uPadding;
uniform vec3 uBoundingMin;
uniform vec3 uBoundingMax;

#!VARYINGS
varying vec2 vUv;
varying float vWordIndex;
varying float vX;
varying float vO;

#!SHADER: Vertex
#require(eases.glsl)

void main() {
	vUv = uv;

	vec3 pos = position;

	float word = (animation.y + 1.) / uWordCount;
	vWordIndex = word;
	
	// float shouldOffset = step(uDimensions.x, uBoundingMax.x);
	// float speed = mix(2.5, 8., uOverflows) * uLetterCount;
	// float offset = mix(0., uLetterCount * 1.4, uOverflows);
	
	//float p = mix(uCaptionProgress, sineIn(uCaptionProgress), shouldOffset);
	// float tX = (p * speed);
	
	// pos.x -= tX;
	// vX = tX;

	gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment
#require(eases.glsl)
#require(range.glsl)
#require(msdf.glsl)

void main() {
	float alpha = msdf(tMap, vUv);
	float a = alpha * uAlpha;

	float progress = 1. - vWordIndex + uCaptionProgress;
	progress = expoIn(progress) * uOwnAlpha;

	vec3 color = uColor * progress;
	
	gl_FragColor = vec4(color, progress);
}{@}UIInstructionsButtonShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform float uOwnAlpha;
uniform vec3 uColor;
uniform float uHover;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vUv = uv;
}

#!SHADER: Fragment
#require(aastep.glsl)
#require(range.glsl)
void main() {
    // float r = 0.5; 
    // float d = length(vUv - r);

    // if (d > 0.5) {
    //     discard;
    // }

    float r = 0.48;
    float d = length(vUv - 0.5) - r;

    vec3 color = vec3(1.) - crange(uHover, 0., 1., 0., 0.2);

    gl_FragColor = vec4(color, 1.0);
    gl_FragColor.a *= uOwnAlpha - 0.3;
    gl_FragColor.a *= 1. - aastep(0.01, d, 0.01);
}{@}UIMuteButtonShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform float uOwnAlpha;
uniform vec3 uColor;
uniform float uAmplitude;
uniform float uHover;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vUv = uv;
}



#!SHADER: Fragment
#require(aastep.glsl)
#require(range.glsl)
void main() {


    // TODO: move
    float PI = 3.1415926538;

    vec3 color = uColor;

    

    vec2 st = vec2(vUv.x, vUv.y - 0.25) * 2.;
    
    float amp = uAmplitude * 0.6;
    float freq = 18.25;
    float speed = 3.0;
    float curve = amp * sin((freq * st.x) + (speed * time));

    float lineAShape = 1. - aastep(0.11,  distance(curve + st.y, 0.5), 0.1);
    lineAShape = pow(lineAShape, 2.0);
    gl_FragColor = vec4(1.) - crange(uHover, 0., 1., 0., 0.2);
    gl_FragColor.a = max(lineAShape, uOwnAlpha);

    if(vUv.x < 0.3 || vUv.x > 0.7) {
        gl_FragColor.a = uOwnAlpha;
    }

    float r = 0.48; 
    float d = length(vUv - 0.5) - r;

    gl_FragColor.a *= 1. - aastep(0.01, d, 0.01);

    
    

}{@}UIPlaybackSpeedOptionShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS

uniform vec3 uColor;
uniform float uOwnAlpha;
uniform float uProgress;
uniform float uTransition;
uniform float uLoadingTransition;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec2 uSize;
uniform float uScale;

uniform float uHover;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vUv = uv;
}

    #!SHADER: Fragment
    #require(aastep.glsl)
    #require(range.glsl)
    #require(arc.glsl)
    #require(roundedBorder.glsl)

void main() {

    vec2 uv = vUv;
    uv.x -= 0.5;
    uv.y -= 0.5;

    gl_FragColor.rgb = uColor2;
    float inside = 0.0;
    roundedBorder(0.0, 22.0, vUv, vec2(uSize.x * uScale, uSize.y), inside);
    gl_FragColor.a = 1.0 * inside * uOwnAlpha * uHover;
}
{@}UIPlaybackSpeedShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec2 uSize;
uniform vec3 uColor;
uniform float uTransition;
uniform float uAlpha;
uniform float uBorderRadius;
uniform float uScale;
uniform float uOwnAlpha;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vUv = uv;
}

    #!SHADER: Fragment
    #require(roundedBorder.glsl)

void main() {
    float inside = 0.0;
    roundedBorder(0.0, uBorderRadius, vUv, vec2(uSize.x * uScale, uSize.y), inside);
    vec4 col = vec4(uColor, uAlpha);

    gl_FragColor.xyz = uColor;
    gl_FragColor.w = uAlpha * inside * uOwnAlpha;
}
{@}SpeedButtonTextUnderscoreShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 uColor;
uniform float uAlpha;
uniform float uTransition;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vUv = uv;
}

    #!SHADER: Fragment
void main() {

    float lineAnim = step(uTransition, vUv.x);

    gl_FragColor = vec4(uColor, uAlpha * lineAnim);
}
{@}UIPlaybackSpeedButtonShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS

uniform vec3 uColor;
uniform float uOwnAlpha;
uniform float uProgress;
uniform float uTransition;
uniform float uLoadingTransition;
uniform vec3 uColor1;
uniform vec3 uColor2;

uniform float uHover;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vUv = uv;
}

    #!SHADER: Fragment
    #require(aastep.glsl)
    #require(range.glsl)
    #require(arc.glsl)

void main() {
    // float r = 0.5;
    // float d = length(vUv - r);

    // if (d > 0.5) {
    //     discard;
    // }


    // color.a *= uOwnAlpha;

    vec2 uv = vUv;
    uv.x -= 0.5;
    uv.y -= 0.5;

    float d2 = draw_circle(uv, uTransition);
    vec3 color = mix(uColor1, uColor2, d2);

    vec3 line = vec3(0.);
    float stroke = 0.04;

//    float arc = draw_arc_outline(uv, 0.5 - stroke, stroke, 0., uProgress);

//    line = vec3(arc);

    // vec3 loader = uColor;

    float t = fract(time * 0.45);
    float loaderStroke = crange(uLoadingTransition, 0., 1.0, 0., stroke);
    // float loaderStroke = stroke;

    // Gradually go to current fractional of time, but only on enter transition
    // we can also fix this with another uniform if its buggy
    if(uTransition < 0.1) {
        t = crange(uLoadingTransition, 0., 1.0, 0., t);
    }
    float start = 0. + t;
    float end = 0.5 + t;
//    float loaderArc = draw_arc_outline(uv, 0.5 - loaderStroke, loaderStroke,
//    end,
//    start
//    );
    // loader *= loaderArc;
    // loader.rgb *= uColor1;

    // vec4 final = color + line + loader;
//    color = mix(color, uColor, loaderArc);
//    color = mix(color, line, arc);
    vec3 final = color;

    // float s = 0.0;
    // if(uHover > 0.001) {
    //     s = 0.02;
    // }

    // float c = mix(0., draw_circle_outline(uv, uHover, 0.02), crange(uHover, 0., 0.3, 0., 1.));

    // final += c;

    float r = 0.48;
    float d = length(vUv - 0.5) - r;

    float offset = 0.1;
    if(uColor1.r == 1.) {
        offset = -0.3;
    }

//    final = mix(uColor, uColor2 + 0.1, uHover);
    final = mix(uColor, uColor2 + 0.1, 0.0);

    gl_FragColor.rgb = final;


    gl_FragColor.a = 1. * uOwnAlpha;
    gl_FragColor.a = (1. - aastep(0.01, d, 0.01)) * 0.0;
}
{@}PlaybackSpeedButtonMobileShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform float uOwnAlpha;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform float uTransition;
uniform float uLoadingTransition;
uniform float uHover;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vUv = uv;
}

    #!SHADER: Fragment
    #require(aastep.glsl)
    #require(range.glsl)
    #require(arc.glsl)

void main() {

    vec2 uv = vUv;
    uv.x -= 0.5;
    uv.y -= 0.5;

    vec3 color = mix(uColor1, uColor2, uTransition);

    float r = 0.48;
    float d = length(vUv - 0.5) - r;
    vec4 final = vec4(color, uOwnAlpha);

    gl_FragColor = final;
    gl_FragColor.a *= 1. - aastep(0.01, d, 0.01);

}
{@}HotSpotUIVoiceChatButtonShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform float uOwnAlpha;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform float uTransition;
uniform float uLoadingTransition;
uniform float uHover;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vUv = uv;
}

#!SHADER: Fragment
#require(aastep.glsl)
#require(range.glsl)
#require(arc.glsl)

void main() {
    // float r = 0.5; 
    // float d = length(vUv - r);

    // if (d > 0.5) {
    //     discard;
    // }

    vec2 uv = vUv;
    uv.x -= 0.5;
    uv.y -= 0.5;

    float d2 = draw_circle(uv, uTransition);
    vec3 color = mix(uColor1, uColor2, d2);

    vec4 line = vec4(0.);
    
    float t = fract(time * 0.45);
    float stroke = crange(uLoadingTransition, 0., 1.0, 0., 0.04);
    
    // Gradually go to current fractional of time, but only on enter transition
    // we can also fix this with another uniform if its buggy
    if(uTransition < 0.1) {
        t = crange(uLoadingTransition, 0., 1.0, 0., t);
    }
    float start = 0. + t;
    float end = 0.5 + t;
    float arc = draw_arc_outline(uv, 0.5 - stroke, stroke, 
        end,
        start
    );
    line = vec4(arc);    

    float r = 0.48;
    float d = length(vUv - 0.5) - r;
    vec4 final = vec4(color, uOwnAlpha) + line;

    float offset = 0.1;
    if(uColor1.r == 1.) {
        offset = -0.1;
    }
    final = mix(final, final + offset, uHover);

    gl_FragColor = final;
    gl_FragColor.a *= 1. - aastep(0.01, d, 0.01);
    
}