import Constants from 'expo-constants';

export const getEnvVariables = () => {
    
    const env = Constants.expoConfig.extra;
    return {
       ...env
    }
}