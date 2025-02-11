import DEFAULT_TEMPLATE from './assets/defaultTemplate.njk';
import DEFAULT_METADATA_TEMPLATE from './assets/defaultMetadataTemplate.njk';
import type { RaindropPluginSettings } from "./types";

export const VERSION = '0.0.13';

export const DEFAULT_SETTINGS: RaindropPluginSettings = {
	version: VERSION,
	username: undefined,
	isConnected: false,
	ribbonIcon: true,
	appendMode: true,
	onlyBookmarksWithHl: false,
	highlightsFolder: '/',
	syncCollections: {},
	template: DEFAULT_TEMPLATE,
	metadataTemplate: DEFAULT_METADATA_TEMPLATE,
	dateTimeFormat: 'YYYY/MM/DD HH:mm:ss',
	autoSyncInterval: 0,
};
