const global_get_screen_size = Global.GetScreenSize, global_choked_commands = Globals.ChokedCommands, global_realtime = Globals.Realtime, global_frametime = Globals.Frametime, global_curtime = Globals.Curtime, global_tick_interval = Globals.TickInterval, global_tickrate = Globals.Tickrate, global_tickcount = Globals.Tickcount, global_frame_stage = Globals.FrameStage, ui_get_menu_position = UI.GetMenuPosition, ui_update_list = UI.UpdateList, ui_remove_item = UI.RemoveItem, ui_get_hotkey = UI.GetHotkey, ui_set_hotkey_state = UI.SetHotkeyState, ui_get_hotkey_state = UI.GetHotkeyState, ui_toggle_hotkey = UI.ToggleHotkey, ui_set_color = UI.SetColor, ui_add_sub_tab = UI.AddSubTab, ui_add_textbox = UI.AddTextbox, ui_add_color_picker = UI.AddColorPicker, ui_add_multi_dropdown = UI.AddMultiDropdown, ui_add_dropdown = UI.AddDropdown, ui_add_hotkey = UI.AddHotkey, ui_add_slider_float = UI.AddSliderFloat, ui_add_slider_int = UI.AddSliderInt, ui_add_checkbox = UI.AddCheckbox, ui_set_value = UI.SetValue, ui_get_children = UI.GetChildren, ui_get_value = UI.GetValue, ui_get_string = UI.GetString, ui_get_color = UI.GetColor, ui_is_menu_open = UI.IsMenuOpen, ui_set_enabled = UI.SetEnabled, entity_draw_flag = Entity.DrawFlag, entity_get_ccs_weapon_info = Entity.GetCCSWeaponInfo, entity_get_render_box = Entity.GetRenderBox, entity_get_weapons = Entity.GetWeapons, entity_get_entities_by_class_id = Entity.GetEntitiesByClassID, entity_get_hitbox_position = Entity.GetHitboxPosition, entity_get_eye_position = Entity.GeteyePosition, entity_get_game_rules_proxy = Entity.GetGameRulesProxy, entity_is_bot = Entity.IsBot, entity_get_weapon = Entity.GetWeapon, entity_set_prop = Entity.SetProp, entity_get_prop = Entity.GetProp, entity_get_render_origin = Entity.GetRenderOrigin, entity_get_name = Entity.GetName, entity_get_class_name = Entity.GetClassName, entity_get_class_id = Entity.GetClassID, entity_is_dormant = Entity.IsDormant, entity_is_alive = Entity.IsAlive, entity_is_valid = Entity.IsValid, entity_is_local_player = Entity.IsLocalPlayer, entity_is_enemy = Entity.IsEnemy, entity_is_teammate = Entity.IsTeammate, entity_get_entity_from_user_id = Entity.GetEntityFromUserID, entity_get_local_player = Entity.GetLocalPlayer, entity_get_teammates = Entity.GetTeammates, entity_get_enemies = Entity.GetEnemies, entity_get_players = Entity.GetPlayers, entity_get_entities = Entity.GetEntities, render_text_size = Render.TextSize, render_string = Render.String, render_filled_circle = Render.FilledCircle, render_textured_rect = Render.TexturedRect, render_add_texture = Render.AddTexture, render_find_font = Render.FindFont, render_add_font = Render.AddFont, render_polygon = Render.Polygon, render_gradient_rect = Render.GradientRect, render_get_screen_size = Render.GetScreenSize, render_world_to_screen = Render.WorldToScreen, render_circle = Render.Circle, render_filled_rect = Render.FilledRect, render_rect = Render.Rect, render_line = Render.Line, convar_set_string = Convar.SetString, convar_get_string = Convar.GetString, convar_set_float = Convar.SetFloat, convar_get_float = Convar.GetFloat, convar_set_int = Convar.SetInt, convar_get_int = Convar.GetInt, event_get_string = Event.GetString, event_get_float = Event.GetFloat, event_get_int = Event.GetInt, trace_raw_line = Trace.RawLine, trace_smoke = Trace.Smoke, trace_bullet = Trace.Bullet, trace_line = Trace.Line, usercmd_get_movement = UserCMD.GetMovement, usercmd_set_view_angles = UserCMD.SetViewAngles, usercmd_send = UserCMD.Send, usercmd_choke = UserCMD.Choke, usercmd_set_buttons = UserCMD.SetButtons, usercmd_get_buttons = UserCMD.GetButtons, usercmd_set_movement = UserCMD.SetMovement, sound_stop_microphone = Sound.StopMicrophone, sound_play_microphone = Sound.PlayMicrophone, sound_play = Sound.Play, local_get_inaccuracy = Local.GetInaccuracy, local_get_spread = Local.GetSpread, local_get_fake_yaw = Local.GetFakeYaw, local_get_real_yaw = Local.GetRealYaw, local_set_clan_tag = Local.SetClanTag, local_set_view_angles = Local.SetViewAngles, local_get_view_angles = Local.GetViewAngles, local_latency = Local.Latency, cheat_is_legit_config_active = Cheat.IsLegitConfigActive, cheat_is_rage_config_active = Cheat.IsRageConfigActive, cheat_get_username = Cheat.GetUsername, cheat_print_chat = Cheat.PrintChat, cheat_register_callback = Cheat.RegisterCallback, cheat_execute_command = Cheat.ExecuteCommand, cheat_print_color = Cheat.PrintColor, cheat_print = Cheat.Print, input_force_cursor = Input.ForceCursor, input_get_cursor_position = Input.GetCursorPosition, input_is_key_pressed = Input.IsKeyPressed, world_get_server_string = World.GetServerString, world_get_map_name = World.GetMapName, antiaim_set_lby_offset = AntiAim.SetLBYOffset, antiaim_set_real_offset = AntiAim.SetRealOffset, antiaim_set_fake_offset = AntiAim.SetFakeOffset, antiaim_get_override = AntiAim.GetOverride, antiaim_set_override = AntiAim.SetOverride, exploit_override_tolerance = Exploit.OverrideTolerance, exploit_override_shift = Exploit.OverrideShift, exploit_override_ticks = Exploit.OverrideMaxProcessTicks, exploit_enable_recharge = Exploit.EnableRecharge, exploit_disable_recharge = Exploit.DisableRecharge, exploit_recharge = Exploit.Recharge, exploit_get_charge = Exploit.GetCharge, ragebot_get_targets = Ragebot.GetTargets, ragebot_ignore_target = Ragebot.IgnoreTarget, ragebot_force_hitbox_safety = Ragebot.ForceHitboxSafety, ragebot_force_target_minimum_damage = Ragebot.ForceTargetMinimumDamage, ragebot_force_target_hitchance = Ragebot.ForceTargetHitchance, ragebot_force_target_safety = Ragebot.ForceTargetSafety, ragebot_force_target = Ragebot.ForceTarget, ragebot_get_target = Ragebot.GetTarget, material_refresh = Material.Refresh, material_set_key_value = Material.SetKeyValue, material_get = Material.Get, material_destroy = Material.Destroy, material_create = Material.Create, global_lul = Global.GetUsername;

ui_add_hotkey(["Rage", "Anti Aim", "General", "Key assignment"], "Legit AA", "Legit AA")

const setvalaa1 = function(name, value){
    return ui_set_value(["Rage", "Anti Aim", "General", name], value);
}

const getvalaa1 = function(name){
    return ui_get_value(["Rage", "Anti Aim", "General", name]);
}
const getvalaa1key = function(name){
    return ui_get_value(["Rage", "Anti Aim", "General", "Key assignment", name]);
}

const setvalaa2 = function(name, value){
    return ui_set_value(["Rage", "Anti Aim", "Directions", name], value);
}
const getvalaa2 = function(name){
    return ui_get_value(["Rage", "Anti Aim", "Directions", name]);
}

const setvalaa3 = function(name, value){
    return ui_set_value(["Rage", "Anti Aim", "Directions", name], value);
}
const getvalaa3 = function(name){
    return ui_get_value(["Rage", "Anti Aim", "Directions", name]);
}


const time = global_realtime();

var is_defusing = false;

var original_aa = true;

var E = false;



function onDraw( ) {

    var defusing = entity_get_prop(entity_get_local_player(), "CCSPlayer", "m_bIsDefusing")

    var holding = entity_get_weapon(entity_get_local_player()) == 116;

    var planted = entity_get_entities_by_class_id(128);

    if(!planted) {

        onReset()

    }

    var buttons = usercmd_get_buttons();

    if(!is_defusing && getvalaa1key("Legit AA"))

    {

        if (original_aa)

        {

            restrictions_cache = ui_get_value(["Config", "Cheat", "General", "Restrictions"]);

            yaw_offset_cache = getvalaa2("Yaw offset");

            jitter_offset_cache = getvalaa2("Jitter offset");

            pitch_cache = getvalaa1("Pitch mode");

            at_tar = getvalaa2("At targets");

            original_aa = false;

        }

        ui_set_value(["Config", "Cheat", "General", "Restrictions"], 0);

        setvalaa2("Yaw offset", 180);

        setvalaa2("Jitter offset", 0);

        setvalaa1("Pitch mode", 0);

        setvalaa2("At targets", 0);

        
        
        E = false;
        
        if(Globals.Realtime() >= time + 0.2){
        
            if(E == false){
        
                Cheat.ExecuteCommand("+use");
        
                E = true;
        
            }
            if(E == true){
        
                Cheat.ExecuteCommand("-use");
        
            }
        
        }else{
        
            if(E == true){
        
                Cheat.ExecuteCommand("-use");
        
                E = false;
        
            }
        }
        
        
        time = Globals.Realtime();
    }

    
    else
    
    {
    
        if (!original_aa)
    
        {
    
            ui_set_value(["Config", "Cheat", "General", "Restrictions"], restrictions_cache);
    
            setvalaa2("Yaw offset", yaw_offset_cache);
    
            setvalaa2("Jitter offset", jitter_offset_cache);
    
            setvalaa1("Pitch mode", pitch_cache);
    
            setvalaa2("At targets", at_tar)
    
            original_aa = true;
    
            is_defusing = false;
    
        }
    
    }
}



function onDefuse( ) {

    const userid = entity_get_entities_by_class_id( event_get_int( "userid" ) );


    
    if ( Entity.IsLocalPlayer( userid ) )
    
    is_defusing = true;
}




function onReset( ) {

    is_defusing = false;

}

//
Local.SetClanTag("Genesis")

var username = Cheat.GetUsername();

uidnow = Cheat.GetUsername();
//

UI.AddSubTab(["Config", "SUBTAB_MGR"], "Genesis");

UI.AddCheckbox(["Config", "Genesis", "Genesis"], "Genesis");

UI.AddDropdown(["Config", "Genesis", "Genesis"], "Fakelag Optimization", ["Jitter Fakelag", "Random Fakelag"], 0)

UI.AddSliderInt(["Config", "Genesis", "Genesis"], "Fakelag Option 1", 0, 14);

UI.AddSliderInt(["Config", "Genesis", "Genesis"], "Fakelag Option 2", 0, 14);

UI.AddDropdown(["Config", "Genesis", "Genesis"], "Dynamic", ["Disabled", "Dynamic Depending on Weapon and HP", "Switch Modes On Ragebot Fire", "Switch Modes On Enemy Hit", "Switch on Local Hurt", "Switch Modes on Round End"], 0)

UI.AddDropdown(["Config", "Genesis", "Genesis"], "Anti Aim Modes", ["Wide Jitter", "Slow Wide Jitter", "Low Delta Jitter", "Random Jitter", "Random Low Delta", "Side Jitter", "Low Delta Side Jitter", "Static", "Low Delta Static"], 0)



function CreateMove() {


    if (UI.GetValue(["Config", "Genesis", "Genesis", "Genesis"])) {


        
        const name = Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()));


        
        
        var modes1 = UI.GetValue(["Config", "Genesis", "Genesis", "Dynamic"])
        
        var myhp = Entity.GetProp(Entity.GetLocalPlayer(), "CCSPlayer", "m_iHealth")
        
        if (UI.GetValue(["Config", "Genesis", "Genesis", "Dynamic"]) == 1) {
        
            if (name == "ssg 08" && myhp > 50) {
        
                UI.SetValue(["Config", "Genesis", "Genesis", "Anti Aim Modes"], 1)
        
            } else if (name == "ssg 08" && myhp < 50) {
        
                UI.SetValue(["Config", "Genesis", "Genesis", "Anti Aim Modes"], 3)
        
            }
        
        }
        
        if (UI.GetValue(["Config", "Genesis", "Genesis", "Dynamic"]) == 1) {
        
            if (name == "scar20" && myhp > 50 || name == "g3sg1" && myhp > 50) {
        
                UI.SetValue(["Config", "Genesis", "Genesis", "Anti Aim Modes"], 3)
        
            } else if (name == "scar20" && myhp < 50 || name == "g3sg1" && myhp < 50) {
        
                UI.SetValue(["Config", "Genesis", "Genesis", "Anti Aim Modes"], 5)
        
            }
        
        }

        
        if (UI.GetValue(["Config", "Genesis", "Genesis", "Dynamic"]) == 1) {
        
            if (name == "r8 revolver" && myhp > 50) {
        
                UI.SetValue(["Config", "Genesis", "Genesis", "Anti Aim Modes"], 4)
        
            } else if (name == "r8 revolver" && myhp < 50) {
        
                UI.SetValue(["Config", "Genesis", "Genesis", "Anti Aim Modes"], 6)
        
            }
        
        }
        
        if (UI.GetValue(["Config", "Genesis", "Genesis", "Dynamic"]) == 1) {
        
            if (name == "awp" && myhp > 50) {
        
                UI.SetValue(["Config", "Genesis", "Genesis", "Anti Aim Modes"], 3)
        
            } else if (name == "awp" && myhp < 50) {
        
                UI.SetValue(["Config", "Genesis", "Genesis", "Anti Aim Modes"], 8)
        
            }
        
        }
        
        fl1 = UI.GetValue(["Config", "Genesis", "Genesis", "Fakelag Option 1"])
        
        fl2 = UI.GetValue(["Config", "Genesis", "Genesis", "Fakelag Option 2"])
        
        if (UI.GetValue(["Config", "Genesis", "Genesis", "Fakelag Optimization"]) == 0) {
        
            if (Globals.Tickcount() % 16 < 8) {
        
                UI.SetValue(["Fake Lag", "General", "Limit"], fl1)
        
            } else {
        
                UI.SetValue(["Fake Lag", "General", "Limit"], fl2)
        
            }
        
        }
        if (UI.GetValue(["Config", "Genesis", "Genesis", "Fakelag Optimization"]) == 1) {
        
            if (Globals.Tickcount() % 32 < 16) {
        
                UI.SetValue(["Fake Lag", "General", "Limit"], Math.random() * (fl1 - fl2) + fl2)
        
            }
        
        }


        
        if (UI.GetValue(["Rage","Anti Aim", "General", "Key assignment", "AA Direction inverter", ]) == 0) {
        
            if (UI.GetValue(["Config", "Genesis", "Genesis", "Anti Aim Modes"]) == 0) {
        
                if (Globals.Tickcount() % 4 < 2) {
        
                    AntiAim.SetOverride(1)
        
                    AntiAim.SetRealOffset(-58)
        
                    AntiAim.SetFakeOffset(-5);
        
                } else {
        
                    AntiAim.SetRealOffset(58)
                    AntiAim.SetFakeOffset(-5);
        
                }
        
            }
        
            if (UI.GetValue(["Config", "Genesis", "Genesis", "Anti Aim Modes"]) == 1) {
        
                if (Globals.Tickcount() % 14 < 7) {
        
                    AntiAim.SetOverride(1)
        
                    AntiAim.SetRealOffset(-58)
        
                    AntiAim.SetFakeOffset(10);
        
                } else {
        
                    AntiAim.SetRealOffset(58)
                    AntiAim.SetFakeOffset(-10);
        
                }
        
        
            }
        
            if (UI.GetValue(["Config", "Genesis", "Genesis", "Anti Aim Modes"]) == 2) {
        
                if (Globals.Tickcount() % 4 < 2) {
        
                    AntiAim.SetOverride(1)
        
                    AntiAim.SetRealOffset(-25)
        
                    AntiAim.SetFakeOffset(-5);
        
                } else {
        
                    AntiAim.SetRealOffset(30)
        
                    AntiAim.SetFakeOffset(-5);
        
                }
            }
        
        
            if (UI.GetValue(["Config", "Genesis", "Genesis", "Anti Aim Modes"]) == 3) {
                if (Globals.Tickcount() % 4 < 2) {
        
                    AntiAim.SetOverride(1)
                    AntiAim.SetRealOffset(Math.random() * (58 - -58) + -58)
        
                    AntiAim.SetFakeOffset(-5);
                } else {
        
                    AntiAim.SetRealOffset(Math.random() * (58 - -58) + -58)
        
                    AntiAim.SetFakeOffset(-5);
        
                }
            }
        
            if (UI.GetValue(["Config", "Genesis", "Genesis", "Anti Aim Modes"]) == 4) {
        
                if (Globals.Tickcount() % 4 < 2) {
        
                    AntiAim.SetOverride(1)
                    AntiAim.SetRealOffset(Math.random() * (25 - -25) + -25)
        
        
                    AntiAim.SetFakeOffset(-5);
                } else {
        
                    AntiAim.SetRealOffset(Math.random() * (35 - -35) + -30)
        
                    AntiAim.SetFakeOffset(-5);
                }
        
            }
            if (UI.GetValue(["Config", "Genesis", "Genesis", "Anti Aim Modes"]) == 5) {
        
                if (Globals.Tickcount() % 4 < 2) {
                    AntiAim.SetOverride(1)
                    AntiAim.SetRealOffset(-45)
        
                    AntiAim.SetFakeOffset(-5);
                } else {
        
                    AntiAim.SetRealOffset(-58)
                    AntiAim.SetFakeOffset(-5);
        
                }
            }
        
            if (UI.GetValue(["Config", "Genesis", "Genesis", "Anti Aim Modes"]) == 6) {
        
                if (Globals.Tickcount() % 4 < 2) {
        
                    AntiAim.SetOverride(1)
                    AntiAim.SetRealOffset(-20)
        
                    AntiAim.SetFakeOffset(-5);
                } else {
        
                    AntiAim.SetRealOffset(-30)
        
                    AntiAim.SetFakeOffset(-5);
        
                }
            }
        
            if (UI.GetValue(["Config", "Genesis", "Genesis", "Anti Aim Modes"]) == 7) {
                if (Globals.Tickcount() % 4 < 2) {
        
                    AntiAim.SetOverride(1)
                    AntiAim.SetRealOffset(-58)
        
                    AntiAim.SetFakeOffset(-10);
        
                } else {
        
                    AntiAim.SetRealOffset(-58)
                    AntiAim.SetFakeOffset(-10);
        
                }
            }
        
            if (UI.GetValue(["Config", "Genesis", "Genesis", "Anti Aim Modes"]) == 8) {
                if (Globals.Tickcount() % 4 < 2) {
        
                    AntiAim.SetOverride(1)
        
                    AntiAim.SetRealOffset(-30)
                    AntiAim.SetFakeOffset(-10);
        
                } else {
                    AntiAim.SetRealOffset(-30)
        
                    AntiAim.SetFakeOffset(-10);
        
                }
            }
        
        }
        
        if (UI.GetValue(["Rage","Anti Aim", "General", "Key assignment", "AA Direction inverter", ]) == 1) {
        
            if (UI.GetValue(["Config", "Genesis", "Genesis", "Anti Aim Modes"]) == 0) {
        
                if (Globals.Tickcount() % 4 < 2) {
        
                    AntiAim.SetOverride(1)
                    AntiAim.SetRealOffset(58)
        
                    AntiAim.SetFakeOffset(5);
        
                } else {
        
                    AntiAim.SetRealOffset(-58)
        
                    AntiAim.SetFakeOffset(5);
        
                }
        
            }
            if (UI.GetValue(["Config", "Genesis", "Genesis", "Anti Aim Modes"]) == 1) {
        
                if (Globals.Tickcount() % 14 < 7) {
        
                    AntiAim.SetOverride(1)
                    AntiAim.SetRealOffset(58)
        
                    AntiAim.SetFakeOffset(-10);
        
                } else {
        
                    AntiAim.SetRealOffset(-58)
        
                    AntiAim.SetFakeOffset(10);
        
                }
        
            }
        
            if (UI.GetValue(["Config", "Genesis", "Genesis", "Anti Aim Modes"]) == 2) {
        
                if (Globals.Tickcount() % 4 < 2) {
        
                    AntiAim.SetOverride(1)
        
                    AntiAim.SetRealOffset(25)
                    AntiAim.SetFakeOffset(5);
        
                } else {
        
                    AntiAim.SetRealOffset(-30)
        
                    AntiAim.SetFakeOffset(5);
        
                }
        
        
            }
            if (UI.GetValue(["Config", "Genesis", "Genesis", "Anti Aim Modes"]) == 3) {
                if (Globals.Tickcount() % 4 < 2) {
        
                    AntiAim.SetOverride(1)
        
                    AntiAim.SetRealOffset(Math.random() * (58 - -58) + -58)
        
                    AntiAim.SetFakeOffset(5);
                } else {
        
                    AntiAim.SetRealOffset(Math.random() * (58 - -58) + -58)
                    AntiAim.SetFakeOffset(5);
        
                }
            }
            if (UI.GetValue(["Config", "Genesis", "Genesis", "Anti Aim Modes"]) == 4) {
        
                if (Globals.Tickcount() % 4 < 2) {
        
                    AntiAim.SetOverride(1)
        
                    AntiAim.SetRealOffset(Math.random() * (25 - -25) + -25)
        
                    AntiAim.SetFakeOffset(5);
        
                } else {
        
                    AntiAim.SetRealOffset(Math.random() * (35 - -35) + -30)
        
                    AntiAim.SetFakeOffset(5);
                }
        
            }
            if (UI.GetValue(["Config", "Genesis", "Genesis", "Anti Aim Modes"]) == 5) {
        
                if (Globals.Tickcount() % 4 < 2) {
                    AntiAim.SetOverride(1)
        
                    AntiAim.SetRealOffset(45)
                    AntiAim.SetFakeOffset(5);
        
                } else {
                    AntiAim.SetRealOffset(58)
        
                    AntiAim.SetFakeOffset(5);
                }
        
            }
        
            if (UI.GetValue(["Config", "Genesis", "Genesis", "Anti Aim Modes"]) == 6) {
                if (Globals.Tickcount() % 4 < 2) {
        

                    AntiAim.SetOverride(1)

                    AntiAim.SetRealOffset(25)
        
                    AntiAim.SetFakeOffset(5);
                } else {
        
                    AntiAim.SetRealOffset(25)

                    AntiAim.SetFakeOffset(5);
        
                }
            }
        
            if (UI.GetValue(["Config", "Genesis", "Genesis", "Anti Aim Modes"]) == 7) {
                if (Globals.Tickcount() % 4 < 2) {
        
                    AntiAim.SetOverride(1)
                    AntiAim.SetRealOffset(58)
        
                    AntiAim.SetFakeOffset(10);
                } else {
        
                    AntiAim.SetRealOffset(58)
                    AntiAim.SetFakeOffset(10);
        
                }
        
            }
        
            if (UI.GetValue(["Config", "Genesis", "Genesis", "Anti Aim Modes"]) == 8) {
                if (Globals.Tickcount() % 4 < 2) {
        
                    AntiAim.SetOverride(1)
                    AntiAim.SetRealOffset(20)
        
                    AntiAim.SetFakeOffset(10);
                } else {
        
                    AntiAim.SetRealOffset(20)
        
                    AntiAim.SetFakeOffset(10);
                }
        
            }
        
        }
    }

}




function rb_fire() {

    if (UI.GetValue(["Config", "Genesis", "Genesis", "Dynamic"]) == 2)

    if (Entity.GetLocalPlayer()) {

        UI.SetValue(["Config", "Genesis", "Genesis", "Anti Aim Modes"], Math.random() * (0 - 9) + 9)

    }

}

function player_hurt() {

    hurtplayer = Entity.GetEntityFromUserID(Event.GetInt("userid"));

    attacker = Entity.GetEntityFromUserID(Event.GetInt("attacker"));

    if (UI.GetValue(["Config", "Genesis", "Genesis", "Dynamic"]) == 3) {
        if (attacker == Entity.GetLocalPlayer()) {

            UI.SetValue(["Config", "Genesis", "Genesis", "Anti Aim Modes"], Math.random() * (0 - 9) + 9)
        }

    }
    if (UI.GetValue(["Config", "Genesis", "Genesis", "Dynamic"]) == 4) {

        if (hurtplayer == Entity.GetLocalPlayer()) {


            UI.SetValue(["Config", "Genesis", "Genesis", "Anti Aim Modes"], Math.random() * (0 - 9) + 9)

        }
    }

}


function aaswitchonre() {

    if (UI.GetValue(["Config", "Genesis", "Genesis", "Dynamic"]) == 5) {
      UI.SetValue(["Config", "Genesis", "Genesis", "Anti Aim Modes"], Math.random() * (0 - 9) + 9)

    }

}

Cheat.Print(username);

Cheat.PrintColor( [ 255, 150, 150, 255 ], " \n " + "Welcome: ");

Cheat.PrintColor( [ 155, 250, 150, 255 ], " | Genesis qq3317298263");

Cheat.PrintColor( [ 255, 150, 150, 255 ], " hopes you enjoy Genesis Config :)");

//

Array.prototype.in_array = function (element) {
for (var i = 0; i < this.length; i++) {

    if (this[i] == element) {

        return true;

    }
    } return false;

}

var arr = ["3317298263","kdn201890","yuerabab520","ljnb2173169607","ConsuKu","2607954522","2226331996","Xread","ak2901","1874016727","FIXgodhvh","yuerabab1314","BreakAleg","super123","FOXTHEKAMI2","csgodanke","shenhongqin","1730111795","3099037220","chengxi","knight3150498312","17798437548","xiaba77","2356103677","huangjienie","wangzichen","2733637547","550936979","redbird","zhxfdl","huangmou8888"];

function comicSans()

{
if (arr.in_array(uidnow) == false) {

    Cheat.ExecuteCommand("quit");

    }


}

//

UI.AddHotkey(["Config", "SUBTAB_MGR", "Scripts", "SHEET_MGR", "Keys", "JS Keybinds"], "Fake Duck", "Fake Duck");

var crouchHeight;

function FakeDuck() {

    var cmd = UserCMD.GetButtons();

    if(UI.GetValue(["Config", "SUBTAB_MGR", "Scripts", "SHEET_MGR", "Keys", "JS Keybinds", "Fake Duck"])) {

        var entityStuff = Entity.GetProp(Entity.GetLocalPlayer(), "CCSPlayer", "m_flDuckAmount");

        if(UserCMD.Choke(), entityStuff <= .28) {

            crouchHeight = !0

        }

        if(entityStuff >= .8 && (crouchHeight = !1, UserCMD.Send()), crouchHeight) {

            UserCMD.SetButtons(4 | cmd)

        } else UserCMD.SetButtons(cmd | 1 << 22)

    } else {
        UserCMD.SetButtons(cmd | 1 << 22)

    }

}

//

{

    Cheat.PrintChat(" \x08[\x09Genesis\x08] \x06Genesis's Js加载完成");

    Cheat.PrintChat(" \x08[\x09Genesis\x08] \x06Config By Genesis");

    Cheat.PrintChat(" \x08[\x09Genesis\x08] \x06GenesisQQ:\x073317298263");

    Cheat.PrintChat(" \x08[\x09Genesis\x08] \x06MyDiscord:\x07Genesis#8430");

    Cheat.PrintChat(" \x08[\x09Genesis\x08] \x06Bilibili:\x07Geneisss");

}

//

UI.AddCheckbox(["Misc.", "Helpers", "General" ], "Buy Logs", "");

function BuyLogs(){

    if(UI.GetValue(["Misc.", "Helpers", "General", "Buy Logs"])) {

        var ent = Entity.GetEntityFromUserID(Event.GetInt('userid'))

        var team = Event.GetInt('team')

        if (team != Entity.GetProp(Entity.GetLocalPlayer(), "CBaseEntity", "m_iTeamNum")) {

            var item = Event.GetString('weapon')

            item = item.replace("weapon_", "")

            item = item.replace("item_", "")

            item = item.replace("assaultsuit", "kevlar + helmet")

            item = item.replace("incgrenade", "molotov")


            if (item != "unknown") {


                var name = Entity.GetName(ent)


                Global.PrintChat(" \x01[\x02Genesis\x01] \x06" + name + " \x01 购买 \x04" + item + " \n");}

            }
        }

        }

        Global.RegisterCallback("item_purchase", "BuyLogs");

        //
UI.AddSliderFloat(["Config", "Genesis", "Genesis"], "Aspect Ratio", 0.0, 5.0);

function aspectratio( ) 

{

    menu_val = UI.GetValue(["Config", "Genesis", "Genesis", "Aspect Ratio"] );

    string_menu_val = menu_val.toString();

    Convar.SetString ("r_aspectratio", string_menu_val );

}

//

UI.AddHotkey(["Config", "Scripts", "Keys", "JS Keybinds"], "OverRide", "OverRide")

UI.AddColorPicker(["Config", "Genesis", "Genesis"],"Predicted damage");

UI.AddCheckbox(["Config", "Genesis", "Genesis"], "Minimum DamageOver ride");

UI.AddSliderInt(["Config", "Genesis", "Genesis"], "Min damage", 0, 100);



function Min_dam_main() {

    if (!UI.GetValue(["Config", "Genesis", "Genesis", "Minimum DamageOver ride"])) {

        return

    };
    var Dam = UI.GetValue(["Config", "Scripts", "Keys", "JS Keybinds", "OverRide"])

    if (Dam == 1) {

        enemies = Entity.GetEnemies();

        for ( i = 0; i < enemies.length; i++){

            value = UI.GetValue(["Config", "Genesis", "Genesis", "Min damage"]);

            Ragebot.ForceTargetMinimumDamage(enemies[i], value);

        }

    }
}

function Min_dam_alt(){

    var weaponTabNames = {

        "usp s": "USP", "glock 18": "Glock", "dual berettas": "Dualies", "r8 revolver": "Revolver", "desert eagle": "Deagle", "p250": "P250", "tec 9": "Tec-9",

        "mp9": "MP9", "mac 10": "Mac10", "pp bizon": "PP-Bizon", "ump 45": "UMP45", "ak 47": "AK47", "sg 553": "SG553", "aug": "AUG", "m4a1 s": "M4A1-S", "m4a4": "M4A4", "ssg 08": "SSG08",

        "awp": "AWP", "g3sg1": "G3SG1", "scar 20": "SCAR20", "xm1014": "XM1014", "mag 7": "MAG7", "m249": "M249", "negev": "Negev", "p2000": "P2000", "famas": "FAMAS", "five seven": "Five Seven", "mp7": "MP7",

        "ump 45": "UMP45", "p90": "P90", "cz75 auto": "CZ-75", "mp5 sd": "MP5", "galil ar": "GALIL", "sawed off": "Sawed off"

    };

    var screen_size = Global.GetScreenSize();

    var selectedcp = UI.GetColor(["Config", "Genesis", "Genesis","Predicted damage"]);

    var font = Render.GetFont( "Arialbd.ttf", 14, true);

    if (UI.GetValue(["Config", "Genesis", "Genesis", "Minimum DamageOver ride"])){

        UI.SetEnabled(["Config", "Genesis", "Genesis", "Min damage"], 1)

    }else{

        UI.SetEnabled(["Config", "Genesis", "Genesis", "Min damage"], 0)

    }

    var Dam = UI.GetValue(["Config", "Genesis", "Genesis", "Min damage"]);

    var weaponName = Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))

    if(weaponTabNames[weaponName] != undefined){

        var Current = UI.GetValue(["Rage", "Target", weaponTabNames[weaponName], "Minimum damage"]);


        
        if (UI.GetValue(["Config", "Scripts", "Keys", "JS Keybinds", "OverRide"]) == 1) {
        
            Render.String(screen_size[0] /2+34, screen_size[1] /2 -18, 0,Dam + "", [0, 0, 0, 255], font)
        
            Render.String(screen_size[0] /2+35, screen_size[1] /2 -19, 0,Dam + "", selectedcp, font)
        
        }else{
        
            Render.String(screen_size[0] /2+34, screen_size[1] /2 -18, 0,Current + "", [0, 0, 0, 255], font)
        
            Render.String(screen_size[0] /2+35, screen_size[1] /2 -19, 0,Current + "", selectedcp, font)
        
        }
    }

}

//

UI.AddSliderInt(["Config", "Genesis", "Genesis"],"Speed", 0, 120);

function slow (){

    if (UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Slow walk"]) == 1) {

        var velocity = UI.GetValue(["Config", "Genesis", "Genesis","Speed"]); //THIS IS THE SPEED

        dir = [0, 0, 0];

        if (Input.IsKeyPressed(0x57)) { //W

            dir[0] += velocity;

        }

        if (Input.IsKeyPressed(0x44)) { //S

            dir[1] += velocity;

        }

        if (Input.IsKeyPressed(0x41)) { //A

            dir[1] -= velocity;

        }

        if (Input.IsKeyPressed(0x53)) { //D

            dir[0] -= velocity;

        }

        UserCMD.SetMovement(dir);  

    }


}

Cheat.RegisterCallback("CreateMove", "slow")

Global.RegisterCallback("Draw", "Min_dam_alt");

Cheat.RegisterCallback("CreateMove", "Min_dam_main");

Cheat.RegisterCallback( "FrameStageNotify", "aspectratio" );

Cheat.RegisterCallback("Draw", "comicSans");

Cheat.RegisterCallback("CreateMove", "FakeDuck");

Cheat.RegisterCallback( "CreateMove", "onDraw" );

Cheat.RegisterCallback( "bomb_begindefuse", "onDefuse" );

Cheat.RegisterCallback( "bomb_abortdefuse", "onReset" );

Cheat.RegisterCallback( "round_start", "onReset" );

Cheat.RegisterCallback( "player_connect_full", "onReset" );

Cheat.RegisterCallback("round_end", "aaswitchonre")

Cheat.RegisterCallback("player_hurt", "player_hurt")

Cheat.RegisterCallback("ragebot_fire", "rb_fire")

Cheat.RegisterCallback("CreateMove", "CreateMove");