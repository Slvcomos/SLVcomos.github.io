/*
3DHOP - 3D Heritage Online Presenter
Copyright (c) 2014-2018, Visual Computing Lab, ISTI - CNR
All rights reserved.    

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

/*BOOKMARKS TOOLBAR*/
function initbookmarksToolbar() {
	var id, ismousedown;
	var button = 0;

	$('#bookmarksToolbar img')
		.mouseenter(function(e) {
			id = $(this).attr('id');
			if(!ismousedown) $(this).css("opacity","0.8");
			else $(this).css("opacity","1.0");
		})
		.mouseout(function(e) {
			$(this).css("opacity","0.5");
		})
		.mousedown(function(e) {
			id = $(this).attr('id');
			ismousedown = true;
			if(e.button==button){
				actionsToolbar(id);
				$(this).css("opacity","1.0");
				button=0;
			}
		})
		.mouseup(function(e) {
			ismousedown = false;
			if(e.button==button){
				$(this).css("opacity","0.8");
				button=0;
			}
		})
		.on('touchstart', function(e) { 
			button=2;
		})
		.on('touchend', function(e) {
			button=0;
		});

	$('#3dhop')
		.on('touchstart pointerdown', function(e) {
			$('#bookmarksToolbar img').css("opacity","0.5");	/*BOOKMARKS TOOLBAR*/
		})
		.on('touchmove', function(e) {
			$('#bookmarksToolbar img').css("opacity","0.5");	/*BOOKMARKS TOOLBAR*/
		});

	$('#draw-canvas')
		.on('touchstart pointerdown', function(e) {
			$('#bookmarksToolbar img').css("opacity","0.5");	/*BOOKMARKS TOOLBAR*/
		})
		.mousedown(function(e) { 
			$('#bookmarksToolbar img').css("opacity","0.5");	/*BOOKMARKS TOOLBAR*/
		});

}

/*BOOKMARKS TOOLBAR*/
function moveBookmarksToolbar(l,t) {
  $('#bookmarksToolbar').css('left', l);
  $('#bookmarksToolbar').css('top', t);
}
