# rn-avr-model-view

A React Native view for displaying .obj, .dae and .scn models either on screen.

### Installation

```bash
# Using npm
npm install rn-avr-model-view rn-fetch-blob react-native-fs react-native-zip-archive --save

# or using yarn:
yarn add rn-avr-model-view rn-fetch-blob react-native-fs react-native-zip-archive
```

### Mostly automatic installation

`$ react-native link rn-avr-model-view`

## Usage

### Model view

```javascript
import { ModelView } from "rn-avr-model-view";

<ModelView
  source={{
    zip: "https://embed.avr.asia/demo/sofa01/Sofa_01.zip",
  }}
  onLoadModelStart={this.onLoadModelStart}
  onLoadModelSuccess={this.onLoadModelSuccess}
  onLoadModelError={this.onLoadModelError}
/>;
```
