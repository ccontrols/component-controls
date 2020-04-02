import { BroadcastChannel } from 'broadcast-channel';
import { UPDATE_CONTROLS_MESSAGE } from '@component-controls/blocks';

const channel = new BroadcastChannel(UPDATE_CONTROLS_MESSAGE);

interface ControlsMessages {
  [id: string]: any;
}
export const controlsMessages: ControlsMessages = {};
channel.onmessage = (message: { id: string; values: any }) => {
  controlsMessages[message.id] = message.values;
};
