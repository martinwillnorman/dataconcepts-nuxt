<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'dataconcepts-nuxt');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '4]<1b#Xeoz@i]qE)rm=[{EutPDcV/IA<1n6zA*^JB|5G:E2(};bTgssMU.t|`U,r');
define('SECURE_AUTH_KEY',  'JK@ cdxNgPjGQb+)`|H.u&?oe}4H0NIfj>`ps`LZbu9Y|e}C6r]60|+L>!,M^Fb3');
define('LOGGED_IN_KEY',    'L.)tLb<4:_b(3:!sfhpLlQJ>O(1[WW!eKEahD)g,?xL^}i?pS)$40)(]i6hy=l!.');
define('NONCE_KEY',        'a5tZm5-6@wP$</OaA-t4}?9Ix@>?sMw,PUTd?AG?>}s&hD-{]mJU!fC#jcm}kZ?H');
define('AUTH_SALT',        'VEuc@m!:FdY/nk$VE7kZyjsV.W_9Y1fa5$T#Z%z<FTTe)86NtJoIt=mPfb6A}2d@');
define('SECURE_AUTH_SALT', 'T|jq>z87#TTe[e9)# wJDMC.;ykw.0x7L<PpF53E08MYN}%x=xHPX$*zgt&[TnIO');
define('LOGGED_IN_SALT',   'guP@Ax>RL|}yTM[,0JDQsA3/%?0>&*^U[6qJD|Yft./[.oN/iKO*FbEAOR-MTKip');
define('NONCE_SALT',       '>n7_N>f{FF |xD4GtEg7w1,.+>F];0COe`XdX5n~pOLj2hX${SJR`4szYUU#G6#h');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
