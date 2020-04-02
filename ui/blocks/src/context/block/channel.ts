import { BroadcastChannel } from 'broadcast-channel';
import {
  LoadedComponentControls,
  getControlValues,
} from '@component-controls/core';
import { UPDATE_CONTROLS_MESSAGE } from './consts';

const channel = new BroadcastChannel(UPDATE_CONTROLS_MESSAGE);

interface ControlsMessage {
  id: string;
  controls: LoadedComponentControls;
}
export const postControlsMsg = ({ id, controls }: ControlsMessage) =>
  controls && channel.postMessage({ id, values: getControlValues(controls) });
