export enum EnvironmentModes {
	MOCK = 'mock',
	TEST = 'test',
	PROD = 'prod',
}

export type Environment = { mode: EnvironmentModes };

export const ENVIRONMENT: Environment = {
	mode: EnvironmentModes.MOCK,
};
