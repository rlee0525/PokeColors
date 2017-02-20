const ALL_POKEMON = [
  "bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard",
  "squirtle", "wartortle", "blastoise", "caterpie", "metapod", "butterfree",
  "weedle", "kakuna", "beedrill", "pidgey", "pidgeotto", "pidgeot", "rattata",
  "raticate", "spearow", "fearow", "ekans", "arbok", "pikachu", "raichu",
  "sandshrew", "sandslash", "nidoran♀", "nidorina", "nidoqueen", "nidoran♂",
  "nidorino", "nidoking", "clefairy", "clefable", "vulpix", "ninetales",
  "jigglypuff", "wigglytuff", "zubat", "golbat", "oddish", "gloom", "vileplume",
  "paras", "parasect", "venonat", "venomoth", "diglett", "dugtrio", "meowth",
  "persian", "psyduck", "golduck", "mankey", "primeape", "growlithe",
  "arcanine", "poliwag", "poliwhirl", "poliwrath", "abra", "kadabra",
  "alakazam", "machop", "machoke", "machamp", "bellsprout", "weepinbell",
  "victreebel", "tentacool", "tentacruel", "geodude", "graveler", "golem",
  "ponyta", "rapidash", "slowpoke", "slowbro", "magnemite", "magneton",
  "farfetchd", "doduo", "dodrio", "seel", "dewgong", "grimer", "muk",
  "shellder", "cloyster", "gastly", "haunter", "gengar", "onix", "drowzee",
  "hypno", "krabby", "kingler", "voltorb", "electrode", "exeggcute",
  "exeggutor", "cubone", "marowak", "hitmonlee", "hitmonchan", "lickitung",
  "koffing", "weezing", "rhyhorn", "rhydon", "chansey", "tangela", "kangaskhan",
  "horsea", "seadra", "goldeen", "seaking", "staryu", "starmie", "mr. mime",
  "scyther", "jynx", "electabuzz", "magmar", "pinsir", "tauros", "magikarp",
  "gyarados", "lapras", "ditto", "eevee", "vaporeon", "jolteon", "flareon",
  "porygon", "omanyte", "omastar", "kabuto", "kabutops", "aerodactyl",
  "snorlax", "articuno", "zapdos", "moltres", "dratini", "dragonair",
  "dragonite", "mewtwo", "mew"
];

const POKEMON_LINKS = [
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456884/1_km4fsa.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456884/2_zphrrr.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456884/3_imh8fc.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456885/4_qq1csg.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456885/5_hyz7zc.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456885/6_lm0gq2.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456886/7_fovot7.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456886/8_efotgm.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456886/9_tjlfye.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456886/10_z3rdh4.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456886/11_yu01vq.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456886/12_eyov5b.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456887/13_k0iilq.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456888/14_kcspon.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456888/15_svgfbp.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456888/16_tmf1mi.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456888/17_adiipk.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456888/18_jxwuqk.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456889/19_kvpupk.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456889/20_gacavk.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456889/21_ucr634.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456890/22_kpq3j5.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456890/23_bqot0n.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456891/24_mnmypy.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456891/25_cu3f6e.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456891/26_kr4fvs.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456892/27_yyvxea.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456892/28_uhpqfb.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456892/29_u7i7nu.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456892/30_r10lz5.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456893/31_jwqxkr.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456893/32_sv62nx.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456893/33_uknuuu.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456893/34_vdat5i.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456894/35_wybvl9.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456895/36_qr8awx.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456895/37_z2odng.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456895/38_cjvaqr.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456895/39_mwcjwv.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456896/40_upeg9m.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456896/41_dqe2cb.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456896/42_cr5oyq.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456896/43_c7iop1.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456896/44_yohwwd.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456896/44_yohwwd.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456898/46_tttdil.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456897/47_tdu68y.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456898/48_ofmb5y.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456898/49_fegmmp.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456898/50_ulbpmz.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456898/51_ikvdcg.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456899/52_ux41qu.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456899/53_mc9pxq.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456900/54_f21jml.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456901/55_d84l16.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456901/56_v7os7e.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456903/57_a9pbbj.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456903/58_njrf3r.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456905/59_kawcmo.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456905/60_w7bzof.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456906/61_iuwojv.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456906/62_ytujdx.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456908/63_txiyl7.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456908/64_sw5lqe.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456910/65_elbktr.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456910/66_wvfeu6.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456911/67_pz9ehh.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456911/68_yvw0u5.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456912/69_hcmnkv.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456912/70_miodal.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456912/71_hxyjyv.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456913/72_o5efaj.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456913/73_nqropf.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456914/74_kvskm7.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456914/75_jodnih.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456914/76_mjdw8n.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456914/77_knrv9s.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456915/78_rnewqa.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456915/79_ywly4j.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456916/80_gzhmri.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456916/81_ftf3lk.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456916/82_taao6s.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456916/83_cpos0a.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456917/84_lyvtod.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456917/85_kreufl.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456918/86_qb10as.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456917/87_uougus.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456918/88_uojtfw.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456918/89_gr2hvl.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456918/90_j6v2ev.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456919/91_wun46c.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456919/92_ju4j7v.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456919/93_s1zfsk.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456919/94_fybsgk.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456920/95_mb6s8v.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456920/96_xhejfb.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456921/97_cozkqh.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456921/98_enumck.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456921/99_xnfplu.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456921/100_nsncxk.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456922/101_mmkaqz.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456922/102_ma3jgw.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456923/103_yvb8pf.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456923/104_nkyfim.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456923/105_to5hsh.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456923/106_dwm8kr.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456923/107_wpvhc0.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456924/108_uq1d7p.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456924/109_guei4a.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456925/110_mwqxzg.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456925/111_lzvyxq.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456925/112_x32y87.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456925/113_ezzbtu.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456925/114_h8hv8h.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456926/115_xnlots.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456926/116_vqips2.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456926/117_uxgj3v.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456927/118_xboqdq.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456927/119_myhdh1.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456927/120_abt2qn.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456928/121_ctfgjr.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456928/122_l2bgsm.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456928/123_zxhokt.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456928/124_wo9mlb.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456929/125_h3v64l.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456929/126_n596pz.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456930/127_lurcwm.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456930/128_lzc7hg.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456930/129_br2hfy.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456930/130_bw3ndx.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456931/131_eqisco.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456931/132_djyfju.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456931/133_tuwxn4.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456932/134_phcy26.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456933/135_rwhkru.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456932/136_uqa3p0.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456932/137_udeimm.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456933/138_pvisqz.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456934/139_am5fkb.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456934/140_dlhckm.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456934/141_dlflt6.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456935/142_yqld6j.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456935/143_gq2jlv.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456935/144_q9npmr.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456936/145_ds23ig.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456937/146_w6ewmo.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456937/147_iovn6e.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456937/148_nde8e5.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456938/149_tn9lid.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456938/150_xrijpt.svg",
  "http://res.cloudinary.com/rlee0525/image/upload/v1487456938/151_usbjlq.svg"
];

class Pokemon {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.currentPokemon = 121;
    this.colors = {};
    this.totalPokemon = 150;
    this.image = null;
    this.pokemonData = {};
  }

  grabData() {
    let that = this;
    $.getJSON('./lib/pokemon_data.json', function(data) {
      that.pokemonData = data;
      that.loadPokemon();
    });
  }

  loadPokemon() {
    let that = this;

    that.ctx.clearRect(0, 0, that.canvas.width, that.canvas.height);

    that.img = new Image();
    that.img.crossOrigin = 'anonymous';
  	that.img.src = POKEMON_LINKS[that.currentPokemon];

  	that.img.onload = function() {
  		that.ctx.drawImage(
        that.img, that.canvas.width / 2, that.canvas.height / 3
      );
    };

    that.createBars();
  }

  createBars() {
    let colorsList = this.pokemonData[this.currentPokemon].colors;
    let canvas = this.canvas;
    let ctx = this.ctx;
    let totalColor = [];
    let colorsPercentage = [];

    colorsList.forEach(data => totalColor.push(data.count));
    totalColor = totalColor.reduce((acc, val) => acc + val);

    colorsList.forEach(data => {
      let color = data.color;
      let percentage = data.count / totalColor;
      colorsPercentage.push({
        color,
        percentage
      });
    });

    ctx.fillStyle=`${colorsPercentage[0].color}`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (var i = 1; i < 10; i++) {
      ctx.beginPath();
      ctx.lineWidth=`${this.canvas.height / 150}`;
      ctx.strokeStyle="black";
      ctx.rect(0,
        `${(this.canvas.height / 9.4 + this.canvas.height / 300) * (i - 1)}`,
        `${colorsPercentage[i].percentage * 3000}`, this.canvas.height / 9.4);
      ctx.stroke();

      ctx.fillStyle=`${colorsPercentage[i].color}`;
      ctx.lineWidth="5";
      ctx.strokeStyle="blue";
      ctx.fillRect(0,
        `${(this.canvas.height / 9.4 + this.canvas.height / 300) * (i - 1)}`,
        `${colorsPercentage[i].percentage * 3000}`, this.canvas.height / 9.4);

      ctx.font="23px pokemon";
      ctx.lineWidth = 3;
      ctx.strokeStyle = 'black';
      ctx.strokeText(`${colorsPercentage[i].color}`,
        `${colorsPercentage[i].percentage * 3000 + 10}`,
        `${(this.canvas.height / 9.4 + this.canvas.height / 300) * (i - 1) +
            this.canvas.height / 16}`);
      ctx.fillText(`${colorsPercentage[i].color}`,
        `${colorsPercentage[i].percentage * 3000 + 10}`,
        `${(this.canvas.height / 9.4 + this.canvas.height / 300) * (i - 1) +
            this.canvas.height / 16}`);
    }

    let primaryColor = colorsPercentage[0].color;
    let pokemonName = ALL_POKEMON[this.currentPokemon];

    ctx.font="23px pokemon";
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'black';
    ctx.strokeText(`${pokemonName} #${this.currentPokemon + 1}`,
                    canvas.width - 350, 110);
    ctx.fillStyle = `${primaryColor}`;
    ctx.fillText(`${pokemonName} #${this.currentPokemon + 1}`,
                    canvas.width - 350, 110);

    ctx.font="23px pokemon";
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'black';
    ctx.strokeText(`${primaryColor}`, canvas.width - 180, canvas.height - 40);
    ctx.fillStyle = `${primaryColor}`;
    ctx.fillText(`${primaryColor}`, canvas.width - 180, canvas.height - 40);
  }

  generatePokemon() {
    this.colors = {};
    let that = this;

    that.ctx.clearRect(0, 0, that.canvas.width, that.canvas.height);

  	that.img = new Image();
    that.img.crossOrigin = 'anonymous';
  	that.img.src = POKEMON_LINKS[that.currentPokemon];

  	that.img.onload = function() {
  		that.ctx.drawImage(
        that.img, that.canvas.width / 2, that.canvas.height / 3
      );
  		that.getImageData();
  		if (that.currentPokemon < that.totalPokemon) {
        that.currentPokemon++;
  			that.generatePokemon();
  		} else {
        console.log(JSON.stringify(that.pokemonData));
      }
  	};
  }

  getImageData() {
  	let imgData = this.ctx.getImageData(
      this.canvas.width / 2, this.canvas.height / 3,
      this.img.width, this.img.height
    ).data;

    for (var i = 0; i < imgData.length - 3; i+=4) {
      let r = imgData[i];
      let g = imgData[i + 1];
      let b = imgData[i + 2];

      let imgColor = this.colorHash({
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

    Object.keys(this.colors).forEach(color => {
      this.sorted_colors.push({
        color: color,
        count: this.colors[color]
      });
    });

    this.sorted_colors.sort((a, b) => b.count - a.count);
    this.major_colors = [];

    for (var j = 0; j < 10; j++) {
      this.major_colors.push(this.sorted_colors[j]);
    }

    this.pokemonData[this.currentPokemon] = {
      name: ALL_POKEMON[this.currentPokemon],
      colors: this.major_colors
    };
  }

  colorHash(color) {
  	let r = color.red.toString(16);
  	let g = color.green.toString(16);
  	let b = color.blue.toString(16);
  	let result = '';

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
}

module.exports = Pokemon;
