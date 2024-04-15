import { HttpClient } from '@angular/common/http';
import { ENVIRONMENT, EnvironmentModes } from 'shared/environment';
import { MessageFetchStrategy } from './message-fetch-strategy';
import { MockMessageFetchStrategy } from './mock-message-fetch-strategy';
import { TestMessageFetchStrategy } from './test-message-fetch-strategy';
import { ProdMessageFetchStrategy } from './prod-message-fetch-strategy';

type factoryReturnType = (http: HttpClient) => MessageFetchStrategy;

export const messageStrategyFactory: factoryReturnType = (http: HttpClient) => {
	switch (ENVIRONMENT.mode) {
		case EnvironmentModes.MOCK:
			return new MockMessageFetchStrategy(http);
		case EnvironmentModes.TEST:
			return new TestMessageFetchStrategy(http);
		case EnvironmentModes.PROD:
			return new ProdMessageFetchStrategy(http);
	}
};
