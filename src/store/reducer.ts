export interface Company {
  id: number;
  label: string;
  vision: number;
  ability: number;
  checked?: boolean;
}

export const initialState: Company[] = JSON.parse(localStorage.getItem('companies') || '[]');

export enum ActionTypes {
  addCompany,
  deleteCompany,
  updateCompany,
}
export interface AddCompanyAction {
  type: ActionTypes.addCompany;
  payload: Company;
}

export interface DeleteCompanyAction {
  type: ActionTypes.deleteCompany;
  payload: number;
}

export interface UpdateCompanyAction {
  type: ActionTypes.updateCompany;
  payload: Company;
}

export type Actions = AddCompanyAction | DeleteCompanyAction | UpdateCompanyAction;

export const reducer = (state: Company[], action: Actions) => {
  switch (action.type) {
    case ActionTypes.addCompany:
      return [...state, action.payload];

    case ActionTypes.deleteCompany:
      return state.filter((s) => s.id !== action.payload);

    case ActionTypes.updateCompany:
      const foundCompanyIdx = state.findIndex((s) => s.id === action.payload.id);
      const newState = [...state];
      if (action.payload.ability > 100) action.payload.ability = 100;
      if (action.payload.vision > 100) action.payload.vision = 100;
      if (action.payload.ability < 0) action.payload.ability = 0;
      if (action.payload.vision < 0) action.payload.vision = 0;
      newState[foundCompanyIdx] = action.payload;
      return newState;

    default:
      return state;
  }
};
