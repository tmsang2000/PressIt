import {
  I18nManager,
  PixelRatio
} from 'react-native';
import RNRestart from 'react-native-restart';
import moment from 'moment';

export function channingActions(currentActions, dispatch, ...actionGenerators) {
  return actionGenerators.reduce((accActions, actionGenerator) => {
    return {
      ...actionGenerator(accActions, dispatch),
    };
  }, currentActions);
}

export function formatRelativeTime(timestamp) {
  return moment.unix(timestamp / 1000).fromNow();
}

export function formatTime(timestamp) {
  return moment.unix(timestamp / 1000).format('LT');
}

export function formatDate(timestamp, pattern = 'DD/MM/YYYY') {
  return moment.unix(timestamp / 1000).format(pattern);
}

export function formatDateTime(timestamp) {
  return moment.unix(timestamp / 1000).format('DD/MM/YYYY HH:mm');
}

const scaleValue = PixelRatio.get() / 2;
export const scaleWithPixel = (size, limitScale = 1.2) => {
  const value = scaleValue > limitScale ? limitScale : scaleValue;
  return size * value;
};

export const languageFromCode = (code) => {
  switch (code) {
    case 'en':
      return 'English';
    case 'vi':
      return 'Vietnamese';
    case 'ar':
      return 'Arabic';
    case 'da':
      return 'Danish';
    case 'de':
      return 'German';
    case 'el':
      return 'Greek';
    case 'fr':
      return 'French';
    case 'he':
      return 'Hebrew';
    case 'id':
      return 'Indonesian';
    case 'ja':
      return 'Japanese';
    case 'ko':
      return 'Korean';
    case 'lo':
      return 'Lao';
    case 'nl':
      return 'Dutch';
    case 'zh':
      return 'Chinese';
    case 'fa':
      return 'Iran';
    case 'km':
      return 'Cambodian';
    default:
      return 'Unknown';
  }
};

export const isLanguageRTL = (code) => {
  switch (code) {
    case 'ar':
    case 'he':
      return true;
    default:
      return false;
  }
};

export const reloadLocale = (oldLanguage, newLanguage) => {
  const oldStyle = isLanguageRTL(oldLanguage);
  const newStyle = isLanguageRTL(newLanguage);
  if (oldStyle != newStyle) {
    I18nManager.forceRTL(newStyle);
    RNRestart.Restart();
  }
};
