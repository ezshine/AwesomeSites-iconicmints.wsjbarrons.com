// --------------------------------------
// 
//    _  _ _/ .  _  _/ /_ _  _  _        
//   /_|/_ / /|//_  / / //_ /_// /_/     
//   https://activetheory.net    _/      
// 
// --------------------------------------
//   11/1/22 11:25a
// --------------------------------------

window.ASSETS = ["assets/data/uil.json", "assets/shaders/compiled.vs"], ASSETS.SW = ["assets/css/style-scss.css", "assets/css/style.css", "assets/js/app.js"], Class((function CopyOverrides() {
	Inherit(this, Component);
	UICopy.state.chatzoneTitle = "Start a conversation?", UICopy.state.chatzoneCreate = "Start a conversation?", UICopy.state.chatzoneJoin = "Join this conversation?"
}), "singleton"), Class((function FOEFNFTGalleryColors() {
	Inherit(this, Component);
	this.colors = {
		black: "#000",
		primary: "#9b66d3",
		gray: "#ccc",
		red: "#f00",
		yellow: "#ffcf00",
		steel: "#6d7278",
		white: "#fff",
		green: "#55b750",
		blue: "#1B81F9",
		online: "#00E532",
		gray800: "#3C4043",
		gray600: "#80868B",
		gray500: "#959CA5",
		gray300: "#DADCE0",
		gray200: "#F1F3F4",
		gray50: "#FAFAFA",
		blue600: "#1A73E8",
		blue500: "#4285F4",
		blue200: "#72ABF1",
		blue100: "#E7F5F7",
		blue50: "#F6F9FE",
		yellow600: "#F9AB00",
		yellow500: "#FBBC04",
		yellow200: "#F5C64B",
		yellow100: "#F4EDE6",
		green600: "#1E8E3E",
		green500: "#34A853",
		green200: "#73C16B",
		green100: "#E4EFE6",
		red600: "#D93025",
		red500: "#EA4335",
		red200: "#F7BBBE",
		red100: "#F9EDED"
	}
}), "static"), Class((function FOEFNFTGalleryFonts() {
	Inherit(this, Component);
	Object.assign(this, {
		generic: "Arial, Helvetica Neue, Helvetica, sans-serif;"
	})
}), "static"), Class((function FOEFNFTGalleryStyleguide() {
	Inherit(this, Component);
	const _this = this;
	_this.styles = {}, _this.fonts = {}, this.isMobile = () => Device.mobile.phone || window.innerWidth < 768 || window.innerWidth / window.innerHeight < 1.25 && window.innerWidth < 1300, _this.init = function() {
		! function setFonts() {
			_this.fonts = {
				primary: FOEFNFTGalleryFonts.generic
			}
		}(),
		function setStyles() {
			_this.styles = {
				html: {
					fontFamily: _this.fonts.primary
				},
				h1: {
					fontSize: "5.5rem",
					fontWeight: "700",
					lineHeight: "1.2",
					letterSpacing: "-0.01rem"
				},
				p: {
					fontSize: "1.8rem",
					fontWeight: "100",
					lineHeight: "1.2",
					letterSpacing: "-0.01rem",
					color: DreamColors.instance().primary
				},
				a: {
					color: DreamColors.instance().primary,
					textDecoration: "none",
					transition: `color 300ms ${TweenManager._getEase("easeOutCubic")}`,
					"&:hover": {
						color: DreamColors.instance().hexToRgba(DreamColors.instance().primary, .8)
					}
				}
			}
		}(),
		function setGlobalStyles() {
			const globalStyles = {};
			["html", "h1", "h2", "h3", "h4", "h5", "h6", "p", "a"].forEach((tag => {
				Object.hasOwnProperty.call(_this.styles, tag) && (globalStyles[tag] = _this.styles[tag])
			})), goober.glob(globalStyles)
		}()
	}
}), "static"), Class((function PortalUtil() {
	Inherit(this, Model);
	const _this = this;
	let $wrapper, $button;

	function onClickStart() {
		$wrapper.hide(), document.getElementById("Stage").requestFullscreen()
	}
	this.isPortal = !1, window.process && (this.isPortal = !0), async function() {
		Utils.query("eportal") && (await async function testQueryVal() {
			const queryVal = Utils.query("eportal");
			await PlatformDB.ready();
			const ref = PlatformDB.ref("simple-auth"),
				snap = await ref.get();
			if (snap.exists()) {
				const snapVal = snap.val();
				for (var key in snapVal) key === queryVal && (_this.isPortal = !0)
			}
		}(), _this.isPortal && function initClickUI() {
			$wrapper = $("PortalClickWrapper"), $wrapper.css({
				width: "100%",
				height: "100%",
				left: 0,
				top: 0,
				position: "fixed",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				background: "black",
				zIndex: 999
			}), $button = $wrapper.create("PortalClickButton", "button"), $button.css({
				position: "relative",
				background: "white",
				color: "black",
				padding: "2rem 5rem",
				outline: "none",
				border: "none",
				fontWeight: "bold",
				fontSize: "1.5rem",
				borderRadius: "2.5rem"
			}), $button.text("Click to start the portal"), $button.interact((() => {}), onClickStart), Stage.add($wrapper)
		}()), _this.dataReady = !0
	}()
}), "static"), window.UIL_ASSETS_GEOMETRIES = [{
	filename: "avatar/avatar_dance.json",
	bytes: 234154,
	lastChange: "2022-11-01T18:25:00.419Z"
}, {
	filename: "avatar/avatar_idle.json",
	bytes: 412359,
	lastChange: "2022-11-01T18:25:00.419Z"
}, {
	filename: "avatar/avatar_inactive.json",
	bytes: 508196,
	lastChange: "2022-11-01T18:25:00.423Z"
}, {
	filename: "avatar/avatar_jump.json",
	bytes: 32976,
	lastChange: "2022-11-01T18:25:00.423Z"
}, {
	filename: "avatar/avatar_skinned.json",
	bytes: 82772,
	lastChange: "2022-11-01T18:25:00.423Z"
}, {
	filename: "avatar/avatar_walk.json",
	bytes: 49316,
	lastChange: "2022-11-01T18:25:00.423Z"
}, {
	filename: "avatar/old/air.json",
	bytes: 32976,
	lastChange: "2022-11-01T18:25:00.423Z"
}, {
	filename: "avatar/old/dance.json",
	bytes: 234154,
	lastChange: "2022-11-01T18:25:00.423Z"
}, {
	filename: "avatar/old/idle.json",
	bytes: 412359,
	lastChange: "2022-11-01T18:25:00.427Z"
}, {
	filename: "avatar/old/inactive.json",
	bytes: 508196,
	lastChange: "2022-11-01T18:25:00.427Z"
}, {
	filename: "avatar/old/run.json",
	bytes: 49316,
	lastChange: "2022-11-01T18:25:00.427Z"
}, {
	filename: "avatar/old/tpose.json",
	bytes: 82772,
	lastChange: "2022-11-01T18:25:00.427Z"
}, {
	filename: "controller.json",
	bytes: 94725,
	lastChange: "2022-11-01T18:25:00.427Z"
}], window.UIL_ASSETS_TEXTURES = [{
	filename: "UI/arrow.png",
	bytes: 291,
	lastChange: "2022-11-01T18:25:00.427Z"
}, {
	filename: "UI/arrow_back.png",
	bytes: 400,
	lastChange: "2022-11-01T18:25:00.431Z"
}, {
	filename: "UI/arrow_black.png",
	bytes: 370,
	lastChange: "2022-11-01T18:25:00.431Z"
}, {
	filename: "UI/arrow_black_mobile.png",
	bytes: 208,
	lastChange: "2022-11-01T18:25:00.431Z"
}, {
	filename: "UI/arrow_mobile.png",
	bytes: 221,
	lastChange: "2022-11-01T18:25:00.431Z"
}, {
	filename: "UI/bg.png",
	bytes: 925769,
	lastChange: "2022-11-01T18:25:00.431Z"
}, {
	filename: "UI/chat.png",
	bytes: 1473,
	lastChange: "2022-11-01T18:25:00.431Z"
}, {
	filename: "UI/chat_mobile.png",
	bytes: 441,
	lastChange: "2022-11-01T18:25:00.431Z"
}, {
	filename: "UI/dot.png",
	bytes: 162,
	lastChange: "2022-11-01T18:25:00.431Z"
}, {
	filename: "UI/headphones.png",
	bytes: 459,
	lastChange: "2022-11-01T18:25:00.431Z"
}, {
	filename: "UI/headphones_purple.png",
	bytes: 348,
	lastChange: "2022-11-01T18:25:00.431Z"
}, {
	filename: "UI/headset.png",
	bytes: 749,
	lastChange: "2022-11-01T18:25:00.431Z"
}, {
	filename: "UI/logo.png",
	bytes: 24021,
	lastChange: "2022-11-01T18:25:00.431Z"
}, {
	filename: "UI/mic_settings.png",
	bytes: 300,
	lastChange: "2022-11-01T18:25:00.431Z"
}, {
	filename: "UI/mic_settings_purple.png",
	bytes: 315,
	lastChange: "2022-11-01T18:25:00.431Z"
}, {
	filename: "UI/move.png",
	bytes: 545,
	lastChange: "2022-11-01T18:25:00.431Z"
}, {
	filename: "UI/mute.png",
	bytes: 315,
	lastChange: "2022-11-01T18:25:00.431Z"
}, {
	filename: "UI/mute_black.png",
	bytes: 284,
	lastChange: "2022-11-01T18:25:00.431Z"
}, {
	filename: "UI/mute_hover.png",
	bytes: 315,
	lastChange: "2022-11-01T18:25:00.431Z"
}, {
	filename: "UI/mute_purple.png",
	bytes: 315,
	lastChange: "2022-11-01T18:25:00.431Z"
}, {
	filename: "UI/off_black.png",
	bytes: 281,
	lastChange: "2022-11-01T18:25:00.431Z"
}, {
	filename: "UI/off_purple.png",
	bytes: 290,
	lastChange: "2022-11-01T18:25:00.431Z"
}, {
	filename: "UI/on_black.png",
	bytes: 282,
	lastChange: "2022-11-01T18:25:00.431Z"
}, {
	filename: "UI/on_purple.png",
	bytes: 299,
	lastChange: "2022-11-01T18:25:00.431Z"
}, {
	filename: "UI/prescreen.png",
	bytes: 19744,
	lastChange: "2022-11-01T18:25:00.431Z"
}, {
	filename: "UI/replay.png",
	bytes: 350,
	lastChange: "2022-11-01T18:25:00.431Z"
}, {
	filename: "UI/replay_hover.png",
	bytes: 356,
	lastChange: "2022-11-01T18:25:00.431Z"
}, {
	filename: "UI/rotate.png",
	bytes: 1053,
	lastChange: "2022-11-01T18:25:00.431Z"
}, {
	filename: "UI/rotation.png",
	bytes: 1108,
	lastChange: "2022-11-01T18:25:00.431Z"
}, {
	filename: "UI/sound.png",
	bytes: 2562,
	lastChange: "2022-11-01T18:25:00.431Z"
}, {
	filename: "UI/splash.png",
	bytes: 7148,
	lastChange: "2022-11-01T18:25:00.431Z"
}, {
	filename: "UI/techlive-black.png",
	bytes: 6653,
	lastChange: "2022-11-01T18:25:00.431Z"
}, {
	filename: "UI/techlive-white.png",
	bytes: 4800,
	lastChange: "2022-11-01T18:25:00.431Z"
}, {
	filename: "UI/teleport.png",
	bytes: 1343,
	lastChange: "2022-11-01T18:25:00.431Z"
}, {
	filename: "UI/unmute.png",
	bytes: 348,
	lastChange: "2022-11-01T18:25:00.431Z"
}, {
	filename: "UI/unmute_black.png",
	bytes: 345,
	lastChange: "2022-11-01T18:25:00.435Z"
}, {
	filename: "UI/unmute_hover.png",
	bytes: 356,
	lastChange: "2022-11-01T18:25:00.435Z"
}, {
	filename: "UI/unmute_purple.png",
	bytes: 356,
	lastChange: "2022-11-01T18:25:00.435Z"
}, {
	filename: "UI/volume_off_black.png",
	bytes: 101,
	lastChange: "2022-11-01T18:25:00.435Z"
}, {
	filename: "UI/volume_off_purple.png",
	bytes: 101,
	lastChange: "2022-11-01T18:25:00.435Z"
}, {
	filename: "UI/volume_on_black.png",
	bytes: 131,
	lastChange: "2022-11-01T18:25:00.435Z"
}, {
	filename: "UI/volume_on_purple.png",
	bytes: 131,
	lastChange: "2022-11-01T18:25:00.435Z"
}, {
	filename: "UI/wrist.png",
	bytes: 660,
	lastChange: "2022-11-01T18:25:00.435Z"
}, {
	filename: "_scenelayout/black.jpg",
	bytes: 1129,
	lastChange: "2022-11-01T18:25:00.435Z"
}, {
	filename: "_scenelayout/mask.jpg",
	bytes: 1129,
	lastChange: "2022-11-01T18:25:00.435Z"
}, {
	filename: "_scenelayout/uv.jpg",
	bytes: 138695,
	lastChange: "2022-11-01T18:25:00.435Z"
}, {
	filename: "avatar/avatar.jpg",
	bytes: 15402,
	lastChange: "2022-11-01T18:25:00.435Z"
}, {
	filename: "avatar/bmo.png",
	bytes: 12765,
	lastChange: "2022-11-01T18:25:00.435Z"
}, {
	filename: "avatar/boredape.png",
	bytes: 24007,
	lastChange: "2022-11-01T18:25:00.435Z"
}, {
	filename: "avatar/coolcat.png",
	bytes: 19200,
	lastChange: "2022-11-01T18:25:00.435Z"
}, {
	filename: "avatar/coolmans.png",
	bytes: 15384,
	lastChange: "2022-11-01T18:25:00.435Z"
}, {
	filename: "avatar/cryptopunk.png",
	bytes: 2876,
	lastChange: "2022-11-01T18:25:00.435Z"
}, {
	filename: "avatar/deadfellaz.png",
	bytes: 6122,
	lastChange: "2022-11-01T18:25:00.435Z"
}, {
	filename: "cloud.jpg",
	bytes: 12437,
	lastChange: "2022-11-01T18:25:00.435Z"
}, {
	filename: "pbr/lut.png",
	bytes: 16623,
	lastChange: "2022-11-01T18:25:00.435Z"
}], Class((function Antimatter(_num, _config, _renderer = World.RENDERER, _pointData = null) {
	Inherit(this, AntimatterFBO);
	var _geometry, _this = this,
		_drawLimit = _num,
		_size = function findSize() {
			return _config.pot ? Math.pow(2, Math.ceil(Math.log(Math.sqrt(_num)) / Math.log(2))) : Math.ceil(Math.sqrt(_num))
		}();
	async function createBuffer() {
		let {
			geometry: geometry,
			vertices: vertices,
			attribs: attribs,
			usedDepth: usedDepth
		} = await AntimatterUtil.createBufferArray(_size, _num, _config, _pointData);
		_this.vertices = _this.cloneVertices ? vertices.clone() : vertices, (_geometry = geometry.clone(!0)).drawRange.end = _drawLimit, _this.vertices.geometry = _geometry, _this.attribs = _this.random = attribs, _this.textureUsedDepth = usedDepth, _this.init(_geometry, _renderer, _size)
	}
	defer(createBuffer), this.createFloatArray = function(components = 3) {
		return new Float32Array(_size * _size * components)
	}, this.createFloatArrayAsync = async function(components = 3, freshCopy) {
		let {
			array: array
		} = await AntimatterUtil.createFloatArray(_size * _size * components, freshCopy);
		return array
	}, this.ready = function(callback) {
		return _this.wait(_this, "vertices")
	}, this.useShader = function(vs, fs, params) {
		"object" == typeof fs && (params = fs, fs = null), this.vertexShader = vs, this.fragmentShader = fs || vs, this.uniforms = params
	}, this.createMesh = this.getMesh = function() {
		let shader = _this.createShader(_this.fragmentShader || "AntimatterBasicFrag");
		return _this.mesh = new Points(_geometry, shader), _this.mesh.frustumCulled = !1, _this.shader = shader, _this.geometry = _geometry, _this.mesh
	}, this.createShader = function(fs) {
		let uniforms = _this.uniforms || {},
			obj = {
				tPos: {
					type: "t",
					value: _this.vertices.texture,
					ignoreUIL: !0
				},
				tPrevPos: {
					type: "t",
					value: _this.vertices.texture,
					ignoreUIL: !0
				}
			};
		for (let key in uniforms) obj[key] = uniforms[key];
		let shader = new Shader(_this.vertexShader || "AntimatterPosition", fs, obj),
			vs = shader.vertexShader;
		if (vs && !vs.includes("uniform sampler2D tPos")) {
			let split = vs.split("__ACTIVE_THEORY_LIGHTS__"),
				defined = "uniform sampler2D tPos;";
			shader.vertexShader = split[0] + "\n" + defined + "\n__ACTIVE_THEORY_LIGHTS__\n" + split[1]
		}
		return shader
	}, this.getLookupArray = function() {
		return new Float32Array(_this.vertices.geometry.attributes.position.array)
	}, this.getRandomArray = function() {
		return _geometry.attributes.random.array
	}, this.overrideShader = function(original) {
		let shader = original.clone();
		original.copyUniformsTo(shader), shader.uniforms.tPos = {
			type: "t",
			value: _this.vertices.texture,
			ignoreUIL: !0
		}, shader.uniforms.tPrevPos = {
			type: "t",
			value: _this.vertices.texture,
			ignoreUIL: !0
		}, _this.shader = shader, _this.mesh.shader = shader
	}, this.upload = async function(needsMesh) {
		_this.preventRender = !0, _geometry.distributeBufferData = !0, await _this.ready(), await _this.vertices.uploadAsync(), await defer(), await _this.random.uploadAsync(), await defer(), _this.mesh && needsMesh && (_this.mesh.upload(), await _geometry.uploadBuffersAsync());
		for (let key in _this.shader.uniforms) {
			let uniform = _this.shader.uniforms[key];
			uniform.value && (uniform.value.uploadAsync ? await uniform.value.uploadAsync() : uniform.value.upload && (uniform.value.upload(), await defer()))
		}
		await _this.wait(100);
		for (let i = 0; i < _this.passes.length; i++) await _this.passes[i].upload();
		_this.preventRender = !1
	}, this.uploadSync = async function(needsMesh) {
		await _this.ready(), _this.customClass && _this.customClass.loaded && await _this.customClass.loaded();
		for (let i = 0; i < 4; i++) _this.update()
	}, this.get("particleCount", (_ => _num)), this.get("textureSize", (_ => _size)), this.get("powerOf2", (_ => Math.pow(2, Math.ceil(Math.log(Math.sqrt(_num)) / Math.log(2)))))
})), Class((function AntimatterAttribute(_data, _components) {
	Inherit(this, Component);
	var _this = this,
		_size = Math.sqrt(_data.length / (_components || 3));
	this.size = _size, this.count = _size * _size, this.buffer = _data, this.texture = new DataTexture(_data, _size, _size, 4 == _components ? Texture.RGBAFormat : Texture.RGBFormat, Texture.FLOAT), this.set("needsUpdate", (function() {
		_this.texture && (_this.texture.needsUpdate = !0)
	})), this.bufferData = function(data, components) {
		_this.buffer = data, components != _components ? (_this.texture.destroy(), _this.texture = new DataTexture(data, _size, _size, 4 == components ? Texture.RGBAFormat : Texture.RGBFormat, Texture.FLOAT)) : (_this.texture.data = data, _this.texture.needsUpdate = !0), _components = components, _data = data
	}, this.upload = function() {
		_this.texture.upload()
	}, this.uploadAsync = function() {
		return _this.texture.distributeTextureData = !0, _this.texture.upload(), _this.texture.uploadAsync()
	}, this.clone = function() {
		return new AntimatterAttribute(_data, _components)
	}, this.onDestroy = function() {
		_this.texture && _this.texture.destroy && _this.texture.destroy()
	}
})), Class((function AntimatterSpawn(_proton, _group, _input) {
	Inherit(this, Component);
	const _this = this;
	var _life, _pass, _velocity, _color, _index = -1,
		_total = _proton.particleCount,
		_releasedA = [],
		_releasedB = [],
		_temp0 = [],
		_temp1 = [],
		_temp2 = [],
		_vec = new Vector3;

	function loop() {
		let count = _releasedA.length;
		for (let i = count - 1; i > -1; i--) {
			let index = _releasedA[i];
			_life.buffer[4 * index + 0] = 0
		}
		_releasedA.length = 0, count && (_life.needsUpdate = !0);
		let hold = _releasedA;
		_releasedA = _releasedB, _releasedB = hold
	}!async function() {
		await async function initPass() {
			let [lifeBuffer, velocityBuffer] = await Promise.all([_proton.antimatter.createFloatArrayAsync(4, !0), _proton.antimatter.createFloatArrayAsync(3, !0)]);
			_life = _this.initClass(AntimatterAttribute, lifeBuffer, 4), _velocity = _this.initClass(AntimatterAttribute, velocityBuffer, 3), _pass = _this.initClass(AntimatterPass, "AntimatterSpawn", {
				unique: _input.prefix,
				uMaxCount: _proton.behavior.uniforms.uMaxCount,
				tAttribs: _proton.behavior.uniforms.tAttribs,
				tLife: {
					value: _life,
					ignoreUIL: !0
				},
				uSetup: {
					value: 1,
					ignoreUIL: !0
				},
				decay: {
					value: 1
				},
				HZ: {
					value: Render.HZ_MULTIPLIER,
					ignoreUIL: !0
				},
				decayRandom: {
					value: new Vector2(1, 1)
				}
			}), ShaderUIL.add(_pass, _group).setLabel("Life Shader"), _pass.onInit = _ => {
				_pass.setUniform("uSetup", 0), _this.canEmit = !0
			}, _proton.behavior.addInput("tSpawn", _pass), _proton.behavior.addInput("tVelocity", _velocity), _proton.shader.addUniforms({
				tLife: {
					value: _pass.output
				}
			}), _proton.antimatter.addPass(_pass, 0), _this.lifeOutput = _pass.output
		}(), _this.startRender(loop)
	}(), this.emit = function(position, velocity, color) {
		if (!_this.canEmit) return;
		if (velocity && position.length != velocity.length) throw "Position and velocity need to be the same length";
		if (color && position.length != color.length) throw "Position and color need to be the same length";
		let count = position.length / 3;
		for (let i = 0; i < count; i++) {
			let index = ++_index;
			_index >= _total && (_index = -1), _life.buffer[4 * index + 0] = 1, _life.buffer[4 * index + 1] = position[3 * i + 0], _life.buffer[4 * index + 2] = position[3 * i + 1], _life.buffer[4 * index + 3] = position[3 * i + 2], velocity && (_velocity.buffer[3 * index + 0] = velocity[3 * i + 0], _velocity.buffer[3 * index + 1] = velocity[3 * i + 1], _velocity.buffer[3 * index + 2] = velocity[3 * i + 2]), color && _color && (_color.buffer[3 * index + 0] = color[3 * i + 0], _color.buffer[3 * index + 1] = color[3 * i + 1], _color.buffer[3 * index + 2] = color[3 * i + 2]), _releasedB.push(index)
		}
		_life.needsUpdate = !0, velocity && (_velocity.needsUpdate = !0), color && _color && (_color.needsUpdate = !0)
	}, this.release = function(pos, count = 1, radius = 0, velocity, color) {
		if (!_this.canEmit) return;
		let positions = _temp0,
			velocities = velocity ? _temp1 : null,
			colors = color ? _temp2 : null,
			radX = Array.isArray(radius) ? radius[0] : radius,
			radY = Array.isArray(radius) ? radius[1] : radius,
			radZ = Array.isArray(radius) ? radius[2] : radius;
		for (let i = 0; i < count; i++) pos.spherical || pos.cylinder ? (pos.spherical && (_vec.set(Math.random(-1, 1, 4), Math.random(-1, 1, 4), Math.random(-1, 1, 4)).normalize().multiplyScalar(radX), positions[3 * i + 0] = pos.x + _vec.x, positions[3 * i + 1] = pos.y + _vec.y, positions[3 * i + 2] = pos.z + _vec.z), pos.cylinder && (_vec.set(Math.random(-1, 1, 4), Math.random(-1, 1, 4), Math.random(-1, 1, 4)).normalize().multiplyScalar(radX), positions[3 * i + 0] = pos.x + _vec.x, positions[3 * i + 1] = pos.y + radY * Math.random(), positions[3 * i + 2] = pos.z + _vec.z)) : (positions[3 * i + 0] = pos.x + Math.random(-1, 1, 4) * radX, positions[3 * i + 1] = pos.y + Math.random(-1, 1, 4) * radY, positions[3 * i + 2] = pos.z + Math.random(-1, 1, 4) * radZ), velocities && (velocities[3 * i + 0] = velocity.x, velocities[3 * i + 1] = velocity.y, velocities[3 * i + 2] = velocity.z), colors && (colors[3 * i + 0] = color.r, colors[3 * i + 1] = color.g, colors[3 * i + 2] = color.b);
		_this.emit(positions, velocities, colors), _temp0.length = 0, _temp1.length = 0, _temp2.length = 0
	}, this.upload = async function() {
		await (_life?.uploadAsync()), await (_velocity?.uploadAsync())
	}, this.useColor = async function(shader) {
		let colorBuffer = await _proton.antimatter.createFloatArrayAsync(3, !0);
		_color = _this.initClass(AntimatterAttribute, colorBuffer, 3), shader || (shader = _proton.shader), shader.addUniforms({
			tColor: {
				value: _color
			}
		}), _proton.behavior.addInput("tColor", _color)
	}, this.applyToShader = function(shader) {
		shader.uniforms.tLife = _proton.shader.uniforms.tLife, _velocity && (shader.uniforms.tVelocity = {
			value: _velocity
		}), _color && (shader.uniforms.tColor = {
			value: _color
		})
	}, this.ready = function() {
		return this.wait("canEmit")
	}, this.get("total", (_ => _total)), this.get("index", (_ => _index)), this.set("index", (i => _index = i)), this.get("pass", (_ => _pass))
})), Class((function AntimatterUtil() {
	Inherit(this, Component);
	var _thread, _this = this,
		_promises = {};

	function createBufferArrayAntimatter(e, id) {
		let size = e.size,
			num = e.num,
			position = new Float32Array(size * size * 3);
		if (window.NativeUtils) NativeUtils.fillBufferUV(position, num, size);
		else {
			let h = .5 / size;
			for (let i = 0; i < num; i++) position[3 * i + 0] = h + i % size / size, position[3 * i + 1] = h + Math.floor(i / size) / size, position[3 * i + 2] = i
		}
		let {
			w: w,
			h: h,
			d: d
		} = e.dimensions, usedDepth = num / (size * size), grid = 0 == w[0] && 0 == w[1] && 0 == h[0] && 0 == h[1];
		var vertices = new Float32Array(size * size * 4);
		if (window.NativeUtils) grid ? NativeUtils.fillBufferGrid(vertices, num, size, usedDepth) : NativeUtils.fillBufferRange(vertices, num, w[0], w[1], h[0], h[1], d[0], d[1]);
		else
			for (let i = 0; i < num; i++) null != e.pointData ? (vertices[4 * i + 0] = e.pointData[3 * i + 0], vertices[4 * i + 1] = e.pointData[3 * i + 1], vertices[4 * i + 2] = e.pointData[3 * i + 2]) : grid ? (vertices[4 * i + 0] = Math.range(i % size, 0, size, -1, 1), vertices[4 * i + 1] = Math.range(i / size, size * usedDepth * usedDepth, 0, -1, 1)) : (vertices[4 * i + 0] = Math.random(w[0], w[1], 10), vertices[4 * i + 1] = Math.random(h[0], h[1], 10), vertices[4 * i + 2] = Math.random(d[0], d[1], 10)), vertices[4 * i + 3] = 1;
		var attribs = new Float32Array(size * size * 4);
		if (window.NativeUtils) NativeUtils.fillBufferRandom(attribs, attribs.length);
		else
			for (let i = 0; i < num; i++) attribs[4 * i + 0] = Math.random(0, 1, 10), attribs[4 * i + 1] = Math.random(0, 1, 10), attribs[4 * i + 2] = Math.random(0, 1, 10), attribs[4 * i + 3] = Math.random(0, 1, 10);
		resolve({
			geometry: position,
			vertices: vertices,
			attribs: attribs,
			usedDepth: usedDepth
		}, id, [position.buffer, vertices.buffer, attribs.buffer])
	}

	function createFloatArrayAntimatter({
		size: size
	}, id) {
		let array = new Float32Array(size);
		resolve({
			array: array
		}, id, [array.buffer])
	}
	this.cache = !0, this.createBufferArray = function(size, num, config = {}, _pointData = null) {
		let key;
		if (_thread || function initThread() {
				_thread = !0, Thread.upload(createBufferArrayAntimatter), Thread.upload(createFloatArrayAntimatter)
			}(), _this.cache && (key = `buffer_${JSON.stringify(config)}_${size}_${num}`, _promises[key])) return _promises[key];
		let promise = Promise.create();
		return key && (_promises[key] = promise), Thread.shared().createBufferArrayAntimatter({
			size: size,
			num: num,
			dimensions: config,
			pointData: _pointData
		}).then((data => {
			data.attribs = new AntimatterAttribute(data.attribs, 4), data.vertices = new AntimatterAttribute(data.vertices, 4);
			let geometry = data.geometry;
			data.geometry = new Geometry, data.geometry.addAttribute("position", new GeometryAttribute(geometry, 3)), data.geometry.addAttribute("random", new GeometryAttribute(data.attribs.buffer, 4)), promise.resolve(data)
		})), promise
	}, this.createFloatArray = function(size, freshCopy) {
		if (freshCopy || !_this.cache) return Thread.shared().createFloatArrayAntimatter({
			size: size
		});
		if (_promises[`float_size${size}`]) return _promises[`float_size${size}`];
		return _promises[`float_size${size}`] = Thread.shared().createFloatArrayAntimatter({
			size: size
		})
	}
}), "static"), Class((function Audio3D(_options) {
	Inherit(this, Component);
	const _this = this;
	var _bindingLabel;
	const _config = require("Audio3DConfig");

	function onVisibility(e) {
		if (!_this.context || !GlobalAudio3D.blurs) return;
		let hasFocus = "focus" === e.type;
		_this.context.visibilityMuted = !hasFocus, (_this.context.playing || _this.flag("wasPlaying")) && (hasFocus ? (_this.flag("wasPlaying", !1), _this.context.play()) : (_this.flag("wasPlaying", !0), _this.context.pause()))
	}! function initContext() {
		_options || (_options = {}), GlobalAudio3D.native ? (window._al && (_this.context = _this.initClass(Audio3DALBuffer)), window.AVFSound && (_this.context = _this.initClass(Audio3DNBuffer, "AVF")), window.MPAudio && (_options.stream ? _this.context = _this.initClass(Audio3DNBuffer, "MP") : _this.context = _this.initClass(Audio3DNBuffer, "GVR"))) : _options.fallback || GlobalAudio3D.fallback ? _this.context = _this.initClass(Audio3DFallback) : _options.positional && GlobalAudio3D.resonanceAudio ? _this.context = _this.initClass(Audio3DResonanceAudio) : _options.simpleBuffer && "ie" !== Device.system.browser ? _this.context = _this.initClass(Audio3DWASimpleBuffer) : !0 !== _options.stream && "ie" !== Device.system.browser ? _this.context = _this.initClass(Audio3DWABuffer) : _this.context = _this.initClass(Audio3DWAStream)
	}(),
	function initInterface() {
		for (let command of _config.commands) _this[command] = _this.context[command];
		for (let setter of _config.setters) _this.set(setter, (e => {
			_this.context && (_this.context[setter] = e)
		}));
		for (let getter of _config.getters) _this.get(getter, (_ => {
			if (_this.context) return _this.context[getter]
		}))
	}(),
	function addHandlers() {
		_this.events.sub(_this.context, Events.END, (e => _this.events.fire(Events.END, e))), _this.events.sub(_this.context, Events.LOADED, (e => _this.events.fire(Events.LOADED, e))), _this.events.sub(Events.VISIBILITY, onVisibility)
	}(),
	function initOptions() {
		if (_options) {
			for (let option in _options) _config.setters.includes(option) && (_this.context[option] = _options[option]);
			_options.label && (_bindingLabel = GlobalAudio3D.getLabelState(_options.label).bind("mute", (async bool => {
				if (!_this.context) return _bindingLabel.destroy();
				_this.context.muted = bool
			})))
		}
	}(), this.tween = function() {
		return tween(_this, ...arguments)
	}, this.clone = function() {
		return new Audio3D(_options)
	}, this.onDestroy = function() {
		_this.context.unload(), _bindingLabel?.destroy?.()
	}
})), Class((function Audio3DLayer(...args) {
	Inherit(this, Component);
	const _this = this;
	var _group, _input, _mesh, _audio3D, _config, _key, _autoplay, _volume = {
			value: 0
		},
		_captionsSetup = "undefined" != typeof CaptionsController;
	async function fadeIn() {
		_this.flag("init") || await _this.wait("init");
		let captionsPath = _config.get("captions");
		_captionsSetup && captionsPath && _config.get("enableCaptions") && await async function loadCaptions(path) {
			await CaptionsController.instance().load(path)
		}(captionsPath);
		let delay = _config.getNumber("delay");
		if (delay && await _this.wait(delay), _audio3D.play(), _captionsSetup && captionsPath && _config.get("enableCaptions") && toggleCaptions(!0), 0 != _config.getNumber("fadeInTime")) {
			_volume.value = 0, _audio3D.volume = 0;
			let volumeTween = tween(_volume, {
				value: _config.getNumber("volume")
			}, _config.getNumber("fadeInTime"), "easeOutSine");
			volumeTween.onUpdate((() => {
				_audio3D.volume = _volume.value
			})), await volumeTween.promise()
		}
	}
	async function fadeOut() {
		if (_this.flag("init") || await _this.wait("init"), _captionsSetup && _config.get("captions") && _config.get("enableCaptions") && toggleCaptions(!1), 0 != _config.getNumber("fadeOutTime")) {
			_volume.value = _config.getNumber("volume");
			let volumeTween = tween(_volume, {
				value: 0
			}, _config.getNumber("fadeOutTime"), "easeOutSine", 0);
			volumeTween.onUpdate((() => {
				_audio3D.volume = _volume.value
			})), volumeTween.onComplete((() => {
				_audio3D.context && _audio3D.context.stream && Audio3DWA.getActiveStreamCount(_audio3D.context.stream) > 1 || _audio3D.pause()
			})), await volumeTween.promise()
		} else {
			if (_audio3D.context && _audio3D.context.stream && Audio3DWA.getActiveStreamCount(_audio3D.context.stream) > 1) return;
			_audio3D.pause()
		}
	}

	function toggleCaptions(bool = !1) {
		bool ? CaptionsController.instance().start() : CaptionsController.instance().stop()
	}! function parseArgs() {
		args.forEach((arg => {
			switch (Utils.getConstructorName(arg)) {
				case "InputUILConfig":
					_input = arg;
					break;
				case "UILFolder":
					_group = arg;
					break;
				case "Mesh":
					_mesh = arg, _this.parent = _mesh, _mesh.audioCount ? _mesh.audioCount++ : _mesh.audioCount = 1, _mesh.findSound || (_mesh.shader.visible = !1, _mesh.findSound = async function(key) {
						if (!Array.isArray(_mesh.scriptClass)) return _mesh.scriptClass;
						for (let scriptClass of _mesh.scriptClass)
							if (await scriptClass.key == key) return scriptClass
					})
			}
		})), _this.visible = _input.get("visible")
	}(),
	function initConfig() {
		let config = InputUIL.create(_input.prefix + "audio3dLayer" + (_mesh ? _mesh.audioCount : ""), _group);
		config.add("path").add("key").add("label").addToggle("autoplay", !1).addToggle("loop", !1).addToggle("stream", !1).addToggle("positional", !1).addNumber("volume", 1).addNumber("rolloff", 1).addNumber("fadeInTime", 0).addNumber("fadeOutTime", 0).addNumber("delay", 0).addNumber("gain", 1).setLabel("Audio"), config.addButton("preview", {
			label: "Preview",
			actions: [{
				title: "Play",
				callback: fadeIn
			}, {
				title: "Stop",
				callback: fadeOut
			}]
		}), _captionsSetup && config.add("captions").addToggle("enableCaptions", !1), config.onUpdate = key => {
			if (_audio3D) switch (key) {
				case "autoplay":
				case "loop":
					_audio3D[key] = _config.get(key);
					break;
				case "volume":
				case "rolloff":
				case "gain":
					_audio3D[key] = _config.getNumber(key)
			}
		}, _config = config
	}(), async function initAudio() {
		GlobalAudio3D.initialized || await GlobalAudio3D.interacted, _key = _config.get("key"), _autoplay = _config.get("autoplay");
		let path = _config.get("path");
		if (path) {
			_audio3D = _this.initClass(Audio3D, {
				src: path,
				autoplay: !1,
				volume: _config.getNumber("volume"),
				loop: _config.get("loop"),
				stream: _config.get("stream"),
				positional: _config.get("positional"),
				label: _config.get("label"),
				rolloff: _config.getNumber("rolloff")
			});
			let gain = _config.get("gain");
			"string" == typeof gain && (gain = Number(gain)), isFinite(gain) && (_audio3D.gain = gain), _mesh && _mesh.add(_audio3D.group), _this.flag("init", !0)
		}
	}(), _this.startRender((() => {})), this.get("audio", (() => _audio3D)), this.play = async function() {
		await fadeIn()
	}, this.stop = async function() {
		await fadeOut()
	}, this.get("key", (async () => (await _this.wait("init"), _key))), _this.set("volume", (volume => {
		_audio3D.volume = volume
	})), _this.set("rolloff", (rolloff => {
		_audio3D.rolloff = rolloff
	})), this.onVisible = async function() {
		_this.flag("init") || await _this.wait("init"), _audio3D && _autoplay && await fadeIn()
	}, this.onInvisible = async function() {
		_this.flag("init") || await _this.wait("init"), _audio3D && await fadeOut()
	}
})), Class((function GlobalAudio3D() {
	Inherit(this, Component);
	const _this = this;
	var _volume = 1,
		_muted = !1,
		_blurs = !0,
		_playbackRate = 1,
		_poolSize = 3,
		_interacted = Promise.create(),
		_labelStates = {};

	function initInteraction(e) {
		_this.initialized || (e && e.preventDefault && e.preventDefault(), document.removeEventListener(Device.mobile ? "touchend" : "mouseup", initInteraction, {
			passive: !1
		}), "undefined" != typeof XRDeviceManager && _this.events.unsub(XRDeviceManager.SESSION_START, initInteraction), Audio3DWA.createPool(_poolSize), Audio3DWA.purge(), _this.initialized = !0, _this.events.fire(Events.READY), _interacted.resolve())
	}
	this.native = !1, this.TRANSPARENT = 0, this.ACOUSTIC_CEILING_TILES = 1, this.BRICK_BARE = 2, this.BRICK_PAINTED = 3, this.CONCRETE_BLOCK_COARSE = 4, this.CONCRETE_BLOCK_PAINTED = 5, this.CURTAIN_HEAVY = 6, this.FIBER_GLASS_INSULATION = 7, this.GLASS_THICK = 8, this.GLASS_THIN = 9, this.GRASS = 10, this.LINOLEUM_ON_CONCRETE = 11, this.MARBLE = 12, this.METAL = 13, this.PARQUET_ON_CONCRETE = 14, this.PLASTER_ROUGH = 15, this.PLASTER_SMOOTH = 16, this.PLYWOOD_PANEL = 17, this.POLISHED_CONCRETE_OR_TILE = 18, this.SHEET_ROCK = 19, this.WATER_OR_ICE_SURFACE = 20, this.WOOD_CEILING = 21, this.WOOD_PANEL = 22, this.LOW = 0, this.MED = 1, this.HIGH = 2, this.RESONANCE_AUDIO = "resonance_audio", this.quality = this.HIGH, async function() {
		await defer(), window.AURA && function initNative() {
				_this.native = !0, !window._al || Audio3DAL.init();
				_this.initialized = !0, _interacted.resolve()
			}(),
			function initDebug() {
				Hydra.LOCAL && Utils.query("audioDebug") && (AudioNode.prototype.connect = (func = AudioNode.prototype.connect, function() {
					var target = arguments[0];
					return (this.outputs || (this.outputs = [])).push(arguments[0]), (target.inputs || (target.inputs = [])).push(this), func.apply(this, arguments)
				}));
				var func
			}()
	}(), this.set("volume", (v => {
		_volume = v, _this.events.fire(Events.UPDATE, {
			volume: _volume
		})
	})), this.get("volume", (_ => _volume)), this.set("muted", (v => {
		_muted = v, _this.events.fire(Events.UPDATE, {
			muted: _muted
		})
	})), this.get("muted", (_ => _muted)), this.set("blurs", (v => {
		_blurs = v, _this.events.fire(Events.UPDATE, {
			blurs: _blurs
		})
	})), this.get("blurs", (_ => _blurs)), this.set("playbackRate", (v => {
		_playbackRate = v, _this.events.fire(Events.UPDATE, {
			playbackRate: _playbackRate
		})
	})), this.get("playbackRate", (_ => _playbackRate)), this.get("pool", (_ => _poolSize)), this.set("pool", (n => {
		_poolSize = n
	})), this.get("interacted", (_ => _interacted)), this.get("fallback", (_ => "ie" === Device.system.browser && Device.system.browserVersion <= 11 || "ios" === Device.system.os && Device.system.version >= 13 && Device.system.version < 13.6)), this.setup = function(type = "default") {
		Utils.query("muted") && Hydra.LOCAL && (_muted = !0), document.addEventListener(Device.mobile ? "touchend" : "mouseup", initInteraction, {
			passive: !1
		}), "undefined" != typeof XRDeviceManager && _this.events.sub(XRDeviceManager.SESSION_START, initInteraction), "resonance_audio" != type || _this.native || _this.fallback || (_this.resonanceAudio = !0, AssetLoader.loadAssets(["assets/js/lib/_resonance/resonance-audio.min.js"]))
	}, this.ready = function() {
		return _this.wait(_this, "initialized")
	}, this.enableRoom = function(bool) {
		window.GVRAudio && GVRAudio.enableRoom(bool)
	}, this.setRoomProperties = function(x, y, z, wall, ceiling, floor) {
		window.GVRAudio && GVRAudio.setRoomProperties(x, y, z, wall, ceiling, floor)
	}, this.setRoomReverbAdjustments = function(gain, time, brightness) {
		window.GVRAudio && GVRAudio.setRoomReverbAdjustments(gain, time, brightness)
	}, this.muteLabel = function(label) {
		_this.getLabelState(label).set("mute", !0)
	}, this.unmuteLabel = function(label) {
		_this.getLabelState(label).set("mute", !1)
	}, this.getLabelState = function(label) {
		return _labelStates[label] || (_labelStates[label] = AppState.createLocal()), _labelStates[label]
	}
}), "static"), Class((function SFXController() {
	Inherit(this, Component);
	const _this = this;
	var _pool, _srcMap = {},
		_preloaded = {},
		_activeSounds = {};

	function init() {
		! function initPool() {
			_pool = _this.initClass(ObjectPool);
			let sfx = [];
			for (; sfx.length < 8;) sfx.push(generate());
			_pool.insert(sfx)
		}(), defer((() => {
			let wasMuted = _this.muted;
			_this.initialized = !0, wasMuted !== _this.muted && _this.events.fire(_this.muted ? SFXController.AUDIO_MUTED : SFXController.AUDIO_UNMUTED)
		}))
	}

	function generate() {
		return _this.initClass(Audio3D, {
			stream: _this.USE_STREAM,
			simpleBuffer: !_this.USE_STREAM
		})
	}

	function handleToggle() {
		let nextMuted = !GlobalAudio3D.muted;
		_this.initialized || (nextMuted = !1), nextMuted !== GlobalAudio3D.muted && (GlobalAudio3D.muted = nextMuted), Storage.set("muted", nextMuted), _this.initialized && _this.events.fire(nextMuted ? SFXController.AUDIO_MUTED : SFXController.AUDIO_UNMUTED)
	}

	function handlePlayRequest({
		name: name,
		...options
	}) {
		_this.play(name, options)
	}

	function handleStopRequest({
		name: name,
		...options
	}) {
		_this.stop(name, options)
	}!async function() {
		_this.USE_STREAM = !0;
		let muted = !0 === Storage.get("muted");
		muted !== GlobalAudio3D.muted && (GlobalAudio3D.muted = muted), GlobalAudio3D.initialized ? init() : _this.events.sub(GlobalAudio3D, Events.READY, init),
			function addListeners() {
				_this.events.sub(SFXController.TOGGLE_AUDIO, handleToggle), _this.events.sub(SFXController.PLAY_SFX, handlePlayRequest), _this.events.sub(SFXController.STOP_SFX, handleStopRequest)
			}()
	}(), this.registerSounds = function(srcMap) {
		_srcMap = {
			..._srcMap,
			...srcMap
		}, Object.keys(_srcMap).forEach((name => {
			_activeSounds[name] = []
		}))
	}, this.registerSound = function(name, src) {
		_srcMap[name] = src, _activeSounds[name] = []
	}, this.preload = async function(name) {
		await _this.wait(_this, "initialized");
		let src = _srcMap[name];
		if (!src) return console.warn(`missing sound '${name}'`);
		let sound = _preloaded[name];
		return sound || (sound = _preloaded[name] = generate()), sound.src = src, sound.load()
	}, this.play = async function(name, options = {}) {
		if (!_this.initialized) {
			let timeout = options.timeout || 1e3;
			if (timeout < 0) return;
			if (await Promise.timeout(_this.wait(_this, "initialized"), timeout), !_this.initialized) return
		}
		let sound, preloaded = _preloaded[name];
		if (preloaded && (_this.USE_STREAM || _activeSounds[name].includes(preloaded) ? sound = preloaded : preloaded = void 0), !sound) {
			let src = _srcMap[name];
			if (!src) return console.warn(`missing sound '${name}'`);
			sound = _pool.get(), null === sound && (sound = generate()), sound.src = src
		}
		if (options.onBeforePlay) {
			if (!1 === await options.onBeforePlay(sound)) return void(preloaded || _pool.put(sound))
		}
		_activeSounds[name].push(sound);
		let promise = Promise.create();
		return _this.events.sub(sound, Events.END, (function onSoundEnd() {
			_this.events.unsub(sound, Events.END, onSoundEnd), preloaded || _pool.put(sound), _activeSounds[name].remove(sound), promise.resolve()
		})), sound.play(), promise
	}, _this.stop = function(name) {
		let sound = _activeSounds[name][0];
		sound && sound.stop()
	}, _this.get("muted", (() => !_this.initialized || GlobalAudio3D.muted)), _this.get("preloaded", (() => _preloaded)), _this.get("activeSounds", (() => _activeSounds))
}), "singleton", (() => {
	SFXController.AUDIO_MUTED = "sfx_muted", SFXController.AUDIO_UNMUTED = "sfx_unmuted", SFXController.TOGGLE_AUDIO = "sfx_toggle_mute", SFXController.PLAY_SFX = "SFXAssetsController.PLAY_SFX", SFXController.STOP_SFX = "SFXAssetsController.STOP_SFX"
})), Module((function Audio3DConfig() {
	this.exports = {
		getters: ["playbackRate", "loop", "autoplay", "volume", "rolloff", "preload", "visibilityMuted", "selfDestruct", "src", "frequency", "group", "duration", "currentTime", "activity", "playing", "filter", "panner", "delay", "progress", "reverb", "gain", "sourceWidth", "directivitySharpness", "directivityAlpha"],
		setters: ["playbackRate", "loop", "autoplay", "volume", "rolloff", "preload", "visibilityMuted", "selfDestruct", "src", "gain", "sourceWidth", "directivitySharpness", "directivityAlpha"],
		commands: ["play", "pause", "stop", "seek", "load", "unload", "convolve"]
	}
})), Module((function Audio3DSilence() {
	this.exports = "data:audio/mpeg;base64,//uQxAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAADAAAGhgBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr///////////////////////////////////////////8AAAA5TEFNRTMuOThyAc0AAAAAAAAAABSAJAiqQgAAgAAABobxtI73AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//uQxAACFEII9ACZ/sJZwWEoEb8w/////N//////JcxjHjf+7/v/H2PzCCFAiDtGeyBCIx7bJJ1mmEEMy6g8mm2c8nrGABB4h2Mkmn//4z/73u773R5qHHu/j/w7Kxkzh5lWRWdsifCkNAnY9Zc1HvDAhjhSHdFkHFzLmabt/AQxSg2wwzLhHIJOBnAWwVY4zrhIYhhc2kvhYDfQ4hDi2Gmh5KyFn8EcGIrHAngNgIwVIEMf5bzbAiTRoAD///8z/KVhkkWEle6IX+d/z4fvH3BShK1e5kmjkCMoxVmXhd4ROlTKo3iipasvTilY21q19ta30/v/0/idPX1v8PNxJL6ramnOVsdvMv2akO0iSYIzdJFirtzWXCZicS9vHqvSKyqm5XJBdqBwPxyfJdykhWTZ0G0ZyTZGpLKxsNwwoRhsx3tZfhwmeOBVISm3impAC/IT/8hP/EKEM1KMdVdVKM2rHV4x7HVXZvbVVKN/qq8CiV9VL9jjH/6l6qf7MBCjZmOqsAibjcP+qqqv0oxqpa/NVW286hPo1nz2L/h8+jXt//uSxCmDU2IK/ECN98KKtE5IYzNoCfbw+u9i5r8PoadUMFPKqWL4LK3T/LCraMSHGkW4bpLXR/E6LlHOVQxmslKVJ8IULktMN06N0FKCpHCoYsjC4F+Z0NVqdNFoGSTjSiyjzLdnZ2fNqTi2eHKONONKLMPMKLONKLMPQRJGlFxZRoKcJFAYEeIFiRQkUWUeYfef//Ko04soswso40UJAgMw8wosososy0EalnZyjQUGBRQGIFggOWUacWUeYmuadrZziQKKEgQsQLAhQkUJAgMQDghltLO1onp0cpkNInSFMqlYeSEJ5AHsqFdOwy1DA2sRmRJKxdKRfLhfLw5BzUxBTUUzLjk4LjJVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk4LjJVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7ksRRA8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU="
})), Class((function Audio3DBase() {
	Inherit(this, Object3D);
	const _this = this;
	var _quaternion, _euler, _position = new Vector3;
	this.audioPosition = function() {
		return _position = _this.group._parent ? _this.group.getWorldPosition() : Audio3DWA.getCamera().getWorldPosition()
	}, this.audioPositionInverse = function() {
		return _position = _this.audioPosition(), _this.group._parent && _position.applyMatrix4(Audio3DWA.getCamera().matrixWorldInverse), _position
	}, this.audioOrientationInverse = function() {
		return _quaternion || (_quaternion = new Quaternion, _euler = new Euler), _this.group.parent ? (_this.group.getWorldQuaternion(_quaternion), _euler.setFromQuaternion(_quaternion)) : _euler.set(0, 0, 0), _euler
	}, this.listenerPosition = function() {
		return _this.group._parent && (_position = Audio3DWA.getCamera().getWorldPosition()), _position
	}
})), Class((function Audio3DFallback() {
	Inherit(this, Audio3DBase);
	const _this = this;
	var _stream, _options = {},
		_settings = {
			playing: !1,
			loaded: !1,
			loading: !1
		},
		_currentTime = 0;

	function initOptions() {
		_options.loop = _options.loop || !1, _options.autoplay = _options.autoplay || !1, _options.volume = void 0 === _options.volume ? 1 : _options.volume, _options.playbackRate = _options.playbackRate || 1, _options.preload = _options.preload || !1, _options.muted = _options.muted || !1, _options.rolloff = _options.rolloff || 1, _options.globalMuted = GlobalAudio3D.muted, _options.globalVolume = GlobalAudio3D.volume, _options.globalPlaybackRate = GlobalAudio3D.playbackRate
	}

	function update(e) {
		_options.globalMuted = GlobalAudio3D.muted, _options.globalVolume = GlobalAudio3D.volume, _options.globalPlaybackRate = GlobalAudio3D.playbackRate, _this.volume = _this.volume, _this.playbackRate = _this.playbackRate
	}

	function ready() {
		initOptions(), (_settings.autoplay || _options.autoplay) && _this.play()
	}
	initOptions(),
		function addListeners() {
			_this.events.sub(GlobalAudio3D, Events.UPDATE, update), _this.events.sub(GlobalAudio3D, Events.READY, ready)
		}(), this.set("src", (src => {
			_this.unload(),
				function destroyStream() {
					_stream && _stream.element && GlobalAudio3D.initialized && (Audio3DWA.unloadStream(_settings.src), _stream = null)
				}(), _settings.src = src
		})), this.get("src", (_ => _settings.src)), this.set("volume", (v => (v = Math.clamp(v, 0, 1), _options.volume = v, _stream && _stream.element && (_stream.element.volume = _options.muted || _options.globalMuted ? 0 : v * Math.clamp(_options.globalVolume)), _options.volume))), this.get("volume", (_ => _options.volume)), this.set("loop", (l => (l = !!l, _stream && (_stream.element.loop = l), _options.loop = l))), this.get("loop", (_ => _options.loop)), this.set("autoplay", (autoplay => {
			_options.autoplay = autoplay
		})), this.get("autoplay", (_ => _options.autoplay)), this.set("preload", (preload => {
			_options.preload = preload
		})), this.get("preload", (_ => _options.preload)), this.get("ready", (_ => _this.ready)), this.get("frequency", (_ => 0)), this.get("activity", (_ => 0)), this.get("playing", (_ => _settings.playing)), this.set("rolloff", (r => {})), this.get("rolloff", (_ => 0)), this.get("loaded", (_ => !0)), this.get("duration", (_ => _stream ? _stream.element.duration : 0)), this.get("currentTime", (_ => _stream ? _stream.element.currentTime : 0)), this.set("currentTime", (t => {
			_this.seek(t)
		})), this.get("progress", (_ => _this.currentTime / _this.duration)), this.set("playbackRate", (v => {
			_options.playbackRate = v, _stream && _stream.element && (_stream.element.playbackRate = v * _options.globalPlaybackRate)
		})), this.get("playbackRate", (_ => _options.playbackRate)), this.get("visibilityMuted", (_ => _options.muted)), this.set("visibilityMuted", (muted => {
			!0 === muted ? _options.muteState = _options.muted : void 0 !== _options.muteState && (muted = _options.muteState, delete _options.muteState), _options.muted !== muted && (_options.muted = muted, _this.volume = _this.volume)
		})), this.get("muted", (_ => _options.muted)), this.set("muted", (muted => {
			_options.muted = muted, _this.volume = _this.volume
		})), this.play = function() {
			if (_settings.autoplay = !0, _settings.src && GlobalAudio3D.initialized && (function createStream() {
					!_stream && GlobalAudio3D.initialized && ((_stream = Audio3DWA.loadStream(_settings.src)).element.onended = _ => {
						_this.unload(), _this.events.fire(Events.END)
					}, _this.loop = _this.loop, _this.volume = _this.volume, _this.rolloff = _this.rolloff, _this.muted = _this.muted, (_options.autoplay || _settings.autoplay) && _this.play())
				}(), !0 !== _settings.playing && (_settings.playing = !0, _this.volume = _options.volume, _stream))) {
				_stream.element.playbackRate = _options.playbackRate, _stream.element.play();
				try {
					_stream.element.currentTime = _currentTime
				} catch (e) {}
			}
		}, this.pause = function() {
			if (_settings.autoplay = !1, _stream && GlobalAudio3D.initialized && _settings.src && _settings.playing) {
				try {
					_currentTime = _stream.element.currentTime
				} catch (e) {}
				_stream.element.pause(), _settings.playing = !1
			}
		}, this.stop = function() {
			if (_settings.autoplay = !1, _settings.src && GlobalAudio3D.initialized && (_currentTime = 0, _settings.playing = !1, _stream && _stream.element && _stream.element.stop)) {
				_stream.element.stop();
				try {
					_stream.element.currentTime = 0
				} catch (e) {}
			}
		}, this.seek = function(time) {
			if (_settings.src && (_currentTime = time, _stream && _stream.element)) try {
				_stream.element.currentTime = time
			} catch (e) {}
		}, this.load = function() {
			return !0
		}, this.unload = function() {
			_settings.autoplay = !1, _stream && GlobalAudio3D.initialized && _settings.src && _this.stop()
		}, this.convolve = function(src) {}
})), Class((function Audio3DN() {
	Inherit(this, Component);
	const _this = this;
	var _init;

	function loop() {
		window.GVRAudio && (GVRAudio.setHeadPos(World.CAMERA.position.x, World.CAMERA.position.y, World.CAMERA.position.z), GVRAudio.setHeadRotation(World.CAMERA.quaternion.x, World.CAMERA.quaternion.y, World.CAMERA.quaternion.z, World.CAMERA.quaternion.w))
	}
	this.audioContext = function() {
		window.GVRAudio && !_init && (GVRAudio.initEngine(GlobalAudio3D.quality), _init = !0, _this.startRender(loop))
	}
}), "static"), Class((function Audio3DNBuffer(_backingType) {
	Inherit(this, Audio3DBase);
	const _this = this;
	var _backing, _options = {},
		_settings = {
			playing: !1,
			loaded: !1,
			loading: !1
		},
		_currentTime = 0;

	function loop() {
		let pos, orientation;
		switch (_backingType) {
			case "AVF":
				pos = _this.audioPositionInverse(), orientation = _this.audioOrientationInverse();
				break;
			case "GVR":
				pos = _this.audioPosition()
		}
		pos && _backing && (_backing.setPos(pos.x, pos.y, pos.z), orientation && _backing.setOrientation(orientation.x, orientation.y, orientation.z, 0, 1, 0))
	}

	function update(e) {
		_options.globalMuted = GlobalAudio3D.muted, _options.globalVolume = GlobalAudio3D.volume, _options.globalPlaybackRate = GlobalAudio3D.playbackRate, _this.volume = _this.volume, _this.playbackRate = _this.playbackRate
	}
	Audio3DN.audioContext(),
		function initOptions() {
			_options.loop = _options.loop || !1, _options.autoplay = _options.autoplay || !1, _options.volume = void 0 === _options.volume ? 1 : _options.volume, _options.playbackRate = _options.playbackRate || 1, _options.preload = _options.preload || !1, _options.muted = _options.muted || !1, _options.rolloff = _options.rolloff || 1, _options.selfDestruct = _options.selfDestruct || !1, _options.globalMuted = GlobalAudio3D.muted, _options.globalVolume = GlobalAudio3D.volume, _options.globalPlaybackRate = GlobalAudio3D.playbackRate
		}(),
		function addListeners() {
			_this.events.sub(GlobalAudio3D, Events.UPDATE, update)
		}(), this.set("src", (src => {
			_this.stop(), _settings.src = src, defer((_ => {
				if (_options.autoplay) return _this.play();
				_options.preload && _this.load(), _this.volume = _options.volume
			}))
		})), this.get("src", (_ => _settings.src)), this.get("selfDestruct", (_ => _options.selfDestruct)), this.set("selfDestruct", (d => {
			_options.selfDestruct = d
		})), this.set("volume", (v => (_options.volume = v, _backing && _backing.volume(v), _options.volume))), this.get("volume", (_ => _options.volume)), this.set("loop", (l => (l = !!l, _backing && _backing.loop(l), _options.loop = l))), this.get("loop", (_ => _options.loop)), this.set("autoplay", (autoplay => {
			_options.autoplay = autoplay
		})), this.get("autoplay", (_ => _options.autoplay)), this.set("preload", (preload => {
			_options.preload = preload
		})), this.get("preload", (_ => _options.preload)), this.get("ready", (_ => _this.ready)), this.get("frequency", (_ => [])), this.get("activity", (_ => 0)), this.get("playing", (_ => _settings.playing)), this.set("rolloff", (r => {
			_options.rolloff = r
		})), this.get("rolloff", (_ => _options.rolloff)), this.get("loaded", (_ => _settings.loaded)), this.get("currentTime", (_ => _currentTime)), this.set("currentTime", (t => {
			_this.seek(t)
		})), this.get("duration", (_ => 0)), this.get("progress", (_ => _this.currentTime / _this.duration)), this.get("visibilityMuted", (_ => _options.muted)), this.set("visibilityMuted", (muted => {
			!0 === muted ? _options.muteState = _options.muted : void 0 !== _options.muteState && (muted = _options.muteState, delete _options.muteState), _options.muted !== muted && (_options.muted = muted, _this.volume = _this.volume)
		})), this.get("muted", (_ => _options.muted)), this.set("muted", (muted => {
			_options.muted = muted, _this.volume = _this.volume
		})), this.set("playbackRate", (v => {
			_options.playbackRate = v, _backing && _backing.setRate(v)
		})), this.get("playbackRate", (_ => _options.playbackRate)), this.play = async function() {
			_settings.autoplay = !0, _settings.src && (_settings.loadingPlay = !0, _settings.loading || _settings.playing || (_settings.loaded || await _this.load(), _settings.playing = !0, _this.volume = _options.volume, _this.playbackRate = _options.playbackRate, _this.startRender(loop), _backing.seek(_currentTime), _backing.play(_options.loop)))
		}, this.pause = function() {
			_settings.autoplay = !1, _settings.src && _settings.loaded && _settings.playing && (_currentTime = _currentTime, _settings.loadingPlay = !1, _settings.playing = !1, _backing && _backing.pause(), _this.stopRender(loop))
		}, this.stop = function() {
			_settings.autoplay = !1, _settings.loaded && (_currentTime = 0, _backing && _backing.stop(), _settings.playing = !1, _this.stopRender(loop))
		}, this.seek = function(time) {
			if (_settings.src) {
				_settings.loadingPlay = !1;
				var wasPlaying = _settings.playing;
				_currentTime = time, _backing && (_backing.seek(_currentTime), wasPlaying && _backing.play())
			}
		}, this.load = async function() {
			_settings.src && (_settings.loading || _settings.loaded || (_settings.loading = !0, _this.ready = await
				function createBuffer() {
					let promise = Promise.create(),
						url = _settings.src;
					switch (url.includes("http") || (url = AURA.rootPath + url), _backingType) {
						case "AVF":
							_backing = AVFSound.create(url);
							break;
						case "MP":
							_backing = new MPAudio(url);
							break;
						case "GVR":
							_backing = new GVRAudio(url)
					}
					return _backing.onComplete = _ => {
						_this.events.fire(Events.END), _options.selfDestruct && _this.parent.destroy()
					}, _backing.onUpdate = t => {
						_currentTime = t
					}, _backing.onReady = promise.resolve, promise
				}(), _this.events.fire(Events.LOADED), _settings.loadingPlay = !1, _settings.loading = !1, _settings.loaded = !0))
		}, this.unload = function() {
			_settings.src && _settings.loaded && (_this.stop(), _backing.destroy())
		}, this.convolve = async function(src) {}
})), Class((function Audio3DResonance() {
	Inherit(this, Component);
	const _this = this;
	require("Audio3DSilence");
	var _context, _resonance, _orientation, _cam;

	function loop() {
		(_cam = Audio3DWA.getCamera()) && _context && _context.listener && (_orientation.set(0, 0, -1).applyQuaternion(_cam.quaternion), _resonance.setListenerOrientation(_orientation.x, _orientation.y, _orientation.z, _cam.up.x, _cam.up.y, _cam.up.z), _resonance.setListenerPosition(_cam.position.x, _cam.position.y, _cam.position.z))
	}
	this.createAudioInput = async function(url) {
		_context || await _this.resonance();
		let audioElementSource, stream = {};
		stream.element = Audio3DWA.getElement(), stream.element.crossOrigin = "anonymous", stream.element.src = url, audioElementSource = stream.element.mediaSrc ? stream.element.mediaSrc : _context.createMediaElementSource(stream.element), stream.element.mediaSrc = audioElementSource;
		let source = _resonance.createSource();
		return audioElementSource.connect(source.input), stream.source = source, stream
	}, this.unloadStream = function(stream) {
		stream.element.mediaSrc.disconnect(stream.source.input), Audio3DWA.putElement(stream.element)
	}, this.resonance = async function(refresh) {
		return window.ResonanceAudio || await AssetLoader.waitForLib("ResonanceAudio"), await GlobalAudio3D.ready(), _context && !refresh || (_context && (_context.close(), _context = null), _orientation = new Vector3, "running" !== (_context = Audio3DWA.audioContext()).state && _context.resume(), (_resonance = new ResonanceAudio(_context)).output.connect(_context.destination), Render.start(loop)), _resonance
	}, this.setRoomProperties = function(dimensions, materials) {
		_resonance.setRoomProperties(dimensions, materials)
	}, this.get("initialized", (() => !!_context))
}), "static"), Class((function Audio3DResonanceAudio() {
	Inherit(this, Audio3DBase);
	const _this = this;
	var _stream, _options = {},
		_settings = {
			playing: !1,
			loaded: !1,
			loading: !1
		},
		_orientation = new Vector3,
		_currentTime = 0;

	function loop() {
		let pos;
		if (pos = _this.audioPosition(), pos && _stream) {
			_stream.source.setPosition(pos.x, pos.y, pos.z);
			let euler = _this.audioOrientationInverse();
			_orientation.set(0, 0, -1).applyEuler(euler), _stream.source.setOrientation(_orientation.x, _orientation.y, _orientation.z, _this.group.up.x, _this.group.up.y, _this.group.up.z)
		}
	}

	function update(e) {
		_options.globalMuted = GlobalAudio3D.muted, _options.globalVolume = GlobalAudio3D.volume, _options.globalPlaybackRate = GlobalAudio3D.playbackRate, _this.volume = _this.volume, _this.gain = _this.gain, _this.playbackRate = _this.playbackRate
	}

	function handleEnded() {
		_this.unload(), _this.events.fire(Events.END)
	}!async function() {
		Audio3DResonance.initialized || await Audio3DResonance.resonance(),
			function initOptions() {
				_options.loop = _options.loop || !1, _options.autoplay = _options.autoplay || !1, _options.volume = void 0 === _options.volume ? 1 : _options.volume, _options.playbackRate = _options.playbackRate || 1, _options.preload = _options.preload || !1, _options.muted = _options.muted || !1, _options.rolloff = _options.rolloff || 1, _options.selfDestruct = _options.selfDestruct || !1, _options.globalMuted = GlobalAudio3D.muted, _options.globalVolume = GlobalAudio3D.volume, _options.globalPlaybackRate = GlobalAudio3D.playbackRate, _options.gain = "number" == typeof _options.gain ? _options.gain : ResonanceAudio.Utils.DEFAULT_SOURCE_GAIN, _options.sourceWidth = "number" == typeof _options.sourceWidth ? _options.sourceWidth : ResonanceAudio.Utils.DEFAULT_SOURCE_WIDTH, _options.directivitySharpness = "number" == typeof _options.directivitySharpness ? _options.directivitySharpness : ResonanceAudio.Utils.DEFAULT_DIRECTIVITY_SHARPNESS, _options.directivityAlpha = "number" == typeof _options.directivityAlpha ? _options.directivityAlpha : ResonanceAudio.Utils.DEFAULT_DIRECTIVITY_ALPHA
			}(),
			function addListeners() {
				_this.events.sub(GlobalAudio3D, Events.UPDATE, update)
			}()
	}(), this.set("src", (src => {
		_this.stop(), _settings.src = src, defer((_ => {
			if (_options.autoplay) return _this.play();
			_options.preload && _this.load(), _this.volume = _this.volume, _this.gain = _this.gain
		}))
	})), this.get("src", (_ => _settings.src)), this.get("selfDestruct", (_ => _options.selfDestruct)), this.set("selfDestruct", (d => {
		_options.selfDestruct = d
	})), this.set("volume", (v => (_options.volume = v, _stream && (_stream.element.volume = _options.muted || _options.globalMuted ? 0 : v * Math.clamp(_options.globalVolume)), _options.volume))), this.get("volume", (_ => _options.volume)), this.get("gain", (() => _options.gain)), this.set("gain", (v => {
		_options.gain = v, _stream && _stream.source.setGain(_options.gain * Math.max(1, _options.globalVolume))
	})), this.set("loop", (l => (l = !!l, _stream && (_stream.element.loop = l), _options.loop = l))), this.get("loop", (_ => _options.loop)), this.set("autoplay", (autoplay => {
		_options.autoplay = autoplay
	})), this.get("autoplay", (_ => _options.autoplay)), this.set("preload", (preload => {
		_options.preload = preload
	})), this.get("preload", (_ => _options.preload)), this.get("ready", (_ => _this.ready)), this.get("frequency", (_ => [])), this.get("activity", (_ => 0)), this.get("playing", (_ => _settings.playing)), this.set("rolloff", (r => {
		_options.rolloff = r
	})), this.get("rolloff", (_ => _options.rolloff)), this.get("loaded", (_ => _settings.loaded)), this.get("currentTime", (_ => _currentTime)), this.set("currentTime", (t => {
		_this.seek(t)
	})), this.get("duration", (_ => _stream ? _stream.element.duration : 0)), this.get("progress", (_ => _this.currentTime / _this.duration)), this.get("visibilityMuted", (_ => _options.muted)), this.set("visibilityMuted", (muted => {
		!0 === muted ? _options.muteState = _options.muted : void 0 !== _options.muteState && (muted = _options.muteState, delete _options.muteState), _options.muted !== muted && (_options.muted = muted, _this.volume = _this.volume)
	})), this.get("muted", (_ => _options.muted)), this.set("muted", (muted => {
		_options.muted = muted, _this.volume = _this.volume
	})), this.set("playbackRate", (v => {
		_options.playbackRate = v
	})), this.get("playbackRate", (_ => _options.playbackRate)), this.get("sourceWidth", (() => _options.sourceWidth)), this.set("sourceWidth", (v => {
		_options.sourceWidth = v, _stream && _stream.source.setSourceWidth(_options.sourceWidth)
	})), this.get("directivitySharpness", (() => _options.directivitySharpness)), this.set("directivitySharpness", (v => {
		_options.directivitySharpness = v, _stream && _stream.source.setDirectivityPattern(_options.directivityAlpha, _options.directivitySharpness)
	})), this.get("directivityAlpha", (() => _options.directivityAlpha)), this.set("directivityAlpha", (v => {
		_options.directivityAlpha = v, _stream && _stream.source.setDirectivityPattern(_options.directivityAlpha, _options.directivitySharpness)
	})), this.play = async function() {
		_settings.autoplay = !0, _settings.src && (_settings.loadingPlay = !0, _settings.loading || _settings.playing || (_settings.loaded || await _this.load(), _settings.playing = !0, _this.volume = _options.volume, _this.playbackRate = _options.playbackRate, _this.startRender(loop), _stream.element.currentTime = _currentTime, _stream.element.play()))
	}, this.pause = function() {
		_settings.autoplay = !1, _settings.src && _settings.loaded && _settings.playing && (_currentTime = _currentTime, _settings.loadingPlay = !1, _settings.playing = !1, _stream && _stream.element.pause(), _this.stopRender(loop))
	}, this.stop = function() {
		_settings.autoplay = !1, _settings.loaded && (_currentTime = 0, _stream && (_stream.element.pause(), _stream.element.currentTime = 0), _settings.playing = !1, _this.stopRender(loop))
	}, this.seek = function(time) {
		if (_settings.src) {
			_settings.loadingPlay = !1;
			var wasPlaying = _settings.playing;
			_currentTime = time, _stream && (_stream.element.seek(_currentTime), wasPlaying && _stream.element.play())
		}
	}, this.load = async function() {
		_settings.src && (_settings.loading || _settings.loaded || (_settings.loading = !0, _this.ready = await async function createBuffer() {
			let promise = Promise.create(),
				url = _settings.src;
			return (_stream = await Audio3DResonance.createAudioInput(url)).element.addEventListener("ended", handleEnded), _this.loop = _this.loop, _this.volume = _this.volume, _this.rolloff = _this.rolloff, _this.muted = _this.muted, _this.gain = _this.gain, _this.sourceWidth = _this.sourceWidth, _this.directivitySharpness = _this.directivitySharpness, _this.directivityAlpha = _this.directivityAlpha, _stream.element.currentTime = _currentTime, _stream.element.volume = _this.volume, _stream.element.onloadeddata = promise.resolve, _stream.element.load(), (_options.autoplay || _settings.autoplay) && _this.play(), promise
		}(), _this.events.fire(Events.LOADED), _settings.loadingPlay = !1, _settings.loading = !1, _settings.loaded = !0))
	}, this.unload = function() {
		_settings.src && _settings.loaded && (_this.stop(), function destroyStream() {
			_stream && (_settings.loaded = !1, _stream.element.removeEventListener("ended", handleEnded), Audio3DResonance.unloadStream(_stream), _stream = null)
		}())
	}
})), Class((function Audio3DWA() {
	Inherit(this, Component);
	const _this = this,
		_silence = require("Audio3DSilence");
	var _context, _orientation, _cam, _pool, _streams = {},
		_buffers = {};

	function loop() {
		(_cam = _this.getCamera()) && _cam.getWorldQuaternion && _context && _context.listener && (_orientation.set(0, 0, -1).applyQuaternion(_cam.getWorldQuaternion()), _context.listener.forwardX ? (_context.listener.forwardX.setValueAtTime(_orientation.x, _context.currentTime), _context.listener.forwardY.setValueAtTime(_orientation.y, _context.currentTime), _context.listener.forwardZ.setValueAtTime(_orientation.z, _context.currentTime), _context.listener.upX.setValueAtTime(_cam.up.x, _context.currentTime), _context.listener.upY.setValueAtTime(_cam.up.y, _context.currentTime), _context.listener.upZ.setValueAtTime(_cam.up.z, _context.currentTime)) : (_context.listener.setOrientation && _context.listener.setOrientation(_orientation.x, _orientation.y, _orientation.z, _cam.up.x, _cam.up.y, _cam.up.z), _context.listener.setPosition && _context.listener.setPosition(_cam.position.x, _cam.position.y, _cam.position.z), _context.listener.setVelocity && _context.listener.setVelocity(0, 0, 0)))
	}

	function createAudioElement() {
		let audio;
		return GlobalAudio3D.fallback ? (audio = document.createElement("audio"), audio.style.visibility = "hidden", document.body.appendChild(audio), audio.source = document.createElement("source"), audio.appendChild(audio.source), audio.setAttribute("controls", ""), audio.source.setAttribute("src", _silence), audio.source.setAttribute("type", "audio/mp3"), audio.play()) : (audio = new Audio, audio.src = _silence, audio.play().catch((e => {}))), audio
	}
	this.createPool = function(n = 10) {
		_pool = _this.initClass(ObjectPool, createAudioElement, n), _this.flag("init", !0)
	}, this.audioContext = function(refresh) {
		return _context && !refresh || (_context && (_context.close(), _context = null), _orientation = new Vector3, (_context = new(window.AudioContext || window.webkitAudioContext)({
			sampleRate: 48e3
		})).dest = _context.createMediaStreamDestination(), Render.start(loop)), _context
	}, this.unloadBuffer = function(url) {
		_buffers[url] && delete _buffers[url]
	}, this.loadBuffer = async function(url) {
		if (!_buffers[url]) {
			_buffers[url] = {
				loaded: Promise.create(),
				data: null
			};
			var response = await fetch(url),
				buffer = await response.arrayBuffer();
			_this.audioContext().decodeAudioData(buffer, (data => {
				_buffers[url].data = data, _buffers[url].loaded.resolve()
			}))
		}
		return await _buffers[url].loaded, _buffers[url].data
	}, this.unloadStream = function(url) {
		_streams[url] && (_streams[url].stream.element.src = _silence, _streams[url].stream.element.load(), _streams[url].count--, _pool.put(_streams[url].stream.element), 0 == _streams[url].count && defer((_ => {
			delete _streams[url]
		})))
	}, this.loadStream = function(url) {
		let isElement = "string" != typeof url && void 0 !== url,
			element = null;
		if (isElement && (element = url, url = element.src ? element.src : element.srcObject ? element.srcObject.id : ""), !_streams[url]) {
			let stream = {};
			_streams[url] = {
				stream: null,
				count: 0
			}, isElement ? (stream.element = element, element.setAttribute("muted", !0), element.muted = !0) : (stream.element = _this.getElement(), stream.element.crossOrigin = "anonymous", stream.element.src = url), GlobalAudio3D.fallback ? stream.element.setAttribute("src", url) : (stream.element.mediaSrc ? stream.source = stream.element.mediaSrc : stream.element.srcObject ? (stream.source = _this.audioContext().createMediaStreamSource(stream.element.srcObject), (new Audio).srcObject = element.srcObject) : stream.source = _this.audioContext().createMediaElementSource(stream.element), stream.element.mediaSrc = stream.source), isElement || stream.element.load(), _streams[url].stream = stream
		}
		return _streams[url].count++, _streams[url].stream
	}, this.getActiveStreamCount = function(stream) {
		for (let key in _streams)
			if (_streams[key].stream == stream) return _streams[key].count;
		return -1
	}, this.purge = function() {
		for (let stream in _streams) _this.unloadStream(stream);
		for (let buffer in _buffers) _this.unloadBuffer(buffer)
	}, this.getElement = function() {
		return _pool || _this.createPool(), _pool.get()
	}, this.putElement = function(audio) {
		audio.src = _silence, audio.load(), _pool.put(audio)
	}, this.useCamera = function(camera) {
		_this.CAMERA = camera
	}, this.getCamera = function() {
		return _this.CAMERA || (_this.CAMERA = World.CAMERA), _this.CAMERA
	}
}), "static"), Class((function Audio3DWABuffer() {
	Inherit(this, Audio3DBase);
	const _this = this;
	var _context, _buffer, _stream, _gain, _panner, _analyser, _filter, _delay, _convolver, _position, _frequency, _convolution, _options = {},
		_settings = {
			playing: !1,
			loaded: !1,
			loading: !1
		},
		_currentTime = 0;

	function loop() {
		_context && (_position = _context.listener.forwardX ? _this.audioPosition().sub(_this.listenerPosition()) : _this.audioPosition(), _panner.setPosition(_position.x, _position.y, _position.z))
	}

	function initContext() {
		GlobalAudio3D.initialized && (_context = Audio3DWA.audioContext(), _gain = _context.createGain ? _context.createGain() : _context.createGainNode(), _panner = _context.createPanner(), (_filter = _context.createBiquadFilter()).type = "lowshelf", _filter.frequency.value = 0, _filter.gain.value = 1, _analyser = _context.createAnalyser(), (_delay = _context.createDelay(10)).delayTime.value = 0, _analyser.fftSize = 32, _frequency = new Uint8Array(_analyser.frequencyBinCount), _analyser.connect(_context.destination), _delay.connect(_analyser), _filter.connect(_delay), _convolver ? (_convolver.connect(_filter), _gain.connect(_convolver)) : _gain.connect(_filter), _panner.connect(_gain))
	}

	function initOptions() {
		_options.loop = _options.loop || !1, _options.autoplay = _options.autoplay || !1, _options.volume = void 0 === _options.volume ? 1 : _options.volume, _options.playbackRate = _options.playbackRate || 1, _options.preload = _options.preload || !1, _options.muted = _options.muted || !1, _options.rolloff = _options.rolloff || 1, _options.selfDestruct = _options.selfDestruct || !1, _options.globalMuted = GlobalAudio3D.muted, _options.globalVolume = GlobalAudio3D.volume, _options.globalPlaybackRate = GlobalAudio3D.playbackRate
	}

	function destroyBuffer() {
		if (_buffer && _stream) {
			_settings.loaded = !1;
			try {
				_stream.disconnect(_panner), _convolver ? (_convolver.disconnect(_filter), _gain.disconnect(_convolver)) : _gain.disconnect(_filter), _analyser.disconnect(_context.destination), _buffer.stop(), _buffer = null, Audio3DWA.unloadBuffer(_settings.src)
			} catch (e) {}
		}
	}
	async function createStream() {
		_stream || ((_stream = _context.createBufferSource()).buffer = _buffer.buffer, _stream.loop = _options.loop, _stream.playbackRate = _options.playbackRate, _stream.onended = _ => {
			_this && _this.stop && (_this.stop(), _this.events.fire(Events.END), _options.selfDestruct && _this.parent.destroy())
		}, _this.volume = _this.volume, _this.rolloff = _this.rolloff, _this.muted = _this.muted, _stream.connect(_panner), _stream.start(0, _currentTime))
	}

	function destroyStream() {
		if (_stream) try {
			_stream.disconnect(_panner), _stream.stop(), _stream = null
		} catch (e) {}
	}

	function update(e) {
		_options.globalMuted = GlobalAudio3D.muted, _options.globalVolume = GlobalAudio3D.volume, _options.globalPlaybackRate = GlobalAudio3D.playbackRate, _this.volume = _this.volume, _this.playbackRate = _this.playbackRate
	}

	function ready() {
		destroyBuffer(), destroyStream(), _context = null, _gain = null, _panner = null, _analyser = null, _delay = null, _frequency = null, _filter = null, initContext(), initOptions(), _convolution && _this.convolve(_convolution), (_options.autoplay || _settings.autoplay) && _this.play()
	}!async function() {
		initContext(), initOptions(),
			function addListeners() {
				_this.events.sub(GlobalAudio3D, Events.UPDATE, update), _this.events.sub(GlobalAudio3D, Events.READY, ready)
			}()
	}(), this.set("src", (src => {
		_this.stop(), _settings.src = src, defer((_ => {
			if (_options.autoplay) return _this.play();
			_options.preload && _this.load(), _this.volume = _options.volume
		}))
	})), this.get("src", (_ => _settings.src)), this.get("selfDestruct", (_ => _options.selfDestruct)), this.set("selfDestruct", (d => {
		_options.selfDestruct = d
	})), this.set("volume", (v => (_options.volume = v, _gain && (_gain.gain.value = _options.muted || _options.globalMuted ? 0 : v * _options.globalVolume), _options.volume))), this.get("volume", (_ => _options.volume)), this.set("loop", (l => (l = !!l, _stream && (_stream.loop = l), _options.loop = l))), this.get("loop", (_ => _options.loop)), this.set("autoplay", (autoplay => {
		_options.autoplay = autoplay
	})), this.get("autoplay", (_ => _options.autoplay)), this.set("preload", (preload => {
		_options.preload = preload
	})), this.get("preload", (_ => _options.preload)), this.get("ready", (_ => _this.ready)), this.get("frequency", (_ => _analyser ? (_analyser.getByteFrequencyData(_frequency), _frequency) : [])), this.get("activity", (_ => _analyser ? (_analyser.getByteFrequencyData(_frequency), Math.clamp(_frequency.slice(3, 13).reduce(((n1, n2) => n1 + n2), 0) / 2560, 0, 1)) : 0)), this.get("playing", (_ => _settings.playing)), this.set("rolloff", (r => {
		_options.rolloff = r, _panner && (_panner.rolloffFactor = r)
	})), this.get("rolloff", (_ => _options.rolloff)), this.get("loaded", (_ => _settings.loaded)), this.get("currentTime", (_ => _context && _buffer ? _context.currentTime % _buffer.buffer.duration : 0)), this.set("currentTime", (t => {
		_this.seek(t)
	})), this.get("visibilityMuted", (_ => _options.muted)), this.set("visibilityMuted", (muted => {
		!0 === muted ? _options.muteState = _options.muted : void 0 !== _options.muteState && (muted = _options.muteState, delete _options.muteState), _options.muted !== muted && (_options.muted = muted, _this.volume = _this.volume)
	})), this.get("muted", (_ => _options.muted)), this.set("muted", (muted => {
		_options.muted = muted, _this.volume = _this.volume
	})), this.set("playbackRate", (v => {
		_options.playbackRate = v, _stream && (_stream.playbackRate.value = v * _options.globalPlaybackRate)
	})), this.get("playbackRate", (_ => _options.playbackRate)), this.get("filter", (_ => _filter)), this.get("delay", (_ => _delay)), this.get("panner", (_ => _panner)), this.get("duration", (_ => _buffer ? _buffer.buffer.duration : 0)), this.get("progress", (_ => _this.currentTime / _this.duration)), this.play = async function() {
		_settings.autoplay = !0, _settings.src && GlobalAudio3D.initialized && (_settings.loadingPlay = !0, _stream || _settings.loading || _settings.playing || (_settings.loaded || await _this.load(), await createStream(), _settings.playing = !0, _this.volume = _options.volume, _this.startRender(loop)))
	}, this.pause = function() {
		_settings.autoplay = !1, _stream && GlobalAudio3D.initialized && _settings.src && _settings.loaded && _settings.playing && (_currentTime = _context.currentTime, destroyStream(), _settings.loadingPlay = !1, _settings.playing = !1, _this.stopRender(loop))
	}, this.stop = function() {
		_settings.autoplay = !1, _settings.src && GlobalAudio3D.initialized && _settings.loaded && (_currentTime = 0, destroyStream(), _settings.loading = !1, _settings.loaded = !1, _settings.loadingPlay = !1, _settings.playing = !1, _this.stopRender(loop))
	}, this.seek = function(time) {
		if (_settings.src) {
			_settings.loadingPlay = !1;
			var wasPlaying = _settings.playing;
			_this.stop(), _currentTime = time, wasPlaying && _this.play()
		}
	}, this.load = async function() {
		_settings.src && (_settings.loading || _settings.loaded || (_settings.loading = !0, _this.ready = await async function createBuffer() {
			GlobalAudio3D.initialized || await GlobalAudio3D.ready(), _context || await defer(), (_buffer = _context.createBufferSource()).buffer = await Audio3DWA.loadBuffer(_settings.src), _settings.loaded = !0
		}(), await createStream(), _options.autoplay || _settings.loadingPlay || destroyStream(), _this.events.fire(Events.LOADED), _settings.loadingPlay = !1, _settings.loading = !1, _settings.loaded = !0))
	}, this.unload = function() {
		_settings.src && _settings.loaded && (_this.stop(), destroyBuffer())
	}, this.convolve = async function(src) {
		if (_convolution = src, !GlobalAudio3D.initialized) return;
		if (!1 === src) return void(_convolver && (_convolver.disconnect(), _gain.disconnect(), _gain.connect(_filter), _convolver = null));
		let buffer = await Audio3DWA.loadBuffer(src);
		_convolver || (_convolver = _context.createConvolver(), _gain.disconnect(), _convolver.connect(_filter), _gain.connect(_convolver)), _convolver.buffer = buffer
	}
})), Class((function Audio3DWASimpleBuffer() {
	Inherit(this, Audio3DBase);
	const _this = this;
	var _context, _buffer, _stream, _gain, _options = {},
		_settings = {
			playing: !1,
			loaded: !1,
			loading: !1
		},
		_currentTime = 0;
	let now = () => performance.now() / 1e3,
		_time = now(),
		_pausedAt = now(),
		_prevTime = now();

	function initContext() {
		GlobalAudio3D.initialized && (_context = Audio3DWA.audioContext(), (_gain = _context.createGain ? _context.createGain() : _context.createGainNode()).connect(_context.destination))
	}

	function initOptions() {
		_options.loop = _options.loop || !1, _options.autoplay = _options.autoplay || !1, _options.volume = void 0 === _options.volume ? 1 : _options.volume, _options.playbackRate = _options.playbackRate || 1, _options.preload = _options.preload || !1, _options.muted = _options.muted || !1, _options.selfDestruct = _options.selfDestruct || !1, _options.globalMuted = GlobalAudio3D.muted, _options.globalVolume = GlobalAudio3D.volume, _options.globalPlaybackRate = GlobalAudio3D.playbackRate
	}

	function destroyBuffer() {
		_buffer && _stream && (_settings.loaded = !1, _stream.disconnect(_gain), _gain.disconnect(_context.destination), _buffer.stop(), _buffer = null, Audio3DWA.unloadBuffer(_settings.src))
	}
	async function createStream() {
		!_stream && GlobalAudio3D.initialized && ((_stream = _context.createBufferSource()).buffer = _buffer.buffer, _stream.loop = _options.loop, _stream.playbackRate.value = _options.playbackRate, _this.volume = _this.volume, _this.rolloff = _this.rolloff, _this.muted = _this.muted, _prevTime = now(), _stream.connect(_gain), _stream.start(0, _currentTime), _time = now() - _currentTime)
	}

	function destroyStream() {
		_stream && (_stream.disconnect(_gain), _stream.stop(), _stream = null)
	}

	function update(e) {
		_options.globalMuted = GlobalAudio3D.muted, _options.globalVolume = GlobalAudio3D.volume, _options.globalPlaybackRate = GlobalAudio3D.playbackRate, _this.volume = _this.volume, _this.playbackRate = _this.playbackRate
	}

	function ready() {
		destroyBuffer(), destroyStream(), _context = null, _gain = null, initContext(), initOptions(), (_options.autoplay || _settings.autoplay) && _this.play()
	}
	initContext(), initOptions(),
		function addListeners() {
			_this.events.sub(GlobalAudio3D, Events.UPDATE, update), _this.events.sub(GlobalAudio3D, Events.READY, ready)
		}(), _this.startRender((() => {
			_settings.playing && (_currentTime += (now() - _prevTime) * _stream.playbackRate.value, _prevTime = now())
		})), this.set("src", (src => {
			_this.stop(), _settings.src = src, defer((_ => {
				if (_options.autoplay) return _this.play();
				_options.preload && _this.load(), _this.volume = _options.volume
			}))
		})), this.get("src", (_ => _settings.src)), this.get("selfDestruct", (_ => _options.selfDestruct)), this.set("selfDestruct", (d => {
			_options.selfDestruct = d
		})), this.set("volume", (v => (_options.volume = v, _gain && (_gain.gain.value = _options.muted || _options.globalMuted ? 0 : v * _options.globalVolume), _options.volume))), this.get("volume", (_ => _options.volume)), this.set("loop", (l => (l = !!l, _stream && (_stream.loop = l), _options.loop = l))), this.get("loop", (_ => _options.loop)), this.set("autoplay", (autoplay => {
			_options.autoplay = autoplay
		})), this.get("autoplay", (_ => _options.autoplay)), this.set("preload", (preload => {
			_options.preload = preload
		})), this.get("preload", (_ => _options.preload)), this.get("ready", (_ => _this.ready)), this.get("playing", (_ => _settings.playing)), this.get("loaded", (_ => _settings.loaded)), this.get("currentTime", (_ => _settings.playing ? _currentTime : _pausedAt)), this.get("context", (_ => _context)), this.set("currentTime", (t => {
			_this.seek(t)
		})), this.get("visibilityMuted", (_ => _options.muted)), this.set("visibilityMuted", (muted => {
			!0 === muted ? _options.muteState = _options.muted : void 0 !== _options.muteState && (muted = _options.muteState, delete _options.muteState), _options.muted !== muted && (_options.muted = muted, _this.volume = _this.volume)
		})), this.get("muted", (_ => _options.muted)), this.set("muted", (muted => {
			_options.muted = muted, _this.volume = _this.volume
		})), this.set("playbackRate", (v => {
			_options.playbackRate = v, _stream && (_stream.playbackRate.value = v * _options.globalPlaybackRate)
		})), this.get("playbackRate", (_ => _options.playbackRate)), this.get("duration", (_ => _buffer && _buffer.buffer ? _buffer.buffer.duration / (_this.playbackRate.value ? _this.playbackRate.value : 1) : 0)), this.get("progress", (_ => _this.currentTime / _this.duration)), this.play = async function() {
			_settings.autoplay = !0, _settings.src && GlobalAudio3D.initialized && (_settings.loadingPlay = !0, _stream || _settings.loading || _settings.playing || (_settings.loaded || await _this.load(), await createStream(), _settings.playing = !0, _this.volume = _options.volume))
		}, this.pause = function() {
			_settings.autoplay = !1, _stream && GlobalAudio3D.initialized && _settings.src && _settings.loaded && _settings.playing && (_currentTime = _this.currentTime, _pausedAt = _this.currentTime, destroyStream(), _settings.loadingPlay = !1, _settings.playing = !1)
		}, this.stop = function() {
			_settings.autoplay = !1, _settings.src && GlobalAudio3D.initialized && _settings.loaded && (_currentTime = 0, _prevTime = 0, _pausedAt = _this.currentTime, destroyStream(), _settings.loading = !1, _settings.loaded = !1, _settings.loadingPlay = !1, _settings.playing = !1)
		}, this.seek = function(time) {
			if (_settings.src) {
				_settings.loadingPlay = !1;
				var wasPlaying = _settings.playing;
				_stream && (_stream.onended = null), _this.stop(), _currentTime = time, _prevTime = now() - time, wasPlaying && _this.play()
			}
		}, this.load = async function() {
			_settings.src && (_settings.loading || _settings.loaded || (_settings.loading = !0, _this.ready = await async function createBuffer() {
				GlobalAudio3D.initialized && ((_buffer = _context.createBufferSource()).buffer = await Audio3DWA.loadBuffer(_settings.src), _settings.loaded = !0)
			}(), await createStream(), _options.autoplay || _settings.loadingPlay || (_stream.onended = null, destroyStream()), _this.events.fire(Events.LOADED), _settings.loadingPlay = !1, _settings.loading = !1, _settings.loaded = !0))
		}, this.unload = function() {
			_settings.src && _settings.loaded && (_this.stop(), destroyBuffer())
		}, this.convolve = async function(src) {}
})), Class((function Audio3DWAStream() {
	Inherit(this, Audio3DBase);
	const _this = this;
	var _context, _stream, _gain, _panner, _analyser, _filter, _delay, _convolver, _position, _frequency, _convolution, _options = {},
		_settings = {
			playing: !1,
			loaded: !1,
			loading: !1
		},
		_currentTime = 0;

	function loop() {
		_context && (_position = _context.listener.forwardX ? _this.audioPosition().sub(_this.listenerPosition()) : _this.audioPosition(), _panner.setPosition(_position.x, _position.y, _position.z))
	}

	function initContext() {
		GlobalAudio3D.initialized && (_context = Audio3DWA.audioContext(), _gain = _context.createGain ? _context.createGain() : _context.createGainNode(), _panner = _context.createPanner(), (_analyser = _context.createAnalyser()).fftSize = 32, _frequency = new Uint8Array(_analyser.frequencyBinCount), (_filter = _context.createBiquadFilter()).type = "lowshelf", _filter.frequency.value = 0, _filter.gain.value = 1, (_delay = _context.createDelay(10)).delayTime.value = 0)
	}

	function initOptions() {
		_options.loop = _options.loop || !1, _options.autoplay = _options.autoplay || !1, _options.volume = void 0 === _options.volume ? 1 : _options.volume, _options.playbackRate = _options.playbackRate || 1, _options.preload = _options.preload || !1, _options.muted = _options.muted || !1, _options.rolloff = _options.rolloff || 1, _options.globalMuted = GlobalAudio3D.muted, _options.globalVolume = GlobalAudio3D.volume, _options.globalPlaybackRate = GlobalAudio3D.playbackRate
	}

	function createStream() {
		_stream || ((_stream = Audio3DWA.loadStream(_settings.src)).element.addEventListener("ended", handleEnded), _this.loop = _this.loop, _this.volume = _this.volume, _this.rolloff = _this.rolloff, _this.muted = _this.muted, _stream.source.connect(_panner), _panner.connect(_gain), _convolver ? (_gain.connect(_convolver), _convolver.connect(_filter)) : _gain.connect(_filter), _filter.connect(_delay), _delay.connect(_analyser), _analyser.connect(_context.destination), _stream.element.currentTime = _currentTime, (_options.autoplay || _settings.autoplay) && _this.play())
	}

	function destroyStream() {
		_stream && (_stream.element.removeEventListener("ended", handleEnded), _stream.source.disconnect(_panner), _stream = null)
	}

	function update(e) {
		_options.globalMuted = GlobalAudio3D.muted, _options.globalVolume = GlobalAudio3D.volume, _options.globalPlaybackRate = GlobalAudio3D.playbackRate, _this.volume = _this.volume, _this.playbackRate = _this.playbackRate
	}

	function ready() {
		destroyStream(), _context = null, _gain = null, _panner = null, _analyser = null, _delay = null, _filter = null, _frequency = null, initContext(), initOptions(), _convolution && _this.convolve(_convolution), (_settings.autoplay || _options.autoplay) && _this.play()
	}

	function handleEnded() {
		_this.unload(), _this.events.fire(Events.END)
	}
	initOptions(), initContext(),
		function addListeners() {
			_this.events.sub(GlobalAudio3D, Events.UPDATE, update), _this.events.sub(GlobalAudio3D, Events.READY, ready)
		}(), this.set("src", (src => {
			if (destroyStream(), _settings.src = src, _options.autoplay) return _this.play();
			_options.preload && _this.load()
		})), this.get("src", (_ => _settings.src)), this.set("volume", (v => (v = Math.clamp(v, 0, 1), _options.volume = v, _gain && (_gain.gain.value = _options.muted || _options.globalMuted ? 0 : v * _options.globalVolume), _options.volume))), this.get("volume", (_ => _options.volume)), this.set("loop", (l => (l = !!l, _stream && (_stream.element.loop = l), _options.loop = l))), this.get("loop", (_ => _options.loop)), this.set("autoplay", (autoplay => {
			_options.autoplay = autoplay
		})), this.get("autoplay", (_ => _options.autoplay)), this.set("preload", (preload => {
			_options.preload = preload
		})), this.get("preload", (_ => _options.preload)), this.get("ready", (_ => !!_stream)), this.get("frequency", (_ => (_analyser && _analyser.getByteFrequencyData(_frequency), _frequency))), this.get("activity", (_ => _analyser ? (_analyser.getByteFrequencyData(_frequency), Math.clamp(_frequency.slice(3, 13).reduce(((n1, n2) => n1 + n2), 0) / 2560, 0, 1)) : 0)), this.get("playing", (_ => _settings.playing)), this.set("rolloff", (r => {
			_options.rolloff = r, _panner && (_panner.rolloffFactor = r)
		})), this.get("rolloff", (_ => _options.rolloff)), this.get("loaded", (_ => !0)), this.get("duration", (_ => _stream ? _stream.element.duration : 0)), this.get("currentTime", (_ => _stream ? _stream.element.currentTime : 0)), this.set("currentTime", (t => {
			_this.seek(t)
		})), this.get("progress", (_ => _this.currentTime / _this.duration)), this.set("playbackRate", (v => {
			_options.playbackRate = v, _stream && _stream.element && (_stream.element.playbackRate = v * _options.globalPlaybackRate)
		})), this.get("playbackRate", (_ => _options.playbackRate)), this.get("visibilityMuted", (_ => _options.muted)), this.set("visibilityMuted", (muted => {
			!0 === muted ? _options.muteState = _options.muted : void 0 !== _options.muteState && (muted = _options.muteState, delete _options.muteState), _options.muted !== muted && (_options.muted = muted, _this.volume = _this.volume)
		})), this.get("muted", (_ => _options.muted)), this.set("muted", (muted => {
			_options.muted = muted, _this.volume = _this.volume
		})), this.get("filter", (_ => _filter)), this.get("delay", (_ => _delay)), this.get("panner", (_ => _panner)), this.play = function() {
			_settings.autoplay = !0, _settings.src && (createStream(), _stream && !0 !== _settings.playing && (_settings.playing = !0, _this.volume = _this.volume, _this.startRender(loop), _stream.element.playbackRate = _options.playbackRate ? _options.playbackRate : 1, _stream.element.play().catch((e => {
				console.log("ERROR WHILE PLAYING STREAM", e)
			}))))
		}, this.pause = function() {
			_settings.autoplay = !1, _stream && _settings.src && _settings.playing && (_currentTime = _stream.element.currentTime, _stream.element.pause(), _settings.playing = !1, _this.stopRender(loop))
		}, this.stop = function() {
			_settings.autoplay = !1, _settings.src && (_currentTime = 0, _settings.playing = !1, _this.stopRender(loop), _stream && _stream.element && _stream.element.stop && (_stream.element.stop(), _stream.element.currentTime = 0))
		}, this.seek = function(time) {
			_settings.src && (_currentTime = time, _stream && (_stream.element.currentTime = time))
		}, this.load = function() {
			_settings.src && (_settings.playing || (createStream(), _stream.element.load()))
		}, this.unload = function() {
			_settings.autoplay = !1, _settings.src && (_this.stop && _this.stop(), destroyStream(), Audio3DWA.unloadStream(_settings.src))
		}, this.convolve = async function(src) {
			if (_convolution = src, !1 === src) return void(_convolver && (_convolver.disconnect(), _gain.disconnect(), _gain.connect(_analyser), _convolver = null));
			let buffer = await Audio3DWA.loadBuffer(src);
			_convolver || (_convolver = _context.createConvolver(), _gain.disconnect(), _convolver.connect(_analyser), _gain.connect(_convolver)), _convolver.buffer = buffer
		}, this.get("stream", (_ => _stream))
})), Module((function BufferToVertices() {
	const FACES = ["a", "b", "c"];
	this.exports = {
		toVertices: function toVertices(geom) {
			! function buildFaces(geom) {
				let attributes = geom.attributes,
					positions = attributes.position.array,
					normals = attributes.normal.array,
					uvs = attributes.uv.array,
					tempNormals = [],
					tempUVs = [];
				geom.vertices = [], geom.faceVertexUvs = [
					[]
				], geom.faces = [];
				let indices = geom.index;

				function Face3(a, b, c, normal) {
					this.a = a, this.b = b, this.c = c, this.normal = normal
				}
				for (let i = 0, j = 0; i < positions.length; i += 3, j += 2) geom.vertices.push(new Vector3(positions[i], positions[i + 1], positions[i + 2])), tempNormals.push(new Vector3(normals[i], normals[i + 1], normals[i + 2])), tempUVs.push(new Vector2(uvs[j], uvs[j + 1]));

				function addFace(a, b, c, materialIndex) {
					let face = new Face3(a, b, c, [tempNormals[a].clone(), tempNormals[b].clone(), tempNormals[c].clone()]);
					geom.faces.push(face), geom.faceVertexUvs[0].push([tempUVs[a].clone(), tempUVs[b].clone(), tempUVs[c].clone()])
				}
				for (var i = 0; i < indices.length; i += 3) addFace(indices[i], indices[i + 1], indices[i + 2]);
				! function mergeVertices(geom) {
					var v, key, i, il, face, indices, j, jl, verticesMap = {},
						unique = [],
						changes = [],
						precisionPoints = 4,
						precision = Math.pow(10, precisionPoints);
					for (i = 0, il = geom.vertices.length; i < il; i++) v = geom.vertices[i], void 0 === verticesMap[key = Math.round(v.x * precision) + "_" + Math.round(v.y * precision) + "_" + Math.round(v.z * precision)] ? (verticesMap[key] = i, unique.push(geom.vertices[i]), changes[i] = unique.length - 1) : changes[i] = changes[verticesMap[key]];
					var faceIndicesToRemove = [];
					for (i = 0, il = geom.faces.length; i < il; i++) {
						(face = geom.faces[i]).a = changes[face.a], face.b = changes[face.b], face.c = changes[face.c], indices = [face.a, face.b, face.c];
						for (var n = 0; n < 3; n++)
							if (indices[n] === indices[(n + 1) % 3]) {
								faceIndicesToRemove.push(i);
								break
							}
					}
					for (i = faceIndicesToRemove.length - 1; i >= 0; i--) {
						var idx = faceIndicesToRemove[i];
						for (geom.faces.splice(idx, 1), j = 0, jl = geom.faceVertexUvs.length; j < jl; j++) geom.faceVertexUvs[j].splice(idx, 1)
					}
					var diff = geom.vertices.length - unique.length;
					return geom.vertices = unique, diff
				}(geom)
			}(geom)
		},
		toBuffer: function toBuffer(geom) {
			let faces = geom.faces,
				array = geom.attributes.position.array;
			for (let i = 0; i < faces.length; i++) {
				let face = faces[i];
				for (let f = 0; f < FACES.length; f++) {
					let index = face[FACES[f]],
						vertex = geom.vertices[index];
					array[3 * index + 0] = vertex.x, array[3 * index + 1] = vertex.y, array[3 * index + 2] = vertex.z
				}
			}
		}
	}
})), Class((function FBR(_shader) {
	_shader.addUniforms({
		tMatcap: {
			value: null
		},
		tMRO: {
			value: null,
			getTexture: Utils3D.getRepeatTexture
		},
		tNormal: {
			value: null,
			getTexture: Utils3D.getRepeatTexture
		},
		uNormalStrength: {
			value: 1
		},
		uLight: {
			value: new Vector4(1, 1, 1, 1)
		},
		uColor: {
			value: new Color
		}
	})
})), Module((function GenerateTube() {
	this.exports = function generate(numSides = 8, subdivisions = 50, openEnded = !1) {
		let geom = new CylinderGeometry(1, 1, 1, numSides, subdivisions, openEnded);
		geom.applyMatrix((new Matrix4).makeRotationZ(Math.PI / 2)), require("BufferToVertices").toVertices(geom);
		let tmpVec = new Vector2,
			xPositions = [],
			angles = [],
			uvs = [],
			vertices = geom.vertices,
			faceVertexUvs = geom.faceVertexUvs[0],
			indices = [];
		geom.faces.forEach(((face, i) => {
			let {
				a: a,
				b: b,
				c: c
			} = face, verts = [vertices[a], vertices[b], vertices[c]], faceUvs = faceVertexUvs[i];
			verts.forEach(((v, j) => {
				tmpVec.set(v.y, v.z).normalize();
				let angle = Math.atan2(tmpVec.y, tmpVec.x);
				angles.push(angle), xPositions.push(v.x), uvs.push(faceUvs[j].toArray()), indices.push(Math.abs(Math.round(Math.range(v.x, -.5, .5, 0, subdivisions - 1))))
			}))
		}));
		let posArray = new Float32Array(xPositions),
			angleArray = new Float32Array(angles),
			uvArray = new Float32Array(2 * uvs.length);
		for (let i = 0; i < posArray.length; i++) {
			let [u, v] = uvs[i];
			uvArray[2 * i + 0] = u, uvArray[2 * i + 1] = v
		}
		let geometry = new Geometry;
		return geometry.addAttribute("position", new GeometryAttribute(new Float32Array(3 * posArray.length), 3)), geometry.addAttribute("angle", new GeometryAttribute(angleArray, 1)), geometry.addAttribute("cIndex", new GeometryAttribute(new Float32Array(indices), 1)), geometry.addAttribute("tuv", new GeometryAttribute(uvArray, 2)), geometry.indexLookup = indices, geom.destroy(), geometry
	}
})), Class((function GLScreenProjection(_camera = World.CAMERA, _target = new Vector2) {
	Inherit(this, Object3D);
	var _this = this,
		_projection = new ScreenProjection(_camera),
		_m0 = new Matrix4,
		_m1 = new Matrix4;

	function loop() {
		_this.pos.set(_target.x, _target.y), _this.pos3D.copy(_projection.unproject(_this.pos)), _this.group.updateMatrixWorld(), _m0.copy(_camera.projectionMatrix), _m1.getInverse(_camera.matrixWorld), _this.matrix.multiplyMatrices(_m0, _m1), _this.uniforms.normalMatrix.value.copy(_camera.matrixWorld), _this.uniforms.modelMatrix.value.copy(_this.group.matrixWorld)
	}
	this.resolution = new Vector2, this.pos = new Vector2, this.pos3D = new Vector3, this.matrix = new Matrix4, this.uniforms = {
		projMatrix: {
			type: "m4",
			value: this.matrix
		},
		pos: {
			type: "v2",
			value: this.pos
		},
		pos3D: {
			type: "v3",
			value: this.pos3D
		},
		normalMatrix: {
			type: "m4",
			value: new Matrix4
		},
		modelMatrix: {
			type: "m4",
			value: new Matrix4
		}
	}, this.set("camera", (v => {
		_camera = v, _projection.camera = _camera
	})), this.set("target", (v => {
		_target = v
	})), this.update = loop, this.start = function() {
		_this.startRender(loop)
	}, this.stop = function() {
		_this.stopRender(loop)
	}
})), Class((function Webcam(_width, _height, _audio) {
	Inherit(this, Component);
	var _this = this;
	let _stream, _cameras = {},
		_config = {},
		_back = !1,
		_attempts = 0;

	function establishWebcam() {
		if (_attempts >= 2 || !navigator.mediaDevices) return error();
		(function lookupDevices() {
			let promise = Promise.create();
			return Device.mobile ? (navigator.mediaDevices.enumerateDevices().then((devices => {
				devices.forEach((device => {
					device.label.includes("front") && (_cameras.front = {
						deviceId: {
							exact: device.deviceId
						}
					}), device.label.includes("back") && (_cameras.back = {
						deviceId: {
							exact: device.deviceId
						}
					}, _back = !0)
				})), _cameras.front || (_cameras.front = {
					facingMode: "user"
				}), _cameras.back || (_cameras.back = {
					facingMode: "environment"
				}, _back = !1), promise.resolve()
			})), promise) : Promise.resolve()
		})().then((() => {
			_stream && _config.back && _stream.getTracks()[0].stop(), Device.mobile.phone && (_cameras && _cameras.back && (_cameras.back.frameRate = {
				ideal: 60
			}), _cameras && _cameras.front && (_cameras.front.frameRate = {
				ideal: 60
			})), navigator.mediaDevices.getUserMedia({
				video: _config.back ? _cameras.back : _cameras.front || !0,
				audio: _audio
			}).then(success).catch(error)
		})), _attempts += 1
	}

	function success(stream) {
		_this.denied = !1, _stream = stream, _config.back && !_back ? establishWebcam() : (_this.div.srcObject = stream, _this.events.fire(Events.READY, null, !0))
	}

	function error() {
		_this.denied = !0, _this.events.fire(Events.ERROR, null, !0)
	}
	_this.facing = "back",
		function createVideo() {
			_this.div = window.AURA ? document.createElement() : document.createElement("video"), _this.div.width = _width, _this.div.height = _height, _this.div.autoplay = !0, _this.div.controls = !0, _this.div.playsinline = !0, _this.div.setAttribute("playsinline", !0), _this.div.setAttribute("controls", !0), Stage.add(_this.div), _this.element = $(_this.div), _this.element.transformPoint(0, 0).transform({
				scaleX: Device.mobile ? 1 : -1,
				scale: .25
			}).setZ(-1)
		}(),
		function initNavigator() {
			navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia
		}(), this.createStream = function(config = {}) {
			_attempts = 0, _config = config, establishWebcam()
		}, this.flip = function() {
			if (!_back) return;
			let direction;
			"front" === _this.facing ? (_this.facing = "back", direction = _cameras.back) : (_this.facing = "front", direction = _cameras.front), _stream.getTracks()[0].stop(), navigator.getUserMedia({
				video: direction || !0,
				audio: _audio
			}, success, error)
		}, this.get("width", (function() {
			return _width
		})), this.get("height", (function() {
			return _height
		})), this.size = function(w, h) {
			_this.div.width = _width = w, _this.div.height = _height = h, _this.element.size(w, h)
		}, this.getPixels = function(width = _width, height = _height) {
			return _this.canvas || (_this.canvas = document.createElement("canvas"), _this.canvas.width = width, _this.canvas.height = height, _this.canvas.context = _this.canvas.getContext("2d")), _this.canvas.context.drawImage(_this.div, 0, 0, width, height), _this.canvas.context.getImageData(0, 0, width, height)
		}, this.getCanvas = function() {
			return _this.canvas || (_this.canvas = document.createElement("canvas"), _this.canvas.width = _width, _this.canvas.height = _height, _this.canvas.context = _this.canvas.getContext("2d")), _this.canvas.context.drawImage(_this.div, 0, 0, _width, _height), _this.canvas
		}, this.ready = function() {
			return _this.div.readyState > 0
		}, this.end = function() {
			_this.active = !1, _this.div.pause(), _stream && (_stream.getTracks()[0].enabled = !1)
		}, this.restart = function() {
			_this.div.play(), _stream && (_stream.getTracks()[0].enabled = !0), _this.active = !0
		}, this.deviceCount = async function(kind) {
			if (!navigator.mediaDevices) return 0;
			let devices = await navigator.mediaDevices.enumerateDevices(),
				count = 0;
			return devices.forEach((d => {
				d.kind.includes(kind) && count++
			})), count
		}
})), Class((function ParticleDistributor() {
	Inherit(this, Component);
	const _this = this;

	function init() {
		_this.flag("initGenerate") || (_this.flag("initGenerate", !0), Thread.upload(distributeParticles), Thread.upload(generatePointCloud), Thread.upload(generatePointGrid))
	}

	function distributeParticles(e, id) {
		let {
			position: position,
			count: count,
			normal: normal,
			uv: uv,
			skinIndex: skinIndex,
			skinWeight: skinWeight,
			offset: offset,
			scale: scale,
			orientation: orientation
		} = e, vertices = position.length / 3, v3 = new Vector3, v32 = new Vector3, v33 = new Vector3, q = new Quaternion, outputPosition = new Float32Array(3 * count), outputNormal = normal ? new Float32Array(3 * count) : null, outputUV = uv ? new Float32Array(3 * count) : null, outputSkinIndex = skinIndex ? new Float32Array(4 * count) : null, outputSkinWeight = skinWeight ? new Float32Array(4 * count) : null;
		for (let i = 0; i < count; i++) {
			let j = 3 * Math.random(0, vertices / 3);
			v3.set(Math.random(0, 100), Math.random(0, 100), Math.random(0, 100));
			let m = 1 / (v3.x + v3.y + v3.z);
			if (v3.set(v3.x * m, v3.y * m, v3.z * m), outputPosition[3 * i + 0] = position[3 * j + 0] * v3.x + position[3 * j + 3] * v3.y + position[3 * j + 6] * v3.z, outputPosition[3 * i + 1] = position[3 * j + 1] * v3.x + position[3 * j + 4] * v3.y + position[3 * j + 7] * v3.z, outputPosition[3 * i + 2] = position[3 * j + 2] * v3.x + position[3 * j + 5] * v3.y + position[3 * j + 8] * v3.z, offset) {
				let randomInstance = Math.random(0, offset.length / 3 - 1);
				v32.fromArray(outputPosition, 3 * i), v33.fromArray(scale, 3 * randomInstance), v32.multiplyScalar(v33), q.fromArray(orientation, 4 * randomInstance), v32.applyQuaternion(q), v33.fromArray(offset, 3 * randomInstance), v32.add(v33), v32.toArray(outputPosition, 3 * i)
			}
			if (outputNormal && (outputNormal[3 * i + 0] = normal[3 * j + 0] * v3.x + normal[3 * j + 3] * v3.y + normal[3 * j + 6] * v3.z, outputNormal[3 * i + 1] = normal[3 * j + 1] * v3.x + normal[3 * j + 4] * v3.y + normal[3 * j + 7] * v3.z, outputNormal[3 * i + 2] = normal[3 * j + 2] * v3.x + normal[3 * j + 5] * v3.y + normal[3 * j + 8] * v3.z), outputUV && (outputUV[3 * i + 0] = uv[2 * j + 0] * v3.x + uv[2 * j + 2] * v3.y + uv[2 * j + 4] * v3.z, outputUV[3 * i + 1] = uv[2 * j + 1] * v3.x + uv[2 * j + 3] * v3.y + uv[2 * j + 5] * v3.z), outputSkinIndex) {
				let skinCluster1 = {};
				skinCluster1[skinIndex[4 * j + 0]] = skinWeight[4 * j + 0], skinCluster1[skinIndex[4 * j + 1]] = skinWeight[4 * j + 1], skinCluster1[skinIndex[4 * j + 2]] = skinWeight[4 * j + 2], skinCluster1[skinIndex[4 * j + 3]] = skinWeight[4 * j + 3];
				let skinCluster2 = {};
				skinCluster2[skinIndex[4 * j + 4]] = skinWeight[4 * j + 4], skinCluster2[skinIndex[4 * j + 5]] = skinWeight[4 * j + 5], skinCluster2[skinIndex[4 * j + 6]] = skinWeight[4 * j + 6], skinCluster2[skinIndex[4 * j + 7]] = skinWeight[4 * j + 7];
				let skinCluster3 = {};
				skinCluster3[skinIndex[4 * j + 8]] = skinWeight[4 * j + 8], skinCluster3[skinIndex[4 * j + 9]] = skinWeight[4 * j + 9], skinCluster3[skinIndex[4 * j + 10]] = skinWeight[4 * j + 10], skinCluster3[skinIndex[4 * j + 11]] = skinWeight[4 * j + 11];
				let indices = [];
				for (let k = 0; k < 12; k++) {
					let index = skinIndex[4 * j + k]; - 1 === indices.indexOf(index) && indices.push(index)
				}
				let clusters = [];
				for (let k = 0; k < indices.length; k++) {
					let index = indices[k];
					clusters.push([index, (skinCluster1[index] || 0) * v3.x + (skinCluster2[index] || 0) * v3.y + (skinCluster3[index] || 0) * v3.z])
				}
				clusters.sort((function(a, b) {
					return b[1] - a[1]
				}));
				for (let l = clusters.length - 1; l < 4; l++) clusters.push([0, 0]);
				let sum = clusters[0][1] + clusters[1][1] + clusters[2][1] + clusters[3][1];
				outputSkinIndex[4 * i + 0] = clusters[0][0], outputSkinIndex[4 * i + 1] = clusters[1][0], outputSkinIndex[4 * i + 2] = clusters[2][0], outputSkinIndex[4 * i + 3] = clusters[3][0], outputSkinWeight[4 * i + 0] = clusters[0][1] * (1 / sum), outputSkinWeight[4 * i + 1] = clusters[1][1] * (1 / sum), outputSkinWeight[4 * i + 2] = clusters[2][1] * (1 / sum), outputSkinWeight[4 * i + 3] = clusters[3][1] * (1 / sum)
			}
		}
		let output = {},
			buffer = [];
		output.position = outputPosition, buffer.push(outputPosition.buffer), outputNormal && (output.normal = outputNormal, buffer.push(outputNormal.buffer)), outputUV && (output.uv = outputUV, buffer.push(outputUV.buffer)), outputSkinIndex && (output.skinIndex = outputSkinIndex, output.skinWeight = outputSkinWeight, buffer.push(outputSkinIndex.buffer), buffer.push(outputSkinWeight.buffer)), resolve(output, id, buffer)
	}

	function generatePointCloud({
		path: path,
		textureSize: textureSize
	}, id) {
		!async function() {
			try {
				let data = await get(path),
					totalParticles = textureSize * textureSize,
					positions = new Float32Array(3 * totalParticles),
					colors = new Float32Array(3 * totalParticles);
				for (let i = 0; i < totalParticles; i++) {
					positions[3 * i + 0] = data.positions[3 * i + 0], positions[3 * i + 1] = data.positions[3 * i + 1], positions[3 * i + 2] = data.positions[3 * i + 2];
					let hex = Math.floor(Number("0x" + data.colors[i])),
						r = (hex >> 16 & 255) / 255,
						g = (hex >> 8 & 255) / 255,
						b = (255 & hex) / 255;
					colors[3 * i + 0] = r, colors[3 * i + 1] = g, colors[3 * i + 2] = b
				}
				data.positions = positions, data.colors = colors, resolve(data, id, [data.positions.buffer, data.colors.buffer])
			} catch (e) {
				throw console.log(e), `Could not load Point Cloud for ${path}`
			}
		}()
	}

	function generatePointGrid({
		path: path,
		particleCount: particleCount
	}, id) {
		let split = path.split("generateGrid-")[1].split("-"),
			dir = split[0],
			scale = Number(split[1]),
			textureSize = (Number(split[2]), Number(split[split.length - 1].split(".")[0])),
			totalParticles = particleCount,
			positions = new Float32Array(3 * totalParticles),
			colors = new Float32Array(3 * totalParticles);
		for (let i = 0; i < totalParticles; i++) {
			let p0 = i / textureSize,
				y = Math.floor(p0),
				x = p0 - y;
			y /= textureSize, x = Math.range(x, 0, 1, -scale / 2, scale / 2), y = Math.range(y, 0, 1, -scale / 2, scale / 2), "xz" == dir ? (positions[3 * i + 0] = x, positions[3 * i + 1] = 0, positions[3 * i + 2] = y) : (positions[3 * i + 0] = x, positions[3 * i + 1] = y, positions[3 * i + 2] = 0), colors[3 * i + 0] = 1, colors[3 * i + 1] = 1, colors[3 * i + 2] = 1
		}
		resolve({
			colors: colors,
			positions: positions
		}, id, [colors.buffer, positions.buffer])
	}
	this.generate = async function(geom, count) {
		init();
		let position = new Float32Array(geom.attributes.position.array);
		return (await Thread.shared().distributeParticles({
			position: position,
			count: count
		}, [position.buffer])).position
	}, this.generateInstanced = async function(geom, count) {
		init();
		let position = new Float32Array(geom.attributes.position.array),
			offset = new Float32Array(geom.attributes.offset.array),
			scale = new Float32Array(geom.attributes.scale.array),
			orientation = new Float32Array(geom.attributes.orientation.array);
		return (await Thread.shared().distributeParticles({
			position: position,
			offset: offset,
			scale: scale,
			orientation: orientation,
			count: count
		}, [position.buffer, offset.buffer, scale.buffer, orientation.buffer])).position
	}, this.generateAll = async function(geom, count) {
		init();
		let position = new Float32Array(geom.attributes.position.array),
			normal = new Float32Array(geom.attributes.normal.array),
			uv = new Float32Array(geom.attributes.uv.array);
		return await Thread.shared().distributeParticles({
			position: position,
			normal: normal,
			uv: uv,
			count: count
		}, [position.buffer, normal.buffer, uv.buffer])
	}, this.generateSkinned = async function(geom, count) {
		init();
		let position = new Float32Array(geom.attributes.position.array),
			normal = new Float32Array(geom.attributes.normal.array),
			uv = new Float32Array(geom.attributes.uv.array),
			skinIndex = new Float32Array(geom.attributes.skinIndex.array),
			skinWeight = new Float32Array(geom.attributes.skinWeight.array);
		return await Thread.shared().distributeParticles({
			position: position,
			normal: normal,
			uv: uv,
			skinIndex: skinIndex,
			skinWeight: skinWeight,
			count: count
		}, [position.buffer, normal.buffer, uv.buffer, skinIndex.buffer, skinWeight.buffer])
	}, this.generatePointCloud = async function(path, textureSize) {
		path.includes("assets/geometry") || (path = "assets/geometry/" + path), path.includes(".json") || (path += ".json"), path = Assets.getPath(path), init();
		let fn = path.includes("generateGrid") ? Thread.shared().generatePointGrid : Thread.shared().generatePointCloud,
			data = await fn({
				path: Thread.absolutePath(path),
				textureSize: textureSize
			});
		return {
			positions: new AntimatterAttribute(data.positions, 3),
			colors: new AntimatterAttribute(data.colors, 3)
		}
	}
}), "static"), Class((function DreamwavePortal() {
	const _this = this;
	var _screen, _view;

	function updateTime() {
		let d = new Date,
			seconds = 60 * d.getMinutes() + d.getSeconds(),
			step = 60 * _this.portalConfig.duration,
			timeleft = step - seconds % step,
			secondString = (timeleft % 60).toString();
		1 == secondString.length && (secondString = "0" + secondString), _this.portalState.remaining = parseInt(timeleft / 60) + ":" + secondString, 1 == timeleft && async function hop() {
			if (_this.flag("hopping")) return;
			_this.flag("hopping", !0), _this.portalState.connected = !1, await _this.disconnectMultiplayer(), await _this.wait(60 * (_this.portalConfig.delayReconnect || .5) * 1e3), await _this.configureMultiplayer(), _screen?.reset?.(), await _this.wait(500), _this.portalState.connected = !0, _this.flag("hopping", !1)
		}()
	}
	this.portalState = AppState.createLocal({
		connected: !0
	}), this.initPortal = function(config) {
		_this.portalConfig = config, config.name = Utils.getConstructorName(_this);
		let debugMode = !Config.PROD && Utils.query("debugPortal");
		debugMode ? Storage.set("dreamportal_need_clear", !0) : !Config.PROD && Storage.get("dreamportal_need_clear") && localStorage.clear(), _screen = PortalUtil.isPortal || debugMode ? _this.virtualScreen = _this.initClass(PortalElectronCamera, _this) : _this.virtualScreen = _this.initClass(PortalVirtualScreen, _this), config.duration && setInterval(updateTime, 500)
	}, this.createInteractionRenderer = function(View) {
		let view = _this.initClass(View, _screen);
		return _this.initClass(PortalInteractionRenderer, _this, _screen, view), _view = view, view
	}, this.setKinectHandCalibration = function(x, y, z) {
		_screen.setCalibration?.(x, y, z)
	}, this.portalReset = function() {
		_screen?.reset?.(), _view?.reset?.()
	}
})), Class((function PortalElectronCamera(_env) {
	Inherit(this, Component);
	const _this = this;
	var _camera, _bodies = [],
		_v3 = new Vector3,
		_v32 = new Vector3,
		_v33 = new Vector3,
		_offset = new Vector3,
		_calibration = new Vector3(.1, .1, .1);
	async function setupPlayer() {
		PlayerModel.set("event_screen", {
			p: _camera.group.getWorldPosition().toArray(),
			q: _camera.group.getWorldQuaternion().toArray()
		}), PlayerModel.set("user_hidden", !0), await _this.wait(1e3);
		let player = _env.getPlayerController();
		player || (await _this.wait(1e3), player = _env.getPlayerController()), player.extraData.sB = _bodies, _env.getDOMElement().hide();
		let offset = new Group;
		offset.scale.setScalar(10), offset.prefix = "PortalCamera_ChatZoneOffset" + (_this.parent.portalConfig.name || ""), MeshUIL.add(offset), _this.delayedCall((async _ => {
			let pos = _camera.group.position.clone();
			pos.y -= .3, player.group.position.copy(pos), await Multiplayer.wait("room"), await _this.wait(1e3), _env.videoChatZones?.createAndJoinZone((new Vector3).copy(pos).add(offset.position), offset.scale.x), GameCenterMedia.getUserStream().then((userStream => GameCenterMedia.userStream.disableAudio()))
		}), 2e3)
	}!async function() {
		GameCenter.portal = !0, await defer(), (_camera = _this.initClass(BaseCamera)).prefix = "PortalCamera" + (_this.parent.portalConfig.name || ""), _camera.decomposeDirty = !0, CameraUIL.add(_camera), _this.delayedCall((async _ => {
			_env.setCamera(_camera), _this.parent.portalConfig.viewOnly || (await setupPlayer(), async function initCamera() {
				GameCenterMedia.createLocal({
					live: !0,
					host: !0
				}).publishBroadcast("event_screen", {
					screenShare: !1
				})
			}(), window.Kinect && _this.parent.portalConfig.kinect && function initKinect() {
				let arch = GPU.detect("nvidia") ? "cuda" : "cpu";
				"cpu" == arch && console.warn("Portal::Kinect is running in slow CPU mode because non NVIDIA GPU");
				Kinect.init(arch), _this.startRender((_ => {
					PhysicalSync.throttle = !1, _bodies.length = 0, Kinect.velocity.bodyArray.forEach((body => {
						_bodies.push(function getTransmittable(body) {
							body.transmit || (body.transmit = {
								id: 0,
								l: [],
								r: [],
								vL: 0,
								vR: 0
							});
							return body.transmit.id = body.index, body.hands.forEach(((hand, i) => {
								_v3.set(0, 0, -2).applyQuaternion(_this.group.quaternion), _v32.copy(_this.group.position).add(_v3), _v33.copy(hand.pos3d), _v33.multiply(_calibration), _v32.add(_v33), _v32.add(_offset), _v32.toArray(body.transmit[0 == i ? "l" : "r"]), body.transmit[0 == i ? "vL" : "vR"] = hand.velocity.length()
							})), body.transmit
						}(body))
					}))
				}))
			}())
		}), 2e3), _this.group = _camera.group
	}(), this.reset = function() {
		setupPlayer()
	}, this.onInvisible = this.onDestroy = function() {
		_env.videoChatZones?.popJoinedZone()
	}, this.setCalibration = function(x, y, z, px = 0, py = 0, pz = 0) {
		_calibration.set(x, y, z), _offset.set(px, py, pz)
	}
})), Class((function PortalInteractionRenderer(_env, _screen, _view) {
	Inherit(this, Component);
	const _this = this;
	var _bodies = {},
		_v3 = new Vector3;

	function loop() {
		_env.players && _env.players.forEach((player => {
			if (player.extraData && player.extraData.sB) {
				player.extraData.sB.forEach((body => {
					if (!body.l || !body.l.length) return;
					let create = !1;
					if (!_bodies[body.id]) {
						let l = new Vector3,
							r = new Vector3,
							velocityL = _this.initClass(VelocityTracker, l),
							velocityR = _this.initClass(VelocityTracker, r);
						_bodies[body.id] = {
							l: l,
							r: r,
							velocityL: velocityL,
							velocityR: velocityR
						}, create = !0
					}
					let obj = _bodies[body.id];
					obj.l.lerp(_v3.fromArray(body.l), create ? 1 : .2, create), obj.r.lerp(_v3.fromArray(body.r), create ? 1 : .2, create), obj.vL = body.vL, obj.vR = body.vR, obj.velocityL?.update(), obj.velocityR?.update(), obj.time = Render.TIME, create && _view?.addPlayer(obj)
				}));
				for (let key in _bodies) {
					let obj = _bodies[key];
					Render.TIME - obj.time > 250 && (delete _bodies[key], _bodies[key]?.velocityL?.destroy?.(), _bodies[key]?.velocityR?.destroy?.(), _view?.removePlayer(obj))
				}
			}
		}), 24)
	}

	function playerLeave({
		player: player
	}) {
		player.magicWindow && (_view?.removePlayer(player.magicWindow), player.magicWindow.velocityL?.destroy?.(), player.magicWindow.velocityR?.destroy?.(), delete player.magicWindow)
	}
	_this.startRender(loop), _this.events.sub(Player.LEAVE, playerLeave), this.reset = function() {
		_bodies = {}
	}
})), Class((function PortalVirtualScreen(_env) {
	Inherit(this, Object3D);
	const _this = this;
	var _gcm, _player, _stream;

	function loop() {
		try {
			let dist = _player.group.position.distanceTo(_this.group.position),
				volume = Math.range(dist, 8, 11, 1, 0, !0);
			_stream && _stream.setVolume(100 * volume)
		} catch (e) {}
	}

	function playerJoin({
		player: player
	}) {
		_this.bindState(player.state, "event_screen", showEventScreen)
	}

	function playerLeave({
		player: player
	}) {
		player.state.get("event_screen") && function hideEventScreen() {
			_this.flag("haveScreen", !1), _gcm.disconnectFromBroadcast("event_screen"), _this.stopRender(loop, 24), _this.parent.portalState.broadcast = null
		}()
	}
	async function showEventScreen(data) {
		_this.flag("haveScreen") || (_this.flag("haveScreen", !0), _this.group.position.fromArray(data.p), _this.group.quaternion.fromArray(data.q), _this.group.visible = !0, _gcm.connectToBroadcast("event_screen"), _player = _this.parent.getPlayerController(), _this.startRender(loop))
	}

	function handleBroadcast(stream) {
		stream ? (_stream = stream, _this.parent.portalState.broadcast = stream) : _this.parent.portalState.broadcast = null
	}! function addListeners() {
		_this.events.sub(Player.JOIN, playerJoin), _this.events.sub(Player.LEAVE, playerLeave)
	}(),
	function initVideo() {
		(_gcm = GameCenterMedia.createLocal()).state.bind("broadcast", handleBroadcast)
	}(), _this.group.visible = !1
})), Class((function Proton(_input, _group) {
	Inherit(this, Object3D);
	const _this = this;
	var _config, _size, _antimatter, _behaviorInput, _pointData;
	const prefix = this.prefix = `P_${_input.prefix}`;
	async function initConfig() {
		(_config = _this.uilConfig = InputUIL.create(prefix + "_config", _group)).setLabel("Config"), _config.addButton("load-values", {
			label: "Values",
			actions: [{
				title: "Load",
				callback: loadValues
			}, {
				title: "Save",
				callback: saveValues
			}]
		}).addButton("save", {
			label: "Configuration",
			actions: [{
				title: "Load",
				callback: loadConfig
			}, {
				title: "Save",
				callback: saveConfig
			}]
		}).addButton("load-shader", {
			label: "Shader",
			actions: [{
				title: "Load",
				callback: () => loadShader()
			}]
		}).addButton("load-behavior", {
			label: "Behavior",
			actions: [{
				title: "Load",
				callback: () => loadBehavior()
			}]
		});
		_config.addSelect("type", [{
			label: "Permanent",
			value: "permanent"
		}, {
			label: "Lifecycle",
			value: "lifecycle"
		}]), _config.addFile("initialPositions"), window.ProtonPhysics && _config.addToggle("enablePhysics", !1), _config.add("particleCount", 1e3), window.ProtonVolumeShadows && _config.addToggle("volumeShadows", !1);
		let output = [{
			label: "Particles",
			value: "particles"
		}, {
			label: "Custom",
			value: "custom"
		}];
		window.ProtonTubes && output.push({
			label: "Tubes",
			value: "tubes"
		}), window.ProtonMarchingCubes && output.push({
			label: "IsoSurface",
			value: "isosurface"
		}), _config.addSelect("output", output), _config.add("shader"), _config.get("shader") && _config.addTextarea("uniforms"), _config.add("class");
		_config.get("type");
		try {
			if (!1 === _input.get("visible")) throw "Layer set to invisible";
			_this.particleCount = _size = getSize(), initAntimatter()
		} catch (e) {
			Hydra.LOCAL && console.warn("Proton skipped", e), _this.disabled = !0
		}
	}

	function loadValues() {
		const name = prompt("Name of values to be loaded");
		if (null === name) return;
		let data = UILStorage.get(`proton_values_${name}`);
		data || alert(`No values ${name} found`), data = JSON.parse(data);
		let apply = (shader, obj) => {
			for (let key in obj) UILStorage.set(shader.UILPrefix + key, obj[key])
		};
		apply(_this.behavior, data.behavior), apply(_this.shader, data.shader), _this.customClass && _this.customClass.saveValues && apply(_this.customClass.saveValues(), data.custom), alert("Values imported. Save and refresh.")
	}

	function saveValues() {
		const name = prompt("Name of values to be saved");
		if (null === name) return;
		let store = (shader, to) => {
				for (let key in shader.uniforms) {
					if (shader.uniforms[key].ignoreUIL) continue;
					let uilValue = UILStorage.get(shader.UILPrefix + key);
					void 0 !== uilValue && (to[key] = uilValue)
				}
			},
			output = {
				behavior: {},
				shader: {}
			};
		store(_this.behavior, output.behavior), store(_this.shader, output.shader), _this.customClass && _this.customClass.saveValues && (output.custom = {}, store(_this.customClass.saveValues(), output.custom)), UILStorage.setWrite(`proton_values_${name}`, JSON.stringify(output))
	}

	function loadConfig() {
		const name = prompt("Name of configuration to be loaded");
		if (null === name) return;
		let toLoad = UILStorage.get(`proton_config_${name}`);
		loadBehavior(toLoad), loadShader(toLoad), alert("Loaded. Save and refresh")
	}

	function saveConfig() {
		let name = prompt("Name of configuration to be saved");
		null !== name && UILStorage.setWrite(`proton_config_${name}`, prefix)
	}

	function loadShader(toLoad) {
		let shouldNotify = !toLoad;
		if (!toLoad) {
			const name = prompt("Name of shader to be loaded");
			if (null === name) return;
			toLoad = UILStorage.get(`proton_config_${name}`)
		}
		let copyConfig = InputUIL.create(toLoad + "_config", null);
		_config.copyFrom(copyConfig, ["shader", "uniforms"]), (_config.get("uniforms") || "").split("\n").forEach((line => {
			if (!line.includes(":")) return;
			let name = (line = line.replace(/ /g, "")).split(":")[0],
				shaderName = copyConfig.get("shader"),
				store = `${shaderName}/${shaderName}/${prefix}/`,
				lookup = `${shaderName}/${shaderName}/${toLoad}/`,
				val = UILStorage.get(lookup + name);
			val ? UILStorage.set(store + name, val) : (val = UILStorage.get(lookup + "_tx_" + name), val && UILStorage.set(store + "_tx_" + name, val))
		})), shouldNotify && alert("Loaded. Save and refresh")
	}

	function loadBehavior(toLoad) {
		let shouldNotify = !toLoad;
		if (!toLoad) {
			const name = prompt("Name of behavior to be loaded");
			if (null === name) return;
			toLoad = UILStorage.get(`proton_config_${name}`)
		}
		let copyConfig = InputUIL.create(toLoad + "_config", null);
		_config.copyFrom(copyConfig, ["type", "particleCount", "output", "class"]);
		let copyBehavior = InputUIL.create(toLoad + "_behavior", null);
		InputUIL.create(prefix + "_behavior", null).copyFrom(copyBehavior, ["uniforms", "data", "codeCount"]);
		let data = copyBehavior.get("data") || [],
			buniformString = copyBehavior.get("uniforms") + "\n";
		ListUIL.create(prefix + "_code", null).internalAddItems(data.length), data.forEach((postfix => {
			let toCode = InputUIL.create(prefix + postfix, null),
				fromCode = InputUIL.create(toLoad + postfix, null);
			toCode.copyFrom(fromCode, ["name", "code", "uniforms", "preset"]), buniformString += fromCode.get("uniforms") + "\n"
		})), buniformString.split("\n").forEach((line => {
			if (!line.includes(":")) return;
			let name = (line = line.replace(/ /g, "")).split(":")[0],
				lookup = "am_ProtonAntimatter_" + toLoad,
				store = "am_ProtonAntimatter_" + prefix,
				val = UILStorage.get(lookup + name);
			val && UILStorage.set(store + name, val)
		}));
		let className = copyConfig.get("class");
		className && (_this.customClass = _this.parent.initClass(window[className], _this, _group, _input), _this.customClass.loadConfig && _this.customClass.loadConfig(toLoad, prefix)), shouldNotify && alert("Loaded. Save and refresh")
	}

	function getSize() {
		if (_this.parent.data && _this.parent.data.particleCount) return "string" == typeof _this.parent.data.particleCount ? eval(_this.parent.data.particleCount) : _this.parent.data.particleCount;
		let size = _config.getNumber("particleCount");
		if (isNaN(size)) try {
			size = eval(_config.get("particleCount"))
		} catch (e) {
			throw "Proton particleCount is not a number or valid test function"
		}
		if (isNaN(size)) throw "Proton particleCount is falsy!";
		return _this.particleCount = size, size
	}
	async function initCustomClass() {
		_this.shader.addUniforms({
			DPR: {
				value: World.DPR,
				ignoreUIL: !0
			}
		});
		let className = _config.get("class");
		className && (_this.customClass = _this.parent.initClass(window[className], _this, _group, _input))
	}

	function parseUniforms(text, predefined) {
		if (!text) return {};
		let split = text.split("\n"),
			output = {};
		return split.forEach((line => {
			if (!(line = line.replace(/ /g, "")).length || !line.includes(":")) return;
			let split = line.split(":"),
				name = split[0],
				val = split[1];
			if (val.includes("[")) {
				let array = JSON.parse(val);
				switch (array.length) {
					case 2:
						output[name] = {
							value: (new Vector2).fromArray(array)
						};
						break;
					case 3:
						output[name] = {
							value: (new Vector3).fromArray(array)
						};
						break;
					case 4:
						output[name] = {
							value: (new Vector4).fromArray(array)
						};
						break;
					default:
						throw `Unknown uniform type ${line}`
				}
			} else "C" == val.charAt(0) ? predefined[name] = val.slice(1) : "T" === val ? output[name] = {
				value: null
			} : "OEST" === val ? output[name] = {
				value: null,
				oes: !0
			} : val.includes(["0x", "#"]) ? output[name] = {
				value: new Color(val)
			} : output[name] = {
				value: Number(val)
			}
		})), output
	}

	function getUniformGLSLType(obj) {
		return "number" == typeof obj.value ? "float" : obj.oes ? "samplerExternalOES" : null === obj.value || obj.value instanceof Texture ? "sampler2D" : obj.value instanceof Vector2 ? "vec2" : obj.value instanceof Vector3 || obj.value instanceof Vector3D ? "vec3" : obj.value instanceof Vector4 ? "vec4" : obj.value instanceof Color ? "vec3" : void 0
	}
	async function initBehavior(behavior) {
		let glsl = [],
			predefinedUniforms = {
				HZ: "float"
			},
			input;
		_behaviorInput ? input = _behaviorInput : (input = InputUIL.create(prefix + "_behavior", _group), input.setLabel("Behavior Uniforms"), input.addTextarea("uniforms"), input.add("data", "hidden"), input.add("codeCount", "hidden"), _behaviorInput = input);
		let map = {},
			list = [],
			count = input.getNumber("codeCount") || 0,
			data = input.get("data") || [],
			panel = ListUIL.create(prefix + "_code", _group);
		panel.setLabel("Behavior Code"), panel.onAdd(((name, input, index) => {
			list[index] || addCode(), input.group.add(list[index].group), list[index].mapId = name, map[name] = list[index], input.setLabel(map[name].get("name") || "Code")
		})), panel.onRemove((name => {
			let postfix = map[name].postfix;
			list.remove(map[name]), data.remove(postfix), input.setValue("data", JSON.stringify(data))
		})), panel.onSort((array => {
			let arr = [];
			array.forEach((name => {
				arr.push(map[name].postfix)
			})), data = arr, input.setValue("data", JSON.stringify(data))
		}));
		let uniforms = parseUniforms(input.get("uniforms")),
			createCode = postfix => {
				let input = InputUIL.create(prefix + postfix, _group, !0);
				if (input.prefix = prefix + postfix, input.postfix = postfix, input.setLabel("Editor"), input.add("name", "hidden"), Proton.ignorePresets && Proton.ignorePresets.includes(input.get("name"))) return;
				ProtonPresets.bind(input), input.customPresetCallback && input.customPresetCallback(_this);
				let code = input.get("code") || "";
				if (!input.disabled && code.length) {
					for (uniforms = Utils.mergeObject(uniforms, parseUniforms(input.get("uniforms"), predefinedUniforms)); code.includes("#test ");) try {
						let test = code.split("#test ")[1],
							name = test.split("\n")[0],
							glsl = code.split("#test " + name + "\n")[1].split("#endtest")[0];
						eval(name) || (code = code.replace(glsl, "")), code = code.replace("#test " + name + "\n", ""), code = code.replace("#endtest", "")
					} catch (e) {
						throw "Error parsing test :: " + e
					}
					glsl.push(code)
				}
				list.push(input)
			};
		data.forEach(createCode);
		let addCode = _ => {
			count++, data.push(`code_${count}`), input.setValue("data", JSON.stringify(data)), input.setValue("codeCount", count), createCode(`code_${count}`)
		};
		behavior instanceof AntimatterPass && (behavior.addInput("tOrigin", _antimatter.vertices), behavior.addInput("tAttribs", _antimatter.attribs), behavior.addUniforms(uniforms));
		let filledRequire = [],
			insertUniform = (code, line) => code.split("//uniforms").join(line + "\n//uniforms"),
			insertCode = (code, line) => code.split("//code").join(line + "\n//code"),
			insertRequire = (code, line) => {
				let name = line.split("require(")[1].split(")")[0];
				return filledRequire.includes(name) ? code : (filledRequire.push(name), code.split("//require").join(Shaders.getShader(name) + "\n//require"))
			},
			insertGLSL = (code, line) => {
				if (line.includes("#require")) {
					let split = line.split("\n");
					for (let l of split) code = l.includes("#require") ? insertRequire(code, l) : insertCode(code, l);
					return code
				}
				return insertCode(code, line)
			};
		behavior.onCreateShader = code => {
			for (let name in uniforms) code = insertUniform(code, `uniform ${getUniformGLSLType(uniforms[name])} ${name};`);
			for (let name in predefinedUniforms) code = insertUniform(code, `uniform ${predefinedUniforms[name]} ${name};`);
			for (let str of glsl) code = insertGLSL(code, str);
			return _this.tubes && (code = _this.tubes.overrideShader(code)), Renderer.type == Renderer.WEBGL2 && (code = code.replace(/gl_FragColor/g, "FragColor")), code.includes("samplerExternalOES") && window.AURA && "android" == Device.system.os && (code = "#version 300 es\n#extension GL_OES_EGL_image_external_essl3 : require\n" + code.replace("#version 300 es", "")), code
		}, behavior.uniforms.uMaxCount = {
			value: _this.particleCount,
			ignoreUIL: !0
		}, ShaderUIL.add(behavior, _group).setLabel("Behavior Shader"), behavior.uniforms.HZ = {
			value: 1
		}, _this.startRender((_ => {
			behavior.uniforms.HZ.value = Render.HZ_MULTIPLIER
		}), 10), ProtonPresets.onCodeEdit = rebuildShader
	}
	async function rebuildShader() {
		let lifecycle = "lifecycle" == _config.get("type"),
			behavior = _this.initClass(AntimatterPass, "ProtonAntimatter" + (lifecycle ? "Lifecycle" : ""), {
				unique: prefix,
				customCompile: prefix + Utils.uuid()
			});
		await initBehavior(behavior), behavior.initialize(64), behavior.upload(), _this.behavior.shader._gl && (_this.behavior.shader._gl = behavior.shader._gl), _this.behavior.shader._metal && (_this.behavior.shader._metal = behavior.shader._metal), _this.behavior.shader._gpu && (_this.behavior.shader._gpu = behavior.shader._gpu)
	}

	function completeShader(shader) {
		let transparent = _input.get("transparent"),
			depthWrite = _input.get("depthWrite"),
			depthTest = _input.get("depthTest"),
			blending = _input.get("blending"),
			castShadow = _input.get("castShadow"),
			receiveShadow = _input.get("receiveShadow");
		"boolean" == typeof depthWrite && (shader.depthWrite = depthWrite), "boolean" == typeof depthTest && (shader.depthTest = depthTest), "boolean" == typeof transparent && (shader.transparent = transparent), "boolean" == typeof castShadow && (_this.mesh.castShadow = castShadow), "boolean" == typeof receiveShadow && (shader.receiveShadow = receiveShadow), blending && (shader.blending = blending), shader.uniforms.tRandom = {
			value: _antimatter.attribs
		}
	}

	function update() {
		_this.preventUpdate || _antimatter.update()
	}
	async function initAntimatter() {
		let lifecycle = "lifecycle" == _config.get("type");
		_config.get("enablePhysics") ? (_config.addVector("width", [0, 128]), _config.addVector("height", [0, 128]), _config.addVector("depth", [0, 128])) : (_config.addVector("width", [-1, 1]), _config.addVector("height", [-1, 1]), _config.addVector("depth", [-1, 1]));
		let dimensions = {
			w: _config.get("width") || [-1, 1],
			h: _config.get("height") || [-1, 1],
			d: _config.get("depth") || [-1, 1],
			pot: "tubes" === _config.get("output") || !0 === _config.get("volumeShadows") || "isosurface" === _config.get("output")
		};
		try {
			_config.getFilePath("initialPositions") && (_pointData = (await get(obj.src))?.positions), _pointData && (_this.particleCount = _pointData.length / 3)
		} catch (e) {}
		_antimatter = _this.initClass(Antimatter, _size, dimensions, World.RENDERER, _pointData), Proton.forceCloneVertices.includes(_config.get("class")) && (_antimatter.cloneVertices = !0), _this.antimatter = _antimatter, await _antimatter.ready();
		let output = _config.get("output");
		"tubes" == output && (_this.tubes = _this.initClass(ProtonTubes, _this)), "isosurface" == output && (_this.surface = _this.initClass(ProtonMarchingCubes, _this));
		let overrideShader, wildcard = _input.get("wildcard");
		if (wildcard && wildcard.includes(".behavior")) {
			let layer = await _this.parent.getLayer(wildcard.split(".")[0]);
			await _this.wait(layer, "behavior"), _this.behavior = layer.behavior
		} else {
			let behavior = _this.initClass(AntimatterPass, "ProtonAntimatter" + (lifecycle ? "Lifecycle" : ""), {
				unique: prefix,
				customCompile: prefix
			});
			_this.behavior = behavior, initBehavior(behavior)
		}
		let shaderName = _config.get("shader");
		if (shaderName)
			if (shaderName.includes(".shader")) {
				let layer = await _this.parent.getLayer(shaderName.split(".")[0]);
				await _this.wait(layer, "shader"), overrideShader = layer.shader
			} else {
				let uniforms = parseUniforms(_config.get("uniforms"));
				uniforms.unique = prefix + (_this.onGenerateUniqueShader ? _this.onGenerateUniqueShader() : ""), _antimatter.useShader(shaderName, uniforms)
			} _antimatter.addPass(_this.behavior), _this.mesh = _antimatter.getMesh(), _this.onCreateMesh && _this.onCreateMesh(_this.mesh), output && "particles" != output || _this.delayedCall((_ => {
			_this.add(_antimatter.mesh)
		}), 480), Utils.query("uilOnly") || _this.startRender(update, RenderManager.AFTER_LOOPS), shaderName && !shaderName.includes(".shader") && (ShaderUIL.add(_antimatter.shader, _group).setLabel("Shader"), completeShader(_antimatter.shader)), overrideShader && _antimatter.overrideShader(overrideShader), _this.shader = _antimatter.shader, _this.initialized = !0, lifecycle && (_this.spawn = _this.initClass(AntimatterSpawn, _this, _group, _input)), initCustomClass(), _config.get("volumeShadows") && _this.initClass(ProtonVolumeShadows, _this, _group, _input), _config.get("enablePhysics") && _this.initClass(ProtonPhysics, _this, _group, _input)
	}
	async function upload(sync = !0) {
		if (_this.disabled) return;
		await _this.ready();
		let output = _config.get("output"),
			uploadFuncName = sync ? "uploadSync" : "upload";
		await _antimatter[uploadFuncName](!output || "particles" === output), _this.spawn && await _this.spawn.upload(), _this.tubes && await _this.tubes[uploadFuncName]()
	}
	this.uilInput = _input, this.uilGroup = _group, this.prefix = prefix, initConfig(), this.parseUniforms = parseUniforms, this.ready = function() {
		return this.wait(this, "initialized")
	}, this.applyToInstancedGeometry = function(geometry) {
		geometry.addAttribute("lookup", new GeometryAttribute(_antimatter.getLookupArray(), 3, 1)), geometry.addAttribute("random", new GeometryAttribute(_antimatter.getRandomArray(), 4, 1)), geometry.maxInstancedCount = _size
	}, this.applyToShader = function(shader) {
		shader.addUniforms({
			tPos: _antimatter.getOutput(),
			tPrevPos: _antimatter.getPrevOutput()
		})
	}, this.upload = function() {
		let visible, count = 0;
		return async function() {
			0 === count && (visible = _this.group.visible, _this.group.visible = !1, count += 1), await upload(!1), count -= 1, 0 === count && (_this.group.visible = visible)
		}
	}(), this.uploadSync = async function() {
		await upload(!0)
	}, this.stopUpdating = function() {
		_this.stopRender(update, RenderManager.AFTER_LOOPS)
	}, this.update = update, this.set("renderOrder", (async v => {
		await _this.ready(), await _antimatter.ready(), _antimatter.mesh.renderOrder = v
	})), this.get("renderOrder", (v => _antimatter.mesh.renderOrder))
}), (_ => {
	Proton.forceCloneVertices = [], Proton.ignore = function(name) {
		Proton.ignorePresets || (Proton.ignorePresets = []), Proton.ignorePresets.push(name)
	}
})), Class((function ProtonPresets() {
	const _this = this,
		LIST = [{
			label: "Custom Code",
			value: "custom"
		}, {
			label: "Curl Noise",
			value: "curl"
		}, {
			label: "Sine Move",
			value: "sine"
		}, {
			label: "Plane Shape",
			value: "planeshape"
		}, {
			label: "3D Shape",
			value: "3dshape"
		}, {
			label: "Point Cloud",
			value: "pointcloud"
		}, {
			label: "Force",
			value: "force"
		}, {
			label: "Follow",
			value: "follow"
		}, {
			label: "Mouse Fluid",
			value: "fluid"
		}],
		CALLBACKS = {
			custom: function customCode(input) {
				input.setValue("name", "Custom Code"), input.setLabel("Custom Code")
			},
			curl: function curlNoise(input) {
				input.setValue("name", "Curl Noise"), input.setLabel("Curl Noise");
				input.setValue("uniforms", "\n        uCurlNoiseScale: 1\n        uCurlTimeScale: 0\n        uCurlNoiseSpeed: 0\n        "), setPresetCodeIfRequired(input, "#require(curl.glsl)\n\nvec3 curl = curlNoise(pos * uCurlNoiseScale*0.1 + (time * uCurlTimeScale * 0.1));\npos += curl * uCurlNoiseSpeed * 0.01 * HZ;", "uCurlNoise")
			},
			sine: function sineMove(input) {
				input.setValue("name", "Sine Move"), input.setLabel("Sine Move");
				input.setValue("uniforms", "\n        uSinSpeed: 1\n        uSinMovement: 0\n        "), setPresetCodeIfRequired(input, "pos = origin;\npos.x += sin(time*uSinSpeed + radians(360.0 * random.x)) * 0.03 * random.z * uSinMovement * HZ;\npos.y += sin(time*uSinSpeed + radians(360.0 * random.y)) * 0.03 * random.w * uSinMovement * HZ;\npos.z += sin(time*uSinSpeed + radians(360.0 * random.w)) * 0.03 * random.x * uSinMovement * HZ;", "uSinSpeed")
			},
			planeshape: function planeShape(input) {
				input.setValue("name", "Plane Shape"), input.setLabel("Plane Shape");
				input.setValue("uniforms", "\n        uTakePlaneShape: 1\n        uPlaneScale: 1\n        tPlaneTexture: Csampler2D\n        "), setPresetCodeIfRequired(input, "vec2 planeLookup = texture2D(tPlaneTexture, uv).xy;\nvec3 plane;\nplane.x = uPlaneScale * 0.5 * range(planeLookup.x, 0.0, 1.0, -1.0, 1.0);\nplane.y = uPlaneScale * 0.5 * -range(planeLookup.y, 0.0, 1.0, -1.0, 1.0);\nif (uTakePlaneShape > 0.5) pos = plane;", "uPlaneScale"), input.customPresetCallback = proton => {
					proton.behavior.addUniforms({
						tPlaneTexture: {
							value: null
						}
					})
				}
			},
			"3dshape": function shape3D(input) {
				input.setValue("name", "3D Shape"), input.setLabel("3D Shape"), input.add("geometry");
				let geometry = input.get("geometry");
				input.setValue("uniforms", "\n        tShape3D: Csampler2D\n        "), setPresetCodeIfRequired(input, "vec3 shape3d = texture2D(tShape3D, uv).xyz;", "tShape3D"), input.customPresetCallback = proton => {
					let create = async g => {
						let geom = await GeomThread.loadGeometry(g),
							distribution = await ParticleDistributor.generate(geom, proton.antimatter.particleCount),
							attribute = new AntimatterAttribute(distribution, 3);
						proton.behavior.addInput("tShape3D", attribute)
					};
					geometry && create(geometry), proton.set3DShape = create
				}
			},
			pointcloud: function pointCloud(input) {
				input.setValue("name", "Point Cloud"), input.setLabel("Point Cloud"), input.add("file");
				let file = input.get("file");
				input.setValue("uniforms", "\n        tPointCloud: Csampler2D\n        "), setPresetCodeIfRequired(input, "vec3 pointShape = texture2D(tPointCloud, uv).xyz;", "tPointCloud"), input.customPresetCallback = proton => {
					let create = async filePath => {
						let data;
						"string" == typeof filePath ? (filePath += "-" + proton.antimatter.powerOf2, data = await ParticleDistributor.generatePointCloud(filePath, proton.antimatter.textureSize)) : data = filePath, proton.behavior.shader.uniforms.tPointCloud && (proton.behavior.shader.uniforms.tPointCloud.value.destroy(), proton.shader.uniforms.tPointColor.value.destroy()), proton.behavior.addInput("tPointCloud", data.positions), proton.shader.addUniforms({
							tPointColor: {
								value: data.colors
							}
						})
					};
					file || (file = proton.parent.data ? proton.parent.data.pointCloudFile : void 0), file && create(file), proton.setPointCloud = create
				}
			},
			force: function force(input) {
				input.setValue("name", "Force"), input.setLabel("Force");
				input.setValue("uniforms", "\n        uForceDir: [0, 1, 0]\n        uForceScale: 1\n        "), setPresetCodeIfRequired(input, "vec3 force = normalize(uForceDir) * uForceScale * 0.1;\npos += force * HZ;", "uForceDir")
			},
			follow: function follow(input) {
				input.setValue("name", "Follow"), input.setLabel("Follow");
				input.setValue("uniforms", "\n        uFollowPos: [0, 0, 0]\n        uFollowRadius: 2\n        uFollowLerp: 0.7\n        "), setPresetCodeIfRequired(input, "float speed = range(random.x, 0.0, 1.0, 0.5, 1.5);\nvec3 followPos = uFollowPos;\nfollowPos.x += range(random.y, 0.0, 1.0, -1.0, 1.0) * uFollowRadius;\nfollowPos.y += range(random.z, 0.0, 1.0, -1.0, 1.0) * uFollowRadius;\nfollowPos.z += range(random.w, 0.0, 1.0, -1.0, 1.0) * uFollowRadius;\npos += (followPos - pos) * (uFollowLerp*0.1*speed*HZ);", "followPos")
			},
			fluid: function fluid(input) {
				input.setValue("name", "Mouse Fluid"), input.setLabel("Mouse Fluid");
				input.setValue("uniforms", "\n        uProjMatrix: Cmat4\n        uProjNormalMatrix: Cmat4\n        uModelMatrix: Cmat4\n        tFluidMask: Csampler2D\n        tFluid: Csampler2D\n        uMouseStrength: 1\n        "), setPresetCodeIfRequired(input, "#require(glscreenprojection.glsl)\n\nvec3 mpos = vec3(uModelMatrix * vec4(pos, 1.0));\nvec2 screenUV = getProjection(mpos, uProjMatrix);\nvec3 flow = vec3(texture2D(tFluid, screenUV).xy, 0.0);\napplyNormal(flow, uProjNormalMatrix);\npos += flow * 0.0001 * HZ * uMouseStrength * texture2D(tFluidMask, screenUV).r;", "glscreenprojection");
				let findCamera = proton => {
					let camera = World.CAMERA,
						p = proton.group._parent;
					for (; p;) p instanceof Scene && p.nuke && (camera = p.nuke.camera), p = p._parent;
					return camera
				};
				input.customPresetCallback = async proton => {
					if (!("MouseFluid" in window)) return void alert("'mousefluid' module not found. To use Mouse Fluid preset, import module, load the MouseFluid class, and add a layer named 'fluid' with customCLass FluidLayer.");
					let camera = findCamera(proton),
						projection = proton.initClass(GLScreenProjection, camera);
					projection.start(), proton.projection = projection, Global.PLAYGROUND && Render.start((_ => {
						let newCamera = findCamera(proton);
						newCamera != camera && (camera = newCamera, projection.camera = camera)
					}), 10), proton.wait("behavior").then((_ => {
						proton.behavior.addUniforms({
							uProjMatrix: projection.uniforms.projMatrix,
							uModelMatrix: projection.uniforms.modelMatrix,
							uProjNormalMatrix: projection.uniforms.normalMatrix
						}), MouseFluid.instance().applyTo(proton.behavior)
					}))
				}
			}
		};

	function setPresetCodeIfRequired(input, presetCode, keyShaderComponentString) {
		const editorCode = input.get("code");
		editorCode && editorCode.includes(keyShaderComponentString) || input.setValue("code", presetCode)
	}
	this.register = function(name, callback) {
		let key = name.replace(/ /g, "").toLowerCase();
		LIST.push({
			label: name,
			value: key
		}), CALLBACKS[key] = callback
	}, this.bind = function(input) {
		input.add("code", "hidden");
		input.add("uniforms", "hidden"), input.addSelect("preset", LIST);
		let callback = CALLBACKS[input.get("preset")];
		callback && callback(input), input.addButton("btn", {
			actions: [{
				title: "Edit Code",
				callback: _ => {
					let editor = new UILExternalEditor(input.get("name") || "Code", 300);
					editor.setCode(input.get("code"), "c"), editor.onSave = value => {
						input.setValue("code", value), _this.onCodeEdit?.()
					}, UIL.add(editor)
				}
			}],
			hideLabel: !0
		})
	}
}), "static"), Class((function ProtonTubes(_proton) {
	Inherit(this, Object3D);
	const _this = this;
	var _config, _segments, _textureSize, _count, _shader, _geom;
	this.padding = 1e3, async function() {
		! function initConfig() {
			(_config = InputUIL.create("tubes_" + _proton.prefix, _proton.uilGroup)).setLabel("Tubes"), _config.add("segments", 5), _config.add("sides", 4), _config.add("lerp", .2), _config.add("resetDelta", 10), _config.onUpdate = key => {
				"lerp" == key && _proton.behavior.setUniform("uLerp", _config.getNumber("lerp")), "resetDelta" == key && _proton.behavior.setUniform("uResetDelta", _config.getNumber("resetDelta"))
			}
		}(), await async function initBuffers() {
				let segments = _this.parent.parent.data && _this.parent.parent.data.tubeSegments ? _this.parent.parent.data.tubeSegments : _config.getNumber("segments");
				_this.padding = 2 * _segments;
				let indexBuffer = await _proton.antimatter.createFloatArrayAsync(4, !0),
					count = indexBuffer.length / 4;
				for (let i = 0; i < count; i++) indexBuffer[4 * i + 0] = i % segments, indexBuffer[4 * i + 1] = Math.floor(i / segments), indexBuffer[4 * i + 2] = i % segments == 0 ? 1 : 0, indexBuffer[4 * i + 3] = 1;
				_textureSize = _proton.antimatter.textureSize, _segments = segments, _count = count / segments;
				let indices = _this.initClass(AntimatterAttribute, indexBuffer, 4);
				_proton.behavior.addInput("tIndices", indices), _proton.behavior.addUniforms({
					uLerp: {
						value: _config.getNumber("lerp"),
						ignoreUIL: !0
					},
					uResetDelta: {
						value: _config.getNumber("resetDelta"),
						ignoreUIL: !0
					},
					textureSize: {
						value: _textureSize,
						ignoreUIL: !0
					},
					lineSegments: {
						value: segments,
						ignoreUIL: !0
					}
				})
			}(), await _this.wait(_proton.spawn, "lifeOutput"),
			function initGeometry() {
				let shape = require("GenerateTube")(_config.getNumber("sides"), _segments - 1, !1),
					geom = new Geometry;
				geom.addAttribute("cNumber", new GeometryAttribute(new Float32Array(_count), 1, 1));
				for (let key in shape.attributes) geom.addAttribute(key, shape.attributes[key]);
				for (let i = 0; i < _count; i++) geom.attributes.cNumber.array[i] = i;
				_geom = geom
			}(),
			function initShader() {
				let shaderName = _proton.uilConfig.get("shader"),
					modifyShader = !0;
				const attr = {
					noAttributes: !0,
					unique: shaderName,
					thickness: {
						type: "f",
						value: 1
					},
					textureSize: {
						type: "f",
						value: _textureSize,
						ignoreUIL: !0
					},
					lineSegments: {
						type: "f",
						value: _segments,
						ignoreUIL: !0
					},
					radialSegments: {
						type: "f",
						value: _config.getNumber("sides"),
						ignoreUIL: !0
					},
					taper: {
						type: "f",
						value: 0
					},
					tLife: {
						type: "t",
						value: _proton.spawn.lifeOutput,
						ignoreUIL: !0
					},
					tRandom: {
						type: "t",
						value: _proton.antimatter.random,
						ignoreUIL: !0
					}
				};
				shaderName.includes("ProtonCustom") ? (_shader = _this.initClass(Shader, shaderName, attr), modifyShader = !1) : _shader = _this.initClass(shaderName && shaderName.includes("PBR") ? PBRShader : Shader, "ProtonTube", shaderName || "ProtonTube", attr);
				if (_this.wait(_proton.shader.uniforms, "tLifeData").then((_ => {
						_shader.addUniforms({
							tLifeData: _proton.shader.uniforms.tLifeData,
							tRandom: _proton.shader.uniforms.tRandom
						})
					})), _shader.addUniforms(_proton.parseUniforms(_proton.uilConfig.get("uniforms"))), shaderName && modifyShader) {
					let vs = Shaders.getShader(shaderName + ".vs");
					if (vs && _shader.vertexShader) {
						if (vs = vs.split("void main() {"), vs[0].includes("extrudeTube")) {
							let extrude = vs[0].split("void extrudeTube() {")[1].split("}")[0];
							vs[0] = vs[0].replace("void extrudeTube() {" + extrude + "}", ""), _shader.vertexShader = _shader.vertexShader.replace("//neutrinovs", extrude)
						}
						let params = vs[0].split("\n"),
							main = vs[1].slice(0, vs[1].lastIndexOf("}")),
							paramOutput = [];
						for (let line of params) _shader.vertexShader.includes(line) && "}" != line.trim() || paramOutput.push(line);
						_shader.vertexShader = _shader.vertexShader.replace("//neutrinoparams", paramOutput.join("\n")), _shader.vertexShader = _shader.vertexShader.replace("//neutrinovspost", main)
					}
					window[shaderName] && _this.initClass(window[shaderName], _shader, _shader)
				}
				ShaderUIL.add(_shader, _proton.uilGroup).setLabel("Tube Shader"), _proton.applyToShader(_shader), _this.shader = _shader,
					function completeShader(shader) {
						let transparent = _proton.uilInput.get("transparent"),
							depthWrite = _proton.uilInput.get("depthWrite"),
							depthTest = _proton.uilInput.get("depthTest"),
							blending = _proton.uilInput.get("blending"),
							castShadow = _proton.uilInput.get("castShadow"),
							receiveShadow = _proton.uilInput.get("receiveShadow");
						"boolean" == typeof depthWrite && (shader.depthWrite = depthWrite);
						"boolean" == typeof depthTest && (shader.depthTest = depthTest);
						"boolean" == typeof transparent && (shader.transparent = transparent);
						"boolean" == typeof castShadow && defer((_ => _this.mesh.castShadow = castShadow));
						"boolean" == typeof receiveShadow && (shader.receiveShadow = receiveShadow);
						blending && (shader.blending = blending)
					}(_shader)
			}(),
			function initMesh() {
				let mesh = new Mesh(_geom, _shader);
				mesh.frustumCulled = !1, _this.add(mesh), _this.mesh = mesh
			}(), _this.canEmit = !0
	}(), this.overrideShader = function(code) {
		let uniforms = Shaders.getShader("ProtonTubesUniforms.fs"),
			main = Shaders.getShader("ProtonTubesMain.fs"),
			movement = (code = code.replace("//uniforms", uniforms)).split("//abovespawn")[1].split("//code")[0];
		return main = main.replace("//main", movement), main = main.split("main() {")[1].slice(0, -1), code = code.replace(movement, main)
	}, this.release = function(pos, count = 1, radius = 0, velocity, color) {
		if (!_this.canEmit) return;
		let positions = [],
			velocities = velocity ? [] : null,
			colors = color ? [] : null;
		_proton.spawn.index > _proton.spawn.total - _this.padding && (_proton.spawn.index = -1);
		for (let i = 0; i < count; i++) {
			let x, y, z;
			if (pos.cylinder) {
				let ang = 2 * Math.random() * Math.PI;
				x = pos.x + Math.cos(ang) * radius, y = pos.y + Math.random() * pos.height, z = pos.z + Math.sin(ang) * radius
			} else x = pos.x + Math.random(-1, 1, 4) * radius, y = pos.y + Math.random(-1, 1, 4) * radius, z = pos.z + Math.random(-1, 1, 4) * radius;
			for (let j = 0; j < _segments; j++) positions.push(x, y, z), velocities && velocities.push(velocity.x, velocity.y, velocity.z), colors && colors.push(color.r, color.g, color.b)
		}
		_proton.spawn.emit(positions, velocities, colors)
	}, this.useColor = async function() {
		await this.ready(), await _proton.spawn.useColor(), _proton.spawn.applyToShader(_shader)
	}, this.ready = async function() {
		return await _proton.spawn.ready(), _this.wait("canEmit")
	}, this.upload = async function() {
		await _this.wait("mesh"), await _this.mesh.geometry.uploadBuffersAsync()
	}, this.uploadSync = async function() {
		await _this.wait("mesh"), await _this.mesh.upload()
	}
})), Class((function RandomAttributes(_mesh, _shader, _group, _input) {
	const seedRandom = require("SeedRandom");
	!async function() {
		let geom, seeded = !1;
		if (_shader instanceof Shader) {
			let config = InputUIL.create(_input.prefix + "ra", _group);
			config.setLabel("Random Value"), config.addToggle("seeded"), seeded = config.get("seeded"), await _mesh.instanceMeshReady, geom = _mesh.instanceMesh.geometry
		} else seeded = _shader, geom = _mesh.geometry || _mesh.geom;
		let random = seeded ? seedRandom : Math.random,
			count = geom.attributes.offset.count,
			buffer = new Float32Array(4 * count);
		for (let i = 0; i < count; i++) buffer[4 * i + 0] = random(0, 1, 4), buffer[4 * i + 1] = random(0, 1, 4), buffer[4 * i + 2] = random(0, 1, 4), buffer[4 * i + 3] = random(0, 1, 4);
		geom.addAttribute("random", new GeometryAttribute(buffer, 4, 1))
	}()
})), Namespace("FX"), FX.Class((function ScreenBokehDof(_nuke, _options, _unique) {
	Inherit(this, Component);
	var _this = this;
	"string" == typeof _options ? (_unique = _options, _options = {}, _nuke = _nuke || World.NUKE) : "string" == typeof _nuke ? (_unique = _nuke, _options = {}, _nuke = World.NUKE) : !_nuke || _nuke instanceof Nuke ? (_nuke = _nuke || World.NUKE, _options = _options || {}, _unique = _unique || "") : (_unique = "", _options = _nuke, _nuke = World.NUKE);
	var _shader, _iterations = _options.iterations || 15;

	function resize() {
		_this.pass.uniforms.uPxSize.value.x = 1 / (_nuke.stage.width * _nuke.dpr), _this.pass.uniforms.uPxSize.value.y = 1 / (_nuke.stage.height * _nuke.dpr), _this.pass.uniforms.uResScale.value = Stage.height / 1300
	}! function initPass() {
		_shader = _this.initClass(Shader, "NukePass", "ScreenBokehDof", {
			UILPrefix: `ScreenBokehDof${_unique}`,
			unique: _unique,
			uDofAmount: {
				value: 10
			},
			uDofPower: {
				value: 1
			},
			uAspectRatio: {
				value: 1
			},
			uTranslate: {
				value: new Vector2
			},
			uScale: {
				value: new Vector2(1, 1)
			},
			uRotate: {
				value: 0
			},
			uPower: {
				value: 1
			},
			uRadial: {
				value: 0
			},
			uParabola: {
				value: 0
			},
			uInvert: {
				value: 0
			},
			uDebug: {
				value: 0
			},
			uPxSize: {
				value: new Vector2,
				ignoreUIL: !0
			},
			tDiffuse: {
				value: null,
				ignoreUIL: !0
			},
			uResScale: {
				value: 1,
				ignoreUIL: !0
			},
			precision: "high"
		}, ((glsl, type) => "vs" === type ? glsl : glsl.replace("const int DOF_ITERATIONS = 15;", `const int DOF_ITERATIONS = ${_iterations};`))), _this.pass = new NukePass(null, null, _shader), _options.disabled || _nuke.add(_this.pass)
	}(),
	function addListeners() {
		_this.onResize(resize)
	}(), ShaderUIL.add(_shader).setLabel("Screen Bokeh DOF")
})), Class((function Scroll(_object, _params) {
	Inherit(this, Component);
	const _this = this,
		PROHIBITED_ELEMENTS = ["prevent_interactionScroll"];
	this.x = 0, this.y = 0, this.max = {
		x: 0,
		y: 0
	}, this.delta = {
		x: 0,
		y: 0
	}, this.enabled = !0, _this.bounds = null;
	const _scrollTarget = {
			x: 0,
			y: 0
		},
		_scrollInertia = {
			x: 0,
			y: 0
		};
	let _axes = ["x", "y"];
	var _lastDelta, _deltaChange = 0;

	function checkIfProhibited(element) {
		let el = element;
		for (; el;) {
			if (el.classList)
				for (let i = 0; i < PROHIBITED_ELEMENTS.length; i++)
					if (el.classList.contains(PROHIBITED_ELEMENTS[i])) return !0;
			el = el.parentNode
		}
		return !1
	}

	function loop() {
		_this.object && (Math.round(_this.object.div.scrollLeft) === Math.round(_this.x) && Math.round(_this.object.div.scrollTop) === Math.round(_this.y) || (_this.x = _scrollTarget.x = _this.object.div.scrollLeft, _this.y = _scrollTarget.y = _this.object.div.scrollTop, stopInertia())), _axes.forEach((axis => {
			_this.isInertia && (_scrollInertia[axis] *= .9, _scrollTarget[axis] += _scrollInertia[axis]), _this.limit && (_scrollTarget[axis] = Math.max(_scrollTarget[axis], 0)), _this.limit && (_scrollTarget[axis] = Math.min(_scrollTarget[axis], _this.max[axis] / _this.scale)), _this.delta[axis] = _this.flag("block") ? 0 : .5 * (_scrollTarget[axis] * _this.scale - _this[axis]), _this[axis] += _this.delta[axis], Math.abs(_this.delta[axis]) < .01 && (_this.delta[axis] = 0), Math.abs(_this[axis]) < .001 && (_this[axis] = 0), _this.flag("block") && (_scrollTarget[axis] = 0, _this.delta[axis] = 0, _this[axis] = 0), _this.object && ("x" == axis && (_this.object.div.scrollLeft = Math.round(_this.x)), "y" == axis && (_this.object.div.scrollTop = Math.round(_this.y)))
		}))
	}

	function stopInertia() {
		_this.isInertia = !1, clearTween(_scrollTarget)
	}

	function edgeScroll(e) {
		let element = document.elementFromPoint(Math.clamp(Mouse.x, 0, Stage.width), Math.clamp(Mouse.y, 0, Stage.height));
		element && checkIfProhibited(element) || _params.lockMouseX && Mouse.x > Stage.width || "touch" === e.pointerType && _this.enabled && (e.preventDefault && e.preventDefault(), _axes.forEach((axis => {
			let dir = axis.toUpperCase(),
				delta = `offset${dir}`,
				diff = (_this[`ieDelta${dir}`] || e[delta]) - e[delta];
			_scrollTarget[axis] += diff, _scrollInertia[axis] = diff, _this.isInertia = !0, _this[`ieDelta${dir}`] = e[delta]
		})), _this.onUpdate && _this.onUpdate(), _this.events.fire(Events.UPDATE, _scrollInertia))
	}

	function edgeScrollEnd() {
		_this.ieDeltaX = !1, _this.ieDeltaY = !1
	}

	function scroll(e) {
		let element = document.elementFromPoint(Math.clamp(Mouse.x, 0, Stage.width), Math.clamp(Mouse.y, 0, Stage.height));
		if (element && checkIfProhibited(element)) return;
		if (_params.lockMouseX && Mouse.x > Stage.width) return;
		if (!_this.enabled) return;
		if (!checkBounds(e)) return;
		if (_this.object && _this.limit && e.preventDefault && e.preventDefault(), !_this.mouseWheel) return;
		stopInertia();
		let newDelta = 0;
		_axes.forEach((axis => {
			let delta = "delta" + axis.toUpperCase();
			if ("mac" == Device.system.os) {
				if ("firefox" == Device.system.browser) return 1 === e.deltaMode ? (_scrollTarget[axis] += 4 * e[delta], _scrollInertia[axis] = 4 * e[delta], _this.isInertia = !0, void(newDelta = _scrollInertia[axis])) : void(_scrollTarget[axis] += e[delta]);
				if (Device.system.browser.includes(["chrome", "safari"])) return _scrollTarget[axis] += .33 * e[delta], _scrollInertia[axis] = .33 * e[delta], _this.isInertia = !0, void(newDelta = _scrollInertia[axis])
			}
			if ("windows" == Device.system.os) {
				if ("firefox" == Device.system.browser && 1 === e.deltaMode) return _scrollTarget[axis] += 10 * e[delta], _scrollInertia[axis] = 10 * e[delta], _this.isInertia = !0, void(newDelta = _scrollInertia[axis]);
				if (Device.system.browser.includes(["chrome"])) {
					let s = .25;
					return _scrollTarget[axis] += e[delta] * s, _scrollInertia[axis] = e[delta] * s, _this.isInertia = !0, void(newDelta = _scrollInertia[axis])
				}
				if ("ie" == Device.system.browser) return _scrollTarget[axis] += e[delta], _scrollInertia[axis] = e[delta], _this.isInertia = !0, void(newDelta = _scrollInertia[axis])
			}
			_scrollTarget[axis] += e[delta], newDelta = _scrollInertia[axis]
		})), newDelta = Math.abs(newDelta), newDelta != _lastDelta && _deltaChange++, _this.flag("hardBlock") || (_deltaChange > 3 ? newDelta > _lastDelta && _this.flag("block", !1) : newDelta >= _lastDelta && _this.flag("block", !1)), _lastDelta = newDelta, _this.onUpdate && _this.onUpdate(), _this.events.fire(Events.UPDATE, _scrollInertia), _this.events.fire(Scroll.EVENT, e)
	}

	function down(e) {
		if (!_this.enabled) return;
		if (!checkBounds(e)) return;
		let element = document.elementFromPoint(Math.clamp(e.x || 0, 0, Stage.width), Math.clamp(e.y || 0, 0, Stage.height));
		element && checkIfProhibited(element) || stopInertia()
	}

	function drag(e) {
		if (!_this.enabled) return;
		if (!checkBounds(e)) return;
		let element = document.elementFromPoint(Math.clamp(e.x || 0, 0, Stage.width), Math.clamp(e.y || 0, 0, Stage.height));
		element && checkIfProhibited(element) || (_axes.forEach((axis => {
			let newDelta = Math.abs(Mouse.delta[axis]);
			_this.flag("hardBlock") || newDelta > _lastDelta && _this.flag("block", !1), _lastDelta = newDelta, _scrollTarget[axis] -= Mouse.delta[axis]
		})), _this.events.fire(Events.UPDATE))
	}

	function up(e) {
		if (!_this.enabled || _this.preventInertia) return;
		if (!checkBounds(e)) return;
		let element = document.elementFromPoint(Math.clamp(e.x || 0, 0, Stage.width), Math.clamp(e.y || 0, 0, Stage.height));
		if (element && checkIfProhibited(element)) return;
		const m = "android" == Device.system.os ? 35 : 25,
			obj = {};
		_axes.forEach((axis => {
			obj[axis] = _scrollTarget[axis] - Mouse.delta[axis] * m
		})), tween(_scrollTarget, obj, 2500, "easeOutQuint")
	}

	function resize() {
		if (!_this.enabled) return;
		if (stopInertia(), !_this.object) return;
		const p = {};
		Device.mobile && _axes.forEach((axis => p[axis] = _this.max[axis] ? _scrollTarget[axis] / _this.max[axis] : 0)), void 0 === _params.height && (_this.max.y = _this.object.div.scrollHeight - _this.object.div.clientHeight), void 0 === _params.width && (_this.max.x = _this.object.div.scrollWidth - _this.object.div.clientWidth), Device.mobile && _axes.forEach((axis => _this[axis] = _scrollTarget[axis] = p[axis] * _this.max[axis]))
	}

	function checkBounds(e) {
		return !_this.bounds || !(e.x / Stage.width > _this.bounds.x.y || e.x / Stage.width < _this.bounds.x.x || e.y / Stage.height > _this.bounds.y.y || e.y / Stage.height < _this.bounds.y.x)
	}! function initParams() {
		_object && _object.div || (_params = _object, _object = null), _params || (_params = {}), _this.object = _object, _this.hitObject = _params.hitObject || _this.object, _this.max.y = _params.height || 0, _this.max.x = _params.width || 0, _this.scale = _params.scale || 1, _this.drag = void 0 !== _params.drag ? _params.drag : !!Device.mobile, _this.mouseWheel = !1 !== _params.mouseWheel, _this.limit = "boolean" == typeof _params.limit && _params.limit, _this.bounds = _params.bounds || null, Array.isArray(_params.axes) && (_axes = _params.axes)
	}(), _this.object && function style() {
			_this.object.css({
				overflow: "auto"
			})
		}(),
		function addHandlers() {
			if (Device.mobile || ("ie" === Device.system.browser && Device.system.browserVersion >= 17 && (document.body.addEventListener("pointermove", edgeScroll, !0), document.body.addEventListener("pointerup", edgeScrollEnd, !0)), "ie" == Device.system.browser ? document.body.addEventListener("wheel", scroll, !0) : __window.bind("wheel", scroll)), _this.drag) {
				_this.hitObject && _this.hitObject.bind("touchstart", (e => {
					let element = document.elementFromPoint(Math.clamp(e.x || 0, 0, Stage.width), Math.clamp(e.y || 0, 0, Stage.height));
					element && checkIfProhibited(element) || e.preventDefault()
				}));
				let input = _this.hitObject ? _this.initClass(Interaction, _this.hitObject) : Mouse.input;
				_this.events.sub(input, Interaction.START, down), _this.events.sub(input, Interaction.DRAG, drag), _this.events.sub(input, Interaction.END, up)
			}
			_this.events.sub(Events.RESIZE, resize)
		}(), resize(), _this.startRender(loop), this.reset = function() {
			return _this.object && _this.object.div && (_this.object.div.scrollLeft = _this.x = 0, _this.object.div.scrollTop = _this.y = 0), _scrollTarget.x = _scrollTarget.y = 0, _scrollInertia.x = _scrollInertia.y = 0, stopInertia(), this
		}, this.onDestroy = function() {
			__window.unbind("wheel", scroll)
		}, this.resize = resize, this.scrollTo = function(value, axis = "y") {
			let values = {};
			values[axis] = value, tween(_scrollTarget, values, 800, "easeInOutCubic")
		}, this.setTarget = function(value, axis = "y") {
			_scrollTarget[axis] = value
		}, this.blockUntilNewScroll = function() {
			return _this.reset(), _this.flag("block", !0), _this.flag("hardBlock", !0, 200), this
		}, this.stopInertia = stopInertia
}), (_ => {
	var _scroll;
	Scroll.EVENT = "scroll_event", Scroll.createUnlimited = Scroll.getUnlimited = function(options) {
		return _scroll || (_scroll = new Scroll({
			limit: !1,
			drag: Device.mobile
		})), _scroll
	}
})), Module((function SeedRandom() {
	var _seed = 0;
	this.exports = function random(min, max, precision = 0) {
		return Math.round(min + function randomSeed() {
			let n = 1e7 * Math.sin(_seed++);
			return n - Math.floor(n)
		}() * (max - min), precision)
	}
})), Class((function SplitText(_element, _options = {
	lineThreshold: .2,
	type: "lines",
	asHydraObject: !0
}) {
	const _this = this;

	function split() {
		_this.isSplit && revert();
		const by = (_this.options.type || "lines").split(",").map((s => s.trim())),
			lineThreshold = "number" == typeof _this.options.lineThreshold ? _this.options.lineThreshold : .2,
			asHydraObject = "boolean" != typeof _this.options.asHydraObject || _this.options.asHydraObject,
			byLines = ~by.indexOf("lines"),
			byWords = ~by.indexOf("words"),
			byChars = ~by.indexOf("chars");
		return _this.elements.forEach(((element, i) => {
			if (_this.originals[i] = element.innerHTML, byWords || byLines || byChars) {
				if (_this.words.push(...splitElement(element, "word", /\s+/, !0, byLines)), byLines) {
					_this.lineCursor = 0, element.__lineParent = !0;
					const linesOffsetY = function detectLinesTop(el, words, lineThreshold) {
						let lineOffsetY = -999;
						const computedStyle = window.getComputedStyle(el),
							threshold = parseFloat(computedStyle.fontSize || 0) * lineThreshold,
							result = words.map((w => {
								const top = Math.round(w.offsetTop);
								return Math.abs(top - lineOffsetY) > threshold && (lineOffsetY = top), w.__top = lineOffsetY, lineOffsetY
							}));
						return [...new Set(result)]
					}(element, _this.words, lineThreshold);
					_this.lines.push(...splitLines(element, linesOffsetY))
				}
				byChars && _this.words.forEach((w => {
					_this.chars.push(...splitElement(w, "char", "", !1))
				}))
			}
			asHydraObject && (_this.lines = _this.lines.map((l => $(l))), _this.words = _this.words.map((w => $(w))), _this.chars = _this.chars.map((c => $(c)))), element.setAttribute("aria-label", _this.ariaLabel.join(" "))
		})), _this.isSplit = !0, _this
	}

	function revert() {
		0 !== _this.originals.length && (_this.elements.forEach(((el, i) => el.innerHTML = _this.originals[i])), _this.lines.length = 0, _this.words.length = 0, _this.chars.length = 0, _this.ariaLabel.length = 0, _this.originals.length = 0, _this.isSplit = !1)
	}

	function handleRawElement(parentEl, el, key, splitOn, preserveWhitespace, elements, allElements, wrapEl = !1) {
		var wholeText = el.wholeText || "",
			contents = wholeText.trim();
		contents.length && (" " === wholeText[0] && allElements.push(document.createTextNode(" ")), contents.split(splitOn).forEach(((splitText, i) => {
			const parent = wrapEl ? parentEl.cloneNode() : parentEl;
			i && preserveWhitespace && allElements.push(document.createTextNode(" "));
			const splitEl = function createElement(parent, key, text) {
				var el = document.createElement("span");
				el.style.setProperty("display", "inline-block"), key && (el.className = key);
				text && (el.setAttribute("aria-hidden", !0), "word" === key && _this.ariaLabel.push(text), el.textContent = text);
				return parent ? parent.appendChild(el) : el
			}(parent, key, splitText);
			elements.push(splitEl), allElements.push(wrapEl ? parent : splitEl)
		})), " " === wholeText[wholeText.length - 1] && allElements.push(document.createTextNode(" ")))
	}

	function splitElement(el, key, splitOn, preserveWhitespace, byLines = !1) {
		el.normalize();
		const elements = [],
			F = document.createDocumentFragment(),
			allElements = [];
		let _tempParent, _parent, _childParent;
		return toArray(el.childNodes).forEach((next => {
			!next.tagName || next.hasChildNodes() ? next.childNodes.length ? !SplitText.BLOCK_TAGS.includes(next.tagName) && byLines ? toArray(next.childNodes).forEach((child => {
				child.tagName ? (_parent = next.cloneNode(), child.hasChildNodes() ? toArray(child.childNodes).forEach((nestedChild => {
					_tempParent = nestedChild.tagName ? _parent : next.cloneNode(), _childParent = child.cloneNode(), _tempParent.appendChild(_childParent), _childParent.appendChild(nestedChild), allElements.push(_tempParent), elements.push(...splitElement(_childParent, key, splitOn, preserveWhitespace, byLines))
				})) : (_parent.appendChild(child), allElements.push(_parent), elements.push(...splitElement(child, key, splitOn, preserveWhitespace, byLines)))) : handleRawElement(next, child, key, splitOn, preserveWhitespace, elements, allElements, !0)
			})) : (allElements.push(next), elements.push(...splitElement(next, key, splitOn, preserveWhitespace, byLines))) : handleRawElement(F, next, key, splitOn, preserveWhitespace, elements, allElements) : allElements.push(next)
		})), allElements.forEach((e => F.appendChild(e))), el.innerHTML = "", el.appendChild(F), elements
	}

	function getElementTop(el) {
		let top = el.__top;
		if (void 0 === top && el.hasChildNodes())
			for (let i = 0; i < el.childNodes.length; i++) {
				if (top = getElementTop(el.childNodes[i]), void 0 !== top) return top
			}
		return top
	}

	function splitLines(el, linesOffsetY) {
		el.normalize();
		const elements = [],
			F = document.createDocumentFragment(),
			allElements = [];
		el.__lineCount = 0;
		let sameLine = !1;
		if (toArray(el.childNodes).forEach(((next, index) => {
				if (next.__line = el.__lineCount > 1 ? el.__lineCount - 1 : el.__line || 0, next.tagName) {
					if (next.hasChildNodes()) {
						if (SplitText.BLOCK_TAGS.includes(next.tagName)) next.__lineParent = !0;
						else {
							next.__lineParent = !1;
							const top = getElementTop(next);
							sameLine = top === linesOffsetY[_this.lineCursor], sameLine || 0 === index ? (el.__lineCount = el.__lineCount > 1 ? el.__lineCount : 1, next.__line = el.__lineCount > 1 ? el.__lineCount - 1 : el.__line || 0) : sameLine || (++next.__line, ++el.__lineCount), sameLine && (sameLine || 0 !== index) || ++_this.lineCursor
						}
						next.childNodes.length && (allElements.push(next), elements.push(...splitLines(next, linesOffsetY)))
					}
				} else allElements.push(next)
			})), el.innerHTML = "", el.__lineCount > 0 && el.__lineParent)
			for (let i = 0; i < el.__lineCount; i++) {
				allElements.forEach((e => {
					e.__line === i && F.appendChild(e)
				}));
				const line = createLine(el);
				line.appendChild(F), elements.push(line)
			} else allElements.forEach((e => {
				F.appendChild(e)
			}));
		return el.appendChild(F), elements
	}

	function createLine(parent) {
		const line = document.createElement("span");
		return line.className = "line", line.style.setProperty("display", "block"), parent ? parent.appendChild(line) : line
	}

	function toArray(e, parent) {
		return e && 0 !== e.length ? e.nodeName ? [e] : [].slice.call(e[0].nodeName ? e : (parent || document).querySelectorAll(e)) : []
	}
	_this.isSplit = !1, _this.options = {}, _this.chars = [], _this.words = [], _this.lines = [], _this.originals = [], _this.ariaLabel = [], _element instanceof HydraObject && (_element = _element.div), _this.elements = toArray(_element), _this.options = _options, split(), _this.split = split, _this.revert = revert
}), (_ => {
	SplitText.BLOCK_TAGS = ["DIV", "H1", "H2", "H3", "H4", "H5", "H6", "P", "UL", "LI"];
	const promise = Promise.create();
	SplitText.isFontReady = function() {
		return document.fonts.ready.then(promise.resolve), promise
	}
})), Namespace("FX"), FX.Class((function SSAO(_nuke, options, _unique) {
	Inherit(this, Component);
	const _this = this;

	function loop() {
		_this.uniforms.uNear.value = _nuke.camera.near, _this.uniforms.uFar.value = _nuke.camera.far
	}
	"string" == typeof options ? (_unique = _params, options = {}, _nuke = World.NUKE) : "string" == typeof _nuke ? (_unique = _nuke, options = {}, _nuke = World.NUKE) : !_nuke || _nuke instanceof Nuke ? (_nuke = _nuke || World.NUKE, options = options || {}, _unique = _unique || "") : (options = _nuke, _nuke = World.NUKE), this.uniforms = {
		tDepth: {
			value: _nuke.rttBuffer.createDepthTexture(),
			ignoreUIL: !0
		},
		uNear: {
			value: _nuke.camera.near,
			ignoreUIL: !0
		},
		uFar: {
			value: _nuke.camera.far,
			ignoreUIL: !0
		},
		uAOClamp: {
			value: .3
		},
		uAOSamples: {
			value: function getQuality() {
				if (options.quality) switch (options.quality) {
					case "low":
						return 4;
					case "med":
					case "medium":
						return 6;
					case "high":
						return 10;
					case "insane":
						return 20
				}
				return 10
			}(),
			ignoreUIL: !0
		},
		uAOLumInfluence: {
			value: .5
		},
		uAORadius: {
			value: 5
		},
		uAODisplace: {
			value: 40
		},
		uAODiffArea: {
			value: 40
		},
		uAOAdjustment: {
			value: 1
		},
		uAOStrength: {
			value: 1
		},
		uAOMaxDist: {
			value: 1
		}
	}, _this.startRender(loop)
})), Class((function SLCDragHelper(_capture, $obj) {
	Inherit(this, Component);
	const _this = this;

	function dragMove(e) {
		_this.flag("persist") || (e || _capture.unbindMove(), e && _this.flag("handMode") && e.hit.distance > _this.distanceThreshold && _capture.unbindMove()), !_this.onDragMove || _this.flag("persist") && !e || _this.onDragMove(e)
	}

	function vrButton(e) {
		_this.flag("persist") || "trigger" == e.label && (e.pressed ? _this.flag("hover") && _capture.bindMove() : _capture.unbindMove())
	}

	function mouseDown(e) {
		_this.flag("persist") || (_this.flag("mouse_down", !0), _this.flag("hover") && _capture.bindMove())
	}

	function mouseUp(e) {
		_this.flag("persist") || (_this.flag("mouse_down", !1), _capture.unbindMove())
	}

	function hover(e) {
		_this.flag("persist") || (_this.flag("hover", "over" == e.action), window.VRInput && (VRInput.isSetupFakeHands || VRInput.isSetupHands) && (_this.flag("handMode", !0), _capture.bindMove()))
	}
	this.distanceThreshold = .2, $obj && $obj.interact(hover, (_ => {})),
		function addListeners() {
			_this.events.sub(Mouse.input, Interaction.START, mouseDown), _this.events.sub(Mouse.input, Interaction.END, mouseUp), window.VRInput && VRInput.ready().then((_ => {
				VRInput.controllers.forEach((c => {
					_this.events.sub(VRInput.BUTTON, vrButton)
				}))
			}))
		}(), _capture.onDragMove = dragMove, this.persistMove = function() {
			_capture.bindMove(), _this.flag("persist", !0)
		}
})), Class((function StageLayout(_name, _options = {}) {
	Inherit(this, Component);
	const _this = this;
	var _dataStore, _data, $create;
	const GLUI = void 0 === _options.glui || _options.glui;
	var _uil = getTopLevelUIL(),
		_folders = {},
		_layers = {},
		_exists = {},
		_resize = [],
		_graph, _config;

	function getTopLevelUIL() {
		let uil = UIL.sidebar;
		return !_options.uil && _this.parent && uil && Utils.getConstructorName(_this.parent) != Global.PLAYGROUND && (uil = new UILFolder(`stl_${_name}_nested`, {
			label: `${_name.capitalize()} (Nested)`,
			closed: !0
		}), UIL.sidebar && UIL.sidebar.add(uil)), uil
	}

	function createFolder(name) {
		let folder = new UILFolder(`stl_${_name}_${name}`, {
			label: name,
			closed: !0
		});
		return _folders[`stl_${_name}_${name}`] = folder, folder
	}
	async function initGraph() {
		_options.noGraph || !window.UILGraph || StageLayout.noGraph || (_graph = UILGraph.instance().getGraph(_name, _this, !!GLUI)) && (UIL.sidebar.element.show(), Global.PLAYGROUND && (Utils.getConstructorName(_this.parent), Global.PLAYGROUND), _graph.open())
	}

	function initParams() {
		_options.rootPath ? "/" != _options.rootPath.charAt(_options.rootPath.length - 1) && (_options.rootPath += "/") : _options.rootPath = "", _this.baseZ = _options.baseZ || 0, _this.data = _options.data, _options.uil && (_uil = _options.uil), GLUI ? (_this.element = $gl(1, 1), _this.element.stageLayout = _this) : (_this.element = $("StageLayout_" + _name), _this.element.size("100%"))
	}
	async function initData() {
		if (await UILStorage.ready(), _dataStore = InputUIL.create(`stagelayout_${_name}`, null), void 0 === (_data = JSON.parse(_dataStore.get("data") || "{}")).layers && (_data.layers = -1), _options.perFrame) _data.layers > 0 && createLayers();
		else {
			for (let i = 0, c = _data.layers + 1; i < c; i++) createLayer(i);
			_this.loaded = !0
		}
	}

	function initRoot() {
		let name = _name + "Root",
			group = _uil ? createFolder(name) : null,
			$obj = _this.element,
			input = InputUIL.create(`Config_${name}_${_name}`, group);
		if (input.setLabel("Parameters"), input.add("size").addTextarea("fontStyle").addTextarea("css", GLUI ? "hidden" : void 0).add("onResize", "hidden"), input.add("compiled", "hidden"), input.add("Figma Config"), _config = input, !group) return createCompiledLayer(`${name}_${_name}`, input);
		StageLayoutUtil.create(`${name}_${_name}`), group.hide(), group.setLabel(name);
		let size = input.get("size"),
			css = input.get("css"),
			resizeCode = (input.get("fontStyle"), input.get("onResize")),
			doCSS = change => {
				if (GLUI) return;
				css = css || "";
				let obj = {},
					objSave = {};
				css = css.split("\n"), css.forEach((line => {
					let key = (line = line.split(":"))[0],
						val = line[1],
						valSave = val;
					val && (val = parseData(val.replace(/ /g, ""))), key.length && (obj[key] = isNaN(Number(val)) ? val : Number(val), valSave && (valSave = valSave.replace(/ /g, "")), objSave[key] = isNaN(Number(valSave)) ? valSave : Number(valSave))
				})), change && StageLayoutUtil.save("css", objSave, input), $obj.css(obj)
			},
			doSize = change => {
				if (size) {
					let s = parseData(size).replace(/ /g, "").split(","),
						s0 = s[0].includes("%") ? s[0] : Number(s[0]) || s[0],
						s1 = s[1].includes("%") ? s[1] : Number(s[1]) || s[1];
					$obj.size(s0, s1), change && StageLayoutUtil.save("size", [s0, s1], input)
				} else $obj.size(100, 100)
			},
			doResize = change => {
				if (resizeCode) {
					let fn = new Function("$this", resizeCode);
					_resize.push({
						fn: fn,
						$obj: $obj
					}), fn($obj)
				}
			},
			doFont = change => {
				let fontStyle = parseData(input.get("fontStyle"));
				fontStyle && (fontStyle = fontStyle.split("\n"), $obj.fontStyle(fontStyle[0], Number(fontStyle[1]), fontStyle[2], fontStyle[3]), change && StageLayoutUtil.save("fontStyle", fontStyle, input))
			};
		doCSS(), doSize(), doFont(), doResize(), input.onUpdate = key => {
			switch (key) {
				case "css":
					css = input.get("css"), doCSS(!0);
					break;
				case "size":
					size = input.get("size"), doSize(!0);
					break;
				case "onResize":
					resizeCode = input.get("onResize"), doResize();
					break;
				case "fontStyle":
					doFont(!0)
			}
		}, group.params = input, _graph && _graph.addSpecial(group.id, name, "Root"), _uil.add(group), (_ => {
			let folder = new UILFolder(`stl_${_name}_${name}_resize`, {
					label: "Resize Logic",
					closed: !0
				}),
				button = new UILControlButton("button", {
					actions: [{
						title: "Open Editor",
						callback: _ => {
							let editor = new UILWindow(_name, {
									label: "Resize Logic",
									height: "auto",
									drag: !0
								}),
								text = new UILControlTextarea(`stl_${_name}_${name}_resize`, {
									label: "Resize",
									value: input.get("onResize"),
									monospace: !0,
									rows: 10,
									resize: "both",
									minWidth: 400,
									hideLabel: !0,
									tab: !0
								});
							editor.add(text), text.onFinishChange((value => input.setValue("onResize", value))), UIL.add(editor)
						}
					}],
					hideLabel: !0
				});
			folder.add(button), group.add(folder)
		})()
	}

	function createLayers() {
		let index = 0,
			renderWorker = new Render.Worker((function() {
				createLayer(index), index++ == _data.layers && (renderWorker.stop(), _this.loaded = !0)
			}), _options.perFrame)
	}

	function parseData(text) {
		if (!text || "string" != typeof text || !text.includes("$DATA")) return text;
		for (; text.includes("$DATA");) {
			let code = text.split("$DATA")[1].split(" ")[0].split("\n")[0],
				line = "$DATA" + code;
			text = text.replace(line, eval(line.replace("$DATA", "_options.data")))
		}
		return text
	}
	async function createCompiledLayer(key, input) {
		let compiled = StageLayoutUtil.getCompiled(key);
		if (!compiled) return;
		let $obj, name = input.get("name"),
			text = input.get("text");
		$obj = GLUI ? text ? $glText(parseData(text), null, null, compiled.fontStyle) : $gl(1, 1, parseData(input.get("bg"))) : key == `${_name}Root_${_name}` ? _this.element : $(name || "Layer", parseData(input.get("type") || "div"));
		let nestedGroup = input.get("group");
		if (nestedGroup) {
			let layer;
			layer = nestedGroup === _name ? _this.element : await _this.getLayer(nestedGroup), layer.add($obj)
		} else _this.element != $obj && _this.element.add($obj);
		if (Global.PLAYGROUND && ($obj._input = input), _layers[name] = $obj, _exists[name] = !0, checkNameHook($obj, name), compiled.css && $obj.css) {
			for (let key in compiled.css) compiled.css[key] = parseData(compiled.css[key]);
			$obj.css(compiled.css)
		}
		if (compiled.transform) {
			for (let key in compiled.transform) $obj[key] = compiled.transform[key];
			$obj.transform && $obj.transform()
		}
		if (compiled.size && $obj.size(compiled.size[0], compiled.size[1]), compiled.attributes && $obj.attr)
			for (let key in compiled.attributes) $obj.attr(key, parseData(compiled.attributes[key]));
		if (!GLUI) {
			let bg = input.get("bg");
			bg && $obj.bg(parseData(bg) || "#ff0000")
		}
		if (!GLUI) {
			if (text) {
				text = parseData(text);
				let helper = compiled.helper;
				if (helper) {
					let helperName = helper.split("(")[0],
						args = helper.split("(")[1];
					args ? (args = args.replace(")", "").replace(/,\ /g, ",").split(","), args.forEach((function(arg, i) {
						"$text" == arg && (args[i] = text)
					})), args.indexOf(text) < 0 && args.unshift(text)) : args = [text];
					let helperFn = _options[helperName] || StageLayout.helpers[helperName];
					return helperFn ? void $obj.html(helperFn.apply(null, args)) : console.warn(`No helper function ${helperName} found.`)
				}
				text.includes(["</", "/>"]) ? $obj.html(text) : $obj.text(text)
			}
			let fs = compiled.fontStyle;
			fs && $obj.fontStyle(fs[0], Number(fs[1]), fs[2], fs[3])
		}
		let zIndex = input.getNumber("zIndex");
		"number" == typeof zIndex && $obj && $obj.setZ && !isNaN(zIndex) && $obj.setZ(zIndex), compiled.resize && (_resize.push({
			$obj: $obj,
			fn: compiled.resize
		}), compiled.resize($obj));
		let customClass = input.get("customClass");
		if (customClass) {
			let Class = window[customClass];
			if (customClass.includes(".")) {
				let split = customClass.split(".");
				Class = window[split[0]] && window[split[0]][split[1]]
			}
			if (!Class) return console.warn(`No custom class ${customClass} found.`);
			_layers[name] = _this.initClass(Class, $obj, _options.data, input)
		}
	}

	function checkNameHook($obj, name) {
		if (_this.layerHooks)
			for (let i = 0, l = _this.layerHooks.length; i < l; i++) {
				console.log(i);
				let {
					test: test,
					callback: callback,
					classConstructor: classConstructor
				} = _this.layerHooks[i];
				test && test(name) && (classConstructor && _this.initClass(classConstructor, $obj, name), callback && callback($obj, name))
			}
		for (let i = 0, l = StageLayout.LAYER_HOOKS.length; i < l; i++) {
			let {
				test: test,
				callback: callback,
				classConstructor: classConstructor
			} = StageLayout.LAYER_HOOKS[i];
			test && test(name) && (classConstructor && _this.initClass(classConstructor, $obj, name), callback && callback($obj, name))
		}
	}
	async function createLayer(index, groupName) {
		let id = "number" == typeof index ? index : ++_data.layers;
		if (UILStorage.get(`stl_${_name}_${id}_deleted`)) return;
		let $obj, group = _uil ? createFolder(id) : null,
			input = InputUIL.create(`Config_${id}_${_name}`, group);
		if (input.setLabel("Parameters"), input.add("name").add("type", GLUI ? "hidden" : void 0).add("bg").add("size").add("group").add("customClass").add("wildcard").add("helper", GLUI ? "hidden" : void 0).add("zIndex", "hidden").addTextarea("attributes", GLUI ? "hidden" : void 0).addTextarea("text").addTextarea("fontStyle").addTextarea("css", GLUI ? "hidden" : void 0).addTextarea("transform").add("onResize", "hidden"), input.add("compiled", "hidden"), !group) return createCompiledLayer(`${id}_${_name}`, input);
		StageLayoutUtil.create(`${id}_${_name}`), groupName && input.setValue("group", groupName);
		let name = input.get("name") || id + "",
			size = input.get("size"),
			bg = input.get("bg"),
			css = input.get("css"),
			transform = input.get("transform"),
			type = input.get("type"),
			attributes = input.get("attributes"),
			text = input.get("text"),
			nestedGroup = (input.get("fontStyle"), input.get("group")),
			resizeCode = input.get("onResize"),
			zIndex = input.getNumber("zIndex"),
			customClass = input.get("customClass"),
			helper = input.get("helper");
		input.get("wildcard");
		group.setLabel(name), group.params = input;
		let getGLUIFontObject = _ => {
			let font = input.get("fontStyle") || "",
				obj = {};
			return font = font.split("\n"), font.forEach((line => {
				let key = (line = line.split(":"))[0],
					val = line[1];
				val && (val = val.replace(/ /g, "")), key.length && (obj[key] = isNaN(Number(val)) ? val : Number(val), "false" === val && (obj[key] = !1), "true" === val && (obj[key] = !0))
			})), obj
		};
		if ($obj = GLUI ? text ? $glText(parseData(text), null, null, getGLUIFontObject()) : $gl(1, 1, bg ? parseData(bg) : bg || name ? void 0 : "assets/images/_scenelayout/uv.jpg") : $(name || "Layer", parseData(type)), $obj._uil = group, nestedGroup) {
			let layer;
			layer = nestedGroup === _name ? _this.element : await _this.getLayer(nestedGroup), layer.add && layer.add($obj), group && _uil.add(group)
		} else _this.element.add($obj), group && _uil.add(group);
		_graph && _graph.addGroup(group.id, name || id + "", nestedGroup), (_ => {
			let folder = new UILFolder(`stl_${_name}_${name}_resize`, {
					label: "Resize Logic",
					closed: !0
				}),
				button = new UILControlButton("button", {
					actions: [{
						title: "Open Editor",
						callback: _ => {
							let editor = new UILWindow(_name, {
									label: "Resize Logic",
									height: "auto",
									drag: !0
								}),
								text = new UILControlTextarea(`stl_${_name}_${name}_resize`, {
									label: "Resize",
									value: input.get("onResize"),
									monospace: !0,
									rows: 10,
									resize: "both",
									minWidth: 400,
									hideLabel: !0,
									tab: !0
								});
							editor.add(text), text.onFinishChange((value => input.setValue("onResize", value))), UIL.add(editor)
						}
					}],
					hideLabel: !0
				});
			folder.add(button), group.add(folder)
		})(), Global.PLAYGROUND && ($obj._input = input), _layers[name] = $obj, _exists[name] = !0, checkNameHook($obj, name);
		let doBG = change => {
				GLUI ? change && $obj.bg(parseData(bg)) : (bg || !bg && !name) && $obj.bg(parseData(bg) || "#ff0000")
			},
			doType = change => {
				GLUI || change && StageLayoutUtil.save("type", {
					type: type
				}, input)
			},
			doCSS = change => {
				if (GLUI) return;
				css = css || "";
				let obj = {};
				css = css.split("\n"), css.forEach((line => {
					let key = (line = line.split(":"))[0],
						val = line[1];
					val && (val = parseData(val.replace(/ /g, ""))), key.length && (obj[key] = isNaN(Number(val)) ? val : Number(val))
				})), change && StageLayoutUtil.save("css", obj, input), $obj.css(obj)
			},
			doTransform = change => {
				transform = transform || "";
				let obj = {};
				transform = transform.split("\n"), transform.forEach((line => {
					let key = (line = line.split(":"))[0],
						val = line[1];
					val && (val = val.replace(/ /g, "")), key.length && (obj[key] = $obj[key] = isNaN(Number(val)) ? val : Number(val))
				})), change && StageLayoutUtil.save("transform", obj, input), GLUI || $obj.transform()
			},
			doResize = change => {
				if (resizeCode) {
					let fn = new Function("$this", resizeCode);
					_resize.push({
						fn: fn,
						$obj: $obj
					}), fn($obj)
				}
			},
			doSize = change => {
				if (size) {
					let s = parseData(size).replace(/ /g, "").split(","),
						s0 = Number(s[0]) || s[0],
						s1 = Number(s[1]) || s[1];
					$obj.size(s0, s1), change && StageLayoutUtil.save("size", [s0, s1], input)
				} else $obj.size(100, 100)
			},
			doAttributes = change => {
				if (GLUI) return;
				attributes = attributes || "";
				let obj = {};
				attributes.split("\n").forEach((function(line, i) {
					let key = (line = line.split(":"))[0],
						val = line[1];
					val && (val = val.replace(/ /g, "")), obj[key] = val, val = parseData(val), $obj.attr(key, val)
				})), change && StageLayoutUtil.save("attributes", obj, input)
			},
			doText = change => {
				if (text = parseData(text), GLUI) {
					if (!text) return $obj;
					if ($obj instanceof GLUIObject) return $obj;
					let fontStyle = getGLUIFontObject();
					change && StageLayoutUtil.save("fontStyle", fontStyle, input), $obj.setText(text, fontStyle), fontStyle.color && $obj.setColor(fontStyle.color)
				} else {
					let fontStyle = parseData(input.get("fontStyle"));
					if (fontStyle ? (fontStyle = fontStyle.split("\n"), $obj.fontStyle(fontStyle[0] || "", Number(fontStyle[1]), fontStyle[2], fontStyle[3]), change && StageLayoutUtil.save("fontStyle", fontStyle, input)) : change && StageLayoutUtil.save("fontStyle", "", input), !text) return;
					if (helper) {
						let helperName = helper.split("(")[0],
							args = helper.split("(")[1];
						args ? (args = args.replace(")", "").replace(/,\ /g, ",").split(","), args.forEach((function(arg, i) {
							"$text" == arg && (args[i] = text)
						})), args.indexOf(text) < 0 && args.unshift(text)) : args = [text];
						let helperFn = _options[helperName] || StageLayout.helpers[helperName];
						return helperFn ? ($obj.html(helperFn.apply(null, args)), void StageLayoutUtil.save("helper", helper, input)) : console.warn(`No helper function ${helperName} found.`)
					}
					text.includes(["</", "/>"]) ? $obj.html(text) : $obj.text(text)
				}
			},
			doZ = _ => {
				"number" == typeof zIndex && $obj.setZ(zIndex)
			};
		if (doType(), doCSS(), doBG(), doSize(), doAttributes(), doTransform(), doText(), doResize(), doZ(), input.onUpdate = key => {
				switch (key) {
					case "name":
						group.setLabel(input.get("name"));
						break;
					case "type":
						type = input.get("type"), doType(!0);
						break;
					case "css":
						css = input.get("css"), doCSS(!0);
						break;
					case "size":
						size = input.get("size"), doSize(!0);
						break;
					case "attributes":
						attributes = input.get("attributes"), doAttributes(!0);
						break;
					case "transform":
						transform = input.get("transform"), doTransform(!0);
						break;
					case "onResize":
						resizeCode = input.get("onResize"), doResize();
						break;
					case "text":
					case "fontStyle":
						text = input.get("text"), doText(!0);
						break;
					case "bg":
						bg = input.get("bg"), doBG(!0);
						break;
					case "zIndex":
						zIndex = input.getNumber("zIndex") || 0, doZ()
				}
			}, customClass) {
			let Class = window[customClass];
			if (customClass.includes(".")) {
				let split = customClass.split(".");
				Class = window[split[0]] && window[split[0]][split[1]]
			}
			if (!Class) return console.warn(`No custom class ${customClass} found.`);
			_layers[name] = _this.initClass(Class, $obj, _options.data, input, group)
		}
		return "number" != typeof index && _dataStore.setValue("data", JSON.stringify(_data)), $obj
	}

	function resizeHandler() {
		_resize.forEach((({
			$obj: $obj,
			fn: fn
		}) => fn($obj)))
	}

	function sortChild(label, index = 0, parent, baseZ, step) {
		let folder = _folders[label.id || label];
		if (!folder || !folder.params) return;
		let zIndex = 0;
		zIndex = GLUI && baseZ != _this.baseZ ? baseZ + (index + 1) * step : baseZ + index, folder.params.setValue("zIndex", zIndex), label.children && label.children.forEach((function(child, j, all) {
			sortChild(child, j, all, zIndex, step / (parent.length + 1))
		}))
	}

	function copyFolderProps(from, to) {
		let params;
		to.forEachFolder((child => {
			if ("Parameters" === child.label) params = child
		}));
		let allowed = ["Parameters"];
		from.forEachFolder((child => {
			if (!(allowed.indexOf(child.label) < 0) && (child.toClipboard(), "Parameters" === child.label)) params.fromClipboard()
		}))
	}
	this.isStageLayout = !0, this.name = _name, this.layers = _layers, _options.layerHooks && (_this.layerHooks = _options.layerHooks), _this.onResize(resizeHandler), initParams(), initGraph(), initData(), defer((() => {
		initRoot()
	})), this._createLayer = function(parentId) {
		return createLayer(null, parentId)
	}, this._createGroup = function(parentId) {
		return createLayer(null, parentId)
	}, this._rename = function(id, name, value) {
		if (name == value) return;
		let folder = _folders[id] || _folders[`stl_${_name}_${name}`];
		folder && (folder.setLabel(value), folder.params && folder.params.setValue("name", value), Object.values(_layers).filter((layer => layer._uil.params.get("group") == name)).forEach((layer => layer._uil.params.setValue("group", value))), [_exists, _layers].forEach((function(store) {
			store[name] && (store[value] = store[name], store[name] = null, delete store[name])
		})))
	}, this._deleteLayer = function(id, name) {
		let $obj = _layers[name];
		if (!$obj) return !1;
		if ($obj.div && $obj.div.children.length) return alert("Can't delete a group that has nested layers."), !1;
		if (!confirm("Are you sure you want to delete this layer?")) return;
		let folder = _folders[id];
		return _uil.remove(folder), ($obj.element || $obj).remove(), UILStorage.set(`${id}_deleted`, !0), !0
	}, this._changeParent = function(childId, childName, parentId, parentName) {
		let child = _layers[childId] || _layers[childName],
			parent = _layers[parentId] || _layers[parentName] || _this;
		if (!child) return;
		child = child.element || child, parent == _this && (parent = _this.element);
		let folder = _folders[childId] || _folders[`sl_${_name}_${childName}`];
		folder && folder.params && folder.params.setValue("group", parentName || null), ("function" == typeof child.parent ? child.parent() : child.parent).removeChild(child, !0), parent.add(child)
	}, this._visible = function(name, visible) {
		let $obj = _layers[name];
		$obj && $obj.css && (visible ? $obj.css({
			opacity: 1
		}) : $obj.css({
			opacity: 0
		}))
	}, this._focus = function(name) {
		UIL.sidebar.toolbar.filterSingle(name)
	}, this._blur = function(name) {
		let folder = _folders[name];
		folder && folder.forEachFolder && (folder.forEachFolder((f => f.close())), folder.close())
	}, this._sort = function(order) {
		order.forEach((function(item, i, all) {
			sortChild(item, i, all, _this.baseZ, 1)
		}))
	}, this._duplicateLayer = function(id, parentId) {
		let folder = _folders[id];
		if (!folder) return;
		createLayer(null, parentId);
		let copy = Object.values(_folders).last();
		copyFolderProps(folder, copy), parentId && copy.params.setValue("group", parentId)
	}, this._duplicateGroup = function(id, children, parentId) {
		_this._duplicateLayer(id, parentId);
		let pid = _data.layers;
		children.forEach((childId => {
			_this._duplicateGroup(childId, _graph.listChildren(childId), pid)
		}))
	}, this._getFigmaConfig = async function() {
		let _figmaConfig = _config.get("Figma Config").replace(".json", "");
		return await get(Assets.getPath(`assets/data/${_figmaConfig}.json`))
	}, this._applyFigmaConfig = function(id, params, $obj) {
		if ("TEXT" === params.type) {
			$obj._input.setValue("text", params.characters);
			let figmaConfig, lineHeight, fontStyle = "",
				align = params.textAlignHorizontal.toLowerCase(),
				fontName = StageLayout.FIGMA_FONT.DEFAULT,
				fontScale = 1,
				ptToPixel = .75,
				family = StageLayout.FIGMA_FONT[params.fontName.family];
			if (family) {
				let font = family[params.fontName.style.toLowerCase()];
				font && (fontName = font.name, Stage.FIGMA_FONT_CONFIG && Stage.FIGMA_FONT_CONFIG[fontName] && (figmaConfig = Stage.FIGMA_FONT_CONFIG[fontName]), font.scale && (fontScale = font.scale), figmaConfig && figmaConfig.fontScale && figmaConfig.fontScale > .1 && (fontScale = figmaConfig.fontScale))
			}
			fontName && (fontStyle += `font: ${fontName}\n`), fontStyle += `size: ${params.fontSize*ptToPixel*fontScale}\n`, fontStyle += `align: ${align}\n`, "PERCENT" === params.letterSpacing.unit && params.letterSpacing.value && (fontStyle += `letterSpacing: ${params.letterSpacing.value/100*fontScale}\n`), figmaConfig && figmaConfig.lineHeight && (lineHeight = figmaConfig.lineHeight), "PERCENT" === params.lineHeight.unit && params.lineHeight.value && (lineHeight *= params.lineHeight.value / 100), lineHeight && (fontStyle += `lineHeight: ${lineHeight}\n`), fontStyle += `width: ${params.width}\n`, fontStyle += `height: ${params.height}\n`;
			let fill = params.fills[0];
			if (fill && fill.color) {
				let c = fill.color;
				fontStyle += `color: ${new Color(c.r,c.g,c.b).getHexString()}\n`
			}
			$obj._input.setValue("fontStyle", fontStyle);
			let x = params.x;
			"center" === align ? x += params.width / 2 : "right" === align && (x += params.width);
			let transform = `x: ${x}\ny: ${params.y}`;
			params.rotation && (transform += `\nrotation: ${params.rotation}`), $obj._input.setValue("transform", transform)
		} else if ("RECTANGLE" === params.type) {
			$obj._input.setValue("size", `${params.width}, ${params.height}`);
			let fill = params.fills[0];
			if (!fill) return;
			if ("IMAGE" === fill.type) $obj._input.setValue("bg", "assets/images/_scenelayout/uv.jpg");
			else if ("SOLID" === fill.type) {
				let c = fill.color,
					color = new Color(c.r, c.g, c.b);
				$obj._input.setValue("bg", color.getHexString())
			}
			let transform = `x: ${params.x}\ny: ${params.y}`;
			params.rotation && (transform += `\nrotation: ${params.rotation}`), $obj._input.setValue("transform", transform)
		}
	}, this.getLayer = async function(name) {
		let timer;
		Hydra.LOCAL && (timer = _this.delayedCall((_ => {
			_exists[name] || "mockup" === name || console.warn(`${name} doesn't exist in StageLayout ${_name}`)
		}), 1e3));
		for (let key in _layers) {
			let layer = _layers[key];
			if (layer._uil) {
				let uil = layer._uil;
				if (uil.id === name || uil.label === name) return timer && clearTimeout(timer), layer
			}
		}
		return await _this.wait(_layers, name), timer && clearTimeout(timer), _layers[name]
	}, this.getLayers = async function() {
		let array = [];
		for (let i = 0; i < arguments.length; i++) array.push(_this.getLayer(arguments[i]));
		return Promise.all(array)
	}, this.getAllLayers = async function() {
		return await this.ready(), _layers
	}, this.ready = this.loadedAllLayers = async function() {
		await _this.wait(_this, "loaded"), await defer()
	}, this.exists = function(key) {
		return !!_exists[key]
	}, this.get("graph", (_ => _graph)), this.get("config", (_ => _config)), this.get("layerCount", (_ => _data.layers))
}), (() => {
	StageLayout.FIGMA_FONT = {}, StageLayout.LAYER_HOOKS = [], StageLayout.helpers = {}, StageLayout.loadFontConfig = async (path, json) => {
		if (!json) {
			path = path || "assets/data/figma-font.json";
			try {
				json = await get("assets/data/figma-font.json")
			} catch (e) {
				return
			}
		}
		Stage.FIGMA_FONT_CONFIG = json.config
	}
})), Class((function StageLayoutCapture(_layout, _w, _h, _rtPool, _strict) {
	Inherit(this, Component);
	const _this = this;
	var _rt, _camera, _hitCamera, _interaction, _ray, _needsRender, _rendered, _hitEvt, _usingFingers, $glObj, _needsRenderCount = 0,
		_scene = new Scene,
		_mouse = new Vector2,
		_stage = new Vector2,
		_v3 = new Vector3,
		_enabled = !0,
		_width = _w,
		_height = _h,
		_cacheHits = [];

	function loop() {
		if (!_enabled) return;
		if (_this.manualRender && !_needsRender) return;
		let clearAlpha = World.RENDERER.getClearAlpha(),
			autoClear = World.RENDERER.autoClear;
		_this.disableClear && (World.RENDERER.autoClear = !1);
		let clearColor = World.RENDERER.getClearColor().getHex();
		clearColor > 0 ? World.RENDERER.setClearColor(0, 0) : World.RENDERER.setClearAlpha(0), World.RENDERER.render(_scene, _camera, _rt), clearColor > 0 ? World.RENDERER.setClearColor(clearColor, clearAlpha) : World.RENDERER.setClearAlpha(clearAlpha), _this.disableClear && (World.RENDERER.autoClear = autoClear), _rendered = !0
	}

	function noop() {}

	function hitUpdate(hit) {
		let x = hit.uv.x * _width,
			y = (1 - hit.uv.y) * _height;
		_usingFingers = hit.usingFinger, _this.isHitting = !0, _mouse.set(x, y), _enabled && _interaction && (hit.usingFinger ? _interaction.testWithFinger(_mouse, hit.distance) : _interaction.testWith(_mouse))
	}

	function missUpdate() {
		_this.isHitting = !1, _mouse.set(9999, 9999), _interaction && (_usingFingers ? _interaction.testWithFinger(_mouse, 9999) : _interaction.testWith(_mouse))
	}

	function raycastMove(e) {
		_ray || (_ray = _this.initClass(Raycaster, _hitCamera));
		let hit, input = Interaction3D.find(_hitCamera).input;
		if (Array.isArray(input.obj)) {
			_cacheHits.length = 0;
			for (let i = 0; i < input.obj.length; i++) {
				let obj = input.obj[i];
				_v3.set(0, 0, -1).applyQuaternion(obj.quaternion);
				let hit = _ray.checkFromValues($glObj.mesh, obj.position, _v3)[0];
				hit && _cacheHits.push(hit)
			}
			_cacheHits.sort(((a, b) => a.distance - b.distance)), hit = _cacheHits[0]
		} else "2d" == input.type ? hit = _ray.checkHit($glObj.mesh, input.position, input.rect || Stage)[0] : (_v3.set(0, 0, -1).applyQuaternion(input.quaternion), hit = _ray.checkFromValues($glObj.mesh, input.position, _v3)[0]);
		_hitEvt || (_hitEvt = {
			normal: new Vector2,
			tilt: new Vector2,
			pos: new Vector2
		}), hit ? (_hitEvt.normal.set(hit.uv.x, 1 - hit.uv.y), _hitEvt.tilt.set(Math.range(_hitEvt.normal.x, 0, 1, -1, 1), Math.range(_hitEvt.normal.y, 0, 1, -1, 1)), _hitEvt.pos.set(_hitEvt.normal.x * _width, _hitEvt.normal.y * _height), _hitEvt.hit = hit, _this.onDragMove && _this.onDragMove(_hitEvt)) : _this.onDragMove && _this.onDragMove(null)
	}

	function flipNeedsRender() {
		if (!(--_needsRenderCount > 0)) return _needsRender && !_rendered ? scheduleFlipNeedsRender() : void(_needsRender = !1)
	}

	function scheduleFlipNeedsRender(time = 1) {
		_needsRenderCount += 1, Timer.create(flipNeedsRender, time)
	}

	function doCheckObjectHit(object, callback) {
		let hit = callback(Interaction3D.find(_hitCamera));
		if (hit) {
			let x = hit.uv.x * _width,
				y = (1 - hit.uv.y) * _height;
			return _interaction.checkObjectHit(object, {
				x: x,
				y: y
			})
		}
	}
	this.disableClear = !1,
		function() {
			"number" == typeof _layout && (_strict = _rtPool, _rtPool = _h, _h = _w, _w = _layout, _layout = {
				element: $gl()
			}), _width = _w, _height = _h, "boolean" == typeof _rtPool && (_strict = _rtPool, _rtPool = null);
			let dpr = _strict ? 1 : RenderManager.DPR;
			_rtPool ? _this.rt = _rtPool.nullRT : (_rt = Utils3D.createRT(_width * dpr, _height * dpr, null, Texture.RGBAFormat), _this.rt = _rt), _this.root = _layout.element, _this.root.stageLayoutCapture = _this, _scene.add(_layout.element.group), (_camera = new OrthographicCamera).setViewport(_width, _height), _camera.position.z = 1, _camera.position.x = _width / 2, _camera.position.y = -_height / 2, _scene.disableAutoSort = !0, _stage.set(_width, _height),
				function findHitCamera() {
					let p = _this.parent;
					for (; p;) {
						if (_hitCamera = p.nuke?.camera, _hitCamera) return;
						p = p.parent
					}
					_hitCamera = World.CAMERA
				}(), _interaction = _this.initClass(GLUIStageInteraction2D, _camera, _scene, _stage, !0), _this.startRender(loop, RenderManager.AFTER_LOOPS)
		}(), this.onVisible = function() {
			_rtPool && (_rt = _this.rt = _rtPool.getRT())
		}, this.onInvisible = function() {
			_rtPool && _rtPool.putRT(_rt)
		}, this.setSize = function(width, height) {
			_width = width, _height = height, _camera.setViewport(_width, _height), _camera.position.z = 1, _camera.position.x = _width / 2, _camera.position.y = -_height / 2, _stage.set(width, height)
		}, this.render = function() {
			loop()
		}, this.get("object3d", (() => $glObj)), this.set("object3d", (gl => {
			gl.mesh || (gl = {
				mesh: gl
			}), ($glObj = gl).mesh.onHitUpdate = hitUpdate, $glObj.mesh.onMissUpdate = missUpdate, _hitCamera && Interaction3D.find(_hitCamera).add($glObj.mesh, noop, noop)
		})), this.get("camera", (() => _camera)), this.set("hitCamera", (camera => {
			camera != _hitCamera && ($glObj && Interaction3D.find(_hitCamera).remove($glObj.mesh), _hitCamera = camera, $glObj && Interaction3D.find(_hitCamera).add($glObj.mesh, noop, noop), _ray && (_ray.camera = _hitCamera))
		})), this.set("enabled", (v => {
			_interaction._disabled = !v, _enabled = v
		})), this.get("enabled", (_ => _enabled)), this.set("mouseEnabled", (v => {
			v ? (_interaction._disabled = !1, $glObj.mesh.onHitUpdate = hitUpdate, $glObj.mesh.onMissUpdate = missUpdate, _hitCamera && Interaction3D.find(_hitCamera).add($glObj.mesh, noop, noop)) : (_interaction._disabled = !0, $glObj && (_hitCamera && Interaction3D.find(_hitCamera).remove($glObj.mesh), delete $glObj.mesh.onHitUpdate, delete $glObj.mesh.onMissUpdate))
		})), this.set("layout", (layout => {
			_layout && _scene.remove(_layout.element.group), _scene.add(layout.element.group), _layout = layout
		})), this.get("layout", (_ => _layout)), this.get("scene", (_ => _scene)), this.get("width", (_ => _width)), this.get("height", (_ => _height)), this.onVisible = function() {
			_rtPool && (_rt = _this.rt = _rtPool.getRT())
		}, this.onInvisible = function() {
			_rtPool && _this.rt != _rtPool.nullRT && (_rtPool.putRT(_this.rt), _rt = _this.rt = _rtPool.nullRT)
		}, this.onDestroy = function() {
			_rtPool ? _this.onInvisible() : _this.rt.destroy(), $glObj && (Interaction3D.find(_hitCamera).remove($glObj.mesh), delete $glObj.mesh.onHitUpdate, delete $glObj.mesh.onMissUpdate)
		}, this.bindMove = function() {
			_this.startRender(raycastMove)
		}, this.unbindMove = function() {
			_this.stopRender(raycastMove)
		}, this.get("needsRender", (() => _needsRender)), this.set("needsRender", (value => {
			_needsRender = !0, _rendered = !1, scheduleFlipNeedsRender("number" == typeof value ? value : 1e3)
		})), _this.checkObjectHit = function(object, mouse) {
			return doCheckObjectHit(object, (interaction => interaction.checkObjectHit($glObj.mesh, mouse)))
		}, _this.checkObjectFromValues = function(object, origin, direction) {
			return doCheckObjectHit(object, (interaction => interaction.checkObjectFromValues($glObj.mesh, origin, direction)))
		}, _this.getObjectHitLocalCoords = function(v, object, mouse) {
			return Interaction3D.find(_hitCamera).getObjectHitLocalCoords(v, $glObj.mesh, mouse), mouse = {
				x: (.5 + v.x) * _width,
				y: (.5 - v.y) * _height
			}, _interaction.getObjectHitLocalCoords(v, object.mesh, mouse)
		}
}), (_ => {
	StageLayoutCapture.createRTPool = function(width, height, strict) {
		let pool = RTPool.instance().clone({
				format: Texture.RGBAFormat
			}),
			dpr = strict ? 1 : RenderManager.DPR;
		return pool.setSize(width * dpr, height * dpr), pool
	}
})), Class((function StageLayoutUtil() {
	Inherit(this, Component);
	var _data;
	const KEY = "stagelayoututil_keys";
	var _compiled = {};
	async function init() {
		await UILStorage.ready(), _data = JSON.parse(UILStorage.get(KEY) || "[]"),
			function compile() {
				_data.forEach((key => {
					_compiled[key] = JSON.parse(UILStorage.get(`INPUT_Config_${key}_compiled`) || "{}");
					let resizeCode = UILStorage.get(`INPUT_Config_${key}_onResize`);
					resizeCode && (_compiled[key].resize = new Function("$this", resizeCode))
				}))
			}()
	}!async function() {
		await Hydra.ready(), window.Platform && Platform.isPlatform || init()
	}(), this.save = function(key, data, input) {
		let compiled = JSON.parse(input.get("compiled") || "{}");
		compiled[key] = data, input.setValue("compiled", JSON.stringify(compiled))
	}, this.create = function(key) {
		_data.includes(key) || (_data.push(key), UILStorage.set(KEY, JSON.stringify(_data)))
	}, this.getCompiled = function(key) {
		return _compiled[key]
	}, this.reload = function() {
		return init()
	}
}), "static"), Class((function StaticParticles(_input, _group) {
	Inherit(this, Object3D);
	const _this = this;
	var _config;
	(_config = InputUIL.create("config", _group)).add("json").setLabel("Particle Config"), async function init(path) {
		if (!path) return;
		path.includes("assets/geometry") || (path = "assets/geometry/" + path), path.includes(".json") || (path += ".json");
		let {
			array: array
		} = await Thread.shared().decodeStaticParticles({
			path: Thread.absolutePath(path)
		}), geometry = new Geometry;
		geometry.addAttribute("position", new GeometryAttribute(array, 3));
		let shaderName = _input.get("shader");
		if (!shaderName) throw "StaticParticles requires a shader";
		let shader = _this.initClass(Shader, shaderName, {
			DPR: {
				value: World.DPR
			}
		});
		! function completeShader(shader) {
			let transparent = _input.get("transparent"),
				depthWrite = _input.get("depthWrite"),
				depthTest = _input.get("depthTest"),
				blending = _input.get("blending"),
				castShadow = _input.get("castShadow"),
				receiveShadow = _input.get("receiveShadow");
			"boolean" == typeof depthWrite && (shader.depthWrite = depthWrite), "boolean" == typeof depthTest && (shader.depthTest = depthTest), "boolean" == typeof transparent && (shader.transparent = transparent), "boolean" == typeof castShadow && (_this.mesh.castShadow = castShadow), "boolean" == typeof receiveShadow && (shader.receiveShadow = receiveShadow), blending && (shader.blending = blending)
		}(shader);
		let mesh = new Points(geometry, shader);
		_this.add(mesh), window[shaderName] && _this.initClass(window[shaderName], mesh, shader, _group, _input)
	}(_config.get("json")), _this.group.prefix = _input.prefix, MeshUIL.add(_this.group, _group).setLabel("Mesh")
}), (_ => {
	Thread.upload((function decodeStaticParticles(e, id) {
		!async function() {
			let {
				positions: positions
			} = await get(e.path), array = new Float32Array(positions);
			resolve({
				array: array
			}, id, [array.buffer])
		}()
	}))
})), Class((function StyleUtil() {
	Inherit(this, Component);
	const _this = this;

	function convertSize(size) {
		return "string" == typeof size && _this.breakpoints[size] ? _this.breakpoints[size] : size
	}

	function fluid(property, obj, dimension = "width") {
		if (Object.keys(obj).length < 2) return console.log("Requires at least 2 values");
		const list = [];
		for (const i in obj) list.push({
			breakpoint: convertSize(i),
			value: obj[i]
		});
		list.sort(((a, b) => a.breakpoint - b.breakpoint));
		const first = list[0],
			last = list[list.length - 1];
		let output = `${property}: ${first.value}px;`;
		for (let i = 0; i < list.length - 1; i++) {
			const config1 = list[i],
				config2 = list[i + 1],
				m = (config2.value - config1.value) / (config2.breakpoint - config1.breakpoint);
			let b = config1.value - m * config1.breakpoint,
				sign = "+";
			b < 0 && (sign = "-", b = Math.abs(b)), output += `\n                @media (min-${dimension}: ${config1.breakpoint}px) {\n                    ${property}: calc(${100*m}vw ${sign} ${b}px);\n                }\n            `
		}
		return output += `\n            @media (min-${dimension}: ${last.breakpoint}px) {\n                ${property}: ${last.value}px;\n            }\n        `, output
	}
	this.breakpoints = {
		xxs: 320,
		mob: 375,
		tablet: 768,
		m: 960,
		l: 1024,
		xl: 1280,
		xxl: 1440,
		xxxl: 1920,
		xxxxl: 2048
	}, this.spacer = {
		m: {
			mob: 10,
			xl: 25
		},
		xl: {
			mob: 50,
			xxl: 150
		}
	}, this.fluid = fluid, this.spacing = function spacing(property, size) {
		if (!_this.spacer[size]) return console.log("size not found");
		if ("padding" === property) {
			let output = "";
			return output += fluid("padding-top", _this.spacer[size]), output += fluid("padding-right", _this.spacer[size]), output += fluid("padding-bottom", _this.spacer[size]), output += fluid("padding-left", _this.spacer[size]), output
		}
		if ("margin" === property) {
			let output = "";
			return output += fluid("margin-top", _this.spacer[size]), output += fluid("margin-right", _this.spacer[size]), output += fluid("margin-bottom", _this.spacer[size]), output += fluid("margin-left", _this.spacer[size]), output
		}
		return fluid(property, _this.spacer[size])
	}, this.larger = function larger(size, style, dimension = "width") {
		return `\n            @media (min-${dimension}: ${convertSize(size)}px) {\n                ${style}\n            }\n        `
	}, this.smaller = function smaller(size, style, dimension = "width") {
		return `\n            @media (max-${dimension}: ${convertSize(size)-1}px) {\n                ${style}\n            }\n        `
	}, this.between = function between(min, max, style, dimension = "width") {
		return `\n            @media (min-${dimension}: ${convertSize(min)}px) and (max-${dimension}: ${convertSize(max)}px) {\n                ${style}\n            }\n        `
	}, this.rtl = function rtl(style) {
		return `\n            html[dir='rtl'] & {\n                ${style}\n            }\n        `
	}
}), "static"), Class((function TextureAnimationShader(_shader, _paths, speeds) {
	TextureAnimationShader.applyTo(_shader, _paths, speeds)
}), (_ => {
	let pending = {},
		cache = {};

	function applyFromTo(a, b) {
		b.uniforms.uAnimationTexture = a.uniforms.uAnimationTexture, b.uniforms.uTextureHeight = a.uniforms.uTextureHeight, b.uniforms.uAnimationLength = a.uniforms.uAnimationLength, b.uniforms.uOffsets = a.uniforms.uOffsets, b.uniforms.uHzMultiplier = a.uniforms.uHzMultiplier, b.uniforms.uSpeed = a.uniforms.uSpeed
	}
	TextureAnimationShader.applyTo = async function(shader, paths, speeds = null) {
		if (shader.waitForPromise = Promise.create(), cache[shader.UILPrefix]) return applyFromTo(cache[shader.UILPrefix], shader), void shader.waitForPromise.resolve();
		if (pending[shader.UILPrefix]) return void pending[shader.UILPrefix].then((_ => {
			applyFromTo(cache[shader.UILPrefix], shader), shader.waitForPromise.resolve()
		}));
		pending[shader.UILPrefix] = Promise.create();
		var promises = {},
			promisesArray = [],
			animations = [];
		if (paths.length > 10) return void console.error("Avatars allow up to 10 texture animations");
		null == speeds && (speeds = []);
		for (let i = 0; i < paths.length; i++) speeds.push(1);
		let buildTexture = function() {
			if (animations.length < paths.length) return;
			animations.sort(((a, b) => a.animationIndex - b.animationIndex));
			let filteredAnimations = animations.map((el => el.data)),
				rawData = [];
			filteredAnimations.map((el => {
				for (let i = 0; i < el.length; i++) rawData.push(el[i])
			}));
			let width = animations[0].totalVertices,
				animationLength = animations.map((el => el.animationLength));
			let height = animationLength.reduce(((accumulator, currentValue) => accumulator + currentValue)),
				textureAnimation = new DataTexture(new Float32Array(rawData), width, height);
			textureAnimation.minFilter = Texture.NEAREST, textureAnimation.magFilter = Texture.NEAREST, textureAnimation.upload();
			let animationOffsets = [],
				partial = 0;
			for (let i = 0; i < animations.length; i++) animationOffsets.push(partial), partial += animations[i].animationLength;
			shader.addUniforms({
				uAnimationTexture: {
					value: textureAnimation
				},
				uTextureHeight: {
					value: height
				},
				uAnimationLength: {
					value: animationLength
				},
				uOffsets: {
					value: animationOffsets
				},
				uHzMultiplier: {
					value: 1
				},
				uSpeed: {
					value: speeds
				}
			}), shader.uniforms.uAnimationLength.type = "fv", shader.uniforms.uOffsets.type = "fv", shader.uniforms.uSpeed.type = "fv"
		};
		paths.map(((path, index) => {
			if (promises[path]) return promises[path].then((_ => {
				buildTexture()
			})), Promise.all(promisesArray);
			let promise = Promise.create();
			promises[path] = promise, promisesArray.push(promise), Thread.shared().setupTextureAnimation({
				path: Thread.absolutePath(Assets.getPath(path))
			}, (function(response) {
				animations.push({
					data: response.data,
					totalVertices: response.length0 / 3,
					animationLength: response.length,
					animationIndex: index
				}), buildTexture(), promise.resolve()
			}))
		})), await Promise.all(promisesArray), cache[shader.UILPrefix] = shader, pending[shader.UILPrefix].resolve(), shader.waitForPromise.resolve()
	}, Thread.upload((function setupTextureAnimation(e, id) {
		!async function() {
			let json = await get(e.path),
				data = [];
			json.map((row => {
				for (let i = 0; i < row.length; i += 3) {
					let vector = new Vector3(row[i], row[i + 1], row[i + 2]);
					data.push(vector.x, vector.y, vector.z, 1)
				}
			}));
			let textureData = new Float32Array(data);
			resolve({
				data: textureData,
				length0: json[0].length,
				length: json.length
			}, id, [textureData.buffer])
		}()
	}))
})), Class((function UI3D(_name = "") {
	Inherit(this, Component);
	const _this = this,
		_rtSize = new Vector2,
		_captureUnitSize = new Vector2;
	this.create = function(width = 512, height = 512, dpr, data) {
		_rtSize.set(width, height), _captureUnitSize.set(width > height ? 1 : width / height, width > height ? height / width : 1), "number" != typeof dpr && (data = dpr, dpr = void 0), data ? (_this.layout = _this.initClass(StageLayout, Utils.getConstructorName(_this) + _name, {
			glui: !0,
			data: data,
			noGraph: !_this.isPlayground()
		}), _this.root = _this.layout.element, _this.capture = _this.initClass(StageLayoutCapture, _this.layout, width, height, UI3D.getRTPool(width, height, dpr))) : (_this.capture = _this.initClass(StageLayoutCapture, width, height, UI3D.getRTPool(width, height, dpr)), _this.root = _this.capture.root), _this.root.capture = _this.capture, _this.$gluiObject = $gl(_captureUnitSize.x, _captureUnitSize.y, _this.capture), _this.capture.object3d = _this.$gluiObject
	}, this.setSize = function(size) {
		const fillRatio = (new Vector2).copy(size).divide(_rtSize);
		fillRatio.divideScalar(Math.max(fillRatio.x, fillRatio.y, 1)), _captureUnitSize.set(size.x > size.y ? 1 : size.x / size.y, size.x > size.y ? size.y / size.x : 1), _captureUnitSize.multiplyScalar(Math.max(fillRatio.x, fillRatio.y)), _this.capture.setSize(size.x, size.y), _this.$gluiObject.size(_captureUnitSize.x, _captureUnitSize.y)
	}, this.useShader = function(shader) {
		_this.$gluiObject.useShader(shader)
	}, this.ready = function() {
		return _this.wait(_this, "isReady")
	}, this.hide = function() {
		_this.capture.enabled = !1, _this.$gluiObject.hide()
	}, this.show = function() {
		_this.capture.enabled = !0, _this.$gluiObject.show()
	}
}), (_ => {
	var _pools = {};
	UI3D.getRTPool = function(width, height, dpr = World.DPR) {
		let key = width + " " + height;
		return _pools[key] || (_pools[key] = RTPool.instance().clone(Texture.UNSIGNED_BYTE, 3, Texture.RGBAFormat), _pools[key].setSize(width * dpr, height * dpr)), _pools[key]
	}, UI3D.findStageLayoutCapture = function(p) {
		for (; p;) {
			if (p.capture) return p.capture;
			p = p.parent
		}
	}
})), Class((function UI3DLayer(_input, _group, _id) {
	Inherit(this, Object3D);
	const _this = this;
	var _config, _obj;

	function completeShader(shader) {
		let transparent = _input.get("transparent"),
			depthWrite = _input.get("depthWrite"),
			depthTest = _input.get("depthTest"),
			blending = _input.get("blending"),
			castShadow = _input.get("castShadow"),
			receiveShadow = _input.get("receiveShadow"),
			renderOrder = _input.getNumber("renderOrder");
		"boolean" == typeof depthWrite && (shader.depthWrite = shader.mesh.depthWrite = depthWrite), "boolean" == typeof depthTest && (shader.depthTest = shader.mesh.depthTest = depthTest), "boolean" == typeof transparent && (shader.transparent = transparent), "boolean" == typeof castShadow && (shader.mesh.castShadow = castShadow), "boolean" == typeof receiveShadow && (shader.receiveShadow = receiveShadow), "number" == typeof renderOrder && (shader.mesh.renderOrder = renderOrder), blending && (shader.blending = blending)
	}(function() {
		_config = InputUIL.create(_input.prefix + "ui3d", _group), _config.add("class"), _config.add("visibilityTest"), _config.addToggle("retina"), _config.setLabel("Config");
		let testString = _config.get("visibilityTest");
		if (testString && testString.length && !eval(testString)) return;
		let className = _config.get("class");
		if (!className || 0 == _input.get("visible")) return;
		let wildcard = _input.get("wildcard");
		if (!window[className]) throw `UI3DLayer :: ${className} doesn't exist!`;
		let obj = _this.initClass(window[className], {
			data: wildcard,
			uil: {
				input: _input,
				group: _group,
				id: _id
			}
		});
		if (!obj.$gluiObject) throw `UI3DLayer :: ${className} not instance of UI3D (or create() hasn't been called)`;
		completeShader(obj.$gluiObject.shader), GLUIUtils.setRetinaMode(obj.$gluiObject, _config.get("retina") || UI3DLayer.overrideRetina, _this), GLUIUtils.isRetinaMode(obj.$gluiObject) ? _this.flag("retina", !0) : (obj.$gluiObject.enable3D(), obj.$gluiObject.depthTest(!1)), _obj = obj
	})(), _this.getObject = function() {
		return _obj
	}, this.onDestroy = function() {
		_this.flag("retina") && GLUI.Scene.remove(_obj.$gluiObject)
	}, _this.get("renderOrder", (() => _obj?.$gluiObject.shader.mesh.renderOrder)), _this.set("renderOrder", (renderOrder => {
		_obj && (_obj.$gluiObject.shader.mesh.renderOrder = renderOrder)
	}))
})), Namespace("FX"), FX.Class((function UnrealBloom(_nuke, options, _unique) {
	Inherit(this, Component);
	var _triangleGeometry, _luminosityShader, _compositeShader, _mesh, _inputTexture, _this = this;
	"string" == typeof options ? (_unique = _params, options = {}, _nuke = World.NUKE) : "string" == typeof _nuke ? (_unique = _nuke, options = {}, _nuke = World.NUKE) : !_nuke || _nuke instanceof Nuke ? (_nuke = _nuke || World.NUKE, options = options || {}, _unique = _unique || "") : (options = _nuke, _nuke = World.NUKE);
	var _oldClearColor = new Color,
		_oldClearAlpha = 1,
		_renderTargetsHorizontal = [],
		_renderTargetsVertical = [],
		_separableBlurShaders = [],
		_nMips = options.nMips || 5,
		_DPR = _nuke.dpr,
		_blurDirectionX = new Vector2(_DPR, 0),
		_blurDirectionY = new Vector2(0, _DPR),
		_kernelSizeArray = options.kernelSizeArray || [3, 5, 7, 9, 11],
		_bloomFactors = options.bloomFactors || [1, .8, .6, .4, .2],
		_useRTPool = !1 !== options.useRTPool;

	function render() {
		if (!_this.enabled || !1 === _this.visible) return;
		let renderer = _nuke.renderer;
		_oldClearColor.copy(renderer.getClearColor()), _oldClearAlpha = renderer.getClearAlpha();
		let oldAutoClear = renderer.autoClear;
		renderer.autoClear = !0, renderer.setClearColor(_this.clearColor, 0);
		let inputRenderTarget = _inputTexture || _nuke.rttBuffer.texture;
		_luminosityShader.uniforms.luminosityThreshold.value > .01 && (_luminosityShader.uniforms.tDiffuse.value = inputRenderTarget, _mesh.shader = _luminosityShader, renderer.renderSingle(_mesh, _nuke.camera, _this.renderTargetBright), inputRenderTarget = _this.renderTargetBright);
		for (let i = 0; i < _nMips; i++) _mesh.shader = _separableBlurShaders[i], _separableBlurShaders[i].uniforms.colorTexture.value = inputRenderTarget, _separableBlurShaders[i].uniforms.direction.value = _blurDirectionX, renderer.renderSingle(_mesh, _nuke.camera, _renderTargetsHorizontal[i]), _separableBlurShaders[i].uniforms.colorTexture.value = _renderTargetsHorizontal[i].texture, _separableBlurShaders[i].uniforms.direction.value = _blurDirectionY, renderer.renderSingle(_mesh, _nuke.camera, _renderTargetsVertical[i]), inputRenderTarget = _renderTargetsVertical[i];
		_mesh.shader = _compositeShader, renderer.renderSingle(_mesh, _nuke.camera, _renderTargetsHorizontal[0]), renderer.setClearColor(_oldClearColor, _oldClearAlpha), renderer.autoClear = oldAutoClear
	}

	function resizeHandler() {
		_this.resolution.set(_nuke.stage.width, _nuke.stage.height).multiplyScalar(_DPR), _blurDirectionX.x = _DPR, _blurDirectionY.y = _DPR;
		let resx = Math.round(_this.resolution.x / 2),
			resy = Math.round(_this.resolution.y / 2);
		_this.renderTargetBright && _this.renderTargetBright.setSize(resx, resy);
		for (var i = 0; i < _renderTargetsHorizontal.length; i++) _renderTargetsHorizontal[i].setSize(resx, resy), _renderTargetsVertical[i].setSize(resx, resy), _separableBlurShaders[i].uniforms.texSize.value = new Vector2(resx, resy), resx = Math.round(resx / 2), resy = Math.round(resy / 2)
	}
	this.uniforms = {
			tUnrealBloom: {
				value: null,
				ignoreUIL: !0
			},
			unique: _unique
		}, this.resolution = new Vector2(_nuke.stage.width * _DPR, _nuke.stage.height * _DPR), this.clearColor = new Color(0, 0, 0), this.enabled = "boolean" != typeof options.enabled || options.enabled, this.outputTexture = null,
		function initRTs() {
			if (_useRTPool) return void RTPool.instance(null, 3, Texture.RGBAFormat).disableResize();
			let pars = {
					minFilter: Texture.LINEAR,
					magFilter: Texture.LINEAR,
					format: Texture.RGBAFormat
				},
				resx = Math.round(_this.resolution.x / 2),
				resy = Math.round(_this.resolution.y / 2);
			_this.renderTargetBright = new RenderTarget(resx, resy, pars), _this.renderTargetBright.texture.generateMipmaps = !1;
			for (let i = 0; i < _nMips; i++) {
				let renderTargetHorizonal = new RenderTarget(resx, resy, pars);
				renderTargetHorizonal.texture.generateMipmaps = !1, _renderTargetsHorizontal.push(renderTargetHorizonal);
				let renderTargetVertical = new RenderTarget(resx, resy, pars);
				renderTargetVertical.texture.generateMipmaps = !1, _renderTargetsVertical.push(renderTargetVertical), resx = Math.round(resx / 2), resy = Math.round(resy / 2)
			}
			_this.outputTexture = _renderTargetsHorizontal[0].texture, _this.uniforms.tUnrealBloom.value = _renderTargetsHorizontal[0].texture
		}(),
		function initScene() {
			_triangleGeometry = World.QUAD, _luminosityShader = _this.initClass(Shader, "UnrealBloomLuminosity", {
				tDiffuse: {
					value: null,
					ignoreUIL: !0
				},
				luminosityThreshold: {
					value: 1
				},
				smoothWidth: {
					value: .01,
					ignoreUIL: !0
				},
				defaultColor: {
					value: new Color(0),
					ignoreUIL: !0
				},
				defaultOpacity: {
					value: 0,
					ignoreUIL: !0
				},
				unique: _unique
			}), (_mesh = new Mesh(_triangleGeometry, _luminosityShader)).frustumCulled = !1
		}(),
		function initBlurShaders() {
			let resx = Math.round(_this.resolution.x / 2),
				resy = Math.round(_this.resolution.y / 2);
			for (let i = 0; i < _nMips; i++) {
				let shader = _this.initClass(Shader, "UnrealBloomGaussian", {
					unique: _unique,
					colorTexture: {
						value: null
					},
					texSize: {
						value: new Vector2(resx, resy)
					},
					direction: {
						value: new Vector2(.5, .5)
					}
				}, null, (glsl => `\n#define KERNEL_RADIUS ${_kernelSizeArray[i]}\n#define SIGMA ${_kernelSizeArray[i]}\n${glsl}`), `gaussian${i}`);
				_separableBlurShaders.push(shader), resx = Math.round(resx / 2), resy = Math.round(resy / 2)
			}
		}(),
		function initCompositeShader() {
			let uniforms = {
				bloomStrength: {
					value: 1
				},
				bloomTintColor: {
					value: new Color("#ffffff")
				},
				bloomRadius: {
					value: 0
				},
				unique: _unique
			};
			for (let i = 0; i < _nMips; i++) uniforms[`blurTexture${i+1}`] = {
				value: _useRTPool ? null : _renderTargetsVertical[i].texture,
				ignoreUIL: !0
			};
			(_compositeShader = _this.initClass(Shader, "UnrealBloomComposite", uniforms, null, ((glsl, type) => {
				if ("vs" === type) return glsl;
				let compositeUniforms = "",
					compositeMain = "";
				for (let i = 0; i < _nMips; i++) compositeUniforms += `uniform sampler2D blurTexture${i+1};\n`, compositeMain += `lerpBloomFactor(${_bloomFactors[i].toFixed(4)}) * vec4(bloomTintColor, 1.0) * texture2D(blurTexture${i+1}, vUv) ${i<_nMips-1?"+ ":""}`;
				return (glsl = glsl.replace("uniform sampler2D blurTexture1;", compositeUniforms)).replace("lerpBloomFactor(1.0) * vec4(bloomTintColor, 1.0) * texture2D(blurTexture1, vUv)", compositeMain)
			}))).needsUpdate = !0
		}(),
		function initPass() {
			_this.pass = _this.initClass(NukePass, "UnrealBloomPass", _this.uniforms)
		}(),
		function addListeners() {
			_this.events.sub(Events.RESIZE, resizeHandler), _this.startRender(render, RenderManager.POST_RENDER)
		}(), options.noUIL || (ShaderUIL.add(_luminosityShader).setLabel("UnrealBloom Luminosity"), ShaderUIL.add(_compositeShader).setLabel("UnrealBloom Composite")), this.set("texture", (texture => {
			_inputTexture = texture
		})), this.get("luminosityShader", (_ => _luminosityShader)), this.get("compositeShader", (_ => _compositeShader)), this.set("dpr", (dpr => {
			_DPR = dpr, resizeHandler()
		})), this.renderBloom = render, this.renderMesh = _mesh, this.onDestroy = function() {
			_renderTargetsHorizontal.forEach((r => r.destroy())), _renderTargetsVertical.forEach((r => r.destroy())), _this.renderTargetBright && _this.renderTargetBright.destroy()
		}, this.getRTs = function() {
			const RTPool = FX.UnrealBloom.getRTPool();
			_this.renderTargetBright = RTPool.getRT();
			for (let i = 0; i < _nMips; i++) _renderTargetsHorizontal.push(RTPool.getRT()), _renderTargetsVertical.push(RTPool.getRT()), _compositeShader.uniforms[`blurTexture${i+1}`].value = _renderTargetsVertical[i].texture;
			_this.outputTexture = _renderTargetsHorizontal[0].texture, _this.uniforms.tUnrealBloom.value = _renderTargetsHorizontal[0].texture, resizeHandler()
		}, this.putRTs = function() {
			const RTPool = FX.UnrealBloom.getRTPool();
			_this.renderTargetBright && RTPool.putRT(_this.renderTargetBright), _this.renderTargetBright = null;
			for (let i = 0; i < _renderTargetsHorizontal.length; i++) RTPool.putRT(_renderTargetsHorizontal[i]), RTPool.putRT(_renderTargetsVertical[i]);
			_renderTargetsHorizontal = [], _renderTargetsVertical = []
		}, this.onInvisible = function() {
			_this.putRTs()
		}, this.onVisible = function() {
			_this.getRTs()
		}
}), (_ => {
	var _pool;
	FX.UnrealBloom.getRTPool = function() {
		return _pool || (_pool = RTPool.instance().clone()), _pool
	}
})), Class((function VelocityTracker(_vector) {
	Inherit(this, Component);
	var _this = this,
		Vector = "number" == typeof _vector.z ? Vector3 : Vector2,
		_velocity = new Vector,
		_last = new Vector;

	function loop(time, delta) {
		_velocity.subVectors(_vector, _last).divideScalar((delta || Render.DELTA) / (1e3 / 60)), _last.copy(_vector)
	}
	this.value = _velocity, this.start = function() {
		_this.startRender(loop)
	}, this.onDestroy = this.stop = function() {
		_this.stopRender(loop)
	}, this.copy = function() {
		_last.copy(_vector)
	}, this.update = loop
})), Class((function Video(_params) {
	Inherit(this, Component);
	const _this = this;
	let $video, _video, _loadingState, _handlers, _ready = Promise.create(),
		_loaded = Promise.create(),
		_initialPlay = !0;

	function startPreload() {
		return _loadingState = !0, _video.load(), _ready
	}
	async function startPlayback() {
		if (!_this.playing && (_loadingState = !1, _video.readyState < 2 && (_video.load(), await _ready), !_this.playing)) {
			_initialPlay && (_initialPlay = !1, _params.currentTime && (_video.currentTime = _params.currentTime)), _this.playing = !0;
			try {
				return await _video.play()
			} catch (error) {
				throw _this.playing = !1, error
			}
		}
	}

	function getSource(src = "") {
		return src && !src.includes(["webm", "mp4", "ogv", "blob", "?"]) && (src += "." + Device.media.video), src
	}

	function progress(e) {
		_this.events.fire(Video.PROGRESS, e)
	}

	function timeupdate(e) {
		_this.events.fire(Video.UPDATE, e)
	}

	function play(e) {
		if (_loadingState) return _loadingState = !1;
		_this.events.fire(Video.PLAY, e)
	}

	function pause(e) {
		_this.events.fire(Video.PAUSE, e)
	}

	function playing(e) {
		_this.events.fire(Video.PLAYING, e)
	}

	function ended(e) {
		_this.events.fire(Video.ENDED, e)
	}

	function waiting(e) {
		_this.events.fire(Video.WAITING, e)
	}

	function canplay(e) {
		loadeddata(), _this.events.fire(Video.CANPLAY, e)
	}

	function loadedmetadata(e) {
		_this.dimensions.width = _video.videoWidth, _this.dimensions.height = _video.videoHeight, _this.events.fire(Video.LOADEDMETADATA, e)
	}

	function loadeddata(e) {
		_video.readyState >= 2 && _ready.resolve(), _video.readyState >= 4 && _loaded.resolve()
	}

	function error() {
		_this.playing && (_this.playing = !1), _this.events.fire(Video.ERROR, _video.error)
	}! function initParam() {
		let defaults = {
			muted: !0,
			loop: !1,
			autoplay: !1,
			inline: !0,
			controls: !1,
			currentTime: 0,
			playback: 1,
			preload: !1,
			width: 640,
			height: 360,
			events: [],
			disableRemotePlayback: !0
		};
		_params = Object.assign(defaults, _params)
	}(),
	function init() {
		return _video = document.createElement("video"), _params.src && (_video.src = getSource(_params.src)), _video.setAttribute("crossorigin", "anonymous"), _video.disableRemotePlayback = _params.disableRemotePlayback, _video.autoplay = _params.autoplay, _video.loop = _params.loop, _video.controls = _params.controls, _video.height = _params.height, _video.width = _params.width, _video.defaultMuted = _params.muted, _video.defaultPlaybackRate = _params.playback, _video.preload = "string" == typeof _params.preload ? _params.preload : _params.preload ? "auto" : "none", _video.muted = _params.autoplay || _params.muted, _video.setAttribute("webkit-playsinline", _params.inline), _video.setAttribute("playsinline", _params.inline), _this.dimensions = {
			width: _params.width,
			height: _params.height
		}, _video.autoplay && _video.setAttribute("autoplay", _params.autoplay), _video.setAttribute("muted", _params.muted), _params.loop && _video.setAttribute("loop", _params.loop), _this.div = _video, $video = $(_video), _params.autoplay ? startPlayback() : _params.preload ? startPreload() : void 0
	}(),
	function addHandlers() {
		["loadedmetadata", "loadeddata", "error"].forEach((ev => {
			_params.events.includes(ev) || _params.events.push(ev)
		})), _handlers = {
			play: play,
			pause: pause,
			ended: ended,
			playing: playing,
			progress: progress,
			waiting: waiting,
			timeupdate: timeupdate,
			loadedmetadata: loadedmetadata,
			loadeddata: loadeddata,
			canplay: canplay,
			error: error
		}, _params.events.forEach((ev => _video.addEventListener(ev, _handlers[ev], !0)))
	}(), this.set("loop", (bool => _video.loop = bool)), this.get("loop", (() => _video.loop)), this.set("src", (src => {
		(src = getSource(src)) !== _video.src && (_ready = Promise.create(), _loaded = Promise.create(), _video.src = src, _this.playing ? (_this.playing = !1, startPlayback()) : _params.preload && startPreload())
	})), this.get("src", (() => _video.currentSrc)), this.set("volume", (v => {
		_video.muted = 0 === v, _video.volume = v
	})), this.get("volume", (() => _video.volume)), this.set("muted", (bool => _video.muted = bool)), this.get("muted", (() => _video.muted)), this.set("controls", (bool => _video.controls = bool)), this.get("controls", (() => _video.controls)), this.get("duration", (() => _video.duration)), this.get("ended", (() => _video.ended)), this.get("playback", (() => _video.playbackRate)), this.get("time", (() => _video.currentTime)), this.get("error", (() => _video.error)), this.get("canRender", (() => _video.readyState >= 2)), this.get("canPlayThrough", (() => _video.readyState >= 4)), this.get("paused", (() => _video.paused)), this.get("element", (() => $video)), this.get("object", (() => $video)), this.get("video", (() => _video)), this.get("bufferedSeconds", (_ => _video.readyState < 2 ? 0 : _video.buffered.end(0) - _video.buffered.start(0))), this.load = async function() {
		return startPreload()
	}, this.play = async function() {
		return startPlayback()
	}, this.pause = function() {
		_this.playing = !1, _video.pause()
	}, this.stop = function() {
		_this.playing = !1, _video.pause(), _this.seek(0)
	}, this.seek = function(t) {
		if (_video.fastSeek) return _video.fastSeek(t);
		_video.currentTime = t
	}, this.seekExact = function(t) {
		_video.currentTime = t
	}, this.ready = function() {
		return _ready
	}, this.loaded = function() {
		return _loaded
	}, this.onDestroy = function() {
		_this.stop(), _video.src = "",
			function removeListeners() {
				_params.events.forEach((ev => _video.removeEventListener(ev, _handlers[ev], !0)))
			}(), _video = null
	}, this.setSize = function(width, height) {
		_video.width = width, _video.height = height, _this.dimensions.width = width, _this.dimensions.height = height
	}
}), (() => {
	Video.PLAY = "hydra_video_play", Video.CANPLAY = "hydra_video_can_play", Video.LOADEDMETADATA = "hydra_video_loaded_metadata", Video.PAUSE = "hydra_video_pause", Video.PROGRESS = "hydra_video_progress", Video.UPDATE = "hydra_video_update", Video.PLAYING = "hydra_video_playing", Video.ENDED = "hydra_video_ended", Video.WAITING = "hydra_video_waiting", Video.ERROR = "hydra_video_error"
})), Class((function VideoTexture(_path, {
	loop: loop = !0,
	preload: preload = !0,
	autoplay: autoplay = !0,
	muted: muted = !0,
	firstFrame: firstFrame = !1,
	parseColor: parseColor = !1,
	events: events = []
} = {}) {
	Inherit(this, Component);
	const _this = this;
	let _video, _hasRequestCallback = !1;

	function update() {
		_video.canRender && _this.canUpdate && (_this.videoTexture && (_this.texture.destroy(), _this.texture = _this.videoTexture, delete _this.videoTexture), _this.texture.image || (_this.texture.image = _video.video, _this.texture.upload()), _this.colorParser && _this.colorParser.update(_video.time), _this.texture.loaded = _this.texture.needsUpdate = !0), _hasRequestCallback && _video.element.div.requestVideoFrameCallback(update)
	}
	_this.canUpdate = !0,
		function() {
			let src = _path.includes("blob") ? _path : Assets.getPath(_path);
			if (_path.includes(["jpg", "png"])) {
				let noop = _ => {};
				_this.texture = Utils3D.getTexture(src), _this.video = {
					play: noop,
					pause: noop
				}, parseColor && (_this.colorParser = _this.initClass(VideoTextureColorParser, src, !0))
			} else {
				let videoEvents = ["timeupdate", "playing", "ended"];
				events.forEach((ev => {
					videoEvents.includes(ev) || videoEvents.push(ev)
				})), _video = _this.initClass(Video, {
					src: src,
					loop: loop,
					preload: preload,
					autoplay: autoplay,
					muted: muted,
					events: videoEvents
				}), _this.texture = new Texture, _this.texture.format = Texture.RGBFormat, _this.texture.minFilter = _this.texture.magFilter = Texture.LINEAR, _this.texture.generateMipmaps = !1, _this.texture.loaded = !1, _this.video = _video, _this.dimensions = _video.dimensions, _this.texture.dimensions = _this.dimensions, _this.events.bubble(_video, Video.PLAYING), parseColor && (_this.colorParser = _this.initClass(VideoTextureColorParser, src, !1)), firstFrame && (_this.videoTexture = _this.texture, _this.texture = Utils3D.getTexture(firstFrame))
			}
			_hasRequestCallback = "requestVideoFrameCallback" in HTMLVideoElement.prototype
		}(), this.set("loop", (loop => _video.loop = loop)), this.set("muted", (muted => _video.muted = muted)), this.set("src", (src => {
			_video.src = src.includes("blob") ? src : Assets.getPath(src), _hasRequestCallback && _video.element.div.requestVideoFrameCallback(update)
		})), this.start = async function() {
			_video && (_this.active = !0, await _video.play(), _hasRequestCallback ? (_video.element.div.requestVideoFrameCallback(update), _this.startRender((_ => {}), 30)) : _this.startRender(update, 30), update())
		}, this.stop = function() {
			_video && (_this.active = !1, _video.pause(), _hasRequestCallback ? _video.element.div.cancelVideoFrameCallback(update) : _this.stopRender(update))
		}, this.seek = function(time) {
			_video && _video.seek(time)
		}, this.onInvisible = function() {
			_this.active && _video.pause(), _this.video.object.css({
				display: "none"
			})
		}, this.onVisible = function() {
			_this.active && _video.play(), _this.video.object.css({
				display: "block"
			})
		}, this.onDestroy = function() {
			_this.texture.destroy(), VideoTexture.element().removeChild(_this.video.object, !0)
		}
}), (_ => {
	var $element;
	VideoTexture.element = function() {
		return $element || (($element = Stage.create("VideoTextures")).size(0, 0).setZ(-1), Stage.add($element)), $element
	}
})), Class((function VideoTextureColorParser(_path, _static) {
	Inherit(this, Component);
	const _this = this;
	var _colorData, _color = new Color;
	this.color = new Color, this.lerp = 1, async function() {
		let path = _path.split(".")[0] + ".json";
		_colorData = await get(path)
	}(), this.update = function(time) {
		if (_colorData)
			for (let key in _colorData)
				if (time <= key) {
					_color.set("#" + _colorData[key]), _this.color.lerp(_color, _this.lerp);
					break
				}
	}
})), Namespace("FX"), FX.Class((function VolumetricAtmosphere(_nuke = World.NUKE, _options = {}, _unique) {
	Inherit(this, Component);
	const _this = this;
	var _scene, _volume, _light, _invisible, _blurs = [],
		_projection = new ScreenProjection(_nuke.camera),
		_lightPos = new Vector3,
		_v31 = new Vector3,
		_v32 = new Vector3;

	function render({
		stage: stage,
		camera: camera
	}) {
		if (!_light || !_this.enabled || _invisible) return;
		_scene.nuke.setSize(stage.width, stage.height), _scene.nuke.stage = stage, _scene.nuke.camera = camera, _projection.camera = camera, _lightPos.setFromMatrixPosition(_light.matrixWorld), _v31.copy(_scene.nuke.camera.position).normalize(), _v32.copy(_lightPos).normalize();
		let angle = Math.degrees(_scene.nuke.camera.rotation.y);
		angle < 0 && (angle += 360), angle = Math.radians(angle), _volume.uniforms.lightPos.value.set(Math.range(Math.cos(angle), -1, 1, 0, 1, !0), Math.range(Math.sin(angle), -1, 1, 1, 0, !0)), _scene.render()
	}! function polymorph() {
		"object" == typeof _unique && (_options = _unique, _unique = void 0), _this.enabled = "boolean" != typeof _options.enabled || _options.enabled
	}(),
	function initScene() {
		(_scene = _this.initClass(FXScene, _nuke, RTPool.instance())).setDPR(1), _this.rt = _scene.rt, _this.depth = {
			value: _nuke.rttBuffer.createDepthTexture(),
			ignoreUIL: !0
		};
		let shader = _this.initClass(Shader, "VolumetricAtmosphereColor", {
			uColor: {
				value: new Color
			},
			tMap: {
				value: void 0,
				ignoreUIL: !0
			},
			uNear: {
				value: _nuke.camera.near,
				ignoreUIL: !0
			},
			uFar: {
				value: _nuke.camera.far,
				ignoreUIL: !0
			},
			tVideo: {
				value: null,
				ignoreUIL: !0
			},
			uUseVideo: {
				value: 0,
				ignoreUIL: !0
			},
			uFadeDist: {
				value: .5
			},
			uSkyClip: {
				value: 1
			},
			uNoiseScale: {
				value: 1
			},
			uHSL: {
				value: new Vector3
			},
			tDepth: _this.depth,
			depthWrite: !1,
			unique: _unique
		});
		ShaderUIL.add(shader);
		let mesh = new Mesh(World.QUAD, shader);
		mesh.frustumCulled = !1, _scene.scene.add(mesh), _this.color = shader
	}(),
	function initPasses() {
		[new Vector2(2 * _nuke.dpr, 0), new Vector2(0, 2 * _nuke.dpr)].forEach((dir => {
			let pass = new NukePass("VALightBlur", {
				uDir: {
					value: dir
				}
			});
			_blurs.push(pass), _scene.nuke.add(pass)
		})), _volume = new NukePass("VolumetricAtmosphere", {
			unique: _unique,
			lightPos: {
				value: new Vector2,
				ignoreUIL: !0
			},
			fExposure: {
				type: "f",
				value: .2
			},
			fDecay: {
				type: "f",
				value: .93
			},
			fDensity: {
				type: "f",
				value: .15
			},
			fWeight: {
				type: "f",
				value: 1.27
			},
			fClamp: {
				type: "f",
				value: 1
			}
		}), _scene.nuke.add(_volume), ShaderUIL.add(_volume).setLabel("Atmosphere Volumetrics"), _this.volumeShader = _volume
	}(),
	function addListeners() {
		_this.events.sub(_nuke, Nuke.RENDER, render)
	}(), this.setLight = function(mesh) {
		_light = mesh
	}, this.set("resolution", (v => {
		_scene.setResolution(v)
	})), this.set("dpr", (v => {
		_scene.setDPR(v)
	})), this.get("rt", (_ => _scene.rt)), this.onInvisible = function() {
		_invisible = !0
	}, this.onVisible = function() {
		_invisible = !1
	}
})), Namespace("DreamUI"), DreamUI.Class((function AccessibilityService() {
	Inherit(this, Component);
	const _this = this;
	_this.isKeyboardNav = !1, async function() {
		_this.events.sub(Keyboard.DOWN, (e => {
			9 === e.keyCode && (_this.isKeyboardNav = !0)
		})), _this.events.sub(Mouse.input, Interaction.CLICK, (() => {
			_this.isKeyboardNav && (_this.isKeyboardNav = !1)
		})), await DreamStyleguide.instance().ready(), HydraCSS.style(".use-keyboard", {
			...DreamStyleguide.instance().withAccessibility
		}), _this.flag("isReady", !0)
	}(), _this.enableKeyboardFocus = function(el, hoverFunction) {
		el.div.onfocus = () => {
			_this.isKeyboardNav && (el.div.classList.contains("use-keyboard") || el.div.classList.add("use-keyboard")), hoverFunction && "function" == typeof hoverFunction && hoverFunction({
				action: "over"
			})
		}, el.div.onblur = () => {
			el.div.classList.contains("use-keyboard") && el.div.classList.remove("use-keyboard"), hoverFunction && "function" == typeof hoverFunction && hoverFunction({
				action: "out"
			})
		}
	}, _this.enableTabNavigation = function(el, clickFunction, hoverFunction, ariaLabel, num = 0) {
		if (el.attr("tabindex", `${num}`), ariaLabel && el.attr("aria-label", ariaLabel), clickFunction) {
			let keys = {};
			el.keydown((e => {
				keys[e.keyCode] = !0, keys[17] && keys[18] && keys[13] && clickFunction(e), keys[17] && keys[18] && keys[32] && clickFunction(e), keys[13] && clickFunction(e), keys[32] && clickFunction(e)
			})), el.keyup((e => {
				keys[e.key] = !1, keys = {}
			}))
		}
		_this.enableKeyboardFocus(el, hoverFunction)
	}, this.ready = function() {
		return _this.wait("isReady")
	}
}), "singleton"), Namespace("DreamUI"), DreamUI.Class((function SkipLinkButton({
	hiddenStyles: hiddenStyles,
	visibleStyles: visibleStyles,
	target: target,
	...rest
}) {
	const _this = this;

	function onFocus() {
		_this.setStyles(function getVisibleStyles() {
			return visibleStyles || {
				element: {
					position: "absolute !important",
					top: 0,
					left: 0,
					right: 0,
					margin: "auto",
					width: "auto",
					height: "auto",
					zIndex: 1,
					background: DreamColors.instance().white
				}
			}
		}())
	}

	function onBlur() {
		_this.setStyles(getHiddenStyles())
	}

	function onClick() {
		_this.target && _this.target.focus?.()
	}

	function getHiddenStyles() {
		return hiddenStyles || {
			element: {
				position: "absolute !important",
				left: "-999px",
				width: "1px",
				height: "1px",
				overflow: "hidden",
				zIndex: "-999"
			}
		}
	}
	Inherit(this, DreamUI.Button, {
		styles: hiddenStyles || getHiddenStyles(),
		...rest
	}), _this.target = target, _this.element?.bind?.("focus", onFocus), _this.element?.bind?.("blur", onBlur), _this.events.sub(_this, DreamUI.Button.CLICK, onClick), _this.setTarget = _target => _this.target = _target, _this.hide = _ => _this.element?.hide?.(), _this.show = _ => _this.element?.show?.(), _this.onDestroy = _ => {
		_this.element?.unbind?.("focus", onFocus), _this.element?.unbind?.("blur", onBlur), _this.events.unsub(_this, DreamUI.Button.CLICK, onClick)
	}
})), Namespace("DreamUI"), DreamUI.Class((function Badge({
	parent: parent,
	styles: styles = {},
	count: count = "",
	size: size = "medium",
	viewComponent: viewComponent
}) {
	Inherit(this, DreamUI.ElementController);
	const _this = this;
	_this.size = size, _this.count = count, async function() {
		await _this.initView({
			component: viewComponent || DreamUI.BadgeView,
			config: {
				parent: parent,
				styles: styles,
				count: count,
				size: size
			}
		})
	}(), _this.updateCount = count => {
		_this.view.text.text(count)
	}, _this.clearBadge = _ => {
		_this.view?.destroy(), _this.destroy()
	}
})), Namespace("DreamUI"), DreamUI.Class((function BadgeStylesheet() {
	Inherit(this, Component);
	const _this = this,
		BASE_ELEMENT = {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			height: "24px",
			width: "24px",
			borderRadius: "50%",
			textAlign: "center",
			position: "absolute !important",
			top: 0,
			right: 0,
			transform: "translate(50%, -50%)"
		},
		BASE_TEXT = {
			fontSize: "14px",
			color: DreamColors.instance().white
		};
	!async function() {
		await DreamColors.instance().ready(), _this.medium = {
			element: {
				...BASE_ELEMENT,
				background: DreamColors.instance().red500
			},
			text: {
				...BASE_TEXT
			}
		}, _this.large = {
			element: {
				...BASE_ELEMENT,
				height: "32px",
				width: "32px",
				background: DreamColors.instance().red500
			},
			text: {
				...BASE_TEXT,
				fontSize: "18px"
			}
		}, _this.small = {
			element: {
				...BASE_ELEMENT,
				height: "16px",
				width: "16px",
				background: DreamColors.instance().red500
			},
			text: {
				...BASE_TEXT,
				fontSize: "11px"
			}
		}, _this.flag("isReady", !0)
	}(), _this.ready = function() {
		return _this.wait("isReady")
	}
}), "static"), Namespace("DreamUI"), DreamUI.Class((function BadgeView({
	parent: parent,
	styles: styles,
	count: count,
	size: size
}) {
	Inherit(this, DreamUI.DreamElement, "span");
	const _this = this,
		$this = _this.element;
	!async function() {
		await DreamUI.BadgeStylesheet.ready(),
			function initElement() {
				parent?.element ? parent.element.div.insertAdjacentElement("beforeend", $this.div) : parent && parent.div.insertAdjacentElement("beforeend", $this.div);
				$this.goob(_this.combineStyles([DreamUI.BadgeStylesheet[size].element, styles.element]))
			}(),
			function initText() {
				_this.text = $this.create(`${_this.constructorName}__text`), _this.text.goob(_this.combineStyles([DreamUI.BadgeStylesheet[size].text, styles.text])), _this.text.text(count)
			}()
	}()
})), Namespace("DreamUI"), DreamUI.Class((function Button({
	animations: animations = DreamUI.ButtonAnimations,
	disabled: disabled,
	viewComponent: viewComponent = DreamUI.ButtonView,
	icon: icon,
	styles: styles = {},
	text: text,
	preset: preset = "none",
	type: type,
	useIconViewBox: useIconViewBox = !1
}) {
	Inherit(this, DreamUI.ElementController);
	const _this = this;
	!async function() {
		_this.disabled = disabled, await _this.initView({
			component: viewComponent,
			config: {
				icon: icon,
				styles: styles,
				text: text,
				preset: preset,
				type: type,
				useIconViewBox: useIconViewBox
			}
		}).ready(), _this.disabled && _this.disable(), _this.flag("isReady", !0)
	}(), _this.handleHover = function(event) {
		animations.onHover(event, _this.view)
	}, _this.handleClick = function() {
		_this.events.fire(DreamUI.Button.CLICK)
	}, _this.handleKeyboardFocus = function(event) {
		_this.events.fire(DreamUI.Button.KEYBOARD_FOCUS, event)
	}, _this.setText = async value => {
		await _this.wait("text"), _this.view.text.text(value)
	}, _this.enable = async _ => {
		await _this.wait("isReady"), _this.view.element && (_this.disabled = !1, _this.view.element.enableInteract(), animations.onEnabled(_this.view), _this.view.element.attr("disabled", null))
	}, _this.disable = async _ => {
		await _this.wait("isReady"), _this.disabled = !0, _this.view.element.disableInteract(), animations.onDisabled(_this.view), _this.view.element.attr("disabled", "disabled")
	}, _this.focus = _ => {
		_this.view.element.div.focus()
	}, _this.setIcon = (_icon, _styles = {}, _useIconViewBox = !1) => {
		_this.view?.icon?.destroy?.(), _this.view.initIcon(_icon, _styles, _useIconViewBox)
	}, _this.get("element", (_ => _this.view?.element)), _this.get("text", (_ => _this.view?.text)), _this.get("icon", (_ => _this.view?.icon))
}), (_ => {
	DreamUI.Button.CLICK = "DreamUI.Button.CLICK", DreamUI.Button.KEYBOARD_FOCUS = "DreamUI.Button.KEYBOARD_FOCUS"
})), Namespace("DreamUI"), DreamUI.Class((function ButtonAnimations() {
	Inherit(this, Component), this.onHover = function({
		action: action
	}, button) {
		switch (action) {
			case "over":
				button.element.tween({
					opacity: .75
				}, 400, "easeOutCubic");
				break;
			case "out":
				button.element.tween({
					opacity: 1
				}, 400, "easeOutCubic")
		}
	}, this.onClick = function(button) {
		button.element.tween({
			opacity: 1
		}, 400, "easeOutCubic")
	}, this.onEnabled = function(button) {
		button.element.css({
			opacity: 1
		}), button.element.hit.css({
			cursor: "pointer"
		})
	}, this.onDisabled = function(button) {
		button.element.css({
			opacity: .5,
			cursor: "not-allowed"
		}), button.element.hit && button.element.hit.css({
			cursor: "not-allowed"
		})
	}
}), "static"), Namespace("DreamUI"), DreamUI.Class((function ButtonStyles() {
	Inherit(this, Component);
	const _this = this,
		BASE_ELEMENT = {
			"align-items": "center",
			appearance: "none",
			display: "flex",
			"-webkit-appearance": "none",
			background: "none",
			border: "none",
			borderRadius: "0.4rem",
			outline: "none",
			position: "relative",
			textAlign: "center",
			whiteSpace: "nowrap"
		};
	let BASE_TEXT = {};
	const BASE_ICON = {
		height: "2.4rem",
		width: "2.4rem"
	};
	!async function() {
		await DreamColors.instance().ready(), await DreamStyleguide.instance().ready(), BASE_TEXT = {
			...DreamStyleguide.instance().buttonMedium,
			position: "relative",
			fontWeight: "bold"
		}, _this.none = {}, _this.basic = {
			element: {
				...BASE_ELEMENT,
				background: "transparent",
				color: DreamColors.instance().black,
				padding: "1.25rem 3.5rem"
			},
			text: {
				...BASE_TEXT
			},
			icon: {
				...BASE_ICON
			}
		}, _this.fab = {
			element: {
				...BASE_ELEMENT,
				background: DreamColors.instance().primary,
				color: DreamColors.instance().white,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				boxShadow: `0 2px 4px ${DreamColors.instance().black}`,
				height: "6rem",
				width: "6rem",
				borderRadius: "100%"
			},
			text: {
				...DreamStyleguide.instance().visuallyHidden
			},
			icon: {
				...BASE_ICON
			}
		}, _this.flat = {
			element: {
				...BASE_ELEMENT,
				background: DreamColors.instance().primary,
				color: DreamColors.instance().white,
				padding: "1.25rem 3.5rem"
			},
			text: {
				...BASE_TEXT
			},
			icon: {
				...BASE_ICON
			}
		}, _this.icon = {
			element: {
				...BASE_ELEMENT,
				background: "transparent",
				color: DreamColors.instance().white,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				height: "4rem",
				width: "4rem",
				borderRadius: "100%"
			},
			text: {
				...DreamStyleguide.instance().visuallyHidden
			},
			icon: {
				...BASE_ICON
			}
		}, _this.miniFab = {
			element: {
				...BASE_ELEMENT,
				background: DreamColors.instance().primary,
				color: DreamColors.instance().white,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				boxShadow: `0 2px 4px ${DreamColors.instance().black}`,
				height: "4rem",
				width: "4rem",
				borderRadius: "100%"
			},
			text: {
				...DreamStyleguide.instance().visuallyHidden
			},
			icon: {
				...BASE_ICON
			}
		}, _this.pill = {
			element: {
				...BASE_ELEMENT,
				background: DreamColors.instance().primary,
				color: DreamColors.instance().white,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				borderRadius: "3rem",
				padding: "0.7rem 2.2rem"
			},
			text: {
				...BASE_TEXT,
				fontSize: "1.7rem"
			},
			icon: {
				...BASE_ICON
			}
		}, _this.raised = {
			element: {
				...BASE_ELEMENT,
				background: DreamColors.instance().primary,
				color: DreamColors.instance().white,
				padding: "1.25rem 3.5rem",
				boxShadow: "0 2px 4px"
			},
			text: {
				...BASE_TEXT
			},
			icon: {
				...BASE_ICON,
				position: "absolute",
				right: "1rem",
				top: "50%",
				transform: "translateY(-50%)"
			}
		}, _this.roundedStroked = {
			element: {
				...BASE_ELEMENT,
				background: DreamColors.instance().blue500,
				border: `2px solid ${DreamColors.instance().blue500}`,
				borderRadius: "5rem",
				color: DreamColors.instance().white,
				justifyContent: "center",
				padding: "1rem 2rem"
			},
			text: {
				...BASE_TEXT
			},
			icon: {
				...BASE_ICON
			}
		}, _this.stroked = {
			element: {
				...BASE_ELEMENT,
				background: DreamColors.instance().white,
				border: `1px solid ${DreamColors.instance().gray300}`,
				color: DreamColors.instance().blue600,
				justifyContent: "center",
				padding: "1.2rem 1.8rem"
			},
			text: {
				...BASE_TEXT
			},
			icon: {
				...BASE_ICON
			}
		}, _this.flag("isReady", !0)
	}(), _this.ready = function() {
		return _this.wait("isReady")
	}
}), "static"), Namespace("DreamUI"), DreamUI.Class((function ButtonView({
	icon: icon,
	styles: styles,
	text: text,
	preset: preset,
	type: type,
	useIconViewBox: useIconViewBox
}) {
	Inherit(this, DreamUI.DreamElement, "button");
	const _this = this,
		$this = _this.element;

	function initIcon(_icon, _styles, _useIconViewBox) {
		const iconStyles = _styles.icon || _styles;
		_this.icon = _this.initClass(Sprite, _icon, iconStyles, _icon, !0, _useIconViewBox), _this.icon.element.goob(_this.combineStyles([DreamUI.ButtonStyles[preset].icon, _styles.icon]))
	}!async function() {
		await DreamUI.ButtonStyles.ready(), $this.attr && (! function initElement() {
			$this.attr("aria-label", text), $this.goob(_this.combineStyles([DreamUI.ButtonStyles[preset].element, styles.element])), type && $this.attr("type", type);
			_this.parent.disabled && $this.attr("disabled", "disabled")
		}(), text && function initText() {
			_this.text = $this.create(`${_this.constructorName}__text`), _this.text.goob(_this.combineStyles([DreamUI.ButtonStyles[preset].text, styles.text])), _this.text.text(text)
		}(), icon && initIcon(icon, styles, useIconViewBox), function addA11y() {
			DreamUI.AccessibilityService.instance().enableTabNavigation($this, _this.parent.handleClick, _this.parent.handleKeyboardFocus)
		}(), function addHandlers() {
			$this.interact(_this.parent.handleHover, _this.parent.handleClick), _this.parent.disabled && $this.disableInteract()
		}(), _this.flag("isReady", !0))
	}(), _this.setStyles = async replacedStyles => {
		await _this.wait("isReady"), replacedStyles && (_this.element && replacedStyles.element && _this.element.css(replacedStyles.element), _this.text && replacedStyles.text && _this.text.css(replacedStyles.text), _this.icon && replacedStyles.icon && _this.icon.element.css(replacedStyles.icon))
	}, _this.initIcon = initIcon, _this.ready = _ => _this.wait("isReady")
})), Namespace("DreamUI"), DreamUI.Class((function CSSStylesLoader() {
	Inherit(this, Component);
	const _this = this;
	_this.load = function load(hydraObject) {
		hydraObject.goob(_this.styles)
	}
})), Namespace("DreamUI"), Namespace("DreamUI"), DreamUI.Class((function DreamElement(type) {
	Inherit(this, Element, type);
	const _this = this;
	_this.element;

	function _isArrayLike(possibleArray) {
		return !! function _isArray(val) {
			return null != val && val.length >= 0 && "[object Array]" === Object.prototype.toString.call(val)
		}(possibleArray) || !!possibleArray && ("object" == typeof possibleArray && (0 === possibleArray.length || possibleArray.length > 0 && (possibleArray.hasOwnProperty(0) && x.hasOwnProperty(possibleArray.length - 1))))
	}!async function() {
		_this.constructorName = Utils.getConstructorName(_this), _this.styleguide = DreamStyleguide.instance(), _this.colors = DreamColors.instance(), _this.binds = []
	}(), this.combineStyles = function(objArray) {
		let list;
		return list = function flatten(list) {
				var value, jlen, j, result = [],
					idx = 0,
					ilen = list.length;
				const flatt = list => {
					for (; idx < ilen;) {
						if (_isArrayLike(list[idx]))
							for (value = flatt(list[idx]), j = 0, jlen = value.length; j < jlen;) result[result.length] = value[j], j += 1;
						else result[result.length] = list[idx];
						idx += 1
					}
					return result
				};
				return flatt(list)
			}(objArray),
			function _mergeAll(target) {
				if (null == target) throw new TypeError("Cannot convert undefined or null to object");
				for (var output = Object(), idx = 0, length = target.length; idx < length;) {
					var source = target[idx];
					if (null != source)
						for (var nextKey in source) output[nextKey] = source[nextKey];
					idx += 1
				}
				return output
			}(list)
	}, this.parseConfig = function(config) {
		for (let key in config) _this[key] = config[key]
	}, this.getPrefix = function(className) {
		return `${Utils.getConstructorName(this)}__${className}`
	}, this.hideLoader = () => {
		DreamUI.Modal.instance().close()
	}, this.showLoader = (view, config) => {
		DreamUI.Modal.instance().open(view, {
			closeOnClickOutside: !1,
			options: config
		})
	}, this.setStyles = async (styleOverwrite, pairLookupArr = []) => {
		if (await _this.wait("isReady"), !styleOverwrite) return;
		_this.styles = styleOverwrite;
		[...Object.keys(styleOverwrite).map((v => ({
			domKey: v,
			styleKey: v
		}))), ...pairLookupArr].forEach((k => {
			let domObj = k.domKey.split(".").reduce(((a, c) => a?.[c]), _this),
				newStyle = k.styleKey.split(".").reduce(((a, c) => a?.[c]), styleOverwrite);
			domObj?.css && newStyle && domObj.css(newStyle)
		}))
	}, _this.ready = _ => _this.wait("isReady"), _this.setReady = (val = !0) => _this.flag("isReady", val), this.onDestroy = () => {
		_this.binds.forEach((bind => {
			bind.destroy()
		}))
	}
})), Namespace("DreamUI"), DreamUI.Class((function ElementController({
	withState: withState = !1,
	controllerStyles: controllerStyles
} = {}) {
	Inherit(this, Element);
	const _this = this;
	_this.state = null, withState && (_this.state = AppState.createLocal()), controllerStyles && _this.element.goob({
		...controllerStyles
	}), _this.initView = function({
		component: component,
		config: config
	}) {
		return _this.view = _this.initClass(component, config), _this.view
	}, _this.ready = _ => _this.wait("isReady"), _this.setReady = (val = !0) => _this.flag("isReady", val), _this.setStyles = async (...args) => (await _this.wait("view"), await (_this.view?.ready?.()), _this.view?.setStyles?.(...args)), _this.get("isFormControl", (_ => _this.view.isFormControl))
})), Namespace("DreamUI"), DreamUI.Class((function Form({
	viewComponent: viewComponent = {},
	viewOptions: viewOptions
}) {
	Inherit(this, DreamUI.ElementController);
	const _this = this;
	_this.fields = [], async function() {
		_this.delayedCall((_ => {
				_this.flag("viewLoaded") || console.error("DreamUI.Form: the viewComponent needs to set the isReady flag for the form fields to be registered!")
			}), 1e3), await _this.initView({
				component: viewComponent,
				config: {
					formContext: _this,
					...viewOptions
				}
			}).ready(), _this.flag("viewLoaded", !0),
			function __initFields() {
				if (!_this.view) return;
				for (item in _this.view) _this.view[item]?.isFormControl && _this.add(_this.view[item])
			}(), _this.flag("isReady", !0)
	}(), _this.add = field => {
		_this.fields.push(field)
	}, _this.remove = field => {
		_this.fields.remove(field)
	}, _this.validate = async _ => -1 === (await Promise.all(_this.fields.filter((field => field.validate)).map((field => field.validate())))).indexOf(!1), _this.submit = async _ => {
		let values = {};
		return await _this.validate() ? (_this.fields.filter((field => field.id && field.value)).forEach((field => {
			values[field.id] = field.value
		})), _this.events.fire(DreamUI.Form.VALID, {
			values: values
		}), _this.events.fire(DreamUI.Form.SUBMIT, {
			values: values
		})) : _this.events.fire(DreamUI.Form.INVALID, {
			values: values
		}), values
	}
}), (_ => {
	DreamUI.Form.SUBMIT = "DreamUI.Form.SUBMIT", DreamUI.Form.INVALID = "DreamUI.Form.INVALID", DreamUI.Form.VALID = "DreamUI.Form.VALID"
})), Namespace("DreamUI"), DreamUI.Class((function FormControl() {
	Inherit(this, DreamUI.DreamElement);
	const _this = this;
	_this.element;
	_this.isFormControl = !0, DreamUI.AccessibilityService.instance(), _this.handleFocus = async function() {
		await _this.wait(1), DreamUI.AccessibilityService.instance().isKeyboardNav ? _this.keyboardFocusStyles() : _this.mouseFocusStyles()
	}, _this.keyboardFocusStyles = function() {}, _this.mouseFocusStyles = function() {}, _this.setReady = _ => _this.flag("isReady", !0), _this.ready = _ => _this.flag("isReady")
})), Namespace("DreamUI"), DreamUI.Class((function Select({
	viewComponent: viewComponent = DreamUI.SelectView,
	styles: styles = {},
	id: id,
	label: label = "",
	options: options = [],
	required: required = !1,
	icon: icon = "core-chevron-bottom",
	value: value = null,
	errorMessage: errorMessage = "This field is required",
	placeholder: placeholder = "Select",
	preset: preset = "default",
	emitsEventWhenValuePopulatedOnInit: emitsEventWhenValuePopulatedOnInit = !1,
	enableHover: enableHover = !1
}) {
	Inherit(this, DreamUI.ElementController);
	const _this = this;
	!async function() {
		if (!id) return console.error(`${_this.constructorName} requires an ID.`);
		_this.id = id, _this.value = value, _this.preset = preset, await _this.initView({
				component: viewComponent,
				config: {
					styles: styles,
					id: id,
					label: label,
					options: options,
					required: required,
					icon: icon,
					preset: preset,
					enableHover: enableHover
				}
			}).ready(),
			function handlePresetSpecific() {
				switch (preset) {
					case "labelAsPlaceholder":
						_this.view.prependLabelToInputWrapper?.(), _this.view.setBlankOptionText?.("");
						break;
					case "default":
					case "rounded":
						_this.view.setBlankOptionText?.(placeholder), _this.view.input.div.classList.remove("is-selected"), _this.view.input.div.classList.add("is-unselected");
						break;
					default:
						_this.view.setBlankOptionText?.(placeholder)
				}
			}(), null !== value && function handlePopulatedValueOnInit() {
				_this.view.input.div.value = value, _this.handleValueChange({
					val: _this.value,
					emitEvent: emitsEventWhenValuePopulatedOnInit
				})
			}(), _this.setReady()
	}(), _this.handleFocus = function() {
		_this.view.handleFocus()
	}, _this.handleBlur = function() {
		_this.value && 0 !== _this.value.length ? (_this.view.label.div.classList.remove("no-value"), _this.view.label.div.classList.add("has-value")) : (_this.view.label.div.classList.add("no-value"), _this.view.label.div.classList.remove("has-value")), _this.view.input.div.classList.remove("is-focused")
	}, _this.handleValueChange = function({
		val: val,
		emitEvent: emitEvent = !0
	}) {
		_this.value = val, "default" !== preset && "rounded" !== preset || (_this.view.input.div.classList.remove("is-unselected"), _this.view.input.div.classList.add("is-selected")), null !== _this.value && _this.handleLabelWhenValuePopulated(), emitEvent && _this.events.fire(DreamUI.Select.CHANGE, {
			value: _this.value
		})
	}, _this.handleLabelWhenValuePopulated = function() {
		_this.view.label.div.classList.remove("no-value"), _this.view.label.div.classList.add("has-value")
	}, _this.validate = () => {
		let valid;
		return valid = !!(required && _this.value && _this.value.length > 0) || !(required && (!_this.value || _this.value && _this.value.length > 0)), valid ? _this.view.error && _this.view.error.text("") : (_this.view.element.classList.add("has-error"), _this.view.error && _this.view.error.text(errorMessage)), valid
	}, _this.updateOptions = opts => {
		_this.view.updateOptions(opts)
	}, _this.ready = () => _this.wait("isReady")
}), (() => {
	DreamUI.Select.CHANGE = "DreamUI.Select.CHANGE", DreamUI.Select.VALUE_POPULATED_ON_INIT = "DreamUI.Select.VALUE_POPULATED_ON_INIT"
})), Namespace("DreamUI"), DreamUI.Class((function SelectStyles({
	config: config = {}
}) {
	Inherit(this, DreamUI.CSSStylesLoader);
	this.styles = {
		position: "relative",
		display: "flex",
		alignItems: "center",
		...config.styles.element,
		".label": {
			position: "relative",
			color: DreamColors.instance().black,
			font: `1.4rem ${DreamStyleguide.instance().fonts.primary}`,
			".required": {
				color: DreamColors.instance().red
			},
			"&.has-value": {
				top: "5%",
				opacity: 1
			},
			"&.no-value": {
				top: "50%",
				background: "transparent"
			},
			...config.styles[".label"]
		},
		svg: {
			height: "2rem",
			width: "2rem",
			position: "absolute !important",
			right: ".5rem",
			pointerEvents: "none",
			...config.styles.svg
		},
		".inputWrapper": {
			display: "flex",
			alignItems: "center",
			position: "relative",
			background: "white",
			marginLeft: "15px",
			"&:hover": {
				".inputHover": {
					opacity: 1
				}
			},
			...config.styles[".inputWrapper"]
		},
		".inputHover": {
			position: "absolute !important",
			top: "0",
			left: "0",
			right: "0",
			height: "100%",
			background: "transparent",
			padding: 0,
			boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
			opacity: 0,
			...config.styles[".inputHover"]
		},
		".input": {
			padding: "1rem 3rem 1rem 1rem",
			"-webkit-appearance": "none",
			"-moz-appearance": "none",
			appearance: "none",
			position: "relative",
			width: "100%",
			border: "none",
			outline: "none",
			font: `1.4rem ${DreamStyleguide.instance().fonts.primary}`,
			color: DreamColors.instance().hexToRgba(DreamColors.instance().black, .5),
			"&.is-selected": {
				color: config.selectedColor || DreamColors.instance().black
			},
			"&.is-unselected": {
				color: config.unselectedColor || DreamColors.instance().hexToRgba(DreamColors.instance().black, .5)
			},
			"&.is-focused": {
				...DreamStyleguide.instance().withAccessibility
			},
			"&.is-unfocused": {
				...DreamStyleguide.instance().withoutAccessibility
			},
			".option": {
				position: "relative",
				padding: "1.5rem",
				font: `1.4rem ${DreamStyleguide.instance().fonts.primary}`
			},
			...config.styles[".input"]
		},
		".error": {
			color: DreamColors.instance().red,
			font: `1rem/2rem ${DreamStyleguide.instance().fonts.primary}`,
			height: "2rem",
			padding: "0.5rem 0",
			opacity: 0,
			...config.styles[".error"]
		},
		"&.has-error": {
			".error": {
				opacity: 1
			}
		},
		"&.labelAsPlaceholder": {
			".label": {
				left: "0rem",
				color: DreamColors.instance().primary,
				position: "absolute !important",
				top: "50%",
				transform: "translateY(-50%)",
				transition: "0.2s ease all",
				padding: ".25rem",
				paddingLeft: "0rem",
				pointerEvents: "none",
				font: `1.4rem ${DreamStyleguide.instance().fonts.primary}`,
				zIndex: 1,
				"&.has-value": {
					display: "none"
				}
			}
		},
		"&.rounded": {
			".inputWrapper": {
				borderRadius: "6.4rem",
				overflow: "hidden",
				border: "1px solid black"
			},
			".input": {
				"&.is-selected": {
					color: config.selectedColor || DreamColors.instance().black
				},
				"&.is-unselected": {
					color: config.unselectedColor || DreamColors.instance().hexToRgba(DreamColors.instance().black, .5)
				}
			}
		}
	}
})), Namespace("DreamUI"), DreamUI.Class((function SelectView({
	styles: styles = {},
	id: id,
	label: label = "",
	options: options = [],
	required: required = !1,
	icon: icon,
	preset: preset = "default",
	enableHover: enableHover = !1
}) {
	Inherit(this, DreamUI.FormControl);
	const _this = this,
		$this = _this.element;

	function createOptions() {
		_this.blankOption || (_this.blankOption = _this.input.create("option", "option"), _this.blankOption.attr("disabled", ""), _this.blankOption.attr("value", !1), _this.blankOption.attr("hidden", ""), _this.blankOption.attr("selected", !0)), _this.options = options.map(createOption), _this.options && 0 !== _this.options.length || (_this.disabled = !0, _this.label.attr("disabled", "true"), _this.label.text("No options are available."))
	}

	function createOption(option) {
		let $option = _this.input.create("option", "option");
		return $option.attr("value", option.value), $option.text(option.text), $option
	}! function() {
		if (!id) return console.error(`${_this.constructorName} requires an ID.`);
		_this.preset = preset,
			function initElement() {
				$this.div.classList.add(preset)
			}(),
			function initLabel() {
				let stripped = label.replace(" ", "");
				_this.label = $this.create("label", "label"), _this.label.text(label), _this.label.attr("for", stripped), _this.label.attr("id", `${stripped}_label`), required && label && (_this.label.inner = _this.label.create("required", "span"), _this.label.inner.text(" *"))
			}(),
			function initInput() {
				_this.inputWrapper = $this.create("inputWrapper").goob({
					position: "relative"
				});
				let stripped = label.replace(" ", "");
				_this.inputHover = _this.inputWrapper.create("inputHover"), _this.input = _this.inputWrapper.create("input", "select"), _this.input.attr("name", stripped), _this.input.attr("aria-labeledby", `${stripped}_label`), _this.input.attr("role", "button"), _this.input.attr("tabindex", "0")
			}(),
			function initStyles() {
				_this.initClass(DreamUI.SelectStyles, {
					config: {
						styles: styles
					}
				}).load($this)
			}(), icon && function setIcon() {
				_this.icon = _this.initClass(Sprite, icon, null, null, [_this.inputWrapper])
			}(), createOptions(), required && function initError() {
				_this.error = $this.create("error")
			}(),
			function addHandlers() {
				_this.input.bind("focus", (_ => _this.parent.handleFocus())), _this.input.bind("blur", (_ => _this.parent.handleBlur())), _this.input.bind("change", (_ => _this.parent.handleValueChange({
					val: _this.input.div.value
				}))), enableHover && (_this.input.bind("mouseenter", (e => _this.parent.handleHover(e))), _this.input.bind("mouseleave", (e => _this.parent.handleHover(e))))
			}(), _this.setReady()
	}(), _this.prependLabelToInputWrapper = function() {
		_this.inputWrapper.div.prepend(_this.label.div)
	}, _this.appendFocusBarToInputWrapper = function() {
		_this.focusBar = _this.inputWrapper.create("focus", "span")
	}, _this.setBlankOptionText = function(_text) {
		_this.blankOption.text(_text)
	}, _this.keyboardFocusStyles = () => {
		_this.input.div.classList.remove("is-unfocused"), _this.input.div.classList.add("is-focused")
	}, _this.mouseFocusStyles = () => {
		_this.input.div.classList.remove("is-focused"), _this.input.div.classList.add("is-unfocused")
	}, _this.updateOptions = newOptions => {
		options = newOptions, _this.options.forEach((option => {
			option.destroy()
		})), createOptions()
	}, _this.ready = () => _this.wait("isReady")
})), Namespace("DreamUI"), DreamUI.Class((function Tab({
	persist: persist = "some",
	tabs: tabs = [],
	styles: styles = {},
	animation: animation = DreamUI.TabAnimations,
	preset: preset = "material"
}) {
	Inherit(this, DreamUI.DreamElement, "div");
	const _this = this,
		$this = _this.element;

	function initTabView(index, tab = _this.contentTabs[index]) {
		let data = _this.tabs[index],
			view = _this.initClass(data.get("view"), {
				...data.get("viewOptions"),
				tab: _this
			}, [tab]);
		return view.tabIndex = index, view
	}

	function shouldTabPersist(index) {
		return "some" === persist ? !1 !== _this.tabs[index].persist : persist
	}
	async function switchTab(selectedIndex, userInitiated) {
		if (selectedIndex === _this.activeIndex) return;
		_this.notifier.manageNotifications(selectedIndex, _this.activeIndex), _this.tab = _this.tabs[selectedIndex], _this.headerTab = _this.headerTabs[selectedIndex], _this.contentTab = _this.contentTabs[selectedIndex], _this.headerTab.attr("aria-selected", !0), _this.headerTab.css(_this.combineStyles([DreamUI.TabStyles[preset].headerTabActive, styles.headerTabActive])), _this.headerTabs[_this.activeIndex].attr("aria-selected", !1), _this.headerTabs[_this.activeIndex].css(_this.combineStyles([DreamUI.TabStyles[preset].headerTabInactive, styles.headerTabInactive])), _this.clearBadge(selectedIndex);
		let prevTabClass = _this.contentTabClass,
			prevIndex = _this.activeIndex;
		_this.activeIndex = selectedIndex, _this.events.fire(DreamUI.Tab.CHANGE, {
			prevIndex: prevIndex,
			activeIndex: selectedIndex,
			userInitiated: userInitiated
		});
		let promise = animation.animateChange(_this, selectedIndex);
		if (shouldTabPersist(selectedIndex)) _this.contentTabClass = _this.contentTab.view;
		else {
			let contentTabClass = initTabView(selectedIndex);
			_this.contentTabClass = contentTabClass
		}
		prevTabClass && !shouldTabPersist(prevIndex) && (await promise, prevTabClass.destroy()),
			function addPanelAccessibility(element, label) {
				element.attr("id", `${label}`), element.attr("role", "tabpanel"), element.attr("aria-labeledby", `tab-${label}`)
			}(_this.contentTabClass.element, _this.tab.get("label")), animateBar(), Track.event(Router.getState()[0], "tab", _this.tab.get("label"))
	}

	function animateBar() {
		$this && $this.div && animation.animateBar(_this)
	}

	function handleTabClick(event) {
		event instanceof HydraObject ? switchTab(event.index, !0) : switchTab(event.object.index, !0)
	}

	function handleTabHover(event) {
		animation.onHover(event)
	}
	_this.tabs = new StateArray(tabs), _this.activeIndex = 0, _this.headerTabs = [], _this.contentTabs = [], _this.bar = null, _this.headerTabsBadges = [], _this.notifer = null, _this.handleNotification = function handleNotification(index) {
		_this.addBadge(index)
	}, async function() {
		await DreamUI.TabStyles.ready(), _this.notifier = _this.initClass(DreamUI.TabNotifier),
			function initElement() {
				$this.goob(_this.combineStyles([DreamUI.TabStyles[preset].element, styles.element])), _this.header = $this.create(`${_this.constructorName}__header`, "ul"), _this.header.goob(_this.combineStyles([DreamUI.TabStyles[preset].header, styles.header])), _this.headerWrapper = _this.header.create(`${_this.constructorName}__header__wrapper`), _this.headerWrapper.goob(_this.combineStyles([DreamUI.TabStyles[preset].headerWrapper, styles.headerWrapper])), _this.content = $this.create(`${_this.constructorName}__content`), _this.content.goob(_this.combineStyles([DreamUI.TabStyles[preset].content, styles.content]))
			}(),
			function initBar() {
				_this.bar = _this.header.create(`${_this.constructorName}__bar`), _this.bar.goob(_this.combineStyles([DreamUI.TabStyles[preset].bar, styles.bar]))
			}(),
			function initTabs() {
				_this.headerTabs = _this.tabs.map(((data, index) => {
					let label = data.get("label"),
						isActiveTab = index === _this.activeIndex,
						tabElement = _this.headerWrapper.create(`${_this.constructorName}__tabLabel`);
					return tabElement.data = data, tabElement.index = index, tabElement.attr("aria-controls", label), tabElement.attr("aria-selected", isActiveTab), tabElement.attr("id", `tab-${label}`), tabElement.attr("role", "tab"), tabElement.attr("data-index", index), tabElement.text(label), tabElement.index = index, isActiveTab ? tabElement.goob(_this.combineStyles([DreamUI.TabStyles[preset].headerTabActive, styles.headerTabActive])) : tabElement.goob(_this.combineStyles([DreamUI.TabStyles[preset].headerTabInactive, styles.headerTabInactive])), index !== _this.tabs.length - 1 && tabElement.goob(_this.combineStyles([DreamUI.TabStyles[preset].headerTabSpacing, styles.headerTabSpacing])), tabElement.interact(handleTabHover, handleTabClick), DreamUI.AccessibilityService.instance().enableTabNavigation(tabElement, (_ => handleTabClick(tabElement)), handleTabHover), tabElement.data.notifierSettings && _this.notifier.bindToNotification(tabElement), tabElement
				})), _this.content.css({
					width: 100 * _this.tabs.length + "%"
				}), _this.contentTabs = _this.tabs.map(((data, index) => {
					let tab = _this.content.create(`${_this.constructorName}__tab`);
					return tab.goob(_this.combineStyles([DreamUI.TabStyles[preset].contentTab, styles.contentTab])), tab.data = data, shouldTabPersist(index) ? tab.view = initTabView(index, tab) : _this.activeIndex === index && (_this.contentTabClass = initTabView(index, tab)), _this.activeIndex !== index && tab.invisible(), tab
				}))
			}(), animateBar(), _this.flag("isReady", !0)
	}(), _this.addBadge = (index, count = "", badgeStyles = {}) => {
		_this.clearBadge(index), _this.headerTabsBadges[index] = _this.initClass(DreamUI.Badge, {
			count: count,
			size: "small",
			styles: _this.combineStyles([DreamUI.TabStyles[preset].badge, styles.badge]),
			parent: _this.headerTabs[index]
		})
	}, _this.clearBadge = tabIndex => {
		_this.headerTabsBadges[tabIndex] && (_this.headerTabsBadges[tabIndex].clearBadge(), _this.headerTabsBadges[tabIndex] = null)
	}, _this.change = index => switchTab(index), _this.ready = _ => _this.wait("isReady")
}), (() => {
	DreamUI.Tab.CHANGE = "DreamUI.Tab.CHANGE"
})), Namespace("DreamUI"), DreamUI.Class((function TabAnimations() {
	Inherit(this, Component);
	const _this = this,
		EASE = "easeInOutCubic";
	this.onHover = function({
		action: action,
		object: object
	}, tab) {
		switch (action) {
			case "over":
				object?.tween({
					opacity: .5
				}, 600, EASE);
				break;
			case "out":
				object?.tween({
					opacity: 1
				}, 600, EASE)
		}
	}, this.onClick = function() {}, this.animateIn = function(view, transitionDirection) {
		return "ltr" === transitionDirection ? (view.css({
			opacity: 0
		}).transform({
			x: "-100%"
		}), view.tween({
			opacity: 1,
			x: 0
		}, 600, EASE).promise()) : (view.css({
			opacity: 0
		}).transform({
			x: "100%"
		}), view.tween({
			opacity: 1,
			x: 0
		}, 600, EASE).promise())
	}, this.animateOut = function(view, transitionDirection) {
		return "ltr" === transitionDirection ? view.tween({
			opacity: 0,
			x: "100%"
		}, 600, EASE).promise() : view.tween({
			opacity: 1,
			x: "-100%"
		}, 600, EASE).promise()
	}, this.animateBar = async function(tab) {
		await this.wait(200);
		let scroll = tab.header.div.scrollLeft || 0,
			padding = parseInt(getComputedStyle(tab.header.div).paddingLeft),
			{
				left: left,
				width: width
			} = tab.headerTabs[tab.activeIndex].div.getBoundingClientRect();
		const fullWidth = tab.element.div.getBoundingClientRect().left;
		left += scroll, tab.bar.tween({
			width: width,
			x: left - fullWidth - padding,
			y: "0"
		}, 600, EASE)
	}, this.animateChange = function({
		content: content,
		contentTabs: contentTabs,
		header: header,
		headerWrapper: headerWrapper,
		headerTabs: headerTabs,
		headerTab: headerTab
	}, index) {
		let headerStyles = getComputedStyle(header.div),
			headerPadding = parseInt(headerStyles.paddingLeft),
			xLimit = headerWrapper.div.clientWidth - header.div.clientWidth + 2 * headerPadding,
			x = Math.clamp(headerTab.div.offsetLeft, xLimit, 0);
		return headerWrapper.tween({
			x: -x
		}, 600, EASE), content.tween({
			x: `-${index/headerTabs.length*100}%`
		}, 600, EASE), contentTabs.forEach(((tab, tabIndex) => {
			index === tabIndex ? (tab.css({
				height: "100%"
			}), tab.visible(), tab.tween({
				opacity: 1
			}, 300, EASE)) : tab.tween({
				opacity: 0
			}, 300, EASE, (_ => {
				tab.invisible(), tab.css({
					height: 0
				})
			}))
		})), _this.wait(600)
	}
}), "static"), Namespace("DreamUI"), DreamUI.Class((function TabNotifier() {
	Inherit(this, Component);
	let _notificationCache = {};
	const _this = this;
	async function createNotificationBinding(tabObj) {
		tabObj.notificationBinding?.destroy(), tabObj.notificationBinding = null;
		const binding = (await tabObj.notifierInstance.notifierState()).bind("all", AppStateOperators.skip(1), AppStateOperators.filter((data => null !== data)), (() => {
			_this.parent.handleNotification(tabObj.index), tabObj.notifierInstance.deactivate()
		}));
		return _notificationCache[tabObj.label] = binding, binding
	}
	_this.bindToNotification = async function(tabObj) {
		const {
			NotifierClass: NotifierClass,
			roomId: roomId
		} = tabObj.data.notifierSettings();
		if (void 0 === NotifierClass) throw new Error("DreamUITab: You are trying to add a notifier class that doesn't exist, make sure you import model-session-notifier");
		tabObj.notifierInstance || (tabObj.notifierInstance = _this.initClass(NotifierClass, roomId)), await tabObj.notifierInstance.ready(), tabObj.index !== _this.parent.activeIndex && (await tabObj.notifierInstance.activate(), tabObj.notificationBinding = await createNotificationBinding(tabObj))
	}, _this.manageNotifications = async function(selectedIndex, activeIndex) {
		const tabEntering = _this.parent.headerTabs[selectedIndex],
			tabExiting = _this.parent.headerTabs[activeIndex];
		tabExiting.notifierInstance && (tabExiting.notifierInstance?.activate(), tabExiting.notificationBinding = await createNotificationBinding(tabExiting)), tabEntering.notifierInstance && tabEntering.notifierInstance?.deactivate()
	}, _this.onDestroy = function() {
		Object.values(_notificationCache).forEach((val => {
			val.destroy?.(), val = null
		}))
	}
})), Namespace("DreamUI"), DreamUI.Class((function TabStyles() {
	Inherit(this, Component);
	const _this = this;
	!async function() {
		await DreamColors.instance().ready(), await DreamStyleguide.instance().ready();
		const BASE_ELEMENT = {
				display: "flex",
				flexDirection: "column",
				height: "100%",
				width: "100%",
				overflow: "hidden"
			},
			BASE_HEADER = {
				alignItems: "center",
				display: "flex",
				padding: "0 3rem",
				whiteSpace: "nowrap",
				width: "100%"
			},
			BASE_HEADER_CONTENT = {
				alignItems: "center",
				display: "flex",
				paddingTop: "ios" === Device.system.os ? "0.3rem" : "0"
			},
			BASE_HEADER_TAB = {
				...DreamStyleguide.instance().label3,
				alignItems: "center",
				cursor: "pointer",
				display: "flex",
				fontWeight: "bold",
				justifyContent: "center",
				outline: "none",
				padding: "2rem 0",
				position: "relative"
			},
			BASE_BORDERED_TAB = {
				...DreamStyleguide.instance().buttonMedium,
				alignItems: "center",
				border: `0.2rem solid ${DreamColors.instance().blue500}`,
				borderRadius: "5rem",
				cursor: "pointer",
				display: "flex",
				fontWeight: "bold",
				justifyContent: "center",
				outline: "none",
				padding: "1.1rem 2rem",
				position: "relative"
			},
			BASE_CONTENT = {
				display: "flex",
				height: "100%",
				overflow: "hidden",
				width: "100%"
			},
			BASE_CONTENT_TAB = {
				height: "100%",
				overflow: "hidden",
				position: "relative",
				width: "100%"
			},
			BASE_BADGE = {
				height: "0.7rem",
				right: "1.3rem",
				top: "1.3rem",
				width: "0.7rem"
			};
		_this.none = {}, _this.material = {
			element: {
				...BASE_ELEMENT
			},
			header: {
				...BASE_HEADER,
				borderBottom: `1px solid ${DreamColors.instance().gray300}`
			},
			headerWrapper: {
				...BASE_HEADER_CONTENT
			},
			headerTabActive: {
				...BASE_HEADER_TAB,
				color: DreamColors.instance().black
			},
			headerTabInactive: {
				...BASE_HEADER_TAB,
				color: DreamColors.instance().gray500
			},
			headerTabSpacing: {
				marginRight: "2.5rem"
			},
			content: {
				...BASE_CONTENT
			},
			contentTab: {
				...BASE_CONTENT_TAB
			},
			bar: {
				background: DreamColors.instance().blue500,
				border: "none",
				bottom: 0,
				height: "2px",
				position: "absolute !important",
				width: "auto",
				zIndex: 1
			},
			badge: {
				element: {
					...BASE_BADGE
				}
			}
		}, _this.rounded = {
			element: {
				...BASE_ELEMENT
			},
			header: {
				...BASE_HEADER,
				paddingBottom: "2rem"
			},
			headerWrapper: {
				...BASE_HEADER_CONTENT,
				paddingTop: "safari" === Device.system.browser && "2px"
			},
			headerTabActive: {
				...BASE_BORDERED_TAB,
				background: DreamColors.instance().blue500,
				color: `${DreamColors.instance().white}`
			},
			headerTabInactive: {
				...BASE_BORDERED_TAB,
				background: "transparent",
				color: DreamColors.instance().blue500
			},
			headerTabSpacing: {
				marginRight: "1.2rem"
			},
			content: {
				...BASE_CONTENT
			},
			contentTab: {
				...BASE_CONTENT_TAB
			},
			bar: {
				display: "none"
			},
			badge: {
				element: {
					...BASE_BADGE
				}
			}
		}, _this.flag("isReady", !0)
	}(), _this.ready = function() {
		return _this.wait("isReady")
	}
}), "static"), Class((function AnonymousModeration() {
	Inherit(this, Model);
	const _this = this,
		_api = Config.API.replace("/dream", "/anon-identity");
	var _blockedArray = [],
		_blockedMap = {},
		_reports = 0;
	const consoleSecurity = require("ConsoleSecurity");
	async function handleBlock(e) {
		if (e.playerId == PlayerModel.data.uid && (Multiplayer.fireGlobalEvent("anon_gcid", {
				playerId: PlayerModel.data.uid,
				gcid: GameCenter.GCID
			}), !_this.flag("debounceSelfReport"))) {
			_this.flag("debounceSelfReport", !0, 3e4);
			let ip = await _this.me();
			await _this.report(ip), _reports = await _this.threatLevel(ip)
		}
	}

	function handleGCID(e) {
		_blockedArray.includes(e.playerId) && (GameCenterMedia.blockUser(e.gcid), _blockedMap[e.playerId] = e.gcid)
	}!async function() {
		if (!Config.MODERATION_ENABLED) return;
		Multiplayer.bindGlobalEvent("anon_block", handleBlock), Multiplayer.bindGlobalEvent("anon_gcid", handleGCID), await defer();
		let ip = await _this.me();
		_reports = await _this.threatLevel(ip)
	}(), this.me = async function me() {
		if (consoleSecurity()) return;
		let res = await post(`${_api}/getIdentity`);
		return res && res.success ? res.data.ip : null
	}, this.threatLevel = async function threatLevel(ip) {
		if (consoleSecurity()) return;
		let res = await post(`${_api}/getReputation`, {
			ip: ip
		}, {
			headers: {
				"Content-Type": "application/json"
			}
		});
		return res && res.success ? res.data.level : null
	}, this.report = async function report(ip) {
		consoleSecurity() || await post(`${_api}/reportUser`, {
			ip: ip
		}, {
			headers: {
				"Content-Type": "application/json"
			}
		})
	}, this.block = async function(id) {
		if (consoleSecurity()) return;
		if (_blockedMap[id]) return GameCenterMedia.blockUser(_blockedMap[id]);
		let array = Storage.get("anon_mod_blocked") || [];
		array.push(id), Storage.set("anon_mod_blocked", array), _blockedArray = array, Multiplayer.fireGlobalEvent("anon_block", {
			playerId: id
		})
	}, this.unblock = async function(id) {
		if (consoleSecurity()) return;
		let array = Storage.get("anon_mod_blocked") || [];
		array.remove(id), Storage.set("anon_mod_blocked", array), _blockedArray = array, GameCenterMedia.unblockUser(_blockedMap[id])
	}, this.isBlocked = function(id) {
		return (Storage.get("anon_mod_blocked") || []).includes(id)
	}, this.isShadowBanned = function() {
		return _reports >= .5
	}
}), "static"), Class((function DreamGeo() {
	Inherit(this, Model);
	var _location;
	!async function() {}(), this.location = function() {
		return function formatLocation(data) {
			return data.location
		}(_location)
	}, this.data = function() {
		return _location
	}
}), "static"), Class((function DreamSimpleAuth() {
	Inherit(this, Model);
	const _this = this;
	let pw;
	!async function() {
		if (await Hydra.ready(), await Config.ready(), await PlatformDB.ready(), Hydra.LOCAL || Config.PROD || PortalUtil.isPortal || Platform.usingVR()) return;
		if (Storage.get("simpleAuth")) pw = Storage.get("simpleAuth");
		else if (pw = window.prompt("Enter access code", ""), !pw) return window.location = "about:blank";
		let snapshot = await PlatformDB.ref("simple-auth").child(pw.trim()).once("value");
		await snapshot.val() ? (Storage.set("simpleAuth", pw), _this.dataReady = !0) : window.location = "about:blank"
	}()
}), "static"), Class((function UIChatZone(_options) {
	Inherit(this, Element);
	const _this = this,
		$this = _this.element;
	let $controls, $microphone, $camera, $settings, $settingsModal, _startTime;

	function handleSettingsOpen() {
		$settingsModal.animateIn()
	}! function initElement() {
		$this.size("100%").goob({
			opacity: 0
		}).invisible(), $controls = $this.create("controls"), $microphone = _this.initClass(UIChatZoneMicrophone, [$controls]), _options.audioOnly || ($camera = _this.initClass(UIChatZoneCamera, [$controls])), $settings = _this.initClass(UIChatZoneSettings, {
			onClick: handleSettingsOpen
		}, [$controls]), $settingsModal = _this.initClass(UIChatZoneSettingsModal)
	}(),
	function initStyles() {
		$this.goob("\n            & {\n                align-items: center;\n                display: flex;\n            }\n\n            .UIChatZoneSettings {\n                margin-left: 2.5rem;\n            }\n\n            .controls {\n                align-items: center;\n                bottom: 2.5rem;\n                display: flex;\n                left: 50%;\n                position: absolute;\n                transform: translateX(-50%);\n\n                > * {\n                    position: relative !important;\n                }\n            }\n        ")
	}(), this.connect = function() {
		Track.event("chatzone", "start"), _startTime = Date.now()
	}, this.disconnect = function() {
		let timeElapsed = function handleElapsedTime(startTime) {
			const difference = (Date.now() - startTime) / 1e3,
				seconds = Math.round(difference);
			return parseFloat(seconds / 60).toFixed(2)
		}(_startTime);
		Track.event("chatzone", "end", null, timeElapsed)
	}
})), Class((function UIChatZoneAudio() {
	Inherit(this, Element);
	const _this = this,
		$this = _this.element;
	let $input, $inputTitle, $inputBox, $inputField, $inputIcon, $output, $outputTitle, $outputBox, $outputField, $outputIcon, _inputs, _outputs;

	function handleInputChange(event) {
		let value = $inputField.div.value,
			option = _inputs.find((input => input.deviceId === value));
		GameCenterMedia.userStream.setAudioSource(option)
	}

	function handleOutputChange(event) {
		let value = $outputField.div.value,
			option = _outputs.find((output => output.deviceId === value));
		GameCenterMedia.userStream.setAudioOutputSource(option)
	}!async function() {
		await GameCenterMedia.getUserStream(), await async function initInput() {
			_inputs = await GameCenterMedia.userStream.getAudioInputs(), $input = $this.create("input"), $inputTitle = $input.create("label"), _this.bindState(UICopy.state, "copy", (copy => $inputTitle.text(copy.chatzone_settings_audio_microphone))), $inputBox = $input.create("field"), $inputField = $inputBox.create("field__select", "select"), $inputField.bind("change", handleInputChange), $inputIcon = _this.initClass(Sprite, "core-chevron-bottom", [$inputBox]), _inputs.forEach((input => {
				let $option = $inputField.create("option", "option");
				input.selected && $option.attr("selected", "selected"), $option.attr("value", input.deviceId), $option.text(input.label)
			}))
		}(), await async function initOutput() {
				_outputs = await GameCenterMedia.userStream.getAudioOutputs(), $output = $this.create("output"), $outputTitle = $output.create("label"), _this.bindState(UICopy.state, "copy", (copy => $outputTitle.text(copy.chatzone_settings_audio_speakers))), $outputBox = $output.create("field"), $outputField = $outputBox.create("field__select", "select"), $outputField.bind("change", handleOutputChange), $outputIcon = _this.initClass(Sprite, "core-chevron-bottom", [$outputBox]), _outputs.forEach((output => {
					let $option = $outputField.create("option", "option");
					output.selected && $option.attr("selected", "selected"), $option.attr("value", output.deviceId), $option.text(output.label)
				}))
			}(),
			function initStyles() {
				$this.goob("\n            & {\n                color: --var('white');\n                padding-top: 3rem;\n                position: relative !important;\n            }\n\n            * {\n                position: relative !important;\n            }\n\n            .label {\n                display: block;\n                font-size: 1.6rem;\n            }\n\n            .field {\n                position: relative;\n\n                svg {\n                    height: 2rem;\n                    position: absolute !important;\n                    right: 0;\n                    top: 50%;\n                    transform: translateY(-50%);\n                    width: 2rem;\n                }\n            }\n\n            .field__select {\n                appearance: none;\n                background: none;\n                border-color: rgba(255, 255, 255, 0.1);\n                border-style: solid;\n                border-width: 0 0 1px 0;\n                color: inherit;\n                font-family: inherit;\n                font-size: 1.5rem;\n                display: block;\n                line-height: 2;\n                margin-top: 1.5rem;\n                opacity: 0.5;\n                padding: 0;\n                width: 100%;\n            }\n\n            .input {\n                \n            }\n\n            .output {\n                margin-top: 3rem;\n            }\n        ")
			}()
	}(), _this.show = _ => {
		$this.show()
	}, _this.hide = _ => {
		$this.hide()
	}
})), Class((function UIChatZoneButton({
	css: css,
	icon: icon,
	onClick: onClick = (_ => {})
} = {}) {
	Inherit(this, Element);
	const _this = this,
		$this = _this.element;
	var $border, $background, _icon;

	function handleHover({
		action: action
	}) {
		let ease = "easeOutCubic";
		switch (action) {
			case "over":
				$this.tween({
					color: UIColors.black
				}, 300, ease), $border.tween({
					opacity: 0,
					scale: 1.2
				}, 300, ease), $background.css({
					opacity: 0
				}).transform({
					scale: .8
				}), $background.tween({
					opacity: 1,
					scale: 1
				}, 300, ease);
				break;
			case "out":
				$this.tween({
					color: UIColors.white
				}, 300, ease), $border.tween({
					opacity: .3,
					scale: 1
				}, 300, ease), $background.tween({
					opacity: 0,
					scale: .8
				}, 300, ease)
		}
	}

	function handleClick() {
		onClick()
	}! function initElement() {
		$this.multiTween = !0, $border = $this.create("border"), $background = $this.create("background"), _icon = _this.initClass(Sprite, icon)
	}(),
	function initStyle() {
		$this.goob(css || "\n            & {\n                align-items: center;\n                color: --var('white');\n                display: flex;\n                font-size: 0;\n                height: 5rem;\n                justify-content: center;\n                width: 5rem;\n                z-index: 100;\n            }\n\n            .border {\n                border: 2px solid --var('white');\n                border-radius: 100%;\n                bottom: 0;\n                background: --var('black');\n                left: 0;\n                opacity: 0.3;\n                position: absolute;\n                right: 0;\n                top: 0;\n            }\n\n            .background {\n                background: --var('white');\n                border-radius: 100%;\n                bottom: 0;\n                left: 0;\n                opacity: 0;\n                position: absolute;\n                right: 0;\n                top: 0;\n            }\n\n            svg {\n                height: 40%;\n                left: 50%;\n                position: absolute;\n                top: 50%;\n                transform: translate(-50%, -50%);\n                width: 40%;\n            }\n        ")
	}(),
	function addHandlers() {
		$this.interact(handleHover, handleClick)
	}(), _this.get("icon", (_ => _icon))
}), "singleton"), Class((function UIChatZoneCamera() {
	Inherit(this, Element);
	const _this = this,
		$this = _this.element;
	let $button, _videoEnabled = AVSettingsController.instance().videoEnabled;

	function handleClick() {
		_videoEnabled ? ($button.icon.element.tween({
			color: "#f00",
			x: "-50%",
			y: "-50%"
		}, 300, "easeOutCubic"), Track.event("settings", "disable_av_audio"), GameCenterMedia.userStream.disableVideo()) : ($button.icon.element.tween({
			color: "currentColor",
			x: "-50%",
			y: "-50%"
		}, 300, "easeOutCubic"), Track.event("settings", "enable_av_audio"), GameCenterMedia.userStream.enableVideo()), AVSettingsController.instance().videoEnabled = _videoEnabled, _videoEnabled = !_videoEnabled
	}
	$button = _this.initClass(UIChatZoneButton, {
		icon: "core-chat-zones-camera",
		onClick: handleClick
	}), $this.goob("\n            & {\n                margin-left: 1rem;\n            }\n\n            .UIChatZoneButton {\n                position: relative !important;\n            }\n        ")
})), Class((function UIChatZoneMicrophone() {
	Inherit(this, Element);
	const _this = this,
		$this = _this.element;
	let $button, _audioEnabled = AVSettingsController.instance().audioEnabled;

	function handleClick() {
		_audioEnabled ? ($button.icon.element.tween({
			color: "#f00",
			x: "-50%",
			y: "-50%"
		}, 300, "easeOutCubic"), Track.event("settings", "disable_av_audio"), GameCenterMedia.userStream.disableAudio()) : ($button.icon.element.tween({
			color: "currentColor",
			x: "-50%",
			y: "-50%"
		}, 300, "easeOutCubic"), Track.event("settings", "enable_av_audio"), GameCenterMedia.userStream.enableAudio()), AVSettingsController.instance().audioEnabled = _audioEnabled, _audioEnabled = !_audioEnabled
	}
	$button = _this.initClass(UIChatZoneButton, {
		icon: "core-chat-zones-microphone",
		onClick: handleClick
	}), $this.goob("\n            .UIChatZoneButton {\n                position: relative !important;\n            }\n        ")
})), Class((function UIChatZoneSettings({
	onClick: onClick
}) {
	Inherit(this, Element);
	const _this = this,
		$this = _this.element;
	let $button;
	$button = _this.initClass(UIChatZoneButton, {
		icon: "core-chat-zones-settings",
		onClick: onClick
	}), $this.goob("\n            .UIChatZoneButton {\n                position: relative !important;\n            }\n        ")
})), Class((function UIChatZoneSettingsModal() {
	Inherit(this, Element);
	const _this = this,
		$this = _this.element;
	let $title, $close, $tabs, $tabsAudio, $tabsAudioText, $tabsVideo, $tabsVideoText, $content, _audio, _video;

	function handleTabHover({
		action: action,
		object: object
	}) {
		switch (action) {
			case "over":
				object.tween({
					color: "rgba(255, 255, 255, 0.5)"
				}, 400, "easeOutCubic");
				break;
			case "out":
				object.tween({
					color: UIColors.white
				}, 400, "easeOutCubic")
		}
	}

	function handleTabClick({
		object: object
	}) {
		"audio" === object.value ? (_audio.show(), $tabsAudio.tween({
			opacity: 1
		}, 400, "easeOutCubic"), _video.hide(), $tabsVideo.tween({
			opacity: .5
		}, 400, "easeOutCubic")) : (_audio.hide(), $tabsAudio.tween({
			opacity: .5
		}, 400, "easeOutCubic"), _video.show(), $tabsVideo.tween({
			opacity: 1
		}, 400, "easeOutCubic"))
	}

	function handleClose() {
		_this.animateOut()
	}! function initElement() {
		$title = $this.create("title"), _this.bindState(UICopy.state, "copy", (copy => $title.text(copy.chatzone_settings))), $close = _this.initClass(UIChatZoneButton, {
			icon: "core-close",
			onClick: handleClose
		}), $tabs = $this.create("tabs"), $tabsAudio = $tabs.create("tabs__tab"), $tabsAudio.interact(handleTabHover, handleTabClick), $tabsAudio.value = "audio", $tabsAudio.multiTween = !0, $tabsAudioText = $tabsAudio.create("tabs__tab__text"), _this.bindState(UICopy.state, "copy", (copy => $tabsAudioText.text(copy.chatzone_settings_audio))), $tabsVideo = $tabs.create("tabs__tab"), $tabsVideo.goob({
			opacity: .5
		}), $tabsVideo.interact(handleTabHover, handleTabClick), $tabsVideo.value = "video", $tabsVideo.multiTween = !0, $tabsVideoText = $tabsVideo.create("tabs__tab__text"), _this.bindState(UICopy.state, "copy", (copy => $tabsVideoText.text(copy.chatzone_settings_video))), $content = $this.create("content"), _audio = _this.initClass(UIChatZoneAudio, [$content]), _audio.show(), _video = _this.initClass(UIChatZoneVideo, [$content]), _video.hide()
	}(),
	function initStyles() {
		$this.goob("\n            & {\n                background: rgba(0, 0, 0, 0.5);\n                border-radius: 1rem;\n                color: --var('white');\n                display: flex;\n                flex-direction: column;\n                left: 50%;\n                opacity: 0;\n                padding: 3rem;\n                position: absolute;\n                top: 50%;\n                transform: translate(-50%, -50%);\n                visibility: hidden;\n                width: 42rem;\n                z-index: 100000000;\n            }\n\n            > .UIChatZoneButton {\n                right: 2.5rem;\n            }\n\n            .title {\n                font-size: 2.4rem;\n                font-weight: 800;\n                margin-bottom: 4rem;\n                position: relative !important;\n            }\n\n            .tabs {\n                align-items: center;\n                position: relative !important;\n                display: flex;\n                width: 100%;\n            }\n\n            .tabs__tab {\n                border-bottom: 2px solid currentColor;\n                flex: 1;\n                font-size: 1.4rem;\n                font-weight: 700;\n                padding-bottom: 0.5rem;\n                position: relative !important;\n                text-align: center;\n                text-transform: uppercase;\n            }\n\n            .tabs__tab__text {\n                position: relative !important;\n            }\n\n            .content {\n                position: relative !important;\n            }\n        ")
	}(), _this.animateIn = _ => {
		$this.visible(), $this.tween({
			opacity: 1
		}, 400, "easeOutCubic")
	}, _this.animateOut = _ => {
		$this.invisible(), $this.tween({
			opacity: 0
		}, 400, "easeOutCubic")
	}
})), Class((function UIChatZoneVideo() {
	Inherit(this, Element);
	const _this = this,
		$this = _this.element;
	let $video, $input, $inputTitle, $inputBox, $inputField, $inputIcon, _inputs;

	function handleInputChange(event) {
		let value = $inputField.div.value,
			option = _inputs.find((input => input.deviceId === value));
		GameCenterMedia.userStream.setVideoSource(option)
	}!async function() {
		await GameCenterMedia.getUserStream(), $video = $this.create("video", "video"), await async function initInput() {
			_inputs = await GameCenterMedia.userStream.getVideoInputs(), $input = $this.create("input"), $inputTitle = $input.create("label"), _this.bindState(UICopy.state, "copy", (copy => $inputTitle.text(copy.chatzone_settings_video_camera))), $inputBox = $input.create("field"), $inputField = $inputBox.create("field__select", "select"), $inputField.bind("change", handleInputChange), $inputIcon = _this.initClass(Sprite, "core-chevron-bottom", [$inputBox]), _inputs.forEach((input => {
				let $option = $inputField.create("option", "option");
				input.selected && $option.attr("selected", "selected"), $option.attr("value", input.deviceId), $option.text(input.label)
			}))
		}(), await async function initVideo() {
				$video.attr("autoplay", "true");
				let stream = await GameCenterMedia.userStream.getStream();
				stream ? ($video.div.srcObject = stream.srcObject, $video.div.play(), $video.div.volume = .001) : $video.hide()
			}(),
			function initStyles() {
				$this.goob("\n            & {\n                color: --var('white');\n                padding-top: 3rem;\n                position: relative !important;\n            }\n\n            * {\n                position: relative !important;\n            }\n\n            .video {\n                display: block;\n                margin-bottom: 2.5rem;\n                width: 100%;\n            }\n\n            .label {\n                display: block;\n                font-size: 1.6rem;\n            }\n\n            .field {\n                position: relative;\n\n                svg {\n                    height: 2rem;\n                    position: absolute !important;\n                    right: 0;\n                    top: 50%;\n                    transform: translateY(-50%);\n                    width: 2rem;\n                }\n            }\n\n            .field__select {\n                appearance: none;\n                background: none;\n                border-color: rgba(255, 255, 255, 0.1);\n                border-style: solid;\n                border-width: 0 0 1px 0;\n                color: inherit;\n                font-family: inherit;\n                font-size: 1.5rem;\n                display: block;\n                line-height: 2;\n                margin-top: 1.5rem;\n                opacity: 0.5;\n                padding: 0;\n                width: 100%;\n            }\n\n            .input {\n                \n            }\n        ")
			}()
	}(), _this.show = _ => {
		$this.show()
	}, _this.hide = _ => {
		$this.hide()
	}
})), Class((function UITransparentBar({
	logo: logo = "default",
	voice: voice = {},
	wallet: wallet = {},
	emotes: emotes = {},
	settings: settings = {
		options: ["camera", "audio"]
	},
	profile: profile = {
		avatars: !Global.METALINK && [{
			label: "Happy",
			value: "11.png"
		}, {
			label: "Confused",
			value: "2.png"
		}, {
			label: "Tongue Out",
			value: "3.png"
		}, {
			label: "Laugh",
			value: "4.png"
		}, {
			label: "Love Eyes",
			value: "5.png"
		}, {
			label: "Star Eyes",
			value: "6.png"
		}, {
			label: "Smiley",
			value: "7.png"
		}, {
			label: "Kiss",
			value: "8.png"
		}, {
			label: "Wink",
			value: "9.png"
		}, {
			label: "Joyful",
			value: "10.png"
		}, {
			label: "Cheese",
			value: "12.png"
		}, {
			label: "Smug",
			value: "1.png"
		}],
		colors: [{
			value: "#dddddd"
		}, {
			value: "#c2e9ff"
		}, {
			value: "#ffa1a5"
		}, {
			value: "#afffc2"
		}, {
			value: "#ffe2a3"
		}, {
			value: "#ffb1d3"
		}, {
			value: "#c1acff"
		}],
		username: !Global.METALINK
	}
} = {}) {
	Inherit(this, Element);
	const _this = this,
		$this = _this.element;
	_this.state = AppState.createLocal({
		modal: null
	});
	let _visible = !1;
	var DEFAULT_NAV_ITEMS = [{
			type: "vr",
			icon: "transparent-vr",
			component: UITransparentVR,
			settings: {}
		}, {
			type: "artworks",
			icon: "transparent-artworks",
			component: UITransparentArtworks,
			settings: {}
		}, {
			type: "settings",
			icon: "transparent-settings",
			component: UITransparentSettings,
			settings: settings
		}],
		_background1 = new Color("#ffffff"),
		_foreground1 = new Color("#000000");

	function logoHover(e) {
		switch (e.action) {
			case "over":
				_this.logo.tween({
					opacity: .75
				}, 200, "easeOutSine");
				break;
			case "out":
				_this.logo.tween({
					opacity: 1
				}, 300, "easeOutSine")
		}
	}

	function handleLogoClick() {
		Router.setState("")
	}
	async function handleTheme(theme) {
		if (_this.theme = theme || _this.theme, _this.lastGoobClass, Global.PLAYGROUND) return;
		switch (_this.theme) {
			case "light":
				_background1.setStyle("#ffffff"), _foreground1.setStyle("#000000");
				break;
			case "auto":
				let theme = (await DreamWorld.getActiveEnvironment()).UITheme;
				if (!theme) return;
				_background1.setStyle(theme.background), _foreground1.setStyle(theme.foreground);
				break;
			case "dark":
				_background1.setStyle("#000000"), _foreground1.setStyle("#ffffff")
		}
		let foregroundRGB = `${255*_foreground1.r},${255*_foreground1.g},${255*_foreground1.b}`,
			backgroundRGB = `${255*_background1.r},${255*_background1.g},${255*_background1.b}`;
		_this.saveForegroundRGB == foregroundRGB && _this.saveBackgroundRGB == backgroundRGB || (_this.saveForegroundRGB = foregroundRGB, _this.saveBackgroundRGB = backgroundRGB, $this.goob(`\n            & {\n                --white: rgb(${backgroundRGB}, 1);\n                --white100: rgb(${backgroundRGB}, 1);\n                --white90: rgb(${backgroundRGB}, 0.9);\n                --white80: rgb(${backgroundRGB}, 0.8);\n                --white70: rgb(${backgroundRGB}, 0.7);\n                --white60: rgb(${backgroundRGB}, 0.6);\n                --white50: rgb(${backgroundRGB}, 0.5);\n                --white40: rgb(${backgroundRGB}, 0.4);\n                --white30: rgb(${backgroundRGB}, 0.3);\n                --white20: rgb(${backgroundRGB}, 0.2);\n                --white10: rgb(${backgroundRGB}, 0.1);\n\n                --black: rgb(${foregroundRGB}, 1);\n                --black100: rgb(${foregroundRGB}, 1);\n                --black90: rgb(${foregroundRGB}, 0.9);\n                --black80: rgb(${foregroundRGB}, 0.8);\n                --black70: rgb(${foregroundRGB}, 0.7);\n                --black60: rgb(${foregroundRGB}, 0.6);\n                --black50: rgb(${foregroundRGB}, 0.5);\n                --black40: rgb(${foregroundRGB}, 0.4);\n                --black30: rgb(${foregroundRGB}, 0.3);\n                --black20: rgb(${foregroundRGB}, 0.2);\n                --black10: rgb(${foregroundRGB}, 0.1);\n            }\n        `), _this.lastGoobClass = $this.goobClass)
	}

	function handlePartyChange(isActive) {
		isActive && (_this.state.modal = "voice")
	}

	function handleChatZoneConnect() {
		_this.state.modal = "voice"
	}

	function handleChatZoneDisconnect() {}

	function handleModalChange(id) {
		_this.modals.forEach((modal => {
			modal.id === id ? modal.animateIn() : modal.animateOut()
		}))
	}!async function() {
		UITransparentStylesOverrideController.instance(), _this.avatars = profile.avatars && profile.avatars.map((avatar => avatar.value)),
			function initElements() {
				_this.logo = $this.create("logo"), _this.logo.interact(logoHover, handleLogoClick), _this.logoSprite = _this.initClass(Sprite, logo, "Dreamwave", !0, [_this.logo]), Stage.add($this)
			}(),
			function initButtons() {
				_this.buttons = $this.create("buttons"), _this.buttonsList = DEFAULT_NAV_ITEMS.map((({
					component: component,
					icon: icon,
					type: type,
					settings: settings
				}, index) => {
					if (!settings) return null;
					return _this.initClass(UITransparentBarButton, {
						icon: icon,
						index: index,
						state: _this.state,
						type: type
					}, [_this.buttons])
				})).filter((value => value))
			}(),
			function initModals() {
				_this.modals = DEFAULT_NAV_ITEMS.map((({
					component: component,
					icon: icon,
					type: type,
					settings: settings
				}) => {
					if (!settings) return null;
					return _this.initClass(component, {
						id: type,
						...settings
					})
				})).filter((value => value))
			}(),
			function initMicrophone() {
				if (PortalUtil.isPortal) return;
				_this.microphone = _this.initClass(UITransparentMicrophone, {
					length: DEFAULT_NAV_ITEMS.length
				})
			}(),
			function initStyles() {
				$this.goob(`\n            & {\n                align-items: start;\n                display: flex;\n                justify-content: space-between;\n                left: 0;\n                position: fixed;\n                top: 0;\n                width: 100%;\n                z-index: 1000;\n            }\n\n            .logo {\n                ${UITests.backdropFilter()}\n\n                border: 1px solid var(--white30);\n                border-radius: 0 0 1rem 0;\n                padding: 1rem 1.8rem;\n                position: relative !important;\n                box-shadow: 0 0 2.4rem var(--black10);\n\n                svg {\n                    color: var(--black);\n                    display: block;\n                    position: relative !important;\n                    width: 11.6rem;\n                }\n            }\n\n            .buttons {\n                ${UITests.backdropFilter()}\n\n                align-items: center;\n                border: 1px solid var(--white30);\n                border-radius: 0 0 0 1rem;\n                box-shadow: 0 0 2.4rem var(--black10);\n                display: flex;\n                padding: 0.9rem 1.1rem;\n                position: relative !important;\n                ${StyleGuide.fluid("right",StyleGuide.lateralPadding)}\n                ${StyleGuide.fluid("top",StyleGuide.lateralPadding)}\n                background: white;\n\n                @media (max-height: 680px) and (orientation: landscape) {\n                    top: 20px;\n                }\n                \n                border-radius: 130px;\n\n                transform: scaleX(0);\n                transform-origin: right;\n                transition: transform 0.4s ${TweenManager._getEase("easeOutCubic")};\n\n                svg {\n                    opacity: 0;\n                    transition: opacity 0.4s ${TweenManager._getEase("easeOutCubic")} 0.5s;\n                }\n            }\n\n            &.in {\n                .buttons {\n                    transform-origin: left;\n                    transform: scaleX(1);\n\n                    svg {\n                        opacity: 1;\n                    }\n                }\n            }\n        `), Device.mobile && Device.detect("mozilla") && $this.goob(`\n                \n                .logo {\n                    @media(orientation: landscape) {\n                        padding-left: ${Mobile.getSafeAreaInsetLeft()}px;\n                    }\n                }\n            `)
			}(),
			function addListeners() {
				_this.state.bind("modal", handleModalChange), WatchPartyManager.instance().state.bind("active", handlePartyChange), _this.bindState(PlayerSettings.instance().state, "theme", handleTheme), _this.events.sub(VideoChatZones.CONNECTED, handleChatZoneConnect), _this.events.sub(VideoChatZones.DISCONNECTED, handleChatZoneDisconnect), _this.events.sub(Mouse.input, Interaction.CLICK, (event => {
					if ("firefox" === Device?.system?.browser && event.clientX / Stage.width > .75) return;
					let clickInsideModal = !1;
					if (event.path || "INPUT" !== event.target?.tagName && "SELECT" !== event.target?.tagName) {
						for (let i = 0; i < event.path?.length; i++)
							if (event.path[i]?.className?.includes("UITransparent")) return void(clickInsideModal = !0)
					} else clickInsideModal = !0;
					clickInsideModal || (_this.state.modal = null)
				}))
			}(), (Utils.query("spawnDebug") || Utils.query("skip")) && (await _this.wait(100), _this.animateIn())
	}(), this.handleTheme = handleTheme, this.collapseActiveModal = function() {
		_this.state.modal = null
	}, this.show = function() {
		PortalUtil.isPortal || Utils.query("no-UI") || $this.show()
	}, this.hide = function() {
		PortalUtil.isPortal || Utils.query("no-UI") || $this.hide()
	}, this.animateIn = async function() {
		PortalUtil.isPortal || Utils.query("no-UI") || (_visible = !0, await _this.wait(1e3), $this.classList().add("in"))
	}, this.animateOut = function() {
		PortalUtil.isPortal || Utils.query("no-UI") || (_visible = !1, $this.classList().remove("in"))
	}
}), "singleton"), Class((function UITransparentBarButton({
	icon: icon,
	index: index,
	state: state,
	type: type
} = {}) {
	Inherit(this, Element, "button");
	const _this = this,
		$this = _this.element;

	function handleModalChange(id) {
		_this.type === id ? (_this.flag("isActive", !0), $this.classList().add("active"), _this.background.tween({
			scale: 1
		}, 400, "easeOutCubic")) : (_this.flag("isActive", !1), $this.classList().remove("active"), _this.background.tween({
			scale: 0
		}, 400, "easeOutCubic"))
	}

	function handleButtonHover({
		action: action,
		object: object
	}) {
		if (!object.isActive) switch (action) {
			case "over":
				$this.classList().add("active"), _this.background.tween({
					scale: 1
				}, 400, "easeOutCubic");
				break;
			case "out":
				_this.flag("isActive") || ($this.classList().remove("active"), _this.background.tween({
					scale: 0
				}, 400, "easeOutCubic"))
		}
	}

	function handleButtonClick() {
		_this.flag("isActive") ? (_this.state.modal = null, Track.event("menu_closed")) : (_this.state.modal = _this.type, Track.event("menu_opened", _this.type))
	}
	_this.state = state, _this.type = type,
		function initElement() {
			_this.background = $this.create("background"), type.match("profile") ? (_this.icon = _this.initClass(UITransparentProfilePicture), _this.icon.setSize("2.2rem", "2.2rem"), _this.icon.element.css({
				margin: "auto"
			})) : type.match("emote") ? _this.icon = _this.initClass(UITransparentEmotePicture) : $this.html(UITransparentBarButton[icon.replaceAll("-", "_").toUpperCase()])
		}(),
		function initStyles() {
			$this.goob(`\n            & {\n                background: none;\n                border: none;\n                border-radius: 50%;\n                align-items: center;\n                display: flex;\n                height: 3.4rem;\n                justify-content: center;\n                order: ${index+1};\n                overflow: hidden;\n                position: relative !important;\n                width: 3.4rem;\n\n                &:not(:first-child) {\n                    margin-left: 1rem;\n                }\n            }\n\n            .background {\n                background: var(--white);\n                height: 100%;\n                left: 0;\n                top: 0;\n                transform: scale(0);\n                \n                width: 100%;\n            }\n\n            &.active {\n                svg {\n                    stroke: white;\n                    color: white;\n                }\n            }\n\n            svg {\n                color: var(--black);\n                stroke: var(--black);\n                fill: none;\n                height: 2.6rem;\n                position: relative !important;\n                width: 2.6rem;\n                z-index: 1;\n\n                transition: stroke 0.4s ${TweenManager._getEase("cubicOut")}\n            }\n        `)
		}(),
		function addHandlers() {
			$this.interact(handleButtonHover, handleButtonClick), _this.state.bind("modal", handleModalChange)
		}()
}), (_ => {
	UITransparentBarButton.CLICK = "UITransparentBarButton.CLICK", UITransparentBarButton.TRANSPARENT_SETTINGS = '\n        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" >\n            <path d="M12.2419 9.61907C11.7369 9.57058 11.2288 9.67502 10.7872 9.91806C10.3456 10.1611 9.99212 10.5309 9.77508 10.9768C9.55805 11.4227 9.48811 11.9229 9.57483 12.4089C9.66156 12.8949 9.90071 13.343 10.2595 13.6918C10.6184 14.0406 11.0794 14.273 11.5794 14.3573C12.0794 14.4416 12.5939 14.3736 13.0527 14.1627C13.5114 13.9517 13.8918 13.6081 14.1418 13.1789C14.3919 12.7496 14.4993 12.2557 14.4494 11.7649C14.3926 11.2146 14.1417 10.7003 13.7394 10.3092C13.3371 9.91817 12.808 9.67434 12.2419 9.61907V9.61907ZM18.1684 12C18.1669 12.2601 18.1472 12.5197 18.1096 12.7772L19.8483 14.1028C19.924 14.1638 19.975 14.2489 19.9923 14.343C20.0095 14.4371 19.9919 14.5342 19.9425 14.6168L18.2976 17.3832C18.2477 17.4651 18.1696 17.5272 18.0772 17.5585C17.9847 17.5899 17.8838 17.5886 17.7923 17.5548L16.0655 16.8789C15.9703 16.842 15.8671 16.8287 15.7653 16.8401C15.6635 16.8515 15.5662 16.8873 15.4821 16.9443C15.2185 17.1207 14.9416 17.2774 14.6537 17.4131C14.5631 17.4558 14.4848 17.5196 14.4257 17.5988C14.3665 17.6779 14.3283 17.77 14.3145 17.8669L14.0556 19.6572C14.0386 19.7517 13.9884 19.8376 13.9135 19.9001C13.8385 19.9627 13.7436 19.998 13.6449 20H10.3551C10.258 19.9984 10.1644 19.9646 10.0897 19.9044C10.0149 19.8441 9.96355 19.7609 9.94399 19.6684L9.68554 17.8807C9.67103 17.7828 9.63184 17.6898 9.57145 17.6101C9.51107 17.5304 9.43136 17.4665 9.33941 17.4239C9.05182 17.289 8.77583 17.1318 8.51408 16.954C8.43028 16.8973 8.33329 16.8618 8.23184 16.8507C8.13039 16.8395 8.02769 16.8531 7.93297 16.8901L6.20655 17.5656C6.11506 17.5995 6.01421 17.6009 5.92176 17.5695C5.82932 17.5382 5.75121 17.4762 5.7012 17.3944L4.05631 14.628C4.00686 14.5454 3.98919 14.4484 4.00644 14.3542C4.0237 14.2601 4.07476 14.175 4.15054 14.114L5.62005 12.9925C5.70056 12.9304 5.76383 12.8497 5.80413 12.7578C5.84443 12.6659 5.86047 12.5656 5.8508 12.4662C5.83696 12.3103 5.8285 12.1548 5.8285 11.9989C5.8285 11.843 5.83658 11.6897 5.8508 11.5372C5.85941 11.4383 5.84258 11.3389 5.80183 11.248C5.76108 11.157 5.69769 11.0773 5.61736 11.0161L4.14861 9.89458C4.07407 9.83331 4.02408 9.74849 4.00741 9.65498C3.99075 9.56148 4.00847 9.46526 4.05747 9.38318L5.70235 6.61682C5.75231 6.53495 5.83039 6.47284 5.92284 6.44145C6.01529 6.41006 6.11617 6.4114 6.2077 6.44523L7.93451 7.12112C8.02973 7.15798 8.13288 7.17129 8.2347 7.15987C8.33652 7.14846 8.43384 7.11266 8.51793 7.0557C8.78147 6.8793 9.0584 6.72259 9.34634 6.58692C9.43686 6.54415 9.51516 6.48038 9.57432 6.40123C9.63347 6.32208 9.67167 6.22998 9.68554 6.13308L9.94437 4.3428C9.96137 4.24825 10.0116 4.16238 10.0865 4.09985C10.1615 4.03733 10.2564 4.00203 10.3551 4H13.6449C13.742 4.00163 13.8356 4.03536 13.9103 4.09564C13.9851 4.15591 14.0364 4.23913 14.056 4.33159L14.3145 6.11925C14.329 6.21722 14.3682 6.31019 14.4285 6.38988C14.4889 6.46958 14.5686 6.53354 14.6606 6.57607C14.9482 6.71101 15.2242 6.86815 15.4859 7.04598C15.5697 7.10266 15.6667 7.13818 15.7682 7.14934C15.8696 7.1605 15.9723 7.14695 16.067 7.10991L17.7935 6.43439C17.8849 6.40053 17.9858 6.39913 18.0782 6.43045C18.1707 6.46177 18.2488 6.5238 18.2988 6.60561L19.9437 9.37196C19.9931 9.45461 20.0108 9.55164 19.9936 9.64577C19.9763 9.7399 19.9252 9.82502 19.8495 9.88598L18.3799 11.0075C18.2991 11.0694 18.2354 11.15 18.1948 11.2419C18.1542 11.3338 18.1378 11.4342 18.1473 11.5338C18.16 11.6886 18.1684 11.8441 18.1684 12Z"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n        </symbol>\n    ', UITransparentBarButton.TRANSPARENT_ARTWORKS = '\n        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 16" >\n            <rect x="7" y="1" width="10" height="14" />\n            <rect x="17" y="5" width="6" height="6" />\n            <rect x="1" y="5" width="6" height="6" />\n        </svg>\n    ', UITransparentBarButton.TRANSPARENT_VR = '\n        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 16">\n            <path d="M2.56738 7.57346c0-2.33209 1.89054-4.22263 4.22264-4.22263H21.6433c2.3321 0 4.2226 1.89054 4.2226 4.22264v3.20393c0 2.3321-1.8905 4.2227-4.2226 4.2227h-4.0161c-.7598 0-1.4373-.4826-1.6877-1.1999-.5576-1.597-2.8205-1.601-3.3719-.0019-.248.7192-.9249 1.2018-1.6856 1.2018H6.79002c-2.3321 0-4.22264-1.8906-4.22264-4.2227V7.57346Z"/>\n            <path d="M3.03735 5.77985v-.55721C3.03735 2.89054 4.92789 1 7.25999 1H21.1729c2.3321 0 4.2227 1.89054 4.2227 4.22264v.58333"/>\n            <path d="M1 7.09323c0-.20842.13009-.39467.32576-.46642l1.2414-.45518v6.16417L1.263 11.6403c-.16188-.0864-.263-.2549-.263-.4384V7.09323Z"/>\n            <path d="M27.4326 7.09323c0-.20842-.1301-.39467-.3257-.46642l-1.2414-.45518v6.16417l1.3041-.6955c.1619-.0864.263-.2549.263-.4384V7.09323Z"/>\n            <rect id="vr-square" width="3.02985" height=".783582" x="12.7012" y="4.60449" fill="#000" rx=".391791"/>\n        </svg>\n    '
})), Class((function UITransparentButton() {
	Inherit(this, Component);
	! function initStyles() {
		Stage.goob("\n            .ButtonView {\n                color: var(--black);\n                background: transparent;\n                border-radius: 0.8rem;\n                border: 0.2rem solid var(--black);\n                padding: 0.8rem 2rem;\n                text-align: center;\n                text-transform: uppercase;\n            }\n   \n            .ButtonView__text {\n                font: var(--ui-transparent-label1-regular);\n            }\n        ")
	}(), DreamUI.ButtonAnimations.onHover = function({
		action: action
	}, button) {
		switch (action) {
			case "over":
				button.element.tween({
					backgroundColor: "black",
					color: Colors.white
				}, 400, "easeOutCubic");
				break;
			case "out":
				button.element.tween({
					backgroundColor: "transparent",
					color: Colors.black
				}, 400, "easeOutCubic")
		}
	}
}), "singleton"), Class((function UITransparentCamera({
	length: length
}) {
	Inherit(this, Element, "button");
	const _this = this,
		$this = _this.element;

	function onChatZoneConnect(id) {
		WatchPartyManager.instance().state.active || $this.tween({
			opacity: 1,
			pointerEvents: "all"
		}, 200, "easeOutCubic", 100)
	}

	function onChatZoneDisconnect(id) {
		WatchPartyManager.instance().state.active || $this.tween({
			opacity: 0,
			pointerEvents: "none"
		}, 200, "easeOutCubic")
	}

	function handleChange() {
		_this.state.get("isEnabled") ? ($this.tween({
			backgroundColor: "#E72626"
		}, 200, "easeOutCubic"), _this.iconOn.element.tween({
			opacity: 0
		}, 200, "easeOutCubic"), _this.iconOff.element.tween({
			opacity: 1
		}, 200, "easeOutCubic"), WatchPartyManager.instance().state.get("active") || GameCenterMedia.userStream.disableVideo()) : ($this.tween({
			backgroundColor: "#40D472"
		}, 200, "easeOutCubic"), _this.iconOn.element.tween({
			opacity: 1
		}, 200, "easeOutCubic"), _this.iconOff.element.tween({
			opacity: 0
		}, 200, "easeOutCubic"), GameCenterMedia.userStream.enableVideo())
	}

	function handleClick() {
		_this.state.set("isEnabled", !_this.state.get("isEnabled"))
	}

	function handleHover({
		action: action
	}) {
		switch (action) {
			case "over":
				$this.tween({
					opacity: .8
				}, 200, "easeOutCubic"), _this.iconOn.element.tween({
					scale: .9,
					y: 0
				}, 200, "easeOutCubic"), _this.iconOff.element.tween({
					scale: .9,
					y: 0
				}, 200, "easeOutCubic");
				break;
			case "out":
				$this.tween({
					opacity: 1
				}, 200, "easeOutCubic"), _this.iconOn.element.tween({
					scale: 1
				}, 400, "easeOutCubic"), _this.iconOff.element.tween({
					scale: 1
				}, 400, "easeOutCubic")
		}
	}
	_this.state = AppState.createLocal({
			isMuted: !1
		}),
		function initElements() {
			_this.iconOn = _this.initClass(Sprite, "core-chat-zones-camera"), _this.iconOff = _this.initClass(Sprite, "core-chat-zones-camera"), _this.iconOn.element.css({
				opacity: 1
			})
		}(),
		function initStyles() {
			$this.goob(`\n            background: #40D472;\n            border: 2px solid white;\n            border-radius: 0.8rem;\n            cursor: pointer;\n            height: 3.2rem;\n            opacity: 0;\n            overflow: hidden;\n            right: ${4*length+6}rem;\n            top: 0.5rem;\n            width: 3.4rem;\n            pointer-events: none;\n\n            @media(max-width: 1024px) {\n                top: 0.5rem;\n\n                @media(orientation: landscape) {\n                    top: 0.2rem;\n                }\n            }\n\n            svg {\n                height: 1.9rem;\n                fill: none;\n                left: 0.6rem;\n                opacity: 0;\n                position: absolute !important;\n                top: 0.5rem;\n                vertical-align: bottom;\n                width: 1.9rem;\n                z-index: 1;\n            }\n        `), _this.iconOn.element.goob("color: black;"), _this.iconOff.element.goob("color: white;")
		}(),
		function addListeners() {
			_this.events.sub(VideoChatZones.CONNECTED, onChatZoneConnect), _this.events.sub(VideoChatZones.DISCONNECTED, onChatZoneDisconnect), $this.interact(handleHover, handleClick), _this.state.bind("isEnabled", handleChange)
		}()
})), Class((function UITransparentClose({
	customClass: customClass
} = {}) {
	Inherit(this, Element);
	const _this = this,
		$this = _this.element;

	function handleHover({
		action: action,
		object: object
	}) {
		switch (action) {
			case "over":
				object.tween({
					opacity: .5
				}, 400, "easeOutCubic");
				break;
			case "out":
				object.tween({
					opacity: 1
				}, 400, "easeOutCubic")
		}
	}

	function handleClick() {
		_this.events.fire(UITransparentClose.CLICK)
	}! function initHTML() {
		customClass && $this.div.classList.add(customClass), _this.icon = _this.initClass(Sprite, "core-close")
	}(),
	function initStyles() {
		$this.goob("\n            & {\n                color: var(--black);\n                background: transparent;\n                border-radius: 0.8rem;\n                padding: 0.8rem;\n                position: relative !important;\n            }\n\n            svg {\n                display: block;\n                height: 2rem;\n                width: 2rem;\n            }\n        ")
	}(),
	function addHandlers() {
		$this.interact(handleHover, handleClick)
	}(), $this.multiTween = !0
}), (_ => {
	UITransparentClose.CLICK = "UITransparentClose.CLICK"
})), Class((function UITransparentLink(_options) {
	Inherit(this, Element);
	const _this = this,
		$this = _this.element;

	function handleClick() {
		Track.event("link_clicked", _options.href), window.open(_options.href, "_blank")
	}! function initHTML() {
		let {
			copy: copy,
			href: href
		} = _options, $link = $this.create("link", "a");
		$link.attr("href", href), $link.attr("target", "_blank"), $link.add(_this.initClass(UICopyText, {
			copy: copy
		}).element), $this.interact(null, handleClick)
	}(),
	function initStyles() {
		$this.goob("\n            .link, .link:visited {\n                color: var(--black);\n                text-decoration: none;\n            }\n        ")
	}()
})), Class((function UITransparentMicrophone({
	length: length
}) {
	Inherit(this, Element, "button");
	const _this = this,
		$this = _this.element;

	function createMic(className, $wrapper, on) {
		const $item = $wrapper.create(className);
		return on ? $item.html('\n                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">\n                <path d="M17.1598 11.96V4.68002C17.1598 3.57672 16.7216 2.51861 15.9414 1.73846C15.1613 0.958304 14.1031 0.52002 12.9998 0.52002C11.8965 0.52002 10.8384 0.958304 10.0583 1.73846C9.27813 2.51861 8.83984 3.57672 8.83984 4.68002V11.96C8.83984 13.0633 9.27813 14.1214 10.0583 14.9016C10.8384 15.6817 11.8965 16.12 12.9998 16.12C14.1031 16.12 15.1613 15.6817 15.9414 14.9016C16.7216 14.1214 17.1598 13.0633 17.1598 11.96ZM10.9198 11.96V4.68002C10.9198 4.12837 11.139 3.59931 11.5291 3.20924C11.9191 2.81916 12.4482 2.60002 12.9998 2.60002C13.5515 2.60002 14.0805 2.81916 14.4706 3.20924C14.8607 3.59931 15.0798 4.12837 15.0798 4.68002V11.96C15.0798 12.5117 14.8607 13.0407 14.4706 13.4308C14.0805 13.8209 13.5515 14.04 12.9998 14.04C12.4482 14.04 11.9191 13.8209 11.5291 13.4308C11.139 13.0407 10.9198 12.5117 10.9198 11.96Z" fill="white"/>\n                <path d="M12.9996 25.48C13.2755 25.48 13.54 25.3704 13.735 25.1754C13.9301 24.9803 14.0396 24.7158 14.0396 24.44V21.2576C16.327 21.0019 18.4399 19.9123 19.9747 18.1972C21.5095 16.4821 22.3586 14.2616 22.3596 11.96C22.3596 11.6842 22.2501 11.4196 22.055 11.2246C21.86 11.0296 21.5955 10.92 21.3196 10.92C21.0438 10.92 20.7793 11.0296 20.5843 11.2246C20.3892 11.4196 20.2796 11.6842 20.2796 11.96C20.2796 13.8908 19.5126 15.7425 18.1474 17.1077C16.7821 18.473 14.9304 19.24 12.9996 19.24C11.0689 19.24 9.21718 18.473 7.85191 17.1077C6.48665 15.7425 5.71965 13.8908 5.71965 11.96C5.71965 11.6842 5.61008 11.4196 5.41504 11.2246C5.22 11.0296 4.95547 10.92 4.67965 10.92C4.40382 10.92 4.1393 11.0296 3.94426 11.2246C3.74922 11.4196 3.63965 11.6842 3.63965 11.96C3.64074 14.2616 4.4898 16.4821 6.0246 18.1972C7.55939 19.9123 9.67232 21.0019 11.9596 21.2576V24.44C11.9596 24.7158 12.0692 24.9803 12.2643 25.1754C12.4593 25.3704 12.7238 25.48 12.9996 25.48Z" fill="white"/>\n                </svg>\n            ') : $item.html('\n                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">\n                <path d="M11.9596 24.44C11.9596 24.7159 12.0692 24.9804 12.2643 25.1754C12.4593 25.3705 12.7238 25.48 12.9996 25.48C13.2755 25.48 13.54 25.3705 13.735 25.1754C13.9301 24.9804 14.0396 24.7159 14.0396 24.44V21.255C14.478 21.208 14.9124 21.1298 15.3396 21.021C15.5973 20.9439 15.8151 20.7699 15.9472 20.5356C16.0794 20.3013 16.1156 20.025 16.0483 19.7645C15.981 19.5041 15.8154 19.2799 15.5863 19.1389C15.3572 18.998 15.0824 18.9513 14.8196 19.0086C13.7439 19.2864 12.6188 19.3143 11.5306 19.0901C10.4425 18.8659 9.42003 18.3956 8.54167 17.7152C7.6633 17.0349 6.95232 16.1625 6.46317 15.1649C5.97402 14.1674 5.71968 13.0711 5.71965 11.96C5.71965 11.6842 5.61008 11.4197 5.41504 11.2247C5.22 11.0296 4.95547 10.92 4.67965 10.92C4.40382 10.92 4.1393 11.0296 3.94426 11.2247C3.74922 11.4197 3.63965 11.6842 3.63965 11.96C3.64074 14.2616 4.4898 16.4821 6.0246 18.1973C7.55939 19.9124 9.67231 21.0019 11.9596 21.2576V24.44Z" fill="white"/>\n                <path d="M23.4001 24.44C23.606 24.4402 23.8072 24.3793 23.9784 24.265C24.1495 24.1507 24.283 23.9883 24.3618 23.7981C24.4405 23.608 24.4611 23.3987 24.4209 23.1969C24.3807 22.9951 24.2816 22.8097 24.1359 22.6642L19.8251 18.3534C21.4536 16.6229 22.3602 14.3362 22.3601 11.96C22.3601 11.6842 22.2506 11.4197 22.0555 11.2246C21.8605 11.0296 21.596 10.92 21.3201 10.92C21.0443 10.92 20.7798 11.0296 20.5848 11.2246C20.3897 11.4197 20.2801 11.6842 20.2801 11.96C20.2788 13.7848 19.59 15.5421 18.3509 16.8818L16.1461 14.6744C16.7999 13.9212 17.16 12.9574 17.1601 11.96V4.68002C17.1601 3.57672 16.7219 2.51861 15.9417 1.73846C15.1616 0.958304 14.1034 0.52002 13.0001 0.52002C11.8968 0.52002 10.8387 0.958304 10.0586 1.73846C9.27843 2.51861 8.84015 3.57672 8.84015 4.68002V7.36842L3.33595 1.86422C3.1408 1.66907 2.87613 1.55944 2.60015 1.55944C2.32417 1.55944 2.05949 1.66907 1.86435 1.86422C1.6692 2.05937 1.55957 2.32404 1.55957 2.60002C1.55957 2.876 1.6692 3.14067 1.86435 3.33582L9.14435 10.6158L22.6643 24.1358C22.761 24.2324 22.8757 24.3089 23.002 24.3611C23.1282 24.4133 23.2635 24.4401 23.4001 24.44ZM10.9201 4.68002C10.9201 4.12837 11.1393 3.59931 11.5294 3.20924C11.9194 2.81916 12.4485 2.60002 13.0001 2.60002C13.5518 2.60002 14.0809 2.81916 14.4709 3.20924C14.861 3.59931 15.0801 4.12837 15.0801 4.68002V11.96C15.076 12.4046 14.9283 12.836 14.6589 13.1898L10.9201 9.44842V4.68002Z" fill="white"/>\n                </svg>\n            '), $item
	}

	function onCreateRoom(isActive) {
		isActive ? $this.tween({
			opacity: 1,
			pointerEvents: "all"
		}, 200, "easeOutCubic", 100) : $this.tween({
			opacity: 0,
			pointerEvents: "none"
		}, 200, "easeOutCubic")
	}

	function onChatZoneConnect(id) {
		if (!WatchPartyManager.instance().state.active) return Utils.query("portalMute") ? GameCenterMedia.userStream.disableAudio() : void $this.tween({
			opacity: 1,
			pointerEvents: "all"
		}, 200, "easeOutCubic", 100)
	}

	function onChatZoneDisconnect(id) {
		WatchPartyManager.instance().state.active || $this.tween({
			opacity: 0,
			pointerEvents: "none"
		}, 200, "easeOutCubic")
	}

	function handleMute() {
		_this.state.get("isMuted") ? ($this.tween({
			backgroundColor: "#ffaeae"
		}, 200, "easeOutCubic"), _this.iconOn.tween({
			opacity: 0
		}, 200, "easeOutCubic"), _this.iconOff.tween({
			opacity: 1
		}, 200, "easeOutCubic"), WatchPartyManager.instance().state.get("active") ? WatchPartyManager.instance().muteAudio() : GameCenterMedia.userStream.disableAudio()) : ($this.tween({
			backgroundColor: "#9fe3b6"
		}, 200, "easeOutCubic"), _this.iconOn.tween({
			opacity: 1
		}, 200, "easeOutCubic"), _this.iconOff.tween({
			opacity: 0
		}, 200, "easeOutCubic"), WatchPartyManager.instance().state.get("active") ? WatchPartyManager.instance().unmuteAudio() : GameCenterMedia.userStream?.enableAudio())
	}

	function handleClick() {
		_this.state.set("isMuted", !_this.state.get("isMuted"))
	}

	function handleHover({
		action: action
	}) {
		switch (action) {
			case "over":
				$this.tween({
					opacity: .8
				}, 200, "easeOutCubic"), _this.iconOn.tween({
					scale: .9,
					y: 0
				}, 200, "easeOutCubic"), _this.iconOff.tween({
					scale: .9,
					y: 0
				}, 200, "easeOutCubic");
				break;
			case "out":
				$this.tween({
					opacity: 1
				}, 200, "easeOutCubic"), _this.iconOn.tween({
					scale: 1
				}, 400, "easeOutCubic"), _this.iconOff.tween({
					scale: 1
				}, 400, "easeOutCubic")
		}
	}
	_this.state = AppState.createLocal({
			isMuted: !1
		}),
		function initElements() {
			const $wrapper = $this.create("svgWrapper");
			_this.iconOn = createMic("core-mic", $wrapper, !0), _this.iconOff = createMic("core-mic-off", $wrapper, !1)
		}(),
		function initStyles() {
			$this.goob(`\n            \n            ${UITests.backdropFilter()}\n            ${StyleGuide.fluid("top",StyleGuide.lateralPadding)}\n            ${StyleGuide.fluid("right",{mob:165,xl:190})}\n\n            \n            border: 1px solid var(--white30);\n            border-radius: 0 0 0 1rem;\n            box-shadow: 0 0 2.4rem var(--black10);\n            align-items: center;\n            display: flex;\n            background: #9fe3b6;\n            border-radius: 130px;\n            transform-origin: right;\n            transition: transform 0.4s ${TweenManager._getEase("easeOutCubic")};\n            cursor: pointer;\n            position: absolute !important;\n            opacity: 0;\n            padding: 0.9rem;\n            overflow: hidden;\n\n            .svgWrapper{\n                position: relative !important;\n                width: 30px;\n                height: 30px;\n\n                .core-mic, .core-mic-off {\n                    position: absolute !important;\n                    width: 100%;\n                    height: 100%;\n                    opacity: 0;\n                }\n\n                svg {\n                    height: 2.4rem;\n                    fill: none;\n                    left: 0.3rem;\n                    position: absolute !important;\n                    top: 0.3rem;\n                    vertical-align: bottom;\n                    width: 2.4rem;\n                    z-index: 1;\n\n                    path{\n                        fill: black;\n                    }\n                }\n            }\n        `)
		}(),
		function addListeners() {
			_this.bindState(WatchPartyManager.instance().state, "active", onCreateRoom), _this.events.sub(VideoChatZones.CONNECTED, onChatZoneConnect), _this.events.sub(VideoChatZones.DISCONNECTED, onChatZoneDisconnect), $this.interact(handleHover, handleClick), _this.state.bind("isMuted", handleMute)
		}()
})), Class((function UITransparentModal({
	id: id
}) {
	Inherit(this, Element);
	const _this = this,
		$this = _this.element;

	function onResize() {
		Device.mobile && Stage.width > Stage.height && $this.overflowScroll({
			y: !0
		})
	}

	function animateOut() {
		$this.tween({
			opacity: 0,
			y: -10,
			x: StyleGuide.isMobile() && !StyleGuide.isLandscape() ? "-50%" : 0
		}, 400, "easeOutCubic", (_ => {
			$this.invisible(), $this.css({
				pointerEvents: "none"
			})
		}))
	}
	_this.id = id, _this.events.sub(Events.RESIZE, onResize), onResize(), $this.classList().add(`${id}`), $this.goob(`\n            & {\n                background: ${StyleGuide.colors.royalBlue};\n                box-shadow: -0.4rem 1rem 2.4rem var(--black10);\n                border-radius: 2rem;\n                color: var(--black);\n                max-width: calc(100vw - 1rem);\n                opacity: 0;\n                overflow: hidden;\n                ${StyleGuide.fluid("right",StyleGuide.lateralPadding)}\n                top: 11rem;\n                width: 33.4rem;\n                z-index: -1;\n\n                ${StyleGuide.smaller("tablet","\n                    @media (orientation: portrait) {\n                        left: 50%;\n                        transform: translateX(-50%);\n                        right: 0;\n                    }\n\n                    @media (orientation: landscape) {\n                        top: 9em;\n                    }\n                ")}\n\n                &.artworks {\n                    ${StyleGuide.smaller(StyleGuide.mobileBreakpoint,"\n                        @media (max-height: 680px) and (orientation: landscape) {\n                            width: 90vw;\n                        }\n                        z-index: 9999;\n                    ")}\n                    \n                }\n\n                .hit {\n                    position: absolute !important;\n                }\n            }\n        `), animateOut(), _this.animateIn = function animateIn() {
		$this.visible(), $this.css({
			pointerEvents: "all"
		}), $this.tween({
			opacity: 1,
			y: 0,
			x: StyleGuide.isMobile() && !StyleGuide.isLandscape() ? "-50%" : 0
		}, 400, "easeOutCubic")
	}, _this.animateOut = animateOut
})), Class((function UITransparentStylesOverrideController() {
	Inherit(this, Component);
	! function initStyles() {
		Stage.goob(`\n\n            /* DreamUI.Button */\n            .ButtonView {\n                color: var(--black);\n                background: transparent;\n                border-radius: 0.8rem;\n                border: 1px solid var(--black);\n                padding: 0.8rem 1.8rem;\n                text-align: center;\n                text-transform: uppercase;\n                .ButtonView__text {\n                    font: var(--ui-transparent-label1-regular);\n                }\n            }\n   \n            /* DreamUI.Tab */\n            .Tab__header {\n                background: ${StyleGuide.colors.royalBlue} !important;\n                border-bottom: 1px solid ${StyleGuide.colors.royalBlue};\n\n                display: flex;\n                justify-content: center;\n            }\n\n            .Tab__tabLabel {\n                text-transform: uppercase;\n                font: var(--ui-transparent-label5-bold);\n                font-size: 1.5rem;\n                color: #fff !important;\n\n                opacity: 1;\n                text-align: center;\n                padding: 2rem 0 1.7rem 0 !important;\n            }\n\n            .UITransparentVRContent, .UITransparentSettingsGeneral {\n                @media (max-height: 680px) and (orientation: landscape) {\n                    padding: 2.2rem;\n                    padding-top: 0rem;\n                }\n            }\n\n            \n            .Tab__tabLabel[aria-selected="true"] {\n                /*color: var(--black) !important;*/\n                color: #fff !important;\n            }\n\n            .Tab__bar {\n                background: var(--white);\n                height: 3px;\n                /* FIXME: */\n                left: 9%;\n            }\n\n            .UITransparentBarButton {\n                width: 3rem;\n                height: 3rem;\n                overflow: visible;\n\n                .background {\n                    background: ${StyleGuide.colors.royalBlue};\n                    border-radius: 50%;\n                    width: 120%;\n                    height: 120%;\n                    top: -10%;\n                    left: -10%;\n\n                    \n                }\n            }\n\n            /* DreamUI.Select */\n\n            .SelectView {\n\n                .inputWrapper {\n                    margin-left: 0;\n                    background: transparent;\n                    width: 100%;\n\n                    select {\n                        padding: 1rem 3rem 1rem 1rem;\n                        text-overflow: ellipsis;\n                        \n                        overflow: hidden;\n                        border-radius: 0.8rem;\n                        background: var(--black);\n                        color: var(--white);\n                        font: var(--ui-transparent-label1-regular);\n\n                        svg {\n                            stroke: var(--white);\n                            fill: var(--white);\n                            color: var(--white);\n                        }\n                    }\n                }\n            }\n\n        `)
	}(),
	function initAnimations() {
		DreamUI.ButtonAnimations.onHover = function({
			action: action
		}, button) {
			switch (action) {
				case "over":
					button.element.tween({
						backgroundColor: "var(--black)",
						color: "var(--white)"
					}, 200, "easeOutCubic");
					break;
				case "out":
					button.element.tween({
						backgroundColor: "transparent",
						color: "var(--black)"
					}, 400, "easeOutCubic")
			}
		}
	}()
}), "singleton"), Class((function UITransparentTabs({
	tabs: tabs
}) {
	Inherit(this, Element);
	const _this = this,
		$this = _this.element;

	function handleTabHover({
		action: action,
		object: object
	}) {
		switch (action) {
			case "over":
				object.tween({
					opacity: .5
				}, 200, "easeOutCubic");
				break;
			case "out":
				object.tween({
					opacity: 1
				}, 400, "easeOutCubic")
		}
	}

	function handleTabClick({
		object: object
	}) {
		_this.state.set("tab", object.id)
	}

	function handleChange(id) {
		let selected;
		_this.headerTabs.forEach((header => {
			header.element.id === id ? header.element.div.classList.add("active") : header.element.div.classList.remove("active")
		})), _this.contentTabs.forEach(((tab, index) => {
			tab.id === id ? (selected = index, tab.component.animateIn()) : tab.component.animateOut()
		})), _this.contentWrapper.tween({
			x: `-${100*selected}%`
		}, 400, "easeOutCubic")
	}
	_this.state = AppState.createLocal({
		tab: tabs[0].id
	}), async function() {
		! function initTabs() {
			_this.header = $this.create("header"), _this.headerTabs = tabs.map((tab => {
				let $label = _this.initClass(UICopyText, {
					copy: tab.name,
					customClass: "header__label"
				}, [_this.header]);
				return $label.element.id = tab.id, tab.disabled || $label.element.interact(handleTabHover, handleTabClick), $label
			}))
		}(),
		function initContent() {
			_this.content = $this.create("content"), _this.contentWrapper = _this.content.create("content__wrapper"), _this.contentTabs = tabs.map((({
				component: component,
				id: id
			}) => {
				let $element = _this.contentWrapper.create("tab");
				return $element.component = _this.initClass(component, [$element]), $element.id = id, $element
			}))
		}(),
		function initStyles() {
			$this.goob(`\n            & {\n\n            }\n\n            .header {\n                background: ${StyleGuide.colors.royalBlue};\n                display: flex;\n                padding: 0 3rem;\n            }\n\n            .header__label {\n                border-bottom: 2px solid transparent;\n                color: var(--black50);\n                font-size: 1.5rem;\n                font-weight: 900;\n                line-height: 105%;\n                padding: 2rem 0;\n                text-transform: uppercase;\n\n                &:not(:first-child) {\n                    margin-left: 2.2rem;\n                }\n\n                &.active {\n                    border-bottom-color: var(--black);\n                    color: var(--black);\n                }\n            }\n\n            .content {\n                \n                width: 100%;\n            }\n\n            .content__wrapper {\n                display: inline-block;\n                white-space: nowrap;\n                width: 100%;\n            }\n\n            .tab {\n                display: inline-block;\n                \n                vertical-align: top;\n                white-space: normal;\n                width: 100%;\n            }\n        `)
		}(), await _this.wait(500),
			function addListeners() {
				_this.bindState(_this.state, "tab", handleChange)
			}()
	}(), _this.change = id => {
		_this.state.set("tab", id)
	}
})), Class((function UITransparentArtworks({
	id: id,
	options: options
}) {
	Inherit(this, UITransparentModal, {
		id: id
	});
	const _this = this,
		$this = _this.element,
		TABS = [{
			id: "artworks",
			label: "Artworks",
			view: UITransparentArtworksList,
			viewOptions: {
				options: options
			}
		}];
	! function initElements() {
		_this.tabs = _this.initClass(DreamUI.Tab, {
			tabs: TABS
		}), _this.events.sub(_this.tabs, DreamUI.Tab.CHANGE, (({
			prevIndex: prevIndex,
			activeIndex: activeIndex
		}) => {
			activeTab = _this.tabs.contentTabs[activeIndex], prevTab = _this.tabs.contentTabs[prevIndex], activeTab?.view?.animateIn && activeTab.view.animateIn(), prevIndex > 0 && 0 === activeIndex && prevTab?.view?.animateOut && prevTab?.view?.animateOut()
		}))
	}(),
	function initStyles() {
		$this.goob("\n          & {\n            \n          }\n\n          * {\n              position: relative !important;\n          }\n      ")
	}()
})), Class((function UITransparentArtworksList({
	options: options
}) {
	Inherit(this, Element), Inherit(this, StateComponent);
	const _this = this,
		$this = _this.element;
	let _items = {};

	function onVisited(active) {
		if (!active) return;
		const hotspot = HotSpotStore.get("hotspot");
		hotspot && hotspot.id && _items[hotspot.id].link.classList().add("visited")
	}!async function() {
		! function addLinkToPortal() {
			let $link = $this.create("link-portal");
			$link.text("Go to Portal"), $link.interact((e => {}), (e => {
				e.preventDefault(), e.stopPropagation();
				const pos = new Vector3(-16.3, 1.14, 0);
				_this.events.fire(HotSpotManager.TELEPORT_POSITION, pos), UITransparentBar.instance().collapseActiveModal()
			}))
		}(),
		function initList() {
			let $list = $this.create("list");
			Gallery.activeHotspots.forEach((item => {
				const title = item.artPiece.title,
					hotspot = item.hotspot.slug.current,
					$wrapper = $list.create("item-wrapper"),
					$artwork = $wrapper.create("item-artwork"),
					visual = item?.artPiece?.galleryVisual;
				let img;
				const dpr = Device.pixelRatio || 1;
				img = visual.video ? SanityImageUrlBuilder.build(visual.poster).width(400).quality(80).dpr(dpr).url() : SanityImageUrlBuilder.build(visual.image).width(400).quality(80).dpr(dpr).url();
				const $img = $artwork.create("item-artwork-img", "img");
				$img.attr("src", img), $img.attr("alt", title), $artwork.transform({
					rotation: Math.rand(-25, 25, 1),
					x: "-50%",
					y: "45%"
				});
				const link = $wrapper.create("item", "a");
				link.text(title), link.attr("href", "#"), link.attr("data-hotspot", hotspot), $wrapper.interact((e => {
					! function handleItemHover(e, id) {
						switch (e.action) {
							case "over":
								_items[id].artWork.tween({
									opacity: 1,
									y: "50%"
								}, 400, "easeOutCubic"), _items[id].link.tween({
									scale: 1.1
								}, 400, "easeOutCubic"), _items[id].link.classList().add("hover");
								break;
							case "out":
								_items[id].artWork.tween({
									opacity: 0,
									y: "55%"
								}, 400, "easeOutCubic"), _items[id].link.tween({
									scale: 1
								}, 400, "easeOutCubic"), _items[id].link.classList().remove("hover")
						}
					}(e, hotspot)
				}), (_ => {
					_this.events.fire(HotSpotManager.TELEPORT, hotspot), UITransparentBar.instance().collapseActiveModal()
				})), _items[hotspot] = {
					link: link,
					artWork: $artwork
				}
			}))
		}(),
		function initStyles() {
			$this.goob(`\n        \t& {\n          \t\tpadding: 3rem;\n                padding-top: 1.5rem;\n          \t    background-color: ${StyleGuide.colors.royalBlue};\n\n                \n                ${StyleGuide.smaller(StyleGuide.mobileBreakpoint,"\n                    @media (max-height: 680px) and (orientation: landscape) {\n                        padding: 0rem;\n                    }\n                ")}\n          \t}\n\n          \t.title {\n          \t    font: var(--ui-transparent-label2-bold);\n          \t    margin-bottom: 1vh;\n          \t    text-transform: uppercase;\n\n                \n          \t}\n\n              .list {\n                height: 64vh;\n                max-height: 64vh;\n                display: flex;\n                flex-flow: column nowrap;\n                justify-content: space-around;\n                align-items: center;\n\n                ${StyleGuide.smaller(StyleGuide.heightBreakpoint.medium,"\n                    height: 50vh;\n                ","height")}\n\n                \n                ${StyleGuide.smaller(StyleGuide.mobileBreakpoint,"\n                    @media (max-height: 680px) and (orientation: landscape) {\n                        flex-flow: row wrap;\n                        align-items: flex-start;\n                        justify-content: space-between;\n                        height: 40vh;\n                    }\n                ")}\n              }\n\n              .link-portal {\n                ${StyleGuide.manropeSemibold}\t\t\t\t\n\t\t\t\t${StyleGuide.fluid("font-size",{mob:13,l:13})}\t\n                color: ${StyleGuide.colors.white};\n                display: block;\n                z-index: 99;\n          \t  \ttext-align: center;\n                margin-bottom: 12px;\n              }\n\n          \t.item {\n        \t\t\n          \t  \tfont-size: 12px;\n          \t  \ttext-align: center;\n          \t  \t\n\t\t\t\t${StyleGuide.manropeSemibold}\t\t\t\t\n\t\t\t\t${StyleGuide.fluid("font-size",{mob:13,l:13})}\t\n\t\t\t\tcolor: ${StyleGuide.colors.white};\n                z-index: 99;\n                transition: color 0.4s ${TweenManager._getEase("easeOutCubic")};\n\n                &::before {\n                    content: "";\n                    height: 1px;\n                    width: 100%;\n                    background-color: ${StyleGuide.colors.white};\n                    transform: scaleX(0);\n                    position: absolute !important;\n                    bottom: 0;\n                    left: 0;\n                    transition: transform 0.4s ${TweenManager._getEase("easeOutCubic")};\n                    transform-origin: right;\n                }\n\n                &.hover {\n                    &::before {\n                        transform-origin: left;\n                        transform: scaleX(1);\n                    }\n                }\n          \t}\n\n\t\t\t.item-wrapper {\n                display: flex;\n                align-items: center;\n                justify-content: center;\n\n                ${StyleGuide.smaller(StyleGuide.mobileBreakpoint,"\n                    @media (max-height: 680px) and (orientation: landscape) {\n                        width: 25%;\n                    }     \n                ")}\n\n\t\t\t\t.item-artwork {\n                    position: absolute !important;\n                    width: 150px;\n                    height: 150px;\n                    \n                    bottom: 50%;\n                    left: 50%;\n                    opacity: 0;\n                    z-index: 2;\n\n                    .item-artwork-img {\n                        object-fit: cover;\n                        width: 100%;\n                        height: 100%;\n                    }\n\n                    &::after {\n                        content: "";\n                        display: block;\n                        position: absolute !important;\n                        top: 0;\n                        left:0;\n                        width: 100%;\n                        height: 100%;\n                        background-color: rgba(0,0,0,0.2);\n                        z-index: 3;\n                    }\n\t\t\t\t}\n\t\t\t}\n\n          \t.item.visited {\n          \t  color: #2D2D9E;\n\n                &::before {\n                    background-color: #2D2D9E;\n                }\n          \t}\n\n          \t.item + .item {\n          \t  margin-top: 4px;\n          \t}\n      `)
		}(), await _this.wait((_ => "undefined" != typeof HotSpotStore)),
			function addListeners() {
				_this.bindState(HotSpotStore, "active", onVisited)
			}()
	}()
})), Class((function UITransparentEmotePicture() {
	Inherit(this, Element);
	const _this = this,
		$this = _this.element;
	async function handleRouteUpdate() {
		let env = await DreamWorld.getActiveEnvironment();
		env.emotes ? ($this.show(), _this.uniforms = await env.emotes.uniforms, _this.image = Assets.getPath(_this.uniforms.tMap.value.src), _this.length = _this.uniforms.uLength.value, _this.buttonIcon.css({
			backgroundImage: `url(${_this.image})`
		})) : ($this.hide(), console.log("this environment has no emojis"))
	}
	async function handleValueChange(value) {
			await _this.wait("length"), _this.buttonIcon.css({
				backgroundPosition: `0 -${100*(_this.length-parseInt(value)-1)}%`
			})
		}! function initHTML() {
			_this.buttonIcon = $this.create("icon")
		}(),
		function initStyles() {
			$this.goob("\n            & {\n                width: 100%;\n                height: 100%;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n            }\n\n            .icon {\n                width: 79%;\n                height: 79%;\n                background-size: 100%;\n            }\n        ")
		}(), async function addHandlers() {
			_this.bindState(PlayerSettings.instance().state, "emote", handleValueChange), _this.events.sub(Router, Router.UPDATE, handleRouteUpdate), await handleRouteUpdate()
		}()
})), Class((function UITransparentEmotes({
	id: id
}) {
	Inherit(this, UITransparentModal, {
		id: id
	});
	const _this = this,
		$this = _this.element;

	function keyPress(e) {
		if ("f" === e.key) handleEmoteOptionClick({
			object: {
				value: PlayerSettings.instance().state.emote
			}
		});
		else handleEmoteOptionClick({
			object: {
				value: 9 - e.key
			}
		})
	}
	async function handleRouteUpdate() {
		let env = await DreamWorld.getActiveEnvironment();
		env.emotes ? (_this.uniforms = await env.emotes.uniforms, _this.image = Assets.getPath(_this.uniforms.tMap.value.src), _this.length = _this.uniforms.uLength.value) : $this.hide()
	}

	function handleOptionHover({
		action: action,
		object: object
	}) {
		switch (action) {
			case "over":
				object.tween({
					opacity: .6
				}, 100, "easeOutCubic");
				break;
			case "out":
				object.tween({
					opacity: 1
				}, 300, "easeOutCubic")
		}
	}

	function handleEmoteOptionClick({
		object: object
	}) {
		isNaN(object.value) || object.value < 0 || object.value > 10 || (PlayerSettings.instance().state.emote = object.value, _this.events.fire(SkinnedAvatar.TRIGGER_ANIMATION, {
			animation: Number(9 - object.value) + 4
		}), _this.events.fire(Emotes.FIRE, {
			index: PlayerSettings.instance().state.emote
		}))
	}! function initElement() {
		_this.list = $this.create("list"), Device.mobile || (_this.title = _this.initClass(UICopyText, {
			copy: "emotesDescription",
			customClass: "list__title"
		}, [_this.list])), _this.listWrapper = _this.list.create("list__wrapper"), async function initEmotes() {
			await _this.wait("length"), _this.listButtons = [];
			for (let i = _this.length - 1; i > -1; i--) {
				let $button = _this.listWrapper.create("list__button"),
					index = _this.length - i - 1;
				$button.interact(handleOptionHover, handleEmoteOptionClick), $button.value = i, $button.css({
					backgroundImage: `url(${_this.image})`,
					backgroundPosition: `0 -${100*index}%`
				}), Device.mobile || ($button.label = $button.create(".label"), $button.label.text(_this.length - i)), _this.listButtons.push($button)
			}
		}()
	}(),
	function initStyles() {
		$this.goob("\n            & {\n\n            }\n\n            * {\n                position: relative !important;\n            }\n\n            .list {\n                flex-wrap: wrap;\n                padding: 1.5rem;\n            }\n\n            .list__title {\n                font: var(--ui-transparent-label2-regular);\n                color: var(--black);\n                text-align: left;\n                position: relative !important;\n                white-space: nowrap;\n                margin-bottom: 1rem;\n                width: 100%;\n            }\n\n            .list__wrapper {\n                display: flex;\n                position: relative !important;\n                padding-bottom: 1rem;\n            }\n\n            .list__button {\n                background-size: 2.6rem;\n                height: 2.6rem;\n                position: relative !important;\n                width: 2.6rem;\n\n                &:not(:first-of-type) {\n                    margin-left: 1rem;\n                }\n\n                .label { \n                    width: 100%;\n                    font: var(--ui-transparent-label1-regular);\n                    top: 100%;\n                    color: var(--black70);\n                    text-align: center;\n                }\n            }\n        ")
	}(), async function addHandlers() {
		_this.events.sub(Router, Router.UPDATE, handleRouteUpdate), _this.events.sub(Keyboard.DOWN, keyPress), await handleRouteUpdate()
	}()
})), Class((function UITransparentProfile({
	id: id,
	avatars: avatars,
	colors: colors,
	username: username
}) {
	Inherit(this, UITransparentModal, {
		id: id
	});
	const _this = this,
		$this = _this.element;
	! function initElements() {
		_this.header = $this.create(".header"), _this.headerTitle = _this.initClass(UICopyText, {
			copy: "profileTitle",
			customClass: "header__title"
		}, [_this.header]), _this.body = $this.create(".body"), username && (_this.username = _this.initClass(UITransparentProfileUser, {
			username: username
		}, [_this.body])), avatars && (_this.avatars = _this.initClass(UITransparentProfileAvatars, {
			avatars: avatars
		}, [_this.body])), colors && (_this.colors = _this.initClass(UITransparentProfileColors, {
			colors: colors
		}, [_this.body]))
	}(),
	function initStyles() {
		$this.goob("\n            * {\n                position: relative !important;\n            }\n\n            .header {\n                height: 6.2rem;\n                display: flex;\n                align-items: center;\n                justify-content: space-between;\n                padding: 0 2.0rem;\n                background: linear-gradient(204.23deg, var(--white70) 24.85%, var(--white70) 99.34%);\n                border-bottom: 1px solid var(--black20);\n            }\n\n            .header__title {\n                font: var(--ui-transparent-label5-bold);\n                text-transform: uppercase;\n            }\n\n            .body {\n                padding: 2.0rem 2.5rem;\n\n                .dances {\n                    display: flex;\n                    justify-content: space-between;\n                    align-items: center;\n                    margin-top: 1rem;\n\n                    .dances__label {\n                        font: var(--ui-transparent-label2-regular);\n                        color: var(--black);\n                        letter-spacing: 0.02rem;\n                    }\n\n                    .Select {\n                        width: 18rem;\n                        border-radius: 0.8rem;\n\n                        select {\n                            border-radius: 0.8rem;\n                            font: var(--ui-transparent-label2-regular);\n                            letter-spacing: 0.02rem;\n                        }\n                    }\n                }\n            }\n        ")
	}(), _this.animateIn = async _ => {
		_this._animateIn(), (await (await DreamWorld.getActiveEnvironment()).awaitPlayerController()).controls.cameraFitment.avatarEditMode()
	}
})), Class((function UITransparentProfileAvatars({
	avatars: avatars
}) {
	Inherit(this, Element);
	const _this = this,
		$this = _this.element;
	! function initHTML() {
		_this.avatars = $this.create("avatars"), _this.avatarsLabel = _this.initClass(UICopyText, {
			copy: "profileAvatarAvatars",
			customClass: "avatars__label"
		}, [_this.avatars]);
		let options = avatars.map(((avatar, index) => ({
			text: avatar.label,
			selected: Assets.getPath(`~assets/images/avatar/${avatar.value}`) === PlayerModel.get("image"),
			value: Assets.getPath(`~assets/images/avatar/${avatar.value}`)
		})));
		_this.avatarsDropdown = _this.initClass(DreamUI.Select, {
			id: "avatar-select",
			options: options
		}, [_this.avatars]), _this.events.sub(_this.avatarsDropdown, DreamUI.Select.CHANGE, (async ({
			value: value
		}) => {
			PlayerModel.set("image", value), PlayerSettings.instance().state.image = value
		}))
	}(),
	function initStyles() {
		$this.goob("\n            & {\n                position: relative !important;\n\n                &:not(:first-child) {\n                    margin-top: 1rem;\n                    padding-top: 1rem;\n                }\n            }\n\n            .avatars {\n                align-items: center;\n                display: flex;\n                justify-content: space-between;\n\n                .Select {\n                    width: 18rem;\n                    border-radius: 0.8rem;\n\n                    select {\n                        border-radius: 0.8rem;\n                        font: var(--ui-transparent-label2-regular);\n                        letter-spacing: 0.02rem;\n                    }\n                }\n            }\n\n            .avatars__label {\n                color: var(--black);\n                font: var(--ui-transparent-label2-regular);\n                letter-spacing: 0.02rem;\n            }\n        ")
	}()
})), Class((function UITransparentProfileColors({
	colors: colors
}) {
	Inherit(this, Element);
	const _this = this,
		$this = _this.element;

	function handleColor(color) {
		_this.colorsButtons.forEach((button => {
			button.value === color ? (button.activated = !0, button.border.tween({
				opacity: 1,
				scale: 1.5
			}, 400, "easeOutCubic")) : (button.activated = !1, button.border.tween({
				opacity: 0,
				scale: 1
			}, 400, "easeOutCubic"))
		}))
	}

	function handleButtonHover({
		action: action,
		object: object
	}) {
		switch (action) {
			case "over":
				object.tween({
					opacity: object.activated ? 1 : .7
				}, 400, "easeOutCubic");
				break;
			case "out":
				object.tween({
					opacity: 1
				}, 400, "easeOutCubic")
		}
	}

	function handleButtonClick({
		object: object
	}) {
		PlayerSettings.instance().state.color = object.value
	}! function initHTML() {
		_this.colors && _this.colors.remove(), _this.colors = $this.create("colors"), _this.colorsLabel = _this.initClass(UICopyText, {
			copy: "profileAvatarColor",
			customClass: "colors__label"
		}, [_this.colors]), _this.colorsList = _this.colors.create("colors__list"), _this.colorsButtons = colors.map((option => function initOption(option) {
			let $button = _this.colorsList.create("colors__button", "button");
			return $button.goob({
				background: option.value
			}), $button.color = !0, $button.border = $button.create("colors__button__border"), $button.border.css({
				border: "1px solid var(--black)"
			}), $button.multiTween = !0, $button.value = option.value, $button.interact(handleButtonHover, handleButtonClick), $button
		}(option)))
	}(),
	function initStyles() {
		$this.goob("\n            & {\n                position: relative !important;\n\n                &:not(:first-child) {\n                    margin-top: 1rem;\n                    padding-top: 1rem;\n                    margin-bottom: 1.5rem;\n                }\n            }\n\n            .colors {\n                align-items: center;\n                display: flex;\n                justify-content: space-between;\n            }\n\n            .colors__label {\n                font: var(--ui-transparent-label2-regular);\n                color: var(--black);\n                letter-spacing: 0.02rem;\n            }\n\n            .colors__list {\n                align-items: center;\n                display: flex;\n                flex-wrap: wrap;\n                justify-content: left;\n                width: 18rem;\n                gap: 7px;\n            }\n\n            .colors__button {\n                border: 1px solid var(--black30);\n                border-radius: 100%;\n                height: 1.8rem;\n                width: 1.9rem;\n                box-shadow: 0.4rem 0.4rem 1.8rem var(--black10);\n            }\n\n            .colors__button__border {\n                border-radius: 100%;\n                height: 100%;\n                left: 0;\n                position: absolute !important;\n                top: 0;\n                transform: scale(0.8);\n                opacity: 0;\n                pointer-events: none;\n                width: 100%;\n                z-index: 2;\n            }\n        ")
	}(),
	function addHandlers() {
		_this.bindState(PlayerSettings.instance().state, "color", handleColor)
	}()
})), Class((function UITransparentProfilePicture(playerColor) {
	Inherit(this, Element);
	const _this = this,
		$this = _this.element;

	function handleImage(event) {}

	function handleColor(color) {
		_this.picture.tween({
			background: color
		}, 400, "easeOutCubic")
	}! function initElements() {
		_this.picture = $this.create("picture"), playerColor ? _this.picture.css({
			background: `rgb( ${255*playerColor[0]},${255*playerColor[1]}, ${255*playerColor[2]} )`
		}) : _this.picture.css({
			background: PlayerSettings.instance().state.color
		}), _this.pictureImage = $this.create("picture__image", "img"), _this.pictureImage.attr("src", PlayerModel.get("image"))
	}(),
	function initStyles() {
		$this.goob("\n            & {\n                height: 6rem;\n                position: relative !important;\n                width: 6rem;\n                overflow: visible;\n            }\n\n            .picture {\n                background: var(--white);\n                border-radius: 100%;\n                border: 1px solid var(--black20);\n                height: 100%;\n                position: absolute !important;\n                width: 100%;\n                z-index: 0;\n                overflow: visible;\n                mix-blend-mode: multiply;\n                z-index: 2;\n            }\n\n            .picture__image {\n                border-radius: 100%;\n                display: block;\n                height: 88%;\n                margin: 6%;\n                overflow: visible;\n                object-fit: contain;\n                width: 88%;\n                z-index: 1;\n            }\n        ")
	}(),
	function addHandlers() {
		_this.events.sub(PlayerModel, PlayerModel.UPDATE, handleImage), _this.bindState(PlayerSettings.instance().state, "color", handleColor)
	}(), this.setSize = function(width, height) {
		$this.css({
			width: width,
			height: height
		})
	}, this.toggleBlendMode = function() {
		_this.state.set("isBlendMode", !_this.state.get("isBlendMode"))
	}
})), Class((function UITransparentProfileUser({
	username: username = !0
}) {
	Inherit(this, Element);
	const _this = this,
		$this = _this.element;

	function handleAddUserName() {
		_this.events.fire(PlayerControls.ENABLE_STATE_CHANGE, {
			enabled: !1
		}), _this.$userName.usernameContainer.transform({
			y: 5
		}), _this.$userName.usernameContainer.tween({
			opacity: 1,
			y: 0
		}, 300, "easeOutCubic"), _this.$userName.button.tween({
			opacity: 0,
			padding: 22
		}, 300, "easeOutCubic"), Track.event("edit_profile_username", "clicked")
	}

	function handleSave() {
		_this.events.fire(PlayerControls.ENABLE_STATE_CHANGE, {
			enabled: !0
		}), _this.$userName.usernameContainer.input.div.value && "" !== _this.$userName.usernameContainer.input.div.value ? (PlayerModel.set("name", DreamWords.clean(_this.$userName.usernameContainer.input.div.value)), Storage.set("username", PlayerModel.get("name")), _this.$userName.usernameContainer.tween({
			opacity: 0,
			y: 5
		}, 300, "easeOutCubic"), _this.$userName.button.text.text(PlayerModel.get("name")), _this.$userName.button.tween({
			opacity: 1,
			padding: 0
		}, 300, "easeOutCubic"), _this.$editButton.css({
			display: "unset"
		}), _this.$userName.button.css({
			border: "none",
			fontWeight: "bold"
		})) : (Storage.set("username", ""), _this.$userName.usernameContainer.tween({
			opacity: 0,
			y: 5
		}, 300, "easeOutCubic"), _this.$userName.button.tween({
			opacity: 1,
			padding: "6px 8px"
		}, 300, "easeOutCubic"), _this.$userName.button.css({
			textTransform: "none",
			fontWeight: "normal"
		}), _this.$userName.button.text.text(UICopy.state.get("profileAddName")), _this.$editButton.css({
			display: "none"
		}))
	}

	function handleCancel() {
		_this.events.fire(PlayerControls.ENABLE_STATE_CHANGE, {
			enabled: !0
		}), _this.$userName.usernameContainer.tween({
			opacity: 0,
			y: 5
		}, 300, "easeOutCubic"), _this.$userName.button.text.text() !== UICopy.state.get("profileAddName") ? _this.$userName.button.tween({
			opacity: 1,
			padding: 0
		}, 300, "easeOutCubic") : _this.$userName.button.tween({
			opacity: 1,
			padding: "6px 8px"
		}, 300, "easeOutCubic")
	}! function initElements() {
		if (_this.picture = _this.initClass(UITransparentProfilePicture), _this.$wrapperText = $this.create(".wrapper__text"), _this.$userLocation = _this.$wrapperText.create(".user__location"), _this.delayedCall((() => {
				_this.$userLocation.text(PlayerModel.get("location"))
			}), 3e3), _this.$userName = _this.$wrapperText.create(".user__name"), _this.$userName.button = _this.$userName.create(".user__addButton"), _this.$userName.button.text = _this.$userName.button.create(".user__buttonText"), username) {
			_this.$userName.button.text.text(UICopy.state.get("profileAddName")), _this.$userName.button.interact(null, handleAddUserName), _this.$editButton = _this.$userName.button.create(".user__editButton"), _this.$editButton.text(UICopy.state.get("profileEditName")), _this.$userName.usernameContainer = _this.$userName.create(".user__usernameContainer");
			let container = _this.$userName.usernameContainer;
			container.input = container.create("user__input", "input"), container.input.attr("maxlength", "20"), container.input.attr("oninput", "this.value = this.value.replace(/[^a-zA-Z0-9 ]/g, '')"), container.input.div.placeholder = UICopy.state.get("profileAddName");
			let buttons = container.create("user__buttons");
			container.cancel = buttons.create("user__cancelButton"), container.cancel.text(UICopy.state.get("profileCancel")), container.cancel.interact(null, handleCancel), container.save = buttons.create("user__saveButton"), container.save.text(UICopy.state.get("profileSave")), container.save.interact(null, handleSave);
			let username = Storage.get("username");
			username && "" !== username ? (username = username.replace(/[^a-zA-Z0-9 ]/g, ""), username.length > 20 && (username = username.substring(0, 20)), PlayerModel.set("name", username), _this.$userName.button.text.text(username), _this.$userName.button.css({
				border: "none",
				fontWeight: "bold",
				padding: 0
			}), _this.$userName.usernameContainer.input.div.value = username, _this.$editButton.css({
				display: "unset"
			})) : PlayerModel.set("name", PlayerModel.get("location"))
		} else _this.$userName.button.css({
			border: "none",
			fontWeight: "bold",
			padding: 0
		}), _this.$userName.button.text.text(PlayerModel.get("name"))
	}(),
	function initStyles() {
		$this.goob("\n            & {\n                display: flex;\n                align-items: center;\n                padding-bottom: 0rem;\n                height: 8rem;\n                position: relative !important;\n            }\n\n            .wrapper__text {\n                margin-left: 2.2rem;\n                width: 20rem;\n            }\n\n            .user__location {\n                font: var(--ui-transparent-label1-regular);\n            }\n\n            .user__name {\n                font: var(--ui-transparent-label2-regular);\n                letter-spacing: 0.02em;\n                margin-top: 7px;\n\n                .user__addButton {\n                    font: var(--ui-transparent-label5-regular);\n                    padding: 8px 10px;\n                    border-radius: 0.8rem;\n                    border: 1px solid var(--black);\n                    width: max-content;\n                    display: flex;\n                    align-items: center;\n                    justify-content: center;\n                    text-transform: none;\n\n                    .user__buttonText {\n                        max-width: 200px;\n                        text-overflow: ellipsis;\n                        overflow: hidden;\n                        line-height: 100%;\n                    }\n\n                    .user__editButton {\n                        margin-left: 7px;\n                        font: var(--ui-transparent-label2-regular);\n                        text-decoration: underline;\n                        display: none;\n                        text-transform: none;\n                        color: var(--black80);\n                    }\n\n                    &:hover .user__editButton {\n                        text-decoration: none;\n                    }\n                }\n\n                .user__usernameContainer {\n                    position: absolute !important;\n                    top: 0px;\n                    opacity: 0;\n\n                    .user__input {\n                        border: 1px solid var(--black40);\n                        box-sizing: border-box;\n                        border-radius: 0.8rem;\n                        color: var(--black);\n                        background: none;\n                        padding: 10px;\n                        width: 100%;\n                    }\n\n                    .user__buttons {\n                        display: flex;\n                        margin-top: 7px;\n                        gap: 7px;\n                    }\n\n                    .user__saveButton, .user__cancelButton {\n                        padding: 6px 8px;\n                        border-radius: 0.8rem;\n                        border: 1px solid var(--black);\n                        width: max-content;\n                        letter-spacing: 0.01em;\n                    }\n                }\n            }\n        ")
	}()
})), Class((function UITransparentSettings({
	id: id,
	options: options
}) {
	Inherit(this, UITransparentModal, {
		id: id
	});
	const _this = this,
		$this = _this.element,
		TABS = [{
			id: "general",
			label: UICopy.state.get("settingsTabGeneral"),
			view: UITransparentSettingsGeneral,
			viewOptions: {
				options: options
			}
		}];
	Device.mobile || TABS.push({
			id: "audio",
			label: UICopy.state.get("settingsTabAudio"),
			view: UITransparentSettingsAudio
		}),
		function initElements() {
			_this.tabs = _this.initClass(DreamUI.Tab, {
				tabs: TABS
			}), _this.events.sub(_this.tabs, DreamUI.Tab.CHANGE, (({
				prevIndex: prevIndex,
				activeIndex: activeIndex
			}) => {
				activeTab = _this.tabs.contentTabs[activeIndex], prevTab = _this.tabs.contentTabs[prevIndex], activeTab?.view?.animateIn && activeTab.view.animateIn(), prevIndex > 0 && 0 === activeIndex && prevTab?.view?.animateOut && prevTab?.view?.animateOut()
			}))
		}(),
		function initStyles() {
			$this.goob("\n            & {\n\n            }\n\n            * {\n                position: relative !important;\n            }\n        ")
		}()
})), Class((function UITransparentSettingsAudio() {
	Inherit(this, Element);
	const _this = this,
		$this = _this.element;
	let _inputs, _outputs;

	function handleMediaAccess(state) {
		switch (state) {
			case "success":
				_this.content.css({
					display: "block"
				}), _this.warning.css({
					display: "none"
				});
				break;
			case "fail":
				_this.content.css({
					display: "none"
				}), _this.warning.css({
					display: "block"
				})
		}
	}

	function handleInputChange({
		value: value
	}) {
		let option = _inputs.find((input => input.deviceId === value));
		GameCenterMedia.userStream.setAudioSource(option)
	}

	function handleOutputChange({
		value: value
	}) {
		let option = _outputs.find((output => output.deviceId === value));
		GameCenterMedia.userStream.setAudioOutputSource(option)
	}

	function handleTestClick() {
		_this.audio.play()
	}!async function() {
		await Hydra.ready(), await Config.ready(), await PlatformDB.ready(),
			function initContent() {
				_this.content = $this.create("content")
			}(),
			function initWarning() {
				_this.warning = $this.create("warning"), _this.warningTitle = _this.initClass(UICopyText, {
					copy: "settingsSoundBlockedTitle",
					customClass: "warning__title"
				}, [_this.warning]), _this.warningDescription = _this.initClass(UICopyText, {
					copy: "settingsSoundBlockedDescription",
					customClass: "warning__description"
				}, [_this.warning])
			}(),
			function initStyles() {
				$this.goob("\n            & {\n                padding: 3rem;\n            }\n\n            * {\n                position: relative !important;\n            }\n\n            .field {\n                &:not(:last-child) {\n                    margin-bottom: 2rem;\n                }\n            }\n\n            .label {\n                display: block;\n                font: var(--ui-transparent-label2-regular);\n                line-height: 110%;\n                letter-spacing: 0.02em;\n                margin-bottom: 0.8rem;\n            }\n\n            .output {\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n            }\n\n            .test {\n                font: var(--ui-transparent-label1-regular);\n                letter-spacing: 0.02em;\n                text-decoration-line: underline;\n                text-decoration-color: #9D9D9B;\n                text-transform: uppercase;\n                transition: opacity 0.4s ease;\n\n                &:hover {\n                    opacity: 0.5;\n                }\n            }\n\n            .warning {\n\n            }\n\n            .warning__title {\n                font: var(--ui-transparent-label5-heavy);\n                margin-bottom: 1rem;\n            }\n\n            .warning__description {\n                font: var(--ui-transparent-label5-regular);\n            }\n        ")
			}(), _this.bindState(GameCenterMedia.state, "hasMediaAccess", handleMediaAccess), _this.flag("inChat", !1), _this.events.sub(VideoChatZones.CONNECTED, (() => _this.flag("inChat", !0))), _this.events.sub(VideoChatZones.DISCONNECTED, (() => _this.flag("inChat", !1))), _this.events.sub(WatchPartyManager.PLAYER_CONNECTED, (() => _this.flag("inChat", !0))), _this.events.sub(WatchPartyManager.PLAYER_DISCONNECTED, (() => _this.flag("inChat", !1)))
	}(), _this.animateIn = async _ => {
		_this.media ? _this.media.enableAudio() : (_this.media = await GameCenterMedia.getUserStreamReference(0, 0, !0), _inputs?.length && _outputs?.length || (await async function initInput() {
			_inputs = await _this.media.getAudioInputs(), _this.input = _this.content.create("field"), _this.inputLabel = _this.initClass(UICopyText, {
				copy: "settingsSoundMicrophone",
				customClass: "label"
			}, [_this.input]);
			let options = _inputs.map((option => ({
				text: option.label,
				selected: option.selected,
				value: option.deviceId
			})));
			_this.inputField = _this.initClass(DreamUI.Select, {
				id: "audio-input",
				options: options
			}, [_this.input]), _this.events.sub(_this.inputField, DreamUI.Select.CHANGE, handleInputChange)
		}(), "firefox" !== Device?.system?.browser && await async function initOutput() {
			_outputs = await _this.media.getAudioOutputs(), _this.output = _this.content.create("field"), _this.outputHeader = _this.output.create("output"), _this.outputLabel = _this.initClass(UICopyText, {
				copy: "settingsSoundSpeakers",
				customClass: "label"
			}, [_this.outputHeader]), _this.audio = new Audio, _this.audio.src = "assets/audio/test2.mp3", _this.outputTest = _this.initClass(UICopyText, {
				copy: "settingsSoundSpeakersText",
				customClass: "test"
			}, [_this.outputHeader]), _this.outputTest.element.interact(null, handleTestClick);
			let options = _outputs.map((option => ({
				text: option.label,
				selected: option.selected,
				value: option.deviceId
			})));
			_this.outputField = _this.initClass(DreamUI.Select, {
				id: "audio-output",
				options: options
			}, [_this.output]), _this.events.sub(_this.outputField, DreamUI.Select.CHANGE, handleOutputChange)
		}()))
	}, _this.animateOut = _ => {
		_this.media && !_this.flag("inChat") && _this.media.disableAudio()
	}
})), Class((function UITransparentSettingsCamera() {
	Inherit(this, Element);
	const _this = this,
		$this = _this.element;
	let $video, _inputs;

	function handleInputChange(event) {
		let value = undefined.div.value,
			option = _inputs.find((input => input.deviceId === value));
		GameCenterMedia.userStream.setVideoSource(option)
	}

	function handleMediaAccess(state) {
		state
	}!async function() {
		await Hydra.ready(), await Config.ready(), await PlatformDB.ready(), $video = $this.create("video", "video"),
			function initStyles() {
				$this.goob("\n            padding: 2rem 3rem;\n            padding-top: 1rem;\n            display: flex;\n            flex-direction: column;\n            gap: 9px;\n\n            * {\n                position: relative !important;\n            }\n\n            .video {\n                display: block;\n                margin-bottom: 1rem;\n                margin-top: 1.5rem;\n                min-height: 15rem;\n                border-radius: 0.8rem;\n                width: 100%;\n                background: var(--black50);\n                border: 1px solid var(--black);\n            }\n\n            .label {\n                display: block;\n                font-size: 1.6rem;\n            }\n\n            .field {\n                border: 1px solid var(--black);\n                box-sizing: border-box;\n                border-radius: 0.8rem;\n                padding: 3px 0 4px 10px;\n                margin-bottom: 10px;\n\n                svg {\n                    height: 2rem;\n                    position: absolute !important;\n                    right: 5px;\n                    top: 50%;\n                    transform: translateY(-50%);\n                    width: 2rem;\n                    pointer-events: none;\n                }\n            }\n\n            .field__select {\n                appearance: none;\n                background: none;\n                border-color: rgba(255, 255, 255, 0.1);\n                border-style: solid;\n                border-width: 0 0 1px 0;\n                color: inherit;\n                font-family: inherit;\n                font-size: 12px;\n                line-height: 110%;\n                letter-spacing: 0.01em;\n                opacity: 0.5;\n                padding: 0;\n                width: 100%;\n                padding-right: 30px;\n                text-overflow: ellipsis;\n            }\n\n        ")
			}(), _this.bindState(GameCenterMedia.state, "hasMediaAccess", handleMediaAccess), _this.flag("inChat", !1), _this.events.sub(VideoChatZones.CONNECTED, (() => {
				_this.flag("inChat", !0)
			})), _this.events.sub(VideoChatZones.DISCONNECTED, (() => {
				_this.flag("inChat", !1)
			})), _this.events.sub(WatchPartyManager.PLAYER_CONNECTED, (() => _this.flag("inChat", !0))), _this.events.sub(WatchPartyManager.PLAYER_DISCONNECTED, (() => {
				_this.flag("inChat", !1)
			}))
	}(), _this.animateIn = async () => {
		_this.media ? (_this.media.enableAudio(), _this.media.enableVideo()) : (_this.media = await GameCenterMedia.getUserStreamReference(100, 100, !0), _inputs?.length || (await async function initInput() {
			_inputs = await _this.media.getVideoInputs(), _this.input = $this.create("input");
			let options = _inputs.map((option => ({
				text: option.label,
				selected: option.selected,
				value: option.deviceId
			})));
			_this.inputField = _this.initClass(DreamUI.Select, {
				id: "camera-input",
				options: options
			}, [_this.input]), _this.events.sub(DreamUI.Select.CHANGE, _this.inputField, handleInputChange)
		}(), await async function initVideo() {
			$video.attr("autoplay", "true");
			let stream = await _this.media.getStream();
			stream && ($video.div.srcObject = stream.srcObject, $video.div.play(), $video.div.volume = .001)
		}()))
	}, _this.animateOut = async () => {
		_this.media && !_this.flag("inChat") && (_this.media.disableVideo(), _this.media.disableAudio())
	}
})), Class((function UITransparentSettingsGeneral({
	options: options
}) {
	Inherit(this, Element);
	const _this = this,
		$this = _this.element,
		audioOption = {
			id: "audio",
			label: "Audio",
			type: "toggle",
			values: [{
				icon: null,
				label: "On",
				value: !0
			}, {
				icon: null,
				label: "Off",
				value: !1
			}],
			defaultValue: !0,
			custom: !0
		};
	PlayerSettings.instance().add(audioOption), async function initOptions() {
			let optionsFiltered = PlayerSettings.instance().state.options.filter((option => options.indexOf(option.id) > -1));
			Device.mobile || (optionsFiltered = optionsFiltered.filter((o => "audio" !== o.id))), _this.options = optionsFiltered.map((option => {
				"audio" === option.id && (option.custom = !0);
				let $section = $this.create(`settings settings--${option.id}`);
				return option.custom ? ($section.label = $section.create("UICopyText").text(option.label), $section.label.classList().add("settings-label")) : ($section.label = _this.initClass(UICopyText, {
					copy: option.label
				}, [$section]), $section.label.element.classList().add("settings-label")), option.type, $section.input = _this.initClass(UITransparentSettingsOption, {
					...option
				}, [$section]), $section
			}))
		}(),
		function initPrivacyAndTermsLinks() {
			// let $mobileFooterItems = $this.create("mobile-footer-items");
			// [{
			// 	modalId: "credits",
			// 	label: "Credits"
			// }, {
			// 	modalId: "faq",
			// 	label: "FAQ"
			// }, {
			// 	modalId: "privacy_policy",
			// 	label: "Privacy Policy"
			// }, {
			// 	modalId: "the_field",
			// 	label: "Visit The Field"
			// }, {
			// 	modalId: "instructions",
			// 	label: "Instructions"
			// }].forEach((mobileItem => {
			// 	let $link = $mobileFooterItems.create("link", "a");
			// 	$link.text(mobileItem.label), $link.interact({
			// 		overCallback: () => {},
			// 		clickCallback: () => {
			// 			! function onClickMobileItem(modalId) {
			// 				return UITransparentBar.instance().collapseActiveModal(), "the_field" === modalId ? (TrackAnalytics.track("TheFieldExit_menu"), void window.open("https://thefield.wsjbarrons.com/")) : "privacy_policy" !== modalId ? "instructions" === modalId ? (Storage.set("tutorials", null), void DreamUI.Tutorial.instance().showTutorial()) : void UIStore.commit("setModal", modalId) : void window.open("privacy-notice.html")
			// 			}(mobileItem.modalId)
			// 		},
			// 		seoText: mobileItem.label,
			// 		seoGroup: "global"
			// 	})
			// })), _this.linksWrapper = $this.create("links-wrapper"), _this.privacyLink = _this.linksWrapper.create("privacy-link", "a"), _this.privacyLink.text("Privacy Notice"), _this.privacyLink.interact((() => {}), (() => {
			// 	window.open("privacy-notice.html")
			// }))
		}(),
		function initStyles() {
			$this.goob(`\n            & {\n                padding: 3rem;\n            }\n\n            & > * {\n                align-items: center;\n                display: flex;\n                justify-content: space-between;\n                letter-spacing: 0.02em;\n                width: 100%;\n            }\n\n            select {\n                width: 150px !important;\n                text-transform: uppercase;\n            }\n\n            .title {\n                font: var(--ui-transparent-label2-bold);\n                margin-bottom: 1.8rem;\n                text-transform: uppercase;\n            }\n\n            .settings {\n                flex-wrap: wrap;\n                font: var(--ui-transparent-label2-regular);\n\n                > .UIText {\n                    margin-bottom: 0.5rem;\n                    width: 100%;\n                    color: var(--white) !important;\n                }\n\n                &:not(:last-child) {\n                    margin-bottom: 1.5rem;\n                }\n\n                .settings-label {\n                    color: var(--white);\n                }\n            }\n\n            .mobile-footer-items{\n                display: none;\n                align-items: flex-start;\n                flex-direction: row;\n                flex-wrap: wrap;\n                font: var(--ui-transparent-label1-regular);\n                ${StyleGuide.manropeMedium};\n                text-align: left;\n                margin-top: 1.8rem;\n                color: white;\n                text-decoration: underline;\n                a {\n                    color: white;\n                    display: block;\n                    flex-basis: 50%;\n                    margin-bottom: 0.8rem;\n                    \n                }\n\n                a:nth-child(even) {\n                    text-align: right;\n                }\n\n                a:nth-child(odd) {\n                    text-align: left;\n                }\n\n                ${StyleUtil.smaller(1300,"\n                    display: flex;\n                ")}\n            }\n\n            \n\n            .links-wrapper {\n                width: 100%;\n                align: right;\n\n                ${StyleUtil.smaller(1300,"\n                    display: none;\n                ")}\n                \n                \n                .privacy-link, .terms-link {\n                    font: var(--ui-transparent-label1-regular);\n                    ${StyleGuide.manropeMedium};\n                    text-align: center;\n                    margin-top: 0.8rem;\n                    color: var(--white);\n                    text-decoration: underline;\n                }\n            }\n\n        `)
		}()
})), Class((function UITransparentSettingsOption({
	id: id,
	values: values,
	custom: custom
}) {
	Inherit(this, Element);
	const _this = this,
		$this = _this.element;

	function handleStateChange(value) {
		"audio" === id && UIStore.commit("setShouldMuteFromUserSettings", !UIStore.get("shouldMuteFromUserSettings")), _this.options.forEach(($option => {
			$option.value === value ? $option.div.classList.add("button--active") : $option.div.classList.remove("button--active")
		}))
	}

	function handleButtonHover({
		action: action,
		object: object
	}) {
		switch (action) {
			case "over":
				object.tween({
					opacity: .5
				}, 400, "easeOutCubic");
				break;
			case "out":
				object.tween({
					opacity: 1
				}, 400, "easeOutCubic")
		}
	}

	function handleButtonClick({
		object: object
	}) {
		PlayerSettings.instance().state[id] = object.value
	}
	_this.id = id,
		function initElement() {
			_this.options = values.map((option => {
				let $button = $this.create("button");
				return option.icon && ($button.icon = _this.initClass(Sprite, option.icon, [$button])), custom ? $button.create("UICopyText").text(option.label) : $button.text = _this.initClass(UICopyText, {
					copy: option.label,
					customClass: "button__text"
				}, [$button]), $button.interact(handleButtonHover, handleButtonClick), $button.value = option.value, $button
			}))
		}(),
		function initStyles() {
			$this.goob("\n            & {\n                align-items: center;\n                display: flex;\n                background: var(--black);\n                border-radius: 2rem;\n            }\n\n            .button:first-child {\n                border-radius: 2rem 0 0 2rem;\n            }\n\n            .button:last-child {\n                border-radius:  0 2rem 2rem 0;\n            }\n\n            .button {\n                align-items: center;\n                background: var(--black);\n                white-space: nowrap;\n\n                \n                color: var(--white);\n                display: flex;\n                font-size: 1.2rem;\n                height: 3.4rem;\n                letter-spacing: 0.02rem;\n                padding: 0 1.2rem;\n                text-transform: uppercase;\n\n                &--active {\n                    background: var(--white);\n                    color: var(--black);\n\n                    border-radius: 2rem !important;\n                }\n            }\n\n            \n\n            svg {\n                height: 3rem;\n                margin-left: -1rem;\n                position: relative !important;\n                width: 3rem;\n            }\n        ")
		}(),
		function addHandlers() {
			_this.bindState(PlayerSettings.instance().state, id, handleStateChange)
		}()
})), Class((function UITransparentVR({
	id: id,
	options: options
}) {
	Inherit(this, UITransparentModal, {
		id: id
	});
	const _this = this,
		$this = _this.element,
		TABS = [{
			id: "vr",
			label: "Access in VR",
			view: UITransparentVRContent,
			viewOptions: {
				options: options
			}
		}];
	! function initElements() {
		_this.tabs = _this.initClass(DreamUI.Tab, {
			tabs: TABS
		}), _this.events.sub(_this.tabs, DreamUI.Tab.CHANGE, (({
			prevIndex: prevIndex,
			activeIndex: activeIndex
		}) => {
			activeTab = _this.tabs.contentTabs[activeIndex], prevTab = _this.tabs.contentTabs[prevIndex], activeTab?.view?.animateIn && activeTab.view.animateIn(), prevIndex > 0 && 0 === activeIndex && prevTab?.view?.animateOut && prevTab?.view?.animateOut()
		}))
	}(),
	function initStyles() {
		$this.goob("\n        & {\n\n        }\n\n        * {\n            position: relative !important;\n        }\n    ")
	}(), _this.animateIn = function() {
		$this.visible(), $this.css({
			pointerEvents: "all"
		}), $this.tween({
			opacity: 1,
			y: 0,
			x: Stage.width <= StyleGuide.breakpoints.tablet ? "-50%" : 0
		}, 400, "easeOutCubic"), _this.tabs?.contentTabs[0]?.view && _this.tabs?.contentTabs[0]?.view.animateIn()
	}
})), Class((function UITransparentVRContent({
	options: options
}) {
	Inherit(this, Element), Inherit(this, StateComponent);
	const _this = this,
		$this = _this.element;
	let $wrapper, $intro, $stepOne, $stepTwo, $codeLoader, $code, _elements = [],
		copy = {
			intro: "",
			refresh: "",
			information: "",
			outro: "",
			noPassRequired: "",
			code: ""
		};

	function initStepOne() {
		$stepOne = $wrapper.create("stepOne")
	}
	async function fetchCode() {
		if (!Config.VR_AUTH_REQUIRED) return;
		let code;
		try {
			code = await EventFinityAuth.getVRCode()
		} catch (e) {
			code = "Error"
		}
		code || (code = "Error"), $codeLoader.tween({
			opacity: 0
		}, 350, "linear"), $code.css({
			opacity: 0
		}), $code.text(code), $code.tween({
			opacity: 1
		}, 350, "linear", 350)
	}

	function getWebsiteHost() {
		return Config.PROD ? "nftvr.me" : window.location.hostname
	}
	copy = {
			...AppCMSConfig.data.vrInstructions
		},
		function initHTML() {
			$wrapper = $this.create("wrapper"),
				function initIntro() {
					$intro = $wrapper.create("intro"), $intro.html(copy.intro), _elements.push($intro)
				}(), Config.VR_AUTH_REQUIRED ? (function initLine(text) {
					let $nr = $wrapper.create("nr");
					$nr.text(copy.information), $nr._animYSmall = !0, _elements.push($nr);
					let $line = $wrapper.create("line");
					$line._animLine = !0, _elements.push($line)
				}(), initStepOne(), function initCode() {
					let $wrap = $stepOne.create("codeWrap");
					_elements.push($wrap), $wrap.create("label").text("VR Code: ");
					let $codeText = $wrap.create("codeText");
					$code = $codeText.create("code"), $code.text(""), $codeLoader = $codeText.create("spinner", "svg"), $codeLoader.attr("class", "spinner"), $codeLoader.css({
						overflow: "visible"
					}), $codeLoader.attr("viewBox", "0 0 50 50"), $codeLoader.html('<circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>', !0);
					let $refresh = $wrap.create("refresh");
					$refresh.text(copy.refresh), $refresh.interact(null, (() => {
						!async function refreshCode() {
							$code.tween({
								opacity: 0
							}, 350, "linear"), await _this.wait(350), $codeLoader.show(), $codeLoader.tween({
								opacity: 1
							}, 350, "linear"), await _this.wait(350), fetchCode(), Track.event("VR Connect", "Refresh code", "Desktop", "")
						}()
					}))
				}(), function initStepTwo() {
					$stepTwo = $wrapper.create("stepTwo");
					let $text = $stepTwo.create("stepTwoText"),
						outroCopy = copy.outro;
					$text.html(outroCopy.replace("{{websiteAddress}}", `<strong>${getWebsiteHost()}</strong>`), !0), _elements.push($text)
				}(), function initIllustration() {
					let $illustration = $wrapper.create("illustration");
					$illustration._animYSmall = !0, _elements.push($illustration), $illustration.create("icon"), $illustration.create("text").text(copy.code)
				}()) : (initStepOne(), function initNoPassText() {
					let $noPass = $wrapper.create("noPassText");
					$noPass.html(copy.noPassRequired.replace("{{websiteAddress}}", `<strong>${getWebsiteHost()}</strong>`), !0), _elements.push($noPass)
				}())
		}(),
		function initStyles() {
			$this.goob(`\n          & {\n            padding: 3rem;\n            padding-top: 1.5rem;\n            background-color: ${StyleGuide.colors.royalBlue};\n            font-size: 1.2rem;\n          }\n\n          .intro {\n            ${StyleGuide.manropeRegular}\n            color: ${StyleGuide.colors.white};\n            position: relative;\n          }\n\n          .stepOne {\n            position: relative;\n            color: ${StyleGuide.colors.white};\n          }\n\n          .noPassText {\n            position: relative;\n            color: ${StyleGuide.colors.white};\n            margin-top: 3em;\n            @media (max-height: 680px) and (orientation: landscape) {\n              margin-top: 1em;\n            }\n            strong {\n              ${StyleGuide.manropeBold}\n              font-size: 1.2em;\n            }\n          }\n\n          .nr {\n            ${StyleGuide.manropeRegular}\n            position: relative;\n            color: ${StyleGuide.colors.white};\n            margin-top: 3em;\n            margin-bottom: 0.75rem;\n            text-transform: uppercase;\n            font-size: 1rem;\n          }\n\n          .line {\n            position: relative;\n            width: 100%;\n            height: 1px;\n            background: ${StyleGuide.colors.white};\n            transform-origin: left;\n            margin-bottom: 3em;\n          }\n\n          .stepTwo {\n            position: relative;\n            padding: 3em 0 3em 0;\n\n            .stepTwoText {\n              ${StyleGuide.manropeRegular}\n              position: relative;\n              color: ${StyleGuide.colors.white};\n              strong {\n                ${StyleGuide.manropeBold}\n                font-size: 1.2em;\n              }\n            }\n          }\n\n          .illustration {\n            position: relative;\n            display: flex;\n            align-items: center;\n            color: ${StyleGuide.colors.white};\n            .icon {\n              position: relative;\n              width: 68px;\n              height: 55px;\n              background-image: url('assets/images/ui/headset.png');\n              background-size: contain;\n              background-position: center;\n              background-repeat: no-repeat;\n            }\n            .text {\n              ${StyleGuide.manropeRegular};\n              color: ${StyleGuide.colors.white};\n              position: relative;\n              width: 185px;\n              margin-left: 3.5em;\n              font-size: 1rem;\n            }\n          }\n\n          .codeWrap {\n            position: relative;\n            display: flex;\n            width: 100%;\n            align-items: center;\n\n            .label {\n              ${StyleGuide.manropeSemibold}\n              position: relative;\n              color: ${StyleGuide.colors.white}; \n              font-size: 2rem;\n            }\n\n            .codeText {\n              position: relative;\n              flex: 1;\n\n              .code {\n                ${StyleGuide.manropeSemibold}\n                position: relative;\n                color: ${StyleGuide.colors.white};\n                padding: 0 0 0 0.6em;\n                font-size: 2rem;\n              }\n\n              .spinner {\n                position: absolute !important;\n                .path {\n                  stroke: white;\n                }\n              }\n            }\n\n            .refresh {\n              ${StyleGuide.manropeSemibold}\n              position: relative;\n              color: ${StyleGuide.colors.white};\n              text-decoration: underline;\n              text-transform: uppercase;\n              flex: 1;\n              text-align: right; \n              font-size: 0.8rem;\n              margin-top: 0.35em;\n            }\n          }\n        `)
		}(), _this.animateIn = function() {
			fetchCode()
		}
})), Class((function UITransparentMetamask({
	id: id
}) {
	Inherit(this, UITransparentModal, {
		id: id
	});
	const _this = this,
		$this = _this.element;
	let $indicator, $wallet_container, $wallet_connected, $wallet_disconnected;
	async function handleButtonClick() {
		await Dream3DData.instance().state.get("wallet").connect().then((res => {
			res && _this.state.set("isConnected", !0)
		}))
	}!async function() {
		await _this.wait(3e3),
			function initState() {
				_this.state = AppState.createLocal({
					isConnected: !1
				})
			}(), await async function initHTML() {
					let $header = $this.create("metamask-header"),
						$title = _this.initClass(UICopyText, {
							copy: "metamaskTitle",
							customClass: "metamask-title"
						});
					$header.add($title.element), isConnected = !!(await Dream3DData.instance().state.get("wallet"))?.address, _this.state.set("isConnected", isConnected), $indicator = $header.create("metamask-connection-indicator " + (isConnected ? "connected" : "disconnected")), $indicator.create("circle"), $indicator.add(_this.initClass(UICopyText, {
						copy: "metamaskConnection"
					}));
					$this.create("divider", "hr");
					$wallet_container = $this.create("wallet-container"), $wallet_connected = _this.initClass(UITransparentMetamaskConnected), $wallet_disconnected = _this.initClass(UITransparentMetamaskDisconnected, {
						handleButtonClick: handleButtonClick
					}), $wallet_container.add($wallet_disconnected), $wallet_container.add($wallet_connected)
				}(),
				function initStyles() {
					$this.goob("\n            display: flex;\n            flex-direction: column;\n            gap: 15px;\n            align-items: center;\n            font-size: 1.5rem;\n            padding: 3rem 3rem;\n\n            * {\n                position: relative !important;\n            }\n\n            .metamask-header {\n                width: 100%;\n                display: flex;\n                align-items: center;\n                font-size: 15px;\n\n                @media(max-width: 1024px) {\n                    margin-bottom: 7px;\n                }\n\n                .metamask-connection-indicator {\n                    position: relative !important;\n                    display: flex;\n                    text-transform: uppercase;\n                    align-items: center;\n                    padding: 8px 12px 8px 10px;\n                    border: 1px solid #ff2828;\n                    box-sizing: border-box;\n                    border-radius: 30px;\n                    background: rgba(255,0,0,0.15);\n                    font-size: 9px;\n                    letter-spacing: 0.015em;\n                    color: var(--black);\n                    line-height: 9px;\n                    \n                    .circle {\n                        width: 7px;\n                        height: 7px;\n                        border-radius: 50%;\n                        margin-right: 5px;\n                        background: #ff2828;\n                    }\n                    \n                    &.connected {\n                        border: 1px solid #05da0f;\n                        background: rgba(0,255,0,0.15);\n                        .circle {\n                            background: #05da0f;\n                        }\n                    }\n                }\n\n                .metamask-title {\n                    font-weight: bold;\n                    text-transform: uppercase;\n                    margin-right: 14px;\n                }\n            }\n\n            .divider {\n                border: none;\n                border-bottom: 1px solid var(--black50);\n                opacity: 0.3;\n                width: 100%;\n                margin-bottom: 5px;\n                margin-top: 5px;\n            }\n\n            .wallet-container {\n                width: 100%;\n            }\n\n        ")
				}(),
				function initHandlers() {
					_this.bindState(_this.state, "isConnected", (isConnected => {
						UICopy.state.set("metamaskConnection", isConnected ? "Connected" : "Disconnected"), $indicator.div.className = "metamask-connection-indicator " + (isConnected ? "connected" : "disconnected"), isConnected ? ($wallet_disconnected.element.hide(), $wallet_connected.element.show(), $wallet_connected.init(), Track.event("wallet", "connected")) : ($wallet_connected.element.hide(), $wallet_disconnected.element.show(), Track.event("wallet", "not_connected"))
					})), _this.events.sub("walletconnected", (() => {
						_this.state.set("isConnected", !0), Track.event("wallet", "connected")
					})), _this.events.sub(Dream3DData.instance().state.get("wallet"), Web3.NETWORK_CHANGE, (data => {
						console.log("Web3 Network Changed"), Track.event("wallet", "network_change"), $wallet_connected.init()
					})), _this.events.sub(Dream3DData.instance().state.get("wallet"), Web3.ACCOUNT_CHANGE, (data => {
						console.log("Web3 Account Changed"), Track.event("wallet", "account_change"), data.newAccount ? data.oldAccount && data.oldAccount.toLowerCase() !== data.newAccount.toLowerCase() && $wallet_connected.init() : _this.state.set("isConnected", !1)
					}))
				}()
	}()
})), Class((function UITransparentMetamaskConnected() {
	Inherit(this, Element);
	const _this = this,
		$this = _this.element;
	let $wallet_address, $collection, $collection_total;
	!async function initHTML() {
			$wallet_address = $this.create("wallet-address"), $this.create("divider", "hr");
			let $collection_title_container = $this.create("collection-title-container");
			_this.initClass(UICopyText, {
				copy: "metamaskCollection",
				customClass: "collection-title"
			}, [$collection_title_container]), $collection_total = $collection_title_container.create("collection-total"), $collection = $this.create("nft-container")
		}(),
		function initStyles() {
			$this.goob("\n            position: absolute !important;\n            top: 0;\n            display: flex;\n            flex-direction: column;\n            gap: 20px;\n            align-items: center;\n            width: 100%;\n\n            .wallet-address {\n                width: 100%;\n                color: var(--black80);\n            }\n\n            .collection-title-container {\n                width: 100%;\n                font-weight: bold;\n                font-size: 14px;\n                line-height: 120%;\n                text-transform: uppercase;\n                display: flex;\n                align-items: center;\n                gap: 4px;\n\n                .collection-total {\n                    padding-bottom: 2px;\n                }\n            }\n\n            .nft-container {\n                display: flex;\n                flex-wrap: wrap;\n                justify-content: flex-start;\n                gap: 10px;\n                min-height: 20px;\n                max-height: 130px;\n                overflow-y: auto;\n                width: 100%;\n\n                * {\n                    flex-basis: 30%;\n                }\n            }\n\n\n        ")
		}(), _this.init = async function() {
			if (!!!Dream3DData.instance().state.get("wallet").address) return;
			Dream3DData.instance().state.get("wallet");
			$wallet_address.text(function displayWalletAddress() {
				let address = Dream3DData.instance().state.get("wallet").address;
				return console.log(address), `${address.substring(0,6)}...${address.substring(address.length-4)}`
			}()), $collection.html(""), $collection_total.html("()");
			$collection_total.html("(0)")
		}
})), Class((function UITransparentMetamaskDisconnected({
	handleButtonClick: handleButtonClick
}) {
	Inherit(this, Element);
	const _this = this,
		$this = _this.element;

	function handleClickDownloadButton() {
		Track.event("metamask_download_button", "clicked"), window.open("https://metamask.io/download/", "_blank")
	}

	function handleButtonHover({
		action: action,
		object: object
	}) {
		switch (action) {
			case "over":
				object.tween({
					opacity: .5
				}, 400, "easeOutCubic");
				break;
			case "out":
				object.tween({
					opacity: 1
				}, 400, "easeOutCubic")
		}
	}

	function handleViewInstructions() {
		Device.mobile && (UITransparentMetamaskInstructions.instance().animateIn(), Track.event("metamask_instructions", "clicked"))
	}! function initHTML() {
		if (_this.initClass(UICopyText, {
				copy: "metamaskDescription",
				customClass: "metamask-description"
			}), window.ethereum) {
			let $button = $this.create("metamask-button", "button");
			$button.create("metamask-icon", "img").attr("src", "assets/images/ui/metamask-icon.png"), $button.add(_this.initClass(UICopyText, {
				copy: "metamaskButton"
			})), $button.interact(handleButtonHover, handleButtonClick)
		} else {
			Device.mobile && _this.initClass(UICopyText, {
				copy: "metamaskInstructionsButton",
				customClass: "instructionsButton"
			}).element.interact(null, handleViewInstructions);
			let $button = $this.create("metamask-button", "a");
			$button.attr("href", "https://metamask.io/download/"), $button.attr("target", "_blank"), $button.create("metamask-icon", "img").attr("src", "assets/images/ui/metamask-icon.png"), $button.add(_this.initClass(UICopyText, {
				copy: "metamaskDownloadButton"
			})), $button.interact(handleButtonHover, handleClickDownloadButton)
		}
		_this.initClass(UITransparentLink, {
			copy: "metamaskTerms",
			href: "/privacy"
		})
	}(),
	function initStyles() {
		$this.goob("\n            position: absolute !important;\n            top: 0;\n            display: flex;\n            flex-direction: column;\n            margin-bottom: 20px;\n            align-items: center;\n            width: 100%;\n\n            & > * {\n                margin-bottom: 20px;\n            }\n\n            @supports (gap: 10px) and (display: flex) {\n                gap: 20px;\n\n                & > * {\n                    margin-bottom: 0px !important;\n                }\n            }\n\n            .instructionsButton {\n                font-size: 1.2rem;\n                letter-spacing: 0.01rem;\n                text-decoration: underline;\n\n                &:hover {\n                    text-decoration: none;\n                }\n            }\n\n            .metamask-description {\n                text-align: center;\n                line-height: 130%;\n            }\n\n            .metamask-button {\n                border-radius: 0.8rem;\n                background: none;\n                border: 2px solid var(--black);\n                box-sizing: border-box;\n                border-radius: 0.8rem;\n                padding: 1.3rem 1rem;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                text-transform: uppercase;\n                font-weight: bold;\n                width: 80%;\n                color: var(--black);\n                text-decoration: none;\n                \n                .metamask-icon {\n                    margin-right: 8px;\n                }\n            }\n\n            a.metamask-button {\n                font-size: 12px;\n            }\n\n            .UITransparentLink {\n                text-transform: uppercase;\n                letter-spacing: 0.02em;\n                font-size: 10px;\n                line-height: 110%;\n                font-weight: regular;\n                border-bottom: 2px solid var(--black);\n                box-sizing: border-box;\n                height: 2rem;\n                margin-bottom: 25px;\n\n                &:hover {\n                    border-bottom: none;\n                    box-sizing: border-box;\n                }\n            }\n        ")
	}()
})), Class((function UITransparentMetamaskInstructions() {
	Inherit(this, Element);
	const _this = this,
		$this = _this.element;
	let $modal, $copySuccess;

	function handleClose() {
		_this.flag("isResolved", !0), $this.tween({
			opacity: 0,
			y: -10
		}, 250, "easeOutCubic", 0, (() => {
			$this.css({
				pointerEvents: "none"
			})
		}))
	}

	function onResize() {
		Device.mobile && Stage.width > Stage.height && $this.overflowScroll({
			y: !0
		})
	}

	function handleClickDownloadButton() {
		window.open("https://metamask.io/download/", "_blank")
	}

	function handleButtonHover({
		action: action,
		object: object
	}) {
		switch (action) {
			case "over":
				object.tween({
					opacity: .5
				}, 400, "easeOutCubic");
				break;
			case "out":
				object.tween({
					opacity: 1
				}, 400, "easeOutCubic")
		}
	}

	function handleCopy() {
		console.log("copied to clipboard"), Utils.copyToClipboard(window.location.href), $copySuccess.tween({
			opacity: 1
		}, 300, "easeOutCubic", 0, (() => {
			$copySuccess.tween({
				opacity: 0
			}, 300, "easeOutCubic", 1e3)
		}))
	}! function initHTML() {
		Device.mobile && function initMobileInstructions() {
			$modal = $this.create("prompt-modal mobile"), $modal.create("prompt-close").interact(null, handleClose);
			let $title = $modal.create("prompt-title"),
				$description = $modal.create("prompt-description"),
				$step1 = $modal.create("prompt-step");
			$step1.create("circle").text("1");
			let $step1Text = $step1.create("prompt-step-text"),
				$metamaskButton = $modal.create("metamask-button", "a");
			$metamaskButton.attr("href", "https://metamask.io/download/"), $metamaskButton.attr("target", "_blank"), $metamaskButton.interact(handleButtonHover, handleClickDownloadButton);
			let $icon = $metamaskButton.create("metamask-icon", "img");
			$icon.attr("src", "assets/images/ui/metamask-icon.png"), $metamaskButton.add(_this.initClass(UICopyText, {
				copy: "metamaskDownloadButton"
			}));
			let $step2 = $modal.create("prompt-step");
			$step2.create("circle").text("2");
			let $step2Text = $step2.create("prompt-step-text"),
				$urlButton = $modal.create("prompt-url-button");
			$icon = _this.initClass(Sprite, "core-copy", [$urlButton]), $urlButton.create("url-text").text(window.location.href), $urlButton.interact(handleButtonHover, handleCopy), $copySuccess = $urlButton.create("copy-success"), $copySuccess.text("Copied Successfully!"), $title.text(UICopy.state.get("metamaskMobileTitle")), $description.text(UICopy.state.get("metamaskMobileDescription")), $step1Text.text(UICopy.state.get("metamaskMobileStep1")), $step2Text.text(UICopy.state.get("metamaskMobileStep2"))
		}(), Stage.add($this), _this.events.sub(Events.RESIZE, onResize), onResize()
	}(),
	function initStyles() {
		$this.goob("\n            & {\n                position: relative !important;\n                display: flex;\n                align-items: flex-start;\n                justify-content: flex-end;\n                padding: 5rem 1rem;\n                z-index: 2;\n                width: 100%;\n                height: 100%;\n                z-index: 10000;\n                color: var(--black);\n                pointer-events: all;\n                opacity: 0;\n\n                * {\n                    position: relative !important;\n                }\n            }\n            .prompt-modal {\n                width: 352px;\n                display: flex;\n                gap: 3rem;\n                flex-direction: column;\n                padding: 5rem;\n                border-radius: 0.8rem;\n                box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.1);\n\n                .prompt-icon {\n                    width: 48px;\n                    max-width: 15vw;\n                    margin: 0 auto;\n                }\n\n                .prompt-close {\n                    width: 32px;\n                    height: 32px;\n                    position: absolute !important;\n                    top: 8px;\n                    right: 8px;\n                    background-image: url('assets/images/ui/prompt-close-button.png');\n                    background-size: 100% 100%;\n                }\n                \n                .prompt-text {\n                    font-weight: bold;\n                    font-size: 20px;\n                    line-height: 120%;\n                    text-align: center;\n                    letter-spacing: -0.03em;\n                    text-transform: uppercase;\n                }\n\n                .metamask-button {\n                    border-radius: 0.8rem;\n                    background: none;\n                    border: 2px solid #1D1D1B;\n                    box-sizing: border-box;\n                    border-radius: 0.8rem;\n                    padding: 1.3rem 1rem;\n                    display: flex;\n                    align-items: center;\n                    justify-content: center;\n                    text-transform: uppercase;\n                    font-weight: bold;\n                    width: 100%;\n                    color: var(--black);\n                    font-size: 14px;\n                    text-decoration: none;\n                    \n                    .metamask-icon {\n                        margin-right: 8px;\n                    }\n                }\n\n                &.mobile {\n                    gap: 1rem;\n                    width: 100%;\n\n                    & > * {\n                        margin-bottom: 1rem;\n                    }\n\n                    @supports (gap: 10px) and (display: flex) {\n                        & > * {\n                            margin-bottom: 0rem !important;\n                        }\n                    }\n\n                    @media(orientation: landscape) {\n                        width: 352px;\n                        max-height: 65vh;\n                    }\n\n                    .prompt-title {\n                        font-weight: bold;\n                        font-size: 20px;\n                        line-height: 120%;\n                        text-align: center;\n                        letter-spacing: -0.03em;\n                        text-transform: uppercase;\n                    }\n\n                    .prompt-description {\n                        font-weight: bold;\n                        font-size: 14px;\n                        line-height: 120%;\n                        text-align: center;\n                        text-transform: uppercase;\n                    }\n\n                    .prompt-step {\n                        font-size: 16px;\n                        line-height: 130%;\n\n                        .circle {\n                            width: 34px;\n                            height: 34px;\n                            background: var(--black);\n                            color: var(--white);\n                            border-radius: 50%;\n                            position: absolute !important;\n                            left: -30px;\n                            display: flex;\n                            align-items: center;\n                            justify-content: center;\n                        }\n\n                        .prompt-step-text {\n                            padding-left: 15px;\n                        }\n                    }\n\n                    .prompt-url-button {\n                        border-radius: 0.8rem;\n                        background: none;\n                        border: 2px solid #1D1D1B;\n                        box-sizing: border-box;\n                        border-radius: 0.8rem;\n                        padding: 1.3rem 1rem;\n                        display: flex;\n                        align-items: center;\n                        text-transform: uppercase;\n                        font-weight: bold;\n                        width: 100%;\n                        gap: 15px;\n                        justify-content: center;\n\n                        .url-text {\n                            white-space: nowrap;\n                            text-overflow: ellipsis;\n                            overflow: hidden;\n                            min-width: 170px;\n                            max-width: 50vw;\n                            margin-left: 15px;\n\n                            @supports (gap: 10px) and (display: flex) {\n                                margin-left: 0px !important;\n                            }\n                        }\n\n                        .copy-success {\n                            position: absolute !important;\n                            top: calc(100% + 15px);\n                            opacity: 0;\n                        }\n                    }\n                }\n            }\n        ")
	}(), _this.animateIn = () => {
		$this.y = -10, $this.transform(), $this.tween({
			opacity: 1,
			y: 0
		}, 250, "easeOutCubic", 0, (() => {
			$this.css({
				pointerEvents: "fill"
			})
		}))
	}
}), "singleton"), Class((function UITransparentMetamaskNetworkPrompt() {
	Inherit(this, Element);
	const _this = this,
		$this = _this.element;
	let $modal;

	function handleButtonHover({
		action: action,
		object: object
	}) {
		switch (action) {
			case "over":
				object.tween({
					opacity: .5
				}, 400, "easeOutCubic");
				break;
			case "out":
				object.tween({
					opacity: 1
				}, 400, "easeOutCubic")
		}
	}
	async function handleButtonClick() {}! function initHTML() {
			$modal = $this.create("prompt-modal"), $modal.create("network-prompt-text").text(UICopy.state.get("metamaskNetworkPromptText"));
			let $button = $modal.create("network-switch-button");
			$button.text(UICopy.state.get("metamaskNetworkPromptButton")), $button.interact(handleButtonHover, handleButtonClick)
		}(),
		function initStyles() {
			$this.goob("\n            & {\n                position: absolute !important;\n                top: 0px;\n                display: flex;\n                display: flex;\n                align-items: flex-start;\n                justify-content: flex-end;\n                padding: 5rem 1rem;\n                z-index: 99999;\n                width: 100%;\n                height: 100%;\n                pointer-events: none;\n\n                * {\n                    position: relative !important;\n                }\n\n                .prompt-modal {\n                    opacity: 0;\n                    width: 352px;\n                    display: flex;\n                    gap: 3rem;\n                    flex-direction: column;\n                    padding: 5rem;\n                    border-radius: 0.8rem;\n                    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.1);\n                    font-weight: bold;\n                    font-size: 20px;\n                    line-height: 120%;\n                    text-align: center;\n                    letter-spacing: -0.03em;\n                    text-transform: uppercase;\n                    color: var(--black);\n\n                    .network-switch-button {\n                        pointer-events: auto;\n                        border: 2px solid #1D1D1B;\n                        box-sizing: border-box;\n                        border-radius: 0.8rem;\n                        text-align: center;\n                        padding: 15px 34px;\n                        font-size: 16px;\n                    }\n                }\n            }\n        ")
		}(), _this.delayedCall((() => {
			$this.tween({
				opacity: 0
			}, 600, "easeOutCubic")
		}), 1e4), $modal.tween({
			opacity: 1
		}, 400, "easeOutCubic")
})), Class((function UITransparentOwnedNFT({
	displayImage: displayImage,
	link: link
}) {
	Inherit(this, Element);
	const $this = this.element;
	let $image;

	function handleImageHover({
		action: action,
		object: object
	}) {
		switch (action) {
			case "over":
				object.tween({
					opacity: .7
				}, 200, "easeOutCubic");
				break;
			case "out":
				object.tween({
					opacity: 1
				}, 200, "easeOutCubic")
		}
	}

	function handleImageClick() {
		Track.event("link_clicked", link), window.open(link, "_blank")
	}! function initHTML() {
		if (displayImage) {
			const acceptedImage = [".png", ".jpg", ".gif"],
				extension = displayImage.substring(displayImage.lastIndexOf("."));
			if (null !== acceptedImage.find((m => m === extension))) {
				let $spinner = $this.create("spinner");
				$spinner.html('\n                    <svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">\n                        <circle fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>\n                    </svg>\n                '), $image = $this.create("nft-preview", "img"), $image.attr("src", displayImage), $image.div.onload = () => {
					console.log("image loaded"), $spinner.tween({
						opacity: 0
					}, 400, "easeOutCubic")
				}
			} else {
				let $spinner = $this.create("spinner");
				$spinner.html('\n                    <svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">\n                        <circle fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>\n                    </svg>\n                '), $image = $this.create("nft-preview", "video"), $image.attr("src", displayImage), $image.attr("muted", !0), $image.attr("autoplay", !0), $image.attr("loop", !0), $image.div.onloadeddata = () => {
					console.log("video loaded"), $spinner.tween({
						opacity: 0
					}, 400, "easeOutCubic")
				}
			}
		}
		link && $this.interact(handleImageHover, handleImageClick)
	}(),
	function initStyles() {
		$this.goob("\n            .nft-preview {\n                max-width: 100%;\n                max-height: 100%;\n            }\n\n            .num {\n                position: absolute !important;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                color: var(--white);\n                background: var(--black);\n                width: 15px;\n                height: 15px;\n                border-radius: 0 0 4px 0;\n                font-size: 9px;\n                top: 0px;\n                left: 0px;\n            }\n\n            @keyframes rotator {\n                0% { transform: rotate(0deg); }\n                100% { transform: rotate(270deg); }\n            }\n\n            @keyframes dash {\n                0% {\n                    stroke-dashoffset: 187;\n                }\n\n                50% {\n                    stroke-dashoffset: 46.75;\n                    transform:rotate(135deg);\n                }\n\n                100% {\n                    stroke-dashoffset: 187;\n                    transform:rotate(450deg);\n                }\n            }\n\n            .spinner {\n                left: 50%;\n                top: 50%;\n                position: absolute !important;\n                z-index: 2;\n                transform: translate(-50%, -50%);\n\n                svg {\n                    animation: rotator 1.4s linear infinite;\n                    position: relative !important;\n                    width: 4.2rem;\n                }\n\n                circle {\n                    animation: dash 1.4s ease-in-out infinite;\n                    stroke-dasharray: 187;\n                    stroke-dashoffset: 0;\n                    transform-origin: center;\n                }\n            }\n        ")
	}()
})), Class((function UITransparentChatZone() {
	Inherit(this, Element);
	const _this = this,
		$this = _this.element;
	_this.users = [],
		function initElements() {
			_this.header = $this.create("room__header"), _this.headerTitle = _this.header.create("room__header__title"), _this.headerCount = _this.header.create("room__header__count"), _this.headerTitle.text("Attendees"), _this.headerCount.text("(0)"), _this.list = $this.create("room__list"), _this.roomId = null, _this.events.sub(VideoChatZones.CONNECTED, (({
				id: id
			}) => {
				_this.roomId = id
			})), _this.events.sub(VideoChatZones.DISCONNECTED, (() => {
				_this.roomId = null
			})), _this.events.sub("CHAT_ZONE_USERS", (({
				users: users,
				id: id
			}) => {
				id === _this.roomId && _this.headerCount.text(`(${users.length})`)
			}))
		}(),
		function initStyles() {
			$this.goob("\n            & {\n                padding: 3rem;\n            }\n\n            * {\n                position: relative !important;\n            }\n\n            .room__header {\n\n            }\n\n            .room__header__title {\n                display: inline-block;\n                font-size: 1.4rem;\n                font-weight: 900;\n                text-transform: uppercase;\n            }\n\n            .room__header__count {\n                font-size: 1.4rem;\n                color: #686868;\n                display: inline-block;\n                margin-left: 0.6rem;\n            }\n\n            .room__list {\n                display: flex;\n                flex-direction: column;\n                margin-top: 2rem;\n                width: 100%;\n            }\n        ")
		}(), _this.animateIn = _ => {}, _this.animateOut = _ => {}
})), Class((function UITransparentVoice({
	id: id
}) {
	Inherit(this, UITransparentModal, {
		id: id
	});
	const _this = this,
		$this = _this.element,
		TABS = [{
			id: "party",
			disabled: !0,
			label: UICopy.state.get("settingsParty"),
			view: UITransparentWatchParty
		}, {
			id: "zone",
			disabled: !0,
			label: UICopy.state.get("settingsChat"),
			view: UITransparentChatZone
		}];

	function handlePartyChange(isActive) {
		_this.tabs.bar.css({
			visibility: "hidden"
		}), _this.tabs.headerTabs[1].css({
			visibility: "hidden"
		}), _this.tabs.change(0)
	}

	function handleChatZoneConnect() {
		_this.tabs.bar.css({
			visibility: "visible"
		}), _this.tabs.headerTabs[1].css({
			visibility: "visible"
		}), _this.tabs.change(1)
	}

	function handleChatZoneDisconnect() {
		_this.tabs.bar.css({
			visibility: "hidden"
		}), _this.tabs.headerTabs[1].css({
			visibility: "hidden"
		}), _this.tabs.change(0)
	}!async function initElements() {
			_this.tabs = _this.initClass(DreamUI.Tab, {
				tabs: TABS
			}), await _this.tabs.ready(), _this.tabs.bar.css({
				visibility: "hidden"
			}), _this.tabs.headerTabs[1].css({
				visibility: "hidden"
			}), _this.events.sub(_this.tabs, DreamUI.Tab.CHANGE, (({
				prevIndex: prevIndex,
				activeIndex: activeIndex
			}) => {
				activeTab = _this.tabs.contentTabs[activeIndex], activeTab?.view?.animateIn && activeTab.view.animateIn()
			}))
		}(),
		function initStyles() {
			$this.goob("\n            & {\n\n            }\n\n            * {\n                position: relative !important;\n            }\n\n            .header__label {\n                background: linear-gradient(204.23deg, rgba(255, 255, 255, 0.75) 24.85%, rgba(245, 247, 248, 0.75) 99.34%);\n                display: flex;\n                font: var(--ui-transparent-label5-bold);\n                padding: 2rem 3rem;\n                text-transform: uppercase;\n            }\n        ")
		}(),
		function addListeners() {
			WatchPartyManager.instance().state.bind("active", handlePartyChange), _this.events.sub(VideoChatZones.CONNECTED, handleChatZoneConnect), _this.events.sub(VideoChatZones.DISCONNECTED, handleChatZoneDisconnect)
		}()
})), Class((function UITransparentVoiceUser(_gcPlayer) {
	Inherit(this, Element);
	const _this = this,
		$this = _this.element;

	function onMicStatusChange(isMuted) {
		isMuted?.value || isMuted ? (_this.$mic.element.tween({
			opacity: 0
		}, 200, "easeOutCubic"), _this.$micOff.element.tween({
			opacity: 1
		}, 200, "easeOutCubic")) : (_this.$mic.element.tween({
			opacity: 1
		}, 200, "easeOutCubic"), _this.$micOff.element.tween({
			opacity: 0
		}, 200, "easeOutCubic"))
	}

	function onNameChange(name) {
		_this.state.set("name", name), _this.$name.text(_this.state.get("name"))
	}! function initPlayer() {
		_this.gcPlayer = _gcPlayer, _this.state = AppState.createLocal(_gcPlayer.data), _this.events.sub(_gcPlayer, GameCenterPlayer.UPDATE_DATA, (({
			data: data
		}) => {
			data.data && (data = data.data);
			for (let key in data) _this.state.set(key, data[key])
		}))
	}(),
	function initElements() {
		_this.picture = _this.initClass(UITransparentProfilePicture, _this.gcPlayer?.data?.AmbushAvatar_uGlowColor), _this.picture.setSize("3.8rem", "3.8rem"), _this.$wrapperText = $this.create("user__wrapper__text"), _this.$wrapperHeadline = _this.$wrapperText.create("user__wrapper__headline"), _this.$name = _this.$wrapperHeadline.create("user__name"), _this.$wrapperMic = _this.$wrapperHeadline.create("user__wrapper__mic"), _this.$mic = _this.initClass(Sprite, "core-mic", [_this.$wrapperMic]), _this.$micOff = _this.initClass(Sprite, "core-mic-off", [_this.$wrapperMic]), _this.delayedCall((() => {
			_this.gcPlayer.me ? _this.$name.text("You") : _this.$name.text(_this.state.get("name"))
		}), 500)
	}(),
	function initStyles() {
		$this.goob(`\n            align-items: center;\n            display: flex;\n            order: 1;\n            position: relative !important;\n            margin-bottom: 0.5rem;\n\n            ${_this.gcPlayer.me&&'\n                order: 0;\n\n                &::before {\n                    content: "";\n                    width: 4px;\n                    height: 4px;\n                    border-radius: 100%;\n                    background-color: var(--black);\n                    position: absolute;\n                    left: -10px;\n                }\n            '}\n\n            * {\n                position: relative !important;\n            }\n\n            .user__wrapper__text {\n                margin-left: 0.6rem;\n            }\n\n            .user__name {\n                font: var(--ui-transparent-label1-bold);\n                text-transform: uppercase;\n            }\n\n            .user__wrapper__headline {\n                display: flex;\n                align-items: center;\n            }\n\n            .user__wrapper__mic {\n                width: 1.6rem;\n                height: 1.6rem;\n            }\n\n            .user__wrapper__mic svg {\n                width: 1.6rem;\n                height: 1.6rem;\n                fill: none;\n                color: #A6A6A6;\n                vertical-align: bottom;\n                z-index: 1;\n                position: absolute !important;\n                top: 0;\n                left: 0;\n            }\n        `)
	}(), _this.state.bind("gcmedia_mute_audio", onMicStatusChange), _this.state.bind("name", onNameChange)
})), Class((function UITransparentWatchParty() {
	Inherit(this, Element);
	const _this = this,
		$this = _this.element;

	function handlePartyChange(isActive) {
		isActive ? (_this.intro.animateOut(), _this.room.animateIn()) : (_this.intro.animateIn(), _this.room.animateOut())
	}! function initElements() {
		_this.intro = _this.initClass(UITransparentWatchPartyIntro), _this.room = _this.initClass(UITransparentWatchPartyRoom), _this.room.element.hide()
	}(),
	function initStyles() {
		$this.goob("\n            & {\n                \n            }\n\n            * {\n                position: relative !important;\n            }\n        ")
	}(),
	function addListeners() {
		WatchPartyManager.instance().state.bind("active", handlePartyChange)
	}(), _this.animateIn = _ => {}, _this.animateOut = _ => {}
})), Class((function UITransparentWatchPartyIntro() {
	Inherit(this, Element);
	const _this = this,
		$this = _this.element;

	function handlePartyFull() {
		_this.full.element.show()
	}

	function onChatZoneConnect(isActive) {
		_this.createButton.disable(), _this.full.element.hide()
	}

	function onChatZoneDisconnect() {
		_this.createButton.enable(), _this.full.element.hide()
	}
	async function handleCreateButton() {
		if (_this.metamaskBrowser) return _this.error_text.css({
			display: "block"
		}), void _this.error_text.tween({
			opacity: 1
		}, 300, "easeOutCubic", 0, (() => {
			_this.error_text.tween({
				opacity: 0
			}, 300, "easeOutCubic", 800)
		}));
		Track.event("watch_party", "created"), await WatchPartyManager.instance().createParty()
	}
	async function handleJoinButton() {
		"" !== _this.joinInput.div.value && await WatchPartyManager.instance().joinParty(_this.joinInput.div.value)
	}
	_this.metamaskBrowser = Device.mobile && Device.detect("crios/76.0.3809.123"),
		function initElements() {
			_this.full = _this.initClass(UICopyText, {
				copy: "settingsPartyFull",
				customClass: "full"
			}), _this.full.element.hide(), _this.metamaskBrowser || (_this.joinButtonContainer = $this.create("watchParty__joinContainer"), _this.joinInput = _this.joinButtonContainer.create("watchParty__RoomIdInput", "input"), _this.joinInput.attr("placeholder", "ENTER ROOM ID"), _this.joinInput.div.onfocus = () => {
				_this.events.fire(PlayerControls.ENABLE_STATE_CHANGE, {
					enabled: !1
				})
			}, _this.joinInput.div.onblur = () => {
				_this.events.fire(PlayerControls.ENABLE_STATE_CHANGE, {
					enabled: !0
				})
			}, _this.joinButton = _this.initClass(DreamUI.Button, {
				text: UICopy.state.get("settingsPartyJoin")
			}, [_this.joinButtonContainer]), _this.events.sub(_this.joinButton, DreamUI.Button.CLICK, handleJoinButton)), _this.description = _this.initClass(UICopyText, {
				copy: "settingsPartyDescription",
				customClass: "description"
			}), _this.createButton = _this.initClass(DreamUI.Button, {
				text: UICopy.state.get("settingsPartyCreate"),
				styles: {
					element: {
						width: "100%"
					}
				}
			}), _this.events.sub(_this.createButton, DreamUI.Button.CLICK, handleCreateButton), _this.error_text = _this.createButton.element.create("prevent-metamask-browser-text"), _this.error_text.text("Cannot access watch party from this in-app browser")
		}(),
		function initStyles() {
			$this.goob("\n            & {\n                padding: 3rem;\n            }\n\n            * {\n                position: relative !important;\n            }\n\n            .description {\n                margin-top: 2.5rem;\n                font: var(--ui-transparent-label5-regular);\n            }\n\n            .full {\n                font: var(--ui-transparent-label5-bold);\n                margin-bottom: 0.7rem;\n            }\n\n            .ButtonView {\n                padding: 1.2rem 1.6rem;\n                margin-top: 1rem;\n                box-shadow: 0 0 2.4rem var(--black10);\n                border: 1px solid var(--black);\n            }\n\n            .watchParty__joinContainer {\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n\n                .ButtonView {\n                    margin-top: 0;\n                    border-radius: 0 0.8rem 0.8rem 0;\n                }\n\n                .watchParty__RoomIdInput {\n                    padding: 1.2rem;\n                    border-radius: 0.8rem 0 0 0.8rem;\n                    border: 1px solid var(--black50);\n                    box-shadow: 0 0 2.4rem rgb(0, 0, 0, 0.1);\n                    transition: border 0.2s ease-out;\n                    font: var(--ui-transparent-label1-regular);\n                    background: var(--black10);\n                    text-transform: uppercase;\n                    color: var(--black);\n                    width: 58.5%;\n\n                    &:hover {\n                        border: 1px solid var(--black50);\n                    }\n                }\n            }\n\n            .prevent-metamask-browser-text {\n                display: none;\n                color: red;\n                font: var(--ui-transparent-label1-regular);\n                left: calc(100% + 15px);\n                position: absolute !important;\n                top: 0;\n                width: 100%;\n            }\n        ")
		}(),
		function addListeners() {
			_this.events.sub(WatchPartyManager.FULL, handlePartyFull), _this.events.sub(VideoChatZones.CONNECTED, onChatZoneConnect), _this.events.sub(VideoChatZones.DISCONNECTED, onChatZoneDisconnect)
		}(), _this.animateIn = _ => {
			$this.show()
		}, _this.animateOut = _ => {
			$this.hide(), _this.full.element.hide()
		}
})), Class((function UITransparentWatchPartyRoom() {
	Inherit(this, Element);
	const _this = this,
		$this = _this.element;

	function onPlayerConnected(player) {
		let $user = _this.initClass(UITransparentVoiceUser, player, [_this.list]);
		player.partyWrapper.$el = $user, updateHeaderCount()
	}

	function onPlayerLeave(player) {
		player.$el.destroy(), updateHeaderCount()
	}
	async function updateHeaderCount() {
		let id = WatchPartyManager.instance().state.get("party");
		if (id) {
			let currentCount = await GameCenterFirebase.getRoomCount(id);
			_this.headerCount.text(`(${currentCount}/10)`)
		}
	}
	async function onButtonExitClick() {
		_this.list.html(""), await WatchPartyManager.instance().leaveParty()
	}

	function onButtonInviteClick() {
		Utils.copyToClipboard(WatchPartyManager.instance().state.get("party")), _this.tooltip.tween({
			y: 0,
			opacity: 1
		}, 200, "easeOutCubic", (_ => {
			_this.tooltip.tween({
				y: 8,
				opacity: 0
			}, 200, "easeOutCubic", 1e3)
		}))
	}! function initElements() {
		_this.header = $this.create("room__header"), _this.headerTitle = _this.header.create("room__header__title"), _this.headerCount = _this.header.create("room__header__count"), _this.headerTitle.text("Attendees"), _this.headerCount.text("(0/10)"), _this.headerButtons = _this.header.create("room__header__buttons"), _this.headerButtonExit = _this.initClass(DreamUI.Button, {
			text: UICopy.state.get("settingsPartyExit")
		}, [_this.headerButtons]), _this.events.sub(_this.headerButtonExit, DreamUI.Button.CLICK, onButtonExitClick), _this.headerButtonRoomId = _this.initClass(DreamUI.Button, {
			icon: "core-copy",
			text: " "
		}, [_this.headerButtons]), _this.headerButtonRoomId.view.element.interact(null, onButtonInviteClick), _this.list = $this.create("room__list"), _this.tooltip = _this.headerButtonRoomId.view.element.create("room__tooltip"), _this.tooltip.text("Room id copied!")
	}(),
	function initStyles() {
		$this.goob('\n            & {\n                padding: 3rem;\n            }\n\n            * {\n                position: relative !important;\n            }\n\n            .room__header__title {\n                font: var(--ui-transparent-label2-bold);\n                text-transform: uppercase;\n                display: inline-block;\n            }\n\n            .room__header__count {\n                font: var(--ui-transparent-label1-regular);\n                color: #686868;\n                display: inline-block;\n                margin-left: 0.6rem;\n            }\n\n            .room__header__buttons {\n                margin-top: 1.6rem;\n                display: flex;\n                justify-content: space-between;\n                width: 100%;\n            }\n\n            .room__header__buttons .ButtonView {\n                width: 47%;\n                white-space: nowrap;\n                justify-content: center;\n                padding:  0.8rem 1rem;\n                display: flex;\n                align-items: center;\n\n                .ButtonView__text {\n                    text-overflow: ellipsis;\n                    overflow: hidden;\n                    order: 2;\n                }\n\n                .room__tooltip {\n                    font-family: var(--ui-font);\n                    position: absolute !important;\n                    font: var(--ui-transparent-label1-regular);\n                    color: var(--black) !important;\n                    width: 12rem;\n                    background: var(--white);\n                    text-align: center;\n                    padding: 1.2rem 0;\n                    border-radius: 0.8rem;\n                    top: -50px;\n                    filter: drop-shadow(0px 8px 10px rgba(0, 0, 0, 0.15));\n                    transform: translateY(8px);\n                    opacity: 0;\n                    pointer-events: none;\n                    z-index: 2;\n                }\n    \n                .room__tooltip::after {\n                    content: "";\n                    display: block;\n                    border-top: 12px solid white;\n                    border-left: 10px solid transparent;\n                    border-right: 10px solid transparent;\n                    width: 10px;\n                    position: absolute;\n                    bottom: -7px;\n                    left: 0;\n                    right: 0;\n                    margin: 0 auto;\n                }\n\n                svg {\n                    height: 100%;\n                    width: 100%;\n                    max-width: 2rem;\n                    margin-right: 0.5rem;\n                }\n            }\n\n            .room__list {\n                display: flex;\n                flex-direction: column;\n                margin-top: 2rem;\n            }\n\n            .room__header__roomId {\n                border-radius: 0.8rem;\n                background: transparent;\n                border-radius: 0.8rem;\n                border: 0.2rem solid var(--black);\n                position: relative !important;\n                padding: 0 0.8rem;\n                color:var(--black));\n                font: var(--ui-transparent-label1-regular);\n                max-width: 50%;\n                font-family: var(--ui-font);\n                display: flex;\n                align-items: center;\n                justify-content: space-between;\n\n                .room__header__roomId__text {\n                    white-space: nowrap;\n                    text-overflow: ellipsis;\n                    overflow-x: hidden;\n                    max-width: 75%;\n                }\n\n                .room__tooltip {\n                    position: absolute !important;\n                    font: var(--ui-transparent-label1-regular);\n                    color: var(--black) !important;\n                    width: 12rem;\n                    background: var(--white);\n                    text-align: center;\n                    padding: 1.2rem 0;\n                    border-radius: 0.8rem;\n                    top: -50px;\n                    filter: drop-shadow(0px 8px 10px rgba(0, 0, 0, 0.15));\n                    transform: translateY(8px);\n                    opacity: 0;\n                    pointer-events: none;\n                    z-index: 2;\n                }\n    \n                .room__tooltip::after {\n                    content: "";\n                    display: block;\n                    border-top: 12px solid white;\n                    border-left: 10px solid transparent;\n                    border-right: 10px solid transparent;\n                    width: 10px;\n                    position: absolute;\n                    bottom: -7px;\n                    left: 0;\n                    right: 0;\n                    margin: 0 auto;\n                }\n            }\n\n        ')
	}(),
	function initUsers() {
		_this.events.sub(WatchPartyManager.PLAYER_CONNECTED, onPlayerConnected), _this.events.sub(WatchPartyManager.PLAYER_DISCONNECTED, onPlayerLeave)
	}(), _this.animateIn = _ => {
		_this.headerButtonRoomId.setText(WatchPartyManager.instance().state.get("party")), $this.show()
	}, _this.animateOut = _ => {
		$this.hide()
	}
})), Class((function WatchPartyManager() {
	Inherit(this, Component);
	const _this = this;
	var _room, _media, _bridgePlayerModel, _connecting, _disconnecting, _userData = {},
		_locationCoords = [];
	const ZERO = new Vector3;

	function PlayerWrapper(_gcPlayer) {
		Inherit(this, Component);
		const __this = this;
		this.party = !0, this.gcPlayer = _gcPlayer, this.state = AppState.createLocal(_gcPlayer.data), _gcPlayer.dreamPlayer = this, __this.events.sub(_gcPlayer, GameCenterPlayer.UPDATE_DATA, (({
			data: data
		}) => {
			data.data && (data = data.data);
			for (let key in data) __this.state.set(key, data[key])
		}))
	}

	function BridgePlayerModel() {
		function updateRoom() {
			_room?.updateUserData(_userData)
		}
		this.set = function(key, value) {
			_userData[key] = value, Utils.debounce(updateRoom, 10)
		}
	}

	function setUserData() {
		let data = Utils.cloneObject(PlayerModel.data);
		for (let key in data) key.includes("gcmedia") || (_userData[key] = data[key]);
		GameCenterFirebase.userData = _userData, _room?.updateUserData(_userData)
	}
	async function connect() {
		await _disconnecting, _connecting = Promise.create(), _this.state.set("active", !0);
		let id = _this.state.get("party") || "default";
		if (await GameCenterFirebase.getUserCount(id) >= 10) return _this.events.fire(WatchPartyManager.FULL), void _this.leaveParty();
		_room = await GameCenterFirebase.joinRoom(id), _this.events.sub(_room, GameCenterRoom.PLAYER_DISCONNECT, onPlayerDisconnect), _this.events.sub(_room, GameCenterRoom.PLAYER_READY, onPlayerJoin), _media.videoStream = !1, _media.audioStream = !0, await _media.useRoom(_room), await _media.wait((() => _media.userStream)), _media.userStream.disableVideo(), _connecting.resolve(), Dev.expose("partyRoom", _room)
	}

	function updateLocationData() {
		let state = Router.getStateString(),
			location = Player.getLocation(Player.CURRENT_ENV_KEY);
		location && location.position && !location.position.equals(ZERO) ? (_bridgePlayerModel.set("current_route", state), _bridgePlayerModel.set("current_server", "xxx"), _bridgePlayerModel.set("current_coords", location.position.toArray(_locationCoords)), _bridgePlayerModel.set("current_env_key", Player.CURRENT_ENV_KEY), _bridgePlayerModel.set("current_roomId", Multiplayer.room?.internalId || 0)) : (_bridgePlayerModel.set("current_route", 0), _bridgePlayerModel.set("current_server", 0), _bridgePlayerModel.set("current_coords", 0), _bridgePlayerModel.set("current_env_key", 0), _bridgePlayerModel.set("current_roomId", 0))
	}

	function onPlayerJoin({
		player: player
	}) {
		player.partyWrapper = new PlayerWrapper(player), _this.events.fire(WatchPartyManager.PLAYER_CONNECTED, player)
	}

	function onPlayerDisconnect({
		player: player
	}) {
		_this.events.fire(WatchPartyManager.PLAYER_DISCONNECTED, player.partyWrapper)
	}

	function joinChatZone() {
		_media?.userStream && (_media.videoStream && (_media.userStream.flag("mute_video") ? _this.flag("needs_video", !1) : (_media.userStream.disableVideo(), _this.flag("needs_video", !0))), _media.userStream.flag("mute_audio") ? _this.flag("needs_audio", !1) : (_this.flag("needs_audio", !0), _media.userStream.disableAudio()), _bridgePlayerModel.set("in_chat_zone", !0), _this.state.set("in_chat_zone", !0)), Track.event("chatzone", "join")
	}

	function leaveChatZone() {
		_bridgePlayerModel.set("in_chat_zone", !1), _this.state.set("in_chat_zone", !1), _media?.userStream && (_this.flag("needs_audio") && _media.userStream.enableAudio(), _this.flag("needs_video") && _media.userStream.enableVideo()), Track.event("chatzone", "leave")
	}
	this.state = AppState.createLocal(), async function() {
		if (await Hydra.ready(), _this.state.set("active", !1), _this.state.set("isFull", !1), _this.state.set("players", []), !Config.GAMECENTER_FIREBASE) throw "PartyManager requires GAMECENTER_FIREBASE config";
		GameCenterFirebase.connect(),
			function initClasses() {
				_bridgePlayerModel = new BridgePlayerModel, _media = GameCenterMedia.createLocal({
					playerModel: _bridgePlayerModel,
					gameCenter: GameCenterFirebase
				}), setUserData(), _this.events.sub(PlayerModel, PlayerModel.UPDATE, setUserData)
			}(),
			function addListeners() {
				_this.events.sub(VideoChatZone.JOIN, joinChatZone), _this.events.sub(VideoChatZone.LEAVE, leaveChatZone)
			}()
	}(), this.createParty = function() {
		_this.state.set("party", Utils.uuid()), connect()
	}, this.joinParty = function(id) {
		_this.state.set("party", id), connect()
	}, this.leaveParty = function() {
		_this.state.set("party", ""), async function disconnect() {
			await _connecting, _disconnecting = Promise.create(), await _media.useRoom(null), _room = _room.leave(), _this.stopRender(updateLocationData), _disconnecting.resolve()
		}(), _this.state.set("active", !1)
	}, this.getDOMElement = function() {
		return Stage
	}, this.jumpToLocation = async function(player) {
		PartyManager.JUMP_TO_LOCATION = {
			server: player.data.current_server,
			roomId: player.data.current_roomId
		}, Player.setLocation(player.data.current_env_key, {
			position: (new Vector3).fromArray(player.data.current_coords),
			quaternion: new Quaternion
		}), Router.setState(player.data.current_route)
	}, this.setConfig = function(config) {
		_this.config = config
	}, this.muteAudio = function() {
		_media.userStream.disableAudio()
	}, this.unmuteAudio = function() {
		_media.userStream.enableAudio()
	}, this.getRoom = async function() {
		return _room
	}
}), "singleton", (_ => {
	WatchPartyManager.FULL = "watch_party_full", WatchPartyManager.PLAYER_CONNECTED = "watch_party_player_connected", WatchPartyManager.PLAYER_DISCONNECTED = "watch_party_player_disconnected"
})), Namespace("DreamUI"), DreamUI.Class((function Tutorial({
	data: data = []
} = {}) {
	Inherit(this, DreamUI.DreamElement);
	const _this = this,
		$this = _this.element;
	var _tutorial, _queue = [],
		_tween = {
			value: 0
		},
		_analyticsStartEvent = 0,
		_didShow = !1;
	const cmsInstructions = AppCMSConfig.data.instructions.map((instruction => {
		const obj = instruction;
		return obj.icon = SanityImageUrlBuilder.build(instruction.icon).url(), obj
	}));
	async function displayTutorial() {
		if (!_queue.length) return UIStore.dispatch("tutorialVisibilityChange", !1), clearTimeout(_analyticsStartEvent), void(_didShow && TrackAnalytics.track("tutorialEnd"));
		let {
			data: data
		} = _queue[0], {
			delay: delay = 1e3,
			time: time = 1e4,
			event: event,
			id: id,
			title: title,
			description: description,
			icon: icon
		} = data;
		if (!Utils.query("debugTutorials")) {
			let tutorials = await Storage.get("tutorials") || [];
			if (tutorials.indexOf(id) > -1) return _queue.shift(), void displayTutorial();
			tutorials.push(id), Storage.set("tutorials", tutorials)
		}
		Platform.usingVR() ? _this.delayedCall((async _ => {
				(_tutorial = _this.initClass(UI3DTutorialView, {
					...data,
					bgColor: StyleGuide.colors.royalBlue,
					fontColor: "#ffffff",
					secondaryColor: "#c1c1c1"
				})).scale = .2, _tutorial.group.visible = !0, _tutorial.group.position.copy(World.CAMERA.position), _tutorial.group.position.y -= .25, _tutorial.group.position.add(new Vector3(0, 0, -3).applyQuaternion(World.CAMERA.quaternion)), _tutorial.group.lookAt(World.CAMERA.position), _tutorial.capt.object3d.shader.depthTest = !1, _tutorial.capt.object3d.mesh.renderOrder = RenderOrder.VR_TUTORIAL_PANEL, _tutorial.animateIn(), (await DreamWorld.active.getEnvironment()).group.add(_tutorial.group)
			}), delay) : (_tutorial = _this.initClass(DreamUI.TutorialItem, {
				title: title,
				description: description,
				icon: icon
			})).animateIn(delay), time && (_tween = {
				value: 0
			}, tween(_tween, {
				value: 1
			}, time, "linear", delay).onUpdate((_ => _tutorial?.updateProgress(_tween.value))).onComplete(_this.next)),
			function addHandlers(eventType) {
				switch (eventType) {
					case "keyboard":
						_this.events.sub(Keyboard.DOWN, _this.next);
						break;
					case "mouse":
						_this.events.sub(Mouse.input, Interaction.START, _this.next);
						break;
					case "joystick":
						_this.events.sub(VRInput.JOYSTICK, _this.next), _this.events.sub(PlayerControls.MOBILE_JOYSTICK, _this.next);
						break;
					case "teleport":
						_this.events.sub(Player.TELEPORT, _this.next);
						break;
					case "chat-zone":
						_this.events.sub(VideoChatZones.PROMPT, _this.next);
						break;
					case "vr-settings":
						VRInput.controllers.forEach(((c, i) => _this.events.sub(c, VRInput.BUTTON, handleVRButton)))
				}
			}(event)
	}

	function handleVRButton(e) {
		"trigger" === e.label || e.pressed || _this.next()
	}
	_this.data = [...cmsInstructions, ...data],
		function initElement() {
			$this.goob("\n            & {\n                height: 100%;\n                left: 0;\n                pointer-events: none;\n                top: 0;\n                width: 100%;\n                z-index: 1000;\n            }\n        "), Stage.add($this)
		}(), _this.flag("init", !0), this.show = async function(data) {
			if (await _this.wait("init"), "string" == typeof data || data instanceof String) {
				let value = _this.data.find((({
					id: id
				}) => id === data));
				value && _queue.push({
					data: value
				})
			} else _queue.push({
				data: data
			});
			_queue.length > 1 || displayTutorial()
		}, this.hide = this.clear = function() {
			clearTween(_tween), _tutorial && (_tutorial.animateOut(), _tutorial = null),
				function removeHandlers() {
					_this.events.unsub(Keyboard.DOWN, _this.next), _this.events.unsub(Mouse.input, Interaction.START, _this.next), _this.events.unsub(VRInput.JOYSTICK, _this.next), _this.events.unsub(PlayerControls.MOBILE_JOYSTICK, _this.next), _this.events.unsub(Player.TELEPORT, _this.next), _this.events.unsub(VideoChatZones.PROMPT, _this.next), VRInput.controllers.forEach(((c, i) => {
						_this.events.unsub(c, VRInput.BUTTON, handleVRButton)
					}))
				}()
		}, this.next = function() {
			_this.hide(), _queue.shift(), displayTutorial()
		}, this.showTutorial = function() {
			UIStore.dispatch("tutorialVisibilityChange", !0), Tests.isVR() ? this.addTutorialScreenByGroup("vr") : Device.mobile ? this.addTutorialScreenByGroup("mobile") : this.addTutorialScreenByGroup("desktop"), this.addTutorialScreenByGroup("global"), _analyticsStartEvent = _this.delayedCall((() => {
				_didShow = !0, TrackAnalytics.track("tutorialStart")
			}), 1e3)
		}, this.addTutorialScreenByGroup = function(group) {
			_this.data.filter((screen => {
				switch (group) {
					case "vr":
						return screen.isVr;
					case "mobile":
						return screen.isMobile;
					case "desktop":
						return screen.isDesktop;
					case "global":
						if (!screen.isVr && !screen.isMobile && !screen.isDesktop) return !0
				}
				return !1
			})).forEach((screen => {
				_this.show(screen.id)
			}))
		}
}), "singleton"), Namespace("DreamUI"), DreamUI.Class((function TutorialItem({
	title: title = "",
	description: description = "",
	icon: icon
}) {
	Inherit(this, DreamUI.DreamElement);
	const _this = this,
		$this = _this.element;
	let _obj = {
		value: 0
	};

	function updateTween() {
		$this.transform({
			y: 50 * (1 - _obj.value)
		}), $this.css({
			opacity: _obj.value
		})
	}! function initElement() {
		$this.goob(`\n            & {\n                background: ${StyleGuide.colors.royalBlue};\n\n                align-items: center;\n                border: 1px solid var(--white30);\n                border-radius: 1rem;\n                color: var(--white);\n                display: flex;\n                bottom: 2.5rem;\n                justify-content: center;\n                right: 2.5rem;\n                opacity: 0;\n                overflow: hidden;\n                position: absolute !important;\n                padding: 2rem 2.5rem;\n                text-align: center;\n                width: 27.7rem;\n                z-index: 100;\n                ${StyleUtil.smaller("m","\n                    width: 20rem;\n                ")}\n                transform: translateY(50px);\n\n                ${StyleGuide.smaller(StyleGuide.mobileBreakpoint,"\n                    &.hasSponsors {\n                        bottom: 7rem !important;\n                    }\n                ")}\n            }\n\n            .wrapper {\n                display: flex;\n                flex-direction: column;\n            }\n\n            .image {\n                display: block;\n                height: 3.5rem;\n                object-fit: contain;\n                width: 100%;\n            }\n\n            .content {\n                margin-bottom: 0.4rem;\n                margin-top: 2rem;\n            }\n\n            .title {\n                font: var(--ui-transparent-label2-bold);\n                text-transform: uppercase;\n            }\n\n            .description {\n                font: var(--ui-transparent-label1-regular);\n                margin-top: 0.5rem;\n            }\n\n            .progress {\n                background: var(--white);\n                bottom: 0;\n                height: 4px;\n                left: 0;\n                position: absolute !important;\n                transform: scaleX(0);\n                transform-origin: left;\n                width: 100%;\n            }\n        `), _this.wrapper = $this.create("wrapper")
	}(), icon && function initImage() {
			_this.image = _this.wrapper.create("image", "img"), _this.image.attr("src", Assets.getPath(icon))
		}(),
		function initText() {
			_this.content = _this.wrapper.create("content"), _this.title = _this.content.create("title"), _this.title.text(title), _this.description = _this.content.create("description"), _this.description.text(description)
		}(),
		function initProgress() {
			_this.progress = $this.create("progress")
		}(), GlobalUI.instance().sponsors?.sponsors?.length && $this.classList().add("hasSponsors"), _this.animateIn = function(delay = 0) {
			tween(_obj, {
				value: 1
			}, 600, "easeOutCubic", delay).onUpdate(updateTween)
		}, _this.animateOut = function(delay = 0) {
			tween(_obj, {
				value: 0
			}, 600, "easeOutCubic", delay).onUpdate(updateTween)
		}, _this.updateProgress = function(v) {
			_this.progress.scaleX = v, _this.progress.transform()
		}
})), Class((function RenderOrder() {
	this.ARTWORK_VR = 11, this.AVATAR_VR = 12, this.HOTSPOT_UI = 13, this.PATH = 9999999, this.SHADOW_ARTWORK = 14.5, this.HOTSPOT_FLOOR = 15, this.HOTSPOT_GLOW = 16, this.WATERFALL = 17, this.BATCH_UI = 22, this.DREAM_PORTAL = 23, this.TRANSPARENT_BUILDING = -1, this.TELEPORT_QUAD = 99999999, this.VR_CONTROLLER = 99999999, this.VR_TUTORIAL_PANEL = 999999, this.INFINITE_SKY = -1e3, this.CUBE_SPOTLIGHT = 1e5, this.CUBE_WIRESCREEN = 100, this.GALAXY_INFINITE_SKY = -1e3, this.GALAXY_WIRESCREEN = 100
}), "static"), Class((function SanityImageUrlBuilder() {
	const _this = this;
	let _builder;

	function parseAssetId(ref) {
		const example = "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg",
			[, id, dimensionString, format] = ref.split("-");
		if (!id || !dimensionString || !format) throw new Error(`Malformed asset _ref '${ref}'. Expected an id like "${example}".`);
		const [imgWidthStr, imgHeightStr] = dimensionString.split("x"), width = +imgWidthStr, height = +imgHeightStr;
		if (!(isFinite(width) && isFinite(height))) throw new Error(`Malformed asset _ref '${ref}'. Expected an id like "${example}".`);
		return {
			id: id,
			width: width,
			height: height,
			format: format
		}
	}
	_this.configure = function(options) {
		_builder && _builder.baseUrl === options.baseUrl && _builder.projectId === options.projectId && _builder.dataset === options.dataset || (_builder = new ImageUrlBuilder(null, options))
	}, _this.build = function(image) {
		return _this.buildRaw(image).auto("format").dpr(Device.pixelRatio).fit("min")
	}, _this.buildRaw = function(image) {
		if (!_builder) throw new Error("Need to call configure() before build()");
		return _builder.image(image)
	}, _this.getImageDimensions = function(image) {
		if (!(image = parseSource(image))) return null;
		const asset = parseAssetId(image.asset._ref || image.asset._id || "");
		return {
			width: asset.width,
			height: asset.height,
			aspectRatio: asset.width / asset.height,
			_type: "sanity.imageDimensions"
		}
	}, _this.getBuilder = function() {
		return _builder
	};
	const SPEC_NAME_TO_URL_NAME_MAPPINGS = [
		["width", "w"],
		["height", "h"],
		["format", "fm"],
		["download", "dl"],
		["blur", "blur"],
		["sharpen", "sharp"],
		["invert", "invert"],
		["orientation", "or"],
		["minHeight", "min-h"],
		["maxHeight", "max-h"],
		["minWidth", "min-w"],
		["maxWidth", "max-w"],
		["quality", "q"],
		["fit", "fit"],
		["crop", "crop"],
		["saturation", "sat"],
		["auto", "auto"],
		["dpr", "dpr"],
		["pad", "pad"]
	];

	function urlForImage(options) {
		let spec = {
			...options || {}
		};
		const source = spec.source;
		delete spec.source;
		const image = parseSource(source);
		if (!image) return null;
		const asset = parseAssetId(image.asset._ref || image.asset._id || ""),
			cropLeft = Math.round(image.crop.left * asset.width),
			cropTop = Math.round(image.crop.top * asset.height),
			crop = {
				left: cropLeft,
				top: cropTop,
				width: Math.round(asset.width - image.crop.right * asset.width - cropLeft),
				height: Math.round(asset.height - image.crop.bottom * asset.height - cropTop)
			},
			hotSpotVerticalRadius = image.hotspot.height * asset.height / 2,
			hotSpotHorizontalRadius = image.hotspot.width * asset.width / 2,
			hotSpotCenterX = image.hotspot.x * asset.width,
			hotSpotCenterY = image.hotspot.y * asset.height,
			hotspot = {
				left: hotSpotCenterX - hotSpotHorizontalRadius,
				top: hotSpotCenterY - hotSpotVerticalRadius,
				right: hotSpotCenterX + hotSpotHorizontalRadius,
				bottom: hotSpotCenterY + hotSpotVerticalRadius
			};
		return spec.rect || spec.focalPoint || spec.ignoreImageParams || spec.crop || (spec = {
				...spec,
				...fit({
					crop: crop,
					hotspot: hotspot
				}, spec)
			}),
			function specToImageUrl(spec) {
				const cdnUrl = spec.baseUrl || "/cdn.sanity.io",
					filename = `${spec.asset.id}-${spec.asset.width}x${spec.asset.height}.${spec.asset.format}`,
					baseUrl = `${cdnUrl}/images/${spec.projectId}/${spec.dataset}/${filename}`,
					params = [];
				if (spec.rect) {
					const {
						left: left,
						top: top,
						width: width,
						height: height
					} = spec.rect;
					(0 !== left || 0 !== top || height !== spec.asset.height || width !== spec.asset.width) && params.push(`rect=${left},${top},${width},${height}`)
				}
				spec.bg && params.push(`bg=${spec.bg}`);
				spec.focalPoint && (params.push(`fp-x=${spec.focalPoint.x}`), params.push(`fp-y=${spec.focalPoint.y}`));
				const flip = [spec.flipHorizontal && "h", spec.flipVertical && "v"].filter(Boolean).join("");
				flip && params.push(`flip=${flip}`);
				if (SPEC_NAME_TO_URL_NAME_MAPPINGS.forEach((mapping => {
						const [specName, param] = mapping;
						void 0 !== spec[specName] ? params.push(`${param}=${encodeURIComponent(spec[specName])}`) : void 0 !== spec[param] && params.push(`${param}=${encodeURIComponent(spec[param])}`)
					})), 0 === params.length) return baseUrl;
				return `${baseUrl}?${params.join("&")}`
			}({
				...spec,
				asset: asset
			})
	}

	function fit(source, spec) {
		let cropRect;
		const imgWidth = spec.width,
			imgHeight = spec.height;
		if (!imgWidth || !imgHeight) return {
			width: imgWidth,
			height: imgHeight,
			rect: source.crop
		};
		const crop = source.crop,
			hotspot = source.hotspot,
			desiredAspectRatio = imgWidth / imgHeight;
		if (crop.width / crop.height > desiredAspectRatio) {
			const height = crop.height,
				width = height * desiredAspectRatio,
				top = crop.top;
			let left = (hotspot.right - hotspot.left) / 2 + hotspot.left - width / 2;
			left < crop.left ? left = crop.left : left + width > crop.left + crop.width && (left = crop.left + crop.width - width), cropRect = {
				left: Math.round(left),
				top: Math.round(top),
				width: Math.round(width),
				height: Math.round(height)
			}
		} else {
			const width = crop.width,
				height = width / desiredAspectRatio,
				left = crop.left;
			let top = (hotspot.bottom - hotspot.top) / 2 + hotspot.top - height / 2;
			top < crop.top ? top = crop.top : top + height > crop.top + crop.height && (top = crop.top + crop.height - height), cropRect = {
				left: Math.max(0, Math.floor(left)),
				top: Math.max(0, Math.floor(top)),
				width: Math.round(width),
				height: Math.round(height)
			}
		}
		return {
			width: imgWidth,
			height: imgHeight,
			rect: cropRect
		}
	}
	const validFits = ["clip", "crop", "fill", "fillmax", "max", "scale", "min"],
		validCrops = ["top", "bottom", "left", "right", "center", "focalpoint", "entropy"],
		validAutoModes = ["format"];

	function rewriteSpecName(key) {
		const specs = SPEC_NAME_TO_URL_NAME_MAPPINGS;
		for (const entry of specs) {
			const [specName, param] = entry;
			if (key === specName || key === param) return specName
		}
		return key
	}
	class ImageUrlBuilder {
		constructor(parent, options) {
			this.options = parent ? {
				...parent.options || {},
				...options || {}
			} : {
				...options || {}
			}
		}
		withOptions(options) {
			const baseUrl = options.baseUrl || this.options.baseUrl,
				newOptions = {
					baseUrl: baseUrl
				};
			for (const key in options)
				if (options.hasOwnProperty(key)) {
					newOptions[rewriteSpecName(key)] = options[key]
				} return new ImageUrlBuilder(this, {
				baseUrl: baseUrl,
				...newOptions
			})
		}
		image(source) {
			return this.withOptions({
				source: source
			})
		}
		dataset(dataset) {
			return this.withOptions({
				dataset: dataset
			})
		}
		projectId(projectId) {
			return this.withOptions({
				projectId: projectId
			})
		}
		bg(bg) {
			return this.withOptions({
				bg: bg
			})
		}
		dpr(dpr) {
			return this.withOptions({
				dpr: dpr
			})
		}
		width(width) {
			return this.withOptions({
				width: width
			})
		}
		height(height) {
			return this.withOptions({
				height: height
			})
		}
		focalPoint(x, y) {
			return this.withOptions({
				focalPoint: {
					x: x,
					y: y
				}
			})
		}
		maxWidth(maxWidth) {
			return this.withOptions({
				maxWidth: maxWidth
			})
		}
		minWidth(minWidth) {
			return this.withOptions({
				minWidth: minWidth
			})
		}
		maxHeight(maxHeight) {
			return this.withOptions({
				maxHeight: maxHeight
			})
		}
		minHeight(minHeight) {
			return this.withOptions({
				minHeight: minHeight
			})
		}
		size(width, height) {
			return this.withOptions({
				width: width,
				height: height
			})
		}
		blur(blur) {
			return this.withOptions({
				blur: blur
			})
		}
		sharpen(sharpen) {
			return this.withOptions({
				sharpen: sharpen
			})
		}
		rect(left, top, width, height) {
			return this.withOptions({
				rect: {
					left: left,
					top: top,
					width: width,
					height: height
				}
			})
		}
		format(format) {
			return this.withOptions({
				format: format
			})
		}
		invert(invert) {
			return this.withOptions({
				invert: invert
			})
		}
		orientation(orientation) {
			return this.withOptions({
				orientation: orientation
			})
		}
		quality(quality) {
			return this.withOptions({
				quality: quality
			})
		}
		forceDownload(download) {
			return this.withOptions({
				download: download
			})
		}
		flipHorizontal() {
			return this.withOptions({
				flipHorizontal: !0
			})
		}
		flipVertical() {
			return this.withOptions({
				flipVertical: !0
			})
		}
		ignoreImageParams() {
			return this.withOptions({
				ignoreImageParams: !0
			})
		}
		fit(value) {
			if (-1 === validFits.indexOf(value)) throw new Error(`Invalid fit mode "${value}"`);
			return this.withOptions({
				fit: value
			})
		}
		crop(value) {
			if (-1 === validCrops.indexOf(value)) throw new Error(`Invalid crop mode "${value}"`);
			return this.withOptions({
				crop: value
			})
		}
		saturation(saturation) {
			return this.withOptions({
				saturation: saturation
			})
		}
		auto(value) {
			if (-1 === validAutoModes.indexOf(value)) throw new Error(`Invalid auto mode "${value}"`);
			return this.withOptions({
				auto: value
			})
		}
		pad(pad) {
			return this.withOptions({
				pad: pad
			})
		}
		url() {
			return urlForImage(this.options)
		}
		toString() {
			return this.url()
		}
	}

	function parseSource(source) {
		if (!source) return null;
		let image;
		if ("string" == typeof source && function isUrl(url) {
				return /^https?:\/\//.test(`${url}`)
			}(source)) image = {
			asset: {
				_ref: urlToId(source)
			}
		};
		else if ("string" == typeof source) image = {
			asset: {
				_ref: source
			}
		};
		else if ((source => !!source && "string" == typeof source._ref)(source)) image = {
			asset: source
		};
		else if ((source => !!source && "string" == typeof source._id)(source)) image = {
			asset: {
				_ref: source._id || ""
			}
		};
		else if ((source => !(!source || !source.asset) && "string" == typeof source.asset.url)(source)) image = {
			asset: {
				_ref: urlToId(source.asset.url)
			}
		};
		else {
			if ("object" != typeof source.asset) return null;
			image = source
		}
		const img = source;
		return img.crop && (image.crop = img.crop), img.hotspot && (image.hotspot = img.hotspot),
			function applyDefaults(image) {
				if (image.crop && image.hotspot) return image;
				const result = {
					...image
				};
				result.crop || (result.crop = {
					left: 0,
					top: 0,
					bottom: 0,
					right: 0
				});
				result.hotspot || (result.hotspot = {
					x: .5,
					y: .5,
					height: 1,
					width: 1
				});
				return result
			}(image)
	}

	function urlToId(url) {
		return `image-${url.split("/").slice(-1)[0]}`.replace(/\.([a-z]+)$/, "-$1")
	}
}), "static"), Class((function SanityUtils() {
	Inherit(this, Component);
	this.sanitizeObject = function(obj, includeType = !1) {
		return obj._id && (obj.id = obj._id, delete obj._id), obj._rev && delete obj._rev, obj._updatedAt && delete obj._updatedAt, obj._createdAt && delete obj._createdAt, obj._key && delete obj._key, obj._type && includeType ? (obj.type = obj._type, delete obj._type) : delete obj._type, obj
	}
}), "static"), Class((function StyleGuide() {
	Inherit(this, Component);
	const _this = this;
	Global.PLAYGROUND && Stage.css({
		opacity: 1
	});
	for (const key in StyleUtil) StyleUtil.hasOwnProperty(key) && !this[key] && (this[key] = StyleUtil[key]);
	this.breakpoints = {
		xxs: 320,
		mob: 375,
		tablet: 768,
		m: 960,
		l: 1024,
		xl: 1280,
		xxl: 1440,
		xxxl: 1920,
		xxxxl: 2048
	}, this.mobileBreakpoint = _this.breakpoints.m, this.heightBreakpoint = {
		small: 580,
		medium: 760
	}, this.colors = {
		white: "#FFFFFF",
		flint: "#6D6966",
		royalBlue: "#5757D8",
		black: "#000000",
		grey: "#F5F5F5",
		redError: "#ce6767"
	}, this.manropeRegular = "\n        & {\n            font-family: 'Manrope', sans-serif;\n            font-weight: 400;\n            font-style: normal;\n        }\n    ", this.manropeMedium = "\n        & {\n            font-family: 'Manrope', sans-serif;\n            font-weight: 500;\n            font-style: normal;\n        }\n    ", this.manropeSemibold = "\n        & {\n            font-family: 'Manrope', sans-serif;\n            font-weight: 600;\n            font-style: normal;\n        }\n    ", this.manropeBold = "\n        & {\n            font-family: 'Manrope', sans-serif;\n            font-weight: 700;\n            font-style: normal;\n        }\n    ", this.lateralPadding = {
		mob: 25,
		xl: 50
	}, this.isMobile = () => Device.mobile.phone || window.innerWidth < 768 || window.innerWidth / window.innerHeight < 1.25 && window.innerWidth < 1300 || window.innerHeight < 500, this.isLandscape = () => Stage.width > Stage.height, this.windowLessThan = breakpoint => window.innerWidth < _this.breakpoints[breakpoint], this.getGLFont = function(weight, italic) {
		let fontFamily = "";
		switch (weight) {
			case 600:
			default:
				fontFamily = "Manrope-SemiBold";
				break;
			case 800:
				fontFamily = "Manrope-ExtraBold"
		}
		return italic && (fontFamily += "Italic"), "Manrope-SemiBold"
	}, this.getCSSFont = function(family, weight) {
		let sg = {
			fontFamily: "Manrope",
			fontWeight: `${weight}`
		};
		return sg.fontFamily += ", Helvetica, Arial, sans-serif", sg
	}, this.nonCSSLateralPadding = function() {
		return Math.map(Stage.width, _this.breakpoints.mob, _this.breakpoints.xl, _this.lateralPadding.mob, _this.lateralPadding.xl, !0)
	}, this.getStyle = (style, weight = !1, gl = !0) => {
		let family, size, lineHeight;
		switch (family = gl ? _this.getGLFont(weight) : _this.getCSSFont(weight), lineHeight = gl ? 1.45 : "1.45em", style) {
			case "title":
				size = _this.isMobile() ? 45 : 136;
				break;
			case "h1":
				size = _this.isMobile() ? 28 : 115;
				break;
			case "h2":
			case "h3":
				_this.isMobile(), size = 30;
				break;
			case "h4":
				size = _this.isMobile() ? 12 : 24;
				break;
			case "label":
				size = _this.isMobile() ? 8 : 11;
				break;
			default:
				size = _this.isMobile() ? 12 : 16
		}
		return gl ? {
			family: family,
			size: size,
			options: {
				lineHeight: lineHeight,
				letterSpacing: undefined
			}
		} : {
			...family,
			fontSize: size,
			lineHeight: lineHeight,
			letterSpacing: undefined
		}
	}
}), "static"), Class((function Tests() {
	Inherit(this, Component);
	const _this = this;
	Global.VR_READY = Promise.create(), this.unsupported = function() {
		return !!GPU.BLOCKLIST || !Device.graphics.webgl
	}, this.capDPRDown = function() {
		return GPU.lt(0) ? Math.min(Device.pixelRatio, 1) : GPU.lt(1) ? Math.min(Device.pixelRatio, 1.2) : GPU.lt(2) ? Math.min(Device.pixelRatio, 1.3) : GPU.lt(3) ? Math.max(Stage.width, Stage.height) < 1400 ? Math.min(Device.pixelRatio, 1.4) : Math.min(Device.pixelRatio, 1.3) : GPU.lt(4) ? Math.min(Device.pixelRatio, 1.5) : GPU.lt(5) ? Math.max(1.6, Math.min(Device.pixelRatio, 1.6)) : GPU.mobileLT(0) ? .85 : GPU.mobileLT(1) ? Math.min(Device.pixelRatio, 1) : GPU.mobileLT(2) ? Math.min(Device.pixelRatio, 1.3) : GPU.mobileLT(3) ? Math.min(Device.pixelRatio, 1.4) : !!GPU.mobileLT(4) && Math.min(Device.pixelRatio, 1.5)
	}, this.capFPSDown = function() {
		return !(!GPU.lt(3) || "safari" !== Device.system.browser) && 30
	}, this.isVR = function() {
		return Platform.usingVR()
	}, this.controlsConfig = function(env) {
		return {
			xMax: 32,
			xAngle: 20
		}
	}, this.controlsFOV = function() {
		return 1.1 * (Device.mobile.phone ? 1.2 : 1)
	}, this.maxMouseTeleport = function() {
		return 10
	}, this.displayAvatarReflections = function() {
		return !0
	}, this.onlyUserAvatarReflection = function() {
		return !0
	}, this.renderMirror = function() {
		return !Platform.usingVR() && (!GPU.mobileLT(2) && !GPU.lt(1))
	}, this.renderBloom = function() {
		return !!GPU.gt(3) || !!GPU.mobileGT(4)
	}, this.lidarParticleAmountMore = function() {
		return GPU.lt(0) ? 1e5 : GPU.lt(3) ? 2e5 : 26e4
	}, this.lidarParticleAmountNormal = function() {
		return GPU.lt(0) ? 7e4 : GPU.lt(3) ? 16e4 : 2e5
	}, this.lidarParticleAmountLess = function() {
		return GPU.lt(0) ? 3e4 : GPU.lt(3) ? 1e5 : 16e4
	}, this.imageParticleCount = function() {
		return GPU.lt(0) ? 1024 : GPU.lt(3) ? 2500 : 4096
	}, this.renderMouseFluid = function() {
		return !GPU.lt(0) && (!GPU.mobileLT(2) && !Platform.usingVR())
	}, this.useVFX = function() {
		return !Utils.query("novfx") && (!Platform.usingVR() && !(!Device.graphics.webgl.webgl2 || Platform.forceWebGL1()))
	}, this.VFX_FLOAT_MRT = function() {
		return "ios" !== Device.system.os
	}, this.renderLightShafts = function() {
		return !Platform.usingVR() && (!GPU.lt(1) && !GPU.mobileLT(1))
	}, this.renderWaterfall = function() {
		return (!Platform.usingVR() || !GPU.mobileLT(3)) && (!GPU.lt(0) && !GPU.mobileLT(1))
	}, this.renderKinetic = function() {
		return (!Platform.usingVR() || !GPU.mobileLT(3)) && (!GPU.lt(0) && !GPU.mobileLT(1))
	}, this.renderBirds = function() {
		return !Platform.usingVR() && (!GPU.lt(1) && !GPU.mobileLT(1))
	}, this.renderGardenLeaves = function() {
		return !Platform.usingVR() && (!GPU.lt(1) && !GPU.mobileLT(1))
	}, this.complexTransitionShader = function() {
		return !Platform.usingVR() && (!GPU.lt(0) && !GPU.mobileLT(1))
	}, this.complexMarbleShader = function() {
		return !Platform.usingVR() && (!GPU.lt(1) && !GPU.mobileLT(1))
	}, this.showCompass = function() {
		return !Utils.query("disablecompass") && (!Platform.usingVR() || !GPU.mobileLT(3))
	}, this.grassDensity = function() {
		return Platform.usingVR() && GPU.mobileLT(3) ? 0 : Platform.usingVR() ? .4 : GPU.lt(1) || GPU.mobileLT(1) ? .5 : 1
	}, this.useVideoArtwork = function() {
		return !GPU.lt(0) && !GPU.mobileLT(1)
	}, this.videoAlwaysPlaying = function() {
		return !!this.useVideoArtwork() && (!Device.mobile && !GPU.lt(3))
	}, this.renderLidars = function() {
		return !GPU.lt(0) && !GPU.mobileLT(0)
	}, this.lidarParticles = function() {
		return GPU.lt(1) ? 16384 : GPU.lt(2) ? 65536 : GPU.mobileLT(1) || Platform.usingVR() ? 16384 : Device.mobile ? 65536 : 262144
	}, this.showDescription = function() {
		return !GPU.lt(0) && (!GPU.mobileLT(1) && !Platform.usingVR())
	}, this.portalShowIdleVideo = function() {
		return !GPU.lt(0) && !GPU.mobileLT(1)
	}, this.artworkQuality = function() {
		return Platform.usingVR() || GPU.lt(1) ? .6 : GPU.mobileLT(2) ? .7 : GPU.mobileLT(4) || GPU.lt(3) ? .8 : 1
	}, this.avatarParticles = function() {
		return Platform.usingVR() || GPU.lt(1) || GPU.mobileLT(2) ? 1e4 : 1e5
	}, this.avatarTransitionSpawn = function() {
		return (!Platform.usingVR() || !GPU.mobileLT(3)) && !GPU.lt(0)
	}, this.avatarShadow = function() {
		return !Platform.usingVR() && (!GPU.lt(1) && !GPU.mobileLT(1))
	}, this.frostedGlassDoubled = function() {
		return !Platform.usingVR() && (!GPU.lt(0) && !GPU.mobileLT(2))
	}, this.roomCulling = function() {
		return !!Platform.usingVR() || (!!GPU.lt(3) || !!GPU.mobileLT(3))
	}, this.renderInsideFog = function() {
		return !Platform.usingVR() && (!GPU.lt(1) && !GPU.mobileLT(1))
	}, this.rainParticles = function() {
		return Platform.usingVR() || GPU.lt(0) || GPU.mobileLT(1) ? 500 : 4e3
	}, this.hotSpotShared = function() {
		return (!Platform.usingVR() || !GPU.mobileLT(3)) && !GPU.lt(0)
	}, this.uiRetina = function() {
		return !!_this.useVFX()
	}, this.autoJoinChatOnEnterHotspot = function() {
		return "safari" !== Device.system.browser && ("ios" !== Device.system.os || "safari" !== Device.system.browser)
	}, this.mediaAllowed = function() {
		return !this.autoJoinChatOnEnterHotspot() || "success" === GameCenterMedia.state.get("hasMediaAccess")
	}
}), "static"), Class((function WsjPerformance() {
	Inherit(this, Component);
	const _this = this;

	function show() {
		for (let t in Tests)
			if (!_this[t]) {
				let result = Tests[t]();
				result ? console.log(`%c ${t} - ${result}`, "background: #222; color: #00ff00") : console.log(`%c ${t} - ${result} `, "background: #222; color: #ff0000")
			}
	}!async function() {
		await Hydra.ready(), await GPU.ready(), Utils.query("wsjperformance") && _this.delayedCall(show, 2e3)
	}()
}), "static"), Class((function AppCMSConfig() {
	Inherit(this, Model);
	const _this = this;
	let _cmsConfig = {};
	!async function() {
		await Hydra.ready(), Global.LOADER.add(1), await async function fetchAppConfig() {
			_cmsConfig = await CMSQuery.fetchContent('\n            *[_type == "appConfig" && _id == "appConfig"][0]\n        '), async function setGallery() {
				const {
					defaultGallery: defaultGallery
				} = _cmsConfig, customGalleryQuery = Utils.query("gallery");
				let customGallery;
				customGalleryQuery && (customGallery = await CMSQuery.fetchContent(`\n                *[_type == "gallery" && slug.current == "${customGalleryQuery}"][0] {\n                    ...\n                }\n            `));
				if (customGallery) await Gallery.setFromCMSObject(customGallery);
				else {
					if (!defaultGallery) throw new Error("No gallery was defined as default, and no custom gallery requested.  Please set a default gallery for the app in the CMS");
					await Gallery.setFromCMSObject(defaultGallery)
				}
			}()
		}(), await LandingText.ready(), _this.portal = await PortalConfig.get(), _this.dataReady = !0, Global.LOADER.trigger(1)
	}(), _this.get("data", (() => _cmsConfig))
}), "static"), Class((function ArtPiece() {
	Inherit(this, Model);
	const _this = this;
	let _allArtPieces;
	_this.getAll = async function() {
		return await Gallery.ready(), _allArtPieces = Gallery.activeHotspots.map((hotspot => {
			const obj = {
				...hotspot.artPiece
			};
			return SanityUtils.sanitizeObject(obj), obj.galleryVisual && SanityUtils.sanitizeObject(obj.galleryVisual, !0), obj.hotspotDetail && (obj.hotspotDetail.detailModules && obj.hotspotDetail.detailModules.forEach((detailModule => {
				SanityUtils.sanitizeObject(detailModule, !0)
			})), obj.hotspotDetail.environmentTemplate && (obj.hotspotDetail.environmentTemplate.variation = obj.hotspotDetail.environmentTemplate.type, obj.hotspotDetail.environmentTemplate.type = obj.hotspotDetail.environmentTemplate._type, SanityUtils.sanitizeObject(obj.hotspotDetail.environmentTemplate))), obj
		})), _this.dataReady = !0, _allArtPieces
	}, _this.getById = async function(id) {
		await Gallery.ready(), _this.dataReady && await _this.ready();
		const result = _allArtPieces.find((_artPiece => _artPiece.id === id));
		return result || console.error(`An artpiece was looked up by ID, but it doesn't exist.  The id was: ${id}`), result
	}, _this.get("all", (() => _hotspots))
}), "static"), Class((function CMSQuery() {
	Inherit(this, Model);
	const _this = this,
		ENDPOINT = Config.API.replace("/dream", "/sanity-proxy");

	function charIsWhiteSpace(char) {
		return " " === char || "\n" === char || "\t" === char
	}!async function() {
		await Hydra.ready(), _this.dataReady = !0
	}(), _this.fetchContent = async function(query = "", params, cacheTimeSeconds) {
		if (!query) throw new Error("The query passed to CMSQuery.query was undefined");
		query = function minifyGroq(groqQuery, ...args) {
			const query = Array.isArray(groqQuery) ? function buildQuery(parts, args) {
					const len = parts.length;
					let query = "";
					for (let i = 0; i < len; i++) query += parts[i], i < len - 1 && (query += JSON.stringify(args[i]));
					return query
				}(groqQuery, args) : groqQuery,
				len = query.length;
			if (0 === len) return "";
			let out = "",
				pos = 0,
				inSingle = !1,
				inDouble = !1;
			do {
				const prev = query[pos - 1],
					char = query[pos],
					isWhiteSpace = charIsWhiteSpace(char),
					prevWasWhiteSpace = charIsWhiteSpace(prev);
				pos++, '"' !== char || "\\" === prev ? "'" !== char || "\\" === prev ? inSingle || inDouble ? out += char : isWhiteSpace && prevWasWhiteSpace || (out += char) : (inSingle = !inSingle, out += char) : (inDouble = !inDouble, out += char)
			} while (pos < len);
			return out.trim()
		}(query), query = encodeURIComponent(query);
		let qs = ["resolveImages=false"],
			version = Hydra.LOCAL ? `local_${Date.now()}` : Config.CACHE_KEY || window._CACHE_ || Date.now();
		if (AppState.get("preview") && _this.hasPreviewToken() && (version = `preview_${Date.now()}`, qs.push(`token=${encodeURIComponent(window.sessionStorage.getItem("CMSQueryPreviewToken"))}`)), qs.push(`v=${version}`), cacheTimeSeconds) {
			let cacheTimeNum = Number(cacheTimeSeconds);
			Number.isNaN(cacheTimeNum) || qs.push(`cache=${cacheTimeSeconds}`)
		}
		qs.push(`q=${query}`), params && Object.keys(params).forEach((key => {
			let param = params[key];
			if (Array.isArray(param)) {
				let itemKey = `${encodeURIComponent(key)}[]`,
					values = param.map((item => `${itemKey}=${encodeURIComponent(item)}`));
				qs.push(...values)
			} else qs.push(`${encodeURIComponent(key)}=${encodeURIComponent(param)}`)
		}));
		let resultingObject = null;
		try {
			const result = await get(`${ENDPOINT}?${qs.join("&")}`, {
				credentials: "omit"
			});
			result.imageUrlBuilderOptions && SanityImageUrlBuilder.configure(result.imageUrlBuilderOptions), resultingObject = result.data
		} catch (e) {
			console.warn("CMSQuery: An error occurred fetching CMS data. The query that failed was:", decodeURIComponent(query)), console.warn(e)
		}
		return resultingObject
	}, _this.setPreviewToken = function(token) {
		window.sessionStorage.setItem("CMSQueryPreviewToken", token)
	}, _this.forgetPreviewToken = function() {
		window.sessionStorage.removeItem("CMSQueryPreviewToken")
	}, _this.hasPreviewToken = function() {
		return !!window.sessionStorage.getItem("CMSQueryPreviewToken")
	}
}), "static"), Class((function Credits() {
	Inherit(this, Model);
	let _config;
	this.get = async function() {
		if (_config) return _config;
		const config = await CMSQuery.fetchContent('*[_type == "credits" && _id == "credits"][0]');
		return _config = SanityUtils.sanitizeObject(config), delete _config.postCredits, _config
	}
}), "static"), Class((function EventFinityAuth() {
	Inherit(this, Model);
	const _this = this;
	let uid;
	uid = Utils.query("uid"), _this.dataReady = !0, _this.login = async function() {
		if (!Config.EVENT_AUTH_REQUIRED || window.process) return !0;
		if (!uid) return !1;
		try {
			let response = await get(`${Config.API.replace("/dream","")}/eventfinity?uid=${uid}`);
			return !!response.token && (await PlatformAuth.login().with("customToken", response.token), await User.loggedIn((() => {
				_this.setUserLoggedIn()
			})), !0)
		} catch (e) {
			return console.log(e), !1
		}
	}, _this.setUserLoggedIn = async function() {
		const userDocSnap = await PlatformFirestore.collection("users").doc(User.uid).get();
		let count = 0;
		if (userDocSnap.exists) {
			const data = userDocSnap.data();
			data.numTimesVisited && (count = data.numTimesVisited)
		}
		count++, PlatformFirestore.collection("users").doc(User.uid).update({
			numTimesVisited: count,
			lastVisit: PlatformFirestore.timestamp()
		})
	}, _this.getVRCode = async function() {
		if (!User.uid) return;
		let device = PlatformFirestore.collection("devices").doc(),
			{
				data: data
			} = await PlatformFunctions.httpsCallable("dream-auth_devices")({
				method: "vrCode",
				data: {
					deviceId: device.id
				}
			});
		Hydra.LOCAL && console.log("YOUR VR CODE IS", data.userCode);
		let unsubscribe = PlatformFirestore.collection("devices").doc(data.deviceCode).onSnapshot((() => {}), (() => {
			unsubscribe(), _this.events.fire(this.UPDATE_CODE, data.userCode)
		}));
		return data.userCode
	}
}), "static"), Class((function FAQs() {
	Inherit(this, Model);
	let _faqs;
	this.getAll = async function() {
		if (_faqs) return _faqs;
		const faqs = await CMSQuery.fetchContent('*[_type == "faq"] | order(order asc)');
		return _faqs = faqs.map((faq => ({
			id: faq._id,
			question: faq.question,
			answer: faq.answerBlocks
		}))), _faqs
	}
}), "static"), Class((function Gallery() {
	Inherit(this, Model);
	const _this = this;
	let _id, _slug, _rawActiveHotspots;
	_this.setFromCMSObject = async function(cmsObj = {}) {
		_id = cmsObj._id, _slug = cmsObj.slug?.current, await async function getActiveHotspots() {
			return _rawActiveHotspots || (_rawActiveHotspots = await CMSQuery.fetchContent(`\n            *[_type == "gallery" && _id == "${_id}"][0] {\n                hotspots[] {\n                    artPiece->,\n                    hotspot->\n                }\n            }\n        `), _rawActiveHotspots || [])
		}(), _this.dataReady = !0
	}, _this.get("id", (() => _id)), _this.get("activeHotspots", (() => _rawActiveHotspots.hotspots))
}), "static"), Class((function Hotspots() {
	Inherit(this, Model);
	let _hotspots, _activeHotspots;
	this.getAllPossible = async function() {
		await Gallery.ready();
		const hotspots = await CMSQuery.fetchContent('*[_type == "hotspot"]');
		return _hotspots = hotspots.map((hotspot => ({
			id: hotspot._id,
			slug: hotspot.slug?.current,
			title: hotspot.title
		}))), _hotspots
	}, this.getCurrentInGallery = async function() {
		await Gallery.ready(), _activeHotspots = Gallery.activeHotspots.map((hotspot => ({
			id: hotspot.hotspot._id,
			slug: hotspot.hotspot.slug?.current,
			title: hotspot.hotspot.title,
			artPieceId: hotspot.artPiece._id
		})))
	}, this.get("all", (() => _hotspots))
}), "static"), Class((function LandingText() {
	Inherit(this, Model);
	const _this = this;
	let _data;
	!async function fetch() {
		_data = await CMSQuery.fetchContent('\n            *[_type == "landing" && _id == "landing"][0]\n        ')
	}(), _this.dataReady = !0, this.get("data", (() => _data))
}), "static"), Class((function PortalConfig() {
	Inherit(this, Model);
	let _config;
	this.get = async function() {
		if (_config) return _config;
		const config = await CMSQuery.fetchContent('*[_type == "portalConfig" && _id == "portalConfig"][0]');
		return _config = SanityUtils.sanitizeObject(config), _config
	}
}), "static"), Class((function CaptionsController() {
	Inherit(this, Component), Inherit(this, StateComponent);
	const _this = this;
	let _captionEl, _captionSequence, _index, _visible = !0,
		_pausedTime = 0,
		_startPauseTime = 0,
		_captions = [];
	async function onToggleAudio({
		value: hotspotId
	}) {
		if (!hotspotId) return stop(!0);
		const hotspot = HotSpotStore.get("hotspot");
		hotspot && (_captionSequence = await async function getCaptions(hotspot) {
			if (_captions[hotspot.id]) return _captions[hotspot.id];
			const srtURL = hotspot?.data?.artPiece?.hotspotDetail?.voiceover?.subtitles?.asset?.url;
			let srt;
			try {
				const res = await fetch(srtURL);
				srt = await res.text()
			} catch (e) {
				return void console.log("ERROR FETCHING SRT", e)
			}
			const threadsrt = Promise.create();
			Thread.shared().parseSRTThread({
				srt: srt
			}, (c => {
				threadsrt.resolve(c.items)
			}));
			const captions = await threadsrt;
			return _captions.push({
				id: hotspot.id,
				captions: captions
			}), captions
		}(hotspot), _captionSequence && (_this.ready.resolve(), _this.show(), _this.start(), _captionEl?.text.setText(_captionSequence[0].text)))
	}

	function parseSRTThread(_data, id) {
		const _timeS = val => {
			var parts = /(\d+):(\d{2}):(\d{2}),(\d{3})/.exec(val);
			if (null === parts) return 0;
			for (var i = 1; i < 5; i++) parts[i] = parseInt(parts[i], 10), isNaN(parts[i]) && (parts[i] = 0);
			return 3600 * parts[1] + 60 * parts[2] + 1 * parts[3] + parts[4] / 1e3
		};
		let data = _data.srt.replace(/\r/g, "");
		data = data.split(/(\d+)\n(\d{2}:\d{2}:\d{2},\d{3}) --> (\d{2}:\d{2}:\d{2},\d{3})/g), data.shift();
		const items = [];
		for (var i = 0; i < data.length; i += 4) items.push({
			id: data[i].trim(),
			startTime: _timeS(data[i + 1].trim()),
			endTime: _timeS(data[i + 2].trim()),
			text: data[i + 3].trim()
		});
		resolve({
			items: items
		}, id)
	}
	async function loop() {
		const audio = HotSpotStore.get("audio");
		if (!_captionSequence || !_captionSequence.length || !audio) return;
		if (_index >= _captionSequence.length) return void stop();
		if (!audio.currentTime) return;
		let elapsedTime = audio.currentTime,
			caption = _captionSequence[_index];
		if (!caption) return;
		let startTime = caption.startTime,
			endTime = caption.endTime,
			text = caption.text.replace("…", "...");
		text = text.replace("’", "'"), _captionEl?.setText(text), elapsedTime > startTime && elapsedTime < endTime ? await _captionEl.animateTextIn() : elapsedTime > endTime && (_index++, _captionEl.animateTextOut())
	}

	function stop(isManual = !1) {
		_this.flag("playing", !1), _captionEl?.animateOut(), _this.stopRender(loop), _this.ready = Promise.create(), isManual || _this.events.fire(CaptionsController.CAPTIONS_ENDED)
	}
	this.ready = Promise.create(),
		function addHandlers() {
			_this.events.sub(Events.VISIBILITY, (async e => {
				if (_this.flag("playing")) switch (e.type) {
					case "focus":
						return void(_pausedTime = Date.now() - _startPauseTime + _pausedTime);
					case "blur":
						_startPauseTime = Date.now()
				}
			})), _this.events.sub(HotSpotAudioManager.PLAY_HOTSPOT_AUDIO, onToggleAudio)
		}(), Thread.upload(parseSRTThread), this.setElement = function(el) {
			_captionEl = el
		}, this.start = async function() {
			if (!_captionSequence) throw "No SRT sequence loaded";
			await _this.ready, async function start() {
				_captionSequence && _captionSequence.length && _captionEl && (_this.flag("playing", !0), _pausedTime = _startPauseTime = 0, _index = 0, _captionEl.setText(_captionSequence[0].text), _captionEl?.animateIn(), _this.startRender(loop, 24))
			}()
		}, this.toggleVRCaptions = _ => {
			_visible = !_visible, _this.events.fire(CaptionsController.TOGGLE_VR_CAPTIONS, {
				visible: _visible
			})
		}, this.hide = function() {}, this.show = function() {}, this.get("visible", (() => _visible))
}), "singleton", (() => {
	CaptionsController.CAPTIONS_ENDED = "captions_ended", CaptionsController.TOGGLE_VR_CAPTIONS = "CaptionsController.TOGGLE_VR_CAPTIONS"
})), Class((function FOEFNFTGalleryGlobal() {
	Inherit(this, Component);
	const _this = this;

	function eventfinityAuthGuard({
		world: world
	}) {
		return Platform.usingVR() || !Config.EVENT_AUTH_REQUIRED || PortalUtil.isPortal ? {
			world: world,
			path: ""
		} : _this.isLoggedIn ? {
			world: "default",
			path: ""
		} : {
			world: "access-required",
			path: "access-required"
		}
	}!async function() {
		if (Tests.unsupported()) throw window.location.href = "notsupported.html", new Error("not supported");
		if (await Gallery.ready(), Platform.blockFirstLoad(), function setColorsAndStyles() {
				DreamColors.instance().init(FOEFNFTGalleryColors.colors), FOEFNFTGalleryStyleguide.init(), DreamStyleguide.instance().init({
					fonts: FOEFNFTGalleryStyleguide.fonts,
					styles: FOEFNFTGalleryStyleguide.styles
				})
			}(), Platform.usingVR() && (Mobile.fullscreen(), Mobile.setOrientation("landscape")), Global.PLAYGROUND) Worlds.instance().unblockFirstLoad();
		else {
			await UIController.instance().init({
				ClassComponent: UIPageLayout
			}), await PlatformServices.init(), await User.ready();
			let loggedIn = await User.checkLoginStatusOnce();
			if (loggedIn) await _this.userReady(), EventFinityAuth.setUserLoggedIn();
			else try {
				if (!(await EventFinityAuth.login())) throw new Error("Eventfinity auth failed");
				if (Config.EVENT_AUTH_REQUIRED && !PortalUtil.isPortal) {
					await User.loggedIn() && (await _this.userReady(), loggedIn = !0)
				}
			} catch (e) {}
			_this.isLoggedIn = loggedIn || await User.checkLoginStatusOnce(),
				function initRoutes() {
					let routes = [{
						path: "access-required",
						world: "access-required"
					}, {
						path: /.*/,
						world: "default",
						guard: eventfinityAuthGuard
					}];
					RoutesController.registerRoutes(routes)
				}(),
				function initLayout() {
					GlobalUI.instance()
				}(), VRInput.setControllerObject(VRController), _this.flag("isReady", !0), Platform.unblockFirstLoad()
		}
	}(), _this.userReady = async function() {
		await User.ready(), await _this.wait(User, "profile")
	}, _this.ready = function() {
		return _this.wait("isReady")
	}
}), "static"), Class((function VRCaptionWrapper() {
	Inherit(this, UI3D);
	const _this = this;
	var $this;
	let _captions;
	async function setPosition() {
		await RenderManager.scheduleOne(RenderManager.EYE_RENDER);
		let extrude = new Vector3(0, 0, -1.5),
			q = World.CAMERA.quaternion.clone(),
			angle = Math.atan2(q.y, q.w) + Math.PI;
		q.set(0, Math.sin(angle), 0, Math.cos(angle)), extrude = extrude.applyQuaternion(q);
		let point = World.CAMERA.position.clone();
		point.y -= .7, _this.flag("initialPositionSet") ? (_this.parent.group.position.lerp(point.add(extrude), .7), _this.parent.group.quaternion.slerp(q, .7)) : (_this.flag("initialPositionSet", !0), _this.parent.group.position.copy(point.add(extrude)), _this.parent.group.quaternion.copy(q))
	}
	_this.ready = Promise.create(), async function() {
		let width = Platform.usingVR() ? VRCaptionWrapper.DIMENSIONS.width : 0,
			height = Platform.usingVR() ? VRCaptionWrapper.DIMENSIONS.height : 0;
		if (console.log(VRCaptionWrapper.DIMENSIONS), _this.create(width, height, 1), !Platform.usingVR()) return;
		$this = _this.root, _this.capture.mouseEnabled = !1, _this.parent.visible = !0, _this.parent.group.renderOrder = 990, await _this.parent.parent.ready;
		const planeMesh = (await _this.parent.parent.getLayer("captions")).group.children[0].children[0];
		planeMesh.renderOrder = 99, planeMesh.shader.depthTest = !1, planeMesh.shader.depthWrite = !1, await async function initCaption() {
			_captions = GLUIWrapper.instance().captions, $this.add(_captions.element)
		}(), _this.startRender(setPosition), Global.PLAYGROUND && _this.animateIn(), _this.ready.resolve(), _this.events.sub(CaptionsController.TOGGLE_VR_CAPTIONS, (e => {
			_this.parent.visible = e.visible
		}))
	}(), this.animateIn = async function() {
		await _this.ready, undefined.animateIn(), _this.parent.visible = !0
	}, this.animateOut = async function() {
		_this.parent.visible = !1
	}, this.get("captionEl", (async () => (await _this.ready, _captions)))
}), (() => {
	VRCaptionWrapper.DIMENSIONS = {
		width: 1500,
		height: 300
	}
})), Class((function VRMainMenu() {
	Inherit(this, Object3D);
	const _this = this;
	let _layout, _menuLayer;
	!async function() {
		await async function initScene() {
			_layout = _this.initClass(SceneLayout, "VRMainMenu"), _menuLayer = await _layout.getLayer("PlaneMenu"), _menuLayer.renderOrder = 999, _this.events.fire(VRMainMenu.HANDLE_VISIBILITY, {
				status: !1
			})
		}()
	}(), _this.onOpen = function() {
		_this.visible = !0, _this.events.fire(VRMainMenu.HANDLE_VISIBILITY, {
			status: !0
		})
	}, _this.onClose = function() {
		_this.events.fire(VRMainMenu.HANDLE_VISIBILITY, {
			status: !1
		}), _this.visible = !1
	}
}), (() => {
	VRMainMenu.HANDLE_VISIBILITY = "VRMainMenu.HANDLE_VISIBILITY"
}), "singleton"), Class((function VRMenuHotspots(callback) {
	Inherit(this, UI3D), Inherit(this, StateComponent);
	const _this = this;
	var $this, $bg;
	let $close, hotspots = [];
	_this.ready = Promise.create(), async function() {
		_this.create(576, 850, 2), await async function initHTML() {
			$this = _this.root, ($bg = $gl(576, 850, "#5757D8")).setZ(10), $this.add($bg), Gallery.activeHotspots.forEach((async (item, i) => {
				const title = item.artPiece.title,
					hotspot = item.hotspot.slug.current;
				hotspots[i] = new TextLink({
					style: "h3",
					text: `${title}`,
					weight: 400,
					color: StyleGuide.colors.white,
					width: 500,
					underlineColor: "#5757D8",
					align: "center",
					cb: () => {
						_this.events.fire(HotSpotManager.TELEPORT, hotspot)
					}
				}), hotspots[i].$text.setZ(11), await hotspots[i].ready, hotspots[i].element.x = 288, hotspots[i].element.y = 50 + 40 * i, hotspots[i].animateIn(), $this.add(hotspots[i].element)
			})), $close = new TextLink({
				style: "h2",
				text: "X",
				weight: 400,
				color: StyleGuide.colors.white,
				width: 270,
				underlineColor: "#5757D8",
				align: "left",
				cb: () => {
					callback()
				}
			}), $close.$text.setZ(11), await $close.ready, $close.$text._underline.setZ(2), $close.element.x = 536, $close.element.y = 10, $close.animateIn(), $this.add($close.element)
		}(), _this.ready.resolve()
	}()
})), Class((function VRMenuLayer() {
	Inherit(this, UI3D), Inherit(this, StateComponent);
	const _this = this;
	let $this, hotspots, options;
	_this.ready = Promise.create();

	function removeHotspots() {
		hotspots.root.hide(), $this.removeChild(hotspots.root), hotspots.root.x = 1e3, options.root.show(), $this.add(options.root), options.root.x = 0
	}

	function showHotspots() {
		options.root.hide(), $this.removeChild(options.root), options.root.x = 1e3, hotspots.root.show(), $this.add(hotspots.root), hotspots.root.x = 0
	}!async function() {
		_this.create(576, 850, 2), await async function initHTML() {
			$this = _this.root, hotspots = _this.initClass(VRMenuHotspots, removeHotspots), $this.add(hotspots.root), options = _this.initClass(VRmenuOptions, showHotspots), $this.add(options.root), removeHotspots(), $this.hide(), _this.events.sub(VRMainMenu.HANDLE_VISIBILITY, (e => {
				e.status ? (_this.show(), $this.show()) : (_this.hide(), $this.hide())
			}))
		}(), _this.ready.resolve()
	}(), this.animateIn = async () => {}, this.animateOut = async () => {}
})), Class((function VRPlaybackSpeedToggle() {
	Inherit(this, UI3D), Inherit(this, StateComponent);
	const _this = this;
	let $this, $bg, $button, _isReady;
	AudioController.instance();
	!async function() {
		_isReady = Promise.create(), _this.create(200, 200, 2), await async function initHTML() {
			$this = _this.root, $bg = $gl(200, 200, "#ffffff"), $bg.alpha = 0, $this.add($bg), await async function initToggleButton() {
				$button = _this.initClass(UIButton, {
					width: 200,
					height: 200,
					text: "1x",
					textSizeFactor: 4,
					color: new Color(StyleGuide.colors.white),
					bgColor: new Color(StyleGuide.colors.royalBlue),
					hoverColor: new Color(StyleGuide.colors.white),
					invColor: new Color(StyleGuide.colors.royalBlue),
					cb: async () => {
						console.log("CLICK!")
					}
				}), await $button.ready, $button.animateIn(), $this.add($button.element), _isReady.resolve()
			}()
		}()
	}(), this.get("button", (_ => $button)), this.get("isReady", (_ => _isReady))
}), "singleton"), Class((function VRSponsors() {
	Inherit(this, UI3D);
	const _this = this;
	var $this;
	let width, height, sponsors;
	async function setPosition() {
		let extrude = new Vector3(0, 1.2, -1.5),
			q = World.CAMERA.quaternion.clone(),
			angle = Math.atan2(q.y, q.w) + Math.PI;
		q.set(0, Math.sin(angle), 0, Math.cos(angle)), extrude = extrude.applyQuaternion(q);
		let point = World.CAMERA.position.clone();
		point.y -= .7, _this.flag("initialPositionSet") ? (_this.parent.group.position.lerp(point.add(extrude), .7), _this.parent.group.quaternion.slerp(q, .7)) : (_this.flag("initialPositionSet", !0), _this.parent.group.position.copy(point.add(extrude)), _this.parent.group.quaternion.copy(q))
	}
	_this.ready = Promise.create(), async function() {
		if (width = Platform.usingVR() || Utils.query("debugVRUI") ? VRSponsors.DIMENSIONS.width : 0, height = Platform.usingVR() || Utils.query("debugVRUI") ? VRSponsors.DIMENSIONS.height : 0, _this.create(width, height, 1), !Platform.usingVR()) return;
		if (await AppCMSConfig.ready(), sponsors = AppCMSConfig.data?.sponsors, !sponsors || !sponsors.length) return;
		$this = _this.root, _this.capture.mouseEnabled = !1, _this.parent.visible = !0, _this.parent.group.renderOrder = 990, await _this.parent.parent.ready;
		let planeMesh = (await _this.parent.parent.getLayer("sponsors")).group.children[0].children[0];
		planeMesh.renderOrder = 99, planeMesh.shader.depthTest = !1, planeMesh.shader.depthWrite = !1, await async function initSponsors() {
			let imgWidth = 320,
				imgHeight = 320,
				wrapper = $gl(width, height),
				{
					family: family,
					size: size,
					options: options
				} = StyleGuide.getStyle("p", 600),
				$text = $glText("Proudly sponsored by", family, 4.5 * size, {
					width: 700,
					align: "left",
					color: StyleGuide.colors.white
				});
			await $text.text.ready();
			let $dj = $gl(imgWidth, imgHeight, Assets.getPath("assets/images/UI/logo.png "));
			wrapper.add($dj), wrapper.add($text), $dj.y = height / 2 - imgHeight / 2, $text.x += imgWidth + imgHeight / 2, $text.y = height / 2 - $text.dimensions.height / 2, sponsors.forEach(((sponsor, i) => {
				const url = SanityImageUrlBuilder.build(sponsor.logo).width(imgWidth).url();
				let $el = $gl(imgWidth, imgHeight / 4, url);
				$el.x = imgWidth + imgHeight / 2 + $text.dimensions.width + imgHeight / 2 * i + imgHeight / 2, $el.y += height / 2 - imgHeight / 8, wrapper.add($el)
			})), Utils.query("debugVRUI") ? (wrapper.x = Stage.width / 2, wrapper.y = Stage.height / 2, GLUI.Stage.add(wrapper)) : $this.add(wrapper)
		}(), _this.startRender(setPosition)
	}()
}), (() => {
	VRSponsors.DIMENSIONS = {
		width: 1750,
		height: 350
	}
})), Class((function VRmenuOptions(callback) {
	Inherit(this, UI3D), Inherit(this, StateComponent);
	const _this = this;
	var $this, $bg, $terms, $privacy, $artwork, $playbackSpeedWrapper, $playbackSpeed, $playbackSpeedLabel;
	let _toggleHeight = 0;

	function toggleClosedCaptions() {
		CaptionsController.instance().toggleVRCaptions()
	}

	function toggleChat() {
		if (!0 === _this.flag("toggledChatOnce")) {
			const muted = VoiceChatController.instance().muted;
			_this.events.fire(VoiceChatController.TOGGLE_MUTE, {
				value: !muted
			})
		}
		_this.flag("toggledChatOnce", !0)
	}

	function toggleAudio() {
		UIStore.commit("setShouldMuteFromUserSettings", !UIStore.get("shouldMuteFromUserSettings")), _this.events.fire(AudioController.TOGGLE_MUTE, {
			value: !GlobalAudio3D.muted
		})
	}
	_this.ready = Promise.create(), async function() {
		_this.create(576, 850, 2), await async function initHTML() {
			$this = _this.root, ($bg = $gl(576, 850, "#5757D8")).z = -1, $this.add($bg), await async function initMenuItems() {
					$artwork = _this.initClass(UIButton, {
						text: "Artwork Selection",
						color: new Color(StyleGuide.colors.royalBlue),
						bgColor: new Color(StyleGuide.colors.white),
						hoverColor: new Color(StyleGuide.colors.royalBlue),
						invColor: new Color(StyleGuide.colors.black),
						colorBold: new Color(StyleGuide.colors.royalBlue),
						cb: async () => {
							callback()
						}
					}), await $artwork.ready, $artwork.animateIn(), $artwork.element.x = (576 - 1.5 * $artwork.width) / 2, $artwork.element.y = 100, $artwork.element.scale = 1.5, $artwork.button.setZ(2), $artwork.text.setZ(3), $this.add($artwork.element)
				}(),
				function initToggles() {
					[{
						label: "Closed Captions",
						options: [{
							icon: "on",
							ratio: .565
						}, {
							icon: "off",
							ratio: .565
						}],
						cb: toggleClosedCaptions
					}, {
						label: "Mute Audio",
						options: [{
							icon: "volume_on",
							ratio: .9
						}, {
							icon: "volume_off",
							ratio: .136,
							bottom: !0
						}],
						cb: toggleAudio
					}, {
						label: "Mute Chat",
						options: [{
							icon: "mute",
							ratio: 1.05
						}, {
							icon: "unmute",
							ratio: 1
						}],
						cb: toggleChat
					}].forEach((async (opts, i) => {
						let _toggle = _this.initClass(UIToggle, opts);
						await _toggle.ready, _toggle.element.x = (576 - _toggle.width) / 2, _toggle.element.y = 300 + (_toggle.height + 50) * i, _toggleHeight = _toggle.element.y, _toggle.animateIn(), $this.add(_toggle.element), "Mute Chat" === opts.label && _toggle.click()
					}))
				}(), async function initPlaybackSpeed() {
					$playbackSpeedWrapper = $gl(576, 100), $this.add($playbackSpeedWrapper), $playbackSpeedLabel = $glText("Art Narration Speed", "Manrope-SemiBold", 20, {
						align: "left",
						color: 16777215
					}), await $playbackSpeedLabel.text.ready(), await $playbackSpeedLabel.loaded(), $playbackSpeedWrapper.add($playbackSpeedLabel), ($playbackSpeed = _this.initClass(UIPlaybackSpeed)).animateIn(), $playbackSpeedWrapper.add($playbackSpeed.element), $playbackSpeedWrapper.y = 680, $playbackSpeedWrapper.setZ(2), $playbackSpeedLabel.x = .5 * $playbackSpeedLabel.dimensions.width, $playbackSpeedLabel.y = .5 * $playbackSpeedLabel.dimensions.height, $playbackSpeed.element.x = 288
				}(), await async function initLegal() {
					($terms = new TextLink({
						style: "p",
						text: "Terms & Conditions",
						weight: 400,
						color: StyleGuide.colors.white,
						width: 270,
						underlineColor: "white",
						align: "center",
						cb: () => {
							window.open("terms-of-use.html")
						}
					})).$text.setZ(2), await $terms.ready, $terms.$text._underline.setZ(2), $terms.element.x = 191.9808, $terms.element.y = 765, $terms.animateIn(), $this.add($terms.element), ($privacy = new TextLink({
						style: "p",
						text: "Privacy Policy",
						weight: 400,
						color: StyleGuide.colors.white,
						width: 270,
						underlineColor: "white",
						align: "white",
						cb: () => {
							window.open("privacy-notice.html")
						}
					})).$text.setZ(2), await $privacy.ready, $privacy.$text._underline.setZ(2), $privacy.element.x = 383.9616, $privacy.element.y = 765, $privacy.animateIn(), $this.add($privacy.element)
				}()
		}(), _this.ready.resolve()
	}(), this.animateIn = async () => {}, this.animateOut = async () => {}
})), Class((function TempAuthDebug() {
	Inherit(this, Element);
	const $this = this.element;
	! function initHTML() {
		const $button = $this.create("bttn", "button");
		$this.css({
			right: 25,
			top: 25
		}), $button.text("Click here to log in"), $button.css({
			position: "relative",
			fontSize: 20,
			padding: "10px 20px",
			borderRadius: 25,
			border: "none",
			outline: "none"
		}), $button.interact((() => {}), (() => {
			PlatformAuth.loginSaml()
		}))
	}()
})), Class((function UI404() {
	Inherit(this, Element);
	const $this = this.element;
	let $wrapper, $title, $textTop, $textBottom;
	UIStore.commit("setThemeColor", "theme--royalBlue"),
		function initHTML() {
			$wrapper = $this.create("wrapper"), $title = $wrapper.create("title"), $title.text("404");
			let $text = $wrapper.create("bottom").create("text-wrapper");
			$textTop = $text.create("text-top", "span").text("Sorry, there was a problem"), $textBottom = $text.create("text-bottom", "strong").text("Please try again.")
		}(),
		function initStyles() {
			$this.goob(`\n            & {\n                position: fixed;\n                top: 0;\n                right: 0;\n                bottom: 0;\n                left: 0;\n                \n                background-color: ${StyleGuide.colors.white};\n                will-change: transform;\n            }\n\n            .wrapper {\n                width: 100%;\n                height: 100%;\n                max-height: 100vh;\n                display: flex;\n                \n                align-items: center;\n                justify-content: center;\n            }\n\n            .title {\n                ${StyleGuide.manropeMedium}\n                ${StyleGuide.fluid("font-size",{mob:68,l:303})}\n                color: ${StyleGuide.colors.royalBlue};\n            }\n\n            .bottom {\n                align-self: flex-end;\n                ${StyleGuide.fluid("margin-bottom",StyleGuide.lateralPadding)}\n                width: 100%;\n                display: flex;\n                flex-flow: column nowrap;\n                align-items: center;\n                justify-content: space-between;\n\n                &, *:not(.hit) {\n                    position: relative !important;\n                }\n\n                .text-wrapper {\n                    .text-top, .text-bottom {\n                        text-align: center;\n                        display: block;\n                        \n                        color: ${StyleGuide.colors.royalBlue};\n                        ${StyleGuide.fluid("font-size",{mob:15,l:15})}\n                    }\n\n                    .text-top {\n                      ${StyleGuide.manropeRegular}\n                    }\n\n                    .text-bottom {\n                      ${StyleGuide.manropeBold}\n                    }\n                }\n\n                .button {\n                    text-align: center;\n                    background-color: ${StyleGuide.colors.royalBlue};\n                    padding: 15px 50px;\n                    display: inline-block;\n                    border-radius: 50px;\n                    color: ${StyleGuide.colors.white};\n                    ${StyleGuide.fluid("font-size",{mob:15,l:15})}\n                }\n            }\n        `)
		}(), this.animateIn = function() {}, this.animateOut = function() {}
}), (_ => {})), Class((function UIUnauthorized() {
	Inherit(this, Element);
	const $this = this.element;
	let $wrapper, $title, $textTop, $textBottom, $button;

	function buttonHover(e) {
		switch (e.action) {
			case "over":
				$button.tween({
					scale: 1.05
				}, 500, "easeOutCubic");
				break;
			case "out":
				$button.tween({
					scale: 1
				}, 500, "easeOutCubic")
		}
	}

	function buttonClick() {
		PlatformAuth.loginSaml()
	}
	UIStore.commit("setThemeColor", "theme--royalBlue"),
		function initHTML() {
			$wrapper = $this.create("wrapper"), $title = $wrapper.create("title"), $title.text("LOGIN");
			let $bottom = $wrapper.create("bottom"),
				$text = $bottom.create("text-wrapper");
			$textTop = $text.create("text-top", "span").text("You're not currently logged in."), $textBottom = $text.create("text-bottom", "strong").text("Please try again after doing so."), $button = $bottom.create("button").text("Log in"), $button.interact(buttonHover, buttonClick)
		}(),
		function initStyles() {
			$this.goob(`\n            & {\n                position: fixed;\n                top: 0;\n                right: 0;\n                bottom: 0;\n                left: 0;\n                \n                background-color: ${StyleGuide.colors.white};\n                will-change: transform;\n            }\n\n            .wrapper {\n                width: 100%;\n                height: 100%;\n                max-height: 100vh;\n                display: flex;\n                \n                align-items: center;\n                justify-content: center;\n            }\n\n            .title {\n                ${StyleGuide.manropeMedium}\n                ${StyleGuide.fluid("font-size",{mob:68,l:303})}\n                color: ${StyleGuide.colors.royalBlue};\n            }\n\n            .bottom {\n                align-self: flex-end;\n                ${StyleGuide.fluid("margin-bottom",StyleGuide.lateralPadding)}\n                width: 100%;\n                display: flex;\n                flex-flow: column nowrap;\n                align-items: center;\n                justify-content: space-between;\n\n                &, *:not(.hit) {\n                    position: relative !important;\n                }\n\n                .text-wrapper {\n                    .text-top, .text-bottom {\n                        text-align: center;\n                        display: block;\n                        \n                        color: ${StyleGuide.colors.royalBlue};\n                        ${StyleGuide.fluid("font-size",{mob:15,l:15})}\n                    }\n\n                    .text-top {\n                      ${StyleGuide.manropeRegular}\n                    }\n\n                    .text-bottom {\n                      ${StyleGuide.manropeBold}\n                    }\n\n                    padding-bottom: 45px;\n                }\n\n                .button {\n                    text-align: center;\n                    background-color: ${StyleGuide.colors.royalBlue};\n                    padding: 15px 50px;\n                    display: inline-block;\n                    border-radius: 50px;\n                    color: ${StyleGuide.colors.white};\n                    ${StyleGuide.fluid("font-size",{mob:15,l:15})}\n                }\n            }\n        `)
		}(), this.animateIn = function() {}, this.animateOut = function() {}
}), (_ => {})), Class((function GreyboxAvatar() {
	Inherit(this, OptimizedAvatar);
	const _this = this;
	var _data;
	let prevTransition = -1,
		prevType = -1;
	new Vector3;
	!async function() {
		_data = new Vector4(0, 0, 0, _this.parent?.isVR ? 0 : 2);
		const nukeCondition = Global.PLAYGROUND || Tests.isVR();
		_this.shader = _this.initClass(Shader, "GreyboxAvatar", {
			uScene: {
				value: nukeCondition ? null : World.NUKE.prevFrameRT
			},
			uScene2: {
				value: null
			},
			uHotSpotTransition: HotSpotManager.uHotspotTransition,
			uAvatarData: {
				value: _data,
				ignoreUIL: !1,
				packedIndex: 0
			},
			uTransition: {
				value: new Vector2,
				batchUnique: !0
			},
			uModerator: {
				value: 0,
				batchUnique: !0
			},
			speedMultiplier: {
				value: .9
			},
			uScale: {
				value: 2
			},
			cameraVerticalOffset: {
				value: 0
			},
			uVelocityRange: {
				value: new Vector2(.005, .05)
			},
			uIrridFreq: {
				value: new Vector3(.25, .15, .02)
			},
			uIrridOffset: {
				value: new Vector3(.6, -.15, .25)
			},
			uIsTalking: {
				value: 0,
				batchUnique: !0,
				ignoreUIIL: !0
			},
			uIsTeleporting: {
				value: 0,
				batchUnique: !0,
				ignoreUIIL: !0
			},
			side: Shader.FRONT_SIDE,
			transparent: !0
		}), _this.shader.customShadowShader = "GreyboxAvatarShadows", ShaderUIL.add(_this.shader), await SkinnedAvatar.create("assets/geometry/avatar/avatar_skinned.json", ["assets/geometry/avatar/avatar_idle.json", "assets/geometry/avatar/avatar_walk.json", "assets/geometry/avatar/avatar_jump.json", "assets/geometry/avatar/avatar_dance.json", "assets/geometry/avatar/avatar_idle.json"], [20, 32, 20, 20, 20], _this, "dance"), _this.trackVelocity = !0, await _this.create([], _this.shader)
	}(), this.setModeratorColor = async () => {
		await _this.ready(), Utils.query("wsjAdmin") ? _this.setUniform("uModerator", 1) : _this.setUniform("uModerator", 0), _this.setUniform("uIsTeleporting", 0)
	}, this.changeBasedOnSpace = async (value, type) => {
		await _this.ready(), prevTransition == value && prevType == type || (_this.setUniform("uTransition", new Vector2(value, type)), prevTransition = value, prevType = type)
	}
})), Class((function TextLink(_config) {
	Inherit(this, GLUIElement);
	const _this = this;
	var $this, $text, _colors = {
			brand: new Color(StyleGuide.colors.royalBlue),
			black: new Color(StyleGuide.colors.black),
			white: new Color(StyleGuide.colors.white)
		},
		_prevent = !1;

	function hover({
		action: action
	}) {
		if (_config.noHover) return;
		let uniform = _prevent ? "uTransition" : "uActive";
		$text._underline._shader.tween(uniform, "over" === action ? 1.1 : 0, "over" === action ? 950 : 1050, "easeOutCubic")
	}

	function click() {
		_config.noHover || _this.cb && _this.cb()
	}
	_this.ready = Promise.create(), _this.cb = _config.cb, async function() {
		$this = _this.element;
		let {
			style: style = "p",
			weight: weight,
			text: text,
			color: color,
			width: width,
			align: align,
			height: height = 2,
			offset: offset = 6
		} = _config, {
			family: family,
			size: size,
			options: options
		} = StyleGuide.getStyle(style, weight || 600);
		$text = new UIText(text, family, size, {
			...options,
			color: color || StyleGuide.colors.royalBlue,
			width: width,
			align: align || "left"
		}), await $text.text.ready(), _config.noClick || $text.interact(hover, click);
		let $underline = $gl($text.dimensions.width, height, StyleGuide.colors.royalBlue),
			shader = _this.initClass(Shader, "underline", {
				uColor: {
					value: _colors[_config.underlineColor || "brand"]
				},
				uActive: {
					value: 0
				},
				uTransition: {
					value: 0
				},
				transparent: !0
			});
		$underline.useShader(shader), $underline.y = $text.dimensions.height + offset, "right" == align ? $underline.x -= $text.dimensions.width : "center" == align && ($underline.x -= $text.dimensions.width / 2), $text._underline = $underline, $text._underline._shader = shader, $this.add($text), $this.add($underline), _this.ready.resolve()
	}(), this.animateIn = async function(delay = 0, prevent = !1) {
		await _this.ready, _this.flag("animating", !0), $text.shader.tween("uTransition", 1, 2500, "easeOutSine", delay), prevent ? _prevent = !0 : $text._underline._shader.tween("uTransition", 1, 950, "easeOutCubic", delay + 2250), await _this.wait(delay + 2250), _this.flag("animating", !1)
	}, this.animateOut = async function() {
		await _this.ready, _this.flag("animating", !0);
		$text.shader.tween("uTransition", 0, 600, "easeOutCubic", 90), $text._underline._shader.tween("uTransition", 0, 300, "easeOutCubic"), await _this.wait(690), _this.flag("animating", !1)
	}, this.setZ = z => {
		$text.setZ(z), $text._underline.setZ(z)
	}, this.tweenColor = (color, duration, ease) => {
		$text.tweenColor(color, duration, ease), $text._underline._shader.uniforms.uColor.value.tween(color, duration, ease)
	}, this.get("$text", (() => $text))
})), Class((function UIButton(_opts) {
	var $this;
	Inherit(this, GLUIElement);
	const _this = this;
	let $button, $text, $icon;
	var _shader, _isHovering;
	const COLORS = {
			bg: new Color(StyleGuide.colors.royalBlue),
			text: new Color(StyleGuide.colors.white),
			bold: new Color(StyleGuide.colors.black)
		},
		COLORS_INV = {
			bg: new Color(StyleGuide.colors.white),
			text: new Color(StyleGuide.colors.royalBlue),
			bold: new Color(StyleGuide.colors.black)
		};
	let colors = _opts.invertedColors ? COLORS_INV : COLORS,
		_mobile = StyleGuide.isMobile(),
		_bgColor = _opts.bgColor || colors.bg,
		_hoverBgColor = _opts.hoverColor || colors.text,
		_textColor = _opts.color || colors.text,
		_textColorBold = _opts.colorBold || colors.bold,
		_textInvColor = _opts.invColor || colors.bg,
		_width = _opts.width ? _opts.width : _mobile ? _opts.icon ? 150 : 134 : 221,
		_height = _opts.height ? _opts.height : _mobile ? 31 : 60;

	function hover({
		action: action
	}) {
		!_opts.inMenu && UIController.instance().hasMenuOpen || (_isHovering = "over" === action, _shader.tween("uHover", _isHovering ? 1 : 0, _isHovering ? 300 : 500, "easeOutCubic"), $text.tweenColor(_isHovering ? _textInvColor : _textColor, _isHovering ? 300 : 500, "easeOutCubic"), $icon && $icon.bg(`assets/images/UI/${_opts.icon}${_isHovering?"_hover":""}.png`), $button.tween({
			scale: _isHovering ? 1.03 : 1
		}, _isHovering ? 300 : 500, "easeOutCubic"), "over" === action && _opts.over?.(), "out" === action && _opts.out?.())
	}

	function click() {
		!_opts.inMenu && UIController.instance().hasMenuOpen || _opts.cb?.()
	}
	_this.ready = Promise.create(), async function() {
		($this = _this.element).hide(),
			function initButton() {
				$button = $gl(_width, _height, _bgColor), _shader = _this.initClass(Shader, "VRButton", {
					uResolution: {
						value: new Vector2(_width, _height)
					},
					uRounding: {
						value: 1
					},
					uHover: {
						value: 0
					},
					uOpacity: {
						value: 0
					},
					uColor: {
						value: _bgColor
					},
					uHoverColor: {
						value: _hoverBgColor
					},
					transparent: !0
				}), $button.useShader(_shader), $button.setZ(1)
			}(), await async function initText() {
					let {
						family: family,
						size: size,
						options: options
					} = StyleGuide.getStyle(_opts.style || "p", _opts.weight || 600);
					size *= _opts.textSizeFactor ? _opts.textSizeFactor : 1, $text = new UIText(_opts.text, family, size, {
						...options,
						color: _textColor,
						align: "center",
						colorBold: _textColorBold
					}), await $text.text.ready(), $text.x = $button.width / 2, _opts.icon && ($text.x += 15);
					$text.y = ($button.height - $text.dimensions.height) / 2 - 2, $text.setZ(2), $button.add($text), $this.add($button)
				}(), _opts.icon && function initIcon() {
					$icon = $gl(14, 14, `assets/images/UI/${_opts.icon}.png`), $icon.alpha = 0, $icon.x = _mobile ? 20 : 25, $icon.y = ($button.height - 12) / 2, $icon.setZ(2), $button.add($icon)
				}(),
				function addListeners() {
					$button.interact(hover, click)
				}(), _this.ready.resolve()
	}(), this.animateIn = async function(delay = 0) {
		await _this.ready, _this.flag("animating", !0), $this.show(), await _this.wait(delay);
		let y = $this.y;
		await _this.wait(16), $this.y += 20, $this.scaleY = 0, await _this.wait(16), $this.tween({
			y: y,
			scaleY: 1
		}, 1500, "easeOutQuart"), $text.shader.tween("uTransition", 1, 2500, "easeOutCubic", 500), $icon && $icon.tween({
			alpha: 1
		}, 1250, "easeOutSine"), _shader.tween("uOpacity", _opts.alpha || 1, 1250, "easeOutSine"), $button.tween({
			scale: 1
		}, 1050, "easeOutCubic")
	}, this.animateOut = async function(duration = 600) {
		_this.flag("animating", !0), $text.shader.tween("uTransition", 0, duration, "easeOutCubic"), _shader.tween("uOpacity", 0, duration, "easeOutCubic"), $icon && $icon.tween({
			alpha: 0
		}, duration, "easeOutCubic"), await _this.wait(duration), $this.hide(), $button.scale = .6
	}, this.changeIcon = icon => {
		_opts.icon = icon, $icon.bg(`assets/images/UI/${_opts.icon}${_isHovering?"_hover":""}.png`)
	}, this.hover = hover, this.get("isHovering", (() => _isHovering)), this.get("width", (() => _width)), this.get("height", (() => _height)), this.get("button", (() => $button)), this.get("text", (() => $text)), this.get("icon", (() => $icon))
})), Class((function UICaption(_config) {
	Inherit(this, GLUIElement);
	const _this = this,
		$this = _this.element;
	let $text, $bg, _caption, _bgShader;
	_this.ready = Promise.create(), async function() {
		$this.hide(), _this.flag("hidden", !0), _this.flag("wrapperVisible", !1),
			function initBg() {
				const size = new Vector2(GLUIWrapper.CAPTION_BAR_WIDTH(), GLUIWrapper.ICON_SIZE() - GLUIWrapper.ICON_PADDING() / 2);
				$bg = $gl(size.x, size.y, StyleGuide.colors.royalBlue), _bgShader = _this.initClass(Shader, "HotSpotUICaptionBGShader", {
					uColor: {
						value: new Color(StyleGuide.colors.royalBlue)
					},
					uOwnAlpha: {
						value: 1
					},
					uAlpha: {
						value: 1
					},
					uSize: {
						value: size
					},
					uScale: {
						value: 1
					},
					uBorderRadius: {
						value: 31
					}
				}), $bg.useShader(_bgShader), $bg.setZ(0), $this.add($bg)
			}(), await async function initText() {
				let {
					family: family,
					size: size,
					options: options
				} = StyleGuide.getStyle("p", 600), copy = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
				_caption = copy, $text = $glText(copy, family, .83 * size, {
					...options,
					width: .75 * GLUIWrapper.CAPTION_BAR_WIDTH(),
					align: "center",
					color: StyleGuide.colors.white
				}), $text.alpha = 0, $text.setZ(3), $bg.add($text), $text.shader = undefined, await $text.text.ready(), await $text.loaded()
			}(), _this.ready.resolve(), _this.onResize((() => {
				if (Platform.usingVR()) {
					const size = new Vector2(GLUIWrapper.CAPTION_BAR_WIDTH(), VRCaptionWrapper.DIMENSIONS.height);
					let r = 120;
					_bgShader.set("uSize", size), _bgShader.set("uBorderRadius", r), $text.text.resize({
						width: .9 * GLUIWrapper.CAPTION_BAR_WIDTH(),
						size: VRCaptionWrapper.DIMENSIONS.height / 5.333
					})
				} else {
					const size = new Vector2(GLUIWrapper.CAPTION_BAR_WIDTH(), GLUIWrapper.ICON_SIZE() - GLUIWrapper.ICON_PADDING() / 2);
					let r = 32;
					Stage.width > 2e3 && (r = 30), Stage.width < 1600 && (r = 29), Stage.width < 1100 && (r = 26), StyleGuide.isMobile() && (r = 27), _bgShader.set("uSize", size), _bgShader.set("uBorderRadius", r);
					let {
						size: fontSize
					} = StyleGuide.getStyle("p", 600), f = fontSize;
					Stage.width > 1300 && (f = .9 * fontSize), Stage.width > 1e3 && (f = .85 * fontSize), StyleGuide.isMobile() && (f = 1.1 * fontSize), $text.text.resize({
						width: .75 * GLUIWrapper.CAPTION_BAR_WIDTH(),
						size: f
					})
				}
			})), Global.PLAYGROUND == Utils.getConstructorName(_this) && (GLUI.Stage.add($this), $this.show())
	}(), this.updateValues = async function() {
		await $text.text.ready();
		const lineCount = $text.mesh.geometry.lineCount;
		let multiplier = lineCount > 1 ? .6 : .75;
		StyleGuide.isMobile() && (multiplier = lineCount > 1 ? .6 : .8), $text.y = $text.__y - $text.dimensions.height * multiplier, $text.__prevY = $text.y
	}, this.setText = async text => {
		_caption !== text && (_caption = text, _this.flag("captionsDisabled") || await _this.wait("hidden"), await $text.setText(text), await _this.updateValues())
	}, this.setCaptionProgress = function(p) {}, this.animateTextIn = async () => {
		PortalUtil.isPortal || Utils.query("no-UI") || _this.flag("captionsDisabled") || _this.flag("hidden") && (await _this.wait("wrapperVisible"), await defer(), _this.flag("hidden", !1), await $text.tween({
			alpha: 1
		}, 150, "easeOutSine").promise())
	}, this.animateTextOut = async () => {
		PortalUtil.isPortal || Utils.query("no-UI") || _this.flag("captionsDisabled") || _this.flag("hidden") || (_this.flag("animatingTextOut", !0), await $text.tween({
			alpha: 0
		}, 150, "easeOutSine").promise(), _this.flag("animatingTextOut", !1), _this.flag("hidden", !0))
	}, this.animateIn = async () => {
		PortalUtil.isPortal || Utils.query("no-UI") || _this.flag("wrapperVisible") || ($this.show(), $this.tween({
			alpha: 1
		}, 800, "easeOutQuart", GLUIWrapper.CENTER_WRAPPER_TWEEN_DURATION - 100), _this.delayedCall((() => {
			_this.flag("wrapperVisible", !0)
		}), 800))
	}, this.animateOut = async () => {
		PortalUtil.isPortal || Utils.query("no-UI") || (_this.animateTextOut(), $this.tween({
			alpha: 0
		}, 300, "easeOutCubic"), _this.flag("wrapperVisible", !1), _this.delayedCall((() => {
			$this.hide()
		}), 400))
	}, this.get("text", (_ => $text)), this.get("bg", (_ => $bg)), this.get("bgShader", (_ => _bgShader))
}), "singleton"), Class((function UIChatButton(_config) {
	Inherit(this, GLUIElement), Inherit(this, StateComponent);
	const _this = this,
		$this = _this.element;
	let $icon, $bgContainer, $text, _bgShader, _bgCircles = [],
		_lerpVal = 0,
		_ticker = 0,
		_mobile = StyleGuide.isMobile();
	const COLORS = {
			icon: StyleGuide.colors.white,
			bg: StyleGuide.colors.royalBlue,
			iconMuted: StyleGuide.colors.royalBlue,
			bgMuted: StyleGuide.colors.white
		},
		ICONS = {
			mute: "assets/images/UI/mute.png",
			unmute: "assets/images/UI/unmute_purple.png"
		};

	function loop() {
		let targetVal = _this.flag("disabled") ? 0 : 1;
		_lerpVal = Math.lerp(_lerpVal, targetVal, .9), 1 === targetVal ? _ticker += .005 * Render.HZ_MULTIPLIER : _lerpVal < .1 && (_ticker = 0);
		let v = _ticker;
		_bgCircles.forEach((($el, i) => {
			if (0 === i) return;
			let offset = .2 * i;
			if (v < offset) return $el.scale = 1;
			$el.scale = 1 + Math.mod(v - offset, .8);
			let alpha = Math.range($el.scale, 1, 1.8, .35, 0);
			alpha *= _lerpVal, $el.alpha = $el.scale > 1.01 ? alpha : 0
		}))
	}
	async function hover({
		action: action
	}, force, disabled = _this.flag("disabled")) {
		let isOver = "over" === action,
			duration = isOver ? 300 : 500;
		force && (duration = 0), _bgShader.tween("uHover", isOver ? 1 : 0, duration, "easeOutCubic"), isOver || await _this.wait(force ? 0 : 200), disabled ? "over" === action ? $icon.bg(ICONS.mute) : $icon.bg(ICONS.unmute) : "over" === action ? $icon.bg(ICONS.unmute) : $icon.bg(ICONS.mute)
	}
	async function click() {
		hover({
			action: "out"
		}, !0), await defer(), _this.flag("disabled") ? (toggleText(!1, !0), _this.dispatch(GlobalStore, "userInitiatedMicStatus", "unmuted"), _this.dispatch(GlobalStore, "setMicMuted", !1)) : (_this.dispatch(GlobalStore, "userInitiatedMicStatus", "muted"), _this.dispatch(GlobalStore, "setMicMuted", !0))
	}
	async function enableChat() {
		$icon.bg(ICONS.mute), _bgShader.set("uTransition", 0), GameCenterMedia.userStream?.enableAudio(), _this.flag("disabled", !1)
	}

	function disableChat() {
		$icon.bg(ICONS.unmute), _bgShader.set("uTransition", 1), GameCenterMedia.userStream?.disableAudio(), _this.flag("disabled", !0)
	}
	async function toggleText(visible = !1, anim = !1) {
		_mobile || (visible ? ($text.show(), anim && ($text.alpha = 0, await $text.tween({
			alpha: 1
		}, 550, "easeOutCubic").promise())) : (anim && await $text.tween({
			alpha: 0
		}, 550, "easeOutCubic").promise(), $text.hide()), _this.flag("textVisible", visible))
	}

	function resize() {
		let size = 60;
		_mobile ? (size = 30, $this.x = Stage.width * (1 - Styleguide.grid.gutter) - size, $this.y = Stage.height * (1 - Styleguide.grid.offsetBottom) - size, $text.hide()) : (size = 60, $this.x = Stage.width * (Styleguide.grid.gutter + Styleguide.getCols(3)), $this.y = Stage.height * Styleguide.grid.offsetBottom - size / 2, $text.x = $this.x + size + 20, $text.y = $this.y + size / 2 - $text.dimensions.height / 2 - 4), $bgContainer.scaleX = size, $bgContainer.scaleY = size, $this.width = size, $this.height = size, $icon.x = size / 2 - $icon.width / 2, $icon.y = size / 2 - $icon.height / 2 + 1
	}
	_this.ready = Promise.create(), async function() {
		if ($this.hide(), $this.scale = 0, function initBg() {
				$bgContainer = $gl(), $bgContainer.setZ(1), _bgShader = _this.initClass(Shader, "UIChatShader", {
					uColor: {
						value: new Color(COLORS.bg)
					},
					uColor2: {
						value: new Color(COLORS.bgMuted)
					},
					uTransition: {
						value: 0
					},
					uHover: {
						value: 0
					},
					uAlpha: {
						value: 1
					},
					transparent: !0
				});
				for (let i = 0; i < 5; i++) {
					let $el = $gl(1, 1, COLORS.bg);
					$el.useShader(_bgShader), $bgContainer.add($el), _bgCircles.push($el)
				}
				$this.add($bgContainer)
			}(), function initIcon() {
				let size = _mobile ? 10 : 14;
				$icon = $gl(size, size, ICONS.mute), $icon.setZ(2), $this.add($icon)
			}(), await async function initText() {
					let {
						family: family,
						size: size,
						options: options
					} = StyleGuide.getStyle("p", 600);
					$text = $glText(Copy.get("landing.chatCTA"), family, size, {
						...options,
						color: StyleGuide.colors.white
					}), $text.alpha = 0, Global.PLAYGROUND ? GLUI.Stage.add($text) : _this.parent.element.add($text);
					await $text.text.ready(), toggleText(!0)
				}(),
				function addHandlers() {
					$bgContainer.interact(hover, click), GlobalStore.bind("micMuted", (muted => {
						! function onStateChange(muted) {
							muted ? (disableChat(), Track.event("Lobby", "Toggle Chat", "Mute", "")) : (enableChat(), Track.event("Lobby", "Toggle Chat", "Unmute", ""))
						}(muted)
					})), _this.onResize(resize)
				}(), _this.ready.resolve(), Global.PLAYGROUND == Utils.getConstructorName(_this)) return $this.show(), $this.scale = 1, void _this.startRender(loop);
		Tests.usingVR() ? (_this.dispatch(GlobalStore, "userInitiatedMicStatus", "unmuted"), _this.dispatch(GlobalStore, "setMicMuted", !1)) : (await GameCenterMedia.getUserStream(), disableChat()), GameCenterMedia.state.bind("hasMediaAccess", (state => {
			"fail" === state ? _this.animateOut() : _this.animateIn()
		}))
	}(), this.animateIn = async (delay = 0) => {
		"fail" !== GameCenterMedia.state.get("hasMediaAccess") && "pending" !== GameCenterMedia.state.get("hasMediaAccess") && ($this.show(), $this.scale = 0, $this.tween({
			scale: 1
		}, 950, "easeOutCubic", delay), $icon.alpha = 0, $icon.tween({
			alpha: 1
		}, 750, "easeOutCubic", delay + 250), _this.flag("textVisible") && ($text.alpha = 0, $text.tween({
			alpha: 1
		}, 950, "easeOutCubic", delay)), await _this.wait(delay + 950), _this.startRender(loop))
	}, this.animateOut = async (delay = 0) => {
		"fail" !== GameCenterMedia.state.get("hasMediaAccess") && "pending" !== GameCenterMedia.state.get("hasMediaAccess") && ($text.tween({
			alpha: 0
		}, 550, "easeOutCubic", delay), $this.tween({
			scale: 0
		}, 550, "easeOutCubic", delay), await _this.wait(delay + 550), $this.hide(), _this.stopRender(loop))
	}, this.toggleText = toggleText, this.enableChat = enableChat, this.disableChat = disableChat
})), Class((function UIClose() {
	Inherit(this, Element);
	const $this = this.element;
	let $inner, _obj = {
		value: 0
	};

	function onHover(e) {
		switch (e.action) {
			case "over":
				$this.tween({
					scale: 1.2
				}, 300, "easeOutCubic");
				break;
			case "out":
				$this.tween({
					scale: 1
				}, 300, "easeOutCubic")
		}
	}

	function onClick() {
		UIStore.commit("setModal", !1)
	}! function initHTML() {
		$inner = $this.create("close-inner"), $inner.create("close-left-wrapper"), $inner.create("close-right-wrapper")
	}(),
	function initStyles() {
		$this.goob(`\n            & {\n                top: ${StyleGuide.lateralPadding.xl}px;\n                right: ${StyleGuide.lateralPadding.xl}px;\n                width: 50px;\n                height: 50px;\n                \n                background-color: ${StyleGuide.colors.royalBlue};\n                \n                z-index: 2;\n                clip-path: circle(0%);\n                overflow: hidden;\n\n                @media (max-height: 680px) and (orientation: landscape) {\n                    top: 20px;\n                }\n\n                .close-inner {\n                    width: 100%;\n                    height: 100%;\n                    display: flex;\n                    align-items: center;\n                    justify-content: center;\n                    will-change: transform;\n                    transform: translateY(100%);\n                }\n\n\n                .close-left-wrapper, .close-right-wrapper {\n                    position: relative !important;\n                    display: block;\n                    width: 2px;\n                    height: 15px;\n                    background-color: ${StyleGuide.colors.white};\n\n                }\n       \n\n                .close-right-wrapper {\n                    transform: translateX(-50%) rotate(45deg);\n                }\n\n                .close-left-wrapper {\n                    transform: translateX(50%) rotate(-45deg);\n                }\n            }\n    `)
	}(),
	function addHandlers() {
		$this.interact(onHover, onClick)
	}(), this.animateIn = function() {
		tween(_obj, {
			value: 1
		}, 600, "easeOutCubic", 600).onUpdate((() => {
			const clip = 50 * _obj.value,
				y = 100 - 100 * _obj.value + "%";
			$this.css({
				clipPath: `circle(${clip}%)`
			}), $inner.transform({
				y: y
			})
		}))
	}, this.animateOut = function() {
		tween(_obj, {
			value: 0
		}, 600, "easeOutCubic").onUpdate((() => {
			const clip = 50 * _obj.value,
				y = -1 * (100 - 100 * _obj.value) + "%";
			$this.css({
				clipPath: `circle(${clip}%)`
			}), $inner.transform({
				y: y
			})
		}))
	}
}), (_ => {})), Class((function UIMicSettings(_config) {
	Inherit(this, GLUIElement), Inherit(this, StateComponent);
	const _this = this,
		$this = _this.element;
	let $icon, $bgContainer, $select, _bgShader, _streamRef, _mobile = StyleGuide.isMobile(),
		_inputDevices = [];
	const COLORS = {
			icon: StyleGuide.colors.white,
			bg: StyleGuide.colors.royalBlue,
			iconMuted: StyleGuide.colors.royalBlue,
			bgMuted: StyleGuide.colors.white
		},
		ICONS = {
			micSettings: "assets/images/UI/mic_settings.png",
			micSettingsHover: "assets/images/UI/mic_settings_purple.png"
		};
	async function hover({
		action: action
	}) {
		let isOver = "over" === action,
			duration = isOver ? 300 : 500;
		_bgShader.tween("uHover", isOver ? 1 : 0, duration, "easeOutCubic"), isOver || await _this.wait(200), isOver ? $icon.bg(ICONS.micSettingsHover) : $icon.bg(ICONS.micSettings)
	}

	function resize() {
		_mobile = StyleGuide.isMobile();
		let size = 60;
		_mobile ? (size = 30, $this.x = Stage.width * (1 - Styleguide.grid.gutter) - size, $this.y = Stage.height * (1 - Styleguide.grid.offsetBottom) - size) : (size = 60, $this.x = Stage.width * (Styleguide.grid.gutter + Styleguide.getCols(3)) + size + 10, $this.y = Stage.height * Styleguide.grid.offsetBottom - size / 2), $select.css({
			left: `${$this.x}px`,
			top: `${$this.y}px`,
			width: `${size}px`,
			height: `${size}px`
		}), $bgContainer.scaleX = size, $bgContainer.scaleY = size, $this.width = size, $this.height = size, $icon.x = size / 2 - $icon.width / 2, $icon.y = size / 2 - $icon.height / 2 - 1
	}
	_this.ready = Promise.create(), async function() {
		$this.hide(),
			function initSelect() {
				$select = $("micSelect", "select"), $select.css({
					zIndex: 10,
					opacity: 0,
					cursor: "pointer"
				}), $select.change((val => {
					! function changeInputSource(sourceId) {
						const inputDevice = _inputDevices.find((device => device._id === sourceId));
						_streamRef.setAudioSource(inputDevice)
					}(val.value)
				})), $select.hide(), Container.instance().element.add($select)
			}(),
			function initBg() {
				$bgContainer = $gl(1, 1, COLORS.bg), $bgContainer.setZ(1), _bgShader = _this.initClass(Shader, "UIMicShader", {
					uColor: {
						value: new Color(COLORS.bg)
					},
					uColor2: {
						value: new Color(COLORS.bgMuted)
					},
					uHover: {
						value: 0
					},
					uTransition: {
						value: 0
					},
					uAlpha: {
						value: 1
					},
					transparent: !0
				}), $bgContainer.useShader(_bgShader), $this.add($bgContainer)
			}(),
			function initIcon() {
				$icon = $gl(14, 14, ICONS.micSettings), $icon.setZ(2), $this.add($icon)
			}(), async function addHandlers() {
				$bgContainer.interact(hover, (() => {})), _this.onResize(resize)
			}(), async function renderMicOptions() {
				await GameCenterMedia.getUserStream(), _streamRef = GameCenterMedia.userStream, _inputDevices = await _streamRef.getAudioInputs();
				for (var i = $select.div.options.length - 1; i >= 0; i--) $select.div.options[i] = null;
				let selectedId = null;
				_inputDevices.forEach((option => {
					let $option = document.createElement("option");
					$option.text = option._name, $option.value = option._id, option.selected && (selectedId = option._id), $select.div.add($option)
				})), selectedId && $select.val(selectedId)
			}(), _this.ready.resolve(), Global.PLAYGROUND == Utils.getConstructorName(_this) && $this.show()
	}(), this.animateIn = async (delay = 0) => {
		$this.show(), $select.show(), $this.scale = 0, $this.tween({
			scale: 1
		}, 950, "easeOutCubic", delay), $icon.alpha = 0, $icon.tween({
			alpha: 1
		}, 750, "easeOutCubic", delay + 250), await _this.wait(delay + 950)
	}, this.animateOut = async (delay = 0) => {
		$this.tween({
			scale: 0
		}, 550, "easeOutCubic", delay), await _this.wait(delay + 550), $this.hide(), $select.hide()
	}
})), Class((function UIModal() {
	Inherit(this, Element), Inherit(this, StateComponent);
	const _this = this,
		$this = _this.element;
	let $wrapper, $close, _activeModal, _faq, _credits;
	async function onModalChange(modal) {
		if (await _this.wait("doneAnimatingOut"), modal) {
			switch (modal) {
				case "faq":
					_activeModal = _faq;
					break;
				case "credits":
					_activeModal = _credits
			}
			_this.animateIn(), PlayerControls.ENABLED = !1
		} else !1 === modal && (_this.animateOut(), PlayerControls.ENABLED = !0)
	}

	function onKeyboardDown(e) {
		_activeModal && _this.flag("doneAnimatingOut") && 27 === e.keyCode && UIStore.commit("setModal", !1)
	}!async function() {
		! function initHTML() {
			$close = _this.initClass(UIClose, [$this]), $wrapper = $this.create("wrapper"), _faq = _this.initClass(UIFAQ, [$wrapper]), _credits = _this.initClass(UICredits, [$wrapper])
		}(),
		function initStyles() {
			$this.goob(`\n            & {\n                position: fixed;\n                top: 0;\n                right: 0;\n                bottom: 0;\n                left: 0;\n                width: 100%;\n                height: 100%;\n                z-index: 1;\n                cursor: default;\n\n                transform: scaleY(0);\n                transform-origin: bottom;\n\n                background-color: ${StyleGuide.colors.white};\n                will-change: transform; \n\n                .wrapper {\n                    margin-top: 100px;\n                    position: relative !important;\n                    width: 100%;\n                    height: auto;\n\n                    @media (max-height: 680px) and (orientation: landscape) {\n                        margin-top: 20px;\n                    }\n                }\n            }\n        `)
		}(), _this.flag("doneAnimatingOut", !0), await defer(), _this.bindState(UIStore, "modal", onModalChange),
			function addHandlers() {
				_this.events.sub(Keyboard.DOWN, onKeyboardDown)
			}()
	}(), this.animateIn = async function() {
		_activeModal && (UIStore.commit("setThemeColor", "theme--royalBlue"), $this.show(), $this.css({
			transformOrigin: "bottom"
		}), await _this.wait(700), $this.tween({
			scaleY: 1
		}, 800, "easeOutCubic"), $close.animateIn(), _activeModal.animateIn(), _this.delayedCall((() => {
			World.instance()._disable3D()
		}), 800))
	}, this.animateOut = async function() {
		World.instance()._enable3D(), UIStore.commit("setThemeColor", "theme--white"), _this.flag("doneAnimatingOut", !1), $this.css({
			transformOrigin: "top"
		}), $close.animateOut(), await _activeModal.animateOut(), await _this.wait(800), $this.tween({
			scaleY: 0
		}, 800, "easeOutCubic").onComplete((() => {
			_activeModal = null, $this.hide(), _this.flag("doneAnimatingOut", !0)
		}))
	}
}), (_ => {})), Class((function UIScrollView() {
	Inherit(this, Element);
	const _this = this;
	_this.element;
	Utils.getConstructorName(_this);
	let currentHeight = 0;

	function onKeyboardDown(e) {
		_this.scroll && (_this.scroll.scale = 1, 39 !== e.keyCode && 40 !== e.keyCode || _this.scroll.setTarget(_this.scroll.y + 200), 37 !== e.keyCode && 38 !== e.keyCode || _this.scroll.setTarget(_this.scroll.y - 200), 32 === e.keyCode && _this.scroll.setTarget(_this.scroll.y + 400), 34 === e.keyCode && _this.scroll.setTarget(_this.scroll.y + Stage.height), 33 === e.keyCode && _this.scroll.setTarget(_this.scroll.y - Stage.height))
	}

	function handleScroll() {
		_this.scroll && _this.scroll.enabled && (_this.y = Math.lerp(_this.scroll.y, _this.y, .25), _this.scrollContainer.transform({
			x: _this.transformScrollX || 0,
			y: -_this.y
		}))
	}
	this.scroll, this.y = 0, this.scrollContainer = null, this.offsetHeight = 0, async function() {}(), this.getScrollableHeight = function() {
		let bounds = _this.scrollContainer.div.getBoundingClientRect();
		return Math.abs(Stage.height - bounds.height) + (bounds.top + _this.y)
	}, this.setScrollableHeight = function() {
		currentHeight = _this.getScrollableHeight(), _this.scroll.max.y = currentHeight, _this.scroll.resize()
	}, this.initializeScroll = async function() {
		if (!_this.scrollContainer) return console.error("No scroll container defined for ScrollView");
		_this.scroll || (await _this.wait("canSetupScroll"), await defer(), await _this.wait(16), _this.scroll = _this.initClass(Scroll, {
			height: currentHeight,
			limit: !0
		}), null !== _this.flag("toggleScrollWhenInitialized") && (_this.toggleScrollEnabled(_this.flag("toggleScrollWhenInitialized")), _this.flag("toggleScrollWhenInitialized", null)), async function addHandlers() {
			await _this.wait("canSetupScroll"), _this.startRender(handleScroll, RenderManager.FRAME_BEGIN), _this.onResize((() => {
				Utils.debounce(_this.setScrollableHeight, 100)
			})), _this.events.sub(Keyboard.DOWN, onKeyboardDown)
		}(), _this.resetScroll())
	}, this.resetScroll = function() {
		_this.scroll.reset(), _this.scroll.y = 0, _this.y = 0, _this.scrollContainer.transform({
			y: 0
		}), _this.setScrollableHeight()
	}, this.disableScroll = function() {
		_this.scroll && (_this.scroll.reset(), _this.scroll.y = 0, _this.flag("canUpdateScroll", !1), _this.delayedCall((() => {
			_this.scrollContainer.transform({
				y: 0
			})
		}), 500))
	}, this.toggleScrollEnabled = function(val) {
		_this.scroll ? _this.scroll.enabled = val : _this.flag("toggleScrollWhenInitialized", val)
	}, this.destroyScroll = function() {}
}), (_ => {}));
class UIText extends GLUIText {
	constructor(description, font, fontSize, options, offset = !1) {
		super(description, font, fontSize, options), this.text.ready().then((_ => {
			this.useShader(new Shader("UIText", {
				uTransition: {
					value: 0
				},
				uOpacity: {
					value: 1
				},
				uColorBold: {
					value: options.colorBold || new Color("#000000")
				},
				uOffset: {
					value: offset || 15
				},
				uWordCount: {
					value: this.text.mesh.geometry.wordCount,
					ignoreUIL: !0
				},
				uLineCount: {
					value: this.text.mesh.geometry.lineCount,
					ignoreUIL: !0
				}
			}))
		}))
	}
	get ready() {
		return this.text.ready
	}
	get shader() {
		return this.text.shader
	}
	get transition() {
		return this.text.shader.get("uTransition")
	}
	set transition(value) {
		this.text.shader.set("uTransition", value)
	}
}
Class((function UIToggle(_opts) {
	var $this;
	Inherit(this, GLUIElement);
	const _this = this;
	let $bg, $label, $toggleBG, $toggle;
	var _shader, _toggleBGShader, _toggleShader;
	const COLORS = {
		bg: new Color(StyleGuide.colors.royalBlue),
		text: new Color(StyleGuide.colors.white),
		black: new Color(StyleGuide.colors.black)
	};
	let _options = [],
		_activeToggle = 0;

	function hover({
		action: action
	}) {}

	function click() {
		let prevActive = _activeToggle;
		_activeToggle = 0 === _activeToggle ? 1 : 0, $toggle.tween({
			x: 0 === _activeToggle ? 305 : 365
		}, 500, "easeOutCubic"), _options[prevActive].bg(`assets/images/UI/${_options[prevActive]._icon}_purple.png`), _options[_activeToggle].bg(`assets/images/UI/${_options[_activeToggle]._icon}_black.png`), _opts.cb?.()
	}
	_this.ready = Promise.create(), async function() {
		($this = _this.element).hide(),
			function initBg() {
				$bg = $gl(435, 80, COLORS.black), _shader = _this.initClass(Shader, "VRButton", {
					uResolution: {
						value: new Vector2(435, 80)
					},
					uRounding: {
						value: 1
					},
					uHover: {
						value: 0
					},
					uOpacity: {
						value: 0
					},
					uColor: {
						value: COLORS.black
					},
					transparent: !0
				}), $bg.useShader(_shader), $bg.setZ(1), $this.add($bg)
			}(), await async function initLabel() {
					let {
						family: family,
						size: size,
						options: options
					} = StyleGuide.getStyle(_opts.style || "p", _opts.weight || 600);
					$label = new UIText(_opts.label, family, 1.25 * size, {
						...options,
						color: COLORS.white
					}), await $label.text.ready(), $label.x = 45, $label.y = (80 - $label.dimensions.height) / 2 - 2, $label.setZ(2), $this.add($label)
				}(),
				function initToggle() {
					$toggleBG = $gl(140, 80, COLORS.black), _toggleBGShader = _this.initClass(Shader, "VRButton", {
						uResolution: {
							value: new Vector2(140, 80)
						},
						uRounding: {
							value: 1
						},
						uHover: {
							value: 0
						},
						uOpacity: {
							value: 0
						},
						uColor: {
							value: COLORS.black
						},
						transparent: !0
					}), $toggleBG.useShader(_toggleBGShader), $toggleBG.setZ(1), $toggleBG.x = 295, $this.add($toggleBG), $toggle = $gl(60, 60, COLORS.bg), _toggleShader = _this.initClass(Shader, "VRButton", {
						uResolution: {
							value: new Vector2(60, 60)
						},
						uRounding: {
							value: 1
						},
						uHover: {
							value: 0
						},
						uOpacity: {
							value: 0
						},
						uColor: {
							value: COLORS.bg
						},
						transparent: !0
					}), $toggle.useShader(_toggleShader), $toggle.setZ(2), $toggle.y = 10, $toggle.x = 305, $this.add($toggle)
				}(),
				function initOptions() {
					_opts.options.forEach(((item, i) => {
						let option = $gl(20, 20 * item.ratio, `assets/images/UI/${item.icon}${0==i?"_black":"_purple"}.png`);
						option.x = 325 + 60 * i, option.y = 30 + (20 - 20 * item.ratio) / 2, item.bottom && (option.y = 45), option.setZ(3), option._icon = item.icon, _options.push(option), $this.add(option)
					}))
				}(),
				function addListeners() {
					$bg.interact(hover, click)
				}(), _this.ready.resolve()
	}(), this.animateIn = async function(delay = 0) {
		_this.flag("animating", !0), $this.show(), $label.shader.tween("uTransition", 1, 2500, "easeOutCubic", 500 + delay), _shader.tween("uOpacity", .05, 1250, "easeOutSine", delay), _toggleBGShader.tween("uOpacity", 1, 1250, "easeOutSine", delay), _toggleShader.tween("uOpacity", 1, 1250, "easeOutSine", delay)
	}, this.animateOut = async function(duration = 600) {
		_this.flag("animating", !0), $label.shader.tween("uTransition", 0, duration, "easeOutCubic"), _shader.tween("uOpacity", 0, duration, "easeOutCubic"), _toggleBGShader.tween("uOpacity", 0, duration, "easeOutCubic"), _toggleShader.tween("uOpacity", 0, duration, "easeOutCubic"), await _this.wait(duration), $this.hide()
	}, this.get("width", (() => 435)), this.get("height", (() => 80)), this.get("label", (() => $label)), this.click = click
})), Class((function GlobalUI() {
	Inherit(this, Element), Inherit(this, StateComponent);
	const _this = this,
		$this = _this.element;
	let _stars, _logo, _sponsor, _dreamui, _unauthorized, _404, _modal, _smallNav, _privacyBanner, _currTheme;

	function onThemeColorChange(color) {
		_currTheme || (_logo.element.div.classList.add(color), _stars.element.div.classList.add(color), _sponsor.element.div.classList.add(color)), _logo.element.div.classList.replace(_currTheme, color), _stars.element.div.classList.replace(_currTheme, color), _sponsor.element.div.classList.replace(_currTheme, color), _currTheme = color
	}
	async function onModalChange(modal) {
		modal ? _dreamui.animateOut() : !1 === modal && (await _this.wait(1e3), _dreamui.animateIn())
	}

	function onViewChange(state) {
		if (!PortalUtil.isPortal && !Utils.query("no-UI")) switch (state) {
			case "landing":
				_dreamui.hide();
				break;
			case "unauthorized":
				_dreamui.hide(), _unauthorized = _this.initClass(UIUnauthorized, [$this]);
				break;
			case "404":
				_dreamui.hide(), _404 = _this.initClass(UI404, [$this]);
				break;
			default:
				_dreamui.show()
		}
	}!async function() {
		Global.PLAYGROUND || Tests.isVR() || (! function initHTML() {
			Utils.query("debugAuth") ? _this.commit(UIStore, "setView", "unauthorized") : Utils.query("404") ? _this.commit(UIStore, "setView", "404") : _this.commit(UIStore, "setView", "landing");
			_logo = _this.initClass(LogoUI, [$this]), _stars = _this.initClass(StarsUI, [$this]), _sponsor = _this.initClass(SponsorsUI, [$this]),  _modal = _this.initClass(UIModal, [$this]), _privacyBanner = _this.initClass(PrivacyBanner, [$this]), _dreamui = UITransparentBar.instance({
				logo: "dreamwave"
			}, [$this]), _dreamui.logo.div.style.visibility = "hidden", Utils.query("no-UI") && (_logo.element.hide(), _stars.element.hide())
		}(), function initStyles() {
			$this.goob("\n            & {\n                position: fixed;\n                top: 0;\n                right: 0;\n                bottom: 0;\n                left: 0;\n                z-index: 100;\n            }\n        ")
		}(), function addListeners() {
			_this.bindState(UIStore, "view", onViewChange), _this.bindState(UIStore, "themeColor", onThemeColorChange), _this.bindState(UIStore, "modal", onModalChange)
		}(), Stage.add($this), Utils.query("debugModal") && _this.delayedCall((() => {
			UIStore.commit("setModal", Utils.query("debugModal"))
		}), 1e3))
	}(), this.get("sponsors", (_ => _sponsor))
}), "singleton"), Class((function LogoUI() {
	Inherit(this, Element);
	const _this = this,
		$this = _this.element;
	let _logo;
	! function initHTML() {
		_logo = $this.create("logo"), _logo.html(LogoUI.SVG), _this.events.sub(StarsUI.ENTER_HOTSPOT, (_ => {
			$this.classList().add("closed")
		})), _this.events.sub(StarsUI.LEAVE_HOTSPOT, (_ => {
			$this.classList().remove("closed")
		}))
	}(),
	function initStyles() {
		$this.goob(`\n            & {\n                z-index: 2;\n                transition: opacity .3s;\n            \n                ${StyleGuide.fluid("top",StyleGuide.lateralPadding)}\n                ${StyleGuide.fluid("left",StyleGuide.lateralPadding)}\n\n                @media (max-height: 680px) and (orientation: landscape) {\n                    top: 20px;\n                }\n\n                .logo svg {\n                    path, rect {\n                        fill: ${StyleGuide.colors.white};\n                        transition: fill 0.4s ${TweenManager._getEase("easeOutCubic")};\n                        transition-delay: 0.4s;\n                    }\n                }\n            }\n\n            &.closed {\n                ${StyleGuide.smaller("tablet","\n                    opacity: 0;\n                ")}\n            }\n\n            &.theme--white {\n                .logo svg {\n                    path, rect {\n                        fill: ${StyleGuide.colors.white};\n                    }\n                }\n            }\n\n            &.theme--royalBlue {\n                .logo svg {\n                    path, rect {\n                        fill: ${StyleGuide.colors.royalBlue};\n                    }\n                }\n            }\n\n            .logo {\n                width: 42px;\n                height: auto;\n                ${StyleGuide.fluid("margin-top",{mob:6,xl:3})} \n            }\n        `)
	}()
}), (_ => {
	LogoUI.SVG = '\n        <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 214.09332 215.52">\n            <g>\n                <path d="M15.15053295 199.58253373c0-2.86093326-2.19115994-4.45213322-4.9984532-4.45213322H5.15311987v15.33647962h4.99895988c2.80729326 0 4.9984532-1.58958663 4.9984532-4.45209323zM-.00052083 215.16687468v-24.73647405h10.15260058c6.4593865 0 10.1509864 3.67506657 10.1509864 9.1521331v6.43225317c0 5.4770932-3.6915999 9.15208778-10.1509864 9.15208778H-.00052083"/>\n                <path d="M41.22866564 199.22933374c0-2.86239993-2.19119995-4.45199989-4.99999988-4.45199989-2.80573326 0-4.99839987 1.58959996-4.99839987 4.4519999v7.13858648c0 2.86145326 2.1926666 4.45363989 4.99839987 4.45363989 2.80879993 0 4.99999988-1.59218663 4.99999988-4.4536399zM36.22866576 215.52c-6.45933317 0-10.15106641-3.6744799-10.15106641-9.15207977v-7.13858649c0-5.47759986 3.69173324-9.15199977 10.15106641-9.15199977 6.46093317 0 10.15253308 3.6743999 10.15253308 9.15199977v7.13858649c0 5.47759986-3.6915999 9.15207977-10.15253308 9.15207977"/>\n                <path d="m66.11399835 201.31320036-4.36186656 13.85367432h-5.57559986l-4.96093321-24.73647405h5.1917332l3.11453326 16.74949291 4.99479987-16.74949291h3.19533326l4.99586654 16.74949291 3.11346659-16.74949291h5.19119987l-4.95946654 24.73647405h-5.57546653l-4.3635999-13.85367432"/>\n                <path d="M108.18693063 190.43040063h5.15266654v17.66981289c0 4.9104132-2.96093326 7.41978648-7.99893314 7.41978648-5.0365332 0-7.99746646-2.50937327-7.99746646-7.41978648h5.1901332c.1536 1.76666662 1.15359997 2.7213466 2.80733326 2.7213466 1.99999995 0 2.8462666-1.2374933 2.8462666-2.8640666v-17.5270929"/>\n                <path d="M134.76932996 199.22933374c0-2.86239993-2.19279994-4.45199989-4.99999987-4.45199989-2.80733326 0-4.99906654 1.58959996-4.99906654 4.4519999v7.13858648c0 2.86145326 2.19173328 4.45363989 4.99906654 4.45363989 2.80719993 0 4.99999987-1.59218663 4.99999987-4.4536399zM129.7693301 215.52c-6.45999984 0-10.15106641-3.6744799-10.15106641-9.15207977v-7.13858649c0-5.47759986 3.69106657-9.15199977 10.1510664-9.15199977 6.46133318 0 10.15066642 3.6743999 10.15066642 9.15199977v7.13858649c0 5.47759986-3.68933324 9.15207977-10.15066641 9.15207977"/>\n                <path d="M166.51599584 215.16687468h-5.15066654l-9.99866642-15.93754094v15.93754094h-5.15199987v-24.73647405h5.15199987l9.99866642 15.9375196v-15.9375196h5.15066654v24.73647405"/>\n                <path d="M178.4946622 200.32520038h10.03866642v4.70001322H178.4946622v5.44166653h11.22799972v4.69999455H173.341329v-24.73647405h16.38133292v4.69999988H178.4946622v5.19479987"/>\n                <path d="M195.13732845 207.35749354h5.30666654c.30666666 2.08542661 2.07599995 3.46406658 4.65199988 3.46406658 2.26933328 0 3.84666657-.77759998 3.84666657-2.47499994 0-1.37863997-.88399997-2.15573328-2.76933326-2.6161466l-4.53733322-1.12915997c-4.11466656-1.02551998-6.15199985-3.67605325-6.15199985-7.31618649 0-4.94626654 4.23066656-7.20773315 8.91999978-7.20773315 5.38399987 0 8.72933311 2.89733326 9.30666643 7.10253316h-5.30799986c-.46-1.66146663-2.34399994-2.40253328-4.07466657-2.40253328-2.15199994 0-3.6919999.77759998-3.6919999 2.50773327 0 1.44946663 1.23066663 2.08546662 2.69199993 2.4390666l4.38399989 1.09586665c4.1519999 1.02399997 6.3826665 3.35625325 6.3826665 7.5265598 0 4.45365323-3.15199992 7.17343983-8.99866644 7.17343983-5.88266652 0-9.68933309-3.25051992-9.95866642-8.16250646"/>\n                <path d="M142.83732976 47.6360042c-.24933332-2.94933326-.37733332-4.24133323-.9493333-6.22266651-2.9386666-10.17199975-12.3191997-17.6093329-23.43799942-17.6093329h-47.0114655v95.24306429h23.85933274v23.83693274H47.63639881V.00267205h71.13133155c24.03493274 0 43.89893224 17.48799957 47.31226549 40.57466566.33066666 2.23599994.55199998 4.55199988.55199998 7.07733315l-23.79466607-.01866666"/>\n                <path d="M166.63199583 65.45733708v29.5621326c0 26.39213267-22.17733277 47.86453214-48.56066545 47.86453214h-4.98066654v-23.83693274h4.76453321c13.445333 0 24.98613271-10.9478664 24.98613271-24.39266606V65.45733708h23.79066607"/>\n            </g>\n        </svg>\n    '
})), Class((function PrivacyBanner() {
	Inherit(this, Element);
	const _this = this,
		$this = _this.element;
	var $button;

	function resize() {}! function initHTML() {
		$this.create("cookie").html(AppCMSConfig.data.cookieBannerBlocks[0].html, !0), ($button = $this.create("button")).html(`I <span style="color:${StyleGuide.colors.royalBlue};">Agree</span>`, !0), $button.interact((e => {
			$button.tween({
				opacity: "over" === e.action ? .85 : 1
			}, 450, "easeOutCubic")
		}), (() => {
			gtag("consent", "update", {
				ad_storage: "granted",
				analytics_storage: "granted"
			}), Storage.set("foef:cookiesAccepted", !0), $this.tween({
				y: "100%"
			}, 450, "easeOutCubic").onComplete((() => $this.destroy()))
		}), "#", "I Agree")
	}(),
	function initStyles() {
		$this.goob(`\n            display: flex;\n            flex-direction: row;\n            justify-content: center;\n            align-items: center;\n            bottom: 0;\n            left: 0;\n            width: 100vw;\n            background: ${StyleGuide.colors.royalBlue};\n            overflow: hidden;\n            padding-top: 30px;\n            padding-bottom: 30px;\n            ${StyleUtil.fluid("padding-left",StyleGuide.lateralPadding)}\n            ${StyleUtil.fluid("padding-right",StyleGuide.lateralPadding)}\n\n            box-sizing: border-box;\n            z-index: 9999999;\n\n            ${StyleUtil.smaller("l","\n                flex-direction: column;\n                justify-content: center;\n                align-items: center;\n            ")}\n\n            * {\n                position: relative !important;\n            }\n        \n            .cookie {\n                position: relative !important;\n                font-size: 14px;\n                font-weight: regular;\n                text-decoration: none;\n                color: ${StyleGuide.colors.white};\n                text-align: center;\n                margin-right: 50px;\n\n\n                ${StyleUtil.smaller("l","\n                    margin-bottom: 15px;\n                    width: 100%;\n                    max-width: 970px;\n                    margin-right: 0;\n                ")}\n\n                p {\n                    color: ${StyleGuide.colors.white};\n                    font-size: 16px;\n                    ${StyleUtil.smaller("l","\n                        font-size: 14px;\n                    ")}    \n                }\n\n                a {\n                    color: ${StyleGuide.colors.white};\n                    text-decoration: underline;\n                }\n            }\n\n            .button{\n                position: relative !important;\n                overflow: hidden;\n                outline: none;\n                z-index: 1;\n                display: block;\n                color: black;\n                text-align: center;\n                box-sizing: border-box;\n                border-radius: 50px;\n                cursor: pointer;\n                background: white;\n                font-size: 16px;\n                width: 135px;\n                height: 50px;\n                line-height: 50px;\n                font-weight: 500;\n                \n                ${StyleUtil.smaller("l","\n                    width: 135px;\n                    height: 35px;\n                    line-height: 35px;\n                    font-size: 14px;\n                ")}\n\n                a {\n                    position: absolute !important;\n                }\n            }\n        `)
	}(),
	function addHandlers() {
		_this.onResize(resize)
	}(), (Storage.get("foef:cookiesAccepted") || Utils.query("spawnDebug") || PortalUtil.isPortal) && (gtag("consent", "update", {
		ad_storage: "granted",
		analytics_storage: "granted"
	}), function hide() {
		$this.hide()
	}())
})), Class((function SmallNav() {
	Inherit(this, Element), Inherit(this, StateComponent);
	const _this = this,
		$this = _this.element;
	let _items = ["credits", "faq", "visit_the_field"],
		_links = [];
	async function onModalChange(modal) {
		modal ? _this.animateOut() : !1 === modal && (await _this.wait(600), _this.animateIn())
	}

	function onLinkHover() {}!async function() {
		await
		function initHTML() {
			_items.forEach(((item, i) => {
				let $linkWrapper = $this.create("link-wrapper"),
					$link = $linkWrapper.create("link");
				$link.text(item.toUpperCase().replaceAll("_", " ")), _links.push($link), $linkWrapper.interact(onLinkHover, (() => {
					! function onLinkClick(link) {
						if ("visit_the_field" === link) return TrackAnalytics.track("TheFieldExit_smallNav"), void window.open("https://thefield.wsjbarrons.com");
						UIStore.commit("setModal", link)
					}(_items[i])
				}))
			})), SplitText.isFontReady().then((async () => {
				await defer(),
					function splitLinks() {
						_links.forEach(($link => {
							$link.split = _this.initClass(SplitText, $link), $link.split.lines.forEach((l => l.css({
								overflow: "hidden"
							}))), $link.split.words.forEach((w => w.transform({
								y: "100%"
							})))
						}))
					}()
			}))
		}(),
		function initStyles() {
			$this.goob(`\n            & {\n                ${StyleGuide.fluid("right",StyleGuide.lateralPadding)}\n                ${StyleGuide.fluid("bottom",StyleGuide.lateralPadding)}\n                color: ${StyleGuide.colors.white};\n                display: flex;\n                width: auto;\n                height: auto;\n                justify-content: space-between;\n\n                ${StyleGuide.smaller(StyleGuide.mobileBreakpoint,"\n                    display: none;\n                ")}\n\n                .link-wrapper {\n                    margin-right: 10px;\n                    position: relative !important;\n                }\n                .link {\n                    width: 100%;\n                    height: 100%;\n                    position: relative !important;\n                    ${StyleGuide.manropeRegular}\n                    ${StyleGuide.fluid("font-size",{mob:13,l:13})}\n                    \n\n                    transform-origin: 50% 0%;\n                    overflow: hidden;\n                    will-change: transform;\n                    cursor: pointer;\n\n                    &::before {\n                        content: "";\n                        position: absolute !important;\n                        display: block;\n                        background-color: ${StyleGuide.colors.white};\n                        width: 100%;\n                        height: 1px;\n                        bottom: 0;\n                        transform: scaleX(0);\n                        transition: transform 0.8s ${TweenManager._getEase("easeOutCubic")};\n                        transform-origin: left;\n                        will-change: transform;\n                    }\n\n                    &.in {\n                        transform-origin: right;\n                        &::before {\n                            transform: scaleX(1);\n                        }\n                    }\n\n                    \n                }   \n            }\n        `)
		}(),
		function addHandlers() {
			_this.events.sub(LoaderView.ANIMATING_OUT, (() => {
				_this.delayedCall((() => {
					_this.animateIn()
				}), 2e3)
			})), _this.bindState(UIStore, "modal", onModalChange)
		}(), Utils.query("spawnDebug") && _this.delayedCall((() => {
			_this.animateIn()
		}), 4e3)
	}(), this.animateIn = function() {
		PortalUtil.isPortal || Utils.query("no-UI") || _links.forEach((($link, i) => {
			_this.delayedCall((() => {
				$link.div.classList.add("in")
			}), 200 * i), $link.split.words.forEach(((w, i) => {
				w.tween({
					y: "0%"
				}, 1200, "easeOutCubic", 150 * i + 200)
			}))
		}))
	}, this.animateOut = function() {
		_links.forEach(($link => {
			$link.split.words.forEach(((w, i) => {
				w.tween({
					y: "100%"
				}, 800, "easeOutCubic", 100)
			})), _this.delayedCall((() => {
				$link.div.classList.remove("in")
			}), 200)
		}))
	}
}), (_ => {})), Class((function SponsorsUI() {
	Inherit(this, Element);
	const _this = this,
		$this = _this.element;
	let _sponsors, $wrapper, $text;
	!async function() {
		await AppCMSConfig.ready(), _sponsors = AppCMSConfig.data?.sponsors, _sponsors && _sponsors.length && (_this.flag("hasData", !0), function initHTML() {
			$wrapper = $this.create("sponsors-wrapper");
			let text = "Proudly Sponsored By";
			Stage.width < StyleGuide.mobileBreakpoint && (text = "SPONSORED BY");
			$text = $wrapper.create("sponsored-by", "span").text(text);
			let $imgWrapper = $wrapper.create("sponsor-images");
			_sponsors.forEach((sponsor => {
				const url = SanityImageUrlBuilder.build(sponsor.logo).url();
				$imgWrapper.create("sponsor-img", "img").attr("src", url).attr("alt", `Sponsor ${sponsor.title}`)
			})), _this.events.sub(StarsUI.ENTER_HOTSPOT, (_ => {
				$this.classList().add("closed")
			})), _this.events.sub(StarsUI.LEAVE_HOTSPOT, (_ => {
				$this.classList().remove("closed")
			}))
		}(), function initStyles() {
			$this.goob(`\n            & {\n                z-index: 2;\n                transition: opacity .3s;\n            \n                ${StyleGuide.fluid("top",StyleGuide.lateralPadding)}\n                ${StyleGuide.fluid("left",StyleGuide.lateralPadding)}\n\n                /* 42px logo width + 32px margin */\n                transform: translateX(74px);\n\n                @media (max-height: 680px) and (orientation: landscape) {\n                    top: 20px;\n                }\n                height: 42px;\n\n                .sponsored-by {\n                    position: relative !important;\n                    color: #FFF;\n                    display: block !important;\n                    ${StyleGuide.manropeMedium}\n                    ${StyleGuide.fluid("font-size",{mob:14,l:16})}\n                    \n                    white-space: nowrap;\n                }\n\n                .sponsor-images {\n                    position: relative !important;\n                    display: flex;\n                    \n                }\n\n                ${StyleGuide.smaller(StyleGuide.mobileBreakpoint,`\n                    top: unset;\n                    transform: translateX(0px);\n                    \n                    bottom: 10px;\n\n                    .sponsors-wrapper {\n                        border-left: unset !important;\n                        border-top: 1px solid white;\n\n                        flex-flow: column nowrap !important;\n                        justify-content: center !important;\n                        \n                        .sponsor-images {\n                            align-self: flex-end !important;\n\n                            img {\n                                /*width: 50px;*/\n                                width: auto;\n                                height: 11px;\n                            }\n                        }\n                        \n                    }\n\n                    .sponsored-by {\n                        position: absolute !important;\n                        align-self: flex-start !important;\n                    }\n\n                    width: calc(100% - ${2*StyleGuide.lateralPadding.mob}px);\n                `)}\n            }\n\n            .sponsors-wrapper {\n                display: flex;\n                flex-flow: row nowrap;\n                justify-content: space-between;\n                align-items: center;\n                width: 100%;\n                /*border-left: 1px solid white;*/\n                height: 100%;\n\n                .sponsor-img {\n                    position: relative !important;\n                    width: 72px;\n                    height: auto;\n                    margin-left: 20px;\n                    \n                }\n            }\n\n            \n\n            \n\n            &.theme--white {\n                opacity: 1;\n            }\n\n            &.theme--royalBlue {\n                opacity: 0;\n            }\n\n        `)
		}())
	}(), this.get("sponsors", (_ => _sponsors)), this.get("hasData", (_ => _this.flag("hasData")))
}), "singleton"), Class((function StarsUI() {
	Inherit(this, Element);
	const _this = this,
		$this = _this.element;
	let _stars = [];

	function resize() {
		_stars.forEach((($star, index) => {
			const pos = StarsUI.GET_POSITION(index, "top");
			$star.transform(pos)
		}))
	}! function initHTML() {
		for (let i = 0; i < 3; i++) {
			const $star = $this.create("star").html(StarsUI.SVG),
				pos = StarsUI.GET_POSITION(i, "top");
			$star.pos = pos, $star.transform($star.pos), _stars.push($star)
		}
	}(),
	function initStyles() {
		$this.goob(`\n            & {\n                z-index: 2;\n\n                ${StyleGuide.smaller("tablet","\n                    display: none;\n                ")}\n            }\n\n            &.closed {\n                .star:nth-child(1) svg {\n                    transform: translateX(30px) rotate(350deg);\n                }\n\n                .star:nth-child(2) svg {\n                    transform: rotate(350deg);\n                }\n\n                .star:nth-child(3) svg {\n                    transform: translateX(-30px) rotate(350deg);\n                }\n            }\n\n            .star svg {\n                transition: transform 1.2s cubic-bezier(0.645, 0.045, 0.355, 1.000);\n                will-change: transform;\n            }\n\n            .star path {\n              fill: white;\n              \n              transition: fill 0.4s ${TweenManager._getEase("easeOutCubic")};\n              transition-delay: 0.4s;\n            }\n\n            &.theme--white {\n                .star path {\n                    fill: ${StyleGuide.colors.white};\n                }\n            }\n\n            &.theme--royalBlue {\n                .star path {\n                    fill: ${StyleGuide.colors.royalBlue};\n                }\n            }\n        `)
	}(), _this.onResize(resize), _this.events.sub(StarsUI.ENTER_HOTSPOT, (_ => {
		$this.classList().add("closed")
	})), _this.events.sub(StarsUI.LEAVE_HOTSPOT, (_ => {
		$this.classList().remove("closed")
	}))
}), (_ => {
	StarsUI.SVG = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.195217 10.1952C1.45734 10.1946 2.70722 10.4427 3.8734 10.9254C5.03958 11.4081 6.09918 12.1159 6.99164 13.0084C7.8841 13.9008 8.59191 14.9604 9.07461 16.1266C9.55731 17.2928 9.80542 18.5427 9.80478 19.8048C9.80478 19.8566 9.82535 19.9062 9.86196 19.9428C9.89857 19.9794 9.94823 20 10 20C10.0518 20 10.1014 19.9794 10.138 19.9428C10.1747 19.9062 10.1952 19.8566 10.1952 19.8048C10.1946 18.5427 10.4427 17.2928 10.9254 16.1266C11.4081 14.9604 12.1159 13.9008 13.0084 13.0084C13.9008 12.1159 14.9604 11.4081 16.1266 10.9254C17.2928 10.4427 18.5427 10.1946 19.8048 10.1952C19.8566 10.1952 19.9062 10.1747 19.9428 10.138C19.9794 10.1014 20 10.0518 20 10C20 9.94823 19.9794 9.89857 19.9428 9.86196C19.9062 9.82535 19.8566 9.80478 19.8048 9.80478C18.5426 9.80555 17.2927 9.55752 16.1265 9.07487C14.9602 8.59222 13.9006 7.88441 13.0081 6.99192C12.1156 6.09944 11.4078 5.03978 10.9251 3.87355C10.4425 2.70732 10.1944 1.45738 10.1952 0.195217C10.1952 0.143442 10.1747 0.093788 10.138 0.0571776C10.1014 0.0205673 10.0518 0 10 0C9.94823 0 9.89857 0.0205673 9.86196 0.0571776C9.82535 0.093788 9.80478 0.143442 9.80478 0.195217C9.80542 1.45734 9.55731 2.70722 9.07461 3.8734C8.59191 5.03957 7.8841 6.09918 6.99164 6.99164C6.09918 7.88409 5.03958 8.59191 3.8734 9.07461C2.70722 9.55731 1.45734 9.80542 0.195217 9.80478C0.143442 9.80478 0.0937909 9.82535 0.0571806 9.86196C0.0205703 9.89857 0 9.94823 0 10C0 10.0518 0.0205703 10.1014 0.0571806 10.138C0.0937909 10.1747 0.143442 10.1952 0.195217 10.1952Z" />\n    </svg>', StarsUI.SIZE = 20, StarsUI.ENTER_HOTSPOT = "StarsUI.ENTER_HOTSPOT", StarsUI.LEAVE_HOTSPOT = "StarsUI.LEAVE_HOTSPOT", StarsUI.GET_POSITION = function(id, type = "top") {
		const pos = {
			x: 0,
			y: 0
		};
		return "center" === type && (pos.y = Stage.height / 2, 0 === id && (pos.x = 60), 1 === id && (pos.x = Stage.width / 2), 2 === id && (pos.x = Stage.width - 60)), "top" === type && (pos.y = Math.range(Stage.width, StyleGuide.breakpoints.mob, StyleGuide.breakpoints.xl, 50, 75, !0), 0 === id && (pos.x = Stage.width / 2 - 30), 1 === id && (pos.x = Stage.width / 2), 2 === id && (pos.x = Stage.width / 2 + 30)), pos.x -= StarsUI.SIZE / 2, pos.y -= StarsUI.SIZE / 2, pos
	}
})), Class((function UICredits() {
	Inherit(this, Element), Inherit(this, UIScrollView);
	const _this = this,
		$this = _this.element;
	let $title, $creditsWrapper, _data, _creditGroups = [];
	!async function() {
		_data = await Credits.get(), _data && (! function initHTML() {
			$title = $this.create("title").text("CREDITS"), $creditsWrapper = $this.create("credits-wrapper"), _this.scrollContainer = $this, _data.creditGroup.forEach(((group, i) => {
				let $creditWrapper = $creditsWrapper.create("credit-wrapper"),
					$inner = $creditWrapper.create("credits-inner"),
					$group = $inner.create("group");
				$group.__$title = $group.create("group-title").text(group.title.toUpperCase());
				let $people = $inner.create("people"),
					people = group.people.map((({
						name: name,
						title: title
					}) => {
						let $person = $people.create("person");
						return $person.__$name = $person.create("person-name").text(name), title && ($person.__$title = $person.create("person-title").text(title)), $person
					}));
				_creditGroups.push({
					$creditWrapper: $creditWrapper,
					$group: $group,
					people: people
				})
			})), SplitText.isFontReady().then((async () => {
				await defer(),
					function splitTitle() {
						$title.split = _this.initClass(SplitText, $title), $title.split.lines.forEach((l => l.css({
							overflow: "hidden"
						}))), $title.split.words.forEach((w => w.transform({
							y: "100%"
						})))
					}(),
					function splitCredits() {
						_creditGroups.forEach((({
							$group: $group,
							people: people
						}, i) => {
							$group.__$title.split = _this.initClass(SplitText, $group.__$title), $group.__$title.split.lines.forEach((l => l.css({
								overflow: "hidden"
							}))), $group.__$title.split.words.forEach((w => w.transform({
								y: "100%"
							}))), people.forEach(($person => {
								$person.__$name.split = _this.initClass(SplitText, $person.__$name), $person.__$name.split.lines.forEach((l => l.css({
									overflow: "hidden"
								}))), $person.__$name.split.words.forEach((w => {
									w.css({
										opacity: 0
									}), w.transform({
										y: "100%"
									})
								})), $person.__$title && ($person.__$title.split = _this.initClass(SplitText, $person.__$title), $person.__$title.split.lines.forEach((l => l.css({
									overflow: "hidden"
								}))), $person.__$title.split.words.forEach((w => {
									w.css({
										opacity: 0
									}), w.transform({
										y: "100%"
									})
								})))
							}))
						}))
					}(), _this.flag("canSetupScroll", !0)
			}))
		}(), function initStyles() {
			$this.goob(`\n            & {\n                display: flex;\n                flex-flow: column nowrap;\n                align-items: center;\n                \n                width: 100%;\n                height: auto;\n\n                &, *:not(.hit), *:not(.line), *:not(.word) {\n                    position: relative !important;\n                }\n\n                .title {\n                    ${StyleGuide.fluid("font-size",{mob:40,xl:303})}\n                    color: ${StyleGuide.colors.royalBlue};\n                    ${StyleGuide.manropeMedium}\n                    text-align: center;\n\n                    ${StyleGuide.smaller("l","\n                        margin-bottom: 50px;\n                    ")}\n\n                    @media (max-height: 680px) and (orientation: landscape) {\n                        margin-bottom: 0px;\n                    }\n                }\n\n                .credits-wrapper {      \n                    display: flex;\n                    flex-flow: column nowrap;\n                    justify-content: flex-start;\n                    width: calc(100% - ${StyleGuide.lateralPadding.xl}px * 2);\n                    padding-bottom: 30px;\n                    \n                    .credit-wrapper:last-of-type {\n                        &::after {\n                            height: 1px;\n                        }\n                    }\n\n                    .credit-wrapper {\n                        /*padding: 40px 0px 20px 0px;*/\n                        padding: 40px 0px 40px;\n                        transition: all 0.4s ${TweenManager._getEase("easeOutCubic")};\n                        \n                        .credits-inner {\n                            display: flex;\n                            justify-content: space-between;\n\n                            .group, .people {\n                                width: 50%;   \n                            }\n\n                            ${StyleGuide.smaller("l","\n                                flex-flow: column nowrap;\n                                align-items: center;\n                                .group, .people {\n                                    width: 100%;   \n                                }\n\n                                .group-title {\n                                    margin-bottom: 30px;\n                                    text-align: center;\n                                }\n                            ")}\n\n                            .group {\n                                .group-title {\n                                    ${StyleGuide.manropeMedium}\n                                    ${StyleGuide.fluid("font-size",{mob:25,l:25})}\n                                    color: ${StyleGuide.colors.royalBlue};\n                                }\n                            }\n\n                            .people {\n                                display: flex;\n                                flex-flow: row wrap;\n\n                                justify-content: space-between;\n                                ${StyleGuide.smaller("l","\n                                    align-items: centerl\n                                ")}\n\n                                .person {  \n                                    flex-basis: 50%;\n                                    margin-bottom: 20px;\n\n                                    ${StyleGuide.smaller("l","\n                                        flex-basis: 100%;\n                                    ")}\n                                    .person-title, .person-name {\n                                        color: ${StyleGuide.colors.royalBlue};\n                                        ${StyleGuide.fluid("font-size",{mob:15,l:15})}\n                                        ${StyleGuide.smaller("l","\n                                            text-align: center;\n                                        ")}\n                                    }\n\n                                    .person-title {\n\n                                        ${StyleGuide.manropeRegular}\n                                    }\n\n                                    .person-name {\n                                        ${StyleGuide.manropeMedium}\n                                    }\n                                }\n                            }\n                        }\n\n                        &::before, &::after {\n                            content: "";\n                            position: absolute !important;\n                            display: block;\n                            width: 100%;\n\n                            transform: scaleX(0);\n                            transition: transform 0.4s ${TweenManager._getEase("easeOutCubic")};\n                            will-change: transform;\n                            transform-origin: left;\n                            background-color: ${StyleGuide.colors.royalBlue};\n                        }\n\n                        &::before {\n                            top: 0px;\n                            height: 1px;\n                        }\n\n                        &::after {\n                            bottom: 0px;\n                        }\n\n                        &.in {\n                            transform-origin: right;\n                            &::before, &::after {\n                                transition-duration: 2s;\n                                transform: scaleX(1);\n                            }\n                        }\n                    }\n                }\n            }\n        `)
		}(), await _this.initializeScroll(), $this.hide())
	}(), this.animateIn = async function() {
		$this.show(),
			function prepareAnimateIn() {
				$title.split.words.forEach((w => {
					w.transform({
						y: "100%"
					})
				})), _creditGroups.forEach((({
					$group: $group,
					people: people
				}, i) => {
					$group.__$title.split.words.forEach((w => w.transform({
						y: "100%"
					}))), people.forEach(($person => {
						$person.__$name.split.words.forEach((w => {
							w.css({
								opacity: 0
							}), w.transform({
								y: "100%"
							})
						})), $person.__$title && $person.__$title.split.words.forEach((w => {
							w.css({
								opacity: 0
							}), w.transform({
								y: "100%"
							})
						}))
					}))
				}))
			}(), $title.split.words.forEach(((w, i) => {
				w.tween({
					y: "0%"
				}, 1200, "easeOutQuad", 150 * i + 500)
			})), await _this.wait(200), _creditGroups.forEach((({
				$creditWrapper: $creditWrapper,
				$group: $group,
				people: people
			}, i) => {
				_this.delayedCall((() => {
					$creditWrapper.div.classList.add("in")
				}), 250 * i + 400), $group.__$title.split.words.forEach(((w, j) => w.tween({
					y: "0%"
				}, 600, "easeOutCubic", 100 * j + 400))), people.forEach((($person, j) => {
					$person.__$name.split.words.forEach((w => w.tween({
						y: "0%",
						opacity: 1
					}, 600, "easeOutCubic", 100 * j + 800))), $person.__$title && $person.__$title.split.words.forEach((w => w.tween({
						y: "0%",
						opacity: 1
					}, 600, "easeOutCubic", 100 * j + 1e3)))
				}))
			})), _this.delayedCall((() => {
				_this.resetScroll(), _this.flag("interactive", !0), _this.toggleScrollEnabled(!0)
			}), 1200)
	}, this.animateOut = function() {
		_this.flag("interactive", !1), _this.toggleScrollEnabled(!1), $title.split.words.forEach(((w, i) => {
			w.tween({
				y: "-100%"
			}, 1200, "easeOutCubic")
		})), _creditGroups.forEach((({
			$creditWrapper: $creditWrapper,
			$group: $group,
			people: people
		}, i) => {
			_this.delayedCall((() => {
				$creditWrapper.div.classList.remove("in")
			}), 150 * i), $group.__$title.split.words.forEach(((w, j) => w.tween({
				y: "-100%"
			}, 600, "easeOutCubic", 100))), people.forEach((($person, j) => {
				$person.__$name.split.words.forEach((w => w.tween({
					y: "-100%",
					opacity: 0
				}, 600, "easeOutCubic", 200))), $person.__$title && $person.__$title.split.words.forEach((w => w.tween({
					y: "-100%",
					opacity: 0
				}, 600, "easeOutCubic", 400)))
			}))
		})), _this.delayedCall((() => {
			$this.hide()
		}), 1200)
	}
}), (_ => {})), Class((function UIFAQ() {
	Inherit(this, Element), Inherit(this, UIScrollView);
	const _this = this,
		$this = _this.element;
	let _data, $title, $questionsWrapper, _questions = [],
		_activeQuestion = null;

	function collapseActiveQuestion() {
		let curr = _questions[_activeQuestion],
			currentHeight = curr.$questionWrapper.div.clientHeight,
			answerHeight = curr.$answer.div.clientHeight,
			open = {
				value: currentHeight
			};
		tween(open, {
			value: currentHeight - answerHeight
		}, 400, "easeOutCubic", 0).onUpdate((() => {
			curr.$questionWrapper.css({
				height: open.value
			})
		})).onComplete((() => {
			curr.$answer.css({
				transform: null
			})
		})), _this.delayedCall((() => {
			curr.$questionWrapper.div.classList.remove("active")
		}), 0)
	}!async function() {
		_data = await FAQs.getAll(),
			function initHTML() {
				$title = $this.create("title").text("FAQ"), $questionsWrapper = $this.create("questions-wrapper"), _this.scrollContainer = $this, _data.forEach(((_question, i) => {
					let {
						answer: answer,
						question: question
					} = _question, $questionWrapper = $questionsWrapper.create("question-wrapper");
					$questionWrapper.create("question-bg");
					$questionWrapper.hover((e => function onQuestionHover(e, i) {
						if (!_this.flag("interactive") || _this.flag("animatingOut")) return;
						_questions[i].$questionWrapper.div.classList.toggle("hover", "over" === e.action)
					}(e, i))), $questionWrapper.click((e => function onQuestionClick(i, e) {
						if (!_this.flag("interactive") || _this.flag("animatingOut")) return;
						if (null !== _activeQuestion && (collapseActiveQuestion(), i === _activeQuestion)) {
							let answerHeight = _questions[_activeQuestion].$answer.div.clientHeight;
							return _this.scroll.max.y -= answerHeight, void(_activeQuestion = null)
						}(function expandQuestion(i) {
							let curr = _questions[i],
								currentHeight = curr.$questionWrapper.div.clientHeight,
								answerHeight = curr.$answer.div.clientHeight,
								closed = {
									value: currentHeight
								};
							null === _activeQuestion && (_this.scroll.max.y += answerHeight);
							tween(closed, {
								value: currentHeight + answerHeight
							}, 400, "easeOutCubic").onUpdate((() => {
								curr.$questionWrapper.css({
									height: closed.value
								})
							})), curr.$questionWrapper.div.classList.add("active")
						})(i), _activeQuestion = i
					}(i)));
					let $question = $questionWrapper.create("question").text(question),
						$answer = $questionWrapper.create("answer").html(answer[0].html);
					_questions.push({
						$questionWrapper: $questionWrapper,
						$question: $question,
						$answer: $answer
					})
				})), SplitText.isFontReady().then((async () => {
					await defer(),
						function splitTitle() {
							$title.split = _this.initClass(SplitText, $title), $title.split.lines.forEach((l => l.css({
								overflow: "hidden"
							}))), $title.split.words.forEach((w => w.transform({
								y: "100%"
							})))
						}(),
						function splitQuestions() {
							_questions.forEach((({
								$question: $question,
								$answer: $answer
							}) => {
								$question.split = _this.initClass(SplitText, $question), $question.split.lines.forEach((l => l.css({
									overflow: "hidden"
								})))
							}))
						}(), _this.flag("canSetupScroll", !0)
				}))
			}(),
			function initStyles() {
				$this.goob(`\n            & {\n                position: relative !important;\n                \n\n                display: flex;\n                flex-flow: column nowrap;\n                align-items: center;\n                \n                width: 100%;\n                height: auto;\n\n                .title {\n                    position: relative !important;\n                    ${StyleGuide.fluid("font-size",{mob:40,xl:303})}\n                    color: ${StyleGuide.colors.royalBlue};\n                    ${StyleGuide.manropeMedium}\n                    text-align: center;\n\n                    \n                    ${StyleGuide.smaller("l","\n                        margin-top: 30px;\n                        margin-bottom: 30px;\n                    ")}\n\n                    @media (max-height: 680px) and (orientation: landscape) {\n                        margin-bottom: 0px;\n                    }\n                }\n\n                .questions-wrapper {\n                    \n                    display: flex;\n                    flex-flow: column nowrap;\n                    justify-content: flex-start;\n                    width: calc(100% - ${StyleGuide.lateralPadding.xl}px * 2);\n                    position: relative !important;\n                    padding-bottom: 100px;\n\n                    .question-wrapper:last-of-type {\n                        &::after {\n                            height: 1px;\n                        }\n                    }\n\n                    .question-wrapper {\n                        padding: 40px 0px;\n                        position: relative !important;\n                        display: flex;\n                        align-items: center;\n                        justify-content: flex-start;\n                        flex-flow: column nowrap;\n                        overflow: hidden;\n\n                        ${StyleGuide.smaller("l","\n                            padding: 20px 0px;\n                        ")}\n\n                        .question-bg {\n                            position: absolute !important;\n                            top: 0;\n                            left: 0;\n                            height: 100%;\n                            will-change: transform;\n                            width: 100%;\n                            z-index: 0;\n                            transform: scaleY(0);\n                            transform-origin: top;\n                            background-color: ${StyleGuide.colors.royalBlue};\n                            transition: transform 0.6s ${TweenManager._getEase("easeOutCubic")};\n\n                            &::before, &::after {\n                                background-color: ${StyleGuide.colors.white};\n                                transform-origin: right;\n                                height: 1px;\n                                z-index: 99;\n                                transform: scaleY(0);\n                                transition: transform 0.8s ${TweenManager._getEase("easeOutCubic")};\n                                will-change: transform;\n                            }\n                        }\n\n                        &::before, &::after, .question-bg:before, .question-bg:after {\n                            content: "";\n                            position: absolute !important;\n                            display: block;\n                            width: 100%;\n                            will-change: transform;\n                        }\n\n                        &::before, &::after {\n                            background-color: ${StyleGuide.colors.royalBlue};\n                            transform-origin: left;\n                            transition: transform 0.4s ${TweenManager._getEase("easeOutCubic")};\n                            transform: scaleX(0);\n                        }\n\n                        &::before {\n                            top: 0px;\n                            height: 1px;\n                        }\n\n                        &::after {\n                            bottom: 0px;\n                        }\n\n                        &.in {\n                            transform-origin: right;\n                            &::before, &::after {\n                                transition-duration: 2s;\n                                transform: scaleX(1);\n                            }\n                        }\n\n                        &.hover, &.active {\n                            .question-bg {\n                                transform: scaleY(1);\n                                transform-origin: bottom;\n                                &::before, &::after {\n                                    transform: scaleY(1);\n                                }\n                            }\n                            .question {\n                                color: ${StyleGuide.colors.white};\n                            }\n                        }\n                    }\n\n                    .question {\n                        text-align: center;\n                        width: 100%;\n                        position: relative !important;\n                        \n                        ${StyleGuide.fluid("font-size",{mob:15,l:15})}\n                        ${StyleGuide.manropeMedium}\n                        color: ${StyleGuide.colors.royalBlue};\n                        max-width: 60%;\n                        z-index: 1;\n                        transition: color 0.4s ${TweenManager._getEase("easeOutCubic")};\n                        will-change: color;\n                    }\n\n                    .answer {\n                        padding-top: 60px;\n                        ${StyleGuide.smaller("l","\n                            padding-top: 90px;\n                        ")}\n\n                        text-align: center;\n                        ${StyleGuide.manropeRegular}\n                        color: ${StyleGuide.colors.white};\n                        max-width: 60%;\n                        ${StyleGuide.fluid("font-size",{mob:15,l:15})}\n                        z-index: 1;\n                        \n\n                        * {\n                            position: relative!important;\n                        }\n\n                        > div {\n                            > * + * {\n                                margin-top: 20px;\n                            }\n                        }\n\n                        p {\n                            text-align: center;\n                            ${StyleGuide.manropeRegular}\n                            color: inherit;\n                            display: block;\n                            ${StyleGuide.fluid("font-size",{mob:15,l:15})}\n                            line-height: 1.4;\n                        }\n\n                        ul, ol {\n                            text-align: left;\n                        }\n\n                        a,\n                        a:visited,\n                        a:hover {\n                            color: #000;\n                        }\n                    }\n                }\n            }\n        `)
			}(), await _this.initializeScroll(), $this.hide()
	}(), this.animateIn = async function() {
		$this.show(),
			function prepareAnimateIn() {
				$title.split.words.forEach((w => {
					w.transform({
						y: "100%"
					})
				})), _questions.forEach((({
					$question: $question
				}, i) => {
					$question.split.words.forEach((w => {
						w.transform({
							y: "100%"
						})
					}))
				}))
			}(), $title.split.words.forEach(((w, i) => {
				w.tween({
					y: "0%"
				}, 1200, "easeOutQuad", 150 * i + 500)
			})), await _this.wait(200), _questions.forEach((({
				$question: $question,
				$questionWrapper: $questionWrapper
			}, i) => {
				$question.split.words.forEach(((w, j) => {
					w.tween({
						y: "0%"
					}, 600, "easeOutCubic", 75 * j + 300 * i + 300)
				})), _this.delayedCall((() => {
					$questionWrapper.div.classList.add("in")
				}), 250 * i + 400)
			})), _this.delayedCall((async () => {
				_this.resetScroll(), _this.flag("interactive", !0), _this.toggleScrollEnabled(!0)
			}), 1200)
	}, this.animateOut = async function() {
		_this.flag("interactive", !1), _this.flag("animatingOut", !0), _this.toggleScrollEnabled(!1), _questions.forEach((({
			$questionWrapper: $questionWrapper
		}) => {
			$questionWrapper.div.classList.remove("hover"), $questionWrapper.div.classList.remove("active")
		})), await _this.wait(200), null !== _activeQuestion && (collapseActiveQuestion(), _activeQuestion = null), await _this.wait(200);
		let promises = [];
		$title.split.words.forEach(((w, i) => {
			promises.push(w.tween({
				y: "-100%"
			}, 1200, "easeOutCubic").promise())
		})), _questions.forEach((({
			$question: $question,
			$questionWrapper: $questionWrapper
		}, i) => {
			$question.split.words.forEach(((w, j) => {
				promises.push(w.tween({
					y: "-100%"
				}, 300, "easeOutCubic").promise())
			})), $questionWrapper.div.classList.remove("in"), _this.delayedCall((() => {
				$questionWrapper.div.classList.remove("in")
			}), 300)
		})), _this.delayedCall((() => {
			_this.flag("animatingOut", !1), $this.hide()
		}), 600)
	}
}), (_ => {})), Class((function UIPrivacy() {
	Inherit(this, Element), Inherit(this, UIScrollView);
	const _this = this,
		$this = _this.element;
	let _data, $title, $contentWrapper, $mask;
	!async function() {
		_data = AppCMSConfig.data.privacyPolicyBlocks,
			function initHTML() {
				$title = $this.create("title").text("Privacy Policy"), $contentWrapper = $this.create("contentWrapper"), $contentWrapper.html(_data?.[0].html, !0), $mask = $contentWrapper.create("mask"), _this.scrollContainer = $this, SplitText.isFontReady().then((async () => {
					await defer(),
						function splitTitle() {
							$title.split = _this.initClass(SplitText, $title), $title.split.lines.forEach((l => l.css({
								overflow: "hidden"
							}))), $title.split.words.forEach((w => w.transform({
								y: "100%"
							})))
						}(), _this.flag("canSetupScroll", !0)
				}))
			}(),
			function initStyles() {
				$this.goob(`\n            & {\n                position: relative !important;\n                \n\n                display: flex;\n                flex-flow: column nowrap;\n                align-items: center;\n                \n                width: 100%;\n                height: auto;\n\n                .title {\n                    position: relative !important;\n                    ${StyleGuide.fluid("font-size",{mob:40,xl:303})}\n                    color: ${StyleGuide.colors.royalBlue};\n                    ${StyleGuide.manropeMedium}\n                    text-align: center;\n                    line-height: 1.2;\n                    \n                    ${StyleGuide.smaller("l","\n                        margin-top: 30px;\n                        margin-bottom: 30px;\n                    ")}\n                }\n\n                .contentWrapper {\n                    position: relative !important;\n                    width: calc(100% - ${StyleGuide.lateralPadding.xl}px * 2);\n                    color: ${StyleGuide.colors.royalBlue};\n                    opacity: 0;\n                    transform: translateY(100px);\n\n                    .mask{\n                        top: 0;\n                        left: 0;\n                        position: absolute !important;\n                        z-index: 2;\n                        background: white;\n                        width: 100%;\n                        height: 100%;\n                    }\n\n                    a {\n                        color: ${StyleGuide.colors.royalBlue};\n                    }\n\n                    h2 {\n                        ${StyleGuide.fluid("font-size",{mob:20,xl:50})}\n                        ${StyleGuide.fluid("margin-bottom",{mob:15,xl:30})}\n                        color: ${StyleGuide.colors.royalBlue};\n                    }\n\n                    h3 {\n                        ${StyleGuide.fluid("font-size",{mob:15,xl:20})}\n                        ${StyleGuide.fluid("margin-bottom",{mob:10,xl:20})}\n                        color: ${StyleGuide.colors.royalBlue};\n                    }\n\n                    ul {\n                        margin-left: ${StyleGuide.lateralPadding.xl}px;\n                    }\n\n                    p {\n                        ${StyleGuide.fluid("margin-bottom",{mob:8,xl:12})}\n                    }\n\n                    p, li {\n                        ${StyleGuide.fluid("font-size",{mob:14,xl:16})}\n                        color: ${StyleGuide.colors.royalBlue};\n                    }\n\n                    * {\n                        position: relative !important;\n                    }\n\n                    \n                }\n            }\n        `)
			}(), await _this.initializeScroll(), $this.hide()
	}(), this.animateIn = async function() {
		$this.show(),
			function prepareAnimateIn() {
				$title.split.words.forEach((w => {
					w.transform({
						y: "100%"
					})
				}))
			}(), $title.split.words.forEach(((w, i) => {
				w.tween({
					y: "0%"
				}, 1200, "easeOutQuad", 150 * i + 500)
			})), await _this.wait(1200), $contentWrapper.tween({
				y: 0,
				opacity: 1
			}, 1200, "easeOutQuad"), $mask.tween({
				y: "100%"
			}, 1200, "easeOutQuad"), _this.delayedCall((async () => {
				_this.resetScroll(), _this.flag("interactive", !0), _this.toggleScrollEnabled(!0)
			}), 1200)
	}, this.animateOut = async function() {
		_this.flag("interactive", !1), _this.flag("animatingOut", !0), _this.toggleScrollEnabled(!1), await _this.wait(200);
		let promises = [];
		$title.split.words.forEach(((w, i) => {
			promises.push(w.tween({
				y: "-100%"
			}, 1200, "easeOutCubic").promise())
		})), await _this.wait(200), $contentWrapper.tween({
			y: -100,
			opacity: 0
		}, 1200, "easeOutQuad"), $mask.tween({
			y: "0%"
		}, 1200, "easeOutQuad"), _this.delayedCall((() => {
			_this.flag("animatingOut", !1), $this.hide(), _this.delayedCall((() => {
				$contentWrapper.transform({
					y: 100
				})
			}), 650)
		}), 600)
	}
}), (_ => {})), Class((function UIStore() {
	Inherit(this, Component), Inherit(this, AppStore);
	const _this = this;
	!async function() {
		await Hydra.ready(), _this.createAppStore({
			state: {
				view: "landing",
				themeColor: "white",
				tutorialVisible: !1,
				hasEnteredExperience: !1,
				doShowFAQButton: !1,
				modal: null,
				shouldMuteFromUserSettings: !1
			},
			mutations: {
				setView(state, payload) {
					state.view = payload
				},
				setThemeColor(state, payload) {
					state.themeColor = payload
				},
				setModal(state, payload) {
					state.modal = payload
				},
				setTutorialVisbility(state, payload) {
					state.tutorialVisible = payload, state.hasEnteredExperience && !payload ? state.doShowFAQButton = !0 : state.doShowFAQButton = !1
				},
				setHasEnteredExperience(state, payload) {
					state.hasEnteredExperience = payload, payload && !state.tutorialVisible && (state.doShowFAQButton = !0)
				},
				setShouldMuteFromUserSettings(state, payload) {
					state.shouldMuteFromUserSettings = payload
				}
			},
			actions: {
				tutorialVisibilityChange({
					commit: commit
				}, payload) {
					commit("setTutorialVisbility", payload)
				},
				hasEnteredExperience({
					commit: commit
				}, payload) {
					commit("setHasEnteredExperience", payload)
				}
			}
		})
	}()
}), "static"), Class((function VFX(_nuke = World.NUKE, _name = "global") {
	Inherit(this, Component);
	const _this = this;
	var _composite;
	Tests.useVFX() && (function init() {
		const worldPos = new FXLayer(_nuke, Tests.VFX_FLOAT_MRT() ? Texture.FLOAT : Texture.UNSIGNED_BYTE);
		worldPos.rt.texture.minFilter = Texture.NEAREST, worldPos.rt.texture.magFilter = Texture.NEAREST, worldPos.name = "WorldPos";
		const persist = new FXLayer(_nuke);
		persist.name = "Persist";
		const uidepth = new FXLayer(_nuke);
		uidepth.name = "UIDepth";
		let bloom = _this.initClass(FX.UnrealBloom, _nuke, {
				enabled: Tests.renderBloom(),
				nMips: 3
			}, _name),
			atmosphere = _this.initClass(FX.VolumetricAtmosphere, _nuke, {
				enabled: Tests.renderBloom() && !Utils.query("orbit")
			}, _name);
		_composite = _this.initClass(NukePass, "VFX", Utils.mergeObject({
			tWorldPos: {
				value: worldPos
			},
			tPersist: {
				value: persist
			},
			tInside: {
				value: InsideScene.instance().rt
			},
			uNoise: {
				value: 1
			},
			uBloomContrast: {
				value: new Vector2(1, 1)
			},
			tBokehTexture: {
				value: Utils3D.getRepeatTexture("assets/images/vfx/bokeh.jpg"),
				ignoreUIL: !0
			},
			uBokeh: {
				value: 0
			},
			uRGBStrength: {
				value: 1
			},
			tAtmosphere: {
				value: atmosphere
			},
			uBlendAtmos: {
				value: new Vector2(.3, .5)
			},
			uBlendAtmosMix: {
				value: 1
			},
			tDepth: atmosphere.depth,
			uFogColor: {
				value: new Color("#888888")
			},
			uFogApply: {
				value: new Vector3(.9, 1, 0)
			},
			uTeleporting: TeleportQuad.TELEPORTING
		}, bloom.uniforms)), Global.UI_DEPTH = null, Tests.uiRetina() && (Global.UI_DEPTH = _this.initClass(SnapshotFrame, uidepth)), Global.VFX_SHADER = _composite, _nuke.add(_composite), ShaderUIL.add(_composite).setLabel(`${_name}_VFX`)
	}(), _this.ready = !0)
})), Class((function ControllerShader(_mesh, _shader, _group, _input) {
	Inherit(this, Component);
	_shader.addUniforms({
		tMap: {
			value: null
		},
		uColor: {
			value: new Color
		},
		uGradient: {
			value: new Vector2(0, 1)
		},
		uAlphaCutoff: {
			value: 0
		},
		transparent: !0
	}), _mesh.renderOrder = RenderOrder.VR_CONTROLLER
})), Class((function VRController() {
	Inherit(this, Object3D);
	const _this = this;
	!async function() {
		!async function initScene() {
			_this.layout = _this.initClass(SceneLayout, "VRController", {
				baseRenderOrder: 9999
			})
		}()
	}()
})), Class((function Main() {
	Inherit(this, DreamWorld);
	const _this = this;
	this.init = async function($obj) {
		let env = await _this.createGroupEnvironment(DefaultOptimizedAvatar, TestEnvironment);
		return await PortalUtil.ready(), env.activate()
	}, this.onRouteChange = function(route, split) {}, this.onDestroy = function() {}
}));
window._MINIFIED_=true;
window._BUILT_=true;