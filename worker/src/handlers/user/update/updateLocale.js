// Copyright (c) 2024 t2vee. All rights reserved.
// Use of this source code is governed by an MPL license.


import { status } from 'itty-router';
import { error } from 'itty-router'

export const handler = async (request, env, ctx) => {
	try {
		const requestData = await request.json();
		ctx.Validate.locale(requestData);
		await ctx.Http.patch(
			`/api/users/${ctx.userid}/profile`,
			{data: {
					"profile": {
						"locale": requestData.locale
					}}
			});
		return status(204)
	} catch (e) {
		console.error(e)
		return error(e)
	}
}
