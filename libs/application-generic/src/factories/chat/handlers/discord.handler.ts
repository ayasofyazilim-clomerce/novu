import { ChatProviderIdEnum, ICredentials } from '@novu/shared';
import { ChannelTypeEnum } from '@novu/stateless';
import { BaseChatHandler } from './base.handler';
import { DiscordProvider } from '@novu/providers';

export class DiscordHandler extends BaseChatHandler {
  constructor() {
    super(ChatProviderIdEnum.Discord, ChannelTypeEnum.CHAT);
  }

  buildProvider(_credentials: ICredentials) {
    this.provider = new DiscordProvider({});
  }
}
