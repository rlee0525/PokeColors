/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Pokemon = __webpack_require__(1);
	
	document.addEventListener('DOMContentLoaded', function () {
	  var resizeCanvas = function resizeCanvas() {
	    var canvas = document.getElementById('pokemon');
	    var ctx = canvas.getContext('2d');
	    canvas.width = window.innerWidth;
	    canvas.height = window.innerHeight - 50;
	
	    var pokemon = new Pokemon(canvas, ctx);
	
	    pokemon.grabData();
	    $('#search-box-input').keydown(function (e) {
	      if (e.keyCode === 13) {
	        e.preventDefault();
	        pokemon.searchPokemon();
	      }
	    });
	
	    $('#random-pokemon').click(function (e) {
	      return pokemon.randomPokemon();
	    });
	
	    var modal = document.getElementById('myModal');
	    var span = document.getElementsByClassName("close")[0];
	
	    $('#instruction').click(function (e) {
	      modal.style.display = "block";
	    });
	
	    span.onclick = function () {
	      modal.style.display = "none";
	    };
	
	    window.onclick = function (e) {
	      if (e.target === modal) {
	        modal.style.display = "none";
	      }
	    };
	  };
	
	  window.addEventListener('resize', resizeCanvas, false);
	  resizeCanvas();
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ALL_POKEMON = ["bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard", "squirtle", "wartortle", "blastoise", "caterpie", "metapod", "butterfree", "weedle", "kakuna", "beedrill", "pidgey", "pidgeotto", "pidgeot", "rattata", "raticate", "spearow", "fearow", "ekans", "arbok", "pikachu", "raichu", "sandshrew", "sandslash", "nidoran♀", "nidorina", "nidoqueen", "nidoran♂", "nidorino", "nidoking", "clefairy", "clefable", "vulpix", "ninetales", "jigglypuff", "wigglytuff", "zubat", "golbat", "oddish", "gloom", "vileplume", "paras", "parasect", "venonat", "venomoth", "diglett", "dugtrio", "meowth", "persian", "psyduck", "golduck", "mankey", "primeape", "growlithe", "arcanine", "poliwag", "poliwhirl", "poliwrath", "abra", "kadabra", "alakazam", "machop", "machoke", "machamp", "bellsprout", "weepinbell", "victreebel", "tentacool", "tentacruel", "geodude", "graveler", "golem", "ponyta", "rapidash", "slowpoke", "slowbro", "magnemite", "magneton", "farfetchd", "doduo", "dodrio", "seel", "dewgong", "grimer", "muk", "shellder", "cloyster", "gastly", "haunter", "gengar", "onix", "drowzee", "hypno", "krabby", "kingler", "voltorb", "electrode", "exeggcute", "exeggutor", "cubone", "marowak", "hitmonlee", "hitmonchan", "lickitung", "koffing", "weezing", "rhyhorn", "rhydon", "chansey", "tangela", "kangaskhan", "horsea", "seadra", "goldeen", "seaking", "staryu", "starmie", "mr. mime", "scyther", "jynx", "electabuzz", "magmar", "pinsir", "tauros", "magikarp", "gyarados", "lapras", "ditto", "eevee", "vaporeon", "jolteon", "flareon", "porygon", "omanyte", "omastar", "kabuto", "kabutops", "aerodactyl", "snorlax", "articuno", "zapdos", "moltres", "dratini", "dragonair", "dragonite", "mewtwo", "mew"];
	
	var POKEMON_LINKS = ["http://res.cloudinary.com/rlee0525/image/upload/v1487456884/1_km4fsa.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456884/2_zphrrr.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456884/3_imh8fc.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456885/4_qq1csg.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456885/5_hyz7zc.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456885/6_lm0gq2.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456886/7_fovot7.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456886/8_efotgm.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456886/9_tjlfye.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456886/10_z3rdh4.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456886/11_yu01vq.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456886/12_eyov5b.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456887/13_k0iilq.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456888/14_kcspon.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456888/15_svgfbp.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456888/16_tmf1mi.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456888/17_adiipk.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456888/18_jxwuqk.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456889/19_kvpupk.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456889/20_gacavk.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456889/21_ucr634.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456890/22_kpq3j5.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456890/23_bqot0n.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456891/24_mnmypy.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456891/25_cu3f6e.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456891/26_kr4fvs.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456892/27_yyvxea.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456892/28_uhpqfb.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456892/29_u7i7nu.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456892/30_r10lz5.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456893/31_jwqxkr.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456893/32_sv62nx.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456893/33_uknuuu.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456893/34_vdat5i.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456894/35_wybvl9.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456895/36_qr8awx.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456895/37_z2odng.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456895/38_cjvaqr.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456895/39_mwcjwv.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456896/40_upeg9m.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456896/41_dqe2cb.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456896/42_cr5oyq.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456896/43_c7iop1.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456896/44_yohwwd.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456897/45_vz1bca.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456898/46_tttdil.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456897/47_tdu68y.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456898/48_ofmb5y.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456898/49_fegmmp.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456898/50_ulbpmz.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456898/51_ikvdcg.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456899/52_ux41qu.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456899/53_mc9pxq.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456900/54_f21jml.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456901/55_d84l16.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456901/56_v7os7e.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456903/57_a9pbbj.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456903/58_njrf3r.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456905/59_kawcmo.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456905/60_w7bzof.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456906/61_iuwojv.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456906/62_ytujdx.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456908/63_txiyl7.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456908/64_sw5lqe.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456910/65_elbktr.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456910/66_wvfeu6.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456911/67_pz9ehh.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456911/68_yvw0u5.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456912/69_hcmnkv.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456912/70_miodal.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456912/71_hxyjyv.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456913/72_o5efaj.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456913/73_nqropf.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456914/74_kvskm7.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456914/75_jodnih.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456914/76_mjdw8n.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456914/77_knrv9s.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456915/78_rnewqa.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456915/79_ywly4j.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456916/80_gzhmri.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456916/81_ftf3lk.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456916/82_taao6s.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456916/83_cpos0a.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456917/84_lyvtod.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456917/85_kreufl.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456918/86_qb10as.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456917/87_uougus.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456918/88_uojtfw.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456918/89_gr2hvl.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456918/90_j6v2ev.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456919/91_wun46c.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456919/92_ju4j7v.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456919/93_s1zfsk.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456919/94_fybsgk.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456920/95_mb6s8v.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456920/96_xhejfb.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456921/97_cozkqh.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456921/98_enumck.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456921/99_xnfplu.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456921/100_nsncxk.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456922/101_mmkaqz.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456922/102_ma3jgw.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456923/103_yvb8pf.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456923/104_nkyfim.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456923/105_to5hsh.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456923/106_dwm8kr.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456923/107_wpvhc0.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456924/108_uq1d7p.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456924/109_guei4a.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456925/110_mwqxzg.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456925/111_lzvyxq.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456925/112_x32y87.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456925/113_ezzbtu.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456925/114_h8hv8h.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456926/115_xnlots.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456926/116_vqips2.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456926/117_uxgj3v.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456927/118_xboqdq.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456927/119_myhdh1.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456927/120_abt2qn.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456928/121_ctfgjr.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456928/122_l2bgsm.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456928/123_zxhokt.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456928/124_wo9mlb.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456929/125_h3v64l.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456929/126_n596pz.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456930/127_lurcwm.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456930/128_lzc7hg.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456930/129_br2hfy.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456930/130_bw3ndx.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456931/131_eqisco.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456931/132_djyfju.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456931/133_tuwxn4.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456932/134_phcy26.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456933/135_rwhkru.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456932/136_uqa3p0.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456932/137_udeimm.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456933/138_pvisqz.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456934/139_am5fkb.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456934/140_dlhckm.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456934/141_dlflt6.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456935/142_yqld6j.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456935/143_gq2jlv.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456935/144_q9npmr.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456936/145_ds23ig.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456937/146_w6ewmo.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456937/147_iovn6e.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456937/148_nde8e5.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456938/149_tn9lid.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456938/150_xrijpt.svg", "http://res.cloudinary.com/rlee0525/image/upload/v1487456938/151_usbjlq.svg"];
	
	var Pokemon = function () {
	  function Pokemon(canvas, ctx) {
	    _classCallCheck(this, Pokemon);
	
	    this.canvas = canvas;
	    this.ctx = ctx;
	    this.currentPokemon = 129;
	    this.colors = {};
	    this.totalPokemon = 150;
	    this.image = null;
	    this.pokemonData = {};
	  }
	
	  _createClass(Pokemon, [{
	    key: "grabData",
	    value: function grabData() {
	      var that = this;
	      $.getJSON('./lib/pokemon_data.json', function (data) {
	        that.pokemonData = data;
	        that.loadPokemon();
	      });
	    }
	  }, {
	    key: "loadPokemon",
	    value: function loadPokemon() {
	      var that = this;
	
	      that.ctx.clearRect(0, 0, that.canvas.width, that.canvas.height);
	
	      that.img = new Image();
	      that.img.crossOrigin = 'anonymous';
	      that.img.src = POKEMON_LINKS[that.currentPokemon];
	
	      that.img.onload = function () {
	        var originalWToH = this.width / this.height;
	        this.height = that.canvas.height / 2.2;
	        this.width = this.height * originalWToH;
	
	        that.ctx.drawImage(that.img, that.canvas.width / 2.5, that.canvas.height / 3.5, this.width, this.height);
	      };
	
	      that.createBars();
	    }
	  }, {
	    key: "createBars",
	    value: function createBars() {
	      var colorsList = this.pokemonData[this.currentPokemon].colors;
	      var canvas = this.canvas;
	      var ctx = this.ctx;
	      var totalColor = [];
	      var colorsPercentage = [];
	
	      colorsList.forEach(function (data) {
	        return totalColor.push(data.count);
	      });
	      totalColor = totalColor.reduce(function (acc, val) {
	        return acc + val;
	      });
	
	      colorsList.forEach(function (data) {
	        var color = data.color;
	        var percentage = data.count / totalColor;
	        colorsPercentage.push({
	          color: color,
	          percentage: percentage
	        });
	      });
	
	      ctx.fillStyle = "" + colorsPercentage[0].color;
	      ctx.fillRect(0, 0, canvas.width, canvas.height);
	      $("h1").remove();
	      $("h2").remove();
	      $("h3").remove();
	
	      for (var i = 1; i < 10; i++) {
	        var barWidth = colorsPercentage[i].percentage * 2800;
	        if (barWidth > 700) {
	          barWidth = 650;
	        }
	
	        ctx.beginPath();
	        ctx.lineWidth = "" + this.canvas.height / 150;
	        ctx.strokeStyle = "black";
	        ctx.rect(0, "" + (this.canvas.height / 9.4 + this.canvas.height / 300) * (i - 1), "" + barWidth, this.canvas.height / 9.4);
	        ctx.stroke();
	
	        ctx.fillStyle = "" + colorsPercentage[i].color;
	        ctx.lineWidth = "5";
	        ctx.strokeStyle = "blue";
	        ctx.fillRect(0, "" + (this.canvas.height / 9.4 + this.canvas.height / 300) * (i - 1), "" + barWidth, this.canvas.height / 9.4);
	
	        var _colorCode = document.getElementById('color-codes');
	        var _h = document.createElement('H1');
	        var _t = document.createTextNode("" + colorsPercentage[i].color);
	        _h.style.color = "" + colorsPercentage[i].color;
	        _h.style.left = barWidth + 10 + "px";
	        _h.style.top = (this.canvas.height / 9.4 + this.canvas.height / 300) * (i - 1) + this.canvas.height / 16 + 25 + "px";
	        _colorCode.append(_h);
	        _h.appendChild(_t);
	      }
	
	      var primaryColor = colorsPercentage[0].color;
	      var pokemonName = ALL_POKEMON[this.currentPokemon];
	
	      ctx.font = "23px pokemon";
	      ctx.lineWidth = 5;
	      ctx.strokeStyle = 'black';
	      ctx.strokeText(pokemonName + " #" + (this.currentPokemon + 1), canvas.width - 360, 115);
	      ctx.fillStyle = "" + primaryColor;
	      ctx.fillText(pokemonName + " #" + (this.currentPokemon + 1), canvas.width - 360, 115);
	
	      ctx.font = "23px pokemon";
	      ctx.lineWidth = 5;
	      ctx.strokeStyle = 'black';
	      ctx.strokeText("" + primaryColor, canvas.width - 180, canvas.height - 40);
	      ctx.fillStyle = "" + primaryColor;
	      ctx.fillText("" + primaryColor, canvas.width - 180, canvas.height - 40);
	
	      var colorCode = document.getElementById('color-codes');
	      var h = document.createElement('H2');
	      var t = document.createTextNode("" + primaryColor);
	      h.style.color = "" + primaryColor;
	      h.style.left = canvas.width - 180 + "px";
	      h.style.top = canvas.height - 20 + "px";
	      colorCode.append(h);
	      h.appendChild(t);
	
	      var instruction = document.getElementById('instruction');
	      var h3 = document.createElement('H3');
	      var t3 = document.createTextNode("HELP!");
	      instruction.style.left = canvas.width / 2 - 50 + "px";
	      instruction.style.top = canvas.height - 20 + "px";
	      instruction.append(h3);
	      h3.appendChild(t3);
	
	      document.getElementById('search-box-input').style.borderColor = "" + colorsPercentage[1].color;
	      document.getElementById('search-box-input').style.color = "" + colorsPercentage[0].color;
	      document.getElementById('pikapika').style.width = canvas.width / 3.5 + "px";
	      document.getElementById('random-pokemon').style.backgroundColor = "" + colorsPercentage[1].color;
	    }
	  }, {
	    key: "searchPokemon",
	    value: function searchPokemon() {
	      var pokeNum = $('#search-box-input').val().toLowerCase();
	      if (pokeNum !== undefined && pokeNum >= 1 && pokeNum <= 151) {
	        this.currentPokemon = pokeNum - 1;
	        this.loadPokemon();
	      } else if (ALL_POKEMON.includes(pokeNum)) {
	        this.currentPokemon = ALL_POKEMON.indexOf(pokeNum);
	        this.loadPokemon();
	      }
	    }
	  }, {
	    key: "randomPokemon",
	    value: function randomPokemon() {
	      var pokeNum = Math.floor(Math.random() * 151);
	      this.currentPokemon = pokeNum;
	      this.loadPokemon();
	    }
	  }, {
	    key: "generatePokemon",
	    value: function generatePokemon() {
	      this.colors = {};
	      var that = this;
	
	      that.ctx.clearRect(0, 0, that.canvas.width, that.canvas.height);
	
	      that.img = new Image();
	      that.img.crossOrigin = 'anonymous';
	      that.img.src = POKEMON_LINKS[that.currentPokemon];
	
	      that.img.onload = function () {
	        that.ctx.drawImage(that.img, that.canvas.width / 2, that.canvas.height / 3);
	        that.getImageData();
	        if (that.currentPokemon < that.totalPokemon) {
	          that.currentPokemon++;
	          that.generatePokemon();
	        } else {
	          console.log(JSON.stringify(that.pokemonData));
	        }
	      };
	    }
	  }, {
	    key: "getImageData",
	    value: function getImageData() {
	      var _this = this;
	
	      var imgData = this.ctx.getImageData(this.canvas.width / 2, this.canvas.height / 3, this.img.width, this.img.height).data;
	
	      for (var i = 0; i < imgData.length - 3; i += 4) {
	        var r = imgData[i];
	        var g = imgData[i + 1];
	        var b = imgData[i + 2];
	
	        var imgColor = this.colorHash({
	          red: r,
	          green: g,
	          blue: b
	        });
	
	        if (imgColor in this.colors) {
	          this.colors[imgColor] += 1;
	        } else {
	          this.colors[imgColor] = 1;
	        }
	      }
	
	      this.sorted_colors = [];
	      delete this.colors['#000000'];
	      delete this.colors['#ffffff'];
	      delete this.colors['#0d131a'];
	
	      Object.keys(this.colors).forEach(function (color) {
	        _this.sorted_colors.push({
	          color: color,
	          count: _this.colors[color]
	        });
	      });
	
	      this.sorted_colors.sort(function (a, b) {
	        return b.count - a.count;
	      });
	      this.major_colors = [];
	
	      for (var j = 0; j < 10; j++) {
	        this.major_colors.push(this.sorted_colors[j]);
	      }
	
	      this.pokemonData[this.currentPokemon] = {
	        name: ALL_POKEMON[this.currentPokemon],
	        colors: this.major_colors
	      };
	    }
	  }, {
	    key: "colorHash",
	    value: function colorHash(color) {
	      var r = color.red.toString(16);
	      var g = color.green.toString(16);
	      var b = color.blue.toString(16);
	      var result = '';
	
	      if (r.length === 1) {
	        r = '0' + r;
	      }
	      if (g.length === 1) {
	        g = '0' + g;
	      }
	      if (b.length === 1) {
	        b = '0' + b;
	      }
	
	      return '#' + r + g + b;
	    }
	  }]);
	
	  return Pokemon;
	}();
	
	module.exports = Pokemon;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map