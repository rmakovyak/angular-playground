/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

declare module 'typed-cloud-browser-sdk';
import * as sdk from 'cloud-browser-sdk';

sdk.method();
