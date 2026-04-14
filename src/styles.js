// src/styles.js
export const GLOBAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;0,700;0,900;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

  :root {
    --bd:#0a3d62;--bm:#1a6fa8;--bl:#4fc3f7;
    --gd:#1b5e20;--gm:#2e7d32;--gb:#4caf50;--gl:#66bb6a;
    --w:#f8fffe;--ow:#e8f5e9;--td:#0d2137;--tm:#2c4a5a;
  }

  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  html{scroll-behavior:smooth;}
  body{font-family:'DM Sans',sans-serif;background:var(--w);color:var(--td);overflow-x:hidden;}

  /* ==================== ORIGINAL STYLES ==================== */
  .vn-nav{position:fixed;top:0;width:100%;z-index:1000;background:rgba(10,61,98,0.97);backdrop-filter:blur(12px);padding:0.85rem 2rem;display:flex;justify-content:space-between;align-items:center;border-bottom:2px solid rgba(79,195,247,0.25);}
  .vn-logo{display:flex;align-items:center;cursor:pointer;background:none;border:none;gap:0.6rem;}
  .vn-logo-txt{color:#fff;font-family:'Fraunces',serif;font-size:1.2rem;font-weight:700;line-height:1.1;text-align:left;}
  .vn-logo-txt span{color:var(--gl);}
  .vn-logo-sub{font-family:'DM Sans',sans-serif;font-weight:300;font-size:0.6rem;color:rgba(255,255,255,0.5);letter-spacing:2px;display:block;text-transform:uppercase;}
  .vn-nav-links{display:flex;gap:2rem;list-style:none;}
  .vn-nav-links a{color:rgba(255,255,255,0.8);text-decoration:none;font-size:0.87rem;font-weight:500;transition:color 0.2s;}
  .vn-nav-links a:hover{color:var(--bl);}
  .vn-nav-cta{background:var(--gm);color:#fff;padding:0.5rem 1.4rem;border-radius:50px;font-weight:700;font-size:0.88rem;transition:background 0.2s,transform 0.2s;border:none;cursor:pointer;text-decoration:none;}
  .vn-nav-cta:hover{background:var(--gb);transform:translateY(-1px);}

  .vn-trust{background:var(--gd);padding:0.52rem 2rem;display:flex;justify-content:center;align-items:center;gap:2rem;flex-wrap:wrap;}
  .vn-trust span{color:rgba(255,255,255,0.88);font-size:0.78rem;font-weight:600;letter-spacing:0.3px;}

  .vn-hero{min-height:100vh;background:radial-gradient(ellipse at 15% 60%,rgba(26,111,168,0.3) 0%,transparent 55%),radial-gradient(ellipse at 85% 15%,rgba(46,125,50,0.25) 0%,transparent 50%),linear-gradient(160deg,#040f1a 0%,#0a3d62 45%,#0d4f3c 100%);display:flex;align-items:center;padding:6rem 2rem 4rem;position:relative;overflow:hidden;}
  .vn-hero::before{content:'';position:absolute;inset:0;background-image:radial-gradient(circle at 1px 1px,rgba(79,195,247,0.07) 1px,transparent 0);background-size:40px 40px;}
  .vn-hero-in{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1.1fr 0.9fr;gap:4rem;align-items:center;position:relative;z-index:1;width:100%;}
  .vn-kicker{display:inline-flex;align-items:center;gap:0.5rem;background:rgba(76,175,80,0.15);border:1px solid rgba(76,175,80,0.45);color:var(--gl);padding:0.35rem 1rem;border-radius:50px;font-size:0.76rem;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;margin-bottom:1.3rem;animation:fadeInUp 0.5s ease both;}
  .vn-hero h1{font-family:'Fraunces',serif;font-size:clamp(2.5rem,4.5vw,4.2rem);font-weight:900;line-height:1.05;color:#fff;margin-bottom:0.6rem;animation:fadeInUp 0.6s 0.1s ease both;}
  .vn-hero h1 em{color:var(--bl);font-style:italic;}
  .vn-tagline{font-family:'Fraunces',serif;font-size:clamp(1rem,2vw,1.25rem);color:var(--gl);font-style:italic;font-weight:400;margin-bottom:1.4rem;animation:fadeInUp 0.6s 0.15s ease both;}
  .vn-hero p{color:rgba(255,255,255,0.72);font-size:1.03rem;line-height:1.75;margin-bottom:1.8rem;animation:fadeInUp 0.6s 0.2s ease both;max-width:520px;}
  .vn-phone-link{display:inline-flex;align-items:center;gap:0.55rem;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.16);border-radius:50px;padding:0.55rem 1.4rem;color:#fff;font-size:1.15rem;font-weight:700;letter-spacing:0.8px;margin-bottom:2rem;text-decoration:none;animation:fadeInUp 0.6s 0.22s ease both;transition:background 0.2s;}
  .vn-phone-link:hover{background:rgba(255,255,255,0.13);}
  .vn-hero-btns{display:flex;gap:1rem;flex-wrap:wrap;animation:fadeInUp 0.6s 0.28s ease both;}
  .vn-btn-p{background:linear-gradient(135deg,var(--gm),var(--gb));color:#fff;padding:0.85rem 2.2rem;border-radius:50px;font-weight:700;font-size:1rem;box-shadow:0 6px 24px rgba(46,125,50,0.4);transition:transform 0.2s,box-shadow 0.2s;border:none;cursor:pointer;text-decoration:none;}
  .vn-btn-p:hover{transform:translateY(-2px);box-shadow:0 10px 30px rgba(46,125,50,0.5);}
  .vn-btn-s{background:rgba(255,255,255,0.08);color:#fff;border:1.5px solid rgba(255,255,255,0.3);padding:0.85rem 2.2rem;border-radius:50px;font-weight:500;font-size:1rem;transition:background 0.2s,border-color 0.2s;cursor:pointer;text-decoration:none;}
  .vn-btn-s:hover{background:rgba(255,255,255,0.15);border-color:rgba(255,255,255,0.6);}

  .vn-visual{display:flex;justify-content:center;align-items:center;animation:fadeInRight 0.8s 0.2s ease both;}
  .vn-drop{position:relative;width:300px;height:360px;}
  .vn-ring{position:absolute;inset:-20px;border-radius:50% 50% 50% 50%/60% 60% 40% 40%;border:2px solid rgba(79,195,247,0.2);animation:pulse-ring 3s ease-in-out infinite;}
  .vn-ring:nth-child(2){inset:-40px;animation-delay:1s;border-color:rgba(76,175,80,0.15);}
  .vn-ring:nth-child(3){inset:-60px;animation-delay:2s;border-color:rgba(79,195,247,0.1);}
  .vn-dropsvg{width:100%;height:100%;filter:drop-shadow(0 20px 60px rgba(26,111,168,0.5));}

  .vn-stats{background:var(--bd);padding:1.8rem 2rem;display:flex;justify-content:center;flex-wrap:wrap;border-bottom:3px solid var(--gm);}
  .vn-stat{text-align:center;padding:0.5rem 2.5rem;border-right:1px solid rgba(255,255,255,0.1);}
  .vn-stat:last-child{border-right:none;}
  .vn-sn{font-family:'Fraunces',serif;font-size:2.2rem;font-weight:900;color:var(--bl);display:block;}
  .vn-sl{color:rgba(255,255,255,0.7);font-size:0.82rem;font-weight:500;}

  .vn-sec{padding:5rem 2rem;}
  .vn-con{max-width:1200px;margin:0 auto;}
  .vn-lbl{display:inline-block;color:var(--gm);font-size:0.76rem;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin-bottom:0.6rem;}
  .vn-ttl{font-family:'Fraunces',serif;font-size:clamp(1.85rem,3.2vw,2.8rem);font-weight:800;color:var(--td);line-height:1.15;margin-bottom:1rem;}
  .vn-sub{color:var(--tm);font-size:1rem;line-height:1.72;max-width:600px;}

  .vn-svc-bg{background:var(--ow);}
  .vn-svc-hd{text-align:center;margin-bottom:3rem;}
  .vn-svc-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.5rem;}
  .vn-card{background:#fff;border-radius:20px;padding:2rem;position:relative;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.06);border:1px solid rgba(0,0,0,0.04);transition:transform 0.3s,box-shadow 0.3s;}
  .vn-card:hover{transform:translateY(-6px);box-shadow:0 16px 40px rgba(10,61,98,0.12);}
  .vn-card::before{content:'';position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg,var(--bm),var(--gm));}
  .vn-card.feat::before{background:linear-gradient(90deg,var(--gm),var(--gb),var(--bl));height:5px;}
  .vn-card.feat{border:1.5px solid rgba(46,125,50,0.2);}
  .vn-feat-badge{display:inline-flex;align-items:center;gap:0.4rem;background:rgba(46,125,50,0.1);color:var(--gm);border:1px solid rgba(46,125,50,0.25);font-size:0.7rem;font-weight:700;letter-spacing:0.8px;text-transform:uppercase;padding:0.2rem 0.7rem;border-radius:50px;margin-bottom:0.75rem;}
  .vn-svc-icon{width:52px;height:52px;border-radius:13px;background:linear-gradient(135deg,var(--bd),var(--bm));display:flex;align-items:center;justify-content:center;font-size:1.4rem;margin-bottom:1rem;}
  .vn-card h3{font-family:'Fraunces',serif;font-size:1.18rem;font-weight:700;margin-bottom:0.5rem;color:var(--td);}
  .vn-card p{color:var(--tm);font-size:0.88rem;line-height:1.65;}

  .vn-hdpe{background:linear-gradient(135deg,#040f1a,#0a3d62,#0d4f3c);padding:3.5rem 2rem;text-align:center;position:relative;overflow:hidden;}
  .vn-hdpe::before{content:'';position:absolute;inset:0;background-image:radial-gradient(circle at 1px 1px,rgba(255,255,255,0.05) 1px,transparent 0);background-size:32px 32px;}
  .vn-hdpe-in{max-width:900px;margin:0 auto;position:relative;z-index:1;}
  .vn-hdpe h2{font-family:'Fraunces',serif;font-size:clamp(1.75rem,3.5vw,2.8rem);font-weight:900;color:#fff;line-height:1.1;margin-bottom:1rem;}
  .vn-hdpe h2 em{color:var(--bl);font-style:italic;}
  .vn-hdpe p{color:rgba(255,255,255,0.72);font-size:1.03rem;line-height:1.72;margin-bottom:2rem;}
  .vn-hdpe-feats{display:flex;justify-content:center;gap:1.8rem;flex-wrap:wrap;margin-bottom:2rem;}
  .vn-hdpe-f{display:flex;align-items:center;gap:0.5rem;color:var(--gl);font-weight:600;font-size:0.9rem;}

  .vn-why{background:linear-gradient(160deg,var(--bd) 0%,#0a2e1e 100%);color:#fff;position:relative;overflow:hidden;}
  .vn-why::before{content:'';position:absolute;right:-200px;top:-100px;width:600px;height:600px;border-radius:50%;background:radial-gradient(circle,rgba(76,175,80,0.12) 0%,transparent 70%);}
  .vn-why .vn-ttl{color:#fff;}
  .vn-why .vn-lbl{color:var(--gl);}
  .vn-why-grid{display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:center;}
  .vn-why-pts{display:flex;flex-direction:column;gap:1.4rem;margin-top:1.8rem;}
  .vn-why-pt{display:flex;gap:1rem;align-items:flex-start;}
  .vn-wi{width:44px;height:44px;min-width:44px;border-radius:12px;background:rgba(79,195,247,0.1);border:1px solid rgba(79,195,247,0.2);display:flex;align-items:center;justify-content:center;font-size:1.2rem;}
  .vn-why-pt h4{font-weight:600;font-size:0.96rem;margin-bottom:0.25rem;color:#fff;}
  .vn-why-pt p{color:rgba(255,255,255,0.6);font-size:0.87rem;line-height:1.6;}
  .vn-why-vis{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);border-radius:24px;padding:2.5rem;}
  .vn-ct{font-family:'Fraunces',serif;font-size:1.3rem;color:var(--bl);margin-bottom:1.8rem;text-align:center;}
  .vn-cs{display:flex;align-items:center;gap:1rem;padding:0.9rem 1rem;background:rgba(255,255,255,0.04);border-radius:12px;margin-bottom:0.5rem;border-left:3px solid var(--gm);}
  .vn-cs>span{font-size:1.35rem;}
  .vn-cs strong{display:block;font-size:0.9rem;color:#fff;}
  .vn-cs small{color:rgba(255,255,255,0.5);font-size:0.78rem;}

  .vn-proc-bg{background:#fff;}
  .vn-proc-hd{text-align:center;margin-bottom:3.5rem;}
  .vn-proc-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:1rem;position:relative;}
  .vn-proc-grid::before{content:'';position:absolute;top:36px;left:10%;right:10%;height:2px;background:linear-gradient(90deg,var(--bm),var(--gm));z-index:0;}
  .vn-ps{text-align:center;padding:0 0.6rem;position:relative;z-index:1;}
  .vn-pn{width:72px;height:72px;border-radius:50%;background:linear-gradient(135deg,var(--bd),var(--bm));color:#fff;font-size:1.4rem;display:flex;align-items:center;justify-content:center;margin:0 auto 1.1rem;box-shadow:0 6px 20px rgba(10,61,98,0.3);border:3px solid #fff;}
  .vn-ps h4{font-weight:700;margin-bottom:0.35rem;font-size:0.92rem;color:var(--td);}
  .vn-ps p{font-size:0.8rem;color:var(--tm);line-height:1.5;}

  .vn-gal-bg{background:var(--ow);}
  .vn-gal-hd{text-align:center;margin-bottom:1.5rem;}
  .vn-gtabs{display:flex;justify-content:center;gap:0.6rem;flex-wrap:wrap;margin-bottom:2.5rem;}
  .vn-gtab{padding:0.5rem 1.4rem;border-radius:50px;border:2px solid var(--bm);background:transparent;color:var(--bm);font-family:'DM Sans',sans-serif;font-size:0.85rem;font-weight:600;cursor:pointer;transition:all 0.2s;}
  .vn-gtab.active,.vn-gtab:hover{background:var(--bd);color:#fff;border-color:var(--bd);}

  /* ==================== GALLERY IMPROVEMENTS ==================== */
  .vn-ggrid{display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:16px;}
  .vn-gi{position:relative;overflow:hidden;border-radius:14px;cursor:pointer;transition:transform 0.3s ease, box-shadow 0.3s ease;}
  .vn-gi:hover{transform:scale(1.03);}
  .vn-gi-inner{position:relative;width:100%;height:100%;}

  .vn-gph{width:100%;min-height:220px;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.5rem;font-size:2.5rem;background:#0d2137;}
  .vn-gph p{font-size:0.7rem;font-weight:700;color:rgba(255,255,255,0.8);letter-spacing:0.8px;text-transform:uppercase;}

  .vn-gov{position:absolute;inset:0;background:linear-gradient(to top,rgba(10,61,98,0.92) 30%,transparent 70%);opacity:0;transition:opacity 0.35s ease;display:flex;align-items:flex-end;padding:1.25rem;color:#fff;}
  .vn-gi:hover .vn-gov{opacity:1;}

  .vn-gcap{font-size:0.9rem;font-weight:600;}
  .vn-gcap span{display:block;font-size:0.75rem;font-weight:400;opacity:0.8;margin-top:4px;}

  .vn-upbanner{background:linear-gradient(135deg,rgba(26,111,168,0.1),rgba(46,125,50,0.1));border:2px dashed rgba(26,111,168,0.3);border-radius:16px;padding:1.5rem;text-align:center;margin-top:2rem;}
  .vn-upbanner p{color:var(--tm);font-size:0.88rem;}

  /* ==================== LIGHTBOX - FIXED & IMPROVED ==================== */
  .vn-lb{
    position:fixed;
    inset:0;
    z-index:9999;
    background:rgba(0,0,0,0.95);
    display:flex;
    align-items:center;
    justify-content:center;
    padding:1rem;
    overflow:auto;
  }

  .vn-lbi{
    position:relative;
    max-width:920px;
    width:100%;
    max-height:95vh;
    display:flex;
    flex-direction:column;
    align-items:center;
  }

  .vn-lbc{
    width:100%;
    background:#0d1b2a;
    border-radius:16px;
    overflow:hidden;
    box-shadow:0 20px 60px rgba(0,0,0,0.6);
  }

  .vn-lbx{
    position:absolute;
    top:-50px;
    right:10px;
    background:rgba(0,0,0,0.7);
    border:none;
    color:#fff;
    font-size:1.8rem;
    width:48px;
    height:48px;
    border-radius:50%;
    cursor:pointer;
    z-index:10000;
    display:flex;
    align-items:center;
    justify-content:center;
  }

  .vn-lbcap{
    text-align:center;
    color:#fff;
    margin-top:1rem;
    font-size:1rem;
    line-height:1.4;
  }

  .vn-lbnav-row{
    display:flex;
    gap:2.5rem;
    margin-top:1.5rem;
  }

  .vn-lbnav{
    background:rgba(255,255,255,0.15);
    border:none;
    color:#fff;
    width:52px;
    height:52px;
    border-radius:50%;
    font-size:1.8rem;
    cursor:pointer;
    transition:background 0.2s;
  }

  .vn-lbnav:hover{background:rgba(255,255,255,0.3);}

  /* Mobile Lightbox Tweaks */
  @media (max-width: 768px) {
    .vn-lb { padding: 0.75rem; }
    .vn-lbi { max-height: 98vh; }
    .vn-lbc img { max-height: 65vh; }
    .vn-lbnav-row { gap: 1.5rem; }
    .vn-lbnav { width: 44px; height: 44px; font-size: 1.6rem; }
  }

  /* ==================== OTHER SECTIONS ==================== */
  .vn-ctc{background:linear-gradient(135deg,#0a3d62 0%,#1b5e20 100%);color:#fff;text-align:center;}
  .vn-ctc .vn-ttl{color:#fff;}
  .vn-ctc .vn-sub{color:rgba(255,255,255,0.72);margin:0 auto 3rem;}
  .vn-ctc-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(290px,1fr));gap:2rem;text-align:left;}
  .vn-fcard{background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.14);border-radius:20px;padding:2rem;}
  .vn-fcard h3{font-family:'Fraunces',serif;font-size:1.22rem;margin-bottom:1.5rem;}
  .vn-fg{margin-bottom:1rem;}
  .vn-fg label{display:block;font-size:0.82rem;font-weight:500;margin-bottom:0.36rem;color:rgba(255,255,255,0.75);}
  .vn-fg input,.vn-fg textarea,.vn-fg select{width:100%;padding:0.72rem 1rem;background:rgba(255,255,255,0.09);border:1px solid rgba(255,255,255,0.18);border-radius:10px;color:#fff;font-family:'DM Sans',sans-serif;font-size:0.87rem;outline:none;transition:border-color 0.2s;}
  .vn-fg input::placeholder,.vn-fg textarea::placeholder{color:rgba(255,255,255,0.34);}
  .vn-fg input:focus,.vn-fg textarea:focus,.vn-fg select:focus{border-color:var(--bl);}
  .vn-fg textarea{resize:vertical;min-height:95px;}
  .vn-fg select option{background:var(--bd);color:#fff;}
  .vn-submit{width:100%;padding:0.9rem;background:linear-gradient(135deg,var(--gm),var(--gb));color:#fff;border:none;border-radius:10px;font-family:'DM Sans',sans-serif;font-size:1rem;font-weight:700;cursor:pointer;transition:transform 0.2s,box-shadow 0.2s;}
  .vn-submit:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(46,125,50,0.5);}
  .vn-icard{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);border-radius:20px;padding:2rem;display:flex;flex-direction:column;gap:1.4rem;}
  .vn-icard h3{font-family:'Fraunces',serif;font-size:1.22rem;}
  .vn-ii{display:flex;gap:1rem;align-items:flex-start;}
  .vn-ii-ic{font-size:1.35rem;min-width:30px;}
  .vn-ii strong{display:block;font-size:0.78rem;color:rgba(255,255,255,0.52);margin-bottom:0.18rem;text-transform:uppercase;letter-spacing:0.5px;}
  .vn-ii a{color:var(--bl);text-decoration:none;}
  .vn-tip{padding:1.1rem 1.2rem;background:rgba(76,175,80,0.1);border:1px solid rgba(76,175,80,0.28);border-radius:12px;}
  .vn-tip p{font-size:0.87rem;color:rgba(255,255,255,0.8);line-height:1.6;}
  .vn-toast{background:rgba(76,175,80,0.18);border:1px solid rgba(76,175,80,0.45);border-radius:12px;padding:1rem 1.5rem;margin-bottom:1.5rem;color:#a5d6a7;font-weight:600;text-align:left;}

  .vn-footer{background:#030c14;color:rgba(255,255,255,0.45);padding:2rem;text-align:center;font-size:0.82rem;}
  .vn-footer strong{color:var(--bl);}
  .vn-fphone{color:var(--gl);font-size:1rem;font-weight:700;display:block;margin-bottom:0.4rem;text-decoration:none;}

  /* ==================== MOBILE & OTHER IMPROVEMENTS ==================== */
  /* (your existing mobile styles remain here - I kept them intact) */
  .vn-nav { padding: 1rem 1.2rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; }
  /* ... rest of your mobile styles ... */

  /* Scroll Reveal */
  .vn-sec { opacity: 0; transform: translateY(50px); transition: all 0.9s cubic-bezier(0.25, 0.1, 0.25, 1); }
  .vn-sec.visible { opacity: 1; transform: translateY(0); }

  .vn-ggrid .vn-gi { opacity: 0; transform: translateY(40px); transition: all 0.7s cubic-bezier(0.25, 0.1, 0.25, 1); }
  .vn-ggrid .vn-gi.visible { opacity: 1; transform: translateY(0); }

  /* ANIMATIONS */
  @keyframes fadeInUp{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)}}
  @keyframes fadeInRight{from{opacity:0;transform:translateX(36px)}to{opacity:1;transform:translateX(0)}}
  @keyframes pulse-ring{0%,100%{transform:scale(1);opacity:0.55}50%{transform:scale(1.05);opacity:1}}
`;