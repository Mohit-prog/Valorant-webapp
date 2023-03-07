import sage from "./videos/agentVideos/sage.mp4";
import reyna from "./videos/agentVideos/reyna.mp4";
import neon from "./videos/agentVideos/neon.mp4";
import sova from "./videos/agentVideos/sova.mp4";
import fade from "./videos/agentVideos/fade.mp4";
import astra from "./videos/agentVideos/astra.mp4";
import killjoy from "./videos/agentVideos/killjoy.mp4";
import skye from "./videos/agentVideos/skye.mp4";
import raze from "./videos/agentVideos/raze.mp4";
import jett from "./videos/agentVideos/jett.mp4";
import breach from "./videos/agentVideos/breach.mp4";
import cypher from "./videos/agentVideos/cypher.mp4";
import viper from "./videos/agentVideos/viper.mp4";
import yoru from "./videos/agentVideos/yoru.mp4";
import brim from "./videos/agentVideos/brim.mp4";
import kayo from "./videos/agentVideos/kayo.mp4";
import chamber from "./videos/agentVideos/chamber.mp4";
import harbor from "./videos/agentVideos/harbor.mp4";
import phenoix from "./videos/agentVideos/phenoix.mp4";
import omen from "./videos/agentVideos/omen.mp4";
import gekko from "./videos/agentVideos/gekko.mp4"

export const agentVideoObject = {
  Sage: sage,
  Reyna: reyna,
  Neon: neon,
  Sova: sova,
  Fade: fade,
  Astra: astra,
  Omen: omen,
  Killjoy: killjoy,
  Skye: skye,
  Raze: raze,
  Jett: jett,
  Breach: breach,
  Cypher: cypher,
  Viper: viper,
  Yoru: yoru,
  Brimstone: brim,
  "KAY/O": kayo,
  Chamber: chamber,
  Harbor: harbor,
  Phoenix: phenoix,
  Gekko:gekko
};




export const weaponInfoObject = {
    Odin: "The Odin is the better, more expensive Machine Gun, priced at 3200 Creds. Its strong wallbang capabilities, fast rate of fire, and high damage output means it is a very strong Defensive weapon. Sustained fire over its 100 bullet magazine sees its fire rate speed up from 12 to 15.6 rounds per second. The downside is its reload speed — the longest in the game at 5 seconds.",
    Ares: "The Ares is a machine gun that gets increasingly accurate the longer the trigger is held. With 50 bullets per magazine and a fire rate of 13 rounds per second, there is almost 4 seconds of sustained fire. This 1600 Creds gun is suited for Defense, with its slow movement, equip, and reload speeds. Its advantages comes in its high wall penetration ability, alongside its high rate of fire, allowing you to hold down a site if needed.",
    Vandal: "The Vandal is the other half of the primary rifle choice, equally priced at 2900 Creds. It is slower than the Phantom — 9.75 rounds per second as opposed to 11 rounds per second — and has fewer bullets per magazine (25 instead of 30). It has the same effects aiming down sights, giving you a 10% less fire rate but a more manageable spread and recoil.",
    Bulldog: "The Bulldog is the cheapest rifle with decent damage and ease of use. Like the Stinger, the Bulldog has an automatic primary fire and a semi-automatic burst secondary fire. The secondary fire is activated while aiming down sights, allowing you to fire three-round bursts with reduced spread and recoil but slower rate of fire. It has no damage falloff, having the same damage across all distances.",
    Phantom: "The Phantom is one of the two main automatic rifles in the game, the other being the Vandal. Both are 2900 Creds. The Phantom boasts a higher rate of fire and magazine size than its competitor, alongside a silencer for better smoke-spamming. Aiming down sights decreases its fire rate by 10%, but reduces spread and recoil.",
    Judge: "The Judge is a rapid-firing automatic Shotgun that is highly effective at handling multiple targets in close range. As with all shotguns, it is most effective within 10 meters and becomes increasingly inefficient past 15 meters. Its price of 1850 Creds is justified by its 3.5 rounds of 12 pellets per second, with a magazine size of 7.",
    Bucky: "The Bucky is a pump-action shotgun and the cheapest primary weapon in the game at only 850 Creds. It has a normal primary fire for close distances and a concentrated pellet secondary fire for better effectiveness at short-to-medium ranges. The secondary fire option reduces the amount of pellets from 15 to 5, but is meant for hitting targets farther than 8 meters away.",
    Frenzy:
      "Just as the Shorty is the Sidearm equivalent of a shotgun, the Frenzy is the Sidearm equivalent of an SMG. Its high fire rate of 10 rounds per second but small magazine size of 13 bullets means it is a fairly high-risk, high-reward automatic pistol. Depending on your Agent, the Frenzy is a decent choice for pistol rounds or rushing the enemy while on a Valorant Economy Guide, with a cheap price of 450 Creds.",
    Classic:
      "The Classic is a free pistol that you automatically receive at the start of a round. It is a viable Sidearm option, either as the weapon of choice in pistol rounds or a last resort if you run out of ammo in your primary weapon during full buy rounds. Its strengths lie in its versatility — it has a single-shot primary fire for short-to-medium range tapping, or a three-shot secondary fire for close combat shotgun damage.",
    Ghost: "The Ghost is a semi-automatic pistol effective at medium to long ranges. It is silenced, meaning bullet tracers are not visible nor is the gun audible farther than 40 meters. With a decent fire rate of 6.75 rounds per second alongside a high magazine size of 15 bullets, the Ghost is a good pistol to spam through smokes to try and silently pick off enemies without too much repercussion.",
    Sheriff: "The Sheriff is an 800 Creds semi-automatic hand-cannon. It is the most expensive Sidearm given its ability to one-shot kill armored opponents with a headshot. The Sheriff rewards precision but punishes inaccuracy given its high recoil and slow fire rate of 4 shots per second.",
    Shorty:
      "The Shorty is a cheap, niche Sidearm that acts as a mini shotgun. Its high pellet spread and low falloff multiplier means that this weapon is only usable at distances closer than 15 meters, otherwise it is effectively useless. However, when used properly at point-blank range, you can catch fully-armored enemies off guard and kill them with one clip. It costing only 150 Creds means that it is a viable gun to use in Valorant Economy Guide where low-investment purchases are recommended.",
    Operator: "The Operator is both the most expensive and the most powerful weapon in the game. It costs 4700 Creds, but makes up for it in its ability to kill an enemy in one hit at any distance. To balance the Operator, it has a slow 0.6 rounds/second firing rate, takes 3.7 seconds to reload, and is tied for the slowest movement speed in the game at 5.13 meters per second.",
    Guardian: "The Guardian is a semi-automatic precision rifle. Its niche fills the long-range rifle role, with more versatility than a Sniper Rifle. It has a slow rate of fire but high accuracy, with the intention of being used in order to hit headshots. The Guardian boasts the same damage across all distances.",
    Marshal: "he Marshal is a 950 Creds lever action Sniper Rifle. It is perfectly accurate while aiming down sights, but is also fairly accurate while not scoped in as well. While every other guns’ zoom can increase sight by 1.2x, the Marshal’s single zoom setting takes it to 3.5x vision. Its cheap nature is perfect for any type of Force, Light or Half buy. The Marshal can fire a quick 1.5 rounds per second, has 5 shots in a magazine, and can reload a bullet in 0.5 seconds.",
    Spectre: "The Spectre is a reliable, short-to-medium range SMG. At a price of 1600 Creds, the Spectre is good for 2nd round Force buys or Half Buys later in the match. It is silenced like the Ghost, meaning you can use its 30 bullet magazine and high fire rate to spam through smokes effectively. Aiming down sights simply reduces spread and recoil.",
    Stinger: "The Stinger is a cheap, short-range SMG good for running-and-gunning. It boasts both an automatic primary fire and a semi-automatic burst secondary fire option. Aiming down sights triggers the secondary four-bullet burst option, reducing spread, recoil, and damage falloff in order to be more effective at longer ranges. However, the Stinger is not meant to be used for long distance shooting — an absurd 16 rounds/second fire rate but high recoil means it is best used in close-quarters defense.",
    Melee: "The Tactical Knife is a base melee weapon provided to every player, and cannot be dropped. It has two modes of fire: one being a fast slashing motion, and the other being a sharp jab. The primary slash has a three swing combo that loops, while the alternate slash deals more damage in a single strike but with a longer recovery and slightly smaller range and hitbox. The weapon also deals double damage when striking the target's back.",
  };
  
  
  