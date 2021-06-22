import { Action } from 'redux';

export interface ActionWithPayload extends Action {
	payload: {
		data: any;
		response: {
			data: TemplatePayload<T>;
		};
	};
}
