![Executive Man Logo](https://raw.githubusercontent.com/CamHenlin/ExecutiveMan/master/images/execmanlogobig.png "executive man logo")

![Executive Man screenshot](https://raw.githubusercontent.com/CamHenlin/ExecutiveMan/master/images/screenshot.png "executive man screenshot")

#### Playable [here](http://executive-man.com/).

#### Features
- nearly 100% correct NES MegaMan gameplay
- relatively easy to use touch controls
- chrome, firefox, and internet explorer joystick support
- save game support
- easy to edit Tiled levels
- easily hackable!

#### About ExecutiveMan
ExecutiveMan is a recreation of my favorite NES game, MegaMan. It's written in my favorite programming language, JavaScript. The ExecutiveMan engine aims to have 100% complete feature coverage of the original MegaMan games. The only thing that is missing at this point (outside of only having 14 types of enemies) is ladders, for one very simple reason: Ladders require extra up and down buttons which make the game very clumsy to play with touch controls.

The game is still a work in progress. However, it is very playable, and even has a couple of mostly complete levels for you to try out. The most complete at this time are:
- [WasteMan](http://executive-man.com/?level=0)
- [AccountingMan](http://executive-man.com/?level=1)
- [VisionaryMan](http://executive-man.com/?level=8) (screenshot of level above)

See the [wiki](https://github.com/CamHenlin/ExecutiveMan/wiki) for developer information.

To run locally:
```
git clone https://github.com/CamHenlin/ExecutiveMan.git

cd ExecutiveMan

python -m SimpleHTTPServer
```
Then visit http://localhost:8000/index.html for minified game or http://localhost:8000/testindex.html for unminified game

To build minified game OR update levels after editing level json:
```
git clone https://github.com/CamHenlin/ExecutiveMan.git

cd ExecutiveMan

./compile.sh
```

![made with a mac](http://henlin.org/mac.gif "made with a mac")