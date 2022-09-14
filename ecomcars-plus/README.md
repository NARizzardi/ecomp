# Jump Rope - Projeto Base Mobile (2021)

<img src="https://i.imgur.com/zKbThVQ.png" alt="logo jump rope" width="200"/>

A nova versão do base do Mobile (08/2021) inclui a biblioteca nativeBase como framework de estilos. Aproveite!

Pensado por: Nícolas Rizzardi, Pedro Heberle e Rogério Bayer

Por conta do React Native 0.63, o projeto base tem suporte para debug por meio do [Flipper](https://fbflipper.com/), faça o download para sua plataforma e rode-o junto com o seu app.

## Como rodar no Linux?

```
yarn
yarn start
yarn android
```

## Como rodar no macOS?

O novo projeto base na estrutura da Apple rodará em máquinas com o macOS Catalina, Big Sur, Monterrey ou superior, XCode 12.5 ou superior e cocoapods 1.9 ou superior instalado preferencialmente via gem (sudo gem install cocoapods).

```
yarn
cd ios
pod install
open nativeBase.xcworkspace
```

e apertar o play no Xcode.

O debug via Folly é suportado, bastando você possuir o utilitário e rodar o app via emulador do Xcode. Caso seu build demore excessivamente por conta da dependência do Folly, você poderá desativar pelo `Podfile`.

Tutorial (anterior) ensinando os que está acontecendo: https://gitlab.com/ecomp-ufpr/utils/guias/base-native-tutorial
