import { HttpClient } from '@angular/common/http';
import { ENVIRONMENT, EnvironmentModes } from 'shared/environment';
import { ChatroomFetchStrategy } from './chatrooms-fetch-strategy';
import { MockChatroomFetchStrategy } from './mock-chatroom-fetch-strategy';
import { ProdChatroomFetchStrategy } from './prod-chatroom-fetch-strategy';
import { TestChatroomFetchStrategy } from './test-chatroom-fetch-strategy';

type factoryReturnType = (http: HttpClient) => ChatroomFetchStrategy;

export const chatroomStrategyFactory: factoryReturnType = (http: HttpClient) => {
	switch (ENVIRONMENT.mode) {
		case EnvironmentModes.MOCK:
			return new MockChatroomFetchStrategy(http);
		case EnvironmentModes.TEST:
			return new TestChatroomFetchStrategy(http);
		case EnvironmentModes.PROD:
			return new ProdChatroomFetchStrategy(http);
	}
};
