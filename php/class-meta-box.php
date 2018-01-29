<?php
/**
 * Meta Box in Gutenberg Editor
 */

function gb_add_meta_box() {

	add_meta_box(
		'gb-meta-box',
		__( 'GB Meta Box', 'text-domain' ),
        'gb_meta_box_callback',
        'post'
    );

}
add_action( 'add_meta_boxes', 'gb_add_meta_box' );

function gb_meta_box_callback( $post ) {

	// Add a nonce field so we can check for it later.
	wp_nonce_field( 'gb_meta_box_nonce', 'gb_meta_box_nonce' );

	$name  = get_post_meta( $post->ID, '_gb_metabox_name', true );
	$email = get_post_meta( $post->ID, '_gb_metabox_email', true );

	?>

	<p>
		<label>
			Name:
			</label>
			<input type=“text” name=“_gb_metabox_name” value='<?php echo esc_attr( $name ); ?>' />
	</p>

	<p>
		<label>
			Email:
			</label>
			<input type=“email” name=“_gb_metabox_email” value='<?php echo esc_attr( $email ); ?>' />
	</p>

	<?php
}

/**
 * When the post is saved, saves our custom data.
 *
 * @param int $post_id
 */
function save_gb_meta_box_data( $post_id ) {

	// If this is an autosave, our form has not been submitted, so we don't want to do anything.
	if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
		return;
	}

	// Check if our nonce is set.
	if ( ! isset( $_POST['gb_meta_box_nonce'] ) ) {
		return;
	}

	// Verify that the nonce is valid.
	if ( ! wp_verify_nonce( $_POST['gb_meta_box_nonce'], 'gb_meta_box_nonce' ) ) {
		return;
	}

	if ( ! current_user_can( 'edit_post', $post_id ) ) {
		return;
	}

	/* OK, it's safe for us to save the data now. */

	// Make sure that it is set.
	if ( empty( $_POST['_gb_metabox_email'] ) ) {
		delete_post_meta( $post_id, '_gb_metabox_email' );
	} else {
		update_post_meta( $post_id, '_gb_metabox_email', sanitize_text_field( $_POST['_gb_metabox_email'] ) );
	}

	// Make sure that it is set.
	if ( empty( $_POST['_gb_metabox_name'] ) ) {
		delete_post_meta( $post_id, '_gb_metabox_name' );
	} else {
		update_post_meta( $post_id, '_gb_metabox_name', sanitize_text_field( $_POST['_gb_metabox_name'] ) );
	}

}
add_action( 'save_post_post', 'save_gb_meta_box_data' );