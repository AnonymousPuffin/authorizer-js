export type ConfigType = {
	authorizerURL: string;
	redirectURL: string;
	clientID: string;
};

export type User = {
	id: string;
	email: string;
	preferred_username: string;
	email_verified: boolean;
	signup_methods: string;
	given_name?: string | null;
	family_name?: string | null;
	middle_name?: string | null;
	picture?: string | null;
	gender?: string | null;
	birthdate?: string | null;
	phone_number?: string | null;
	phone_number_verified?: boolean | null;
	roles?: string[];
	created_at: number;
	updated_at: number;
};

export type AuthToken = {
	message?: string;
	access_token: string;
	expires_in: number;
	id_token: string;
	refresh_token?: string;
	user?: User;
};

export type Response = {
	message: string;
};

export type Headers = Record<string, string>;

export type LoginInput = { email: string; password: string; roles?: string[] };

export type SignupInput = {
	email: string;
	password: string;
	confirm_password: string;
	given_name?: string;
	family_name?: string;
	middle_name?: string;
	picture?: string;
	gender?: string;
	birthdate?: string;
	phone_number?: string;
	roles?: string[];
};

export type MagicLinkLoginInput = {
	email: string;
	roles?: string[];
};

export type VerifyEmailInput = { token: string };

export type GraphqlQueryInput = {
	query: string;
	variables?: Record<string, any>;
	headers?: Headers;
};

export type MetaData = {
	version: string;
	client_id: string;
	is_google_login_enabled: boolean;
	is_facebook_login_enabled: boolean;
	is_github_login_enabled: boolean;
	is_email_verification_enabled: boolean;
	is_basic_authentication_enabled: boolean;
	is_magic_link_login_enabled: boolean;
};

export type UpdateProfileInput = {
	old_password?: string;
	new_password?: string;
	confirm_new_password?: string;
	email?: string;
	given_name?: string;
	family_name?: string;
	middle_name?: string;
	nickname?: string;
	gender?: string;
	birthdate?: string;
	phone_number?: string;
	picture?: string;
};

export type ForgotPasswordInput = {
	email: string;
};

export type ResetPasswordInput = {
	token: string;
	password: string;
	confirm_password: string;
};

export type SessionQueryInput = {
	roles?: string[];
};

export type IsValidJWTQueryInput = {
	jwt: string;
	roles?: string[];
};

export type ValidJWTResponse = {
	valid: string;
	message: string;
};

export enum OAuthProviders {
	Github = 'github',
	Google = 'google',
	Facebook = 'facebook',
}

export enum ResponseTypes {
	Code = 'code',
	Token = 'token',
}

export type AuthorizeInput = {
	response_type: ResponseTypes;
	use_refresh_token?: boolean;
	response_mode?: string;
};

export type AuthorizeResponse = {
	state: string;
	code?: string;
	error?: string;
	error_description?: string;
};