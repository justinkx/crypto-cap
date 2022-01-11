module.exports = () => {
  if (process.env.MY_ENVIRONMENT === 'production') {
    return {
      name: 'Crypto Cap',
      description: 'Crypto app to trade with any exchange',
      slug: 'crypto-cap',
      version: '1.0.0',
      orientation: 'portrait',
      icon: './assets/icon.png',
      privacy: 'unlisted',
      backgroundColor: '#4f34b1',
      jsEngine: 'hermes',
      splash: {
        image: './assets/splash.png',
        resizeMode: 'contain',
        backgroundColor: '#4f34b1',
      },
      updates: {
        fallbackToCacheTimeout: 0,
      },
      assetBundlePatterns: ['**/*'],
      ios: {
        supportsTablet: true,
        bundleIdentifier: 'com.justinkx.cryptocap',
        jsEngine: 'jsc',
      },
      android: {
        adaptiveIcon: {
          foregroundImage: './assets/adaptive-icon.png',
          backgroundColor: '#4f34b1',
        },
        package: 'com.justinkx.cryptocap',
      },
      web: {
        favicon: './assets/favicon.png',
      },
    };
  } else {
    return {
      name: 'Crypto Cap Dev',
      description: 'Crypto app to trade with any exchange',
      slug: 'crypto-cap-dev',
      version: '1.0.0',
      orientation: 'portrait',
      icon: './assets/icon.png',
      privacy: 'unlisted',
      backgroundColor: '#4f34b1',
      jsEngine: 'hermes',
      splash: {
        image: './assets/splash.png',
        resizeMode: 'contain',
        backgroundColor: '#4f34b1',
      },
      updates: {
        fallbackToCacheTimeout: 0,
      },
      assetBundlePatterns: ['**/*'],
      ios: {
        supportsTablet: true,
        bundleIdentifier: 'com.justinkx.cryptocap-dev',
        jsEngine: 'jsc',
      },
      android: {
        adaptiveIcon: {
          foregroundImage: './assets/adaptive-icon.png',
          backgroundColor: '#4f34b1',
        },
        package: 'com.justinkx.cryptocap-dev',
      },
      web: {
        favicon: './assets/favicon.png',
      },
    };
  }
};
