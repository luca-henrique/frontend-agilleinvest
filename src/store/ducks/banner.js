import Immutable from "seamless-immutable";

export const Types = {
  CHANGER_BANNER_PATH: "@banner/CHANGER_BANNER_PATH",
};

const INITIAL_STATE = Immutable({
  bannerSelect: "main",
});

export default function CTPS(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.CHANGER_BANNER_PATH:
      return {
        ...state,
        bannerSelect: action.payload.path,
      };

    default:
      return state;
  }
}

export const Creators = {
  changerBannerPath: (path) => ({
    type: Types.CHANGER_BANNER_PATH,
    payload: {
      path,
    },
  }),
};
