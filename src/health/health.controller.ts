import { Controller, Get } from '@nestjs/common';
import {
  HealthCheck,
  HealthCheckService,
  HttpHealthIndicator,
} from '@nestjs/terminus';

// Ce contrôleur gère les endpoints de santé de l'application
// Il permet de vérifier si l'application et ses dépendances fonctionnent correctement
@Controller('health')
export class HealthController {
  constructor(
    // HealthCheckService: Service fourni par Terminus pour effectuer les vérifications de santé
    private health: HealthCheckService,
    // HttpHealthIndicator: Permet de vérifier la santé des dépendances HTTP
    private http: HttpHealthIndicator,
  ) {}

  // Endpoint GET /health qui renvoie l'état de santé de l'application
  @Get()
  // Décorateur qui indique que cette méthode est un point de contrôle de santé
  @HealthCheck()
  check() {
    // Exécute les vérifications de santé configurées
    // Actuellement vide [], mais peut inclure des vérifications de :
    // - Base de données
    // - Services externes
    // - Espace disque
    // - Mémoire
    // etc.
    return this.health.check([]);
  }
}
