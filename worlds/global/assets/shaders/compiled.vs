{@}aastep.glsl{@}float aastep(float threshold, float value) {
    float afwidth = length(vec2(dFdx(value), dFdy(value))) * 0.70710678118654757;
    return smoothstep(threshold-afwidth, threshold+afwidth, value);
}

float aastep(float threshold, float value, float padding) {
    return smoothstep(threshold - padding, threshold + padding, value);
}

vec2 aastep(vec2 threshold, vec2 value) {
    return vec2(
        aastep(threshold.x, value.x),
        aastep(threshold.y, value.y)
    );
}{@}AntimatterCopy.fs{@}uniform sampler2D tDiffuse;

varying vec2 vUv;

void main() {
    gl_FragColor = texture2D(tDiffuse, vUv);
}{@}AntimatterCopy.vs{@}varying vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
}{@}AntimatterPass.vs{@}varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
}{@}AntimatterPosition.vs{@}uniform sampler2D tPos;

void main() {
    vec4 decodedPos = texture2D(tPos, position.xy);
    vec3 pos = decodedPos.xyz;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = 0.02 * (1000.0 / length(mvPosition.xyz));
    gl_Position = projectionMatrix * mvPosition;
}{@}AntimatterBasicFrag.fs{@}void main() {
    gl_FragColor = vec4(1.0);
}{@}antimatter.glsl{@}vec3 getData(sampler2D tex, vec2 uv) {
    return texture2D(tex, uv).xyz;
}

vec4 getData4(sampler2D tex, vec2 uv) {
    return texture2D(tex, uv);
}

{@}blendmodes.glsl{@}float blendColorDodge(float base, float blend) {
    return (blend == 1.0)?blend:min(base/(1.0-blend), 1.0);
}
vec3 blendColorDodge(vec3 base, vec3 blend) {
    return vec3(blendColorDodge(base.r, blend.r), blendColorDodge(base.g, blend.g), blendColorDodge(base.b, blend.b));
}
vec3 blendColorDodge(vec3 base, vec3 blend, float opacity) {
    return (blendColorDodge(base, blend) * opacity + base * (1.0 - opacity));
}
float blendColorBurn(float base, float blend) {
    return (blend == 0.0)?blend:max((1.0-((1.0-base)/blend)), 0.0);
}
vec3 blendColorBurn(vec3 base, vec3 blend) {
    return vec3(blendColorBurn(base.r, blend.r), blendColorBurn(base.g, blend.g), blendColorBurn(base.b, blend.b));
}
vec3 blendColorBurn(vec3 base, vec3 blend, float opacity) {
    return (blendColorBurn(base, blend) * opacity + base * (1.0 - opacity));
}
float blendVividLight(float base, float blend) {
    return (blend<0.5)?blendColorBurn(base, (2.0*blend)):blendColorDodge(base, (2.0*(blend-0.5)));
}
vec3 blendVividLight(vec3 base, vec3 blend) {
    return vec3(blendVividLight(base.r, blend.r), blendVividLight(base.g, blend.g), blendVividLight(base.b, blend.b));
}
vec3 blendVividLight(vec3 base, vec3 blend, float opacity) {
    return (blendVividLight(base, blend) * opacity + base * (1.0 - opacity));
}
float blendHardMix(float base, float blend) {
    return (blendVividLight(base, blend)<0.5)?0.0:1.0;
}
vec3 blendHardMix(vec3 base, vec3 blend) {
    return vec3(blendHardMix(base.r, blend.r), blendHardMix(base.g, blend.g), blendHardMix(base.b, blend.b));
}
vec3 blendHardMix(vec3 base, vec3 blend, float opacity) {
    return (blendHardMix(base, blend) * opacity + base * (1.0 - opacity));
}
float blendLinearDodge(float base, float blend) {
    return min(base+blend, 1.0);
}
vec3 blendLinearDodge(vec3 base, vec3 blend) {
    return min(base+blend, vec3(1.0));
}
vec3 blendLinearDodge(vec3 base, vec3 blend, float opacity) {
    return (blendLinearDodge(base, blend) * opacity + base * (1.0 - opacity));
}
float blendLinearBurn(float base, float blend) {
    return max(base+blend-1.0, 0.0);
}
vec3 blendLinearBurn(vec3 base, vec3 blend) {
    return max(base+blend-vec3(1.0), vec3(0.0));
}
vec3 blendLinearBurn(vec3 base, vec3 blend, float opacity) {
    return (blendLinearBurn(base, blend) * opacity + base * (1.0 - opacity));
}
float blendLinearLight(float base, float blend) {
    return blend<0.5?blendLinearBurn(base, (2.0*blend)):blendLinearDodge(base, (2.0*(blend-0.5)));
}
vec3 blendLinearLight(vec3 base, vec3 blend) {
    return vec3(blendLinearLight(base.r, blend.r), blendLinearLight(base.g, blend.g), blendLinearLight(base.b, blend.b));
}
vec3 blendLinearLight(vec3 base, vec3 blend, float opacity) {
    return (blendLinearLight(base, blend) * opacity + base * (1.0 - opacity));
}
float blendLighten(float base, float blend) {
    return max(blend, base);
}
vec3 blendLighten(vec3 base, vec3 blend) {
    return vec3(blendLighten(base.r, blend.r), blendLighten(base.g, blend.g), blendLighten(base.b, blend.b));
}
vec3 blendLighten(vec3 base, vec3 blend, float opacity) {
    return (blendLighten(base, blend) * opacity + base * (1.0 - opacity));
}
float blendDarken(float base, float blend) {
    return min(blend, base);
}
vec3 blendDarken(vec3 base, vec3 blend) {
    return vec3(blendDarken(base.r, blend.r), blendDarken(base.g, blend.g), blendDarken(base.b, blend.b));
}
vec3 blendDarken(vec3 base, vec3 blend, float opacity) {
    return (blendDarken(base, blend) * opacity + base * (1.0 - opacity));
}
float blendPinLight(float base, float blend) {
    return (blend<0.5)?blendDarken(base, (2.0*blend)):blendLighten(base, (2.0*(blend-0.5)));
}
vec3 blendPinLight(vec3 base, vec3 blend) {
    return vec3(blendPinLight(base.r, blend.r), blendPinLight(base.g, blend.g), blendPinLight(base.b, blend.b));
}
vec3 blendPinLight(vec3 base, vec3 blend, float opacity) {
    return (blendPinLight(base, blend) * opacity + base * (1.0 - opacity));
}
float blendReflect(float base, float blend) {
    return (blend == 1.0)?blend:min(base*base/(1.0-blend), 1.0);
}
vec3 blendReflect(vec3 base, vec3 blend) {
    return vec3(blendReflect(base.r, blend.r), blendReflect(base.g, blend.g), blendReflect(base.b, blend.b));
}
vec3 blendReflect(vec3 base, vec3 blend, float opacity) {
    return (blendReflect(base, blend) * opacity + base * (1.0 - opacity));
}
vec3 blendGlow(vec3 base, vec3 blend) {
    return blendReflect(blend, base);
}
vec3 blendGlow(vec3 base, vec3 blend, float opacity) {
    return (blendGlow(base, blend) * opacity + base * (1.0 - opacity));
}
float blendOverlay(float base, float blend) {
    return base<0.5?(2.0*base*blend):(1.0-2.0*(1.0-base)*(1.0-blend));
}
vec3 blendOverlay(vec3 base, vec3 blend) {
    return vec3(blendOverlay(base.r, blend.r), blendOverlay(base.g, blend.g), blendOverlay(base.b, blend.b));
}
vec3 blendOverlay(vec3 base, vec3 blend, float opacity) {
    return (blendOverlay(base, blend) * opacity + base * (1.0 - opacity));
}
vec3 blendHardLight(vec3 base, vec3 blend) {
    return blendOverlay(blend, base);
}
vec3 blendHardLight(vec3 base, vec3 blend, float opacity) {
    return (blendHardLight(base, blend) * opacity + base * (1.0 - opacity));
}
vec3 blendPhoenix(vec3 base, vec3 blend) {
    return min(base, blend)-max(base, blend)+vec3(1.0);
}
vec3 blendPhoenix(vec3 base, vec3 blend, float opacity) {
    return (blendPhoenix(base, blend) * opacity + base * (1.0 - opacity));
}
vec3 blendNormal(vec3 base, vec3 blend) {
    return blend;
}
vec3 blendNormal(vec3 base, vec3 blend, float opacity) {
    return (blendNormal(base, blend) * opacity + base * (1.0 - opacity));
}
vec3 blendNegation(vec3 base, vec3 blend) {
    return vec3(1.0)-abs(vec3(1.0)-base-blend);
}
vec3 blendNegation(vec3 base, vec3 blend, float opacity) {
    return (blendNegation(base, blend) * opacity + base * (1.0 - opacity));
}
vec3 blendMultiply(vec3 base, vec3 blend) {
    return base*blend;
}
vec3 blendMultiply(vec3 base, vec3 blend, float opacity) {
    return (blendMultiply(base, blend) * opacity + base * (1.0 - opacity));
}
vec3 blendAverage(vec3 base, vec3 blend) {
    return (base+blend)/2.0;
}
vec3 blendAverage(vec3 base, vec3 blend, float opacity) {
    return (blendAverage(base, blend) * opacity + base * (1.0 - opacity));
}
float blendScreen(float base, float blend) {
    return 1.0-((1.0-base)*(1.0-blend));
}
vec3 blendScreen(vec3 base, vec3 blend) {
    return vec3(blendScreen(base.r, blend.r), blendScreen(base.g, blend.g), blendScreen(base.b, blend.b));
}
vec3 blendScreen(vec3 base, vec3 blend, float opacity) {
    return (blendScreen(base, blend) * opacity + base * (1.0 - opacity));
}
float blendSoftLight(float base, float blend) {
    return (blend<0.5)?(2.0*base*blend+base*base*(1.0-2.0*blend)):(sqrt(base)*(2.0*blend-1.0)+2.0*base*(1.0-blend));
}
vec3 blendSoftLight(vec3 base, vec3 blend) {
    return vec3(blendSoftLight(base.r, blend.r), blendSoftLight(base.g, blend.g), blendSoftLight(base.b, blend.b));
}
vec3 blendSoftLight(vec3 base, vec3 blend, float opacity) {
    return (blendSoftLight(base, blend) * opacity + base * (1.0 - opacity));
}
float blendSubtract(float base, float blend) {
    return max(base+blend-1.0, 0.0);
}
vec3 blendSubtract(vec3 base, vec3 blend) {
    return max(base+blend-vec3(1.0), vec3(0.0));
}
vec3 blendSubtract(vec3 base, vec3 blend, float opacity) {
    return (blendSubtract(base, blend) * opacity + base * (1.0 - opacity));
}
vec3 blendExclusion(vec3 base, vec3 blend) {
    return base+blend-2.0*base*blend;
}
vec3 blendExclusion(vec3 base, vec3 blend, float opacity) {
    return (blendExclusion(base, blend) * opacity + base * (1.0 - opacity));
}
vec3 blendDifference(vec3 base, vec3 blend) {
    return abs(base-blend);
}
vec3 blendDifference(vec3 base, vec3 blend, float opacity) {
    return (blendDifference(base, blend) * opacity + base * (1.0 - opacity));
}
float blendAdd(float base, float blend) {
    return min(base+blend, 1.0);
}
vec3 blendAdd(vec3 base, vec3 blend) {
    return min(base+blend, vec3(1.0));
}
vec3 blendAdd(vec3 base, vec3 blend, float opacity) {
    return (blendAdd(base, blend) * opacity + base * (1.0 - opacity));
}{@}conditionals.glsl{@}vec4 when_eq(vec4 x, vec4 y) {
  return 1.0 - abs(sign(x - y));
}

vec4 when_neq(vec4 x, vec4 y) {
  return abs(sign(x - y));
}

vec4 when_gt(vec4 x, vec4 y) {
  return max(sign(x - y), 0.0);
}

vec4 when_lt(vec4 x, vec4 y) {
  return max(sign(y - x), 0.0);
}

vec4 when_ge(vec4 x, vec4 y) {
  return 1.0 - when_lt(x, y);
}

vec4 when_le(vec4 x, vec4 y) {
  return 1.0 - when_gt(x, y);
}

vec3 when_eq(vec3 x, vec3 y) {
  return 1.0 - abs(sign(x - y));
}

vec3 when_neq(vec3 x, vec3 y) {
  return abs(sign(x - y));
}

vec3 when_gt(vec3 x, vec3 y) {
  return max(sign(x - y), 0.0);
}

vec3 when_lt(vec3 x, vec3 y) {
  return max(sign(y - x), 0.0);
}

vec3 when_ge(vec3 x, vec3 y) {
  return 1.0 - when_lt(x, y);
}

vec3 when_le(vec3 x, vec3 y) {
  return 1.0 - when_gt(x, y);
}

vec2 when_eq(vec2 x, vec2 y) {
  return 1.0 - abs(sign(x - y));
}

vec2 when_neq(vec2 x, vec2 y) {
  return abs(sign(x - y));
}

vec2 when_gt(vec2 x, vec2 y) {
  return max(sign(x - y), 0.0);
}

vec2 when_lt(vec2 x, vec2 y) {
  return max(sign(y - x), 0.0);
}

vec2 when_ge(vec2 x, vec2 y) {
  return 1.0 - when_lt(x, y);
}

vec2 when_le(vec2 x, vec2 y) {
  return 1.0 - when_gt(x, y);
}

float when_eq(float x, float y) {
  return 1.0 - abs(sign(x - y));
}

float when_neq(float x, float y) {
  return abs(sign(x - y));
}

float when_gt(float x, float y) {
  return max(sign(x - y), 0.0);
}

float when_lt(float x, float y) {
  return max(sign(y - x), 0.0);
}

float when_ge(float x, float y) {
  return 1.0 - when_lt(x, y);
}

float when_le(float x, float y) {
  return 1.0 - when_gt(x, y);
}

vec4 and(vec4 a, vec4 b) {
  return a * b;
}

vec4 or(vec4 a, vec4 b) {
  return min(a + b, 1.0);
}

vec4 Not(vec4 a) {
  return 1.0 - a;
}

vec3 and(vec3 a, vec3 b) {
  return a * b;
}

vec3 or(vec3 a, vec3 b) {
  return min(a + b, 1.0);
}

vec3 Not(vec3 a) {
  return 1.0 - a;
}

vec2 and(vec2 a, vec2 b) {
  return a * b;
}

vec2 or(vec2 a, vec2 b) {
  return min(a + b, 1.0);
}


vec2 Not(vec2 a) {
  return 1.0 - a;
}

float and(float a, float b) {
  return a * b;
}

float or(float a, float b) {
  return min(a + b, 1.0);
}

float Not(float a) {
  return 1.0 - a;
}{@}curl.glsl{@}#test Device.mobile
float sinf2(float x) {
    x*=0.159155;
    x-=floor(x);
    float xx=x*x;
    float y=-6.87897;
    y=y*xx+33.7755;
    y=y*xx-72.5257;
    y=y*xx+80.5874;
    y=y*xx-41.2408;
    y=y*xx+6.28077;
    return x*y;
}

float cosf2(float x) {
    return sinf2(x+1.5708);
}
#endtest

#test !Device.mobile
    #define sinf2 sin
    #define cosf2 cos
#endtest

float potential1(vec3 v) {
    float noise = 0.0;
    noise += sinf2(v.x * 1.8 + v.z * 3.) + sinf2(v.x * 4.8 + v.z * 4.5) + sinf2(v.x * -7.0 + v.z * 1.2) + sinf2(v.x * -5.0 + v.z * 2.13);
    noise += sinf2(v.y * -0.48 + v.z * 5.4) + sinf2(v.y * 2.56 + v.z * 5.4) + sinf2(v.y * 4.16 + v.z * 2.4) + sinf2(v.y * -4.16 + v.z * 1.35);
    return noise;
}

float potential2(vec3 v) {
    float noise = 0.0;
    noise += sinf2(v.y * 1.8 + v.x * 3. - 2.82) + sinf2(v.y * 4.8 + v.x * 4.5 + 74.37) + sinf2(v.y * -7.0 + v.x * 1.2 - 256.72) + sinf2(v.y * -5.0 + v.x * 2.13 - 207.683);
    noise += sinf2(v.z * -0.48 + v.x * 5.4 -125.796) + sinf2(v.z * 2.56 + v.x * 5.4 + 17.692) + sinf2(v.z * 4.16 + v.x * 2.4 + 150.512) + sinf2(v.z * -4.16 + v.x * 1.35 - 222.137);
    return noise;
}

float potential3(vec3 v) {
    float noise = 0.0;
    noise += sinf2(v.z * 1.8 + v.y * 3. - 194.58) + sinf2(v.z * 4.8 + v.y * 4.5 - 83.13) + sinf2(v.z * -7.0 + v.y * 1.2 -845.2) + sinf2(v.z * -5.0 + v.y * 2.13 - 762.185);
    noise += sinf2(v.x * -0.48 + v.y * 5.4 - 707.916) + sinf2(v.x * 2.56 + v.y * 5.4 + -482.348) + sinf2(v.x * 4.16 + v.y * 2.4 + 9.872) + sinf2(v.x * -4.16 + v.y * 1.35 - 476.747);
    return noise;
}

vec3 snoiseVec3( vec3 x ) {
    float s  = potential1(x);
    float s1 = potential2(x);
    float s2 = potential3(x);
    return vec3( s , s1 , s2 );
}

//Analitic derivatives of the potentials for the curl noise, based on: http://weber.itn.liu.se/~stegu/TNM084-2019/bridson-siggraph2007-curlnoise.pdf

float dP3dY(vec3 v) {
    float noise = 0.0;
    noise += 3. * cosf2(v.z * 1.8 + v.y * 3. - 194.58) + 4.5 * cosf2(v.z * 4.8 + v.y * 4.5 - 83.13) + 1.2 * cosf2(v.z * -7.0 + v.y * 1.2 -845.2) + 2.13 * cosf2(v.z * -5.0 + v.y * 2.13 - 762.185);
    noise += 5.4 * cosf2(v.x * -0.48 + v.y * 5.4 - 707.916) + 5.4 * cosf2(v.x * 2.56 + v.y * 5.4 + -482.348) + 2.4 * cosf2(v.x * 4.16 + v.y * 2.4 + 9.872) + 1.35 * cosf2(v.x * -4.16 + v.y * 1.35 - 476.747);
    return noise;
}

float dP2dZ(vec3 v) {
    return -0.48 * cosf2(v.z * -0.48 + v.x * 5.4 -125.796) + 2.56 * cosf2(v.z * 2.56 + v.x * 5.4 + 17.692) + 4.16 * cosf2(v.z * 4.16 + v.x * 2.4 + 150.512) -4.16 * cosf2(v.z * -4.16 + v.x * 1.35 - 222.137);
}

float dP1dZ(vec3 v) {
    float noise = 0.0;
    noise += 3. * cosf2(v.x * 1.8 + v.z * 3.) + 4.5 * cosf2(v.x * 4.8 + v.z * 4.5) + 1.2 * cosf2(v.x * -7.0 + v.z * 1.2) + 2.13 * cosf2(v.x * -5.0 + v.z * 2.13);
    noise += 5.4 * cosf2(v.y * -0.48 + v.z * 5.4) + 5.4 * cosf2(v.y * 2.56 + v.z * 5.4) + 2.4 * cosf2(v.y * 4.16 + v.z * 2.4) + 1.35 * cosf2(v.y * -4.16 + v.z * 1.35);
    return noise;
}

float dP3dX(vec3 v) {
    return -0.48 * cosf2(v.x * -0.48 + v.y * 5.4 - 707.916) + 2.56 * cosf2(v.x * 2.56 + v.y * 5.4 + -482.348) + 4.16 * cosf2(v.x * 4.16 + v.y * 2.4 + 9.872) -4.16 * cosf2(v.x * -4.16 + v.y * 1.35 - 476.747);
}

float dP2dX(vec3 v) {
    float noise = 0.0;
    noise += 3. * cosf2(v.y * 1.8 + v.x * 3. - 2.82) + 4.5 * cosf2(v.y * 4.8 + v.x * 4.5 + 74.37) + 1.2 * cosf2(v.y * -7.0 + v.x * 1.2 - 256.72) + 2.13 * cosf2(v.y * -5.0 + v.x * 2.13 - 207.683);
    noise += 5.4 * cosf2(v.z * -0.48 + v.x * 5.4 -125.796) + 5.4 * cosf2(v.z * 2.56 + v.x * 5.4 + 17.692) + 2.4 * cosf2(v.z * 4.16 + v.x * 2.4 + 150.512) + 1.35 * cosf2(v.z * -4.16 + v.x * 1.35 - 222.137);
    return noise;
}

float dP1dY(vec3 v) {
    return -0.48 * cosf2(v.y * -0.48 + v.z * 5.4) + 2.56 * cosf2(v.y * 2.56 + v.z * 5.4) +  4.16 * cosf2(v.y * 4.16 + v.z * 2.4) -4.16 * cosf2(v.y * -4.16 + v.z * 1.35);
}


vec3 curlNoise( vec3 p ) {

    //A sinf2 or cosf2 call is a trigonometric function, these functions are expensive in the GPU
    //the partial derivatives with approximations require to calculate the snoiseVec3 function 4 times.
    //The previous function evaluate the potentials that include 8 trigonometric functions each.
    //
    //This means that the potentials are evaluated 12 times (4 calls to snoiseVec3 that make 3 potential calls).
    //The whole process call 12 * 8 trigonometric functions, a total of 96 times.


    /*
    const float e = 1e-1;
    vec3 dx = vec3( e   , 0.0 , 0.0 );
    vec3 dy = vec3( 0.0 , e   , 0.0 );
    vec3 dz = vec3( 0.0 , 0.0 , e   );
    vec3 p0 = snoiseVec3(p);
    vec3 p_x1 = snoiseVec3( p + dx );
    vec3 p_y1 = snoiseVec3( p + dy );
    vec3 p_z1 = snoiseVec3( p + dz );
    float x = p_y1.z - p0.z - p_z1.y + p0.y;
    float y = p_z1.x - p0.x - p_x1.z + p0.z;
    float z = p_x1.y - p0.y - p_y1.x + p0.x;
    return normalize( vec3( x , y , z ));
    */


    //The noise that is used to define the potentials is based on analitic functions that are easy to derivate,
    //meaning that the analitic solution would provide a much faster approach with the same visual results.
    //
    //Usinf2g the analitic derivatives the algorithm does not require to evaluate snoiseVec3, instead it uses the
    //analitic partial derivatives from each potential on the corresponding axis, providing a total of
    //36 calls to trigonometric functions, making the analytic evaluation almost 3 times faster than the aproximation method.


    float x = dP3dY(p) - dP2dZ(p);
    float y = dP1dZ(p) - dP3dX(p);
    float z = dP2dX(p) - dP1dY(p);


    return normalize( vec3( x , y , z ));



}{@}depthvalue.fs{@}float getDepthValue(sampler2D tDepth, vec2 uv, float n, float f) {
    vec4 depth = texture2D(tDepth, uv);
    return (2.0 * n) / (f + n - depth.x * (f - n));
}{@}eases.glsl{@}#ifndef PI
#define PI 3.141592653589793
#endif

#ifndef HALF_PI
#define HALF_PI 1.5707963267948966
#endif

float backInOut(float t) {
  float f = t < 0.5
    ? 2.0 * t
    : 1.0 - (2.0 * t - 1.0);

  float g = pow(f, 3.0) - f * sin(f * PI);

  return t < 0.5
    ? 0.5 * g
    : 0.5 * (1.0 - g) + 0.5;
}

float backIn(float t) {
  return pow(t, 3.0) - t * sin(t * PI);
}

float backOut(float t) {
  float f = 1.0 - t;
  return 1.0 - (pow(f, 3.0) - f * sin(f * PI));
}

float bounceOut(float t) {
  const float a = 4.0 / 11.0;
  const float b = 8.0 / 11.0;
  const float c = 9.0 / 10.0;

  const float ca = 4356.0 / 361.0;
  const float cb = 35442.0 / 1805.0;
  const float cc = 16061.0 / 1805.0;

  float t2 = t * t;

  return t < a
    ? 7.5625 * t2
    : t < b
      ? 9.075 * t2 - 9.9 * t + 3.4
      : t < c
        ? ca * t2 - cb * t + cc
        : 10.8 * t * t - 20.52 * t + 10.72;
}

float bounceIn(float t) {
  return 1.0 - bounceOut(1.0 - t);
}

float bounceInOut(float t) {
  return t < 0.5
    ? 0.5 * (1.0 - bounceOut(1.0 - t * 2.0))
    : 0.5 * bounceOut(t * 2.0 - 1.0) + 0.5;
}

float circularInOut(float t) {
  return t < 0.5
    ? 0.5 * (1.0 - sqrt(1.0 - 4.0 * t * t))
    : 0.5 * (sqrt((3.0 - 2.0 * t) * (2.0 * t - 1.0)) + 1.0);
}

float circularIn(float t) {
  return 1.0 - sqrt(1.0 - t * t);
}

float circularOut(float t) {
  return sqrt((2.0 - t) * t);
}

float cubicInOut(float t) {
  return t < 0.5
    ? 4.0 * t * t * t
    : 0.5 * pow(2.0 * t - 2.0, 3.0) + 1.0;
}

float cubicIn(float t) {
  return t * t * t;
}

float cubicOut(float t) {
  float f = t - 1.0;
  return f * f * f + 1.0;
}

float elasticInOut(float t) {
  return t < 0.5
    ? 0.5 * sin(+13.0 * HALF_PI * 2.0 * t) * pow(2.0, 10.0 * (2.0 * t - 1.0))
    : 0.5 * sin(-13.0 * HALF_PI * ((2.0 * t - 1.0) + 1.0)) * pow(2.0, -10.0 * (2.0 * t - 1.0)) + 1.0;
}

float elasticIn(float t) {
  return sin(13.0 * t * HALF_PI) * pow(2.0, 10.0 * (t - 1.0));
}

float elasticOut(float t) {
  return sin(-13.0 * (t + 1.0) * HALF_PI) * pow(2.0, -10.0 * t) + 1.0;
}

float expoInOut(float t) {
  return t == 0.0 || t == 1.0
    ? t
    : t < 0.5
      ? +0.5 * pow(2.0, (20.0 * t) - 10.0)
      : -0.5 * pow(2.0, 10.0 - (t * 20.0)) + 1.0;
}

float expoIn(float t) {
  return t == 0.0 ? t : pow(2.0, 10.0 * (t - 1.0));
}

float expoOut(float t) {
  return t == 1.0 ? t : 1.0 - pow(2.0, -10.0 * t);
}

float linear(float t) {
  return t;
}

float quadraticInOut(float t) {
  float p = 2.0 * t * t;
  return t < 0.5 ? p : -p + (4.0 * t) - 1.0;
}

float quadraticIn(float t) {
  return t * t;
}

float quadraticOut(float t) {
  return -t * (t - 2.0);
}

float quarticInOut(float t) {
  return t < 0.5
    ? +8.0 * pow(t, 4.0)
    : -8.0 * pow(t - 1.0, 4.0) + 1.0;
}

float quarticIn(float t) {
  return pow(t, 4.0);
}

float quarticOut(float t) {
  return pow(t - 1.0, 3.0) * (1.0 - t) + 1.0;
}

float qinticInOut(float t) {
  return t < 0.5
    ? +16.0 * pow(t, 5.0)
    : -0.5 * pow(2.0 * t - 2.0, 5.0) + 1.0;
}

float qinticIn(float t) {
  return pow(t, 5.0);
}

float qinticOut(float t) {
  return 1.0 - (pow(t - 1.0, 5.0));
}

float sineInOut(float t) {
  return -0.5 * (cos(PI * t) - 1.0);
}

float sineIn(float t) {
  return sin((t - 1.0) * HALF_PI) + 1.0;
}

float sineOut(float t) {
  return sin(t * HALF_PI);
}
{@}fresnel.glsl{@}float getFresnel(vec3 normal, vec3 viewDir, float power) {
    float d = dot(normalize(normal), normalize(viewDir));
    return 1.0 - pow(abs(d), power);
}

float getFresnel(float inIOR, float outIOR, vec3 normal, vec3 viewDir) {
    float ro = (inIOR - outIOR) / (inIOR + outIOR);
    float d = dot(normalize(normal), normalize(viewDir));
    return ro + (1. - ro) * pow((1. - d), 5.);
}


//viewDir = -vec3(modelViewMatrix * vec4(position, 1.0));{@}gaussianblur.fs{@}vec4 blur13(sampler2D image, vec2 uv, vec2 resolution, vec2 direction) {
  vec4 color = vec4(0.0);
  vec2 off1 = vec2(1.411764705882353) * direction;
  vec2 off2 = vec2(3.2941176470588234) * direction;
  vec2 off3 = vec2(5.176470588235294) * direction;
  color += texture2D(image, uv) * 0.1964825501511404;
  color += texture2D(image, uv + (off1 / resolution)) * 0.2969069646728344;
  color += texture2D(image, uv - (off1 / resolution)) * 0.2969069646728344;
  color += texture2D(image, uv + (off2 / resolution)) * 0.09447039785044732;
  color += texture2D(image, uv - (off2 / resolution)) * 0.09447039785044732;
  color += texture2D(image, uv + (off3 / resolution)) * 0.010381362401148057;
  color += texture2D(image, uv - (off3 / resolution)) * 0.010381362401148057;
  return color;
}

vec4 blur5(sampler2D image, vec2 uv, vec2 resolution, vec2 direction) {
  vec4 color = vec4(0.0);
  vec2 off1 = vec2(1.3333333333333333) * direction;
  color += texture2D(image, uv) * 0.29411764705882354;
  color += texture2D(image, uv + (off1 / resolution)) * 0.35294117647058826;
  color += texture2D(image, uv - (off1 / resolution)) * 0.35294117647058826;
  return color;
}

vec4 blur9(sampler2D image, vec2 uv, vec2 resolution, vec2 direction) {
  vec4 color = vec4(0.0);
  vec2 off1 = vec2(1.3846153846) * direction;
  vec2 off2 = vec2(3.2307692308) * direction;
  color += texture2D(image, uv) * 0.2270270270;
  color += texture2D(image, uv + (off1 / resolution)) * 0.3162162162;
  color += texture2D(image, uv - (off1 / resolution)) * 0.3162162162;
  color += texture2D(image, uv + (off2 / resolution)) * 0.0702702703;
  color += texture2D(image, uv - (off2 / resolution)) * 0.0702702703;
  return color;
}

vec4 gaussianblur(sampler2D image, vec2 uv, float steps, vec2 resolution, vec2 direction) {

  vec4 blend = vec4(0.);
  float sum = 1.;
  float m = 1.;
  float n = steps;

  for (float i = 0.; i < 100.; i += 1.) {
      if(i >= 2. * steps) break;
      float k = i;
      float j = i - 0.5 * steps;
      blend += m * texture2D(image, uv + j * direction / resolution);
      m *= (n - k) / (k + 1.);
      sum += m;
  }

  return blend / sum;

}{@}glscreenprojection.glsl{@}vec2 frag_coord(vec4 glPos) {
    return ((glPos.xyz / glPos.w) * 0.5 + 0.5).xy;
}

vec2 getProjection(vec3 pos, mat4 projMatrix) {
    vec4 mvpPos = projMatrix * vec4(pos, 1.0);
    return frag_coord(mvpPos);
}

void applyNormal(inout vec3 pos, mat4 projNormalMatrix) {
    vec3 transformed = vec3(projNormalMatrix * vec4(pos, 0.0));
    pos = transformed;
}{@}lodblur.fs{@}float lodweight(float t, float log2radius, float gamma) {
	return exp(-gamma*pow(log2radius-t,2.));
}


vec4 lodBlur(sampler2D tMap, vec2 uv, float radius, float gamma) {
	vec4 pix = vec4(0.);
	float norm = 0.;
	//weighted integration over mipmap levels
	for(float i = 0.; i < 10.; i += 0.5)
	{
		float k = lodweight(i, log2(radius), gamma);
		pix += k*textureLod(tMap, uv, i);
		norm += k;
	}
	//nomalize, and a bit of brigtness hacking
	return pix*pow(norm,-0.99);
}
{@}luma.fs{@}float luma(vec3 color) {
  return dot(color, vec3(0.299, 0.587, 0.114));
}

float luma(vec4 color) {
  return dot(color.rgb, vec3(0.299, 0.587, 0.114));
}{@}normalmap.glsl{@}vec3 unpackNormal( vec3 eye_pos, vec3 surf_norm, sampler2D normal_map, float intensity, float scale, vec2 uv ) {
    surf_norm = normalize(surf_norm);
    
    vec3 q0 = dFdx( eye_pos.xyz );
    vec3 q1 = dFdy( eye_pos.xyz );
    vec2 st0 = dFdx( uv.st );
    vec2 st1 = dFdy( uv.st );
    
    vec3 S = normalize( q0 * st1.t - q1 * st0.t );
    vec3 T = normalize( -q0 * st1.s + q1 * st0.s );
    vec3 N = normalize( surf_norm );
    
    vec3 mapN = texture2D( normal_map, uv * scale ).xyz * 2.0 - 1.0;
    mapN.xy *= intensity;
    mat3 tsn = mat3( S, T, N );
    return normalize( tsn * mapN );
}

//mvPosition.xyz, normalMatrix * normal, normalMap, intensity, scale, uv{@}PBR.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform float uRenderReticle;


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


void main() {

    vec4 color = getPBR();

    float shadow = 1.0;
    #test Tests.avatarShadow()
        shadow = getShadow(vPos);
    #endtest

    color.rgb *= vec3(crange(shadow, 0.0, 1.0, 0.6, 1.0));
    
    if(uRenderReticle > 0.5) color.rgb += getPathReticle();

    #drawbuffer Color gl_FragColor = color;
    #drawbuffer WorldPos gl_FragColor = vec4(vWorldPos, color.a);
    
}
{@}pbr.fs{@}uniform sampler2D tBaseColor;
uniform sampler2D tMRO;
uniform sampler2D tNormal;
uniform sampler2D tLUT;

uniform sampler2D tEnvDiffuse;
uniform sampler2D tEnvSpecular;

uniform sampler2D tLightmap;
uniform float uUseLightmap;
uniform float uLightmapIntensity;
uniform float uUseLinearOutput;

uniform vec3 uTint;
uniform vec2 uTiling;
uniform vec2 uOffset;
uniform vec4 uMRON;
uniform vec2 uEnv;

uniform float uHDR;

varying vec2 vUv;
varying vec2 vUv2;
varying vec2 vUv3;
varying vec2 vUv0;
varying vec3 vV;
varying vec3 vWorldNormal;

vec3 unpackNormalPBR( vec3 eye_pos, vec3 surf_norm, sampler2D normal_map, float intensity, float scale, vec2 uv ) {
    surf_norm = normalize(surf_norm);

    vec3 q0 = dFdx( eye_pos.xyz );
    vec3 q1 = dFdy( eye_pos.xyz );
    vec2 st0 = dFdx( uv.st );
    vec2 st1 = dFdy( uv.st );

    vec3 S = normalize( q0 * st1.t - q1 * st0.t );
    vec3 T = normalize( -q0 * st1.s + q1 * st0.s );
    vec3 N = normalize( surf_norm );

    vec3 mapN = texture2D( normal_map, uv * scale ).xyz * 2.0 - 1.0;
    mapN.xy *= intensity;
    mat3 tsn = mat3( S, T, N );
    return normalize( tsn * mapN );
}

const vec2 INV_ATAN = vec2(0.1591, 0.3183);
const float LN2 = 0.6931472;
const float ENV_LODS = 7.0;

struct PBRConfig {
    float reflection;
    float clearcoat;
    vec3 color;
    vec3 lightColor;
    vec3 envReflection;
    bool overrideMRO;
    vec3 mro;
};

vec3 fresnelSphericalGaussianRoughness(float cosTheta, vec3 F0, float roughness) {
    return F0 + (max(vec3(1.0 - roughness), F0) - F0) * pow(2.0, (-5.55473 * cosTheta - 6.98316) * cosTheta);
}

vec2 sampleSphericalMap(vec3 v)
{
    vec2 uv = vec2(atan(v.z, v.x), asin(v.y));
    uv *= INV_ATAN;
    uv += 0.5;

    // match default C4D baked HDRI
    uv.x = fract(uv.x + 0.25);

    return uv;
}

vec4 SRGBtoLinear(vec4 srgb) {
    vec3 linOut = pow(srgb.xyz, vec3(2.2));
    return vec4(linOut, srgb.w);
}

vec3 linearToSRGB(vec3 color) {
    return pow(color, vec3(0.4545454545454545));
}

vec4 linearToSRGB(vec4 color) {
    return vec4(pow(color.rgb, vec3(0.4545454545454545)), 1.0);
}

vec4 RGBMToLinear(vec4 value) {
    float maxRange = 6.0;
    return vec4(value.xyz * value.w * maxRange, 1.0);
}

vec4 autoToLinear(vec4 texel, float uHDR) {
    vec4 color = RGBMToLinear(texel);
    if (uHDR < 0.001) { color = SRGBtoLinear(texel); }
    return color;
}

vec3 uncharted2Tonemap(vec3 x) {
    float A = 0.15;
    float B = 0.50;
    float C = 0.10;
    float D = 0.20;
    float E = 0.02;
    float F = 0.30;
    return ((x * (A * x + C * B) + D * E) / (x * (A * x + B) + D * F)) - E / F;
}

vec3 uncharted2(vec3 color) {
    const float W = 11.2;
    float exposureBias = 2.0;
    vec3 curr = uncharted2Tonemap(exposureBias * color);
    vec3 whiteScale = 1.0 / uncharted2Tonemap(vec3(W));
    return curr * whiteScale;
}

vec4 getIBLContribution(float NdV, vec4 baseColor, vec4 MRO, vec3 R, vec3 V, vec3 N, sampler2D tLUT, sampler2D tEnvDiffuse, sampler2D tEnvSpecular, PBRConfig config) {
    float metallic = clamp(MRO.x + uMRON.x - 1.0, 0.0, 1.0);
    float roughness = clamp(MRO.y + uMRON.y - 1.0, 0.0, 1.0);
    float ao = mix(1.0, MRO.z, uMRON.z);

    if (config.overrideMRO) {
        metallic = config.mro.x;
        roughness = config.mro.y;
        ao *= config.mro.z;
    }

    vec2 lutUV = vec2(NdV, roughness);
    vec2 diffuseUV = sampleSphericalMap(N);

    vec3 brdf = SRGBtoLinear(texture2D(tLUT, lutUV)).rgb;
    vec3 diffuse = autoToLinear( texture2D(tEnvDiffuse, diffuseUV ), uHDR).rgb;

    vec3 lightmap = vec3(1.0);

    if (uUseLightmap > 0.0) {
        lightmap = texture2D(tLightmap, vUv0).rgb;
        lightmap.rgb = pow(lightmap.rgb, vec3(uUseLightmap));
        diffuse.rgb *= lightmap.rgb;
    }

    diffuse *= baseColor.rgb;

    float level = floor(roughness * ENV_LODS);
    vec2 specUV = sampleSphericalMap(R);

    specUV.y /= 2.0;
    specUV /= pow(2.0, level);
    specUV.y += 1.0 - exp(-LN2 * level);

    vec3 specular = autoToLinear(texture2D(tEnvSpecular, specUV), uHDR).rgb;

    // fake stronger specular highlight
    specular += pow(specular, vec3(2.2)) * uEnv.y;

    if (uUseLightmap > 0.0) {
        specular *= lightmap;
    }

    vec3 F0 = vec3(0.04);
    F0 = mix(F0, baseColor.rgb, metallic);

    vec3 F = fresnelSphericalGaussianRoughness(NdV, F0, roughness);

    vec3 diffuseContrib = 1.0 - F;
    specular = specular.rgb * (F * brdf.x + brdf.y);

    diffuseContrib *= 1.0 - metallic;

    float alpha = baseColor.a;

    return vec4((diffuseContrib * diffuse + specular + (config.envReflection*0.01)) * ao * uEnv.x, alpha);
}

vec3 getNormal() {
    vec3 N = vWorldNormal;
    vec3 V = normalize(vV);
    return unpackNormalPBR(V, N, tNormal, uMRON.w, 1.0, vUv).xyz;
}

vec4 getPBR(vec3 baseColor, PBRConfig config) {
    vec3 N = vWorldNormal;
    vec3 V = normalize(vV);
    vec3 worldNormal = getNormal();
    vec3 R = reflect(V, worldNormal);
    float NdV = abs(dot(worldNormal, V));
    vec4 baseColor4 = SRGBtoLinear(vec4(baseColor, 1.0));

    vec4 MRO = texture2D(tMRO, vUv3);
    vec4 color = getIBLContribution(NdV, baseColor4, MRO, R, V, worldNormal, tLUT, tEnvDiffuse, tEnvSpecular, config);

    if (uUseLinearOutput < 0.5) {
        color.rgb = uncharted2(color.rgb);
        color = linearToSRGB(color);
    }

    return color;
}

vec4 getPBR(vec3 baseColor) {
    PBRConfig config;
    return getPBR(baseColor, config);
}

vec4 getPBR() {
    vec3 baseColor = texture2D(tBaseColor, vUv3).rgb;
    baseColor *= uTint;
    return getPBR(baseColor);
}
{@}pbr.vs{@}attribute vec2 uv2;

uniform sampler2D tBaseColor;
uniform vec2 uTiling;
uniform vec2 uOffset;
uniform vec2 uTiling2;
uniform vec2 uOffset2;

varying vec2 vUv;
varying vec2 vUv0;
varying vec2 vUv3;
varying vec2 vUv2;
varying vec3 vNormal;
varying vec3 vWorldNormal;
varying vec3 vV;

void setupPBR(vec3 p0) { //inlinemain
    vUv = uv * uTiling + uOffset;
    vUv3 = uv * uTiling2 + uOffset2;
    vUv2 = uv2;
    vUv0 = uv;
    vec4 worldPos = modelMatrix * vec4(p0, 1.0);
    vV = worldPos.xyz - cameraPosition;
    vNormal = normalMatrix * normal;
    vWorldNormal = mat3(modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz) * normal;
}

void setupPBR(vec3 p0, vec3 n) {
    vUv = uv * uTiling + uOffset;
    vUv3 = uv * uTiling2 + uOffset2;
    vUv2 = uv2;
    vUv0 = uv;
    vec4 worldPos = modelMatrix * vec4(p0, 1.0);
    vV = worldPos.xyz - cameraPosition;
    vNormal = normalMatrix * n;
    vWorldNormal = mat3(modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz) * n;
}
{@}radialblur.fs{@}vec3 radialBlur( sampler2D map, vec2 uv, float size, vec2 resolution, float quality ) {
    vec3 color = vec3(0.);

    const float pi2 = 3.141596 * 2.0;
    const float direction = 8.0;

    vec2 radius = size / resolution;
    float test = 1.0;

    for ( float d = 0.0; d < pi2 ; d += pi2 / direction ) {
        vec2 t = radius * vec2( cos(d), sin(d));
        for ( float i = 1.0; i <= 100.0; i += 1.0 ) {
            if (i >= quality) break;
            color += texture2D( map, uv + t * i / quality ).rgb ;
        }
    }

    return color / ( quality * direction);
}

vec3 radialBlur( sampler2D map, vec2 uv, float size, float quality ) {
    vec3 color = vec3(0.);

    const float pi2 = 3.141596 * 2.0;
    const float direction = 8.0;

    vec2 radius = size / vec2(1024.0);
    float test = 1.0;

    for ( float d = 0.0; d < pi2 ; d += pi2 / direction ) {
        vec2 t = radius * vec2( cos(d), sin(d));
        for ( float i = 1.0; i <= 100.0; i += 1.0 ) {
            if (i >= quality) break;
            color += texture2D( map, uv + t * i / quality ).rgb ;
        }
    }

    return color / ( quality * direction);
}
{@}range.glsl{@}

float range(float oldValue, float oldMin, float oldMax, float newMin, float newMax) {
    vec3 sub = vec3(oldValue, newMax, oldMax) - vec3(oldMin, newMin, oldMin);
    return sub.x * sub.y / sub.z + newMin;
}

vec2 range(vec2 oldValue, vec2 oldMin, vec2 oldMax, vec2 newMin, vec2 newMax) {
    vec2 oldRange = oldMax - oldMin;
    vec2 newRange = newMax - newMin;
    vec2 val = oldValue - oldMin;
    return val * newRange / oldRange + newMin;
}

vec3 range(vec3 oldValue, vec3 oldMin, vec3 oldMax, vec3 newMin, vec3 newMax) {
    vec3 oldRange = oldMax - oldMin;
    vec3 newRange = newMax - newMin;
    vec3 val = oldValue - oldMin;
    return val * newRange / oldRange + newMin;
}

float crange(float oldValue, float oldMin, float oldMax, float newMin, float newMax) {
    return clamp(range(oldValue, oldMin, oldMax, newMin, newMax), min(newMin, newMax), max(newMin, newMax));
}

vec2 crange(vec2 oldValue, vec2 oldMin, vec2 oldMax, vec2 newMin, vec2 newMax) {
    return clamp(range(oldValue, oldMin, oldMax, newMin, newMax), min(newMin, newMax), max(newMin, newMax));
}

vec3 crange(vec3 oldValue, vec3 oldMin, vec3 oldMax, vec3 newMin, vec3 newMax) {
    return clamp(range(oldValue, oldMin, oldMax, newMin, newMax), min(newMin, newMax), max(newMin, newMax));
}

float rangeTransition(float t, float x, float padding) {
    float transition = crange(t, 0.0, 1.0, -padding, 1.0 + padding);
    return crange(x, transition - padding, transition + padding, 1.0, 0.0);
}
{@}refl.fs{@}vec3 reflection(vec3 worldPosition, vec3 normal) {
    vec3 cameraToVertex = normalize(worldPosition - cameraPosition);
    
    return reflect(cameraToVertex, normal);
}

vec3 refraction(vec3 worldPosition, vec3 normal, float rRatio) {
    vec3 cameraToVertex = normalize(worldPosition - cameraPosition);
    
    return refract(cameraToVertex, normal, rRatio);
}

vec4 envColor(samplerCube map, vec3 vec) {
    float flipNormal = 1.0;
    return textureCube(map, flipNormal * vec3(-1.0 * vec.x, vec.yz));
}

vec4 envColorEqui(sampler2D map, vec3 direction) {
    vec2 uv;
    uv.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * 0.31830988618 + 0.5;
    uv.x = atan( direction.z, direction.x ) * 0.15915494 + 0.5;
    return texture2D(map, uv);
}{@}refl.vs{@}vec3 inverseTransformDirection(in vec3 normal, in mat4 matrix) {
    return normalize((matrix * vec4(normal, 0.0) * matrix).xyz);
}

vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
    return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}

vec3 reflection(vec4 worldPosition) {
    vec3 transformedNormal = normalMatrix * normal;
    vec3 cameraToVertex = normalize(worldPosition.xyz - cameraPosition);
    vec3 worldNormal = inverseTransformDirection(transformedNormal, viewMatrix);
    
    return reflect(cameraToVertex, worldNormal);
}

vec3 refraction(vec4 worldPosition, float refractionRatio) {
    vec3 transformedNormal = normalMatrix * normal;
    vec3 cameraToVertex = normalize(worldPosition.xyz - cameraPosition);
    vec3 worldNormal = inverseTransformDirection(transformedNormal, viewMatrix);
    
    return refract(cameraToVertex, worldNormal, refractionRatio);
}{@}rgb2hsv.fs{@}vec3 rgb2hsv(vec3 c) {
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
    
    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}

vec3 hsv2rgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}{@}rgbshift.fs{@}vec4 getRGB(sampler2D tDiffuse, vec2 uv, float angle, float amount) {
    vec2 offset = vec2(cos(angle), sin(angle)) * amount;
    vec4 r = texture2D(tDiffuse, uv + offset);
    vec4 g = texture2D(tDiffuse, uv);
    vec4 b = texture2D(tDiffuse, uv - offset);
    return vec4(r.r, g.g, b.b, g.a);
}{@}rotation.glsl{@}mat4 rotationMatrix(vec3 axis, float angle) {
    axis = normalize(axis);
    float s = sin(angle);
    float c = cos(angle);
    float oc = 1.0 - c;

    return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
                oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
                oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
                0.0,                                0.0,                                0.0,                                1.0);
}


mat2 rotationMatrix(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat2(c, -s, s, c);
}{@}roundedBorder.glsl{@}float roundedBorder(float thickness, float radius, vec2 uv, vec2 resolution, out float inside) {
    // Get square-pixel coordinates in range -1.0 .. 1.0
    float multiplier = max(resolution.x, resolution.y);
    vec2 ratio = resolution / multiplier;
    vec2 squareUv = (2.0 * uv - 1.0) * ratio; // -1.0 .. 1.0

    float squareThickness = (thickness / multiplier);
    float squareRadius = 2.0 * (radius / multiplier);
    vec2 size = ratio - vec2(squareRadius + squareThickness);


    vec2 q = abs(squareUv) - size;
    float d = min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - squareRadius;
    float dist = abs(d);
    float delta = fwidth(dist);
    float border = 1.0 - smoothstep(-delta, delta, dist - squareThickness);

    delta = fwidth(d);
    float limit = squareThickness * 0.5;
    inside = 1.0 - smoothstep(-delta, delta, d - limit);

    return border;
}

float roundedBorder(float thickness, float radius, vec2 uv, vec2 resolution) {
    float inside;
    return roundedBorder(thickness, radius, uv, resolution, inside);
}
{@}simplenoise.glsl{@}float getNoise(vec2 uv, float time) {
    float x = uv.x * uv.y * time * 1000.0;
    x = mod(x, 13.0) * mod(x, 123.0);
    float dx = mod(x, 0.01);
    float amount = clamp(0.1 + dx * 100.0, 0.0, 1.0);
    return amount;
}

#test Device.mobile
float sinf(float x) {
    x*=0.159155;
    x-=floor(x);
    float xx=x*x;
    float y=-6.87897;
    y=y*xx+33.7755;
    y=y*xx-72.5257;
    y=y*xx+80.5874;
    y=y*xx-41.2408;
    y=y*xx+6.28077;
    return x*y;
}
#endtest

#test !Device.mobile
    #define sinf sin
#endtest

highp float getRandom(vec2 co) {
    highp float a = 12.9898;
    highp float b = 78.233;
    highp float c = 43758.5453;
    highp float dt = dot(co.xy, vec2(a, b));
    highp float sn = mod(dt, 3.14);
    return fract(sin(sn) * c);
}

float cnoise(vec3 v) {
    float t = v.z * 0.3;
    v.y *= 0.8;
    float noise = 0.0;
    float s = 0.5;
    noise += (sinf(v.x * 0.9 / s + t * 10.0) + sinf(v.x * 2.4 / s + t * 15.0) + sinf(v.x * -3.5 / s + t * 4.0) + sinf(v.x * -2.5 / s + t * 7.1)) * 0.3;
    noise += (sinf(v.y * -0.3 / s + t * 18.0) + sinf(v.y * 1.6 / s + t * 18.0) + sinf(v.y * 2.6 / s + t * 8.0) + sinf(v.y * -2.6 / s + t * 4.5)) * 0.3;
    return noise;
}

float cnoise(vec2 v) {
    float t = v.x * 0.3;
    v.y *= 0.8;
    float noise = 0.0;
    float s = 0.5;
    noise += (sinf(v.x * 0.9 / s + t * 10.0) + sinf(v.x * 2.4 / s + t * 15.0) + sinf(v.x * -3.5 / s + t * 4.0) + sinf(v.x * -2.5 / s + t * 7.1)) * 0.3;
    noise += (sinf(v.y * -0.3 / s + t * 18.0) + sinf(v.y * 1.6 / s + t * 18.0) + sinf(v.y * 2.6 / s + t * 8.0) + sinf(v.y * -2.6 / s + t * 4.5)) * 0.3;
    return noise;
}{@}skinning.glsl{@}attribute vec4 skinIndex;
attribute vec4 skinWeight;

uniform sampler2D boneTexture;
uniform float boneTextureSize;

mat4 getBoneMatrix(const in float i) {
    float j = i * 4.0;
    float x = mod(j, boneTextureSize);
    float y = floor(j / boneTextureSize);

    float dx = 1.0 / boneTextureSize;
    float dy = 1.0 / boneTextureSize;

    y = dy * (y + 0.5);

    vec4 v1 = texture2D(boneTexture, vec2(dx * (x + 0.5), y));
    vec4 v2 = texture2D(boneTexture, vec2(dx * (x + 1.5), y));
    vec4 v3 = texture2D(boneTexture, vec2(dx * (x + 2.5), y));
    vec4 v4 = texture2D(boneTexture, vec2(dx * (x + 3.5), y));

    return mat4(v1, v2, v3, v4);
}

void applySkin(inout vec3 pos, inout vec3 normal) {
    mat4 boneMatX = getBoneMatrix(skinIndex.x);
    mat4 boneMatY = getBoneMatrix(skinIndex.y);
    mat4 boneMatZ = getBoneMatrix(skinIndex.z);
    mat4 boneMatW = getBoneMatrix(skinIndex.w);

    mat4 skinMatrix = mat4(0.0);
    skinMatrix += skinWeight.x * boneMatX;
    skinMatrix += skinWeight.y * boneMatY;
    skinMatrix += skinWeight.z * boneMatZ;
    skinMatrix += skinWeight.w * boneMatW;
    normal = vec4(skinMatrix * vec4(normal, 0.0)).xyz;

    vec4 bindPos = vec4(pos, 1.0);
    vec4 transformed = vec4(0.0);
    
    transformed += boneMatX * bindPos * skinWeight.x;
    transformed += boneMatY * bindPos * skinWeight.y;
    transformed += boneMatZ * bindPos * skinWeight.z;
    transformed += boneMatW * bindPos * skinWeight.w;

    pos = transformed.xyz;
}

void applySkin(inout vec3 pos) {
    vec3 normal = vec3(0.0, 1.0, 0.0);
    applySkin(pos, normal);
}{@}transformUV.glsl{@}vec2 translateUV(vec2 uv, vec2 translate) {
    return uv - translate;
}

vec2 rotateUV(vec2 uv, float r, vec2 origin) {
    float c = cos(r);
    float s = sin(r);
    mat2 m = mat2(c, -s,
                  s, c);
    vec2 st = uv - origin;
    st = m * st;
    return st + origin;
}

vec2 scaleUV(vec2 uv, vec2 scale, vec2 origin) {
    vec2 st = uv - origin;
    st /= scale;
    return st + origin;
}

vec2 rotateUV(vec2 uv, float r) {
    return rotateUV(uv, r, vec2(0.5));
}

vec2 scaleUV(vec2 uv, vec2 scale) {
    return scaleUV(uv, scale, vec2(0.5));
}

vec2 skewUV(vec2 st, vec2 skew) {
    return st + st.gr * skew;
}

vec2 transformUV(vec2 uv, float a[9]) {

    // Array consists of the following
    // 0 translate.x
    // 1 translate.y
    // 2 skew.x
    // 3 skew.y
    // 4 rotate
    // 5 scale.x
    // 6 scale.y
    // 7 origin.x
    // 8 origin.y

    vec2 st = uv;

    //Translate
    st -= vec2(a[0], a[1]);

    //Skew
    st = st + st.gr * vec2(a[2], a[3]);

    //Rotate
    st = rotateUV(st, a[4], vec2(a[7], a[8]));

    //Scale
    st = scaleUV(st, vec2(a[5], a[6]), vec2(a[7], a[8]));

    return st;
}{@}module.json{@}{
  "gl": ["transformUV"]
}{@}uvgrid.glsl{@}#require(transformUV.glsl)

vec2 getUVForGrid(vec2 uv, float xr, float yr, float x, float y) {
    return translateUV(scaleUV(uv, vec2(xr, yr), vec2(0.0)), -vec2(x / xr, y / yr));
}
{@}VRInputControllerBeam.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 uColor;

#!VARYINGS
varying vec2 vUv;

#!SHADER: VRInputControllerBeam.vs
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: VRInputControllerBeam.fs

#require(range.glsl)

void main() {
    vec4 vColor = vec4( uColor, length( vUv.y ));
    gl_FragColor = vColor;
}{@}VRInputControllerBody.glsl{@}#!ATTRIBUTES

#!UNIFORMS

#!VARYINGS

#!SHADER: VRInputControllerBody.vs
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: VRInputControllerBody.fs
void main() {
    gl_FragColor = vec4(1.0);
}{@}VRInputControllerPoint.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 uColor;
uniform vec3 uBorderColor;
uniform float uAlpha;

#!VARYINGS
varying vec2 vUv;

#!SHADER: VRInputControllerPoint.vs
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vUv = uv;
}

#!SHADER: VRInputControllerPoint.fs

const float borderWidth = 0.08;

void main() {
    vec2 uv = vUv * (2. + borderWidth * 4.) - (1. + borderWidth * 2.); // -1.0 ... 1.0
    float r = length(uv);

    // border
    float dist = abs(r-(1. - borderWidth));
    float delta = fwidth(dist);
    float alpha = 1.0 - smoothstep(-delta, delta, dist - borderWidth);
    vec4 border = vec4(uBorderColor, alpha);

    // fill
    dist = r-(1. - borderWidth);
    delta = fwidth(dist);
    float limit = borderWidth * 0.5;
    alpha = 1.0 - smoothstep(-delta, delta, dist - limit);
    vec4 fill = vec4(uColor, alpha);

    alpha = border.a + fill.a * (1. - border.a);

    gl_FragColor = vec4((border.rgb * border.a + fill.rgb * fill.a * (1. - border.a)) / alpha, uAlpha * alpha);
}{@}ControllerShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform vec3 uColor;
uniform vec2 uGradient;
uniform float uAlphaCutoff;

#!VARYINGS
varying vec2 vUv;
varying float vFade;

#!SHADER: Vertex

void main() {
    vec3 pos = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    vUv = uv;
}

#!SHADER: Fragment
#require(range.glsl)

void main() {
    vec3 color = uColor;
    float gradient = vUv.y;

    float alpha = crange(gradient, 0.0, 1.0, uGradient.x, uGradient.y);

    if (alpha < uAlphaCutoff) discard;

    gl_FragColor = vec4(color, alpha);
}{@}AntimatterSpawn.fs{@}uniform float uMaxCount;
uniform float uSetup;
uniform float decay;
uniform vec2 decayRandom;
uniform sampler2D tLife;
uniform sampler2D tAttribs;
uniform float HZ;

#require(range.glsl)

void main() {
    vec2 uv = vUv;
    #test !window.Metal
    uv = gl_FragCoord.xy / fSize;
    #endtest

    vec4 data = texture2D(tInput, uv);

    if (vUv.x + vUv.y * fSize > uMaxCount) {
        gl_FragColor = vec4(9999.0);
        return;
    }

    vec4 life = texture2D(tLife, uv);
    vec4 random = texture2D(tAttribs, uv);
    if (life.x > 0.5) {
        data.xyz = life.yzw;
        data.x -= 999.0;
    } else {
        if (data.x < -500.0) {
            data.x = 1.0;
        } else {
            data.x -= 0.005 * decay * crange(random.w, 0.0, 1.0, decayRandom.x, decayRandom.y) * HZ;
        }
    }

    if (uSetup > 0.5) {
        data = vec4(0.0);
    }

    gl_FragColor = data;
}{@}fbr.fs{@}uniform sampler2D tMRO;
uniform sampler2D tMatcap;
uniform sampler2D tNormal;
uniform vec4 uLight;
uniform vec3 uColor;
uniform float uNormalStrength;

varying vec3 vNormal;
varying vec3 vPos;
varying vec3 vEyePos;
varying vec2 vUv;
varying vec3 vMPos;

const float PI = 3.14159265359;
const float PI2 = 6.28318530718;
const float RECIPROCAL_PI = 0.31830988618;
const float RECIPROCAL_PI2 = 0.15915494;
const float LOG2 = 1.442695;
const float EPSILON = 1e-6;
const float LN2 = 0.6931472;

vec2 reflectMatcapFBR(vec3 position, mat4 modelViewMatrix, vec3 normal) {
    vec4 p = vec4(position, 1.0);

    vec3 e = normalize(vec3(modelViewMatrix * p));
    vec3 n = normalize(normal);
    vec3 r = reflect(e, n);
    float m = 2.0 * sqrt(
    pow(r.x, 2.0) +
    pow(r.y, 2.0) +
    pow(r.z + 1.0, 2.0)
    );

    vec2 uv = r.xy / m + .5;

    return uv;
}

float prange(float oldValue, float oldMin, float oldMax, float newMin, float newMax) {
    float oldRange = oldMax - oldMin;
    float newRange = newMax - newMin;
    return (((oldValue - oldMin) * newRange) / oldRange) + newMin;
}

float pcrange(float oldValue, float oldMin, float oldMax, float newMin, float newMax) {
    return clamp(prange(oldValue, oldMin, oldMax, newMin, newMax), min(newMax, newMin), max(newMin, newMax));
}

vec3 unpackNormalFBR( vec3 eye_pos, vec3 surf_norm, sampler2D normal_map, float intensity, float scale, vec2 uv ) {
    surf_norm = normalize(surf_norm);

    vec3 q0 = dFdx( eye_pos.xyz );
    vec3 q1 = dFdy( eye_pos.xyz );
    vec2 st0 = dFdx( uv.st );
    vec2 st1 = dFdy( uv.st );

    vec3 S = normalize( q0 * st1.t - q1 * st0.t );
    vec3 T = normalize( -q0 * st1.s + q1 * st0.s );
    vec3 N = normalize( surf_norm );

    vec3 mapN = texture2D( normal_map, uv * scale ).xyz * 2.0 - 1.0;
    mapN.xy *= intensity;
    mat3 tsn = mat3( S, T, N );
    return normalize( tsn * mapN );
}

float geometricOcclusion(float NdL, float NdV, float roughness) {
    float r = roughness;
    float attenuationL = 2.0 * NdL / (NdL + sqrt(r * r + (1.0 - r * r) * (NdL * NdL)));
    float attenuationV = 2.0 * NdV / (NdV + sqrt(r * r + (1.0 - r * r) * (NdV * NdV)));
    return attenuationL * attenuationV;
}

float microfacetDistribution(float roughness, float NdH) {
    float roughnessSq = roughness * roughness;
    float f = (NdH * roughnessSq - NdH) * NdH + 1.0;
    return roughnessSq / (PI * f * f);
}

vec3 getFBR(vec3 baseColor, vec2 uv, vec2 normalUV) {
    vec3 mro = texture2D(tMRO, uv).rgb;
    float roughness = mro.g;

    vec3 normal = unpackNormalFBR(vEyePos, vNormal, tNormal, uNormalStrength, 1.0, normalUV);
    vec2 aUV = reflectMatcapFBR(vPos, projectionMatrix, normal);
    vec2 bUV = reflectMatcapFBR(vPos, modelMatrix, normal);
    vec2 mUV = mix(aUV, bUV, roughness);

    vec3 V = normalize(cameraPosition - vMPos);
    vec3 L = normalize(uLight.xyz);
    vec3 H = normalize(L + V);
    vec3 reflection = -normalize(reflect(V, normal));

    float NdL = pcrange(clamp(dot(normal, L), 0.001, 1.0), 0.0, 1.0, 0.4, 1.0);
    float NdV = pcrange(clamp(abs(dot(normal, V)), 0.001, 1.0), 0.0, 1.0, 0.4, 1.0);
    float NdH = clamp(dot(normal, H), 0.0, 1.0);
    float VdH = clamp(dot(V, H), 0.0, 1.0);

    float G = geometricOcclusion(NdL, NdV, roughness);
    float D = microfacetDistribution(roughness, NdH);

    vec3 specContrib = G * D / (4.0 * NdL * NdV) * uColor;
    vec3 color = NdL * specContrib * uLight.w;

    return ((baseColor * texture2D(tMatcap, mUV).rgb) + color) * mro.b;
}

vec3 getFBR(vec3 baseColor, vec2 uv) {
    return getFBR(baseColor, uv, uv);
}

vec3 getFBR(vec3 baseColor) {
    return getFBR(baseColor, vUv, vUv);
}

vec3 getFBR() {
    float roughness = texture2D(tMRO, vUv).g;

    vec3 normal = unpackNormalFBR(vEyePos, vNormal, tNormal, 1.0, 1.0, vUv);
    vec2 aUV = reflectMatcapFBR(vPos, projectionMatrix, normal);
    vec2 bUV = reflectMatcapFBR(vPos, modelMatrix, normal);
    vec2 mUV = mix(aUV, bUV, roughness);

    return texture2D(tMatcap, mUV).rgb;
}

vec3 getFBRSimplified() {
    vec2 mUV = reflectMatcapFBR(vPos, modelViewMatrix, vNormal);
    return texture2D(tMatcap, mUV).rgb;
}
{@}fbr.vs{@}varying vec3 vNormal;
varying vec3 vPos;
varying vec3 vEyePos;
varying vec2 vUv;
varying vec3 vMPos;

void setupFBR(vec3 p0) { //inlinemain
    vNormal = normalMatrix * normal;
    vUv = uv;
    vPos = p0;
    vec4 mPos = modelMatrix * vec4(p0, 1.0);
    vMPos = mPos.xyz / mPos.w;
    vEyePos = vec3(modelViewMatrix * vec4(p0, 1.0));
}{@}ProtonAntimatter.fs{@}uniform sampler2D tOrigin;
uniform sampler2D tAttribs;
uniform float uMaxCount;
//uniforms

#require(range.glsl)
//requires

void main() {
    vec2 uv = vUv;
    #test !window.Metal
    uv = gl_FragCoord.xy / fSize;
    #endtest

    vec3 origin = texture2D(tOrigin, uv).xyz;
    vec4 inputData = texture2D(tInput, uv);
    vec3 pos = inputData.xyz;
    vec4 random = texture2D(tAttribs, uv);
    float data = inputData.w;

    if (vUv.x + vUv.y * fSize > uMaxCount) {
        gl_FragColor = vec4(9999.0);
        return;
    }

    //code

    gl_FragColor = vec4(pos, data);
}{@}ProtonAntimatterLifecycle.fs{@}uniform sampler2D tOrigin;
uniform sampler2D tAttribs;
uniform sampler2D tSpawn;
uniform float uMaxCount;
//uniforms

#require(range.glsl)
//requires

void main() {
    vec3 origin = texture2D(tOrigin, vUv).rgb;
    vec4 inputData = texture2D(tInput, vUv);
    vec3 pos = inputData.xyz;
    vec4 random = texture2D(tAttribs, vUv);
    float data = inputData.w;

    if (vUv.x + vUv.y * fSize > uMaxCount) {
        gl_FragColor = vec4(9999.0);
        return;
    }

    vec4 spawn = texture2D(tSpawn, vUv);
    float life = spawn.x;

    if (spawn.x < -500.0) {
        pos = spawn.xyz;
        pos.x += 999.0;
        spawn.x = 1.0;
        gl_FragColor = vec4(pos, data);
        return;
    }

    //abovespawn
    if (spawn.x <= 0.0) {
        pos.x = 9999.0;
        gl_FragColor = vec4(pos, data);
        return;
    }

    //abovecode
    //code

    gl_FragColor = vec4(pos, data);
}{@}ProtonNeutrino.fs{@}//uniforms

#require(range.glsl)
//requires

void main() {
    //code
}{@}ProtonTube.glsl{@}#!ATTRIBUTES
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

void main() {
    float headIndex = getIndex(cNumber, 0.0, lineSegments);
    vec2 iuv = getUVFromIndex(headIndex, textureSize);
    vUv2 = iuv;
    float life = texture2D(tLife, iuv).x;
    vLife = life;

    float scale = 1.0;
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
void main() {
    gl_FragColor = vec4(1.0);
}{@}ProtonTubesMain.fs{@}void main() {
    vec3 index = getData(tIndices, vUv);

    float CHAIN = index.x;
    float LINE = index.y;
    float HEAD = index.z;

    if (HEAD > 0.9) {

        //main

    } else {

        float followIndex = getIndex(LINE, CHAIN-1.0, lineSegments);
        float headIndex = getIndex(LINE, 0.0, lineSegments);
        vec3 followPos = texture2D(tInput, getUVFromIndex(followIndex, textureSize)).xyz;
        vec4 followSpawn = texture2D(tSpawn, getUVFromIndex(headIndex, textureSize));

        if (followSpawn.x <= 0.0) {
            pos.x = 9999.0;
            gl_FragColor = vec4(pos, data);
            return;
        }

        if (length(followPos - pos) > uResetDelta) {
            followPos = texture2D(tInput, getUVFromIndex(headIndex, textureSize)).xyz;
            pos = followPos;
        }

        pos += (followPos - pos) * (uLerp * timeScale * HZ);
    }
}{@}ProtonTubesUniforms.fs{@}uniform sampler2D tIndices;
uniform float textureSize;
uniform float lineSegments;
uniform float uLerp;
uniform float uResetDelta;

vec2 getUVFromIndex(float index, float textureSize) {
    float size = textureSize;
    vec2 ruv = vec2(0.0);
    float p0 = index / size;
    float y = floor(p0);
    float x = p0 - y;
    ruv.x = x;
    ruv.y = y / size;
    return ruv;
}

float getIndex(float line, float chain, float lineSegments) {
    return (line * lineSegments) + chain;
}{@}ScreenBokehDof.fs{@}
uniform float uDofAmount;
uniform float uDofPower;
uniform float uInvert;
uniform float uParabola;
uniform float uAspectRatio;
uniform vec2 uScale;
uniform vec2 uTranslate;
uniform float uRotate;
uniform float uPower;
uniform float uRadial;
uniform vec2 uPxSize;
uniform float uDebug;
uniform float uResScale;

uniform sampler2D tDiffuse;
varying vec2 vUv;

#require(transformUV.glsl)

const float GOLDEN_ANGLE = 2.39996323;
const int DOF_ITERATIONS = 15;
const float fIterations = float(DOF_ITERATIONS);
const float sqrtiter = sqrt(fIterations);

vec3 Dof(sampler2D tex, vec2 uv, float radius) {
    float spacing = sqrt(3.141592652 / fIterations) * radius;
    float level = log2(spacing);

    vec3 acc = vec3(0.0);

    for (int j = 0; j < DOF_ITERATIONS; j++) {
        float theta = GOLDEN_ANGLE * float(j);
        float r = sqrt(float(j)) / sqrtiter;
        vec2 p = r * vec2(cos(theta), sin(theta));
        vec3 col = texture2D(tex, uv + radius * p * uPxSize, level).rgb;
        acc += col;
    }
    return acc / fIterations;
}

void main() {
    float amount = 0.0;

    vec2 uv = vUv - 0.5;
    uv.x *= mix(1.0, resolution.x / resolution.y, clamp(uAspectRatio, 0.0, 1.0));
    uv += 0.5;

    uv = scaleUV(uv, uScale);
    uv = rotateUV(uv, uRotate / 57.295779513);
    uv = translateUV(uv, uTranslate);

    float linear = max(0.0, uv.y);
    float radial = max(0.0, length(uv - 0.5));

    amount = mix(linear, radial, uRadial);
    amount = mix(amount, smoothstep(0.2, 0.5, amount) * smoothstep(0.8, 0.5, amount), uParabola);
    amount = clamp(pow(amount, uPower), 0.0, 1.0);
    amount = mix(amount, 1.0 - amount, clamp(uInvert, 0.0, 1.0));

    float blur = max(0.0, uDofAmount * uResScale);
    blur = pow(blur, uDofPower);

    gl_FragColor.rgb = mix(Dof(tDiffuse, vUv, amount * blur).rgb, vec3(amount), clamp(uDebug, 0.0, 1.0));
    gl_FragColor.a = 1.0;
}
{@}ssao.glsl{@}uniform highp sampler2D tDepth;
uniform float uNear;
uniform float uFar;
uniform float uAOClamp;
uniform float uAOLumInfluence;
uniform float uAORadius;
uniform float uAOSamples;
uniform float uAODisplace;
uniform float uAODiffArea;
uniform float uAOAdjustment;
uniform float uAOStrength;
uniform float uAOMaxDist;

#define DL 2.399963229728653
#define EULER 2.718281828459045

const bool useNoise = true;
const float noiseAmount = 0.0003;

vec2 rand(const vec2 coord) {
    vec2 noise;
    if (useNoise) {
        float nx = dot(coord, vec2(12.9898, 78.233));
        float ny = dot(coord, vec2(12.9898, 78.233) * 2.0);
        noise = clamp(fract(43758.5453 * sin(vec2(nx, ny))), 0.0, 1.0);
    } else {
        float ff = fract(1.0 - coord.s * (resolution.x / 2.0));
        float gg = fract(coord.t * (resolution.y / 2.0));
        noise = vec2(0.25, 0.75) * vec2(ff) + vec2(0.75, 0.25) * gg;
    }
    return (noise * 2.0 - 1.0) * noiseAmount;
}

float readDepth(const in vec2 uv) {
    float f = uFar;
    float n = uNear;
    vec4 depth = texture2D(tDepth, uv);
    return (2.0 * n) / (f + n - depth.x * (f - n));
}

float compareDepths(const in float depth1,
                    const in float depth2, inout int far) {
    float garea = 2.0;
    float diff = (depth1 - depth2) * 100.0;
    float udisp = uAODisplace * 0.01;
    float udiff = uAODiffArea * 0.01;
    if (diff < udisp) {
        garea = udiff;
    } else {
        far = 1;
    }
    float dd = diff - udisp;
    float gauss = pow(EULER, -2.0 * dd * dd / (garea * garea));
    return gauss;
}

float calcAO(float depth, float dw, float dh) {
    float dd = uAORadius - depth * uAORadius;
    vec2 vv = vec2(dw, dh);
    vec2 coord1 = vUv + dd * vv;
    vec2 coord2 = vUv - dd * vv;
    float temp1 = 0.0;
    float temp2 = 0.0;
    int far = 0;
    temp1 = compareDepths(depth, readDepth(coord1), far);
    if (far > 0) {
        temp2 = compareDepths(readDepth(coord2), depth, far);
        temp1 += (1.0 - temp1) * temp2;
    }
    return temp1;
}

float aorange(float oldValue, float oldMin, float oldMax, float newMin, float newMax) {
    vec3 sub = vec3(oldValue, newMax, oldMax) - vec3(oldMin, newMin, oldMin);
    return sub.x * sub.y / sub.z + newMin;
}

float aocrange(float oldValue, float oldMin, float oldMax, float newMin, float newMax) {
    return clamp(aorange(oldValue, oldMin, oldMax, newMin, newMax), min(newMin, newMax), max(newMin, newMax));
}

float getSSAO(vec2 vUv) {
    vec2 noise = rand(vUv);
    float depth = readDepth(vUv);
    float tt = clamp(depth, uAOClamp, 1.0);
    float w = (1.0 / resolution.x) / tt + (noise.x * (1.0 - noise.x));
    float h = (1.0 / resolution.y) / tt + (noise.y * (1.0 - noise.y));
    float ao = 0.0;
    float dz = 1.0 / uAOSamples;
    float z = 1.0 - dz / 2.0;
    float l = 0.0;
    for (int i = 0; i <= 10; i++) {
        float r = sqrt(1.0 - z);
        float pw = cos(l) * r;
        float ph = sin(l) * r;
        ao += calcAO(depth, pw * w, ph * h);
        z = z - dz;
        l = l + DL;
    }
    ao /= uAOSamples;
    ao = 1.0 - ao;
    vec3 color = texture2D(tDiffuse, vUv).rgb;
    vec3 lumcoeff = vec3(0.299, 0.587, 0.114);
    float lum = dot(color.rgb, lumcoeff);
    vec3 luminance = vec3(lum);
    vec3 final = vec3(mix(vec3(ao), vec3(1.0), luminance * uAOLumInfluence));

    float o = aocrange(final.r, 0.0, uAOAdjustment, 0.0, 1.0);
    o = mix(o, 1.0, step(uAOMaxDist, depth));

    return o = mix(1.0, o, uAOStrength);
}
{@}textureanimation.vs{@}attribute vec2 uv2;

uniform highp sampler2D uAnimationTexture;
uniform float uTextureHeight;
uniform float uAnimationLength[10];
uniform float uOffsets[10];
uniform float uSpeed[10];
uniform float uHzMultiplier;
uniform float speedMultiplier;

vec3 rotate(vec3 v, float angle) {
    float s = sin(angle);
    float c = cos(angle);
    return mat3(c, 0., -s,
                0., 1., 0.,
                s, 0, c) * v;
}

vec3 rotate(vec3 vec, vec4 quat) {
    float angle = atan(quat.w, quat.y) + 3.14159265359;
    vec4 yQuat = vec4(0., sin(angle), 0., cos(angle));
    return vec + 2.0 * cross( cross( vec, yQuat.xyz ) + yQuat.w * vec, yQuat.xyz );
}

vec3 getAnimatedPosition(int animationIndex, float blend) {
    float frames = uAnimationLength[animationIndex];
    float offset = uOffsets[animationIndex];
    float speed = uSpeed[animationIndex];
    float phaseY = fract(speed * time * speedMultiplier * uHzMultiplier) * max(frames - 1., 0.);
    
    vec2 frameOffsetY = vec2(0.0, (offset + floor(phaseY) + 0.5) / uTextureHeight);
    vec3 animationA = texture2D(uAnimationTexture, vec2(uv2.x, 0.) + frameOffsetY).rgb;

    frameOffsetY = vec2(0.0, (offset + ceil(phaseY) + 0.5) / uTextureHeight);
    vec3 animationB = texture2D(uAnimationTexture, vec2(uv2.x, 0.) + frameOffsetY).rgb;

    vec3 animation = mix(animationA, animationB, vec3(fract(phaseY)));

    return mix(position, animation, blend);
}

vec3 getAnimatedPositionRaw(int animationIndex) {
    float frames = uAnimationLength[animationIndex];
    float offset = uOffsets[animationIndex];
    float speed = uSpeed[animationIndex];
    float phaseY = fract(speed * time * speedMultiplier * uHzMultiplier) * max(frames - 1., 0.);
    
    vec2 frameOffsetY = vec2(0.0, (offset + floor(phaseY) + 0.5) / uTextureHeight);
    vec3 animationA = texture2D(uAnimationTexture, vec2(uv2.x, 0.) + frameOffsetY).rgb;

    frameOffsetY = vec2(0.0, (offset + ceil(phaseY) + 0.5) / uTextureHeight);
    vec3 animationB = texture2D(uAnimationTexture, vec2(uv2.x, 0.) + frameOffsetY).rgb;
    vec3 animation = mix(animationA, animationB, vec3(fract(phaseY)));

    return animation;
}
{@}UnrealBloom.fs{@}uniform sampler2D tUnrealBloom;

vec3 getUnrealBloom(vec2 uv) {
    return texture2D(tUnrealBloom, uv).rgb;
}{@}UnrealBloomComposite.glsl{@}#!ATTRIBUTES

#!UNIFORMS

uniform sampler2D blurTexture1;
uniform float bloomStrength;
uniform float bloomRadius;
uniform vec3 bloomTintColor;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex.vs
void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
}

#!SHADER: Fragment.fs

float lerpBloomFactor(const in float factor) {
    float mirrorFactor = 1.2 - factor;
    return mix(factor, mirrorFactor, bloomRadius);
}

void main() {
    gl_FragColor = bloomStrength * (lerpBloomFactor(1.0) * vec4(bloomTintColor, 1.0) * texture2D(blurTexture1, vUv));
}{@}UnrealBloomGaussian.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D colorTexture;
uniform vec2 texSize;
uniform vec2 direction;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex.vs
void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
}

#!SHADER: Fragment.fs

float gaussianPdf(in float x, in float sigma) {
    return 0.39894 * exp(-0.5 * x * x / (sigma * sigma)) / sigma;
}

void main() {
    vec2 invSize = 1.0 / texSize;
    float fSigma = float(SIGMA);
    float weightSum = gaussianPdf(0.0, fSigma);
    vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;
    for(int i = 1; i < KERNEL_RADIUS; i ++) {
        float x = float(i);
        float w = gaussianPdf(x, fSigma);
        vec2 uvOffset = direction * invSize * x;
        vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;
        vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;
        diffuseSum += (sample1 + sample2) * w;
        weightSum += 2.0 * w;
    }
    gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
}{@}UnrealBloomLuminosity.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tDiffuse;
uniform vec3 defaultColor;
uniform float defaultOpacity;
uniform float luminosityThreshold;
uniform float smoothWidth;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex.vs
void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
}

#!SHADER: Fragment.fs

#require(luma.fs)

void main() {
    vec4 texel = texture2D(tDiffuse, vUv);
    float v = luma(texel.xyz);
    vec4 outputColor = vec4(defaultColor.rgb, defaultOpacity);
    float alpha = smoothstep(luminosityThreshold, luminosityThreshold + smoothWidth, v);
    gl_FragColor = mix(outputColor, texel, alpha);
}{@}UnrealBloomPass.fs{@}#require(UnrealBloom.fs)

void main() {
    vec4 color = texture2D(tDiffuse, vUv);
    color.rgb += getUnrealBloom(vUv);
    gl_FragColor = color;
}{@}luma.fs{@}float luma(vec3 color) {
  return dot(color, vec3(0.299, 0.587, 0.114));
}

float luma(vec4 color) {
  return dot(color.rgb, vec3(0.299, 0.587, 0.114));
}{@}VALightBlur.fs{@}uniform vec2 uDir;

vec4 gaussianblur(sampler2D image, vec2 uv, float steps, vec2 resolution, vec2 direction) {

  vec4 blend = vec4(0.);
  float sum = 1.;
  float m = 1.;
  float n = steps;

  for (float i = 0.; i < 100.; i += 1.) {
      if(i >= 2. * steps) break;
      float k = i;
      float j = i - 0.5 * steps;
      blend += m * texture2D(image, uv + j * direction / resolution);
      m *= (n - k) / (k + 1.);
      sum += m;
  }

  return blend / sum;

}
void main() {
    gl_FragColor = gaussianblur(tDiffuse, vUv, 13.0, resolution, uDir);
}{@}VolumetricAtmosphere.fs{@}uniform vec2 lightPos;
uniform float fExposure;
uniform float fDecay;
uniform float fDensity;
uniform float fWeight;
uniform float fClamp;

const int iSamples = 20;

void main() {
    vec2 deltaTextCoord = vUv - lightPos;
    deltaTextCoord *= 1.0  / float(iSamples) * fDensity;
    vec2 coord = vUv;

    float illuminationDecay = 1.0;
    vec4 color = vec4(0.0);

    for (int i = 0; i < iSamples; i++) {
        coord -= deltaTextCoord;
        vec4 texel = texture2D(tDiffuse, coord);
        texel *= illuminationDecay * fWeight;
        color += texel;
        illuminationDecay *= fDecay;
    }

    color *= fExposure;
    color = clamp(color, 0.0, fClamp);
    gl_FragColor = color;
}{@}VolumetricAtmosphereColor.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 uColor;
uniform sampler2D tDepth;
uniform float uNear;
uniform float uFar;
uniform float uFadeDist;
uniform float uSkyClip;
uniform vec3 uHSL;
uniform float uNoiseScale;
uniform sampler2D tVideo;
uniform float uUseVideo;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
}

#!SHADER: Fragment

#require(range.glsl)
#require(rgb2hsv.fs)
#require(simplenoise.glsl)
#require(transformUV.glsl)

float getDepthValue(sampler2D tDepth, vec2 uv, float n, float f) {
    vec4 depth = texture2D(tDepth, uv);
    return (2.0 * n) / (f + n - depth.x * (f - n));
}

void main() {
    float depth = getDepthValue(tDepth, vUv, uNear, uFar);

    vec3 inColor = uColor;

    if (uUseVideo > 0.0) {
        float x = 0.5+sin(time*0.1)*0.1;
        float y = 0.5+cos(time*0.1)*0.1;
        vec3 video = texture2D(tVideo, scaleUV(vUv, vec2(150.0), vec2(x-0.2, y))).rgb;
        //video = vec3(1.0);
        inColor = mix(inColor, video, uUseVideo);
    }

    inColor = rgb2hsv(inColor);
    inColor += cnoise(vUv * uNoiseScale + time * 0.08) * uHSL * 0.5 * smoothstep(-0.2, 0.8, length(vUv-0.5));
    inColor = hsv2rgb(inColor);

    vec3 color = inColor * crange(depth, 0.0, uFadeDist, 0.0, 1.0) * smoothstep(uSkyClip+0.2, uSkyClip-0.2, depth);

    //color = vec3(uUseVideo);
    gl_FragColor = vec4(color, 1.0);
}{@}circle.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 uColor;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: Fragment
float aastep(float threshold, float value) {
    float afwidth = length(vec2(dFdx(value), dFdy(value))) * 0.70710678118654757;
    return smoothstep(threshold-afwidth, threshold+afwidth, value);
}

void main() {
    float d = length(vUv - 0.5);
    float a = 1.0 - aastep(0.5, d);
    // float a = 1.0 - smoothstep(0.49, 0.51, d);

    gl_FragColor = vec4(uColor, a);
}{@}mask.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform float uTransition;
uniform float uOpacity;
uniform float uDir;

#!VARYINGS

varying vec2 vUv;

#!SHADER: Vertex

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: Fragment
void main() {
    vec2 uv = vUv;
    uv.x += mix(1.0 - uTransition, uTransition - 1.0, uDir);
    if (uv.x > 1.0) discard;

    gl_FragColor = texture2D(tMap, uv);
    gl_FragColor.a *= uOpacity;
}
{@}underline.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 uColor;
uniform vec3 uActiveColor;
uniform float uActive;
uniform float uTransition;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vUv = uv;
    vec3 pos = position;

    // if (vUv.x < uActive - 0.1) {
    //     pos.y = position.y + (sin(pos.x * 50.0) * uActive);
    // }
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment
void main() {
    float a = 0.0;
    vec3 color = uColor;

    if (uTransition < 1.0) {
        if (vUv.x < uTransition) a = 1.0;
    } else {
        if (vUv.x > uActive || vUv.x < uActive - 0.1) a = 1.0;
    }

    gl_FragColor = vec4(color, a);
}{@}GreyboxAvatar.glsl{@}#!ATTRIBUTES
attribute vec3 offset;
attribute vec3 scale;
attribute vec4 orientation;
attribute vec3 vdata;

#!UNIFORMS

uniform vec4 uVelocity;
uniform vec2 uVelocityRange;
uniform sampler2D uScene;
uniform sampler2D uScene2;
uniform vec2 uTransition;
uniform vec3 uIrridFreq;
uniform vec3 uIrridOffset;
uniform float uScale;
uniform float uHotSpotTransition;
uniform float uModerator;
uniform float uIsTalking;
uniform float uIsTeleporting;

#!VARYINGS
varying float vVisibility;
varying vec3 vNormal;
varying vec3 vLocalNormal;
varying vec3 vModelViewPos;
varying vec3 vPos;
varying vec3 vViewDir;
varying vec2 vUv;
varying vec3 vWorldPos;
varying vec3 vLocal;

#!SHADER: Vertex
#require(range.glsl)
#require(optimizedavatar.vs)
#require(skinnedavatar.vs)
#require(avatargrid.glsl)
#require(simplenoise.glsl)

vec3 rotate(vec3 v, float angle) {
    float s = sin(angle);
    float c = cos(angle);
    return mat3(c, 0., -s,
                0., 1., 0.,
                s, 0, c) * v;
}
vec3 orientateOnYAxisInverse(vec3 vec, vec4 quat) {
    float angle = atan(quat.y, quat.w) + 3.14159265359;
    angle *= -1.;
    vec4 yQuat = vec4(0., sin(angle), 0., cos(angle));
    return vec + 2.0 * cross( cross( vec, yQuat.xyz ) + yQuat.w * vec, yQuat.xyz );
}

void main() {
    vPos = position;
    vUv = uv;

    setupAvatar();

    vVisibility = visibility();
    if (vVisibility < 0.5) {
        gl_Position = vec4(0.0);
        return;
    }

    vec3 pos = position;
    vec3 localnormal = normal;

    #ifdef INSTANCED
        vec3 localpos = position;

		vec4 avatarData = getPackedData(0.0);
		bool isVR = avatarData.w < 1.0;


        // set base and blend animation
        vec3 animatedPos;
        vec3 animatedNor;
        if (avatarData.y < 0.999) {
            float blend = crange(length(uVelocity.xz), uVelocityRange.x, uVelocityRange.y, 0.0, 1.0);
            getSkinGPUAnimationMix(animatedPos, animatedNor, 0, 1, blend, isVR);
        }


		if (!isVR) {
            // set overwrite animation
            if (avatarData.y > 0.001) {
                vec3 additionalPos;
                vec3 additionalNor;
                int blendAnim = int(avatarData.x);
                getSkinGPUAnimationMix(additionalPos, additionalNor, blendAnim, blendAnim, 0.0, false);
                animatedPos = mix(animatedPos, additionalPos, avatarData.y);
                animatedNor = mix(animatedNor, additionalNor, avatarData.y);
            }

            // non VR uses velocity rotation
            localpos = rotate(animatedPos, uVelocity.w);
            localnormal = rotate(animatedNor, uVelocity.w);

        } else {
            
            // half a turn flip
            mat3 rr = mat3(-1., 0., 0., 0., 1., 0., 0., 0., -1.);
            localpos = rr * animatedPos;
            localnormal = rr * animatedNor;

            // only allow vertical rotation
            localpos = orientateOnYAxisInverse(localpos, orientation);
            localnormal = orientateOnYAxisInverse(localnormal, orientation);
        }

        // position instance
        vec3 sc = scale * uScale;
        sc = mix(sc, vec3(0.0), uIsTeleporting);

        pos = transformPosition(localpos, offset, sc);

        vLocal = localpos;

    #endif

	vNormal = normalize(normalMatrix * localnormal);
    vLocalNormal = animatedNor;

    vec4 worldPos = modelMatrix * vec4(pos, 1.0);
    vec4 modelViewPos = viewMatrix * worldPos;

    gl_Position = projectionMatrix * modelViewPos;
    vViewDir = -modelViewPos.xyz;
    vWorldPos = worldPos.xyz;
}


#!SHADER: Fragment
#require(optimizedavatar.fs)
#require(fresnel.glsl)

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

const float avatarHeight = 1.8;

#test Renderer.type !== 'webgl1'
layout(location = 0) out vec4 Color;
layout(location = 1) out vec4 WorldPos;
layout(location = 2) out vec4 Persist;
layout(location = 3) out vec4 UIDepth;
#endtest

float saturate(float v) {
    return clamp(v, 0., 1.);
}

void main() {
	if (vVisibility < 0.5 ) {
        discard;
        return;
    }

    vec3 mvpos = normalize(-vViewDir);
    vec3 normal = normalize(vNormal);
    float fresnel = 0.5 + 0.5 * max(0.0, dot(-mvpos, normal));

    vec4 glass = vec4(vec3(fresnel), 1. - pow(fresnel, 5.));

    vec3 baseColor = vec3(1.0);

    if (uModerator > 0.5) {
        baseColor = vec3(0.341, 0.341, 0.847);
    }

    vec4 color = vec4(baseColor * fresnel, 1.);

    #test !Tests.isVR()

        vec2 scaler = mix(vec2(1.), normal.xz, vec2(0.5));
        vec2 st = gl_FragCoord.xy / resolution.xy;
        st += vec2(0.1, 0.02) * scaler;
        vec4 refract = texture2D(uScene, st) * 0.9;

        refract = max(refract, texture2D(uScene2, st) * 0.9);

        st = gl_FragCoord.xy / resolution.xy;
        st -= vec2(0.1, 0.02)* scaler;
        vec4 reflect = texture2D(uScene, st);

        reflect = max(reflect, texture2D(uScene2, st) );

        vec4 scene = mix(reflect, refract, pow(fresnel, 5.));
        
        bool updateTransparency = false;

        scene = mix(scene, vec4(0.9), step(length(scene.rgb), 0.01));

        glass = vec4(scene.rgb * fresnel, 1.);

    #endtest

    float fr = dot(vNormal, normalize(vViewDir));
    vec3 irridColor = iridescence(fr, uIrridFreq, uIrridOffset);

    glass.rgb = mix(irridColor, glass.rgb, pow(fresnel, 5.));
    
    #test Tests.isVR()
        glass.rgb = pow(glass.rgb, vec3(2.2));
    #endtest

    //Hall transition
    if(uTransition.x > 0. && uTransition.y == 0.) {
        color = vPos.y / avatarHeight >= uTransition.x ? color : glass;
    }

    if(uTransition.y == 1.) {
        color = glass;
        float trans = clamp(uTransition.x, 0., 1.);

        color.a = mix(1., 1. - pow(max(0.0, dot(-mvpos, normal)), 1.2), trans);
        color.a = step(-color.a, -0.5);
        color.rgb = mix(glass.rgb, vec3(1.), vec3(pow(trans, 2.)));
    }

    color.rgb = mix(color.rgb, color.rgb * 0.85, uIsTalking);
    

    #test Renderer.type !== 'webgl1'
        gl_FragDepth = gl_FragCoord.z - (0.87 * uHotSpotTransition);

        Color = color;
        WorldPos = vec4(vWorldPos, 1.0);
        Persist = vec4(1.0);
        UIDepth = vec4(0.0);
    #endtest

    #test Renderer.type === 'webgl1'
        gl_FragColor  = color;
    #endtest
}{@}GreyboxAvatarShadows.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec2 uTransition;
uniform vec4 uVelocity;


#!VARYINGS
varying float vVisibility;
varying vec3 vNormal;
varying vec3 vLocalNormal;
varying vec3 vModelViewPos;
varying vec3 vPos;
varying vec3 vViewDir;
varying vec2 vUv;
varying vec3 vWorldPos;
varying vec3 vLocal;

#!SHADER: Vertex.vs
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: Fragment.fs

const float avatarHeight = 1.8;

vec3 rotate(vec3 v, float angle) {
    float s = sin(angle);
    float c = cos(angle);
    return mat3(c, 0., -s,
                0., 1., 0.,
                s, 0, c) * v;
}

void main() {
    bool transitionDiscard = uTransition.y > 0.5 && vPos.y / avatarHeight >= 1. - uTransition.x;
	
    if (transitionDiscard ) {
        discard;
        return;
    }

    float fresnel = 0.5 + 0.5 * abs(dot(rotate(vec3(1., 0., 0.), uVelocity.w), vLocalNormal));

    gl_FragColor = vec4(0., 0., 0., 1.0);
    

}{@}PlayerSpeakingShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 uRingColor;
uniform float uIsSpeaking;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vUv = uv;
}

#!SHADER: Fragment
#require(eases.glsl)
float stroke(float x, float s, float w) {
    float d = step(s, x + w * 0.5) - step(s, x - w * 0.5);
    return clamp(d, 0., 1.);
}

float circleSDF(vec2 st) {
    return length(st - .5) * 2.0;
}

void main() {
    vec2 st = vUv;
    
    float t = fract(time * .4);
    float f = quarticIn(t);
    
    float shape1 = stroke(circleSDF(st), f * 1.1, (f * .1));
    float shape2 = stroke(circleSDF(st), f * 1.5, (f * .1));
    
    // vec4 color = vec4(1.);    
    vec4 color = vec4(1.);    

    color *= shape1 + shape2;
    
    color.a *= 1. - (f * 2.2);
    gl_FragColor = vec4(color);
}{@}CaptionMaskShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vUv = uv;
}

#!SHADER: Fragment
#require(gluimask.fs)
void main() {
    // vec4 texel = 
    // vec2 uv = getMaskUV();
    //if(uv.y > 1.0 || uv.y < 0.0) discard;

    gl_FragColor = vec4(1., 1., 1., 1.);
}{@}HotSpotUICaptionBGShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 uColor;
uniform float uOwnAlpha;
uniform float uAlpha;
uniform vec2 uSize;
uniform float uScale;
uniform float uBorderRadius;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vec3 pos = position;
    pos.x *= uScale;

    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment
#require(roundedBorder.glsl)

float udSegment( in vec2 p, in vec2 a, in vec2 b ) {
    vec2 ba = b-a;
    vec2 pa = p-a;
    float h = clamp( dot(pa,ba)/dot(ba,ba), 0.0, 1.0 );
    return length(pa-h*ba);
}

void main() {
    float inside = 0.0;
    roundedBorder(0.0, uBorderRadius, vUv, vec2(uSize.x * uScale, uSize.y), inside);

    vec3 color = uColor;
    float alpha = uOwnAlpha * uAlpha;
    gl_FragColor = vec4(color, alpha) * inside;
}{@}HotSpotUICaptionTextShader.glsl{@}#!ATTRIBUTES
attribute vec3 animation;

#!UNIFORMS
uniform sampler2D tMap;
uniform float uAlpha;
uniform float uOwnAlpha;
uniform vec3 uColor;

uniform float uCaptionProgress;
// uniform float uOverflows;
uniform vec2 uDimensions;

uniform float uTransition;
uniform float uWordCount;
uniform float uLineCount;
//uniform float uLetterCount;

uniform float uByWord;
uniform float uByLine;
uniform float uPadding;
uniform vec3 uBoundingMin;
uniform vec3 uBoundingMax;

#!VARYINGS
varying vec2 vUv;
varying float vLineIndex;
varying float vWordIndex;
varying float vProgress;
// varying float vX;
// varying float vO;

#!SHADER: Vertex
#require(eases.glsl)

void main() {
	vUv = uv;

	vec3 pos = position;

    // float lineHeight = uDimensions.y / (uLineCount * 0.8);

	gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);

    // vWordIndex = word;
    // vLineIndex = line;
    //vProgress = moveAmountLines;
}

#!SHADER: Fragment
#require(eases.glsl)
#require(msdf.glsl)
#require(gluimask.fs)
void main() {
	float alpha = msdf(tMap, vUv);
	float a = alpha * uAlpha;
    vec2 uv = getMaskUV();

	// float progress = 1. - vWordIndex + uCaptionProgress;
	// progress = expoIn(progress) * uOwnAlpha;

	vec3 color = uColor;
    // vec3 color = vec3(vProgress);
	// if(uv.y < 0.) discard;
    // if(uv.y < 0.) discard;
	
	gl_FragColor = vec4(color, a);
}{@}UICaptionsBtnShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 uColor;
uniform vec3 uColor2;
uniform float uTransition;
uniform float uHover;
uniform float uAlpha;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: Fragment
float aastep(float threshold, float value) {
    float afwidth = length(vec2(dFdx(value), dFdy(value))) * 0.70710678118654757;
    return smoothstep(threshold-afwidth, threshold+afwidth, value);
}

void main() {
    float d = length(vUv - 0.5);
    // float a = 1.0 - smoothstep(0.49, 0.51, d);
    float a = 1.0 - aastep(0.5, d);

    a *= uAlpha;

    vec3 color = mix(uColor, uColor2, uTransition);
    vec3 invColor = mix(uColor2, uColor, uTransition);

    float aH = 1.0 - aastep(uHover / 1.96, d);
    color = mix(color, invColor, aH);

    gl_FragColor = vec4(color, a);
}{@}UIChatShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 uColor;
uniform vec3 uColor2;
uniform float uTransition;
uniform float uHover;
uniform float uAlpha;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: Fragment
float aastep(float threshold, float value) {
    float afwidth = length(vec2(dFdx(value), dFdy(value))) * 0.70710678118654757;
    return smoothstep(threshold-afwidth, threshold+afwidth, value);
}

void main() {
    // zoom 1.04 to prevent cutoff at edges
    float d = length((vUv - 0.5) * 1.04);
    // float a = 1.0 - smoothstep(0.49, 0.51, d);
    float a = 1.0 - aastep(0.5, d);
    a *= uAlpha;

    vec3 color = mix(uColor, uColor2, uTransition);
    vec3 invColor = mix(uColor2, uColor, uTransition);

    float aH = 1.0 - aastep(uHover / 1.96, d);
    color = mix(color, invColor, aH);

    gl_FragColor = vec4(color, a);
}{@}UIMicShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 uColor;
uniform vec3 uColor2;
uniform float uTransition;
uniform float uHover;
uniform float uAlpha;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: Fragment
float aastep(float threshold, float value) {
    float afwidth = length(vec2(dFdx(value), dFdy(value))) * 0.70710678118654757;
    return smoothstep(threshold-afwidth, threshold+afwidth, value);
}

void main() {
    float d = length(vUv - 0.5);
    // float a = 1.0 - smoothstep(0.49, 0.51, d);
    float a = 1.0 - aastep(0.5, d);
    a *= uAlpha;

    vec3 color = mix(uColor, uColor2, uTransition);
    vec3 invColor = mix(uColor2, uColor, uTransition);

    float aH = 1.0 - aastep(uHover / 1.96, d);
    color = mix(color, invColor, aH);

    gl_FragColor = vec4(color, a);
}{@}UIText.glsl{@}#!ATTRIBUTES
attribute vec3 animation;
attribute float weight;

#!UNIFORMS
uniform sampler2D tMap;
uniform vec3 uColor;
uniform vec3 uColorBold;

uniform float uOpacity;
uniform float uTransition;
uniform float uLineCount;
uniform float uWordCount;
uniform float uOffset;

#!VARYINGS
varying float vTrans;
varying vec2 vUv;
varying vec3 vPos;
varying float vWeight;

#!SHADER: Vertex
#require(range.glsl)
#require(eases.glsl)

void main() {
    vUv = uv;
    vWeight = weight;
    vTrans = 1.0;

    vec3 pos = position;

    float line = (animation.z + 1.0) / uLineCount;
    float lineTrans = rangeTransition(uTransition, line, 0.7); // uPadding: 0.3

    vTrans = cubicOut(lineTrans);

    float invTrans = (1.0 - vTrans);
    pos.y += -uOffset * invTrans; // uTranslate: -15.0;

    vPos = pos;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment
#require(msdf.glsl)
#require(range.glsl)

void main() {
    float alpha = msdf(tMap, vUv);

    vec3 color = mix( uColor, uColorBold, vWeight );

    gl_FragColor.rgb = color;
    gl_FragColor.a = alpha * vTrans * uOpacity;
}{@}VRButton.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 uColor;
uniform vec3 uHoverColor;
uniform vec2 uResolution;

uniform float uHover;
uniform float uRounding;
uniform float uOpacity;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vUv = uv;
}

#!SHADER: Fragment
float sdRoundedBox(vec2 p, vec2 b, vec4 r) {
    vec2 q = abs(p)-b+r.x;
    return min(max(q.x,q.y),0.0) + length(max(q,0.0)) - r.x;
}

float aastep(float threshold, float value) {
    float afwidth = length(vec2(dFdx(value), dFdy(value))) * 0.70710678118654757;
    return smoothstep(threshold-afwidth, threshold+afwidth, value);
}

void main() {
    vec2 normalizedUv = vUv * 2.0 - 1.0;
    float aspect = uResolution.x / uResolution.y;
    normalizedUv.x *= aspect;

    float d = sdRoundedBox(normalizedUv, vec2(aspect-0.03, 0.96), vec4(uRounding));

    float aaf = fwidth(d);
    float radius = 0.01;
    float alpha = 1. - smoothstep(radius - aaf, radius, d);

    // float d = sdRoundedBox(normalizedUv, vec2(aspect-0.04, 0.97), vec4(uRounding));
    // d =  1. - abs(d / 0.04);
    // aaf = fwidth(d);
    // radius = 0.05;
    // border = smoothstep(radius - aaf, radius, d);

    // vec4 hoverColor = vec4(uColor, 1.0);
    vec3 color = mix(uColor, uHoverColor, aastep(vUv.y, uHover));

    gl_FragColor.rgb = color;
    gl_FragColor.a = alpha * uOpacity;
}{@}VFX.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform float uRGBStrength;
uniform float uNoise;

uniform vec2 uBloomContrast;

uniform sampler2D tBokehTexture;
uniform sampler2D tAtmosphere;
uniform sampler2D tDepth;
uniform vec2 uBlendAtmos;
uniform float uBlendAtmosMix;
uniform float uBokeh;

uniform vec3 uFogColor;
uniform vec3 uFogApply;

uniform float uTeleporting;


// Hotspot
uniform sampler2D tInside;
uniform sampler2D tPersist;
uniform sampler2D tWorldPos;
uniform float uHotspotTransition;
uniform float uHotspotRadius;
uniform float uHotspotPersist;
uniform float uHotspotEnter;
uniform float uHotspotDirection;
uniform vec3  uHotspotPosition;


#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    gl_Position = projectionMatrix * viewMatrix;

    vec4 worldPos = modelMatrix * vec4(pos, 1.0);
    vUv = uv;
}

#!SHADER: Fragment
#require(range.glsl)
#require(eases.glsl)
#require(rgbshift.fs)
#require(UnrealBloom.fs)
#require(simplenoise.glsl)
#require(blendmodes.glsl)
#require(normalmap.glsl)
#require(transformUV.glsl)
#require(rgb2hsv.fs)
#require(conditionals.glsl)

void main() {
    vec2 uv = vUv;
    vec2 squareUV = scaleUV(uv, vec2(1.0, resolution.x/resolution.y));

    float depth = texture2D(tDepth, vUv).r;
    vec4 color = vec4(1.0);
    color = getRGB(tDiffuse, uv, 0.2, 0.00025 * uRGBStrength);

    // Hotspot
    if (uHotspotTransition > 0.001) {
        float persist = texture2D(tPersist, vUv).r;

        #test Tests.VFX_FLOAT_MRT()
            vec4 worldData = texture2D(tWorldPos, vUv);
            vec3 wPos = worldData.xyz;

            float distFromHotspot = length(uHotspotPosition.xyz - worldData.xyz);
            float innerRange = crange(distFromHotspot, 0.0, 80.0, 1.0, 0.0);
            float showInside = rangeTransition(uHotspotTransition, innerRange, abs(sin(time*5.0))*0.1*smoothstep(0.0, 1.0, uHotspotTransition));

            float ring = smoothstep(0.0, 0.8, showInside) * smoothstep(1.0, 0.8, showInside);
            float noise = cnoise(wPos*2.0) * smoothstep(0.85, 0.7, uHotspotTransition);
            vec2 insideUV = scaleUV(vUv, vec2(1.0));
            insideUV += noise * 0.1  * ring;
            vec3 inside = texture2D(tInside, insideUV).rgb;

            color = getRGB(tDiffuse, insideUV, 0.2, 0.00025 * uRGBStrength + 0.005*ring);
            showInside *= crange(uHotspotTransition, 0.0, 0.1, 0.0, 1.0);

            showInside = mix(showInside, 0.0, persist);
            showInside -= crange(distFromHotspot, 2.0, 6.0, 1.0, 0.0) * 0.2;
            showInside = clamp(showInside, 0.0, 1.0);
            inside += ring * smoothstep(1.0, 0.9, uHotspotTransition);

            color.rgb = mix(color.rgb, inside, showInside * smoothstep(0.0, 1.0, uHotspotTransition));
            color.rgb = blendSoftLight(color.rgb, vec3(1.0-innerRange), showInside * 0.6 * smoothstep(5.0, 30.0, distFromHotspot));
        #endtest

        #test !Tests.VFX_FLOAT_MRT()
            vec3 inside = texture2D(tInside, vUv).rgb;
            inside.rgb = mix(inside.rgb, color.rgb, depth * 0.07);

            // float fade = rangeTransition(uHotspotTransition, depth, 0.1);
            float fade = uHotspotTransition;
            fade = mix(fade, 0.0, persist);


            color.rgb = mix(color.rgb, inside, fade);
        #endtest
    }

    #test Tests.renderBloom()
        // Atmosphere
        vec3 atmos = texture2D(tAtmosphere, vUv).rgb;
        color.rgb = blendSoftLight(color.rgb, atmos, uBlendAtmos.x * uBlendAtmosMix);
        color.rgb = blendScreen(color.rgb, atmos, uBlendAtmos.y * uBlendAtmosMix);

        // Bloom
        vec3 bloom = pow(getUnrealBloom(vUv).rgb, vec3(1.0+uBloomContrast.x)) * uBloomContrast.y;
        color.rgb += bloom;
    #endtest

    // Fog
    if (uFogApply.z > 0.0) {
        color.rgb = mix(color.rgb, uFogColor, smoothstep(uFogApply.x, uFogApply.y, depth) * uFogApply.z * uBlendAtmosMix);
        //color.rgb = vec3(1.0-depth);
    }


    // Bokeh Corners
    #test Tests.renderBloom()
    if (uBokeh > 0.0) {
        vec2 bokehUV = scaleUV(squareUV, vec2(1.0+sin(time*0.7+vUv.x*1.5-vUv.y*0.2)*0.04));
        vec3 bokeh = texture2D(tBokehTexture, bokehUV).rgb;
        bokeh *= 0.5 + sin(time*0.4-vUv.x*1.8+vUv.y*0.5)*0.5;
        bokeh *= crange(resolution.x/resolution.y, 0.7, 1.5, 0.3, 1.0);
        bloom += bloom * bokeh * uBokeh * smoothstep(0.2, 0.9, length(squareUV-0.5)) * 20.0;
    }
    #endtest

    // Vignette
    color.rgb *= mix(1.0, 0.7, smoothstep(0.2, 0.7, length(squareUV-0.5)));

    // Noise Overlay to diffuse
    color.rgb += (getNoise(vUv, time) - 0.5) * 0.02 * uNoise;

    color.rgb = mix(color.rgb, vec3(0.0), uTeleporting);

    gl_FragColor = color;
}