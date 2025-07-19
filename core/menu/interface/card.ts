import { Ionicons } from "@expo/vector-icons";

export interface Card{
    titulo: string;
    descripcion: string;
    icon: keyof typeof Ionicons.glyphMap
}